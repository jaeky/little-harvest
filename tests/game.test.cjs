const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
new vm.Script(fs.readFileSync(path.join(root,'dist/fruit-3d.js'),'utf8'));
const source = fs.readFileSync(path.join(root, 'dist/game.js'), 'utf8');
let now = 10000;
let drawingDepth=0;
const gradient = {addColorStop() {}};
const context = new Proxy({save() {drawingDepth++;},restore() {assert.ok(drawingDepth>0);drawingDepth--;},drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh) {
  assert.ok([sx,sy,sw,sh,dx,dy,dw,dh].every(Number.isFinite));
  const knife=image.src?.includes('knife-v1')||image.src?.includes('lying-fruit')||image.src?.includes('peach-lying');
  assert.ok(sx>=0&&sy>=0&&sx+sw<=(knife?2400:1024)&&sy+sh<=(knife?1600:1536), 'sprite rectangle stays in image');
  assert.ok(dw>0&&dh>0, 'sprite has positive dimensions');
},ellipse(x,y,rx,ry) {
  assert.ok([x,y,rx,ry].every(Number.isFinite), 'finite drawing coordinates');
  assert.ok(rx >= 0 && ry >= 0, 'nonnegative ellipse radii');
}}, {get: (target, key) => target[key] ?? (key.startsWith('create') ? () => gradient : () => {}), set: (target,key,value) => (target[key]=value,true)});
function element() {
  return {children:[], dataset:{}, style:{}, attrs:{}, textContent:'',
    append(child) {this.children.push(child);}, replaceChildren(...children) {this.children=children;},
    setAttribute(key,value) {this.attrs[key]=value;}, removeAttribute(key) {delete this.attrs[key];},
    listeners:{},addEventListener(name,handler) {(this.listeners[name]??=[]).push(handler);},
    setPointerCapture() {}, getContext: () => context,
    getBoundingClientRect: () => ({left:0,top:0,width:720,height:430}),
    querySelectorAll() {return this.children.filter(child => child.dataset?.item);}};
}
const elements = Object.fromEntries(['game','art','hint','tray','targets','stage','sound','title'].map(id => [id,element()]));
const tabs = ['farm','board','blend'].map(tab => Object.assign(element(), {dataset:{tab}}));
class TestImage {complete=true;naturalWidth=1024;}
const sandbox = vm.createContext({Matter:require('../dist/vendor/matter.min.js'),Image:TestImage,document:{querySelector: id => elements[id.slice(1)],querySelectorAll: () => tabs,createElement: element},window:{},navigator:{},performance:{now: () => now},requestAnimationFrame() {}});
vm.runInContext(source, sandbox);
const run = code => vm.runInContext(code, sandbox);
function pointerDrag(el,x,y,sx=360,sy=200) {
  for(const [name,event] of [
    ['pointerdown',{button:0,pointerId:1,clientX:sx,clientY:sy}],
    ['pointermove',{pointerId:1,clientX:x,clientY:y}],
    ['pointerup',{pointerId:1,clientX:x,clientY:y}],
  ]) for(const handler of el.listeners[name]||[])handler(event);
}
for(const key of run('Object.keys(foods)')) {
  run(`farm.seedPage=Math.floor(Object.keys(foods).indexOf('${key}')/3)`);
  run("farm.plots=[null,null,null];open('farm')");
  const packet=elements.tray.children.find(el=>el.dataset.item===key);
  packet.onclick();elements.targets.children.find(el=>el.attrs['aria-label'].startsWith('1번째')).onclick();
  assert.equal(run('farm.plots[0]'),null,'tapping controls never plants a seed');
  pointerDrag(packet,153,240,360,500);
  assert.equal(run('farm.plots[0].food'),key);
  const water=elements.targets.children.find(el=>el.dataset.item==='water');
  pointerDrag(water,153,240,608,365);
  assert.ok(run('farm.plots[0].watered!==null'));
  now+=5201;run('drawFarm(performance.now())');
  const plot=elements.targets.children.find(el=>el.attrs['aria-label'].startsWith('1번째'));
  pointerDrag(plot,680,350,153,200);
  assert.ok(run('farm.plots[0]'),'dropping outside basket returns crop');
  pointerDrag(plot,360,360,153,200);
  assert.equal(run('farm.plots[0]'),null);
  assert.equal(run('farm.harvest.at(-1)'),key);
}
run("farm.plots=[{food:'carrot',watered:null},null,null];open('farm')");
elements.targets.children.find(el=>el.attrs['aria-label']==='2번 밭 선택').onclick();
assert.equal(run('farm.activePlot'),1);
run("dropFarm('berry',{x:360,y:450})");
assert.equal(run('farm.plots[0].food'),'carrot','switching beds retains existing plants');
assert.equal(run('farm.plots[1].food'),'berry','new drop plants in the selected bed');
assert.equal(elements.tray.children.filter(el=>el.dataset.item).length,3,'only three large seed packets share the shelf');
run("farm.activePlot=0;farm.plots=[null,null,null]");
run("open('board')");
run(`const originalEmptyHint=drawEmptyPlotHint;let emptyHintCount=0;
  drawEmptyPlotHint=(...args)=>{emptyHintCount++;originalEmptyHint(...args);};
  open('farm');farm.activePlot=0;farm.plots=[null,null,null];emptyHintCount=0;drawFarm(performance.now());`);
