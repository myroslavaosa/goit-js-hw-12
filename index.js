import{a as m,S as p,i as a}from"./assets/vendor-CtnHdr7b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="48983596-6477ed746a1aeaedff0beb1a5",g="https://pixabay.com/api/";function h(s){const t=`${g}?key=${y}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return m.get(t).then(o=>o.data.hits.length===0?Promise.reject("No images found."):o.data.hits)}const u=document.querySelector(".gallery");let b=new p(".gallery a");function L(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:n,comments:f,downloads:d})=>`
      <a href="${i}" class="gallery-item">
        <img src="${o}" alt="${e}" />
        <div class="info">
          <p>❤️ ${r}</p>
          <p>👀 ${n}</p>
          <p>💬 ${f}</p>
          <p>⬇️ ${d}</p>
        </div>
      </a>`).join("");u.innerHTML=t,b.refresh()}function $(){u.innerHTML=""}const c=document.querySelector("#search-form"),l=document.querySelector(".loader");c.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search query!"});return}$(),l.style.display="block",h(t).then(o=>{L(o),a.success({title:"Success",message:"Images loaded!"})}).catch(o=>{a.error({title:"Error",message:o})}).finally(()=>{l.style.display="none",c.reset()})});
//# sourceMappingURL=index.js.map
