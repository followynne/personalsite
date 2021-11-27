const e=()=>{const e=document.querySelector(".articles-progress-bar .progress-bar"),o=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100,r=o.toFixed(0);e.style.setProperty("width",`${r}%`),e.ariaValueNow=`${r}%`,e.textContent=o<95?`${r}%`:"Thanks for reading!"};e(),window.addEventListener("scroll",e);
//# sourceMappingURL=github-pages-hosting-with-parcel.bbc67c13.js.map
