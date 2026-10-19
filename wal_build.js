window.WAL=(()=>{
const RAW='https://raw.githubusercontent.com/changeon1031/mc-img-tmp/main/';
const C={sg:['스페이스 그레이','Space Grey',360],bk:['딥 블랙','Deep Black',361],wn:['와인 레드','Wine Red',362],nv:['네이비 블루','Navy Blue',363],bl:['오션 블루','Ocean Blue',364],ng:['나르도 그레이','Nardo Gray',365],gr:['미드나잇 그린','Midnight Green',366],br:['초콜릿 브라운','Chocolate Brown',367]};
const ORDER=['sg','bk','wn','nv','bl','ng','gr','br'];
const FILES=['main','hand','pull','feat','tex','fab'];
const root=()=>document.querySelector('bo-shopping-product').shadowRoot;
const setVal=(el,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,v);['input','change','blur'].forEach(t=>el.dispatchEvent(new Event(t,{bubbles:true})))};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const FONT_SANS="'Noto Sans KR','Apple SD Gothic Neo','Noto Sans CJK KR','Malgun Gothic',sans-serif";
const FONT_SERIF="'Cormorant Garamond','Noto Serif KR','Noto Serif CJK KR','Nanum Myeongjo','Apple Myungjo',serif";
const CDN='https://cdn.imweb.me/upload/S20261007f588fffea0abb/';

async function pass1(k){
  const r=root();const [ko,en]=C[k];
  setVal(r.querySelector('input[placeholder="상품명을 입력해 주세요."]'),'Alcantara Card Wallet - '+en);
  const pr=[...r.querySelectorAll('input')].filter(i=>i.placeholder==='0')[0];
  setVal(pr,'62000');
  // delete old gallery
  for(let n=0;n<10;n++){const it=r.querySelectorAll('.image-item');if(!it.length)break;const b=it[0].querySelector('.delete-button');if(b)b.click();await sleep(700);}
  const left=r.querySelectorAll('.image-item').length;
  const dt=new DataTransfer();
  for(const f of FILES){
    const blob=await (await fetch(RAW+`wal_${k}_${f}.jpg?_=`+Date.now())).blob();
    dt.items.add(new File([blob],`wal_${k}_${f}.jpg`,{type:'image/jpeg'}));
  }
  const inp=r.querySelector('input[type=file]');
  inp.files=dt.files;inp.dispatchEvent(new Event('change',{bubbles:true}));
  await sleep(6000);
  return JSON.stringify({left,now:r.querySelectorAll('.image-item').length,price:pr.value,name:r.querySelector('input[placeholder="상품명을 입력해 주세요."]').value});
}
function ids(){return [...root().querySelectorAll('.image-item img')].map(i=>(i.src.match(/upload\/[^/]+\/([0-9a-f]+)\.jpg/)||[])[1]);}

async function swatch(c){
  const blob=await (await fetch(RAW+`wal_${c}_main.jpg?_=`+Date.now())).blob();
  const bmp=await createImageBitmap(blob);
  const cv=document.createElement('canvas');cv.width=80;cv.height=80;
  cv.getContext('2d').drawImage(bmp,650,850,300,300,0,0,80,80);
  return cv.toDataURL('image/jpeg',0.8);
}
function e0html(k,sw){
  const [ko,en]=C[k];
  const li=t=>`<p style="margin:0 0 7px;font-size:14px;font-weight:300;color:#222;line-height:1.6;letter-spacing:-0.01em;"><span style="display:inline-block;width:18px;font-weight:500;color:#111;">✓</span>${t}</p>`;
  const chips=ORDER.map(c=>{const sel=c===k;
    return `<a href="/shop_view?idx=${C[c][2]}" title="${C[c][0]} ${C[c][1]}" style="display:inline-block;width:52px;height:52px;margin:0 10px 10px 0;padding:0;border-radius:8px;box-sizing:border-box;background-color:#555;background-image:url(${sw[c]});background-repeat:no-repeat;background-size:cover;background-position:center;border:0;${sel?'outline:2px solid #111;outline-offset:3px;':'outline:1px solid #e4e4e4;outline-offset:0;'}vertical-align:top;"></a>`}).join('');
  return `<div style="font-family:${FONT_SANS};color:#111;text-align:left;padding:4px 0 8px;"><p style="margin:0 0 18px;font-size:14px;line-height:1.9;font-weight:300;color:#333;letter-spacing:-0.01em;word-break:keep-all;"><span style="font-weight:500;color:#111;">알칸타라&reg; 소재로 감싼 카드 지갑입니다.</span> 부드러운 촉감과 단정한 실루엣이 특징입니다.</p><div style="margin:0 0 22px;">${li('부드러운 촉감의 알칸타라&reg; 소재')}${li('앞뒤로 각각 3개씩, 총 6개의 카드 슬롯')}${li('접은 지폐나 여분의 카드를 담는 중앙 수납공간')}${li('8가지 색상 중 선택')}</div><p style="margin:0 0 12px;font-size:14px;"><span style="font-family:${FONT_SERIF};font-size:15px;font-weight:500;letter-spacing:0.14em;color:#111;">COLOR</span> <span style="font-weight:300;color:#777;margin-left:10px;">${ko} &middot; ${en}</span></p><div style="margin:0 0 14px;">${chips}</div></div>`;
}
function walk(node,fn){const w=document.createTreeWalker(node,NodeFilter.SHOW_TEXT);const a=[];while(w.nextNode())a.push(w.currentNode);a.forEach(fn);}
function rt(node,from,to){let n=0;walk(node,t=>{if(t.nodeValue.includes(from)){t.nodeValue=t.nodeValue.split(from).join(to);n++}});return n;}
function e1html(k,I,cur){
  const [ko,en]=C[k];
  const d=new DOMParser().parseFromString('<body>'+cur+'</body>','text/html').body;
  const kids=[...d.children];
  const hl=kids.find(x=>x.textContent.includes('PREMIUM HIGHLIGHTS'));
  const why=kids.find(x=>x.textContent.includes('WHY ALCANTARA'));
  const mat=kids.find(x=>x.textContent.includes('THE MATERIAL'));
  const det=kids.find(x=>x.textContent.includes('DETAILS'));
  const faq=kids.find(x=>x.textContent.includes('FAQ'));
  // highlights
  const cards=[...hl.querySelectorAll('img')].map(i=>i.parentElement);
  const spec=[
   [I[2],'총 수납공간 6칸','앞뒤로 각각 3개씩, 총 6개의 카드 슬롯을 갖추었습니다.'],
   [I[4],'완벽한 마감','가장자리를 따라 이어지는 스티치가 정돈된 인상을 전합니다.'],
   [I[3],'일상에 필요한 구성','중앙 수납공간과 슬림한 디자인까지, 필요한 구성을 담았습니다.'],
   [I[5],'알칸타라® 재질의 부드러움','알칸타라® 소재만이 전하는 부드러운 결과 촉감을 경험해 보세요.']];
  cards.forEach((c,i)=>{const im=c.querySelector('img');const ps=c.querySelectorAll('p');
    im.setAttribute('src',CDN+spec[i][0]+'.jpg');im.setAttribute('alt','Alcantara Card Wallet '+spec[i][1]);
    ps[0].textContent=spec[i][1];ps[1].textContent=spec[i][2];
    if(i===2){c.style.flex='0 0 min(94%,620px)';im.setAttribute('style','width:100%;aspect-ratio:5 / 4;object-fit:contain;border-radius:16px;background:#fff;');}
    else im.setAttribute('style','width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 16px; background: rgb(242, 242, 240);');
  });
  // why
  const bg=[...why.querySelectorAll('div')].find(x=>x.getAttribute('aria-label'));
  bg.setAttribute('aria-label','카드 지갑을 손에 든 모습');
  bg.setAttribute('style',bg.getAttribute('style').replace(/upload\/[^/]+\/[0-9a-f]+\.jpg/,'upload/S20261007f588fffea0abb/'+I[1]+'.jpg').replace(/&quot;/g,'"'));
  rt(why,'알칸타라® 소재로 완성한 더플백입니다.','알칸타라® 소재로 완성한 카드 지갑입니다.');
  rt(why,'정돈된 수납','6칸의 카드 수납');rt(why,'내부 지퍼 포켓과 수납 포켓으로 소지품을 단정하게 담습니다.','앞뒤로 각각 3개씩, 총 6개의 카드 슬롯을 갖추었습니다.');
  rt(why,'편안한 휴대','중앙 수납공간');rt(why,'두 개의 손잡이를 갖춰 일상에서 간편하게 들 수 있습니다.','접은 지폐나 여분의 카드를 함께 수납할 수 있습니다.');
  rt(why,'단정한 지퍼 마감','슬림한 디자인');rt(why,'상단을 따라 이어지는 지퍼 마감이 품격을 더합니다.','슬림한 구성으로 주머니에 편안하게 들어갑니다.');
  // material
  rt(mat,'이 더플백에서도','이 카드 지갑에서도');
  // details
  const rows=[...det.querySelectorAll('div')].filter(x=>x.children.length===2&&x.children[0].tagName==='SPAN'&&x.children[1].tagName==='SPAN');
  rows.forEach(rw=>{const a=rw.children[0].textContent,b=rw.children[1];
    if(a==='Color')b.textContent=`${ko} (${en})`;
    if(a==='Closure'){rw.children[0].textContent='Slots';b.textContent='총 6개 (앞뒤 각 3개)';}
    if(a==='Storage'){b.textContent='중앙 수납공간';}
    if(a==='Carry')rw.remove();});
  // faq
  rt(faq,'내부에 지퍼 포켓과 수납 포켓을 갖추어 소지품을 정돈해 담기 좋습니다.','앞뒤로 각각 3개씩, 총 6개의 카드 슬롯과 중앙 수납공간을 갖추었습니다. 접은 지폐나 여분의 카드를 함께 수납할 수 있습니다.');
  return d.innerHTML;
}
async function pass2(k){
  const I=ids();if(I.length!==6||I.some(x=>!x))return 'IDS_BAD '+JSON.stringify(I);
  const sw={};for(const c of ORDER)sw[c]=await swatch(c);
  const E0=FroalaEditor.INSTANCES[0],E1=FroalaEditor.INSTANCES[1];
  E0.html.set(e0html(k,sw));E0.events.trigger('contentChanged');
  E1.html.set(e1html(k,I,E1.html.get()));E1.events.trigger('contentChanged');
  return 'OK '+I.join(',');
}
function save(){[...root().querySelectorAll('button')].find(x=>x.textContent.trim()==='저장').click();return 1}
return {C,ORDER,pass1,pass2,ids,save,e1html,e0html};
})();
