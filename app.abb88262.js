(function(e){function t(t){for(var n,s,c=t[0],i=t[1],l=t[2],v=0,d=[];v<c.length;v++)s=c[v],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("d3b7");var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-sheet",{attrs:{height:"300px"}},[r("v-container",{staticClass:"fill-height"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("h1",{staticClass:"text-center display-1"},[e._v(" "+e._s(e.msg)+" ")])])],1)],1),r("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid;return[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"6",md:"4"}},[r("validation-provider",{attrs:{name:"Name",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("v-text-field",{attrs:{counter:10,"error-messages":n,label:"First name",required:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})]}}],null,!0)})],1),r("v-col",{attrs:{cols:"6",md:"4"}},[r("validation-provider",{attrs:{name:"Name",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("v-text-field",{attrs:{counter:10,"error-messages":n,label:"Last name",required:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})]}}],null,!0)})],1)],1),r("v-row",[r("validation-provider",{attrs:{name:"select",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("v-select",{attrs:{items:e.items,"error-messages":n,label:"Select","data-vv-name":"select",required:""},model:{value:e.recordedEvent,callback:function(t){e.recordedEvent=t},expression:"recordedEvent"}})]}}],null,!0)})],1),r("v-row",[r("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:n},on:{click:e.submit}},[e._v(" submit ")])],1)],1)],1)]}}])})],1)},a=[],o=r("5530"),s=(r("b0c0"),r("4c93")),c=r("7bb1"),i=r("5880");Object(c["d"])("eager"),Object(c["c"])("required",Object(o["a"])(Object(o["a"])({},s["c"]),{},{message:"{_field_} can not be empty"})),Object(c["c"])("max",Object(o["a"])(Object(o["a"])({},s["b"]),{},{message:"{_field_} may not be greater than {length} characters"}));var l={components:{ValidationProvider:c["b"],ValidationObserver:c["a"]},data:function(){return{msg:"Welcome to "+this.$config.App.name,firstName:"",lastName:"",recordedEvent:"",items:this.$config.App.events}},computed:Object(o["a"])({},Object(i["mapState"])(["ClassDayTag"])),methods:{validateSubmit:function(){this.$refs.observer.validate()},submit:function(){this.$store.commit("setRecorderName",this.firstName+" "+this.lastName),this.$store.commit("setRecorderEvent",this.recordedEvent),this.$router.push("confirm")}}},u=l,v=r("2877"),d=Object(v["a"])(u,n,a,!1,null,"25f8b440",null),f=d.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-sheet",{attrs:{height:"300px"}},[r("v-container",{staticClass:"fill-height"},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("h4",{staticClass:"text-center display-1"},[e._v(" Please confirm the following information ")]),e._v(" Name: "+e._s(e.RecorderName)+" Event:"+e._s(e.RecordedEvent)+" Day: "+e._s(e.ClassDayTag)+" ")])],1)],1),r("v-container",[r("v-row",[r("v-btn",{staticClass:"mr-4",on:{click:e.confirm}},[e._v(" Confirm ")]),r("v-btn",{staticClass:"mr-4",on:{click:e.goback}},[e._v(" Go Back ")])],1)],1)],1)},p=[],b={computed:Object(o["a"])({},Object(i["mapState"])(["ClassDayTag","RecorderName","RecordedEvent"])),methods:{confirm:function(){this.$router.push("scan")},goback:function(){this.$router.push("/")}}},h=b,g=Object(v["a"])(h,m,p,!1,null,null,null),y=g.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid;return[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.logScanToBackEnd.apply(null,arguments)}}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"6",md:"4"}},[r("validation-provider",{attrs:{name:"LTC number",rules:e.ltc_rules},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#######",expression:"'#######'"}],attrs:{label:"LTC number","error-messages":n,"persistent-hint":"",hint:"Type in LTC number if scan fails",required:"",clearable:""},model:{value:e.ltc,callback:function(t){e.ltc=t},expression:"ltc"}})]}}],null,!0)})],1)],1),r("v-row",[r("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:n}},[e._v(" Upload LTC ")])],1)],1)],1)]}}])}),r("v-overlay",{attrs:{value:e.showOverlay}},[e._v(" "+e._s(e.overlayMsg)+" "),e.showProgressInOverlay?r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}}):e._e(),e.showButtonInOverlay?r("v-btn",{staticClass:"mr-4",on:{click:e.overlayButtonClickEventFunction}},[e._v(" "+e._s(e.overlayButtonMsg)+" ")]):e._e()],1)],1)},O=[],w=r("3a60");Object(c["d"])("aggressive"),Object(c["c"])("between",Object(o["a"])(Object(o["a"])({},s["a"]),{},{message:"{_field_} is not valid!"})),Object(c["c"])("required",Object(o["a"])(Object(o["a"])({},s["c"]),{},{message:"{_field_} can not be empty"}));var j={components:{ValidationProvider:c["b"],ValidationObserver:c["a"]},directives:{mask:w["mask"]},data:function(){var e=this;return{ltc:"",ltc_rules:"required|between:"+this.$config.App.ltc_range.min+","+this.$config.App.ltc_range.max,showOverlay:!1,overlayMsg:"",showProgressInOverlay:!0,showButtonInOverlay:!1,overlayButtonMsg:"",overlayButtonClickEventFunction:function(){e.showOverlay=!1}}},computed:Object(o["a"])({},Object(i["mapState"])(["RecorderName","ClassDayTag","RecordedEvent"])),methods:{logScanToBackEnd:function(){var e=new FormData;e.append("recorder name",this.RecorderName),e.append("class day #",this.ClassDayTag),e.append("event",this.RecordedEvent),e.append("ltc",this.ltc),fetch(this.$config.Google.formURL,{method:"POST",body:e}).then((function(e){console.log(e.ok),console.log(e.status)}))}}},k=j,x=Object(v["a"])(k,_,O,!1,null,null,null),C=x.exports,E=r("8bbf"),N=r("6389"),S=[{path:"/",name:"home",component:f},{path:"/confirm",name:"confirm",component:y},{path:"/scan",name:"scan",component:C}];E.use(N);var T=new N({routes:S}),R=T,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("router-view")],1)],1)},D=[],P={},q=Object(v["a"])(P,$,D,!1,null,null,null),B=q.exports,M=r("8bbf"),V=r("5880");M.use(V);var A=new V.Store({state:{RecorderName:"",RecordedEvent:"",ClassDayTag:"unknown"},mutations:{setRecorderName:function(e,t){e.RecorderName=t},setRecorderEvent:function(e,t){e.RecordedEvent=t},setClassDayTag:function(e,t){e.ClassDayTag=t}}}),L=(r("bf40"),r("8bbf")),F=r("a2c9");L.use(F);var I={},G=new F(I),J=r("8bbf");J.config.productionTip=!1,fetch("./config.json").then((function(e){return e.json()})).then((function(e){J.prototype.$config=e;var t=new J({el:"#app",router:R,store:A,vuetify:G,render:function(e){return e(B)}});t.$mount("#app");var r=(new Date).toDateString();for(var n in e.App.daytags)if(new Date(e.App.daytags[n]).toDateString()===r){t.$store.commit("setClassDayTag",n);break}}))},5880:function(e,t){e.exports=Vuex},6389:function(e,t){e.exports=VueRouter},"8bbf":function(e,t){e.exports=Vue},a2c9:function(e,t){e.exports=Vuetify}});
//# sourceMappingURL=app.abb88262.js.map