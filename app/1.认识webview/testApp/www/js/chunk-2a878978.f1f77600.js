(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a878978"],{"0bb7":function(t,e,i){},8373:function(t,e,i){"use strict";var a=i("0bb7"),s=i.n(a);s.a},bb10:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page",attrs:{id:"mine"}},[i("h1",[t._v("个人")]),i("button",{on:{click:t.pickPhotoAction}},[t._v("选择照片")]),i("img",{staticClass:"header",attrs:{src:t.headerImg,alt:""}}),i("a",{attrs:{href:"#sheet"}},[t._v("登录")]),i("div",{staticClass:"mui-popover mui-popover-bottom mui-popover-action ",attrs:{id:"sheet"}},[i("ul",{staticClass:"mui-table-view"},[i("li",{staticClass:"mui-table-view-cell",on:{click:t.qqLoginAction}},[i("a",{attrs:{href:"#"}},[t._v("qq登录")])]),t._m(0),t._m(1)]),t._m(2)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"mui-table-view-cell"},[i("a",{attrs:{href:"#"}},[t._v("微信登录")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"mui-table-view-cell"},[i("a",{attrs:{href:"#"}},[t._v("微博登录")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"mui-table-view"},[i("li",{staticClass:"mui-table-view-cell"},[i("a",{attrs:{href:"#sheet"}},[i("b",[t._v("取消")])])])])}],c={data:function(){return{headerImg:""}},methods:{qqLoginAction:function(){console.log("点击了qq登录"),mui("#sheet").popover("toggle")},pickPhotoAction:function(){var t=this;plus.gallery.pick(function(e){t.headerImg=e},function(t){console.log(t.code),console.log(t.message)},{multiple:!1})}}},l=c,n=(i("8373"),i("2877")),o=Object(n["a"])(l,a,s,!1,null,"a0d92c04",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2a878978.f1f77600.js.map