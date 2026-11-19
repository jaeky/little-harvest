const foods = {
  carrot: { name:'당근', icon:'🥕', skin:'#ef791e', light:'#ffbf62', dark:'#bd4412', flesh:'#ff9d39', juice:[247,135,37] },
  berry: { name:'딸기', icon:'🍓', skin:'#eb485c', light:'#ff8c91', dark:'#aa2241', flesh:'#ff7884', juice:[241,63,100] },
  cucumber: { name:'오이', icon:'🥒', skin:'#73ac3e', light:'#a6cd57', dark:'#356e36', flesh:'#cde58b', juice:[126,183,78] },
  blueberry: { name:'블루베리', icon:'🫐', skin:'#6869bc', light:'#a7a7e4', dark:'#343667', flesh:'#bbb4ee', juice:[109,75,178] },
  peach: { name:'복숭아', icon:'🍑', skin:'#ef9291', light:'#ffd2ac', dark:'#c75d73', flesh:'#ffe2ab', juice:[247,167,148] },
  watermelon: { name:'수박', icon:'🍉', skin:'#37794a', light:'#85b65a', dark:'#205b38', flesh:'#f45a67', juice:[238,84,105] },
  apple: { name:'사과', icon:'🍎', skin:'#d94342', light:'#ff9a77', dark:'#a52f37', flesh:'#fff0bf', juice:[239,201,112] },
  orange: { name:'오렌지', icon:'🍊', skin:'#ef8b22', light:'#ffd075', dark:'#c46113', flesh:'#ffb544', juice:[255,165,41] },
  pepper: { name:'파프리카', icon:'🫑', skin:'#e5ae26', light:'#ffe68a', dark:'#b97318', flesh:'#ffdf66', juice:[247,204,63] },
  eggplant: { name:'가지', icon:'🍆', skin:'#704593', light:'#b18bc6', dark:'#352650', flesh:'#eee8bd', juice:[146,104,171] },
  chili: { name:'고추', icon:'🌶️', skin:'#d84335', light:'#ff8b5e', dark:'#962b2d', flesh:'#f68968', juice:[224,76,52] },
  mushroom: { name:'버섯', icon:'🍄', skin:'#ad8664', light:'#e7ceb0', dark:'#73553f', flesh:'#fff2d8', juice:[202,181,151] },
};
const spriteAtlasSource='./assets/food-atlas-v1.png';
const foodSpriteData={"carrot":[{"rect":[97,92,68,192],"rows":[[338,706],[206,824],[147,882],[118,926],[74,956],[59,985],[44,1000],[29,1000],[15,1000],[15,1000],[15,1000],[0,1000],[15,985],[15,985],[15,971],[29,971],[29,956],[29,941],[44,926],[44,912],[44,897],[59,897],[74,882],[74,868],[88,853],[88,838],[103,838],[103,824],[103,809],[118,809],[118,794],[132,779],[147,765],[147,750],[162,750],[162,735],[176,721],[191,706],[191,691],[206,676],[221,662],[235,647],[250,632],[265,632],[294,603],[309,603],[324,588],[353,559],[382,529],[397,515],[426,485]],"leaves":[55,8,171,84]},{"rect":[22,840,212,207]}],"berry":[{"rect":[294,27,174,243],"rows":[[477,511],[460,534],[454,523],[448,517],[443,701],[207,833],[195,839],[184,845],[184,839],[184,828],[195,966],[213,954],[201,931],[132,885],[6,856],[52,891],[138,914],[115,937],[92,954],[75,971],[57,983],[46,994],[34,1000],[29,1000],[23,1000],[23,1000],[17,1000],[23,994],[29,989],[34,983],[40,977],[52,966],[63,954],[75,943],[92,925],[103,908],[121,897],[144,879],[161,856],[178,839],[195,822],[213,805],[230,787],[247,776],[270,753],[293,730],[316,707],[333,690],[368,655],[408,621],[489,534]]},{"rect":[282,836,198,218]}],"cucumber":[{"rect":[604,12,65,264],"rows":[[646,708],[585,738],[554,692],[508,692],[354,769],[292,846],[246,908],[200,923],[185,954],[154,969],[138,985],[123,985],[108,985],[92,985],[77,1000],[77,985],[77,969],[62,985],[46,969],[46,969],[62,985],[46,969],[31,969],[46,969],[46,985],[46,969],[31,969],[31,969],[31,985],[15,969],[0,969],[31,985],[31,969],[46,969],[31,985],[31,985],[46,969],[46,969],[62,985],[46,969],[77,954],[92,954],[92,954],[123,938],[138,923],[154,908],[185,892],[215,862],[262,815],[338,754],[538,554]]},{"rect":[527,835,219,215]}],"blueberry":[{"rect":[807,80,171,167],"rows":[[444,462],[415,515],[398,684],[316,696],[298,708],[257,743],[228,778],[199,807],[170,836],[152,860],[129,877],[105,901],[94,912],[82,924],[70,936],[58,953],[47,959],[41,965],[29,977],[23,982],[18,988],[12,994],[6,994],[6,994],[0,1000],[0,1000],[0,1000],[0,1000],[0,1000],[0,994],[6,994],[12,988],[12,982],[23,977],[29,971],[35,965],[47,953],[53,942],[64,936],[76,924],[94,906],[105,895],[123,877],[146,854],[164,836],[187,813],[222,784],[251,754],[287,719],[351,655],[427,579]]},{"rect":[787,848,211,195]}],"peach":[{"rect":[111,92,1051,1034],"rows":[[433,486],[292,598],[282,649],[270,691],[233,726],[204,754],[176,779],[152,802],[131,822],[113,841],[98,858],[86,873],[73,888],[62,902],[52,913],[44,926],[35,937],[29,947],[22,956],[16,965],[10,972],[7,980],[4,986],[1,990],[0,994],[0,997],[1,999],[4,1000],[7,1000],[10,999],[16,996],[22,993],[29,990],[35,984],[43,978],[51,971],[62,962],[72,953],[85,942],[98,931],[113,918],[130,903],[149,888],[169,871],[193,850],[219,825],[246,794],[281,748],[321,665],[369,615],[468,516]],"peach":true,"originalRect":[18,305,223,229]},{"rect":[10,1073,236,217]}],"watermelon":[{"rect":[803,13,549,698],"rows":[[503,526],[435,599],[357,676],[310,721],[271,758],[240,787],[215,812],[191,834],[171,854],[155,872],[137,889],[118,903],[104,918],[89,931],[77,942],[66,951],[53,960],[44,967],[35,974],[27,980],[20,985],[15,991],[11,995],[5,996],[4,998],[2,1000],[0,1000],[0,998],[2,996],[4,995],[5,991],[9,987],[15,982],[20,976],[26,971],[35,962],[42,954],[53,944],[64,934],[75,922],[89,907],[102,893],[118,878],[137,858],[157,838],[180,814],[208,787],[239,756],[279,716],[332,661],[441,550]],"laid":true,"originalRect":[278,291,210,250]},{"rect":[256,1073,252,215]}],"apple":[{"rect":[65,53,576,632],"rows":[[536,552],[498,582],[444,622],[309,694],[259,740],[217,778],[186,811],[160,835],[137,858],[116,877],[101,894],[85,910],[73,922],[61,936],[50,946],[40,957],[33,965],[24,974],[19,981],[12,986],[9,991],[5,995],[2,997],[0,998],[0,1000],[0,1000],[0,998],[2,995],[5,991],[9,988],[12,983],[17,977],[24,970],[31,964],[38,957],[47,948],[57,939],[68,929],[80,918],[92,906],[106,894],[120,880],[135,865],[153,847],[172,828],[194,806],[222,780],[252,752],[290,712],[337,665],[448,476]],"laid":true,"originalRect":[528,299,223,233]},{"rect":[515,1065,244,227]}],"orange":[{"rect":[1517,61,574,625],"rows":[[509,510],[434,584],[354,655],[301,704],[260,746],[228,775],[200,805],[176,828],[153,850],[134,869],[115,887],[101,902],[85,918],[73,929],[61,941],[51,951],[40,962],[33,969],[26,976],[19,983],[14,988],[9,991],[5,995],[3,997],[2,998],[0,1000],[0,1000],[2,998],[5,997],[7,993],[12,990],[17,984],[23,981],[30,972],[37,965],[45,956],[54,948],[64,937],[77,925],[89,913],[103,899],[120,882],[138,866],[157,845],[178,826],[204,800],[230,774],[263,739],[303,700],[361,645],[470,535]],"laid":true,"originalRect":[783,310,220,223]},{"rect":[770,1065,244,228]}],"pepper":[{"rect":[29,551,201,265],"rows":[[687,756],[617,801],[577,816],[552,816],[532,811],[517,801],[498,652],[488,637],[478,622],[358,612],[274,627],[234,816],[214,851],[134,881],[100,920],[80,945],[60,960],[40,980],[30,985],[25,990],[15,995],[10,1000],[5,995],[0,995],[0,990],[0,985],[0,980],[5,975],[5,965],[10,960],[15,950],[20,945],[20,935],[25,930],[30,925],[35,920],[40,910],[45,905],[55,900],[60,891],[70,881],[80,876],[95,861],[109,846],[124,831],[149,806],[179,781],[214,741],[289,612],[393,572],[453,517]]},{"rect":[11,1309,234,217]}],"eggplant":[{"rect":[312,547,141,271],"rows":[[567,589],[518,645],[504,638],[489,631],[468,631],[447,638],[355,716],[312,759],[291,780],[270,794],[248,809],[227,830],[191,851],[170,894],[206,837],[199,844],[191,851],[177,858],[163,865],[156,872],[142,879],[135,887],[121,894],[106,908],[92,915],[85,929],[71,936],[57,950],[50,957],[35,965],[28,972],[21,979],[14,986],[7,993],[0,993],[0,1000],[0,1000],[0,993],[0,993],[7,986],[14,979],[21,972],[35,957],[50,943],[71,922],[99,901],[128,872],[170,830],[213,780],[291,702],[454,553]]},{"rect":[260,1312,239,213]}],"chili":[{"rect":[602,549,70,269],"rows":[[843,971],[700,986],[614,800],[571,743],[543,700],[500,686],[471,671],[457,686],[414,714],[357,757],[257,829],[200,886],[157,929],[143,957],[129,957],[114,957],[114,943],[100,929],[100,900],[86,886],[86,857],[71,843],[57,814],[57,800],[43,786],[29,757],[14,743],[14,714],[0,700],[0,671],[0,643],[0,629],[14,600],[14,586],[29,586],[43,571],[57,571],[71,571],[100,571],[114,571],[143,586],[186,600],[214,629],[257,643],[300,671],[343,700],[414,743],[471,786],[543,829],[643,871],[786,857]]},{"rect":[527,1328,211,181]}],"mushroom":[{"rect":[771,581,231,226],"rows":[[481,498],[359,645],[294,714],[247,766],[212,797],[186,823],[156,853],[134,879],[113,896],[100,913],[82,931],[65,944],[56,957],[48,965],[35,978],[26,983],[22,987],[13,996],[9,996],[4,1000],[4,1000],[0,1000],[0,996],[4,991],[4,991],[9,983],[13,974],[22,961],[30,952],[43,939],[61,913],[87,879],[117,840],[173,719],[312,719],[312,719],[312,719],[312,719],[307,723],[307,723],[303,723],[303,723],[299,723],[299,723],[294,723],[290,719],[290,719],[303,706],[325,684],[359,649],[468,550]]},{"rect":[768,1312,245,209]}]};
const foodSprites=new Image();
foodSprites.src=spriteAtlasSource;
foodSprites.onload=()=>renderControls();
const peachSpriteSource='./assets/peach-lying-v1.png';
const peachImage=new Image();peachImage.src=peachSpriteSource;window.peachImage=peachImage;
peachImage.onload=()=>renderControls();
const lyingSpriteSource='./assets/lying-fruit-v1.png';
const lyingImage=new Image();lyingImage.src=lyingSpriteSource;
lyingImage.onload=()=>renderControls();
const knifeSpriteSource='./assets/knife-v1.png';
const knifeImage=new Image();
knifeImage.src=knifeSpriteSource;
const knifeRect=[36,208,2090,327];
const knifeWidth=430,knifeHeight=knifeWidth*knifeRect[3]/knifeRect[2];
const game = document.querySelector('#game');
const canvas = document.querySelector('#art');
canvas.width=1440;canvas.height=860;
let ctx = canvas.getContext('2d');
ctx.scale(2,2);
const hint = document.querySelector('#hint');
const tray = document.querySelector('#tray');
const targets = document.querySelector('#targets');
const stage = document.querySelector('#stage');
const farm = {tool:'carrot', plots:[null,null,null], harvest:[],watering:null,activePlot:0,seedPage:0};
const board = {food:'carrot', cuts:[]};
let chopPhysics=null;
const batches = {
  carrot: {length:170, count:1, cuts:10, first:82, spacing:0},
  cucumber: {length:240, count:1, cuts:10, first:62, spacing:0},
  berry: {length:53, count:3, cuts:4, first:87, spacing:80},
  blueberry: {length:16, count:6, cuts:2, first:83, spacing:39},
  peach: {length:105, count:1, cuts:10, first:113, spacing:0},
  watermelon: {length:222, count:1, cuts:10, first:65, spacing:0},
  apple: {length:100, count:1, cuts:10, first:115, spacing:0},
  orange: {length:94, count:1, cuts:10, first:120, spacing:0},
  pepper: {length:119, count:1, cuts:10, first:105, spacing:0},
  eggplant: {length:185, count:1, cuts:10, first:78, spacing:0},
  chili: {length:172, count:1, cuts:10, first:88, spacing:0},
  mushroom: {length:85, count:2, cuts:5, first:92, spacing:113},
};
// Use a single uniform image scale; stretching leaf-to-tip artwork squashes the produce.
for(const [key,batch] of Object.entries(batches)) {
  const rect=foodSpriteData[key][0].rect;
  batch.width=batch.length*rect[2]/rect[3];
  batch.top=key==='carrot'?batch.length*84/192:0;batch.key=key;
}

