(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-analysis-photo"],{"1e8c":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.videoBox[data-v-45c341f0], .imageBox[data-v-45c341f0], .contentBox[data-v-45c341f0]{background:#fff;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.3);margin-bottom:%?20?%}.videoBox .title[data-v-45c341f0], .imageBox .title[data-v-45c341f0], .contentBox .title[data-v-45c341f0]{padding:10px}.videoBox .link[data-v-45c341f0], .imageBox .link[data-v-45c341f0], .contentBox .link[data-v-45c341f0]{text-align:center;width:100%}.videoBox .link .center[data-v-45c341f0], .imageBox .link .center[data-v-45c341f0], .contentBox .link .center[data-v-45c341f0]{display:inline-block;border-radius:10px}.videoBox .operateBtn[data-v-45c341f0], .imageBox .operateBtn[data-v-45c341f0], .contentBox .operateBtn[data-v-45c341f0]{padding:%?30?%}.videoBox .operateBtn[data-v-45c341f0] .u-button, .imageBox .operateBtn[data-v-45c341f0] .u-button, .contentBox .operateBtn[data-v-45c341f0] .u-button{background:#ff931c;border-color:#ff931c}.videoBox .helpBtn[data-v-45c341f0], .imageBox .helpBtn[data-v-45c341f0], .contentBox .helpBtn[data-v-45c341f0]{font-size:%?25?%;padding-bottom:%?30?%;color:#ff931c;display:flex;justify-content:center;align-items:center}.videoBox .inputTextarea[data-v-45c341f0], .imageBox .inputTextarea[data-v-45c341f0], .contentBox .inputTextarea[data-v-45c341f0]{padding:%?30?%}.videoBox .inputTextarea .input[data-v-45c341f0], .imageBox .inputTextarea .input[data-v-45c341f0], .contentBox .inputTextarea .input[data-v-45c341f0]{background:#f5f5f5}.swiper[data-v-45c341f0]{padding:0 %?30?% 0 %?30?%}',""]),t.exports=a},3503:function(t,a,e){"use strict";e.r(a);var n=e("eb2f"),i=e("a52e");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("a62c");var o=e("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"45c341f0",null,!1,n["a"],void 0);a["default"]=c.exports},"40aa":function(t,a,e){var n=e("1e8c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("5115b0e2",n,!0,{sourceMap:!1,shadowMode:!1})},a362:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("c7eb")),r=n(e("1da1")),o=n(e("df42")),c=n(e("7b1d")),u=e("7c98"),s=e("a450"),d=e("b21c"),l=e("0dc9"),f={components:{URow:c.default,UText:o.default},data:function(){return{image_link_list:[],content:"",current_index:0,isWeb:!1}},onLoad:function(t){var a=this;(0,u.apiAnalysisInfo)({params:{msg_id:t.msg_id}}).then((function(t){1!==t.data.info.status&&d.computed.$u.toast(t.data.info.status_text),a.image_link_list=t.data.info.images,a.content=t.data.info.title})),this.isWeb=(0,l.isWeb)()},methods:{changeImage:function(t){this.current_index=t.current},copyImageClick:function(){var t=this;return(0,r.default)((0,i.default)().mark((function a(){var e;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=t.image_link_list[t.current_index],a.next=3,(0,s.copy)(e);case 3:case"end":return a.stop()}}),a)})))()},copyTitleClick:function(){var t=this;return(0,r.default)((0,i.default)().mark((function a(){return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,s.copy)(t.content);case 2:case"end":return a.stop()}}),a)})))()},saveImageClick:function(){var t=this;return(0,r.default)((0,i.default)().mark((function a(){var e;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return(0,l.isWeb)()||(0,s.showLoading)("正在保存中..."),e=t.image_link_list[t.current_index],a.next=4,(0,s.saveImageToAlbum)([e]);case 4:d.computed.hideLoading();case 5:case"end":return a.stop()}}),a)})))()},saveAllImageClick:function(){var t=this;return(0,r.default)((0,i.default)().mark((function a(){return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return(0,s.showLoading)("正在保存中..."),a.next=3,(0,s.saveImageToAlbum)(t.image_link_list);case 3:d.computed.hideLoading();case 4:case"end":return a.stop()}}),a)})))()},videoErrorCallback:function(){}}};a.default=f},a52e:function(t,a,e){"use strict";e.r(a);var n=e("a362"),i=e.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},a62c:function(t,a,e){"use strict";var n=e("40aa"),i=e.n(n);i.a},eb2f:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var n={"u-Text":e("7813").default,uSwiper:e("3fd1").default,uRow:e("7b1d").default,uCol:e("4503").default,uButton:e("20a3").default,"u-Textarea":e("c466").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticStyle:{padding:"20rpx"}},[e("v-uni-view",{staticClass:"imageBox"},[e("v-uni-view",{staticClass:"title"},[e("u--text",{attrs:{text:"图片",bold:!0,size:"20"}})],1),e("v-uni-view",{staticClass:"swiper"},[e("u-swiper",{attrs:{list:t.image_link_list,previousMargin:"30",nextMargin:"30",circular:!0,indicator:!0,autoplay:!1,indicatorMode:"dot",height:"280",interval:"5000"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.changeImage.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"operateBtn"},[e("u-row",{attrs:{justify:"around"}},[e("u-col",{attrs:{span:"5"}},[e("u-button",{attrs:{type:"primary",text:"复制链接(单张)",hairline:!1,plain:!0,customStyle:"background:white;color:#ff931c"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copyImageClick.apply(void 0,arguments)}}})],1),e("u-col",{attrs:{span:"5"}},[e("u-button",{attrs:{type:"primary",text:t.isWeb?"查看图片(单张)":"下载图片(单张)",hairline:!1},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.saveImageClick.apply(void 0,arguments)}}})],1)],1),t.isWeb?t._e():e("u-row",{attrs:{justify:"around",customStyle:"margin-top: 30rpx"}},[e("u-col",{attrs:{span:"12"}},[e("u-button",{staticClass:"saveBtn",attrs:{type:"primary",text:"下载图片(全部)",hairline:!1},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.saveAllImageClick.apply(void 0,arguments)}}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"contentBox"},[e("v-uni-view",{staticClass:"title"},[e("u--text",{attrs:{text:"文案",bold:!0,size:"20"}})],1),e("v-uni-view",{staticClass:"inputTextarea"},[e("u--textarea",{staticClass:"input",attrs:{height:"90",count:!0},model:{value:t.content,callback:function(a){t.content=a},expression:"content"}})],1),e("v-uni-view",{staticClass:"operateBtn"},[e("u-row",{attrs:{justify:"around"}},[e("u-col",{attrs:{span:"12"}},[e("u-button",{attrs:{type:"primary",text:"复制文案",hairline:!1},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.copyTitleClick.apply(void 0,arguments)}}})],1)],1)],1)],1)],1)},r=[]}}]);