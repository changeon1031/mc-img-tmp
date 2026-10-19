window.WB=(()=>{
const RAW='https://raw.githubusercontent.com/changeon1031/mc-img-tmp/main/';
const CDN='https://cdn.imweb.me/upload/S20261007f588fffea0abb/';
const COL={bk:['블랙','Black'],bg:['버건디','Burgundy'],bl:['블루','Blue'],gy:['그레이','Grey'],gn:['미드나잇 그린','Midnight Green']};
const ORDER=['bk','bg','bl','gy','gn'];
const SZ={A:'42/44/45/46mm & Ultra (49mm)',B:'38/40/41/42mm'};
const SZ_KO={A:'42/44/45/46mm · Ultra (49mm)',B:'38/40/41/42mm'};
const P={A:{bk:371,bg:372,bl:373,gy:374,gn:375},B:{bk:376,bg:377,bl:378,gy:379,gn:380}};
const FILES=['main','h1','h2','strap','fab'];
const FONT_SANS="'Noto Sans KR','Apple SD Gothic Neo','Noto Sans CJK KR','Malgun Gothic',sans-serif";
const FONT_SERIF="'Cormorant Garamond','Noto Serif KR','Noto Serif CJK KR','Nanum Myeongjo','Apple Myungjo',serif";
const root=()=>document.querySelector('bo-shopping-product').shadowRoot;
const setVal=(el,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,v);['input','change','blur'].forEach(t=>el.dispatchEvent(new Event(t,{bubbles:true})))};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function who(idx){for(const s of ['A','B'])for(const c of ORDER)if(P[s][c]===idx)return {s,c};return null;}
function nameOf(s,c){return 'Alcantara Apple Watch Band With Buckle - '+COL[c][1]+' - '+SZ[s];}
async function pass1(idx){
  const w=who(idx);if(!w)return 'BAD_IDX';const {s,c}=w;const r=root();
  setVal(r.querySelector('input[placeholder="상품명을 입력해 주세요."]'),nameOf(s,c));
  const pr=[...r.querySelectorAll('input')].filter(i=>i.placeholder==='0')[0];
  setVal(pr,'77000');
  for(let n=0;n<14;n++){const it=r.querySelectorAll('.image-item');if(!it.length)break;const b=it[0].querySelector('.delete-button');if(b)b.click();await sleep(700);}
  const left=r.querySelectorAll('.image-item').length;
  const dt=new DataTransfer();
  for(const f of FILES){const blob=await (await fetch(RAW+`wb_${c}_${f}.jpg?_=`+Date.now())).blob();dt.items.add(new File([blob],`wb_${c}_${f}.jpg`,{type:'image/jpeg'}));}
  const inp=r.querySelector('input[type=file]');
  inp.files=dt.files;inp.dispatchEvent(new Event('change',{bubbles:true}));
  await sleep(6500);
  return JSON.stringify({left,now:r.querySelectorAll('.image-item').length,price:pr.value,name:r.querySelector('input[placeholder="상품명을 입력해 주세요."]').value});
}
function ids(){return [...root().querySelectorAll('.image-item img')].map(i=>(i.src.match(/upload\/[^/]+\/([0-9a-f]+)\.jpg/)||[])[1]);}
function toDataURL(blob){return new Promise(res=>{const f=new FileReader();f.onload=()=>res(f.result);f.readAsDataURL(blob);});}
async function swatches(){const o={};for(const c of ORDER){const b=await (await fetch(RAW+`wb_sw_${c}.jpg?_=`+Date.now())).blob();o[c]=await toDataURL(b);}return o;}
function e0html(s,c,sw){
  const li=t=>`<p style="margin:0 0 7px;font-size:14px;font-weight:300;color:#222;line-height:1.6;letter-spacing:-0.01em;"><span style="display:inline-block;width:18px;font-weight:500;color:#111;">✓</span>${t}</p>`;
  const chips=ORDER.map(k=>{const sel=k===c;
    return `<a href="/shop_view?idx=${P[s][k]}" title="${COL[k][0]} ${COL[k][1]}" style="display:inline-block;width:48px;height:48px;margin:0 9px 10px 0;padding:0;border-radius:8px;box-sizing:border-box;background-color:#fff;background-image:url(${sw[k]});background-repeat:no-repeat;background-size:cover;background-position:center;border:0;${sel?'outline:2px solid #111;outline-offset:3px;':'outline:1px solid #e4e4e4;outline-offset:0;'}vertical-align:top;"></a>`}).join('');
  const sizes=['A','B'].map(k=>{const sel=k===s;
    return `<a href="/shop_view?idx=${P[k][c]}" style="display:inline-block;margin:0 8px 8px 0;padding:9px 14px;border-radius:8px;box-sizing:border-box;font-size:13px;line-height:1.3;letter-spacing:-0.01em;text-decoration:none;color:#111;background:#fff;${sel?'border:1px solid #111;font-weight:500;':'border:1px solid #dcdcdc;font-weight:300;'}">${SZ_KO[k]}</a>`}).join('');
  const lab=t=>`<span style="font-family:${FONT_SERIF};font-size:15px;font-weight:500;letter-spacing:0.14em;color:#111;">${t}</span>`;
  return `<div style="font-family:${FONT_SANS};color:#111;text-align:left;padding:4px 0 8px;"><p style="margin:0 0 18px;font-size:14px;line-height:1.9;font-weight:300;color:#333;letter-spacing:-0.01em;word-break:keep-all;"><span style="font-weight:500;color:#111;">알칸타라&reg; 소재로 감싼 Apple Watch 스트랩입니다.</span> 부드러운 촉감과 단정한 실루엣이 특징입니다.</p><div style="margin:0 0 22px;">${li('부드러운 촉감의 알칸타라&reg; 소재')}${li('정교한 스티칭과 실버 톤 버클 마감')}${li(SZ[s]+' 호환')}${li('5가지 색상 중 선택')}</div><p style="margin:0 0 12px;font-size:14px;">${lab('COLOR')} <span style="font-weight:300;color:#777;margin-left:10px;">${COL[c][0]} &middot; ${COL[c][1]}</span></p><div style="margin:0 0 14px;">${chips}</div><p style="margin:0 0 12px;font-size:14px;">${lab('SIZE')} <span style="font-weight:300;color:#777;margin-left:10px;">Apple Watch</span></p><div style="margin:0 0 8px;">${sizes}</div></div>`;
}
function rt(node,from,to){let n=0;const w=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);const a=[];while(w.nextNode())a.push(w.currentNode);a.forEach(t=>{if(t.nodeValue.includes(from)){t.nodeValue=t.nodeValue.split(from).join(to);n++}});return n;}
function e1html(s,c,I,cur){
  const d=new DOMParser().parseFromString('<body>'+cur+'</body>','text/html').body;
  const kids=[...d.children];
  const hl=kids.find(x=>x.textContent.includes('PREMIUM HIGHLIGHTS'));
  const why=kids.find(x=>x.textContent.includes('WHY ALCANTARA'));
  const mat=kids.find(x=>x.textContent.includes('THE MATERIAL'));
  const det=kids.find(x=>x.textContent.includes('DETAILS'));
  const faq=kids.find(x=>x.textContent.includes('FAQ'));
  const L=[];
  const spec=[
   [I[2],'일반 스트랩에서는 느껴볼 수 없는 프리미엄','손목 위에서 더욱 깊이 있게 느껴지는 알칸타라® 특유의 질감과 단정한 실루엣을 경험해 보세요.'],
   [I[3],'완벽한 마감처리와 디테일한 제작','정교한 스티칭과 단정한 버클까지, 세심하게 다듬은 디테일을 담았습니다.'],
   [I[4],'알칸타라® 소재에서만 느낄 수 있는 품격','깊이 있는 결과 부드러운 촉감, 알칸타라®만이 전하는 은은한 고급스러움을 느껴 보세요.']];
  let cards=[...hl.querySelectorAll('img')].map(i=>i.parentElement);
  while(cards.length<3){const n=cards[cards.length-1].cloneNode(true);cards[cards.length-1].after(n);cards.push(n);}
  cards.forEach((cd,i)=>{
    if(i>=3){cd.remove();return;}
    const im=cd.querySelector('img');const ps=cd.querySelectorAll('p');
    im.setAttribute('src',CDN+spec[i][0]+'.jpg');im.setAttribute('alt','Alcantara Apple Watch Band '+spec[i][1]);
    ps[0].textContent=spec[i][1];ps[1].textContent=spec[i][2];
    cd.style.flex='0 0 min(84%,380px)';
    im.setAttribute('style','width:100%;aspect-ratio:1 / 1;object-fit:cover;border-radius:16px;background:#f2f2f0;');});
  L.push(cards.length);
  if(why){why.remove();L.push('why-removed');}
  L.push(rt(mat,'이 헤드레스트에서도','이 시계줄에서도')+rt(mat,'이 쿠션에서도','이 시계줄에서도'));
  // details
  const rows=[...det.querySelectorAll('div')].filter(x=>x.children.length===2&&x.children[0].tagName==='SPAN'&&x.children[1].tagName==='SPAN');
  const parent=rows[0].parentElement;const tpl=rows[0].cloneNode(true);
  rows.forEach(r=>r.remove());
  const want=[['Material','알칸타라®'],['Color',COL[c][0]+' ('+COL[c][1]+')'],['Compatible',SZ[s]],['Buckle','실버 톤 버클'],['Dispatch','결제 완료 후 1~2일 이내']];
  want.forEach(([a,b])=>{const n=tpl.cloneNode(true);n.children[0].textContent=a;n.children[1].textContent=b;parent.appendChild(n);});
  L.push('rows'+want.length);
  // faq
  const ds=[...faq.querySelectorAll('details')];
  const keep=t=>ds.find(x=>x.querySelector('summary').textContent.includes(t));
  const mk=(q,a)=>{const n=ds[0].cloneNode(true);n.removeAttribute('open');n.querySelector('summary').children[0].textContent=q;n.querySelector('p').textContent=a;return n;};
  const list=[
    keep('어떤 소재')||mk('어떤 소재로 만들어졌나요?','알칸타라® 소재로 만들었습니다. 부드러운 촉감이 특징입니다.'),
    mk('어떤 Apple Watch에 사용할 수 있나요?',SZ[s]+' 모델용입니다. 구매 전 사용 중인 Apple Watch의 케이스 크기를 확인해 주세요.'),
    mk('어떻게 착용하나요?','버클로 손목 둘레에 맞게 조절해 착용합니다.'),
    mk('어떤 색상이 있나요?','블랙, 버건디, 블루, 그레이, 미드나잇 그린의 5가지 색상이 있습니다.'),
    keep('언제 출고'),keep('교환과 반품'),keep('화면에서 본 색')].filter(Boolean);
  const box=ds[0].parentElement;ds.forEach(x=>x.remove());list.forEach(x=>box.appendChild(x));
  L.push('faq'+list.length);
  return {html:d.innerHTML,log:L};
}
async function pass2(idx){
  const w=who(idx);if(!w)return 'BAD_IDX';const {s,c}=w;
  const I=ids();if(I.length!==5||I.some(x=>!x))return 'IDS_BAD '+JSON.stringify(I);
  const sw=await swatches();
  const E0=FroalaEditor.INSTANCES[0],E1=FroalaEditor.INSTANCES[1];
  E0.html.set(e0html(s,c,sw));E0.events.trigger('contentChanged');
  const b=e1html(s,c,I,E1.html.get());E1.html.set(b.html);E1.events.trigger('contentChanged');
  return 'OK '+I.join(',')+' | '+JSON.stringify(b.log);
}
async function dropOption(){
  const r=root();
  const h=[...r.querySelectorAll('[data-section-title]')].find(e=>/^옵션/.test(e.textContent.trim()));
  if(h.getAttribute('aria-expanded')!=='true')h.click();
  await sleep(1200);
  const b=r.querySelector('button[aria-label="옵션 삭제"]');
  if(!b)return 'no-option';
  b.click();await sleep(1000);
  const pool=[...r.querySelectorAll('button'),...document.querySelectorAll('button')];
  const ok=pool.find(x=>x.textContent.trim()==='삭제'&&x.getBoundingClientRect().width>0);
  if(!ok)return 'no-confirm';
  ok.click();await sleep(1200);
  return r.querySelector('button[aria-label="옵션 삭제"]')?'still':'dropped';
}
function save(){[...root().querySelectorAll('button')].find(x=>x.textContent.trim()==='저장').click();return 1}
return {P,who,dropOption,pass1,pass2,ids,save,e0html,e1html};
})();
