import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as t}from"./assets/vendor-77e16229.js";const n=document.querySelector(".form");n.addEventListener("submit",l);function l(s){s.preventDefault();const o=+this.elements.delay.value,i=this.elements.state.value;console.log(o),new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(o):r(o)},o)}).then(e=>{t.success({title:55,message:`OK Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"#59A10D",color:"#fff"})}).catch(e=>{t.error({message:`Error Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#EF4040"})})}
//# sourceMappingURL=commonHelpers2.js.map