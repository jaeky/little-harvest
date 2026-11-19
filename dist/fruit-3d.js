/* Round fruit uses one camera and one stem-to-blossom axis for skin and flesh. */
window.Fruit3D=(()=>{
  const keys=['apple','watermelon','orange','peach','pepper'];
  let renderer,scene,camera,atlas,lying,data,failed=false;
  const models=new Map(),frames=new Map();
  const project=(x,y,z)=>{
    const v=new THREE.Vector3(x,y,z).project(camera);
    return {x:(v.x+1)*210,y:(1-v.y)*240};
  };
  function init(image,metadata,lyingAtlas){
    if(renderer)return true;if(failed)return false;
    try {
      atlas=image;lying=lyingAtlas;data=metadata;
      renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});
      renderer.setSize(420,480);renderer.setClearColor(0,0);renderer.localClippingEnabled=true;
      renderer.outputColorSpace=THREE.SRGBColorSpace;
      scene=new THREE.Scene();camera=new THREE.OrthographicCamera(-1.65,1.65,1.886,-1.886,.1,30);
      camera.position.set(0,7,4);camera.lookAt(0,0,0);camera.updateMatrixWorld();
      scene.add(new THREE.HemisphereLight(0xfff8e9,0x6d573a,1.4));
      const light=new THREE.DirectionalLight(0xfff5df,2.4);light.position.set(-3,5,4);scene.add(light);
      return true;
    } catch(error){failed=true;console.warn('3D fruit unavailable; using canvas artwork',error);return false;}
  }
  function model(key){
    if(models.has(key))return models.get(key);
    const lateral=key==='pepper',rotation=lateral?-.65:0;
    const group=new THREE.Group(),rz=lateral?.72:key==='watermelon'?1.42:1.05,rx=lateral?.88:key==='watermelon'?1:1.02,ry=lateral?1.14:.9;
    group.rotation.y=rotation;
    const geometry=new THREE.SphereGeometry(1,72,56);
    const vertices=geometry.attributes.position;
    // Camera-projected UVs preserve the full-resolution reference photo instead of stretching a small skin patch.
    const source=data[key][0],photo=document.createElement('canvas');
    photo.width=source.rect[2];photo.height=source.rect[3];
    photo.getContext('2d').drawImage(source.peach?window.peachImage:source.laid?lying:atlas,...source.rect,0,0,photo.width,photo.height);
    const projected=[];let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
    for(let i=0;i<vertices.count;i++) {
      const v=new THREE.Vector3(vertices.getX(i)*rx,vertices.getY(i)*ry,vertices.getZ(i)*rz).applyAxisAngle(new THREE.Vector3(0,1,0),rotation);
      const p=project(v.x,v.y,v.z);
      projected.push(p);minX=Math.min(minX,p.x);maxX=Math.max(maxX,p.x);minY=Math.min(minY,p.y);maxY=Math.max(maxY,p.y);
    }
    const uvs=[];
    for(const p of projected)uvs.push((p.x-minX)/(maxX-minX),1-(p.y-minY)/(maxY-minY));
    geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));
    const skinTexture=new THREE.CanvasTexture(photo);skinTexture.colorSpace=THREE.SRGBColorSpace;
    skinTexture.anisotropy=renderer.capabilities.getMaxAnisotropy();
    const photographicMaterial=new THREE.MeshBasicMaterial({map:skinTexture,alphaTest:.2});
    const skin=new THREE.Mesh(geometry,photographicMaterial);skin.scale.set(rx,ry,rz);group.add(skin);
    // The back stem and front blossom share the z axis with every cap and seed.
    const stem=new THREE.Mesh(new THREE.CylinderGeometry(.04,.065,.3,10),new THREE.MeshStandardMaterial({color:0x715031,roughness:.9}));
    stem.rotation.x=Math.PI/2;stem.position.z=-rz-.1;group.add(stem);
    const blossom=new THREE.Mesh(new THREE.CircleGeometry(.045,16),new THREE.MeshStandardMaterial({color:0x67452a,roughness:.9}));
    blossom.position.z=rz+.001;group.add(blossom);
    const faceCanvas=document.createElement('canvas');faceCanvas.width=256;faceCanvas.height=256;
    const fc=faceCanvas.getContext('2d'),rect=data[key][1].rect;
    if(lateral) {
      fc.fillStyle='#efb82b';fc.fillRect(0,0,256,256);
      fc.fillStyle='#fff5c8';fc.beginPath();fc.ellipse(128,133,108,117,0,0,Math.PI*2);fc.fill();
      fc.globalCompositeOperation='destination-out';fc.beginPath();fc.ellipse(128,150,83,91,0,0,Math.PI*2);fc.fill();fc.globalCompositeOperation='source-over';
      fc.fillStyle='#fff8db';fc.fillRect(121,43,14,161);
      for(let i=0;i<13;i++){fc.beginPath();fc.ellipse(128+(i%2?1:-1)*(10+i%3*5),64+i*5,4,6,(i%2?1:-1)*.5,0,Math.PI*2);fc.fill();}
    } else fc.drawImage(atlas,...rect,0,0,256,256);
    const texture=new THREE.CanvasTexture(faceCanvas);texture.colorSpace=THREE.SRGBColorSpace;
    const capMaterial=lateral?new THREE.MeshBasicMaterial({map:texture,transparent:true,alphaTest:.05,side:THREE.FrontSide}):new THREE.MeshStandardMaterial({map:texture,roughness:.68,side:THREE.FrontSide});
    const front=new THREE.Mesh(new THREE.CircleGeometry(1,72),capMaterial);
    const back=new THREE.Mesh(new THREE.CircleGeometry(1,72),capMaterial.clone());back.rotation.y=Math.PI;
    if(lateral){front.rotation.y=Math.PI/2;back.rotation.y=-Math.PI/2;}
    group.add(front,back);scene.add(group);group.visible=false;
    const result={group,skin,stem,blossom,front,back,rx,ry,rz,lateral,rotation,peachCaps:new Map()};models.set(key,result);return result;
  }
  function peachCap(m,p,r) {
    const id=p.toFixed(5);if(m.peachCaps.has(id))return m.peachCaps.get(id);
    const c=document.createElement('canvas');c.width=c.height=256;const g=c.getContext('2d');
    const flesh=g.createRadialGradient(128,128,10,128,128,178);
    flesh.addColorStop(0,'#ffe9b6');flesh.addColorStop(1,'#ffd18c');g.fillStyle=flesh;g.fillRect(0,0,256,256);
    for(let i=0;i<1600;i++){g.fillStyle=i%2?'#fff8df45':'#e7b47020';g.fillRect(i*73%256,i*131%256,1.2,1.2);}
    const z=Math.abs(p*2-1),pit=z<.44?.32*Math.sqrt(1-(z/.44)**2)/r:0;
    if(pit>0){
      const rad=pit*128,rect=data.peach[1].rect;
      g.save();g.beginPath();g.ellipse(128,128,rad,rad*1.12,0,0,Math.PI*2);g.clip();
      g.drawImage(atlas,rect[0]+rect[2]*.35,rect[1]+rect[3]*.25,rect[2]*.32,rect[3]*.55,128-rad,128-rad*1.12,rad*2,rad*2.24);g.restore();
    }
    const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;
    const material=new THREE.MeshStandardMaterial({map:texture,roughness:.7});m.peachCaps.set(id,material);return material;
  }
  function draw(key,start,end){
    const cacheKey=key+':'+start.toFixed(5)+':'+end.toFixed(5);
    if(frames.has(cacheKey))return frames.get(cacheKey);
    const m=model(key),axis=m.lateral?m.rx:m.rz,z0=(start*2-1)*axis,z1=(end*2-1)*axis;
    m.group.visible=true;
    const direction=new THREE.Vector3(m.lateral?1:0,0,m.lateral?0:1).applyAxisAngle(new THREE.Vector3(0,1,0),m.rotation);
    m.skin.material.clippingPlanes=[new THREE.Plane(direction.clone(),-z0),new THREE.Plane(direction.clone().negate(),z1)];
    m.stem.visible=false;m.blossom.visible=false;
    for(const [mesh,p,z,sign] of [[m.front,end,z1,1],[m.back,start,z0,-1]]){
      mesh.visible=p>0&&p<1;
      const r=Math.sqrt(Math.max(0,1-(p*2-1)**2));
      mesh.scale.set((m.lateral?m.rz:m.rx)*r,m.ry*r,1);
      mesh.position.set(m.lateral?z+sign*.001:0,0,m.lateral?0:z+sign*.001);
      if(key==='peach'&&mesh.visible)mesh.material=peachCap(m,p,r);
    }
    renderer.render(scene,camera);m.group.visible=false;
    const bitmap=document.createElement('canvas');bitmap.width=420;bitmap.height=480;
    bitmap.getContext('2d').drawImage(renderer.domElement,0,0);
    if(!m.bounds){
      const pixels=bitmap.getContext('2d').getImageData(0,0,420,480).data;
      let l=420,t=480,r=0,b=0;
      for(let y=0;y<480;y++)for(let x=0;x<420;x++)if(pixels[(y*420+x)*4+3]>10){l=Math.min(l,x);t=Math.min(t,y);r=Math.max(r,x);b=Math.max(b,y);}
      m.bounds={x:l,y:t,w:r-l+1,h:b-t+1};
    }
    const frame={bitmap,bounds:m.bounds};frames.set(cacheKey,frame);return frame;
  }
  function frame(key,start,end){if(!models.get(key)?.bounds)draw(key,0,1);return draw(key,start,end);}
  function section(key,p){
    frame(key,0,1);const m=model(key),b=m.bounds;
    const axis=m.lateral?m.rx:m.rz,z=(p*2-1)*axis;
    const v=new THREE.Vector3(m.lateral?z:0,0,m.lateral?0:z).applyAxisAngle(new THREE.Vector3(0,1,0),m.rotation);
    const c=project(v.x,v.y,v.z),r=Math.sqrt(Math.max(0,1-(p*2-1)**2));
    const edge=m.lateral?project(v.x+Math.abs(Math.sin(m.rotation))*m.rz*r,v.y,v.z):project(m.rx*r,0,z);
    return {x:(c.x-b.x)/b.w,y:(c.y-b.y)/b.h,radius:(edge.x-c.x)/b.w};
  }
  return {has:key=>keys.includes(key),init,frame,section};
})();
