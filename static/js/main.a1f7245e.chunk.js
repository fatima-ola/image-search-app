(this.webpackJsonpimage_search_app=this.webpackJsonpimage_search_app||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=a(1),i=a.n(s),u=a(5),o=a(2),m=(a(12),a(13),function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Image Search App"))}),p=(a(14),function(e){var t=e.onPress;return r.a.createElement("div",null,r.a.createElement("div",{className:"search-block"},r.a.createElement("input",{onKeyPress:t,type:"search",placeholder:"Beautiful photo?"}),r.a.createElement("div",{className:"icon"})))});var d={margin:"1rem 5rem 1rem 5rem",borderRadius:"4px",height:"350px",width:"350px"},E={margin:"1rem 5rem 1rem 5rem",borderRadius:"4px",textAlign:"center"},f=function(e){var t=e.description,a=e.likes,n=e.user,c=e.url;return r.a.createElement("div",null,r.a.createElement("img",{src:c,alt:"",title:"",style:d}),r.a.createElement("dl",{style:E},r.a.createElement("dt",null,"Image"),r.a.createElement("dd",null,"Photo by ",n),r.a.createElement("dt",null,"Description"),r.a.createElement("dd",null,t),r.a.createElement("dt",null,"Likes"),r.a.createElement("dd",null,a," ",r.a.createElement("i",{className:"fas fa-heart"})," ")))};var h=function(e){var t,a=e.response;return a&&(t=a.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(f,{key:t,likes:a[t].likes,description:a[t].alt_description,url:a[t].urls.regular,user:a[t].user.name}))}))),r.a.createElement("div",{className:"row"},t)},v="581eb4a49e4ae7142198627eae4a64b445a6bd9af7bb96de5a3cf51e2b62d919";var b=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),d=s[0],E=s[1];function f(){return(f=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.unsplash.com/search/photos?client_id=".concat(v,"&per_page=30&query=").concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,c(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error is ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){f.apply(this,arguments)}(d)}),[d]),r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(p,{onPress:function(e){13!==e.keyCode&&13!==e.charCode||E(e.target.value)}}),r.a.createElement("div",{classsName:"container"},r.a.createElement(h,{response:a})))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.a1f7245e.chunk.js.map