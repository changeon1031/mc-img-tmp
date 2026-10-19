window.HR=(()=>{
const RAW='https://raw.githubusercontent.com/changeon1031/mc-img-tmp/main/';
const CDN='https://cdn.imweb.me/upload/S20261007f588fffea0abb/';
const FILES=['hr_1.jpg','hr_3.jpg','hr_2.jpg','hr_5.jpg','hr_6.jpg','hr_4.jpg','wal_sg_fab.jpg'];
const FONT_SANS="'Noto Sans KR','Apple SD Gothic Neo','Noto Sans CJK KR','Malgun Gothic',sans-serif";
const FONT_SERIF="'Cormorant Garamond','Noto Serif KR','Noto Serif CJK KR','Nanum Myeongjo','Apple Myungjo',serif";
const root=()=>document.querySelector('bo-shopping-product').shadowRoot;
const setVal=(el,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,v);['input','change','blur'].forEach(t=>el.dispatchEvent(new Event(t,{bubbles:true})))};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function pass1(){
  const r=root();
  setVal(r.querySelector('input[placeholder="상품명을 입력해 주세요."]'),'Alcantara Head Rest');
  const pr=[...r.querySelectorAll('input')].filter(i=>i.placeholder==='0')[0];
  setVal(pr,'153000');
  for(let n=0;n<12;n++){const it=r.querySelectorAll('.image-item');if(!it.length)break;const b=it[0].querySelector('.delete-button');if(b)b.click();await sleep(700);}
  const left=r.querySelectorAll('.image-item').length;
  const dt=new DataTransfer();
  for(const f of FILES){const blob=await (await fetch(RAW+f+'?_='+Date.now())).blob();dt.items.add(new File([blob],f,{type:'image/jpeg'}));}
  const inp=r.querySelector('input[type=file]');
  inp.files=dt.files;inp.dispatchEvent(new Event('change',{bubbles:true}));
  await sleep(7000);
  return JSON.stringify({left,now:r.querySelectorAll('.image-item').length,price:pr.value,name:r.querySelector('input[placeholder="상품명을 입력해 주세요."]').value});
}
function ids(){return [...root().querySelectorAll('.image-item img')].map(i=>(i.src.match(/upload\/[^/]+\/([0-9a-f]+)\.jpg/)||[])[1]);}
function rt(node,from,to){let n=0;const w=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);const a=[];while(w.nextNode())a.push(w.currentNode);a.forEach(t=>{if(t.nodeValue.includes(from)){t.nodeValue=t.nodeValue.split(from).join(to);n++}});return n;}
function e0html(){
  const li=t=>`<p style="margin:0 0 7px;font-size:14px;font-weight:300;color:#222;line-height:1.6;letter-spacing:-0.01em;"><span style="display:inline-block;width:18px;font-weight:500;color:#111;">✓</span>${t}</p>`;
  return `<div style="font-family:${FONT_SANS};color:#111;text-align:left;padding:4px 0 8px;"><p style="margin:0 0 18px;font-size:14px;line-height:1.9;font-weight:300;color:#333;letter-spacing:-0.01em;word-break:keep-all;"><span style="font-weight:500;color:#111;">알칸타라&reg; 소재로 감싼 헤드레스트입니다.</span> 부드러운 촉감과 단정한 실루엣이 특징입니다.</p><div style="margin:0 0 8px;">${li('부드러운 촉감의 알칸타라&reg; 소재')}${li('머리와 목을 편안하게 받쳐 주는 형태')}${li('탄성 스트랩과 버클로 간편하게 고정')}${li('일상의 이동을 한층 편안하게')}</div></div>`;
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
   [I[2],'일상에서의 편안','장시간 이동 중에도 머리와 목을 부드럽게 받쳐 편안한 자세를 돕습니다.'],
   [I[1],'목 보호','목과 시트 사이의 빈 공간을 부드럽게 채워 목을 편안하게 받쳐 줍니다.'],
   [I[6],'알칸타라® 소재의 부드러움과 고급','부드러운 촉감과 차분한 질감, 알칸타라® 소재가 전하는 품격을 함께 경험해 보세요.']];
  cards.forEach((c,i)=>{
    if(i>=3){c.remove();return;}
    const im=c.querySelector('img');const ps=c.querySelectorAll('p');
    c.setAttribute('style','flex:0 0 min(84%,380px);scroll-snap-align:start;min-width:0;');
    im.setAttribute('style','width:100%;aspect-ratio:1 / 1;object-fit:cover;border-radius:16px;background:#f2f2f0;');
    im.setAttribute('src',CDN+spec[i][0]+'.jpg');im.setAttribute('alt','Alcantara Head Rest '+spec[i][1]);
    ps[0].textContent=spec[i][1];ps[1].textContent=spec[i][2];});
  const bg=[...why.querySelectorAll('div')].find(x=>x.getAttribute('aria-label'));
  bg.setAttribute('aria-label','헤드레스트에 머리를 기댄 모습');
  bg.setAttribute('style',bg.getAttribute('style').replace(/upload\/[^/]+\/[0-9a-f]+\.jpg/,'upload/S20261007f588fffea0abb/'+I[2]+'.jpg').replace(/&quot;/g,'"'));
  const L=[];
  L.push(rt(why,'손끝에서 시작되는 품격','머리를 기대는 순간 시작되는 품격'));
  L.push(rt(why,'알칸타라® 소재로 완성한 노트북 가방입니다. 손에 닿는 순간의 부드러운 촉감과 단정한 실루엣을 경험해 보세요.','알칸타라® 소재로 완성한 헤드레스트입니다. 머리를 기대는 순간의 부드러운 촉감과 단정한 실루엣을 경험해 보세요.'));
  L.push(rt(why,'정돈된 수납','편안한 지지'));
  L.push(rt(why,'노트북을 넣고도 다른 소지품을 더 담을 수 있도록 내부 지퍼 포켓과 수납 포켓을 갖추었습니다.','머리와 목을 부드럽게 받쳐 장시간 이동에도 편안한 자세를 돕습니다.'));
  L.push(rt(why,'캐리어 부착','간편한 장착'));
  L.push(rt(why,'뒷면 스트랩에 캐리어 손잡이를 통과시켜 함께 이동할 수 있습니다.','탄성 스트랩과 버클로 시트 헤드레스트에 간편하게 고정합니다.'));
  L.push(rt(why,'단정한 지퍼 마감','단정한 실루엣'));
  L.push(rt(why,'상단을 따라 이어지는 지퍼 마감이 품격을 더합니다.','차분한 색감과 정돈된 형태가 차량 실내와 어우러집니다.'));
  L.push(rt(mat,'이 노트북 가방에서도 손에 쥐는 순간의 질감이','이 헤드레스트에서도 닿는 순간의 질감이'));
  const rows=[...det.querySelectorAll('div')].filter(x=>x.children.length===2&&x.children[0].tagName==='SPAN'&&x.children[1].tagName==='SPAN');
  rows.forEach(rw=>{const a=rw.children[0].textContent,b=rw.children[1];
    if(a==='Material')b.textContent='전면 알칸타라®';
    if(a==='Color'||a==='Storage'||a==='Carry'){rw.remove();return;}
    if(a==='Size')b.textContent='가로 29cm (상단) · 20cm (하단) × 세로 22cm × 두께 8cm';
    if(a==='Closure'){rw.children[0].textContent='Fit';b.textContent='탄성 스트랩 · 버클 고정';}});
  L.push(rt(faq,'수납공간은 어떤가요?','어떻게 장착하나요?'));
  L.push(rt(faq,'노트북을 넣고도 다른 소지품을 더 담을 수 있는 넉넉한 수납 공간입니다. 내부에 지퍼 포켓과 수납 포켓을 갖추었습니다.','뒷면의 탄성 스트랩을 시트 헤드레스트에 둘러 버클로 고정합니다.'));
  L.push(rt(faq,'캐리어에 부착할 수 있나요?','크기는 어떻게 되나요?'));
  L.push(rt(faq,'뒷면의 스트랩에 캐리어 손잡이를 통과시켜 함께 이동할 수 있습니다.','가로 29cm(상단)·20cm(하단), 세로 22cm, 두께 8cm입니다.'));
  return {html:d.innerHTML,log:L,cards:cards.length};
}
async function pass2(){
  const I=ids();if(I.length<7||I.some(x=>!x))return 'IDS_BAD '+JSON.stringify(I);
  const E0=FroalaEditor.INSTANCES[0],E1=FroalaEditor.INSTANCES[1];
  E0.html.set(e0html());E0.events.trigger('contentChanged');
  const b=e1html(I,E1.html.get());E1.html.set(b.html);E1.events.trigger('contentChanged');
  return 'OK '+I.join(',')+' | '+JSON.stringify(b.log)+' cards='+b.cards;
}
async function trim(){
  const r=root();
  for(let n=0;n<4;n++){const it=r.querySelectorAll('.image-item');if(it.length<=6)break;const b=it[it.length-1].querySelector('.delete-button');if(b)b.click();await sleep(800);}
  return r.querySelectorAll('.image-item').length;
}
function save(){[...root().querySelectorAll('button')].find(x=>x.textContent.trim()==='저장').click();return 1}
return {pass1,pass2,ids,trim,save};
})();