assert.equal(run('emptyHintCount'),1,'empty soil shows dashed drop and hand guidance');
run(`farm.plots[0]={food:'carrot',watered:null};emptyHintCount=0;drawFarm(performance.now());`);
assert.equal(run('emptyHintCount'),0,'planted soil never shows the empty-bed guide');
run(`farm.plots=[null,null,null];open('board');`);
assert.equal(run('seedGuidePoint({x:10,y:100},{x:50,y:20},0).y'),100,'guide starts on a real seed packet');
assert.equal(run('seedGuidePoint({x:10,y:100},{x:50,y:20},2700).y'),20,'guide ends on soil');
assert.ok(run('seedGuidePoint({x:10,y:100},{x:50,y:20},3500).opacity===0'),'guide fades before repeating');
assert.equal(run('Object.keys(foods).length'), 12);
assert.equal(run('knifeMotion(0).press'),1,'knife makes contact on the cut');
assert.ok(run('knifeMotion(100).press > 0 && knifeMotion(100).press < 1'),'knife lifts without overshooting');
for(let t=0;t<320;t+=10)assert.ok(run(`knifeMotion(${t}).press >= knifeMotion(${t+10}).press`),'knife never bounces');
assert.equal(run('knifeMotion(500).press'),0,'knife settles');
assert.equal(run('knifeMotion(Infinity).rotation'),0);
assert.equal(run('Object.keys(batches).length'), 12);
assert.ok(run('foodSpriteData.carrot[0].leaves[1]+foodSpriteData.carrot[0].leaves[3] <= foodSpriteData.carrot[0].rect[1]'),'carrot cuts exclude leaves');
// Shared scale preserves real size differences, including the dragged ingredient.
run(`const originalIngredient=drawIngredient;let ingredientDraws=[];
  drawIngredient=(...args)=>{ingredientDraws.push(args);originalIngredient(...args);};`);
