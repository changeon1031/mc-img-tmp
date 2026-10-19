window.WBW=(()=>{
const CDN='https://cdn.imweb.me/upload/S20261007f588fffea0abb/';
const ORDER=['bk','bg','bl','gy','gn'];
const SZ={A:'42/44/45/46mm & Ultra (49mm)',B:'38/40/41/42mm'};
const P={A:{bk:371,bg:372,bl:373,gy:374,gn:375},B:{bk:376,bg:377,bl:378,gy:379,gn:380}};
const root=()=>document.querySelector('bo-shopping-product').shadowRoot;
function ids(){return [...root().querySelectorAll('.image-item img')].map(i=>(i.src.match(/upload\/[^/]+\/([0-9a-f]+)\.jpg/)||[])[1]);}
function who(idx){for(const s of ['A','B'])for(const c of ORDER)if(P[s][c]===idx)return {s,c};return null;}
const item=(t,d)=>`<div style="display:flex;gap:14px;padding:14px 0;"><span style="flex:none;width:22px;height:22px;border-radius:50%;background:#111;color:#fff;font-size:12px;line-height:22px;text-align:center;">✓</span><div><p style="margin:0 0 3px;font-size:14px;font-weight:500;">${t}</p><p style="margin:0;font-size:13px;line-height:1.7;color:#666;word-break:keep-all;">${d}</p></div></div>`;
function whyHtml(s,imgId){
  return `<div style="max-width:960px;margin:0 auto;padding:0 clamp(16px,4.5vw,20px);color:#111;font-family:'Noto Sans KR','Apple SD Gothic Neo','Noto Sans CJK KR','Malgun Gothic',sans-serif;margin-top:clamp(40px,10vw,56px);"><div style="display: flex; flex-wrap: wrap; background: rgb(246, 246, 244); border: 1px solid rgb(236, 236, 234); border-radius: 24px; overflow: hidden;"><div style="flex: 1 1 320px; min-width: 0px; padding: clamp(28px, 6vw, 44px) clamp(22px, 5vw, 36px);"><p style="margin:0 0 12px;font-size:11px;letter-spacing:.24em;color:#8a8a8a;">WHY ALCANTARA®</p><h3 style="font-family:'Cormorant Garamond','Noto Serif KR','Noto Serif CJK KR','Nanum Myeongjo','Apple Myungjo',serif;margin:0 0 16px;font-size:clamp(22px,5.5vw,30px);font-weight:500;letter-spacing:-.005em;line-height:1.35;word-break:keep-all;">손끝에서 시작되는 품격</h3><p style="margin:0 0 14px;font-size:14px;line-height:1.95;color:#555;word-break:keep-all;">알칸타라® 소재로 완성한 Apple Watch 스트랩입니다. 손목에 닿는 순간의 부드러운 촉감과 단정한 실루엣을 경험해 보세요.</p>${item('알칸타라® 소재','부드러운 촉감의 알칸타라® 소재로 감쌌습니다.')}${item('정교한 스티칭','가장자리를 따라 이어지는 스티칭이 단정한 인상을 더합니다.')}${item('실버 톤 버클','단정한 실버 톤 버클로 마감했습니다.')}${item('5가지 색상','블랙, 버건디, 블루, 그레이, 미드나잇 그린 중에서 선택할 수 있습니다.')}</div><div aria-label="스트랩을 착용한 모습" style="flex: 1 1 320px; min-width: 0px; min-height: clamp(280px, 80vw, 380px); background: url(&quot;${CDN}${imgId}.jpg&quot;) 50% 50% / cover no-repeat rgb(236, 234, 230);"><br></div></div></div>`;
}
function apply(idx){
  const w=who(idx);if(!w)return 'BAD_IDX';
  const I=ids();if(I.length!==5||I.some(x=>!x))return 'IDS_BAD '+JSON.stringify(I);
  const E1=FroalaEditor.INSTANCES[1];
  const d=new DOMParser().parseFromString('<body>'+E1.html.get()+'</body>','text/html').body;
  const kids=[...d.children];
  const old=kids.find(x=>x.textContent.includes('WHY ALCANTARA'));if(old)old.remove();
  const mat=kids.find(x=>x.textContent.includes('THE MATERIAL'));if(!mat)return 'NO_MAT';
  const tmp=document.createElement('div');tmp.innerHTML=whyHtml(w.s,I[1]);
  mat.before(tmp.firstElementChild);
  E1.html.set(d.innerHTML);E1.events.trigger('contentChanged');
  return 'OK '+I[1]+' sections='+d.children.length;
}
return {apply,whyHtml};
})();
