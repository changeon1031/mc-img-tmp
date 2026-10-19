window.DUO=(()=>{
const RAW='https://raw.githubusercontent.com/changeon1031/mc-img-tmp/23dc085/';
const CDN='https://cdn.imweb.me/upload/S20261007f588fffea0abb/';
const P={bk:388,sg:387,wn:386,nv:385,bl:384,gr:382,or:383,br:381};
const OLD={bk:341,sg:342,wn:343,nv:344,bl:345,or:347,gr:348,br:349};
const OLD_NARDO=346;
const COL={bk:['딥 블랙','Deep Black'],sg:['스페이스 그레이','Space Grey'],wn:['와인 레드','Wine Red'],nv:['네이비 블루','Navy Blue'],bl:['오션 블루','Ocean Blue'],gr:['미드나잇 그린','Midnight Green'],or:['오렌지','Orange'],br:['초콜릿 브라운','Chocolate Brown']};
const FILES=['main','open','side'];
const root=()=>document.querySelector('bo-shopping-product').shadowRoot;
const setVal=(el,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,v);['input','change','blur'].forEach(t=>el.dispatchEvent(new Event(t,{bubbles:true})))};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const who=idx=>Object.keys(P).find(k=>P[k]===idx);
const nameOf=k=>'iPhone Duo - Alcantara Case - '+COL[k][1];

async function pass1(idx){
  const k=who(idx);if(!k)return 'BAD_IDX';
  const r=root();
  setVal(r.querySelector('input[placeholder="상품명을 입력해 주세요."]'),nameOf(k));
  const pin=[...r.querySelectorAll('input')].filter(i=>i.placeholder==='0');
  setVal(pin[0],'136000');
  setVal(pin[1],'');
  for(let n=0;n<12;n++){const it=r.querySelectorAll('.image-item');if(!it.length)break;const b=it[0].querySelector('.delete-button');if(b)b.click();await sleep(700);}
  const left=r.querySelectorAll('.image-item').length;
  const dt=new DataTransfer();
  for(const f of FILES){const fn=`duo_${k}_${f}.jpg`;const blob=await (await fetch(RAW+fn+'?_='+Date.now())).blob();dt.items.add(new File([blob],fn,{type:'image/jpeg'}));}
  const inp=r.querySelector('input[type=file]');
  inp.files=dt.files;inp.dispatchEvent(new Event('change',{bubbles:true}));
  await sleep(6500);
  return JSON.stringify({left,now:r.querySelectorAll('.image-item').length,name:r.querySelector('input[placeholder="상품명을 입력해 주세요."]').value,price:pin[0].value,list:pin[1].value});
}
function ids(){return [...root().querySelectorAll('.image-item img')].map(i=>(i.src.match(/upload\/[^/]+\/([0-9a-f]+)\.jpg/)||[])[1]);}
function rt(node,from,to){let n=0;const w=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);const a=[];while(w.nextNode())a.push(w.currentNode);a.forEach(t=>{if(t.nodeValue.includes(from)){t.nodeValue=t.nodeValue.split(from).join(to);n++}});return n;}