const chopHint = '도마 어디든 톡톡 눌러요!';
const blend = {items:[], started:null, pourStarted:null};
let cupTarget=null;
const mixerScale=.56;
const sceneHeight=()=>scene==='farm'?900:430;
const labels = {farm:'텃밭', board:'도마', blend:'믹서기'};
let scene = 'board';
let audio;
let muted = false;
const reduceMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches??false;

function sound(type) {
  if (muted) return;
  const Audio = window.AudioContext || window.webkitAudioContext;
  if (!Audio) return;
  audio ??= new Audio();
  if (audio.state === 'suspended') audio.resume().catch(() => {});
  const t = audio.currentTime;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = type === 'cut' ? 'triangle' : 'sine';
  osc.frequency.setValueAtTime({cut:245, pop:610, water:520, mix:115}[type],t);
  osc.frequency.exponentialRampToValueAtTime(type === 'cut' ? 65 : type === 'mix' ? 165 : 300,t+.08);
  const duration = type === 'mix' ? .65 : .12;
  gain.gain.setValueAtTime(.13,t);
  gain.gain.exponentialRampToValueAtTime(.001,t+duration);
  osc.connect(gain).connect(audio.destination);
  osc.start(t);
  osc.stop(t+duration);
}
document.querySelector('#sound').onclick = event => {
  muted = !muted;
  event.currentTarget.textContent = muted ? '🔇' : '🔊';
  event.currentTarget.setAttribute('aria-pressed', String(!muted));
  event.currentTarget.setAttribute('aria-label', muted ? '소리 켜기' : '소리 끄기');
  if (!muted) sound('pop');
};

