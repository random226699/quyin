(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-login"],{"0d38":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".login-container[data-v-0912f650]{padding:20px;margin-top:10%}.login-title[data-v-0912f650]{font-size:20px;font-weight:700;margin-bottom:20px;text-align:center /* 居中 */}.login-input[data-v-0912f650]{margin-bottom:20px}.login-button[data-v-0912f650]{text-align:center}.login-input u-input[data-v-0912f650]{display:flex;align-items:center}",""]),t.exports=n},5146:function(t,n,e){"use strict";e.r(n);var a=e("7c7f"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},6705:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("uvText",{attrs:{type:t.type,show:t.show,text:t.text,prefixIcon:t.prefixIcon,suffixIcon:t.suffixIcon,mode:t.mode,href:t.href,format:t.format,call:t.call,openType:t.openType,bold:t.bold,block:t.block,lines:t.lines,color:t.color,decoration:t.decoration,size:t.size,iconStyle:t.iconStyle,margin:t.margin,lineHeight:t.lineHeight,align:t.align,wordWrap:t.wordWrap,customStyle:t.customStyle},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.$emit("click")}}})},i=[]},7813:function(t,n,e){"use strict";e.r(n);var a=e("6705"),i=e("95fb");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);var u=e("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=r.exports},7958:function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("df42")),o=a(e("2c58")),u={name:"u--text",mixins:[uni.$u.mpMixin,o.default,uni.$u.mixin],components:{uvText:i.default}};n.default=u},"7c7f":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("a450"),i=e("7c98"),o=e("0dc9"),u={data:function(){return{loginData:{username:"",password:""}}},onShow:function(){this.loginData.username=(0,o.getStorageData)("history-login-account")||""},methods:{login:function(){var t=this;this.loginData.username&&this.loginData.password?(0,i.apiAccountLogin)(this.loginData).then((function(n){(0,o.afterLogin)(n.data.userInfo,n.data.token),(0,a.toToast)("登录成功"),(0,o.setStorageData)("history-login-account",t.loginData.username),setTimeout((function(){uni.reLaunch({url:"/pages/my/my"})}),1e3)})):(0,a.toToast)("请输入账号和密码")}}};n.default=u},"848b":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={uInput:e("062a").default,uIcon:e("79c5").default,"u-Text":e("7813").default,uButton:e("20a3").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"login-container"},[e("v-uni-view",{staticClass:"login-title"},[t._v("欢迎使用趣印")]),e("v-uni-view",{staticClass:"login-input"},[e("u-input",{attrs:{placeholder:"请输入登录账号",clearable:!0},model:{value:t.loginData.username,callback:function(n){t.$set(t.loginData,"username",n)},expression:"loginData.username"}},[e("u-icon",{attrs:{slot:"prefix",name:"account-fill"},slot:"prefix"})],1)],1),e("v-uni-view",{staticClass:"login-input"},[e("u-input",{attrs:{type:"password",placeholder:"请输入登录密码",clearable:!0},model:{value:t.loginData.password,callback:function(n){t.$set(t.loginData,"password",n)},expression:"loginData.password"}},[e("u-icon",{attrs:{slot:"prefix",name:"lock"},slot:"prefix"})],1)],1),e("v-uni-view",{staticStyle:{"margin-bottom":"20rpx"}},[e("u--text",{attrs:{type:"info",text:"测试账号/密码：test/123456"}})],1),e("v-uni-view",{staticClass:"login-button"},[e("u-button",{attrs:{"custom-style":"background-color: #ff931c;color:white",shape:"circle"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.login.apply(void 0,arguments)}}},[t._v("确认登录")])],1)],1)},o=[]},"95fb":function(t,n,e){"use strict";e.r(n);var a=e("7958"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"989c":function(t,n,e){var a=e("0d38");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("026efd52",a,!0,{sourceMap:!1,shadowMode:!1})},b34a:function(t,n,e){"use strict";var a=e("989c"),i=e.n(a);i.a},d293:function(t,n,e){"use strict";e.r(n);var a=e("848b"),i=e("5146");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("b34a");var u=e("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"0912f650",null,!1,a["a"],void 0);n["default"]=r.exports}}]);