assert.ok(run('batches.cucumber.length / batches.berry.length > 4'));
assert.ok(run(`Object.entries(batches).every(([key,b])=>Math.abs(b.width/b.length-foodSpriteData[key][0].rect[2]/foodSpriteData[key][0].rect[3])<1e-8)`),'all whole food preserves source aspect ratio');
assert.ok(run('batches.berry.width / batches.blueberry.width > 2'));
assert.ok(run('batches.watermelon.width / batches.apple.width > 1.5'));
// Ingredient previews and mixer contents must draw paths, never platform emoji.
run(`glyph = icon => { if(icon !== '▶') throw new Error('Mixer rendered an ingredient emoji'); }`);
for(const key of run('Object.keys(foods)')) {
  run(`farm.seedPage=Math.floor(Object.keys(foods).indexOf('${key}')/3)`);
  run("open('blend');resetBlend()");
  const ingredient=elements.tray.children.find(el => el.dataset.item === key);
  assert.equal(ingredient.children[0].attrs['aria-hidden'], 'true');
  ingredient.onclick();
  run(`ingredientDraws=[];carried={key:'${key}',x:360,y:180};drawBlender(performance.now());mix()`);
  assert.equal(run('ingredientDraws.length'), 2, 'jar and dragged ingredient both draw');
  assert.ok(run('ingredientDraws.every(args=>args[3]===mixerScale)'), `${key}: common scale in jar and drag`);
  now+=900;run('drawBlender(performance.now())');
  now+=1100;run('drawBlender(performance.now());resetBlend()');
}
run('carried=null');
// Farm still uses its existing symbols.
run('glyph = () => {}');
assert.equal(run('batches.berry.count'), 3);
assert.equal(run('batches.blueberry.count'), 6);
assert.ok(run('batches.blueberry.width < batches.berry.width / 2'));
run(`const originalSlice=slice;let attachedFaces=[];
  slice=(...args)=>{if(args[5]) attachedFaces.push(args);originalSlice(...args);};`);