function button(label, icon, click) {
  const el = document.createElement('button');
  el.type = 'button';
  el.innerHTML = '<span aria-hidden="true">'+icon+'</span>'+label;
  el.onclick = click;
  return el;
}
function hit(label, x, y, w, h, click) {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'hit';
  el.setAttribute('aria-label', label);
  el.style.cssText = 'left:'+x/7.2+'%;top:'+y/(sceneHeight()/100)+'%;width:'+w/7.2+'%;height:'+h/(sceneHeight()/100)+'%';
  el.onclick = click;
  targets.append(el);
  return el;
}
function point(event) {
  const r = stage.getBoundingClientRect();
  return {x:(event.clientX-r.left)*720/r.width,y:(event.clientY-r.top)*sceneHeight()/r.height};
}
function drag(el, move, finish) {
  let gesture, moved = false;
  el.addEventListener('pointerdown', e => {
    if (gesture || e.button !== 0) return;
    gesture = {id:e.pointerId, start:point(e)};
    moved = false;
    el.setPointerCapture(e.pointerId);
  });
  el.addEventListener('pointermove', e => {
    if (gesture?.id !== e.pointerId) return;
    const p = point(e);
    const delta = {x:p.x-gesture.start.x,y:p.y-gesture.start.y};
    if (Math.hypot(delta.x,delta.y)>13) moved=true;
    if (moved) move(p, delta);
  });
  el.addEventListener('pointerup', e => {
    if (gesture?.id !== e.pointerId) return;
    gesture = null;
    if (moved) finish(point(e));
  });
  for (const name of ['pointercancel','lostpointercapture']) el.addEventListener(name, () => {
    if (gesture) { gesture=null; moved=true; finish(null); }
  });
  el.addEventListener('click', e => {
    if (moved && e.detail !== 0) e.stopImmediatePropagation();
    moved = false;
  }, true);
}
const ready = plot => plot?.watered != null && performance.now()-plot.watered >= 5200;
let pulling = null;
let carried = null;
let farmGuideCanvas=null;
function plotAction(i, harvestByTouch = true) {
  const plot = farm.plots[i];
  if (ready(plot) && harvestByTouch) {
    farm.harvest.push(plot.food); farm.plots[i]=null; pulling=null;farm.guideAt=performance.now();
    sound('pop'); hint.textContent = foods[plot.food].name+' 수확 성공!';
  } else if (!plot && farm.tool !== 'water') {
    farm.plots[i]={food:farm.tool, watered:null};
    sound('pop'); hint.textContent='물뿌리개로 씨앗에 물을 줘요!';
  } else if (plot && plot.watered === null && farm.tool === 'water') {
    plot.watered = performance.now();
    sound('water'); hint.textContent='쑥쑥 자라는 중!';
  }
}
function dropFarm(key,p) {
  carried=null;
  if(!p||p.y<200||p.y>610||p.x<70||p.x>650)return;
  const i=farm.activePlot;
  if(key==='water') {
    if(!farm.plots[i]||farm.plots[i].watered!==null)return;
    farm.tool='water';plotAction(i,false);farm.watering={i,at:performance.now()};
  } else {
    if(farm.plots[i])return;
    farm.tool=key;plotAction(i,false);farm.plots[i].planted=performance.now();
  }
}
function addIngredient(key) {
  if (blend.started !== null || blend.items.length >= 6) return;
  blend.items.push(key);
  sound('pop'); hint.textContent=blend.items.length===6?'가득 찼어요! 믹서 버튼을 눌러요.':'재료를 더 넣거나 믹서 버튼을 눌러요!';
}
function mix() {
  if (!blend.items.length || blend.started !== null) return;
  blend.started=performance.now();
  sound('mix'); hint.textContent='빙글빙글 색이 섞여요!';
}
function pourAmount(t=performance.now()) {
  return blend.pourStarted===null?0:Math.min(1,Math.max(0,(t-blend.pourStarted)/1800));
}
function pourJuice() {
  if(blend.started===null || performance.now()-blend.started<1900 || blend.pourStarted!==null) return;
  blend.pourOrigin=blend.dragging?{...blend.dragging}:{dx:0,dy:0};
  blend.pourStarted=performance.now();
  sound('water');hint.textContent='쪼르르! 컵에 주스를 따라요.';
}
function resetBlend() {
  if(blend.pourStarted!==null&&pourAmount()<1) return;
  if (blend.started !== null && performance.now()-blend.started < 1900) return;
  blend.items=[]; blend.started=null;blend.pourStarted=null;blend.pourOrigin=null;blend.dragging=null;blend.returning=null;
  if(cupTarget) cupTarget.hidden=true;
  hint.textContent='재료를 눌러 넣거나 통으로 끌어 넣어요!';
}
function cut() {
  const batch = batches[board.food];
  const total = batch.count * batch.cuts;
  if (board.cuts.length >= total) return;
  const now=performance.now();
  const previous=board.cuts.at(-1);
  board.cuts.push(Math.max(now, previous===undefined ? now : previous+115));
  sound('cut');
  hint.textContent=board.cuts.length===total ? '다 썰었어요! 다른 재료도 골라봐요.' : '탁! '+chopHint;
}
function renderControls() {
  tray.replaceChildren(); targets.replaceChildren();cupTarget=null;
  if(scene==='farm')farm.guideAt=performance.now();
  for (const [index,[key,food]] of Object.entries(foods).entries()) {
    if(scene==='farm'&&Math.floor(index/3)!==farm.seedPage)continue;
    const el=button(food.name,'',()=> {
      if (scene==='farm') {
        farm.tool=key; updateSelection(key); hint.textContent='빈 흙을 눌러 씨앗을 심어요!';
      } else if (scene==='board') {
        board.food=key; board.cuts=[];
        updateSelection(key); hint.textContent=chopHint;
      } else addIngredient(key);
    });
    const thumbnail=document.createElement('canvas');
    thumbnail.width=scene==='farm'?144:112;thumbnail.height=scene==='farm'?176:80;
    thumbnail.setAttribute('aria-hidden','true');
    if(scene==='farm') {
      drawSeedPacket(key,72,88,2,thumbnail.getContext('2d'));
      el.replaceChildren(thumbnail);el.setAttribute('aria-label',food.name+' 씨앗 봉투, 밭으로 끌어 심기');
      drag(el,p=>{carried={...p,key,kind:'seed'};},p=>dropFarm(key,p));
    } else {
      drawIngredient(key,56,40,66/Math.max(batches[key].length+batches[key].top,batches[key].width),-.25,thumbnail.getContext('2d'));
      el.replaceChildren(thumbnail,food.name);
    }
    el.dataset.item=key; tray.append(el);
    if (scene==='blend') drag(el, p=>{carried={...p,key};}, p=>{
      carried=null;
      if (p && p.x>227 && p.x<493 && p.y>25 && p.y<365) addIngredient(key);
    });
  }
  if (scene==='board') hit('도마를 눌러 한 조각 썰기',0,0,720,430,cut);
  if (scene==='farm') {
    const water=hit('물뿌리개, 밭으로 끌어 물 주기',475,540,235,215,()=>{});
    water.dataset.item='water';
    drag(water,p=>{carried={...p,key:'water',kind:'water'};},p=>dropFarm('water',p));
    for(let i=0;i<3;i++)hit((i+1)+'번 밭 선택',120+i*180,24,120,120,()=>{farm.activePlot=i;carried=null;pulling=null;renderControls();});
    for(const step of [-1,1]) {
      const arrow=button('',step<0?'‹':'›',()=>{farm.seedPage=(farm.seedPage+step+4)%4;renderControls();});
      arrow.className='seed-page-arrow';arrow.setAttribute('aria-label',step<0?'이전 씨앗 봉투':'다음 씨앗 봉투');
      arrow.style.order=step<0?'-1':'1';tray.append(arrow);
    }
    farm.plots.forEach((_,i)=>{
      if(i!==farm.activePlot)return;
      const el=hit((i+1)+'번째 밭 심기, 물 주기, 수확하기',70,155,580,460,()=>{hint.textContent='다 자란 채소를 바구니로 끌어 담아요!';});
      drag(el, (p,delta)=> {
        if(ready(farm.plots[i])) {pulling={i,dy:Math.min(0,delta.y)};carried={...p,key:farm.plots[i].food,kind:'harvest',i};}
      }, p=> {
        if(p&&carried?.kind==='harvest'&&carried.i===i&&p.x>70&&p.x<535&&p.y>650&&p.y<895)plotAction(i);
        pulling=null;carried=null;
      });
    });
  }
  if(scene==='farm')hit('채소를 끌어 담는 바구니',70,650,465,245,()=>{});
  if (scene==='blend') {
    hit('믹서기 켜기',314,340,92,72,mix);
    const jar=hit('믹서 통을 왼쪽 컵으로 끌어 따르기',247,56,226,259,()=>{hint.textContent='믹서 통을 왼쪽 컵으로 끌어 따라요!';});
    drag(jar,(p,delta)=> {
      if(blend.started!==null&&performance.now()-blend.started>=1900&&blend.pourStarted===null)
        {blend.returning=null;blend.dragging={dx:Math.max(-300,Math.min(260,delta.x)),dy:Math.max(-170,Math.min(170,delta.y))};}
    },p=>{
      if(p&&p.x>50&&p.x<215&&p.y>220&&p.y<410)pourJuice();
      else if(blend.dragging)blend.returning={from:{...blend.dragging},at:performance.now()};
      blend.dragging=null;
    });
    cupTarget=hit('주스 받는 컵',66,239,132,157,()=>{hint.textContent='믹서 통을 이 컵으로 끌어와요!';});
    cupTarget.hidden=blend.started===null||performance.now()-blend.started<1900;
    cupTarget.disabled=blend.pourStarted!==null;
    tray.append(button('비우기','🫗',resetBlend));
  }
  if (scene!=='blend') updateSelection(scene==='board'?board.food:farm.tool);
}
function updateSelection(key) {
  tray.querySelectorAll('[data-item]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.item===key)));
}
function open(next) {
  scene=next; pulling=null; carried=null;blend.dragging=null;
  game.dataset.scene=next;
  canvas.height=sceneHeight()*2;ctx=canvas.getContext('2d');ctx.scale(2,2);
  document.querySelector('#title').textContent=labels[next];
  hint.textContent={board:chopHint,farm:'씨앗 봉투와 물뿌리개를 밭으로 끌어요!',blend:'재료를 눌러 넣거나 통으로 끌어 넣어요!'}[next];
  document.querySelectorAll('[data-tab]').forEach(el=>{
    if (el.dataset.tab===next) el.setAttribute('aria-current','page');
    else el.removeAttribute('aria-current');
  });
  renderControls();
}
document.querySelectorAll('[data-tab]').forEach(el=>el.onclick=()=>open(el.dataset.tab));
open('board');

function gradient(x0,y0,x1,y1,colors) {
  const grad=ctx.createLinearGradient(x0,y0,x1,y1);
  colors.forEach((color,i)=>grad.addColorStop(i/(colors.length-1),color));
  return grad;
}
function rounded(x,y,w,h,r,fill) {
  ctx.beginPath(); ctx.roundRect(x,y,w,h,r); ctx.fillStyle=fill; ctx.fill();
}
function oval(x,y,rx,ry,fill) {
  ctx.beginPath(); ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2); ctx.fillStyle=fill; ctx.fill();
}
function glyph(icon,x,y,size) {
  ctx.font=size+'px system-ui'; ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(icon,x,y);
}
function stem(x,y,size) {
  ctx.save(); ctx.translate(x,y); ctx.scale(size,size);
  for (const [angle,color] of [[-.56,'#5c963f'],[-.17,'#88ae49'],[.28,'#437b37'],[.56,'#6da64b']]) {
    ctx.save(); ctx.rotate(angle);
    oval(0,-22,5,24,color); ctx.restore();
  }
  ctx.restore();
}
function produce(key,x,y,scale,remaining=1) {
  const f=foods[key];
  ctx.save(); ctx.translate(x,y); ctx.scale(scale,scale);
  stem(0,5,key==='carrot'?1:.62);
  ctx.beginPath();
  ctx.rect(-65,0,130,Math.max(0,remaining*212));
  ctx.clip();
  const tapered=key==='carrot'|| key==='berry';
  const w=key==='blueberry'?51:key==='berry'?55:39;
  ctx.beginPath(); ctx.moveTo(0,0);
  ctx.bezierCurveTo(w,0,w+8,15,w+3,62);
  ctx.bezierCurveTo(w,144,tapered?14:w,212,0,212);
  ctx.bezierCurveTo(tapered?-14:-w,211,-w,141,-w-3,64);
  ctx.bezierCurveTo(-w-7,17,-w,0,0,0);
  ctx.fillStyle=gradient(-w,0,w+5,0,[f.dark,f.skin,f.light,f.skin,f.dark]); ctx.fill();
  ctx.save(); ctx.clip();
  for (let i=0;i<13;i++) {
    const tx=(i*31)%67-33;
    const ty=14+i*15;
    oval(tx,ty,key==='carrot'?11:2.4,key==='carrot'?1.6:3,'#fff3bb49');
  }
  ctx.restore(); ctx.restore();
}
// Stable grain follows the skin instead of flickering between animation frames.
function spritesReady() { return foodSprites.complete&&foodSprites.naturalWidth>0&&lyingImage.complete&&lyingImage.naturalWidth>0&&peachImage.complete&&peachImage.naturalWidth>0; }
function wholeImage(key) {return foodSpriteData[key][0].peach?peachImage:foodSpriteData[key][0].laid?lyingImage:foodSprites;}
function round3D(key) {
  if(typeof Fruit3D==='undefined'||!Fruit3D.has(key)||!spritesReady()||!Fruit3D.init(foodSprites,foodSpriteData,lyingImage)) return false;
  const b=Fruit3D.frame(key,0,1).bounds;
  batches[key].width=batches[key].length*b.w/b.h;
  return true;
}
function paintWholeSprite(key,x,y,remaining=1) {
  if(round3D(key)) {
    const frame=Fruit3D.frame(key,0,remaining),b=frame.bounds,batch=batches[key];
    ctx.drawImage(frame.bitmap,b.x,b.y,b.w,b.h,x-batch.width/2,y,batch.width,batch.length);
    return true;
  }
  if(!spritesReady()) return false;
  const batch=batches[key],rect=foodSpriteData[key][0].rect;
  ctx.save();
  ctx.shadowColor='#49331d22';ctx.shadowBlur=4;ctx.shadowOffsetX=1;ctx.shadowOffsetY=2;
  if(key==='carrot') {
    const leaf=foodSpriteData.carrot[0].leaves,scale=batch.length/rect[3];
    ctx.drawImage(foodSprites,...leaf,x+(leaf[0]-rect[0]-rect[2]/2)*scale,y-batch.top,leaf[2]*scale,batch.top);
  }
  ctx.beginPath();ctx.rect(x-batch.width,y-2,batch.width*2,batch.length*remaining+2);ctx.clip();
  ctx.drawImage(wholeImage(key),...rect,x-batch.width/2,y,batch.width,batch.length);
  ctx.restore();return true;
}
function paintSliceSprite(key,x,y,radius,angle,attached,portion=.5) {
  const height=attached?Math.max(radius*(key==='cucumber'?.24:.18),key==='blueberry'?2.5:key==='berry'?3:1.5):radius*.62;
  ctx.save();ctx.translate(x,y);ctx.rotate(angle);
  if(!attached) {ctx.shadowColor='#49331d26';ctx.shadowBlur=3;ctx.shadowOffsetX=1;ctx.shadowOffsetY=2;}
  if(key==='pepper'&&attached) oval(0,0,radius*.66,height*.8,'#fff1c2');
  if(key==='mushroom') {
    oval(0,0,radius,height,portion>.62?'#e2cda9':'#a98360');
    oval(0,-.2,radius*.94,height*.9,gradient(0,-height,0,height,['#fff6e3','#eadcc1']));
    for(let i=0;i<16;i++) {const a=i*2.399;oval(Math.cos(a)*radius*.7,Math.sin(a)*height*.65,.6,.45,'#c4b08b66');}
    ctx.restore();return;
  }
  const rect=foodSpriteData[key][1].rect;
  if(attached) {
    // A cut end has no separate rind thickness or cast shadow: it is part of the body.
    ctx.beginPath();ctx.ellipse(0,0,radius,height,0,0,Math.PI*2);ctx.clip();
    oval(0,0,radius,height,foods[key].flesh);
    ctx.drawImage(foodSprites,rect[0],rect[1],rect[2],rect[3]*.91,-radius,-height,radius*2,height*2);
    ctx.beginPath();ctx.ellipse(0,0,radius-.3,height-.3,0,0,Math.PI*2);
    ctx.strokeStyle=foods[key].skin;ctx.lineWidth=.7;ctx.stroke();
  } else ctx.drawImage(foodSprites,...rect,-radius,-height,radius*2,height*2);
  ctx.restore();
}
function chunkRange(batch,index,part=0) {
  const start=1-(index%batch.cuts+1)/(batch.cuts+1);
  return part===0?{start,end:start+1/(batch.cuts+1)}:{start:0,end:start};
}
function paintChunk(key,x,y,piece) {
  if(round3D(key)) {
    const batch=batches[key],{start,end}=piece.range,frame=Fruit3D.frame(key,start,end),b=frame.bounds;
    const center=Fruit3D.section(key,(start+end)/2);
    ctx.save();ctx.translate(x,y);ctx.rotate(piece.body.angle);
    ctx.drawImage(frame.bitmap,b.x,b.y,b.w,b.h,-center.x*batch.width,-center.y*batch.length,batch.width,batch.length);
    ctx.restore();return;
  }
  if(!spritesReady()) {slice(key,x,y,piece.radius,piece.body.angle);return;}
  const {start,end}=piece.range,batch=batches[key],rect=foodSpriteData[key][0].rect;
  const height=(end-start)*batch.length;
  const offset=cutSection(key,(start+end)/2).offset;
  ctx.save();ctx.translate(x,y);ctx.rotate(piece.body.angle);
  ctx.save();ctx.beginPath();ctx.rect(-batch.width,-height/2,batch.width*2,height);ctx.clip();
  ctx.shadowColor='#49331d22';ctx.shadowBlur=3;ctx.shadowOffsetY=2;
  // Retain the original strip of skin: each piece comes from its actual position in the food.
  ctx.drawImage(wholeImage(key),...rect,-batch.width/2-offset,-height/2-start*batch.length,batch.width,batch.length);
  ctx.restore();
  const faceAt=start>0?start:end,face=cutSection(key,faceAt);
  paintSliceSprite(key,face.offset-offset,start>0?-height/2:height/2,face.radius,0,true,faceAt);
  ctx.restore();
}
function skinGrain(key,width,height) {
  const matte=key==='peach'||key==='mushroom';
  const count=key==='cucumber'?460:180;
  for(let i=0;i<count;i++) {
    const a=Math.sin(i*127.1+17)*43758.5453;
    const b=Math.sin(i*311.7+53)*26913.187;
    const x=((a-Math.floor(a))-.5)*width;
    const y=(b-Math.floor(b))*height;
    const light=i%3===0;
    oval(x,y,.25+(i%5)*.13,matte?.45:.7+(i%3)*.25,
      light?'#fff5c82b':'#241c231c');
  }
  if(!matte) {
    const gloss=ctx.createRadialGradient(-width*.2,height*.35,0,-width*.2,height*.35,width*.65);
    gloss.addColorStop(0,'#fffbe449');gloss.addColorStop(.35,'#fffbe415');gloss.addColorStop(1,'#fffbe400');
    oval(-width*.14,height*.4,width*.39,height*.42,gloss);
  }
}
// The same silhouette supplies both the skin and the exact width of its cut end.
function foodContour(key) {
  foodContour.cache ??= {};
  if(foodContour.cache[key]) return foodContour.cache[key];
  const {width:w,length:h}=batches[key], points=[];
  const move=(x,y)=>points.push([x,y]);
  const curve=(a,b,c,d,e,f)=>{
    const [x,y]=points.at(-1);
    for(let i=1;i<=24;i++) {
      const t=i/24,u=1-t;
      move(u*u*u*x+3*u*u*t*a+3*u*t*t*c+t*t*t*e,
        u*u*u*y+3*u*u*t*b+3*u*t*t*d+t*t*t*f);
    }
  };
  if(key==='mushroom') {
    move(-w*.5,h*.49);curve(-w*.52,-h*.17,w*.52,-h*.17,w*.5,h*.49);
    curve(w*.3,h*.64,-w*.3,h*.64,-w*.5,h*.49);
  } else if(key==='chili'||key==='eggplant') {
    move(-w*.25,5);curve(-w*.7,h*.28,-w*.45,h*.82,w*.32,h);
    curve(w*.9,h*.9,w*.52,h*.74,w*.42,h*.48);
    curve(w*.38,h*.14,w*.32,0,-w*.25,5);
  } else if(key==='pepper') {
    move(0,8);curve(-w*.48,-16,-w*.67,h*.28,-w*.43,h*.8);
    curve(-w*.3,h*1.09,-w*.09,h,0,h*.94);
    curve(w*.22,h*1.12,w*.47,h*.96,w*.48,h*.66);
    curve(w*.67,h*.14,w*.33,-10,0,8);
  } else if(key==='apple'||key==='peach') {
    move(0,9);curve(-w*.57,-h*.23,-w*.7,h*.45,-w*.3,h*.88);
    curve(-w*.2,h*.99,-w*.1,h,0,h*.95);
    curve(w*.35,h*1.12,w*.67,h*.51,w*.45,h*.18);
    curve(w*.34,0,w*.16,-h*.02,0,9);
  } else for(let i=0;i<80;i++) {
    const a=i*Math.PI/40;move(Math.cos(a)*w/2,h/2+Math.sin(a)*h/2);
  }
  return foodContour.cache[key]=points;
}
function cutSection(key,portion) {
  round3D(key);
  const {length,width}=batches[key];
  if(round3D(key)) {
    const section=Fruit3D.section(key,portion);
    return {offset:(section.x-.5)*width,radius:Math.max(1,section.radius*width)};
  }
  if(spritesReady()) {
    const [left,right]=foodSpriteData[key][0].rows[Math.min(50,Math.max(0,Math.round(portion*50)))];
    return {offset:((left+right)/2000-.5)*width,radius:Math.max(1,(right-left)/2000*width)};
  }
  if(key==='carrot'||key==='cucumber') return {
    offset:key==='cucumber'?Math.sin(portion*Math.PI)*6:0,
    radius:vegetableWidth(key,portion),
  };
  if(key==='berry') return {offset:0,radius:Math.max(4,24*Math.sin(Math.PI*(.16+portion*.82)))};
  if(key==='blueberry') return {offset:0,radius:9.5};
  const points=foodContour(key), y=length*portion, edges=[];
  for(let i=0;i<points.length;i++) {
    const [ax,ay]=points[i], [bx,by]=points[(i+1)%points.length];
    if((ay<=y&&by>y)||(by<=y&&ay>y)) edges.push(ax+(bx-ax)*(y-ay)/(by-ay));
  }
  if(key==='mushroom'&&portion>=.38) edges.push(-width*.14,width*.14);
  if(edges.length<2) return {offset:0,radius:2};
  const left=Math.min(...edges), right=Math.max(...edges);
  return {offset:(left+right)/2,radius:(right-left)/2};
}
function vegetableWidth(key, fraction) {
  const {width} = batches[key];
  const taper = key==='carrot' ? 1-fraction*.77 : .83+.17*Math.sin(fraction*Math.PI);
  const edge = Math.min(1, Math.sqrt(Math.max(0, fraction*24)), Math.sqrt(Math.max(0,(1-fraction)*24)));
  return width/2*taper*edge;
}
function vegetable(key, x,y, remaining) {
  if(paintWholeSprite(key,x,y,remaining)) return;
  const {length,width} = batches[key];
  const f=foods[key];
  const height=length*remaining;
  oval(x+3,y+height/2+3,width*.54,height/2,'#63361430');
  if(key==='carrot') stem(x,y+4,.77);
  ctx.save(); ctx.translate(x,y);
  ctx.beginPath();
  for(const side of [1,-1]) {
    for(let step=0; step<=100; step++) {
      const fraction=remaining*(side===1?step:100-step)/100;
      const bend=key==='cucumber'?Math.sin(fraction*Math.PI)*6:0;
      const bump=key==='cucumber'?Math.sin(fraction*181+side)*1.35:0;
      ctx.lineTo(bend+side*(vegetableWidth(key,fraction)+bump),fraction*length);
    }
  }
  ctx.closePath();
  ctx.fillStyle=gradient(-width/2,0,width/2,0,key==='cucumber'
    ? ['#173e1f','#326b2c','#709e43','#38682a','#173c23']
    : [f.dark,f.skin,f.light,f.skin,f.dark]);
  ctx.fill(); ctx.clip();
  skinGrain(key,width,length);
  const spots=key==='cucumber'?180:28;
  for(let i=0;i<spots;i++) {
    const px=((i*43)%103/103-.5)*(width+12);
    const py=(i*53)%length;
    if(key==='cucumber') {
      oval(px,py+1.3,1.6+i%3*.4,2.1,'#123b244b');
      oval(px-.5,py-.6,1.1+i%3*.3,1.6,'#d1eca969');
    } else {
      oval(px,py,4+i%5,1,'#a745233f');
      oval(px,py+1.4,3+i%5,1,'#ffdb995e');
    }
  }
  ctx.restore();
}
function strawberry(x,y,remaining) {
  if(paintWholeSprite('berry',x,y,remaining)) return;
  oval(x+2,y+27*remaining,20,24*remaining,'#632c2438');
  ctx.save(); ctx.translate(x,y);
  ctx.beginPath();ctx.rect(-30,0,60,53*remaining);ctx.clip();
  ctx.beginPath();ctx.moveTo(0,2);
  ctx.bezierCurveTo(30,-4,29,19,14,41);
  ctx.quadraticCurveTo(0,63,-12,44);
  ctx.bezierCurveTo(-29,23,-32,-5,0,2);
  ctx.fillStyle=gradient(-24,0,25,38,['#b62637','#f86961','#da273d','#981b32']);
  ctx.fill(); ctx.clip();
  skinGrain('berry',48,53);
  for(let i=0;i<34;i++){
    const px=(i*11)%51-25, py=(i*17)%52;
    oval(px+.5,py+.6,2.1,2.7,'#8e25378a');
    oval(px,py,1,1.8,'#ffe1a0');
  }
  ctx.restore();
  ctx.save();ctx.translate(x,y+4);
  for(const angle of [-1.05,-.48,.28,.92,2.6]){
    ctx.save();ctx.rotate(angle);
    oval(0,-7,3.2,8,angle<0?'#54883b':'#39743a');ctx.restore();
  }
  ctx.restore();
}
function blueberry(x,y,remaining=1) {
  if(paintWholeSprite('blueberry',x,y,remaining)) return;
  oval(x+2,y+11,10,9,'#28253a48');
  const sheen=ctx.createRadialGradient(x-4,y+4,1,x,y+9,12);
  sheen.addColorStop(0,'#a0afd1');sheen.addColorStop(.51,'#596eac');sheen.addColorStop(1,'#233451');
  oval(x,y+9,9.5,9,sheen);
  for(let i=0;i<5;i++){
    const angle=i*Math.PI*2/5;
    oval(x+1+Math.cos(angle)*2.7,y+7+Math.sin(angle)*2.3,1.5,1.2,'#253b68');
  }
  oval(x+1,y+7,1.55,1.35,'#142845');
}
// Whole produce shares the board's top-down light and shallow cast shadow.
function wholeFood(key,x,y,remaining) {
  if(paintWholeSprite(key,x,y,remaining)) return;
  const {width:w,length:h}=batches[key], f=foods[key];
  ctx.save();ctx.translate(x,y);
  ctx.beginPath();ctx.rect(-w, -15, w*2, h*remaining+15);ctx.clip();
  oval(4,h*.53+5,w*.53,h*.5,'#63361430');
  const skin=gradient(-w/2,0,w/2,h,[f.dark,f.skin,f.light,f.skin,f.dark]);
  if(key==='mushroom') rounded(-w*.14,h*.38,w*.28,h*.59,9,
    gradient(-w*.14,0,w*.14,0,[f.dark,f.flesh,f.light]));
  ctx.beginPath();
  foodContour(key).forEach(([px,py],i)=>i?ctx.lineTo(px,py):ctx.moveTo(px,py));
  ctx.closePath();ctx.fillStyle=skin;ctx.fill();
  ctx.save();ctx.clip();
  skinGrain(key,w,h);
  if(key==='watermelon') {
    for(let i=-2;i<=2;i++) {
      ctx.beginPath();ctx.moveTo(i*w*.22,0);
      ctx.bezierCurveTo(i*w*.15-15,h*.3,i*w*.3+13,h*.7,i*w*.2,h);
      ctx.strokeStyle='#1e633dcc';ctx.lineWidth=8;ctx.stroke();
    }
  } else if(key==='orange'||key==='mushroom') {
    for(let i=0;i<85;i++) oval((i*37%97/97-.5)*w,(i*29%89/89)*h,1.3,1,'#fff0c747');
  } else if(key==='peach'||key==='pepper') {
    ctx.beginPath();ctx.moveTo(0,9);ctx.quadraticCurveTo(-w*.13,h*.5,0,h);
    ctx.strokeStyle=f.dark+'70';ctx.lineWidth=2.5;ctx.stroke();
  }
  oval(-w*.2,h*.29,w*.08,h*.15,'#fff8de33');
  ctx.restore();
  if(!['watermelon','mushroom'].includes(key)) {
    rounded(-3,-7,6,20,3,'#64813d');
    if(key==='eggplant'||key==='chili'||key==='pepper') {
      for(const dx of [-1,0,1]) oval(dx*w*.15,9,w*.15,6,'#60833c');
    } else oval(12,1,12,5,'#71984c');
  }
  ctx.restore();
}
// Reuse the board artwork for both the mixer and its high-resolution button previews.
function drawIngredient(key,x,y,scale,angle=0,target=ctx) {
  const previous=ctx;
  ctx=target;
  ctx.save();
  try {
    const batch=batches[key];
    ctx.translate(x,y);ctx.rotate(angle);ctx.scale(scale,scale);
    const top=-(batch.length+batch.top)/2+batch.top;
    if(key==='carrot'||key==='cucumber') vegetable(key,0,top,1);
    else if(key==='berry') strawberry(0,top,1);
    else if(key==='blueberry') blueberry(0,top);
    else wholeFood(key,0,top,1);
  } finally {
    ctx.restore();ctx=previous;
  }
}
function slice(key,x,y,radius,angle=0,attached=false,portion=.5) {
  if(spritesReady()) {paintSliceSprite(key,x,y,radius,angle,attached,portion);return;}
  const f=foods[key];
  ctx.save(); ctx.translate(x,y); ctx.rotate(angle);
  const blueberryHalf = key==='blueberry';
  const depth=attached?0:blueberryHalf?radius*.45:Math.max(2,radius*.2);
  const height=radius*(attached?.29:blueberryHalf?.77:key==='mushroom'?.68:.58);
  const rind=blueberryHalf?'#445a90':f.skin;
  const flesh=blueberryHalf?'#dae2b5':f.flesh;
  if(!attached) oval(3,depth+3,radius*1.04,height*1.1,'#5a311d30');
  if(key==='mushroom'&&!attached) {
    rounded(-radius*.16,0,radius*.32,height*1.4,4,f.dark);
    rounded(-radius*.12,-2,radius*.24,height*1.4,4,f.flesh);
    oval(0,-height*.25,radius,height*.68,f.dark);
    oval(0,-height*.33,radius*.93,height*.6,f.flesh);
    for(let i=-3;i<=3;i++) {
      ctx.beginPath();ctx.moveTo(i*radius*.24,-height*.55);ctx.lineTo(i*radius*.12,0);
      ctx.strokeStyle='#b59a7b';ctx.lineWidth=1.4;ctx.stroke();
    }
  } else if(key==='berry') {
    ctx.beginPath();
    ctx.moveTo(0,height+4);
    ctx.bezierCurveTo(-radius*1.7,-height*.75,-radius*.42,-height*1.45,0,-height*.66);
    ctx.bezierCurveTo(radius*.55,-height*1.45,radius*1.6,-height*.75,0,height+4);
    ctx.fillStyle=rind;ctx.fill();
    oval(0,-1,radius*.73,height*.83,flesh);
    oval(0,1,radius*.18,height*.66,'#ffe2ca90');
  } else {
    if(!attached) oval(0,depth,radius,height,gradient(-radius,0,radius,depth,[f.dark,f.skin,f.dark]));
    oval(0,0,radius,height,rind);
    oval(0,-.4,radius*.9,height*.85,gradient(-radius,-height,radius,height,[flesh,'#fff7da',flesh]));
    if(key==='watermelon') {
      oval(0,-.4,radius*.9,height*.86,'#dbe7a0');
      oval(0,-.7,radius*.78,height*.74,f.flesh);
      for(let i=0;i<9;i++) {
        const a=i*2.399;
        oval(Math.cos(a)*radius*(.27+i%2*.25),Math.sin(a)*height*.48,2.1,3.1,'#532d30');
      }
    } else if(key==='orange') {
      oval(0,-.4,radius*.91,height*.87,'#fff0c6');
      for(let i=0;i<10;i++) {
        const a=i*Math.PI/5, b=a+Math.PI/5-.075;
        ctx.beginPath();ctx.moveTo(0,-.4);
        ctx.ellipse(0,-.4,radius*.82,height*.77,0,a+.035,b);ctx.closePath();
        ctx.fillStyle=i%2?'#ffa42d':'#ffbd50';ctx.fill();
      }
      oval(0,-.4,3,2.5,'#fff6d5');
    } else if(key==='pepper'||key==='chili') {
      oval(0,-.4,radius*.65,height*.62,'#fff3bf');
      oval(0,-.4,radius*.55,height*.5,'#ffecab');
      for(let i=0;i<3;i++) {
        const a=i*Math.PI*2/3;
        oval(Math.cos(a)*radius*.58,Math.sin(a)*height*.54,3,2,'#fff2b5');
      }
    } else if(key==='peach') {
      oval(0,-.4,radius*.28,height*.57,'#ac623a');
      oval(-1,-1,radius*.15,height*.43,'#cd8651');
    } else if(key==='apple') {
      oval(0,-.4,radius*.23,height*.63,'#fffcdf');
      for(const side of [-1,1]) oval(side*radius*.13,0,2,3.5,'#805137');
    } else if(key==='eggplant') {
      for(let i=0;i<9;i++) oval((i%3-1)*radius*.28, (Math.floor(i/3)-1)*height*.32,1.3,2,'#b6a779');
    } else oval(0,-.4,radius*.49,height*.56,key==='cucumber'?'#e5efbe':'#fff1bf66');
  }
  if(key==='cucumber') {
    oval(0,-.4,radius*.64,height*.64,'#d5e9a0');
    for(let arm=0;arm<3;arm++) for(let i=0;i<4;i++) {
      const a=arm*Math.PI*2/3, d=radius*(.17+i*.12);
      const sx=Math.cos(a)*d,sy=Math.sin(a)*d*height/radius;
      oval(sx,sy,Math.max(.7,radius*.065),Math.max(.6,height*.14),'#b3d17d');
      oval(sx-.4,sy-.4,Math.max(.5,radius*.043),Math.max(.5,height*.1),'#f7f8d0');
    }
  } else if(key==='carrot') {
    ctx.beginPath();ctx.ellipse(0,-.4,radius*.42,height*.55,0,0,Math.PI*2);
    ctx.strokeStyle='#df7d324a';ctx.lineWidth=.8;ctx.stroke();
  }
  // Fine flesh fibers and a moist rim make the exposed face read as a cut surface.
  ctx.save();ctx.beginPath();ctx.ellipse(0,-.4,radius*.87,height*.81,0,0,Math.PI*2);ctx.clip();
  for(let i=0;i<36;i++) {
    const a=i*2.399, d=Math.sqrt((i+.5)/36);
    oval(Math.cos(a)*radius*.84*d,Math.sin(a)*height*.79*d,.35+i%3*.16,.3,'#fff9dc45');
  }
  ctx.restore();
  ctx.beginPath();ctx.ellipse(0,-.4,radius*.92,height*.86,0,Math.PI*1.05,Math.PI*1.85);
  ctx.strokeStyle='#fffbd780';ctx.lineWidth=attached?1:.7;ctx.stroke();
  ctx.restore();
}
function cutPosition(batch, index) {
  const fruit = batch.count-1-Math.min(batch.count-1,Math.floor(index/batch.cuts));
  const portion = 1-(index%batch.cuts+1)/(batch.cuts+1);
  const axisX=round3D(batch.key)?(Fruit3D.section(batch.key,portion).x-.5)*batch.width:0;
  const x = 360+(batch.count>1 ? (fruit%2)*13-6 : 0)+axisX;
  const depth=round3D(batch.key)?Fruit3D.section(batch.key,portion).y:portion;
  const y = batch.first+fruit*batch.spacing+batch.length*depth;
  return {x,y,portion};
}
function boardView(key) {
  const batch=batches[key];
  const extent=(batch.count-1)*batch.spacing+batch.length;
  const scale=Math.min(1.9,300/(extent+batch.top));
  return {scale,top:Math.max(52+batch.top*scale,200-(extent-batch.top)*scale/2)};
}
function updateChopPhysics(t,key,batch,count,view) {
  const {Bodies,Body,Composite,Engine}=Matter;
  if(!chopPhysics||chopPhysics.cuts!==board.cuts||chopPhysics.key!==key) {
    const engine=Engine.create({enableSleeping:true,gravity:{x:0,y:0}});
    Composite.add(engine.world,[
      Bodies.rectangle(116,210,20,380,{isStatic:true}),Bodies.rectangle(604,210,20,380,{isStatic:true}),
      Bodies.rectangle(360,23,500,20,{isStatic:true}),Bodies.rectangle(360,393,500,20,{isStatic:true}),
    ]);
    chopPhysics={engine,key,cuts:board.cuts,count:0,pieces:[],last:t,obstacles:[]};
  }
  // Rebuild the remaining food's collider only when a cut changes its silhouette.
  if(chopPhysics.count!==count||!chopPhysics.obstacles.length) {
    for(const obstacle of chopPhysics.obstacles) Composite.remove(chopPhysics.engine.world,obstacle);
    chopPhysics.obstacles=[];
    for(let fruit=0;fruit<batch.count;fruit++) {
      const complete=Math.max(0,count-(batch.count-1-fruit)*batch.cuts);
      if(complete>=batch.cuts||round3D(key)) continue;
      const remaining=1-complete/(batch.cuts+1);
      const y=view.top+(fruit*batch.spacing+batch.length*remaining/2)*view.scale;
      const obstacle=Bodies.rectangle(360+(batch.count>1?(fruit%2)*13-6:0)*view.scale,y,
        batch.width*view.scale*.65,batch.length*remaining*view.scale*.9,{isStatic:true});
      chopPhysics.obstacles.push(obstacle);Composite.add(chopPhysics.engine.world,obstacle);
    }
  }
  for(let i=chopPhysics.count;i<count;i++) {
    const position=cutPosition(batch,i),section=cutSection(key,position.portion);
    const pieces=(i+1)%batch.cuts===0?2:1;
    for(let part=0;part<pieces;part++) {
      const range=chunkRange(batch,i,part);
      const radius=Math.max(...[range.start,(range.start+range.end)/2,range.end].map(p=>cutSection(key,p).radius));
      const halfHeight=key==='pepper'?batch.length*.48:Math.max(radius*.62,(range.end-range.start)*batch.length/2+radius*.24);
      const rx=radius*view.scale,ry=halfHeight*view.scale;
      const side=(i+part)%2?1:-1;
      const rawX=360+(position.x-360+(round3D(key)?0:section.offset))*view.scale+(key==='pepper'?rx+12:side*rx*.35);
      const x=Math.max(130+rx,Math.min(590-rx,rawX));
      const y=Math.min(376-ry,view.top+(position.y-batch.first)*view.scale+ry+5);
      const body=Bodies.circle(x,y,Math.max(3,rx*.74),{restitution:0,friction:.7,frictionAir:.18,collisionFilter:{category:2,mask:1}});
      // Narrow colliders let thin slices overlap slightly as a shallow pile.
      Body.scale(body,1,Math.max(.35,ry/Math.max(3,rx)));
      Body.setVelocity(body,{x:side*(.45+i%3*.08),y:.28});
      Body.setAngularVelocity(body,side*.0015);
      Composite.add(chopPhysics.engine.world,body);chopPhysics.pieces.push({body,radius,halfHeight,range});
    }
  }
  chopPhysics.count=count;
  Engine.update(chopPhysics.engine,Math.min(1000/60,Math.max(0,t-chopPhysics.last)));
  chopPhysics.last=t;
  for(const {body,radius,halfHeight} of chopPhysics.pieces) {
    if(Math.abs(body.angle)>.18) {Body.setAngle(body,Math.sign(body.angle)*.18);Body.setAngularVelocity(body,0);}
    const rx=radius*view.scale,ry=halfHeight*view.scale,c=Math.cos(body.angle),sn=Math.sin(body.angle);
    const ex=Math.hypot(rx*c,ry*sn)+3,ey=Math.hypot(rx*sn,ry*c)+4;
    const x=Math.max(128+ex,Math.min(592-ex,body.position.x));
    const y=Math.max(38+ey,Math.min(378-ey,body.position.y));
    if(x!==body.position.x||y!==body.position.y) {
      Body.setVelocity(body,{x:x===body.position.x?body.velocity.x:-body.velocity.x*.2,
        y:y===body.position.y?body.velocity.y:-body.velocity.y*.2});
      Body.setPosition(body,{x,y});
    }
  }
}
function knifeMotion(elapsed) {
  if(elapsed<0||elapsed>=320) return {press:0,rotation:0};
  const u=Math.max(0,(elapsed-35)/285);
  const press=1-u*u*(3-2*u);
  return {press,rotation:-.025*press};
}

