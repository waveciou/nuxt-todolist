(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{294:function(t,n,e){var content=e(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(112).default)("01cd2aea",content,!0,{sourceMap:!1})},303:function(t,n,e){"use strict";e(294)},304:function(t,n,e){var o=e(111)(!1);o.push([t.i,".nav[data-v-12f2ffd7]{width:100%;margin-top:10px;display:flex;justify-content:flex-end}@media screen and (min-width: 480px){.nav[data-v-12f2ffd7]{width:auto;align-items:center;justify-content:flex-start}}.nav__button[data-v-12f2ffd7]{margin-left:10px;font-size:16px}.nav__button.current[data-v-12f2ffd7]{font-weight:700;color:#8DC8FF}\n",""]),t.exports=o},309:function(t,n,e){"use strict";e.r(n);var o={name:"TodoNav",props:{visibilities:{type:String,required:!0}},methods:{handleSetNav:function(t){this.$emit("setVisibilities",t)}}},l=(e(303),e(46)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"nav"},[e("button",{staticClass:"nav__button",class:{current:"all"===t.visibilities},attrs:{title:"All"},on:{click:function(n){return n.stopPropagation(),t.handleSetNav("all")}}},[t._v("\n    All\n  ")]),t._v(" "),e("button",{staticClass:"nav__button",class:{current:"todo"===t.visibilities},attrs:{title:"Todo"},on:{click:function(n){return n.stopPropagation(),t.handleSetNav("todo")}}},[t._v("\n    Todo\n  ")]),t._v(" "),e("button",{staticClass:"nav__button",class:{current:"complete"===t.visibilities},attrs:{title:"Complete"},on:{click:function(n){return n.stopPropagation(),t.handleSetNav("complete")}}},[t._v("\n    Complete\n  ")])])}),[],!1,null,"12f2ffd7",null);n.default=component.exports}}]);