(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoice/invoiceManage"],{"17fd":function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");a(n("66fd"));var e=a(n("b6e7"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"18e8":function(t,e,n){},6029:function(t,e,n){"use strict";var a=n("18e8"),i=n.n(a);i.a},"77b5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a")),i=n("802d");n("2b74");function r(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n,a,i,r,c){try{var u=t[r](c),o=u.value}catch(s){return void n(s)}u.done?e(o):Promise.resolve(o).then(a,i)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function c(t){s(r,a,i,c,u,"next",t)}function u(t){s(r,a,i,c,u,"throw",t)}c(void 0)}))}}var l={data:function(){return{invoiceData:{type:2,title:"",duty_paragraph:"",is_default:""},invoiceType:[{name:"公司",value:1},{name:"个人",value:2}]}},onLoad:function(t){this.initData(t)},methods:{initData:function(){var e=f(a.default.mark((function e(n){var i;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i="新增发票","edit"!==n.type){e.next=5;break}return i="编辑发票",e.next=5,this.getInvoiceDetail(n.id);case 5:this.manageType=n.type,t.setNavigationBarTitle({title:i});case 7:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),getInvoiceDetail:function(){var t=f(a.default.mark((function t(e){var n=this;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$get("".concat(i.invoiceDetail),{id:e}).then(function(){var t=f(a.default.mark((function t(e){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.invoiceData=e.data;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleTitleChange:function(t){this.invoiceData.title=t.detail.value},handleInvoiceTypeChange:function(t){this.invoiceData.type=t.detail.value},handleDutyParagraphChange:function(t){this.invoiceData.duty_paragraph=t.detail.value},switchChange:function(t){this.invoiceData.is_default=t.detail.value?"1":"0"},confirm:function(){var t=this.invoiceData;t.title?1!==t.type||t.duty_paragraph?"edit"===this.manageType?this.handleInvoiceUpdate(t):this.handleInvoiceCreate(t):this.$api.msg("请填写发票税号"):this.$api.msg("请填写发票抬头")},handleInvoiceUpdate:function(){var e=f(a.default.mark((function e(n){var r=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$put("".concat(i.invoiceUpdate,"?id=").concat(n.id),{type:n.type,title:n.title,duty_paragraph:n.duty_paragraph,is_default:n.is_default}).then((function(e){r.$api.msg("恭喜您, 发票修改成功！"),t.navigateBack({url:"/pages/invoice/invoice"})})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),handleInvoiceCreate:function(){var e=f(a.default.mark((function e(n){var r=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$post("".concat(i.invoiceCreate),u({},n)).then((function(e){r.$api.msg("恭喜您, 发票添加成功！"),t.navigateBack({url:"/pages/invoice/invoice"})})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()}};e.default=l}).call(this,n("543d")["default"])},a50b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,parseInt(t.invoiceData.type,10));t.$mp.data=Object.assign({},{$root:{m0:n}})},i=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}))},b6e7:function(t,e,n){"use strict";n.r(e);var a=n("a50b"),i=n("f932");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("6029");var c=n("2877"),u=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},f932:function(t,e,n){"use strict";n.r(e);var a=n("77b5"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a}},[["17fd","common/runtime","common/vendor"]]]);