function drawBoard(t) {
  ctx.fillStyle='#fff1d9';ctx.fillRect(0,0,720,430);
  rounded(104,24,512,386,34,'#a36233');
  rounded(104,13,512,385,34,gradient(108,12,620,395,['#eab575','#ffd397','#e8aa65']));
  ctx.save(); ctx.beginPath(); ctx.roundRect(110,19,500,371,28); ctx.clip();
  for(let i=0;i<15;i++){
    ctx.beginPath();ctx.moveTo(106,35+i*25);ctx.bezierCurveTo(240,22+i*25,470,59+i*25,626,35+i*25);
    ctx.strokeStyle=i%2?'#fff1c52c':'#a76a371c';ctx.lineWidth=i%2?5:2;ctx.stroke();
  }
  ctx.restore();
  ctx.save();ctx.beginPath();ctx.roundRect(110,19,500,371,28);ctx.clip();
  for(let i=0;i<160;i++) {
    const x=113+i*3.12;
    ctx.beginPath();ctx.moveTo(x,20);ctx.bezierCurveTo(x-4,130,x+5,260,x+Math.sin(i)*3,391);
    ctx.strokeStyle=i%3?'#8c4c2010':'#fff1c527';ctx.lineWidth=.6+i%3*.25;ctx.stroke();
  }
  ctx.restore();
  ctx.beginPath();ctx.roundRect(117,27,486,359,25);
  ctx.strokeStyle='#8e502b40';ctx.lineWidth=3;ctx.stroke();
  rounded(517,36,57,14,7,'#80502c');
  const cuts=board.cuts.filter(time=>t>=time);
  const count=cuts.length;
  const key=board.food;
  round3D(key);
  const batch=batches[key];
  const total=batch.cuts*batch.count;
  const view=boardView(key);
  updateChopPhysics(t,key,batch,count,view);
  const exposed=[];
  ctx.save();ctx.translate(360,view.top);ctx.scale(view.scale,view.scale);
  ctx.translate(-360,-batch.first);
  for(let i=0;i<batch.count;i++){
    const complete=Math.max(0,count-(batch.count-1-i)*batch.cuts);
    if(complete>=batch.cuts) continue;
    const x=360+(batch.count>1?(i%2)*13-6:0), y=batch.first+i*batch.spacing;
    const remaining=1-complete/(batch.cuts+1);
    if(key==='berry') strawberry(x,y,remaining);
    else if(key==='blueberry') blueberry(x,y,remaining);
    else if(key==='carrot'||key==='cucumber') vegetable(key,x,y,remaining);
    else wholeFood(key,x,y,remaining);
    if(complete>0&&!round3D(key)) {
      const section=cutSection(key,remaining);
      exposed.push([key,x+section.offset,y+batch.length*remaining,section.radius,0,true,remaining]);
    }
  }
  exposed.forEach(args=>slice(...args));
  for(const piece of [...chopPhysics.pieces].sort((a,b)=>a.body.position.y-b.body.position.y)) {
    const x=360+(piece.body.position.x-360)/view.scale;
    const y=batch.first+(piece.body.position.y-view.top)/view.scale;
    paintChunk(key,x,y,piece);
  }
  ctx.restore();
  const sinceCut=t-(cuts.at(-1)??-Infinity);
  const motion=knifeMotion(sinceCut);
  const next=cutPosition(batch,Math.min(total-1,count));
  const last=cutPosition(batch,Math.max(0,count-1));
  const restY=Math.max(36,view.top+(next.y-batch.first)*view.scale-87);
  const strikeY=view.top+(last.y-batch.first)*view.scale-knifeHeight*.92;
  const knifeY=restY+(strikeY-restY)*motion.press;
  ctx.save();
  if(key==='pepper'&&round3D(key)) {
    const nextX=360+(next.x-360)*view.scale,lastX=360+(last.x-360)*view.scale;
    const restX=nextX+knifeHeight*.77+22,strikeX=lastX+knifeHeight*.77*.92;
    ctx.translate(restX+(strikeX-restX)*motion.press,39);ctx.rotate(Math.PI/2+motion.rotation);ctx.scale(.77,.77);
  } else {ctx.translate(520,knifeY+12);ctx.rotate(motion.rotation);ctx.translate(-330,-12);}
  ctx.shadowColor='#49331d2b';ctx.shadowBlur=5+Math.abs(strikeY-knifeY)*.05;
  ctx.shadowOffsetX=1;ctx.shadowOffsetY=2+Math.abs(strikeY-knifeY)*.035;
  if(knifeImage.complete&&knifeImage.naturalWidth>0) {
    ctx.drawImage(knifeImage,...knifeRect,0,0,knifeWidth,knifeHeight);
  } else {
  ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(343,0);ctx.lineTo(343,36);
  ctx.quadraticCurveTo(96,63,0,0);
  ctx.fillStyle=gradient(0,0,0,45,['#dce7ee','#9eafb9','#f6fbff']);ctx.fill();
  ctx.shadowColor='transparent';
  rounded(330,-4,112,30,12,gradient(0,-4,0,26,['#504741','#272521','#443a33']));
  oval(367,11,4,4,'#d3c2ad');oval(411,11,4,4,'#d3c2ad');
  }
  ctx.restore();
}
function drawSeedPacket(key,x,y,scale,target=ctx) {
  const previous=ctx;ctx=target;ctx.save();
  try {
    ctx.translate(x,y);ctx.scale(scale,scale);
    rounded(-27,-36,54,72,7,gradient(-27,-36,27,36,['#fff9dc','#e8d1a3']));
    rounded(-27,-36,54,9,4,'#89a95b');
    rounded(-22,-21,44,43,5,'#fffdf4');
    const b=batches[key];drawIngredient(key,0,1,35/Math.max(b.length+b.top,b.width),-.1);
    for(let i=0;i<3;i++)oval(-9+i*9,29,2.4,3.5,'#8b633e');
  } finally {ctx.restore();ctx=previous;}
}
function drawWateringCan(x,y,scale,target=ctx) {
  const previous=ctx;ctx=target;ctx.save();
  try {
    ctx.translate(x,y);ctx.scale(scale,scale);
    ctx.beginPath();ctx.ellipse(20,-9,19,21,0,0,Math.PI*2);ctx.strokeStyle='#3d8295';ctx.lineWidth=8;ctx.stroke();
    ctx.beginPath();ctx.moveTo(-23,-5);ctx.lineTo(-48,-22);ctx.lineTo(-53,-14);ctx.lineTo(-23,18);ctx.closePath();
    ctx.fillStyle=gradient(-55,-15,-20,15,['#95d4db','#478fa1']);ctx.fill();
    rounded(-27,-25,48,52,10,gradient(-27,-20,22,20,['#acdfe0','#64aeba','#3b8299']));
    oval(-3,-25,24,7,'#34768b');oval(-3,-27,20,4,'#c8ece8');
    oval(-51,-20,9,5,'#8abac5');
    for(let i=0;i<4;i++)oval(-56+i*3,-20,1,1,'#2f6e85');
    rounded(-19,-13,5,27,3,'#e6f9ed70');
  } finally {ctx.restore();ctx=previous;}
}
function drawHarvestBasket() {
  ctx.save();
  ctx.beginPath();ctx.moveTo(288,347);ctx.bezierCurveTo(280,271,438,271,432,347);
  ctx.strokeStyle='#c28a4f';ctx.lineWidth=13;ctx.stroke();
  oval(360,349,116,31,'#b77c43');
  ctx.beginPath();ctx.moveTo(246,348);ctx.lineTo(265,395);ctx.quadraticCurveTo(360,428,455,395);ctx.lineTo(474,348);ctx.quadraticCurveTo(360,385,246,348);
  ctx.fillStyle=gradient(0,349,0,416,['#f1ca88','#d7a464','#bd8248']);ctx.fill();
  ctx.save();ctx.clip();
  for(let i=0;i<6;i++) {
    ctx.beginPath();ctx.moveTo(258,360+i*8);ctx.quadraticCurveTo(360,397+i*5,462,360+i*8);ctx.strokeStyle='#9d673c35';ctx.lineWidth=2;ctx.stroke();
  }
  for(let i=0;i<11;i++){ctx.beginPath();ctx.moveTo(260+i*20,357);ctx.lineTo(272+i*17.5,401);ctx.strokeStyle='#fff0c84d';ctx.lineWidth=3;ctx.stroke();}
  ctx.restore();
  oval(340,382,3.5,4.5,'#69462f');oval(380,382,3.5,4.5,'#69462f');
  oval(328,389,8,4,'#efad9366');oval(392,389,8,4,'#efad9366');
  ctx.beginPath();ctx.arc(360,383,9,.15,Math.PI-.15);ctx.strokeStyle='#775035';ctx.lineWidth=2;ctx.stroke();
  if(carried?.kind==='harvest') {ctx.beginPath();ctx.ellipse(360,350,121,36,0,0,Math.PI*2);ctx.strokeStyle='#fff4a2';ctx.lineWidth=4;ctx.stroke();}
  ctx.restore();
}
function drawEmptyPlotHint(x,t) {
  ctx.save();ctx.globalAlpha=reduceMotion?.8:.55+.3*Math.sin(t*Math.PI/1100);
  ctx.beginPath();ctx.ellipse(x,234,43,18,0,0,Math.PI*2);
  ctx.setLineDash([4,3]);ctx.lineWidth=1.8;ctx.strokeStyle='#fff3bd';ctx.stroke();ctx.restore();
}
function seedGuidePoint(start,target,elapsed) {
  const phase=((elapsed%3600)+3600)%3600/3600;
  const u=Math.max(0,Math.min(1,(phase-.16)/.56)),ease=u*u*(3-2*u);
  const v=1-ease;
  return {x:v*v*v*start.x+3*v*v*ease*start.x+3*v*ease*ease*target.x+ease*ease*ease*target.x,
    y:v*v*v*start.y+3*v*v*ease*(target.y+100)+3*v*ease*ease*(target.y+80)+ease*ease*ease*target.y,
    moving:phase>.16,opacity:phase<.8?1:Math.max(0,1-(phase-.8)/.12)};
}
function drawGuideHand(x,y) {
  ctx.save();ctx.translate(x,y);ctx.scale(1.2,1.2);
  ctx.shadowColor='#49332125';ctx.shadowBlur=3;ctx.shadowOffsetY=2;
  ctx.beginPath();ctx.moveTo(-3,10);ctx.lineTo(-3,-7);ctx.quadraticCurveTo(-3,-13,1,-13);
  ctx.quadraticCurveTo(5,-13,5,-7);ctx.lineTo(5,3);
  ctx.bezierCurveTo(9,0,13,3,12,7);ctx.bezierCurveTo(18,5,21,9,18,14);
  ctx.lineTo(15,23);ctx.quadraticCurveTo(5,27,-1,20);ctx.lineTo(-8,12);
  ctx.quadraticCurveTo(-11,7,-7,6);ctx.quadraticCurveTo(-5,6,-3,10);ctx.closePath();
  ctx.fillStyle='#fffaf0';ctx.fill();ctx.shadowColor='transparent';ctx.strokeStyle='#8a755d';ctx.lineWidth=1.2;ctx.stroke();ctx.restore();
}
function drawFarmGuide(t) {
  const visible=scene==='farm'&&!farm.plots[farm.activePlot]&&!carried;
  if(farmGuideCanvas)farmGuideCanvas.hidden=!visible;
  if(!visible||!window.innerWidth||!window.innerHeight)return;
  if(!farmGuideCanvas) {
    farmGuideCanvas=document.createElement('canvas');farmGuideCanvas.setAttribute('aria-hidden','true');
    farmGuideCanvas.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:5;';document.body.append(farmGuideCanvas);
  }
  const width=window.innerWidth,height=window.innerHeight,dpr=Math.min(window.devicePixelRatio||1,2);
  if(farmGuideCanvas.width!==Math.round(width*dpr)||farmGuideCanvas.height!==Math.round(height*dpr)) {
    farmGuideCanvas.width=Math.round(width*dpr);farmGuideCanvas.height=Math.round(height*dpr);
    farmGuideCanvas.style.width=width+'px';farmGuideCanvas.style.height=height+'px';
  }
  const guide=farmGuideCanvas.getContext('2d');guide.setTransform(dpr,0,0,dpr,0,0);guide.clearRect(0,0,width,height);
  const packet=tray.querySelectorAll('[data-item]')[0];if(!packet)return;
  const source=packet.getBoundingClientRect(),bed=stage.getBoundingClientRect();
  const start={x:source.left+source.width/2,y:source.top+source.height/2};
  const target={x:bed.left+bed.width*.5,y:bed.top+bed.height*(425/900)};
  const p=reduceMotion?{...start,moving:false,opacity:1}:seedGuidePoint(start,target,t-(farm.guideAt||0));
  const previous=ctx;ctx=guide;ctx.save();
  try {
    ctx.globalAlpha=p.opacity;
    ctx.beginPath();ctx.moveTo(start.x,start.y);
    ctx.bezierCurveTo(start.x,target.y+100,target.x,target.y+80,target.x,target.y);
    ctx.strokeStyle='#b9935970';ctx.lineWidth=2;ctx.setLineDash([5,7]);ctx.stroke();ctx.setLineDash([]);
    if(p.moving)drawSeedPacket(packet.dataset.item,p.x,p.y,1.1);
    drawGuideHand(p.x+15,p.y+25);
  } finally {ctx.restore();ctx=previous;}
}
function drawFarm(t) {
  ctx.fillStyle=gradient(0,0,0,900,['#eff9d6','#c8e394']);ctx.fillRect(0,0,720,900);
  for(let i=0;i<20;i++)oval(24+i*43,115+(i%5)*137,12,4,'#a6c57238');
  for(let i=0;i<3;i++) {
    const x=180+i*180;
    oval(x,85,49,30,i===farm.activePlot?'#e2b86c':'#b4cf84');
    oval(x,79,42,23,'#9b6845');
    if(farm.plots[i])drawIngredient(farm.plots[i].food,x,66,46/Math.max(batches[farm.plots[i].food].length+batches[farm.plots[i].food].top,batches[farm.plots[i].food].width),0);
    else {oval(x,79,7,4,'#eed1a0');}
  }
  const i=farm.activePlot,plot=farm.plots[i];
  ctx.save();ctx.translate(360,450);ctx.scale(2.55,2.55);ctx.translate(-(153+i*207),-244);
  (()=>{
    const x=153+i*207;
    oval(x,262,93,45,'#7d61253f');
    oval(x,244,92,45,gradient(x,210,x,286,['#b87e4f','#865236']));
    oval(x,233,83,31,'#9a6345');
    for(let j=0;j<12;j++) oval(x+((j*37)%144)-72,229+(j%3)*8,3+(j%3),2,'#db9d644c');
    if(carried&&((carried.kind==='seed'&&!plot)||(carried.kind==='water'&&plot?.watered===null))) {
      ctx.beginPath();ctx.ellipse(x,236,85,33,0,0,Math.PI*2);ctx.strokeStyle='#fff4a6';ctx.lineWidth=4;ctx.setLineDash([7,6]);ctx.stroke();ctx.setLineDash([]);
    }
    if(!plot) {
      drawEmptyPlotHint(x,t);
      return;
    }
    if(plot.watered===null) {
      const fall=plot.planted===undefined?1:Math.min(1,(t-plot.planted)/400);
      const seedY=169+68*fall*fall;
      oval(x,239,11,6,'#624025');oval(x-2,seedY,5,3,'#e5bd70');return;
    }
    const elapsed=t-plot.watered;
    const progress=Math.min(1,Math.max(0,elapsed/5200));
    if(elapsed<780) for(let j=0;j<4;j++) oval(x-39+j*24,174+(elapsed/9+j*9)%54,4,8,'#79cbed');
    if(progress<.5) stem(x,236,.2+progress*1.2);
    else {
      const y=223-(progress-.5)*145+(pulling?.i===i?pulling.dy:0);
      if(carried?.kind!=='harvest'||carried.i!==i)drawIngredient(plot.food,x,y+13,(35+progress*65)/Math.max(batches[plot.food].length+batches[plot.food].top,batches[plot.food].width),-.08);
      if(progress===1) glyph('✨',x+50,y-12,29);
    }

  })();
  ctx.restore();
  ctx.save();ctx.translate(300,780);ctx.scale(1.85,1.85);ctx.translate(-360,-370);
  drawHarvestBasket();
  farm.harvest.slice(-5).forEach((key,i)=>drawIngredient(key,283+i*38,339,39/Math.max(batches[key].length+batches[key].top,batches[key].width),-.2));
  ctx.restore();
  drawWateringCan(612,650,2.25);
  if(farm.watering) {
    const elapsed=t-farm.watering.at;
    if(elapsed<1000&&farm.watering.i===i) {
      ctx.save();ctx.translate(445,270);ctx.rotate(-.28*Math.sin(elapsed/1000*Math.PI));drawWateringCan(0,0,1.8);ctx.restore();
      for(let j=0;j<12;j++)oval(350+(j%3-1)*16,320+(elapsed/4+j*21)%125,4,9,'#73c7e8');
    } else if(elapsed>=1000)farm.watering=null;
  }
  if(carried?.kind==='seed')drawSeedPacket(carried.key,carried.x,carried.y-50,2.6);
  else if(carried?.kind==='water')drawWateringCan(carried.x+45,carried.y-55,2.25);
  else if(carried?.kind==='harvest')drawIngredient(carried.key,carried.x,carried.y-65,240/Math.max(batches[carried.key].length+batches[carried.key].top,batches[carried.key].width),-.12);
}

