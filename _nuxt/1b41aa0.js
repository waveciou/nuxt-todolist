(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4,5,6,7,8],{280:function(t,e,o){var content=o(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(112).default)("1245d63b",content,!0,{sourceMap:!1})},281:function(t,e,o){var content=o(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(112).default)("ddf82850",content,!0,{sourceMap:!1})},282:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{id:this.todoData.id,text:this.todoData.text,isCheck:this.todoData.isCheck}},name:"TodoItem",props:{todoData:{type:Object,required:!0}},methods:{handleDeleteTodo:function(){this.$emit("setDeleteTodo",this.id)},handleChangeTodo:function(){this.$store.commit("SET_CHECK_TODO",{id:this.id,isCheck:this.isCheck})}}},d=(o(286),o(46)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todoItem"},[n("div",{staticClass:"todoItem__fieldset"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isCheck,expression:"isCheck"}],staticClass:"todoItem__checkbox",attrs:{id:t.id,type:"checkbox"},domProps:{checked:Array.isArray(t.isCheck)?t._i(t.isCheck,null)>-1:t.isCheck},on:{change:[function(e){var o=t.isCheck,n=e.target,d=!!n.checked;if(Array.isArray(o)){var l=t._i(o,null);n.checked?l<0&&(t.isCheck=o.concat([null])):l>-1&&(t.isCheck=o.slice(0,l).concat(o.slice(l+1)))}else t.isCheck=d},t.handleChangeTodo]}}),t._v(" "),n("label",{staticClass:"todoItem__heading",attrs:{for:t.id}},[n("span",[t._v(t._s(t.text))])])]),t._v(" "),n("button",{staticClass:"todoItem__delete-button",on:{click:function(e){return e.stopPropagation(),t.handleDeleteTodo.apply(null,arguments)}}},[n("img",{staticClass:"icon-img",attrs:{src:o(285)}})])])}),[],!1,null,"82e500b8",null);e.default=component.exports},283:function(t,e,o){"use strict";o.r(e);var n={name:"Popup",props:{isShow:{type:Boolean,required:!0}},watch:{isShow:{immediate:!0,handler:function(t){!0===t?document.documentElement.classList.add("is-fixed"):document.documentElement.classList.remove("is-fixed")}}}},d=(o(291),o(46)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isShow?o("div",{staticClass:"popup"},[o("div",{staticClass:"popup__overlay"}),t._v(" "),o("div",{staticClass:"popup__content"},[t._t("default")],2)]):t._e()])}),[],!1,null,"7d44ce42",null);e.default=component.exports},285:function(t,e,o){t.exports=o.p+"img/delete.aea71c5.svg"},286:function(t,e,o){"use strict";o(280)},287:function(t,e,o){var n=o(111),d=o(288),l=o(289),r=o(290),c=n(!1),M=d(l),f=d(r);c.push([t.i,".todoItem[data-v-82e500b8]{padding-right:15px;padding-left:15px;display:flex;align-items:center}@media screen and (min-width: 768px){.todoItem[data-v-82e500b8]{padding-right:35px;padding-left:35px}}.todoItem__fieldset[data-v-82e500b8]{flex-grow:1;flex-basis:0;position:relative;overflow:hidden}.todoItem__delete-button[data-v-82e500b8]{width:24px;height:24px;flex-basis:24px;position:relative}.todoItem__checkbox[data-v-82e500b8]{display:none;position:absolute;opacity:0;visibility:hidden;z-index:-9999}.todoItem__checkbox+.todoItem__heading[data-v-82e500b8]::before{content:'';width:20px;height:20px;display:block;background:url("+M+") no-repeat center/contain;flex-basis:20px}.todoItem__checkbox:checked+.todoItem__heading[data-v-82e500b8]::before{background-image:url("+f+")}.todoItem__heading[data-v-82e500b8]{width:100%;display:flex;align-items:flex-start;cursor:pointer}.todoItem__heading span[data-v-82e500b8]{padding-right:15px;padding-left:30px;font-size:18px;flex-grow:1;flex-basis:0;line-height:1.2em}\n",""]),t.exports=c},288:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},289:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjY0MjkgMC4zNzVIMi4zNTcxNEMxLjA1NTggMC4zNzUgMCAxLjI5ODgzIDAgMi40Mzc1VjE3LjU2MjVDMCAxOC43MDEyIDEuMDU1OCAxOS42MjUgMi4zNTcxNCAxOS42MjVIMTkuNjQyOUMyMC45NDQyIDE5LjYyNSAyMiAxOC43MDEyIDIyIDE3LjU2MjVWMi40Mzc1QzIyIDEuMjk4ODMgMjAuOTQ0MiAwLjM3NSAxOS42NDI5IDAuMzc1Wk0xOS4zNDgyIDE3LjU2MjVIMi42NTE3OUMyLjQ4OTczIDE3LjU2MjUgMi4zNTcxNCAxNy40NDY1IDIuMzU3MTQgMTcuMzA0N1YyLjY5NTMxQzIuMzU3MTQgMi41NTM1MiAyLjQ4OTczIDIuNDM3NSAyLjY1MTc5IDIuNDM3NUgxOS4zNDgyQzE5LjUxMDMgMi40Mzc1IDE5LjY0MjkgMi41NTM1MiAxOS42NDI5IDIuNjk1MzFWMTcuMzA0N0MxOS42NDI5IDE3LjQ0NjUgMTkuNTEwMyAxNy41NjI1IDE5LjM0ODIgMTcuNTYyNVoiIGZpbGw9IiNDN0MzQzYiLz4KPC9zdmc+Cg=="},290:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjY0MjkgMC4zNzVIMi4zNTcxNEMxLjA1NTMxIDAuMzc1IDAgMS4yOTg0IDAgMi40Mzc1VjE3LjU2MjVDMCAxOC43MDE2IDEuMDU1MzEgMTkuNjI1IDIuMzU3MTQgMTkuNjI1SDE5LjY0MjlDMjAuOTQ0NyAxOS42MjUgMjIgMTguNzAxNiAyMiAxNy41NjI1VjIuNDM3NUMyMiAxLjI5ODQgMjAuOTQ0NyAwLjM3NSAxOS42NDI5IDAuMzc1Wk0xOS42NDI5IDE3LjU2MjVIMi4zNTcxNFYyLjQzNzVIMTkuNjQyOVYxNy41NjI1Wk0xNy44ODE3IDcuMTc1OTJMOS40MDYzMyAxNC41MzIzQzkuMTc1MjggMTQuNzMyOSA4LjgwMjE2IDE0LjczMTYgOC41NzI5OCAxNC41Mjk0TDQuMTE0OTggMTAuNTk3MUMzLjg4NTggMTAuMzk0OSAzLjg4NzI3IDEwLjA2ODQgNC4xMTgzNyA5Ljg2Nzg3TDUuMjM0MDQgOC44OTk1M0M1LjQ2NTA4IDguNjk4OTkgNS44MzgyIDguNzAwMjggNi4wNjczOCA4LjkwMjQ5TDkuMDAzNiAxMS40OTI1TDE1Ljk0NSA1LjQ2NzYxQzE2LjE3NiA1LjI2NzA4IDE2LjU0OTIgNS4yNjgzNyAxNi43NzgzIDUuNDcwNTRMMTcuODg1IDYuNDQ2N0MxOC4xMTQyIDYuNjQ4OTEgMTguMTEyNyA2Ljk3NTM5IDE3Ljg4MTcgNy4xNzU5MloiIGZpbGw9IiM4REM4RkYiLz4KPC9zdmc+Cg=="},291:function(t,e,o){"use strict";o(281)},292:function(t,e,o){var n=o(111)(!1);n.push([t.i,".popup[data-v-7d44ce42]{width:100%;height:100%;position:fixed;top:0;left:0;overflow:hidden;z-index:5000}.popup__overlay[data-v-7d44ce42]{width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,0.7)}.popup__content[data-v-7d44ce42]{width:calc(100% - 20px);padding:10px;position:absolute;top:50%;left:50%;overflow-x:hidden;overflow-y:auto;transform:translateX(-50%) translateY(-50%)}\n",""]),t.exports=n},293:function(t,e,o){var content=o(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(112).default)("281aabf4",content,!0,{sourceMap:!1})},294:function(t,e,o){var content=o(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(112).default)("01cd2aea",content,!0,{sourceMap:!1})},295:function(t,e,o){var content=o(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(112).default)("124605d2",content,!0,{sourceMap:!1})},301:function(t,e,o){"use strict";o(293)},302:function(t,e,o){var n=o(111)(!1);n.push([t.i,".todoList[data-v-79d57d41]{flex-grow:1}.todoList__wrap>li[data-v-79d57d41]{margin-top:30px;margin-bottom:30px}.deleteConfirm[data-v-79d57d41]{width:100%;max-width:320px;margin:auto;background-color:#fff;border:1px #C7C3C6 solid;border-radius:4px}.deleteConfirm__title[data-v-79d57d41]{padding:25px 10px;font-size:18px;line-height:1.2em;text-align:center}.deleteConfirm__control[data-v-79d57d41]{display:flex;border-top:1px #C7C3C6 solid}.deleteConfirm__control button[data-v-79d57d41]{width:100%;flex-grow:1;padding:10px;font-size:16px;line-height:1.2em}.deleteConfirm__control button+button[data-v-79d57d41]{border-left:1px #C7C3C6 solid}\n",""]),t.exports=n},303:function(t,e,o){"use strict";o(294)},304:function(t,e,o){var n=o(111)(!1);n.push([t.i,".nav[data-v-12f2ffd7]{width:100%;margin-top:10px;display:flex;justify-content:flex-end}@media screen and (min-width: 480px){.nav[data-v-12f2ffd7]{width:auto;align-items:center;justify-content:flex-start}}.nav__button[data-v-12f2ffd7]{margin-left:10px;font-size:16px}.nav__button.current[data-v-12f2ffd7]{font-weight:700;color:#8DC8FF}\n",""]),t.exports=n},305:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjUgNy41MzEyNUgxMi43NVYxLjYyNUMxMi43NSAwLjkwMDI1NCAxMi4wNzgzIDAuMzEyNSAxMS4yNSAwLjMxMjVIOS43NUM4LjkyMTcyIDAuMzEyNSA4LjI1IDAuOTAwMjU0IDguMjUgMS42MjVWNy41MzEyNUgxLjVDMC42NzE3MTkgNy41MzEyNSAwIDguMTE5IDAgOC44NDM3NVYxMC4xNTYyQzAgMTAuODgxIDAuNjcxNzE5IDExLjQ2ODggMS41IDExLjQ2ODhIOC4yNVYxNy4zNzVDOC4yNSAxOC4wOTk3IDguOTIxNzIgMTguNjg3NSA5Ljc1IDE4LjY4NzVIMTEuMjVDMTIuMDc4MyAxOC42ODc1IDEyLjc1IDE4LjA5OTcgMTIuNzUgMTcuMzc1VjExLjQ2ODhIMTkuNUMyMC4zMjgzIDExLjQ2ODggMjEgMTAuODgxIDIxIDEwLjE1NjJWOC44NDM3NUMyMSA4LjExOSAyMC4zMjgzIDcuNTMxMjUgMTkuNSA3LjUzMTI1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},306:function(t,e,o){"use strict";o(295)},307:function(t,e,o){var n=o(111)(!1);n.push([t.i,".input-area[data-v-250480d1]{width:100%;display:flex}.input-area__control[data-v-250480d1]{flex-grow:1;padding-right:25px}.input-area__input[data-v-250480d1]{width:100%;height:35px;padding:7px 14px;border:1px #C7C3C6 solid;border-radius:4px}.input-area__button[data-v-250480d1]{width:35px;height:35px;position:relative;background-color:#8DC8FF;border-radius:4px}\n",""]),t.exports=n},308:function(t,e,o){"use strict";o.r(e);o(39),o(14);var n=o(282),d=o(283),l={data:function(){return{deleteConfirm:{isShow:!1,id:""}}},name:"TodoList",components:{TodoItem:n.default,Popup:d.default},props:{visibilities:{type:String,required:!0}},methods:{handleConfirmOpen:function(t){this.deleteConfirm.isShow=!0,this.deleteConfirm.id=t},handleConfirmClose:function(){this.deleteConfirm.isShow=!1,this.deleteConfirm.id=""},handleConfirmDelete:function(){!1===this.isLoading&&this.$store.dispatch("DELETE_TODO_ACTION",this.deleteConfirm.id),this.handleConfirmClose()}},computed:{contextList:function(){var t=this;return this.$store.state.todoList.filter((function(e){var o=e.isCheck;switch(t.visibilities){case"todo":return!1===o;case"complete":return!0===o;default:return!0}}))},isLoading:function(){return this.$store.state.isLoading}}},r=(o(301),o(46)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todoList"},[o("transition-group",{staticClass:"todoList__wrap",attrs:{name:"list",tag:"ul"}},t._l(t.contextList,(function(e){return o("li",{key:e.id},[o("TodoItem",{attrs:{"todo-data":e},on:{setDeleteTodo:t.handleConfirmOpen}})],1)})),0),t._v(" "),o("Popup",{attrs:{"is-show":t.deleteConfirm.isShow}},[o("div",{staticClass:"deleteConfirm"},[o("div",{staticClass:"deleteConfirm__title"},[t._v("\n        確定要刪除這筆資料？\n      ")]),t._v(" "),o("div",{staticClass:"deleteConfirm__control"},[o("button",{on:{click:function(e){return e.stopPropagation(),t.handleConfirmDelete.apply(null,arguments)}}},[t._v("\n          確定\n        ")]),t._v(" "),o("button",{on:{click:function(e){return e.stopPropagation(),t.handleConfirmClose.apply(null,arguments)}}},[t._v("\n          取消\n        ")])])])])],1)}),[],!1,null,"79d57d41",null);e.default=component.exports;installComponents(component,{TodoItem:o(282).default,Popup:o(283).default})},309:function(t,e,o){"use strict";o.r(e);var n={name:"TodoNav",props:{visibilities:{type:String,required:!0}},methods:{handleSetNav:function(t){this.$emit("setVisibilities",t)}}},d=(o(303),o(46)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"nav"},[o("button",{staticClass:"nav__button",class:{current:"all"===t.visibilities},attrs:{title:"All"},on:{click:function(e){return e.stopPropagation(),t.handleSetNav("all")}}},[t._v("\n    All\n  ")]),t._v(" "),o("button",{staticClass:"nav__button",class:{current:"todo"===t.visibilities},attrs:{title:"Todo"},on:{click:function(e){return e.stopPropagation(),t.handleSetNav("todo")}}},[t._v("\n    Todo\n  ")]),t._v(" "),o("button",{staticClass:"nav__button",class:{current:"complete"===t.visibilities},attrs:{title:"Complete"},on:{click:function(e){return e.stopPropagation(),t.handleSetNav("complete")}}},[t._v("\n    Complete\n  ")])])}),[],!1,null,"12f2ffd7",null);e.default=component.exports},310:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{inputValue:""}},name:"InputArea",methods:{handleAddTodo:function(){if(""!==this.inputValue){var t=new Date,e={id:"".concat(t.getTime()),text:this.inputValue,isCheck:!1};this.$store.dispatch("ADD_TODO_ACTION",e),this.inputValue=""}}}},d=(o(306),o(46)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-area"},[n("div",{staticClass:"input-area__control"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],staticClass:"input-area__input",attrs:{type:"text",placeholder:"請輸入要做的事情"},domProps:{value:t.inputValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleAddTodo.apply(null,arguments)},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),n("button",{staticClass:"input-area__button",on:{click:function(e){return e.stopPropagation(),t.handleAddTodo.apply(null,arguments)}}},[n("img",{staticClass:"icon-img",attrs:{src:o(305)}})])])}),[],!1,null,"250480d1",null);e.default=component.exports},311:function(t,e,o){var content=o(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(112).default)("5df07586",content,!0,{sourceMap:!1})},313:function(t,e,o){"use strict";o.r(e);var n=o(308),d=o(309),l={data:function(){return{visibilities:"all"}},name:"Content",components:{InputArea:o(310).default,TodoNav:d.default,TodoList:n.default},methods:{setVisibilities:function(t){this.visibilities=t}}},r=(o(314),o(46)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("div",{staticClass:"content__header"},[o("h1",{staticClass:"title"},[t._v("\n      Todo List\n    ")]),t._v(" "),o("TodoNav",{attrs:{visibilities:t.visibilities},on:{setVisibilities:t.setVisibilities}})],1),t._v(" "),o("TodoList",{attrs:{visibilities:t.visibilities}}),t._v(" "),o("InputArea")],1)}),[],!1,null,"1a1dc1cd",null);e.default=component.exports;installComponents(component,{TodoNav:o(309).default,TodoList:o(308).default,InputArea:o(310).default})},314:function(t,e,o){"use strict";o(311)},315:function(t,e,o){var n=o(111)(!1);n.push([t.i,".content[data-v-1a1dc1cd]{width:100%;max-width:800px;min-height:718px;padding:15px;margin:auto;display:flex;background-color:#fff;border:1px #C7C3C6 solid;border-radius:4px;flex-direction:column}.content__header[data-v-1a1dc1cd]{padding-right:15px;padding-left:15px;margin-top:20px;display:flex;flex-wrap:wrap;margin-bottom:10px}@media screen and (min-width: 480px){.content__header[data-v-1a1dc1cd]{align-items:center;flex-wrap:nowrap;justify-content:space-between}}.title[data-v-1a1dc1cd]{font-size:36px;line-height:1.16em;width:100%;font-weight:700}@media screen and (min-width: 480px){.title[data-v-1a1dc1cd]{width:auto}}\n",""]),t.exports=n}}]);