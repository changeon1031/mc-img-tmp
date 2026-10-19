window.LAP=(()=>{
const RAW='https://raw.githubusercontent.com/changeon1031/mc-img-tmp/main/';
const CDN='https://cdn.imweb.me/upload/S20261007f588fffea0abb/';
const FILES=['lap_1.jpg','lap_4.jpg','lap_7.jpg','lap_5.jpg','lap_2.jpg','lap_3.jpg','lap_6.jpg','wal_sg_fab.jpg'];
const root=()=>document.querySelector('bo-shopping-product').shadowRoot;
const setVal=(el,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,v);['input','change','blur'].forEach(t=>el.dispatchEvent(new Event(t,{bubbles:true})))};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function pass1(){
  const r=root();
  setVal(r.querySelector('input[placeholder="상품명을 입력해 주세요."]'),'Alcantara Laptop Bag - Space Grey');
  const pr=[...r.querySelectorAll('input')].filter(i=>i.placeholder==='0')[0];
  setVal(pr,'380000');
  for(let n=0;n<12;n++){const it=r.querySelectorAll('.image-item');if(!it.length)break;const b=it[0].querySelector('.delete-button');if(b)b.click();await sleep(700);}
  const left=r.querySelectorAll('.image-item').length;
  const dt=new DataTransfer();
  for(const f of FILES){
    const blob=await (await fetch(RAW+f+'?_='+Date.now())).blob();
    dt.items.add(new File([blob],f,{type:'image/jpeg'}));
  }
  const inp=r.querySelector('input[type=file]');
  inp.files=dt.files;inp.dispatchEvent(new Event('change',{bubbles:true}));
  await sleep(7000);
  return JSON.stringify({left,now:r.querySelectorAll('.image-item').length,price:pr.value,name:r.querySelector('input[placeholder="상품명을 입력해 주세요."]').value});
}
function ids(){return [...root().querySelectorAll('.image-item img')].map(i=>(i.src.match(/upload\/[^/]+\/([0-9a-f]+)\.jpg/)||[])[1]);}
function rt(node,from,to){let n=0;const w=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);const a=[];while(w.nextNode())a.push(w.currentNode);a.forEach(t=>{if(t.nodeValue.includes(from)){t.nodeValue=t.nodeValue.split(from).join(to);n++}});return n;}
function e0html(cur){
  const d=new DOMParser().parseFromString('<body>'+cur+'</body>','text/html').body;
  const log=[];
  log.push(rt(d,'알칸타라® 소재로 감싼 더플백입니다.','알칸타라® 소재로 감싼 노트북 가방입니다.'));
  log.push(rt(d,'내부 지퍼 포켓과 수납 포켓','노트북을 넣고도 소지품을 더 담는 넉넉한 수납'));
  log.push(rt(d,'두 개의 손잡이를 갖춘 데일리 더플백','뒷면 스트랩으로 캐리어에 부착 가능'));
  log.push(rt(d,'단정한 상단 지퍼 마감','두 개의 손잡이와 단정한 상단 지퍼 마감'));
  return {html:d.innerHTML,log};
}
function e1html(I,cur){
  const d=new DOMParser().parseFromString('<body>'+cur+'</body>','text/html').body;
  const kids=[...d.children];
  const hl=kids.find(x=>x.textContent.includes('PREMIUM HIGHLIGHTS'));
  const why=kids.find(x=>x.textContent.includes('WHY ALCANTARA'));
  const mat=kids.find(x=>x.textContent.includes('THE MATERIAL'));
  const det=kids.find(x=>x.textContent.includes('DETAILS'));
  const faq=kids.find(x=>x.textContent.includes('FAQ'));
  const cards=[...hl.querySelectorAll('img')].map(i=>i.parentElement);
  const spec=[
   [I[1],'알칸타라® 재질의 처음 느껴보는 품격','손에 닿는 순간 전해지는 부드러운 결과 단정한 실루엣을 경험해 보세요.'],
   [I[2],'넓은 수납 공간','노트북을 넣고도 다른 소지품을 더 담을 수 있는 넉넉한 내부입니다.'],
   [I[5],'캐리어 부착 가능','뒷면 스트랩에 캐리어 손잡이를 통과시켜 함께 이동할 수 있습니다.'],
   [I[7],'알칸타라® 재질의 부드러움','알칸타라® 소재만이 전하는 부드러운 결과 촉감을 경험해 보세요.']];
  cards.forEach((c,i)=>{const im=c.querySelector('img');const ps=c.querySelectorAll('p');
    im.setAttribute('src',CDN+spec[i][0]+'.jpg');im.setAttribute('alt','Alcantara Laptop Bag '+spec[i][1]);
    ps[0].textContent=spec[i][1];ps[1].textContent=spec[i][2];});
  const bg=[...why.querySelectorAll('div')].find(x=>x.getAttribute('aria-label'));
  bg.setAttribute('aria-label','노트북 가방을 손에 든 모습');
  bg.setAttribute('style',bg.getAttribute('style').replace(/upload\/[^/]+\/[0-9a-f]+\.jpg/,'upload/S20261007f588fffea0abb/'+I[6]+'.jpg').replace(/&quot;/g,'"'));
  const L=[];
  L.push(rt(why,'알칸타라® 소재로 완성한 더플백입니다.','알칸타라® 소재로 완성한 노트북 가방입니다.'));
  L.push(rt(why,'내부 지퍼 포켓과 수납 포켓으로 소지품을 단정하게 담습니다.','노트북을 넣고도 다른 소지품을 더 담을 수 있도록 내부 지퍼 포켓과 수납 포켓을 갖추었습니다.'));
  L.push(rt(why,'편안한 휴대','캐리어 부착'));
  L.push(rt(why,'두 개의 손잡이를 갖춰 일상에서 간편하게 들 수 있습니다.','뒷면 스트랩에 캐리어 손잡이를 통과시켜 함께 이동할 수 있습니다.'));
  L.push(rt(mat,'이 더플백에서도','이 노트북 가방에서도'));
  const rows=[...det.querySelectorAll('div')].filter(x=>x.children.length===2&&x.children[0].tagName==='SPAN'&&x.children[1].tagName==='SPAN');
  rows.forEach(rw=>{const a=rw.children[0].textContent,b=rw.children[1];
    if(a==='Color'){const n=rw.cloneNode(true);n.children[0].textContent='Size';n.children[1].textContent='가로 40.5 × 세로 28.5 × 폭 8.5 cm';rw.after(n);}
    if(a==='Carry')b.textContent='두 개의 손잡이 · 캐리어 부착용 뒷면 스트랩';});
  const ds=[...faq.querySelectorAll('details')];
  const st=ds.find(x=>x.textContent.includes('수납공간은 어떤가요?'));
  L.push(rt(st,'내부에 지퍼 포켓과 수납 포켓을 갖추어 소지품을 정돈해 담기 좋습니다.','노트북을 넣고도 다른 소지품을 더 담을 수 있는 넉넉한 수납 공간입니다. 내부에 지퍼 포켓과 수납 포켓을 갖추었습니다.'));
  const cr=st.cloneNode(true);
  rt(cr,'수납공간은 어떤가요?','캐리어에 부착할 수 있나요?');
  rt(cr,'노트북을 넣고도 다른 소지품을 더 담을 수 있는 넉넉한 수납 공간입니다. 내부에 지퍼 포켓과 수납 포켓을 갖추었습니다.','뒷면의 스트랩에 캐리어 손잡이를 통과시켜 함께 이동할 수 있습니다.');
  st.after(cr);
  return {html:d.innerHTML,log:L};
}
async function pass2(){
  const I=ids();if(I.length<8||I.some(x=>!x))return 'IDS_BAD '+JSON.stringify(I);
  const E0=FroalaEditor.INSTANCES[0],E1=FroalaEditor.INSTANCES[1];
  const a=e0html(E0.html.get());E0.html.set(a.html);E0.events.trigger('contentChanged');
  const b=e1html(I,E1.html.get());E1.html.set(b.html);E1.events.trigger('contentChanged');
  return 'OK '+I.join(',')+' | '+JSON.stringify(a.log)+JSON.stringify(b.log);
}
async function trim(){
  const r=root();
  for(let n=0;n<4;n++){const it=r.querySelectorAll('.image-item');if(it.length<=6)break;const b=it[it.length-1].querySelector('.delete-button');if(b)b.click();await sleep(800);}
  return r.querySelectorAll('.image-item').length;
}
function save(){[...root().querySelectorAll('button')].find(x=>x.textContent.trim()==='저장').click();return 1}
return {pass1,pass2,ids,trim,save,e1html,e0html};
})();
