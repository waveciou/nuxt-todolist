(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{328:function(t,n,e){var content=e(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(125).default)("aea08b40",content,!0,{sourceMap:!1})},337:function(t,n,e){"use strict";e(328)},338:function(t,n,e){var o=e(124)(!1);o.push([t.i,".nav[data-v-54bb15f8]{width:100%;margin-top:10px;display:flex;justify-content:flex-end}@media screen and (min-width: 480px){.nav[data-v-54bb15f8]{width:auto;align-items:center;justify-content:flex-start}}.nav__button[data-v-54bb15f8]{margin-left:10px;font-size:16px}.nav__button.current[data-v-54bb15f8]{font-weight:700;color:#8DC8FF}\n",""]),t.exports=o},343:function(t,n,e){"use strict";e.r(n);var o={name:"TodoNav",props:{visibilities:{type:String,required:!0}},methods:{handleSetNav:function(t){this.$emit("setVisibilities",t)}}},l=(e(337),e(63)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"nav"},[e("button",{staticClass:"nav__button",class:{current:"all"===t.visibilities},attrs:{type:"button",title:t.$t("nav_all")},on:{click:function(n){return n.stopPropagation(),t.handleSetNav("all")}}},[t._v("\n    "+t._s(t.$t("nav_all"))+"\n  ")]),t._v(" "),e("button",{staticClass:"nav__button",class:{current:"todo"===t.visibilities},attrs:{type:"button",title:t.$t("nav_todo")},on:{click:function(n){return n.stopPropagation(),t.handleSetNav("todo")}}},[t._v("\n    "+t._s(t.$t("nav_todo"))+"\n  ")]),t._v(" "),e("button",{staticClass:"nav__button",class:{current:"complete"===t.visibilities},attrs:{type:"button",title:t.$t("nav_complete")},on:{click:function(n){return n.stopPropagation(),t.handleSetNav("complete")}}},[t._v("\n    "+t._s(t.$t("nav_complete"))+"\n  ")])])}),[],!1,null,"54bb15f8",null);n.default=component.exports}}]);