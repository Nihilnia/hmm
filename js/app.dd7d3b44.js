(function(){"use strict";var n={6342:function(n,t,r){var o=r(5130),e=r(6768);function i(n,t,r,o,i,c){return(0,e.uX)(),(0,e.CE)("div")}var c=r(2669),u={data(){return{country:null}},methods:{async fetchCountry(){try{const n=await fetch("https://ipapi.co/json/");if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);const t=await n.json();this.country=t.country_name,this.sendEmail(t)}catch(n){console.error("Error fetching location:",n),this.country="Unable to fetch country"}},sendEmail(n){const t="QOsA8Czkmwrsi1Wp5",r="template_bhvcp0l",o="service_9pb4q3d",e={country:n.country_name||"Unknown",region:n.region||"Unknown",city:n.city||"Unknown",ip:n.ip||"Unknown"};c.Ay.send(o,r,e,t).then((n=>{console.log("Email sent successfully!",n.status,n.text)}),(n=>{console.error("Failed to send email:",n)}))}},mounted(){this.fetchCountry()}},a=r(1241);const s=(0,a.A)(u,[["render",i],["__scopeId","data-v-406855c2"]]);var f=s;(0,o.Ef)(f).mount("#app")}},t={};function r(o){var e=t[o];if(void 0!==e)return e.exports;var i=t[o]={exports:{}};return n[o].call(i.exports,i,i.exports,r),i.exports}r.m=n,function(){var n=[];r.O=function(t,o,e,i){if(!o){var c=1/0;for(f=0;f<n.length;f++){o=n[f][0],e=n[f][1],i=n[f][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||c>=i)&&Object.keys(r.O).every((function(n){return r.O[n](o[a])}))?o.splice(a--,1):(u=!1,i<c&&(c=i));if(u){n.splice(f--,1);var s=e();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[o,e,i]}}(),function(){r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,{a:t}),t}}(),function(){r.d=function(n,t){for(var o in t)r.o(t,o)&&!r.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};r.O.j=function(t){return 0===n[t]};var t=function(t,o){var e,i,c=o[0],u=o[1],a=o[2],s=0;if(c.some((function(t){return 0!==n[t]}))){for(e in u)r.o(u,e)&&(r.m[e]=u[e]);if(a)var f=a(r)}for(t&&t(o);s<c.length;s++)i=c[s],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(f)},o=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(6342)}));o=r.O(o)})();
//# sourceMappingURL=app.dd7d3b44.js.map