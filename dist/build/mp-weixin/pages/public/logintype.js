(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/logintype"],{"2c8a":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a")),o=t("7ded"),i=t("2f62");t("3e3e");function a(e){return e&&e.__esModule?e:{default:e}}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){f(i,r,o,a,c,"next",e)}function c(e){f(i,r,o,a,c,"throw",e)}a(void 0)}))}}var d={data:function(){return{isAuthLoginShow:!1}},onLoad:function(n){var t=this;this.isAuthLoginShow=!0,this.code=n.code,this.code&&this.$get(o.wechatH5Login,{code:this.code}).then(function(){var n=l(r.default.mark((function n(o){var i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o.data.login){n.next=5;break}t.user_info=o.data.user_info.original,e.showModal({content:"你尚未绑定账号，是否跳转登录页面？",success:function(n){if(n.confirm){var r="/pages/public/login?userInfo=".concat(JSON.stringify(t.user_info));e.navigateTo({url:r})}}}),n.next=10;break;case 5:return n.next=7,t.login(o.data.user_info);case 7:t.$api.msg("已为您授权登录"),i="/pages/user/user",e.reLaunch({url:i});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},methods:u({},(0,i.mapMutations)(["login"]),{navTo:function(n){e.navigateTo({url:n})},toAuthLogin:function(){var n=this;e.showModal({content:"是否授权登录?",success:function(t){t.confirm&&e.login({provider:"weixin",success:function(t){e.getUserInfo({provider:"weixin",success:function(i){console.log(i),n.$post(o.mpWechatLogin,{signature:i.signature,encryptedData:i.encryptedData,rawData:i.rawData,iv:i.iv,code:t.code}).then(function(){var t=l(r.default.mark((function t(o){var i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o.data.login){t.next=5;break}n.user_info=o.data.user_info,e.showModal({content:"你尚未绑定账号，是否跳转登录页面？",success:function(t){if(t.confirm){var r="/pages/public/login?userInfo=".concat(JSON.stringify(n.user_info));e.navigateTo({url:r})}}}),t.next=10;break;case 5:return t.next=7,n.login(o.data.user_info);case 7:n.$api.msg("已为您授权登录"),i="/pages/user/user",e.reLaunch({url:i});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},fail:function(e){console.log(e)}})}})}})},isWechat:function(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/micromessenger/i)}})};n.default=d}).call(this,t("543d")["default"])},"5d82":function(e,n,t){"use strict";t.r(n);var r=t("2c8a"),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},"703d":function(e,n,t){"use strict";t.r(n);var r=t("e5f6"),o=t("5d82");for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t("81fd");var a=t("2877"),c=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);n["default"]=c.exports},"81fd":function(e,n,t){"use strict";var r=t("dfc1"),o=t.n(r);o.a},dfc1:function(e,n,t){},e5f6:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}))},fccf:function(e,n,t){"use strict";(function(e){t("6cdc"),t("921b");r(t("66fd"));var n=r(t("703d"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["fccf","common/runtime","common/vendor"]]]);