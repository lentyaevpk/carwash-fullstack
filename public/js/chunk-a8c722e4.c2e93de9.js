(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8c722e4"],{"54a6":function(t,e,n){"use strict";var a=n("fe5f"),r=n.n(a);r.a},"6e7a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Comments")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feedback"},[n("h1",{staticClass:"feedback__title title"},[t._v("Поделитесь впечатлениями")]),t.isLoading?n("Loader",{staticClass:"feedback__loader"}):n("main",{staticClass:"feedback-container"},[t.posts.length?n("ul",{staticClass:"feedback-container__list"},t._l(t.posts,(function(e,a){return n("li",{key:a,staticClass:"post"},[n("h2",{staticClass:"post__title"},[t._v(" "+t._s(e.name)+" "),n("span",[t._v(t._s(e.createdAt.getDate()+"/"+e.createdAt.getMonth()+"/"+e.createdAt.getFullYear()))])]),n("p",{staticClass:"post__text"},[t._v(t._s(e.text))])])})),0):n("p",{staticClass:"post__text"},[t._v("Комментариев пока нет.")]),t.isLoggedIn?n("form",{staticClass:"feedback-container__form form",on:{submit:function(e){return e.preventDefault(),t.createPost(e)}}},[n("div",{staticClass:"form__group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form__input",attrs:{type:"text",name:"message",required:"",placeholder:" ",autocomplete:"off"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("label",{staticClass:"form__label"},[t._v("Сообщение")])]),n("button",{staticClass:"feedback__button button",attrs:{type:"submit"}},[t._v("Оставить отзыв")])]):n("p",{staticClass:"post__text",staticStyle:{"text-align":"center"}},[t._v("Авторизуйтесь, чтобы оставлять комментарии.")])])],1)},c=[],o=n("5530"),i=(n("96cf"),n("1da1")),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-roller"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],f={name:"Loader"},p=f,d=(n("a071"),n("2877")),m=Object(d["a"])(p,u,l,!1,null,null,null),v=m.exports;n("d81d"),n("d3b7");function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function g(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),t}var h=n("bc3a"),x=n.n(h),w="/api/posts/",k=function(){function t(){_(this,t)}return g(t,null,[{key:"getPosts",value:function(){return new Promise(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get(w);case 3:a=t.sent,r=a.data,e(r.map((function(t){return Object(o["a"])({},t,{createdAt:new Date(t.createdAt)})}))),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),n(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"insertPost",value:function(t,e){return x.a.post(w,{name:e,text:t})}},{key:"deletePost",value:function(t){return x.a.delete("".concat(w).concat(t))}}]),t}(),C=k,y=n("2f62"),P={name:"Posts",components:{Loader:v},data:function(){return{posts:[],error:"",text:"",isLoading:!0}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.getPosts();case 3:t.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:return e.prev=9,t.isLoading=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})))()},computed:Object(o["a"])({},Object(y["c"])(["user","isLoggedIn"])),methods:{createPost:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.insertPost(t.text,t.user.username);case 2:return e.next=4,C.getPosts();case 4:t.posts=e.sent,t.text="";case 6:case"end":return e.stop()}}),e)})))()}}},j=P,O=(n("54a6"),Object(d["a"])(j,s,c,!1,null,null,null)),L=O.exports,A={components:{Comments:L}},R=A,E=Object(d["a"])(R,a,r,!1,null,null,null);e["default"]=E.exports},a071:function(t,e,n){"use strict";var a=n("c25f"),r=n.n(a);r.a},c25f:function(t,e,n){},d81d:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").map,s=n("1dde"),c=n("ae40"),o=s("map"),i=c("map");a({target:"Array",proto:!0,forced:!o||!i},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},fe5f:function(t,e,n){}}]);
//# sourceMappingURL=chunk-a8c722e4.c2e93de9.js.map