function e0html(cur,k,idx){
  const L=[];
  const d=new DOMParser().parseFromString('<body>'+cur+'</body>','text/html').body;
  const rootEl=d.firstElementChild;
  L.push(rt(rootEl,'MagSafe 호환 · 무선 충전','폴더블 iPhone Duo 전용 설계'));
  L.push(rt(rootEl,'Space Gray','Space Grey'));
  // chips
  const inv={};Object.keys(OLD).forEach(c=>inv[OLD[c]]=P[c]);
  let removed=0,mapped=0;
  rootEl.querySelectorAll('a').forEach(a=>{
    const m=(a.getAttribute('href')||'').match(/idx=(\d+)$/);if(!m)return;
    const o=+m[1];
    if(a.closest('details'))return;
    if(o===OLD_NARDO){a.remove();removed++;return;}
    if(inv[o]){a.setAttribute('href','/shop_view?idx='+inv[o]);mapped++;
      const t=a.getAttribute('title');if(t)a.setAttribute('title',t.replace('Space Gray','Space Grey'));}
  });
  L.push('chips mapped '+mapped+' removed '+removed);
  // model
  {let n=0;const w=document.createTreeWalker(rootEl,NodeFilter.SHOW_TEXT);const a=[];while(w.nextNode())a.push(w.currentNode);
   a.forEach(t=>{if(t.nodeValue.trim()==='iPhone 18 Pro'&&!(t.parentElement&&t.parentElement.closest('a'))){t.nodeValue='iPhone Duo';n++}});L.push('model label '+n);}
  const det=rootEl.querySelector('details');
  const links=[...det.querySelectorAll('a')];
  // add Duo as the current entry; the 18 Pro entry becomes a normal link
  const cur18=links.find(a=>/background:#f6f6f4/.test(a.getAttribute('style')||''));
  const normal=links.find(a=>a!==cur18);
  const duoA=cur18.cloneNode(true);
  duoA.setAttribute('href','/shop_view?idx='+idx);duoA.textContent='iPhone Duo';
  cur18.setAttribute('style',normal.getAttribute('style'));
  links[0].before(duoA);
  L.push('model links '+det.querySelectorAll('a').length);
  return {html:d.innerHTML,log:L};
}

function e1html(cur,k,I){
  const L=[];
  const [ko,en]=COL[k];
  const d=new DOMParser().parseFromString('<body>'+cur+'</body>','text/html').body;
  const kids=[...d.children];
  const find=t=>kids.find(x=>x.textContent.includes(t));
  const hl=find('PREMIUM HIGHLIGHTS'),stats=find('선택 가능한 색상'),why=find('WHY ALCANTARA'),life=find('LIFESTYLE'),mat=find('THE MATERIAL'),det=find('DETAILS'),faq=find('FAQ');
  // highlights: 2 cards
  const cards=[...hl.querySelectorAll('img')].map(i=>i.parentElement);
  const spec=[
    [I[2],'버튼 부위 마감','측면 버튼 부위까지 케이스와 한 몸처럼 정교하게 마감했습니다.'],
    [I[0],'카메라 보호','카메라 주변을 감싸 올린 가장자리가 렌즈를 보호합니다.']];
  cards.forEach((c,i)=>{
    if(i>=2){c.remove();return;}
    const im=c.querySelector('img'),ps=c.querySelectorAll('p');
    im.setAttribute('src',CDN+spec[i][0]+'.jpg');im.setAttribute('alt',`iPhone Duo ${en} ${spec[i][1]}`);
    ps[0].textContent=spec[i][1];ps[1].textContent=spec[i][2];});
  L.push('cards '+cards.length);
  L.push(rt(stats,'9색','8색'));
  // why
  const bg=[...why.querySelectorAll('div')].find(x=>x.getAttribute('aria-label'));
  bg.setAttribute('aria-label','펼친 상태의 케이스 안쪽');
  bg.setAttribute('style',bg.getAttribute('style').replace(/upload\/[^/]+\/[0-9a-f]+\.jpg/,'upload/S20261007f588fffea0abb/'+I[1]+'.jpg').replace(/&quot;/g,'"'));
  L.push(rt(why,'MagSafe 호환 · 무선 충전','폴더블 전용 설계'));
  L.push(rt(why,'MagSafe와 무선 충전에 호환됩니다.','iPhone Duo에 맞춰 만든 전용 케이스입니다.'));
  // lifestyle heading
  if(life&&life!==why)life.remove();
  // details
  const rows=[...det.querySelectorAll('div')].filter(x=>x.children.length===2&&x.children[0].tagName==='SPAN'&&x.children[1].tagName==='SPAN');
  rows.forEach(rw=>{const a=rw.children[0].textContent,b=rw.children[1];
    if(a==='Model')b.textContent='iPhone Duo';
    if(a==='Color')b.textContent=`${ko} (${en})`;
    if(a==='MagSafe')rw.remove();});
  // faq
  [...faq.querySelectorAll('details')].forEach(x=>{if(x.textContent.includes('MagSafe')){x.remove();L.push('faq removed')}});
  return {html:d.innerHTML,log:L};
}

async function pass2(idx){
  const k=who(idx);if(!k)return 'BAD_IDX';
  const I=ids();if(I.length!==3||I.some(x=>!x))return 'IDS_BAD '+JSON.stringify(I);
  const E0=FroalaEditor.INSTANCES[0],E1=FroalaEditor.INSTANCES[1];
  const a=e0html(E0.html.get(),k,idx);E0.html.set(a.html);E0.events.trigger('contentChanged');
  const b=e1html(E1.html.get(),k,I);E1.html.set(b.html);E1.events.trigger('contentChanged');
  return 'OK '+I.join(',')+' | '+JSON.stringify(a.log)+' | '+JSON.stringify(b.log);
}
function save(){[...root().querySelectorAll('button')].find(x=>x.textContent.trim()==='저장').click();return 1}
return {P,who,pass1,pass2,ids,save,e0html,e1html};
})();
