window.LC=(()=>{
const RAW='https://raw.githubusercontent.com/changeon1031/mc-img-tmp/main/';
const CDN='https://cdn.imweb.me/upload/S20261007f588fffea0abb/';
const FILES=['lc_1.jpg','lc_2.jpg','lc_3.jpg','lc_4.jpg','wal_sg_fab.jpg'];
const FONT_SANS="'Noto Sans KR','Apple SD Gothic Neo','Noto Sans CJK KR','Malgun Gothic',sans-serif";
const root=()=>document.querySelector('bo-shopping-product').shadowRoot;
const setVal=(el,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,v);['input','change','blur'].forEach(t=>el.dispatchEvent(new Event(t,{bubbles:true})))};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function pass1(){
  const r=root();
  setVal(r.querySelector('input[placeholder="상품명을 입력해 주세요."]'),'Alcantara Lumbar Cushion');
  const pr=[...r.querySelectorAll('input')].filter(i=>i.placeholder==='0')[0];
  setVal(pr,'229000');
  for(let n=0;n<12;n++){const it=r.querySelectorAll('.image-item');if(!it.length)break;const b=it[0].querySelector('.delete-button');if(b)b.click();await sleep(700);}
  const left=r.querySelectorAll('.image-item').length;
  const dt=new DataTransfer();
  for(const f of FILES){const blob=await (await fetch(RAW+f+'?_='+Date.now())).blob();dt.items.add(new File([blob],f,{type:'image/jpeg'}));}
  const inp=r.querySelector('input[type=file]');
  inp.files=dt.files;inp.dispatchEvent(new Event('change',{bubbles:true}));
  await sleep(6000);
  return JSON.stringify({left,now:r.querySelectorAll('.image-item').length,price:pr.value,name:r.querySelector('input[placeholder="상품명을 입력해 주세요."]').value});
}
function ids(){return [...root().querySelectorAll('.image-item img')].map(i=>(i.src.match(/upload\/[^/]+\/([0-9a-f]+)\.jpg/)||[])[1]);}
function rt(node,from,to){let n=0;const w=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);const a=[];while(w.nextNode())a.push(w.currentNode);a.forEach(t=>{if(t.nodeValue.includes(from)){t.nodeValue=t.nodeValue.split(from).join(to);n++}});return n;}
function e0html(){
  const li=t=>`<p style="margin:0 0 7px;font-size:14px;font-weight:300;color:#222;line-height:1.6;letter-spacing:-0.01em;"><span style="display:inline-block;width:18px;font-weight:500;color:#111;">✓</span>${t}</p>`;
  return `<div style="font-family:${FONT_SANS};color:#111;text-align:left;padding:4px 0 8px;"><p style="margin:0 0 18px;font-size:14px;line-height:1.9;font-weight:300;color:#333;letter-spacing:-0.01em;word-break:keep-all;"><span style="font-weight:500;color:#111;">알칸타라&reg; 소재로 감싼 쿠션입니다.</span> 부드러운 촉감과 단정한 실루엣이 특징입니다.</p><div style="margin:0 0 8px;">${li('부드러운 촉감의 알칸타라&reg; 소재')}${li('허리를 편안하게 받쳐 주는 쿠션')}${li('가로 40cm · 세로 26cm · 두께 15cm')}${li('가장자리를 따라 이어지는 단정한 파이핑 마감')}</div></div>`;
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
   [I[1],'알칸타라® 재질의 쿠션','손에 닿는 순간 전해지는 부드러운 결과 단정한 실루엣을 경험해 보세요.'],
   [I[2],'허리의 편안함','허리 뒤를 부드럽게 받쳐 앉아 있는 시간에 편안함을 더합니다.'],
   [I[4],'알칸타라® 재질의 부드러움','알칸타라® 소재만이 전하는 부드러운 결과 촉감을 경험해 보세요.']];
  cards.forEach((c,i)=>{
    if(i>=3){c.remove();return;}
    const im=c.querySelector('img');const ps=c.querySelectorAll('p');
    im.setAttribute('src',CDN+spec[i][0]+'.jpg');im.setAttribute('alt','Alcantara Lumbar Cushion '+spec[i][1]);
    ps[0].textContent=spec[i][1];ps[1].textContent=spec[i][2];});
  const hadWhy=!!why; if(why) why.remove();
  const L=[hadWhy?1:0];
  L.push(rt(mat,'이 헤드레스트에서도 닿는 순간의 질감이','이 쿠션에서도 닿는 순간의 질감이'));
  const rows=[...det.querySelectorAll('div')].filter(x=>x.children.length===2&&x.children[0].tagName==='SPAN'&&x.children[1].tagName==='SPAN');
  rows.forEach(rw=>{const a=rw.children[0].textContent,b=rw.children[1];
    if(a==='Material')b.textContent='알칸타라®';
    if(a==='Fit'){rw.remove();return;}
    if(a==='Size')b.textContent='가로 40cm × 세로 26cm × 두께 15cm';});
  L.push(rt(faq,'어떻게 장착하나요?','어떻게 사용하나요?'));
  L.push(rt(faq,'뒷면의 탄성 스트랩을 시트 헤드레스트에 둘러 버클로 고정합니다.','허리 뒤와 등받이 사이에 두고 사용합니다.'));
  L.push(rt(faq,'가로 29cm(상단)·20cm(하단), 세로 22cm, 두께 8cm입니다.','가로 40cm, 세로 26cm, 두께 15cm입니다.'));
  return {html:d.innerHTML,log:L,cards:cards.length};
}
async function pass2(){
  const I=ids();if(I.length<5||I.some(x=>!x))return 'IDS_BAD '+JSON.stringify(I);
  const E0=FroalaEditor.INSTANCES[0],E1=FroalaEditor.INSTANCES[1];
  E0.html.set(e0html());E0.events.trigger('contentChanged');
  const b=e1html(I,E1.html.get());E1.html.set(b.html);E1.events.trigger('contentChanged');
  return 'OK '+I.join(',')+' | '+JSON.stringify(b.log)+' cards='+b.cards;
}
async function trim(){
  const r=root();
  for(let n=0;n<4;n++){const it=r.querySelectorAll('.image-item');if(it.length<=4)break;const b=it[it.length-1].querySelector('.delete-button');if(b)b.click();await sleep(800);}
  return r.querySelectorAll('.image-item').length;
}
function save(){[...root().querySelectorAll('button')].find(x=>x.textContent.trim()==='저장').click();return 1}
return {pass1,pass2,ids,trim,save};
})();