function mixedColor(items) {
  return [0,1,2].map(channel=>Math.round(items.reduce((sum,key)=>sum+foods[key].juice[channel],0)/items.length));
}
function drawCup(color,amount,count) {
  ctx.save();ctx.translate(-460,0);
  oval(591,392,67,10,'#6e3a7820');
  ctx.beginPath();ctx.moveTo(542,265);ctx.lineTo(553,378);
  ctx.quadraticCurveTo(590,396,627,378);ctx.lineTo(639,265);ctx.closePath();
  ctx.fillStyle=gradient(542,265,639,378,['#ffffffa6','#ffffff38','#ffffffb3']);ctx.fill();
  ctx.save();ctx.clip();
  if(amount>0) {
    const surface=382-(25+count*11)*amount;
    ctx.fillStyle=gradient(0,surface,0,385,[`rgb(${color.map(v=>Math.min(255,v+35))})`,`rgb(${color})`]);
    ctx.fillRect(542,surface,98,130);
    oval(590,surface,44,7,'#ffffff45');
    for(let i=0;i<5;i++) oval(569+i*10,surface+3+i%2*5,1.5,1.2,'#fff9');
  }
  rounded(557,281,5,79,3,'#ffffff9c');
  ctx.restore();
  ctx.beginPath();ctx.moveTo(542,265);ctx.lineTo(553,378);
  ctx.quadraticCurveTo(590,396,627,378);ctx.lineTo(639,265);
  ctx.strokeStyle='#9a83b7';ctx.lineWidth=3;ctx.stroke();
  ctx.beginPath();ctx.ellipse(590,265,49,9,0,0,Math.PI*2);
  ctx.strokeStyle='#fffdf4';ctx.lineWidth=4;ctx.stroke();
  ctx.restore();
}
function drawBlender(t) {
  ctx.fillStyle=gradient(0,0,0,430,['#f8edff','#e9d4fa']);ctx.fillRect(0,0,720,430);
  rounded(0,332,720,98,0,'#d9b4e9');
  oval(365,399,162,19,'#6e3a7832');
  rounded(256,306,208,96,33,gradient(256,310,462,397,['#9678cb','#7353b3','#573496']));
  oval(360,364,34,27,'#412774');
  oval(360,358,29,22,'#d9f77e');
  glyph('▶',361,358,24);
  const poured=pourAmount(t);
  let tilt=0,jarOffset=blend.dragging||{dx:0,dy:0};
  const liquid=Math.max(0,Math.min(1,(poured-.25)/.6));
  if(blend.returning&&!blend.dragging) {
    const u=Math.min(1,(t-blend.returning.at)/220),ease=(1-u)**3;
    jarOffset={dx:blend.returning.from.dx*ease,dy:blend.returning.from.dy*ease};
    if(u===1)blend.returning=null;
  }
  if(blend.pourStarted!==null&&poured<1) {
    const origin=blend.pourOrigin||{dx:0,dy:0};
    const targetTilt=-.38,targetX=130-(360-136*Math.cos(targetTilt)+236*Math.sin(targetTilt));
    if(poured<.25) {
      const u=poured/.25,ease=u*u*(3-2*u);tilt=targetTilt*ease;
      jarOffset={dx:origin.dx+(targetX-origin.dx)*ease,dy:origin.dy+(-20-origin.dy)*ease};
    } else if(poured<.85) {tilt=targetTilt;jarOffset={dx:targetX,dy:-20};}
    else {
      const u=(poured-.85)/.15,ease=1-u*u*(3-2*u);tilt=targetTilt*ease;jarOffset={dx:targetX*ease,dy:-20*ease};
    }
  }
  const progress=blend.started===null?0:Math.min(1,Math.max(0,(t-blend.started)/1900));
  const cupVisible=progress===1;
  if(cupTarget) {cupTarget.hidden=!cupVisible;cupTarget.disabled=blend.pourStarted!==null;}
  if(cupVisible) drawCup(mixedColor(blend.items),liquid,blend.items.length);
  ctx.save();ctx.translate(jarOffset.dx,jarOffset.dy);ctx.translate(360,310);ctx.rotate(tilt);ctx.translate(-360,-310);
  ctx.beginPath();ctx.moveTo(249,67);ctx.lineTo(224,74);ctx.quadraticCurveTo(230,85,252,92);
  ctx.fillStyle='#fff9';ctx.fill();ctx.strokeStyle='#9477b8';ctx.lineWidth=4;ctx.stroke();
  rounded(449,106,62,140,24,'#9675b375');
  rounded(464,122,30,108,14,'#f1e3fb');
  ctx.save();
  ctx.beginPath();ctx.moveTo(246,67);ctx.lineTo(474,67);ctx.lineTo(436,308);
  ctx.quadraticCurveTo(360,330,284,308);ctx.closePath();
  ctx.fillStyle='#ffffff61';ctx.fill();ctx.clip();
  if(blend.items.length) {
    if(progress>0&&liquid<1) {
      const color=mixedColor(blend.items);
      const surface=320-(37+blend.items.length*19)*(1-liquid);
      ctx.globalAlpha=Math.min(1,progress*1.6);
      ctx.fillStyle=gradient(0,surface,0,320,[`rgb(${color.map(v=>Math.min(255,v+42)).join(',')})`,`rgb(${color.join(',')})`]);
      ctx.fillRect(241,surface,240,320-surface);
      oval(360,surface,112,12,'#ffffff39'); ctx.globalAlpha=1;
      for(let i=0;i<8&&progress<1;i++) oval(360+Math.sin(t/105+i)*68,surface+20+(i*17)%85,3+i%4,3+i%4,'#fff9');
    }
    blend.items.forEach((key,i)=>{
      ctx.globalAlpha=1-progress;
      const angle=t/125+i*2.4;
      const x=316+(i%3)*44+(progress>0?Math.sin(angle)*22:0);
      const y=302-Math.floor(i/3)*64-(batches[key].length+batches[key].top)*mixerScale/2+(progress>0?Math.cos(angle)*26:0);
      if(progress>0) oval(x,y,24,17,`rgb(${foods[key].juice.join(',')})`);
      drawIngredient(key,x,y,mixerScale,progress>0?angle:-.2+(i%3)*.2);
    });
    ctx.globalAlpha=1;
  }
  rounded(272,91,12,173,6,'#ffffff82');
  ctx.restore();
  ctx.beginPath();ctx.moveTo(246,68);ctx.lineTo(284,308);ctx.quadraticCurveTo(360,330,436,308);ctx.lineTo(474,68);
  ctx.strokeStyle='#9477b8';ctx.lineWidth=6;ctx.stroke();
  if(poured===0||poured===1) {
    rounded(233,51,254,30,13,gradient(0,51,0,81,['#c4a4e7','#8e6bc1']));
    rounded(320,39,80,17,7,'#a382cd');
  }
  ctx.restore();
  if(poured>.25&&poured<.85) {
    ctx.save();
    const spoutX=jarOffset.dx+360-136*Math.cos(tilt)+236*Math.sin(tilt);
    const spoutY=jarOffset.dy+310-136*Math.sin(tilt)-236*Math.cos(tilt);
    ctx.beginPath();ctx.moveTo(spoutX,spoutY);
    ctx.bezierCurveTo(spoutX-15,spoutY+15,130,230,130,382-(25+blend.items.length*11)*liquid);
    ctx.strokeStyle=`rgb(${mixedColor(blend.items)})`;ctx.lineWidth=9;ctx.lineCap='round';ctx.stroke();
    ctx.restore();
  }
  if(carried) drawIngredient(carried.key,carried.x,carried.y,mixerScale,-.25);
  if(progress===1) hint.textContent=blend.pourStarted===null?'주스 완성! 믹서 통을 왼쪽 컵으로 끌어요.':
    poured<1?'쪼르르! 컵에 주스를 따라요.':'컵에 주스 완성! 비우기를 눌러 또 만들어요.';
}
function draw(t) {
  if(scene==='farm') drawFarm(t);
  else if(scene==='board') drawBoard(t);
  else drawBlender(t);
  drawFarmGuide(t);
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
