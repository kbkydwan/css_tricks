(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{454:function(t,n,a){},559:function(t,n,a){"use strict";a(454)},650:function(t,n,a){"use strict";a.r(n);a(162);var e={name:"polygonLayout",data:()=>({num:3,maxNum:10}),computed:{position(){return this.setPolyGonLayout(this.num,160,{width:60,height:60})}},methods:{setPolyGonLayout(t,n,a={width:0,height:0}){if(t<3)return;const e=t%2==1?0:2*Math.PI/t/2;let l=[];for(let o=0;o<t;o++){const s=2*o*Math.PI/t+e;l.push({top:-n*Math.cos(s)-a.height/2,left:-n*Math.sin(s)-a.width/2})}return l}}},l=(a(559),a(19)),o=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[n("div",{staticClass:"polygonLayout-container"},[n("div",{staticClass:"circle"}),t._v(" "),n("div",{staticClass:"polygonLayout"},t._l(t.position,(function(a,e){return n("div",{key:e,staticClass:"polygonLayout-item",style:{left:a.left+"px",top:a.top+"px"}},[t._v("\n        item-"+t._s(e+1)+"\n      ")])})),0)]),t._v(" "),n("div",{staticClass:"key-value"},[n("span",{staticClass:"key"},[t._v("选择边数:")]),t._v(" "),n("el-radio",{attrs:{label:3},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),n("el-radio",{attrs:{label:4},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),n("el-radio",{attrs:{label:5},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),n("el-radio",{attrs:{label:6},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),n("el-radio",{attrs:{label:7},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}}),t._v(" "),n("el-radio",{attrs:{label:8},model:{value:t.num,callback:function(n){t.num=n},expression:"num"}})],1)])}),[],!1,null,"7e8c9aea",null);n.default=o.exports}}]);