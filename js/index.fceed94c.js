(function(t){function e(e){for(var r,i,c=e[0],o=e[1],s=e[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(u,i)&&u[i]&&p.push(u[i][0]),u[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==u[o]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},u={index:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"17ef":function(t,e,n){"use strict";n("d807")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("table",[t._m(0),n("tbody",[n("tr",[n("td"),n("td",{attrs:{rowspan:t.functions.length+1}},[0===t.active?n("browser"):t._e(),1===t.active?n("UUIDv4"):t._e()],1)]),t._l(t.functions,(function(e,r){return n("tr",{key:r},[n("td",[n("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.active=r}}},[t._v(t._s(e))])])])})),t._m(1)],2)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v(" Type ")]),n("td",[t._v(" Function ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{attrs:{colspan:"2"}},[t._v(" Source Code: "),n("a",{attrs:{href:"https://github.com/star-inc/tools"}},[t._v("Github Repository")]),t._v(" Maintainer: "),n("a",{attrs:{href:"https://security.starinc.xyz/"}},[t._v("Star Inc. Security Department")])])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("IP Address: "+t._s(t.ip_addr))]),n("li",[t._v("User-Agent: "+t._s(t.userAgent))])])},c=[],o=n("1da1"),s=(n("96cf"),n("bc3a")),f=n.n(s),l={name:"Browser",data:function(){return{ip_addr:null}},computed:{userAgent:function(){return window.navigator?navigator.userAgent:"Unsupported"}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://restapi.starinc.xyz/basic/ip");case 2:n=e.sent,t.ip_addr=n.data.data.ip_addr;case 4:case"end":return e.stop()}}),e)})))()}},p=l,d=(n("17ef"),n("2877")),v=Object(d["a"])(p,i,c,!1,null,null,null),h=v.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[n("li",[t._v("UUID v4: "+t._s(t.uuid))])]),n("a",{attrs:{href:"javascript:void(0)"},on:{click:t.refresh}},[t._v("refresh")])])},b=[],m=n("1b00"),g={name:"UUIDv4",data:function(){return{uuid:null}},methods:{refresh:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.uuid=Object(m["uuid"])();case 1:case"end":return e.stop()}}),e)})))()}},created:function(){this.refresh()}},y=g,w=(n("ce39"),Object(d["a"])(y,_,b,!1,null,null,null)),j=w.exports,O={name:"App",components:{Browser:h,UUIDv4:j},data:function(){return{active:0,functions:["Browser","UUID v4"]}}},x=O,U=(n("034f"),Object(d["a"])(x,u,a,!1,null,null,null)),k=U.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)}}).$mount("#app")},"7fb2":function(t,e,n){},"85ec":function(t,e,n){},ce39:function(t,e,n){"use strict";n("7fb2")},d807:function(t,e,n){}});
//# sourceMappingURL=index.fceed94c.js.map