for (const key of run('Object.keys(foods)')) {
  run(`farm.seedPage=Math.floor(Object.keys(foods).indexOf('${key}')/3)`);
  run("open('farm')");
  elements.tray.children.find(el => el.dataset.item === key).onclick();
  run('plotAction(0)');
  assert.equal(run('farm.plots[0].food'), key);
  run("farm.tool='water';plotAction(0)");
  now += 5201;
  run('drawFarm(performance.now());plotAction(0)');
  assert.equal(run('farm.harvest.at(-1)'), key);
  assert.equal(run('farm.plots[0]'), null);
  run("open('board')");
  elements.tray.children.find(el => el.dataset.item === key).onclick();
  const total = run('batches[board.food].count*batches[board.food].cuts');
  assert.ok(run('boardView(board.food).scale > 1.2'), 'board food is enlarged');
  assert.ok(run(`boardView(board.food).top + ((batches[board.food].count-1)*batches[board.food].spacing+batches[board.food].length)*boardView(board.food).scale <= 380`), 'whole batch stays on the board');
  assert.ok(total >= 10, `${key} must allow at least 10 cuts`);
  assert.equal(elements.targets.children.length, 1);
  assert.match(elements.targets.children[0].style.cssText, /width:100%;height:100%/);
  run('attachedFaces=[];drawBoard(performance.now())');
  assert.equal(run('attachedFaces.length'), 0, 'whole food has no exposed cut');
  for(let i=0;i<total;i++) {
    const before = run('board.cuts.length');
    elements.targets.children[0].onclick();
    assert.equal(run('board.cuts.length'), before+1);
    for(const offset of [0,60,350]) {now += offset;run('attachedFaces=[];drawBoard(performance.now())');}
    const cutsPerFood=run('batches[board.food].cuts');
    assert.equal(run('attachedFaces.length'), (i+1)%cutsPerFood===0?0:1, `${key}: exposed end follows each cut`);
    if((i+1)%cutsPerFood!==0) {
      assert.ok(run('attachedFaces[0][3] > 0'));
      assert.ok(run('attachedFaces[0][3] <= batches[board.food].width*.75'));
    }
  }
  assert.equal(run('board.cuts.length'), total);
  assert.equal(run('chopPhysics.pieces.length'),total+run('batches[board.food].count'));
  assert.ok(run('Math.abs(chopPhysics.pieces.reduce((sum,p)=>sum+p.range.end-p.range.start,0)-batches[board.food].count)<1e-8'),'chunks preserve the full original food length');
  assert.ok(run('chopPhysics.pieces.every(p=>Math.abs(p.body.angle)<=.18)'), 'pieces never spin freely');
  assert.ok(run('chopPhysics.pieces.every(p=>p.range.start>=0&&p.range.end<=1.000001&&p.range.end>p.range.start)'));
  for(let frame=0;frame<120;frame++) {now+=1000/60;run('drawBoard(performance.now())');}
  assert.ok(run(`chopPhysics.pieces.every(({body,radius,halfHeight})=>{
    const scale=boardView(board.food).scale,rx=radius*scale,ry=halfHeight*scale;
    const ex=Math.hypot(rx*Math.cos(body.angle),ry*Math.sin(body.angle));
    const ey=Math.hypot(rx*Math.sin(body.angle),ry*Math.cos(body.angle));
    return Number.isFinite(body.speed)&&body.position.x-ex>=128&&body.position.x+ex<=592&&
      body.position.y-ey>=38&&body.position.y+ey<=378;
  })`), `${key}: every physical slice stays on the board after settling`);
  now += 400;
  elements.targets.children[0].onclick();
  assert.equal(run('board.cuts.length'), total, 'completed food never restarts on board tap');
  now+=10000;
  for(let tap=0;tap<4;tap++) elements.targets.children[0].onclick();
  assert.equal(run('board.cuts.length'), total, 'completed food remains after repeated delayed taps');
  elements.tray.children.find(el=>el.dataset.item===key).onclick();
  assert.equal(run('board.cuts.length'),0,'explicit ingredient selection starts a new batch');
  run("open('blend');resetBlend()");
  elements.tray.children.find(el => el.dataset.item === key).onclick();
  assert.equal(run('blend.items[0]'), key);
  assert.equal(run('JSON.stringify(mixedColor(blend.items))'), run(`JSON.stringify(foods['${key}'].juice)`));
  run('mix()');now += 2000;run('drawBlender(performance.now());resetBlend()');
}
run("addIngredient('watermelon');addIngredient('blueberry')");
assert.equal(run('JSON.stringify(mixedColor(blend.items))'), '[174,80,142]');
for(let i=0;i<10;i++) run("addIngredient('orange')");
assert.equal(run('blend.items.length'), 6);
run('mix()');run("addIngredient('apple')");
assert.equal(run('blend.items.length'), 6);
run('resetBlend()');assert.equal(run('blend.items.length'), 6);
now+=2000;run('resetBlend()');assert.equal(run('blend.items.length'), 0);
// A cup appears only after blending, fills once, and prevents reset during pouring.
run("open('blend');drawBlender(performance.now());pourJuice()");
assert.equal(run('cupTarget.hidden'), true);
assert.equal(run('blend.pourStarted'), null);
run("addIngredient('orange');addIngredient('berry');mix();pourJuice()");
assert.equal(run('blend.pourStarted'), null);
now+=1000;run('drawBlender(performance.now())');
assert.equal(run('cupTarget.hidden'), true);
now+=1000;run('drawBlender(performance.now())');
assert.equal(run('cupTarget.hidden'), false);
run('cupTarget.onclick()');
assert.equal(run('blend.pourStarted'),null,'cup tap never pours');
const readyJar=elements.targets.children.find(el=>el.attrs['aria-label'].startsWith('믹서 통을'));
pointerDrag(readyJar,700,200);
assert.equal(run('blend.pourStarted'),null,'invalid drop never pours');
assert.ok(run('blend.returning!==null'),'invalid drop returns gently');
now+=230;run('drawBlender(performance.now())');
assert.equal(run('blend.returning'),null);
pointerDrag(elements.targets.children.find(el=>el.attrs['aria-label'].startsWith('믹서 통을')),130,300);
const pouredAt=run('blend.pourStarted');
assert.equal(pouredAt, now);
assert.equal(run('blend.pourOrigin.dx'),-230,'pour starts at the actual dropped jar position');
assert.equal(run('blend.pourOrigin.dy'),100);
now+=900;run('drawBlender(performance.now());pourJuice();resetBlend()');
assert.equal(run('blend.pourStarted'), pouredAt);
assert.equal(run('pourAmount()'), .5);
assert.equal(run('blend.items.length'), 2);
run("open('board');open('blend');drawBlender(performance.now())");
assert.equal(run('pourAmount()'), .5, 'switching games preserves the cup');
now+=900;run('drawBlender(performance.now())');
assert.equal(run('pourAmount()'), 1);
assert.equal(run('cupTarget.disabled'), true);
run('resetBlend()');
assert.equal(run('blend.pourStarted'), null);
assert.equal(run('cupTarget.hidden'), true);
// Dragging the finished jar toward the cup also pours.
run("addIngredient('apple');mix()");now+=2000;run('drawBlender(performance.now())');
const jar=elements.targets.children.find(el=>el.attrs['aria-label'].startsWith('믹서 통을'));
for(const [type,event] of [
  ['pointerdown',{button:0,pointerId:1,clientX:360,clientY:200}],
  ['pointermove',{pointerId:1,clientX:130,clientY:300}],
  ['pointerup',{pointerId:1,clientX:130,clientY:300}],
]) for(const handler of jar.listeners[type]) handler(event);
assert.equal(run('blend.pourStarted'), now);
now+=1800;run('drawBlender(performance.now());resetBlend()');
// Fallback art also remains playable before the atlas finishes loading.
run("foodSprites.complete=false;board.food='pepper';board.cuts=[performance.now()-400];drawBoard(performance.now());foodSprites.complete=true");
const single = fs.readFileSync(path.join(root,'../little-harvest.html'),'utf8');
let inline = single.match(/<script id="game-source">([\s\S]*?)<\/script>/)[1].trim();
const embedded=inline.match(/const spriteAtlasSource='data:image\/png;base64,([^']+)';/);
assert.ok(embedded, 'single HTML embeds the artwork for offline use');
assert.deepEqual(Buffer.from(embedded[1],'base64'),fs.readFileSync(path.join(root,'dist/assets/food-atlas-v1.png')));
inline=inline.replace(/const spriteAtlasSource='data:image\/png;base64,[^']+';/, "const spriteAtlasSource='./assets/food-atlas-v1.png';");
const knifeEmbedded=inline.match(/const knifeSpriteSource='data:image\/png;base64,([^']+)';/);
assert.ok(knifeEmbedded);
assert.deepEqual(Buffer.from(knifeEmbedded[1],'base64'),fs.readFileSync(path.join(root,'dist/assets/knife-v1.png')));
inline=inline.replace(/const knifeSpriteSource='data:image\/png;base64,[^']+';/, "const knifeSpriteSource='./assets/knife-v1.png';");
const lyingEmbedded=inline.match(/const lyingSpriteSource='data:image\/png;base64,([^']+)';/);
assert.ok(lyingEmbedded);
assert.deepEqual(Buffer.from(lyingEmbedded[1],'base64'),fs.readFileSync(path.join(root,'dist/assets/lying-fruit-v1.png')));
inline=inline.replace(/const lyingSpriteSource='data:image\/png;base64,[^']+';/, "const lyingSpriteSource='./assets/lying-fruit-v1.png';");
const peachEmbedded=inline.match(/const peachSpriteSource='data:image\/png;base64,([^']+)';/);
assert.ok(peachEmbedded);
assert.deepEqual(Buffer.from(peachEmbedded[1],'base64'),fs.readFileSync(path.join(root,'dist/assets/peach-lying-v1.png')));
inline=inline.replace(/const peachSpriteSource='data:image\/png;base64,[^']+';/, "const peachSpriteSource='./assets/peach-lying-v1.png';");
assert.equal(inline, source.replace("if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});",'').trim());
assert.equal(single.match(/<style>([\s\S]*?)<\/style>/)[1].trim(), fs.readFileSync(path.join(root,'dist/style.css'),'utf8').trim());
assert.equal(single.match(/<script id="physics-engine">([\s\S]*?)<\/script>/)[1],fs.readFileSync(path.join(root,'dist/vendor/matter.min.js'),'utf8'));
assert.equal(single.match(/<script id="three-engine">([\s\S]*?)<\/script>/)[1],fs.readFileSync(path.join(root,'dist/vendor/three.min.js'),'utf8'));
assert.equal(single.match(/<script id="fruit-models">([\s\S]*?)<\/script>/)[1],fs.readFileSync(path.join(root,'dist/fruit-3d.js'),'utf8'));
assert.equal(drawingDepth,0,'drawing state restored after every render');
console.log('PASS: all 12 foods grow, harvest, cut and blend; touch target, mixing limits, existing sizes, exposed cut faces, atlas rendering, cup pouring and offline standalone parity');
