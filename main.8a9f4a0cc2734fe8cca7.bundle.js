webpackJsonp([1,4],{"/fcW":function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="/fcW"},0:function(t,n,e){t.exports=e("x35b")},"1A80":function(t,n,e){"use strict";function l(t){return i._24(0,[(t()(),i._25(0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(t()(),i._26(null,["\n  "])),(t()(),i._25(0,null,null,4,"div",[],null,null,null,null,null)),(t()(),i._26(null,["\n    "])),(t()(),i._25(0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),i._26(null,["User Posts Filters"])),(t()(),i._26(null,["\n  "])),(t()(),i._26(null,["\n"])),(t()(),i._26(null,["\n\n\n"])),(t()(),i._25(0,null,null,10,"div",[["class","jumbotron"]],null,null,null,null,null)),(t()(),i._26(null,["\n  "])),(t()(),i._25(0,null,null,7,"div",[["class","container-fluid"]],null,null,null,null,null)),(t()(),i._26(null,["\n\n    "])),(t()(),i._25(0,null,null,4,"div",[["class","section"]],null,null,null,null,null)),(t()(),i._26(null,["\n      "])),(t()(),i._25(8388608,null,null,1,"router-outlet",[],null,null,null,null,null)),i._27(73728,null,0,o.y,[o.l,i.T,i.U,[8,null]],null,null),(t()(),i._26(null,["\n    "])),(t()(),i._26(null,["\n  "])),(t()(),i._26(null,["\n"])),(t()(),i._26(null,["\n"]))],null,null)}function _(t){return i._24(0,[(t()(),i._25(0,null,null,1,"app-root",[],null,null,null,l,h)),i._27(57344,null,0,u.a,[s.a,a.a],null,null)],function(t,n){t(n,1,0)},null)}var r=e("Ni5f"),i=e("3j3K"),o=e("5oXY"),u=e("YWx4"),s=e("O5mP"),a=e("Hqpt");e.d(n,"a",function(){return p});var c=[r.a],h=i._23({encapsulation:0,styles:c,data:{}}),p=i._28("app-root",u.a,_,{},{},[])},Hqpt:function(t,n,e){"use strict";var l=e("Fzro"),_=e("Gvdl");e.n(_);e.d(n,"a",function(){return r});var r=function(){function t(t){this.http=t}return t.prototype.getUsers=function(){return this.http.get("https://jsonplaceholder.typicode.com/posts")},t.prototype.getUserPostDetails=function(){var t=this.http.get("https://jsonplaceholder.typicode.com/users").map(function(t){return t.json()}),n=this.http.get("https://jsonplaceholder.typicode.com/posts").map(function(t){return t.json()});return _.Observable.forkJoin(t,n)},t.ctorParameters=function(){return[{type:l.k}]},t}()},Iksp:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(){}return t}()},LCh6:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(){}return t.prototype.transform=function(t,n){if(0===n.length)return t;for(var e=[],l=n.toLocaleLowerCase(),_=0,r=t;_<r.length;_++){var i=r[_];(i.username.toLowerCase().includes(l)||i.title.toLowerCase().includes(l)||i.body.toLowerCase().includes(l)||i.email.toLowerCase().includes(l))&&e.push(i)}return e},t}()},Ni5f:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=[""]},O5mP:function(t,n,e){"use strict";var l=e("Fzro");e.d(n,"a",function(){return _});var _=function(){function t(t){this.http=t}return t.prototype.getUsers=function(){return this.http.get("https://jsonplaceholder.typicode.com/users")},t.ctorParameters=function(){return[{type:l.k}]},t}()},YWx4:function(t,n,e){"use strict";var l=e("O5mP"),_=e("Hqpt");e.d(n,"a",function(){return r});var r=function(){function t(t,n){this.userService=t,this.userPostsService=n,this.title="app works!!"}return t.prototype.ngOnInit=function(){},t.prototype.onGetUsers=function(){this.userService.getUsers().subscribe(function(t){return console.log(t)},function(t){return console.log(t)})},t.prototype.onGetUserPosts=function(){this.userPostsService.getUsers().subscribe(function(t){return console.log(t)},function(t){return console.log(t)})},t.ctorParameters=function(){return[{type:l.a},{type:_.a}]},t}()},aodz:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=[".chat[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px;padding-bottom:5px;border-bottom:1px dotted #b3a9a9}.chat[_ngcontent-%COMP%]   li.left[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]{margin-left:60px}.chat[_ngcontent-%COMP%]   li.right[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]{margin-right:60px}.chat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#777}.chat[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]   .slidedown[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%]{margin-right:5px}.panel-body[_ngcontent-%COMP%]{overflow-y:scroll;height:100px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px;background-color:#f5f5f5}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#555}[class*=col-][_ngcontent-%COMP%]{margin-bottom:15px}a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited{text-align:center;text-decoration:underline;display:inline-block}a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover{background-color:red}"]},jHco:function(t,n,e){"use strict";var l=e("O5mP"),_=e("Hqpt");e.d(n,"a",function(){return r});var r=function(){function t(t,n){this.userService=t,this.userPostsService=n,this.userPosts=[],this.users=[],this.userPostsCombined=[],this.txtSearch=""}return t.prototype.ngOnInit=function(){this.onGetUserPostCombine()},t.prototype.onGetUserPostCombine=function(){var t=this;this.userPostsService.getUserPostDetails().subscribe(function(n){t.users=n[0],t.userPosts=n[1],t.userPostsCombined=t.combine(t.users,t.userPosts)})},t.prototype.combine=function(t,n){for(var e=t,l=0;l<t.length;l++){e[l].name="";for(var _=0;_<n.length;_++)t[l].id===n[_].id&&(e[l].title=n[_].title,e[l].body=n[_].body,console.log(e[l].name))}return e},t.ctorParameters=function(){return[{type:l.a},{type:_.a}]},t}()},kZql:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l={production:!0}},kke6:function(t,n,e){"use strict";var l=e("3j3K"),_=e("Iksp"),r=e("2Je8"),i=e("5oXY"),o=e("Qbdm"),u=e("NVOs"),s=e("Fzro"),a=e("O5mP"),c=e("Hqpt"),h=e("pPDk"),p=e("1A80"),d=e("jHco");e.d(n,"a",function(){return b});var g=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function l(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),f=function(t){function n(n){return t.call(this,n,[h.a,p.a],[p.a])||this}return g(n,t),Object.defineProperty(n.prototype,"_LOCALE_ID_25",{get:function(){return null==this.__LOCALE_ID_25&&(this.__LOCALE_ID_25=l.b(this.parent.get(l.c,null))),this.__LOCALE_ID_25},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NgLocalization_26",{get:function(){return null==this.__NgLocalization_26&&(this.__NgLocalization_26=new r.a(this._LOCALE_ID_25)),this.__NgLocalization_26},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_APP_ID_27",{get:function(){return null==this.__APP_ID_27&&(this.__APP_ID_27=l.d()),this.__APP_ID_27},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_IterableDiffers_28",{get:function(){return null==this.__IterableDiffers_28&&(this.__IterableDiffers_28=l.e()),this.__IterableDiffers_28},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_KeyValueDiffers_29",{get:function(){return null==this.__KeyValueDiffers_29&&(this.__KeyValueDiffers_29=l.f()),this.__KeyValueDiffers_29},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_DomSanitizer_30",{get:function(){return null==this.__DomSanitizer_30&&(this.__DomSanitizer_30=new o.b(this.parent.get(o.c))),this.__DomSanitizer_30},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Sanitizer_31",{get:function(){return null==this.__Sanitizer_31&&(this.__Sanitizer_31=this._DomSanitizer_30),this.__Sanitizer_31},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_HAMMER_GESTURE_CONFIG_32",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_32&&(this.__HAMMER_GESTURE_CONFIG_32=new o.d),this.__HAMMER_GESTURE_CONFIG_32},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EVENT_MANAGER_PLUGINS_33",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_33&&(this.__EVENT_MANAGER_PLUGINS_33=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_32)]),this.__EVENT_MANAGER_PLUGINS_33},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EventManager_34",{get:function(){return null==this.__EventManager_34&&(this.__EventManager_34=new o.h(this._EVENT_MANAGER_PLUGINS_33,this.parent.get(l.g))),this.__EventManager_34},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomSharedStylesHost_35",{get:function(){return null==this.__ɵDomSharedStylesHost_35&&(this.__ɵDomSharedStylesHost_35=new o.i(this.parent.get(o.c))),this.__ɵDomSharedStylesHost_35},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomRendererFactory2_36",{get:function(){return null==this.__ɵDomRendererFactory2_36&&(this.__ɵDomRendererFactory2_36=new o.j(this._EventManager_34,this._ɵDomSharedStylesHost_35)),this.__ɵDomRendererFactory2_36},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RendererFactory2_37",{get:function(){return null==this.__RendererFactory2_37&&(this.__RendererFactory2_37=this._ɵDomRendererFactory2_36),this.__RendererFactory2_37},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵSharedStylesHost_38",{get:function(){return null==this.__ɵSharedStylesHost_38&&(this.__ɵSharedStylesHost_38=this._ɵDomSharedStylesHost_35),this.__ɵSharedStylesHost_38},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Testability_39",{get:function(){return null==this.__Testability_39&&(this.__Testability_39=new l.h(this.parent.get(l.g))),this.__Testability_39},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Meta_40",{get:function(){return null==this.__Meta_40&&(this.__Meta_40=new o.k(this.parent.get(o.c))),this.__Meta_40},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Title_41",{get:function(){return null==this.__Title_41&&(this.__Title_41=new o.l(this.parent.get(o.c))),this.__Title_41},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_42",{get:function(){return null==this.__ɵi_42&&(this.__ɵi_42=new u.a),this.__ɵi_42},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_BrowserXhr_43",{get:function(){return null==this.__BrowserXhr_43&&(this.__BrowserXhr_43=new s.a),this.__BrowserXhr_43},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ResponseOptions_44",{get:function(){return null==this.__ResponseOptions_44&&(this.__ResponseOptions_44=new s.b),this.__ResponseOptions_44},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XSRFStrategy_45",{get:function(){return null==this.__XSRFStrategy_45&&(this.__XSRFStrategy_45=s.c()),this.__XSRFStrategy_45},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XHRBackend_46",{get:function(){return null==this.__XHRBackend_46&&(this.__XHRBackend_46=new s.d(this._BrowserXhr_43,this._ResponseOptions_44,this._XSRFStrategy_45)),this.__XHRBackend_46},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RequestOptions_47",{get:function(){return null==this.__RequestOptions_47&&(this.__RequestOptions_47=new s.e),this.__RequestOptions_47},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Http_48",{get:function(){return null==this.__Http_48&&(this.__Http_48=s.f(this._XHRBackend_46,this._RequestOptions_47)),this.__Http_48},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ActivatedRoute_49",{get:function(){return null==this.__ActivatedRoute_49&&(this.__ActivatedRoute_49=i.a(this._Router_22)),this.__ActivatedRoute_49},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NoPreloading_50",{get:function(){return null==this.__NoPreloading_50&&(this.__NoPreloading_50=new i.b),this.__NoPreloading_50},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PreloadingStrategy_51",{get:function(){return null==this.__PreloadingStrategy_51&&(this.__PreloadingStrategy_51=this._NoPreloading_50),this.__PreloadingStrategy_51},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RouterPreloader_52",{get:function(){return null==this.__RouterPreloader_52&&(this.__RouterPreloader_52=new i.c(this._Router_22,this._NgModuleFactoryLoader_20,this._Compiler_19,this,this._PreloadingStrategy_51)),this.__RouterPreloader_52},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PreloadAllModules_53",{get:function(){return null==this.__PreloadAllModules_53&&(this.__PreloadAllModules_53=new i.d),this.__PreloadAllModules_53},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ROUTER_INITIALIZER_54",{get:function(){return null==this.__ROUTER_INITIALIZER_54&&(this.__ROUTER_INITIALIZER_54=i.e(this._ɵg_3)),this.__ROUTER_INITIALIZER_54},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_APP_BOOTSTRAP_LISTENER_55",{get:function(){return null==this.__APP_BOOTSTRAP_LISTENER_55&&(this.__APP_BOOTSTRAP_LISTENER_55=[this._ROUTER_INITIALIZER_54]),this.__APP_BOOTSTRAP_LISTENER_55},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_UsersService_56",{get:function(){return null==this.__UsersService_56&&(this.__UsersService_56=new a.a(this._Http_48)),this.__UsersService_56},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_UserPostsService_57",{get:function(){return null==this.__UserPostsService_57&&(this.__UserPostsService_57=new c.a(this._Http_48)),this.__UserPostsService_57},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new r.b,this._ErrorHandler_1=o.m(),this._NgProbeToken_2=[i.f()],this._ɵg_3=new i.g(this),this._APP_INITIALIZER_4=[l.i,o.n(this.parent.get(o.o,null),this._NgProbeToken_2),i.h(this._ɵg_3)],this._ApplicationInitStatus_5=new l.j(this._APP_INITIALIZER_4),this._ɵf_6=new l.k(this.parent.get(l.g),this.parent.get(l.l),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5),this._ApplicationRef_7=this._ɵf_6,this._ApplicationModule_8=new l.m(this._ApplicationRef_7),this._BrowserModule_9=new o.p(this.parent.get(o.p,null)),this._ɵba_10=new u.b,this._FormsModule_11=new u.c,this._HttpModule_12=new s.g,this._ɵa_13=i.i(this.parent.get(i.j,null)),this._UrlSerializer_14=new i.k,this._RouterOutletMap_15=new i.l,this._ROUTER_CONFIGURATION_16={},this._LocationStrategy_17=i.m(this.parent.get(r.c),this.parent.get(r.d,null),this._ROUTER_CONFIGURATION_16),this._Location_18=new r.e(this._LocationStrategy_17),this._Compiler_19=new l.n,this._NgModuleFactoryLoader_20=new l.o(this._Compiler_19,this.parent.get(l.p,null)),this._ROUTES_21=[[{path:"",component:d.a},{path:"userPosts",component:d.a}]],this._Router_22=i.n(this._ApplicationRef_7,this._UrlSerializer_14,this._RouterOutletMap_15,this._Location_18,this,this._NgModuleFactoryLoader_20,this._Compiler_19,this._ROUTES_21,this._ROUTER_CONFIGURATION_16,this.parent.get(i.o,null),this.parent.get(i.p,null)),this._RouterModule_23=new i.q(this._ɵa_13,this._Router_22),this._AppModule_24=new _.a,this._AppModule_24},n.prototype.getInternal=function(t,n){return t===r.b?this._CommonModule_0:t===l.q?this._ErrorHandler_1:t===l.r?this._NgProbeToken_2:t===i.g?this._ɵg_3:t===l.s?this._APP_INITIALIZER_4:t===l.j?this._ApplicationInitStatus_5:t===l.k?this._ɵf_6:t===l.t?this._ApplicationRef_7:t===l.m?this._ApplicationModule_8:t===o.p?this._BrowserModule_9:t===u.b?this._ɵba_10:t===u.c?this._FormsModule_11:t===s.g?this._HttpModule_12:t===i.r?this._ɵa_13:t===i.s?this._UrlSerializer_14:t===i.l?this._RouterOutletMap_15:t===i.t?this._ROUTER_CONFIGURATION_16:t===r.f?this._LocationStrategy_17:t===r.e?this._Location_18:t===l.n?this._Compiler_19:t===l.u?this._NgModuleFactoryLoader_20:t===i.u?this._ROUTES_21:t===i.j?this._Router_22:t===i.q?this._RouterModule_23:t===_.a?this._AppModule_24:t===l.c?this._LOCALE_ID_25:t===r.g?this._NgLocalization_26:t===l.v?this._APP_ID_27:t===l.w?this._IterableDiffers_28:t===l.x?this._KeyValueDiffers_29:t===o.q?this._DomSanitizer_30:t===l.y?this._Sanitizer_31:t===o.r?this._HAMMER_GESTURE_CONFIG_32:t===o.s?this._EVENT_MANAGER_PLUGINS_33:t===o.h?this._EventManager_34:t===o.i?this._ɵDomSharedStylesHost_35:t===o.j?this._ɵDomRendererFactory2_36:t===l.z?this._RendererFactory2_37:t===o.t?this._ɵSharedStylesHost_38:t===l.h?this._Testability_39:t===o.k?this._Meta_40:t===o.l?this._Title_41:t===u.a?this._ɵi_42:t===s.a?this._BrowserXhr_43:t===s.h?this._ResponseOptions_44:t===s.i?this._XSRFStrategy_45:t===s.d?this._XHRBackend_46:t===s.j?this._RequestOptions_47:t===s.k?this._Http_48:t===i.v?this._ActivatedRoute_49:t===i.b?this._NoPreloading_50:t===i.w?this._PreloadingStrategy_51:t===i.c?this._RouterPreloader_52:t===i.d?this._PreloadAllModules_53:t===i.x?this._ROUTER_INITIALIZER_54:t===l.A?this._APP_BOOTSTRAP_LISTENER_55:t===a.a?this._UsersService_56:t===c.a?this._UserPostsService_57:n},n.prototype.destroyInternal=function(){this._ɵf_6.ngOnDestroy(),this.__ɵDomSharedStylesHost_35&&this._ɵDomSharedStylesHost_35.ngOnDestroy(),this.__RouterPreloader_52&&this._RouterPreloader_52.ngOnDestroy()},n}(l.B),b=new l.C(f,_.a)},pPDk:function(t,n,e){"use strict";function l(t){return o._24(0,[(t()(),o._25(0,null,null,58,"div",[["class","container"]],null,null,null,null,null)),(t()(),o._26(null,["\n  "])),(t()(),o._25(0,null,null,55,"div",[["class","row"]],null,null,null,null,null)),(t()(),o._26(null,["\n    "])),(t()(),o._25(0,null,null,52,"div",[["class","col-xs-12 col-sm-12 col-md-12"]],null,null,null,null,null)),(t()(),o._26(null,["\n      "])),(t()(),o._25(0,null,null,49,"div",[["class","panel panel-primary"]],null,null,null,null,null)),(t()(),o._26(null,["\n        "])),(t()(),o._25(0,null,null,11,"div",[["class","panel-heading"],["id","accordion"]],null,null,null,null,null)),(t()(),o._26(null,["\n          "])),(t()(),o._25(0,null,null,0,"span",[["class","glyphicon glyphicon-comment"]],null,null,null,null,null)),(t()(),o._26(null,[" Posts\n          "])),(t()(),o._25(0,null,null,6,"div",[["class","btn-group pull-right"]],null,null,null,null,null)),(t()(),o._26(null,["\n            "])),(t()(),o._25(0,null,null,3,"a",[["class","btn btn-default btn-xs"],["data-parent","#accordion"],["data-toggle","collapse"],["href","#collapseOne"],["type","button"]],null,null,null,null,null)),(t()(),o._26(null,["\n              "])),(t()(),o._25(0,null,null,0,"span",[["class","glyphicon glyphicon-chevron-down"]],null,null,null,null,null)),(t()(),o._26(null,["\n            "])),(t()(),o._26(null,["\n          "])),(t()(),o._26(null,["\n        "])),(t()(),o._26(null,["\n        "])),(t()(),o._25(0,null,null,33,"div",[["class","panel-collapse"],["id","collapseOne"]],null,null,null,null,null)),(t()(),o._26(null,["\n          "])),(t()(),o._25(0,null,null,30,"div",[["class","panel-body"]],null,null,null,null,null)),(t()(),o._26(null,["\n            "])),(t()(),o._25(0,null,null,27,"ul",[["class","chat"]],null,null,null,null,null)),(t()(),o._26(null,["\n              "])),(t()(),o._25(0,null,null,24,"li",[["class","right clearfix"]],null,null,null,null,null)),(t()(),o._25(0,null,null,3,"span",[["class","chat-img pull-right"]],null,null,null,null,null)),(t()(),o._26(null,["\n                            "])),(t()(),o._25(0,null,null,0,"img",[["alt","User Avatar"],["class","img-circle"],["src","http://placehold.it/50/FA6F57/fff&text=Reply"]],null,null,null,null,null)),(t()(),o._26(null,["\n                        "])),(t()(),o._26(null,["\n                "])),(t()(),o._25(0,null,null,17,"div",[["class","chat-body clearfix"]],null,null,null,null,null)),(t()(),o._26(null,["\n                  "])),(t()(),o._25(0,null,null,11,"div",[["class","header"]],null,null,null,null,null)),(t()(),o._26(null,["\n                    "])),(t()(),o._25(0,null,null,2,"small",[["class"," text-muted"]],null,null,null,null,null)),(t()(),o._25(0,null,null,0,"span",[["class","glyphicon  glyphicon-user"]],null,null,null,null,null)),(t()(),o._26(null,["",""])),(t()(),o._26(null,["\n                    "])),(t()(),o._25(0,null,null,4,"strong",[["class","pull-right primary-font"]],null,null,null,null,null)),(t()(),o._26(null,["\n                    "])),(t()(),o._25(0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(t()(),o._26(null,["\n                      ",""])),(t()(),o._26(null,["\n\n                    "])),(t()(),o._26(null,["\n                  "])),(t()(),o._26(null,["\n                  "])),(t()(),o._25(0,null,null,1,"p",[],null,null,null,null,null)),(t()(),o._26(null,["\n                    ","\n                  "])),(t()(),o._26(null,["\n                "])),(t()(),o._26(null,["\n              "])),(t()(),o._26(null,["\n            "])),(t()(),o._26(null,["\n          "])),(t()(),o._26(null,["\n\n        "])),(t()(),o._26(null,["\n      "])),(t()(),o._26(null,["\n    "])),(t()(),o._26(null,["\n  "])),(t()(),o._26(null,["\n"]))],null,function(t,n){t(n,39,0,n.context.$implicit.title),t(n,43,0,o._29(1,"mailto:",n.context.$implicit.email,"")),t(n,44,0,n.context.$implicit.username),t(n,49,0,n.context.$implicit.body)})}function _(t){return o._24(0,[o._30(0,u.a,[]),(t()(),o._25(0,null,null,18,"div",[["class","container"]],null,null,null,null,null)),(t()(),o._26(null,["\n  "])),(t()(),o._25(0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(t()(),o._26(null,["\n  "])),(t()(),o._25(0,null,null,8,"span",[["class","col-xs-12 col-sm-6 col-md-4"]],null,null,null,null,null)),(t()(),o._26(null,["\n    "])),(t()(),o._25(0,null,null,5,"input",[["class","form-control"],["id","btn-input"],["placeholder","Search"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(t,n,e){var l=!0,_=t.component;if("input"===n){l=!1!==o._31(t,8)._handleInput(e.target.value)&&l}if("blur"===n){l=!1!==o._31(t,8).onTouched()&&l}if("compositionstart"===n){l=!1!==o._31(t,8)._compositionStart()&&l}if("compositionend"===n){l=!1!==o._31(t,8)._compositionEnd(e.target.value)&&l}if("ngModelChange"===n){l=!1!==(_.txtSearch=e)&&l}return l},null,null)),o._27(8192,null,0,a.d,[o.K,o.L,[2,a.e]],null,null),o._32(512,null,a.f,function(t){return[t]},[a.d]),o._27(335872,null,0,a.g,[[8,null],[8,null],[8,null],[2,a.f]],{model:[0,"model"]},{update:"ngModelChange"}),o._32(1024,null,a.h,null,[a.g]),o._27(8192,null,0,a.i,[a.h],null,null),(t()(),o._26(null,["\n"])),(t()(),o._26(null,["\n"])),(t()(),o._26(null,["\n\n"])),(t()(),o._33(8388608,null,null,2,null,l)),o._27(401408,null,0,c.l,[o.T,o._6,o.w],{ngForOf:[0,"ngForOf"]},null),o._34(2),(t()(),o._26(null,["\n\n"])),(t()(),o._26(null,["\n"]))],function(t,n){var e=n.component;t(n,10,0,e.txtSearch),t(n,17,0,o._35(n,17,0,t(n,18,0,o._31(n,0),e.userPostsCombined,e.txtSearch)))},function(t,n){t(n,7,0,o._31(n,12).ngClassUntouched,o._31(n,12).ngClassTouched,o._31(n,12).ngClassPristine,o._31(n,12).ngClassDirty,o._31(n,12).ngClassValid,o._31(n,12).ngClassInvalid,o._31(n,12).ngClassPending)})}function r(t){return o._24(0,[(t()(),o._25(0,null,null,1,"app-user-post",[],null,null,null,_,g)),o._27(57344,null,0,s.a,[h.a,p.a],null,null)],function(t,n){t(n,1,0)},null)}var i=e("aodz"),o=e("3j3K"),u=e("LCh6"),s=e("jHco"),a=e("NVOs"),c=e("2Je8"),h=e("O5mP"),p=e("Hqpt");e.d(n,"a",function(){return f});var d=[i.a],g=o._23({encapsulation:0,styles:d,data:{}}),f=o._28("app-user-post",s.a,r,{},{},[])},x35b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=e("3j3K"),_=e("kZql"),r=e("Qbdm"),i=e("kke6");_.a.production&&e.i(l.a)(),e.i(r.a)().bootstrapModuleFactory(i.a)}},[0]);