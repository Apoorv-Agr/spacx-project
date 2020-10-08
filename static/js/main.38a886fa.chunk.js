(this["webpackJsonpspacx-project"]=this["webpackJsonpspacx-project"]||[]).push([[0],{32:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),o=a(11),s=a(12),u=a(24),i=a(25),d=(a(42),a(43),a(6)),h=a(7),p=a(9),m=a(8),f=a(48),E=a(46),g=a(45),L={backgroundColor:"#ebe9e9"},b={backgroundColor:"rgb(254, 254, 254)",borderRadius:"5px",padding:"20px 20px 50px 20px"},_={textAlign:"center"},O={width:"80%",margin:"10px auto",backgroundColor:"#d4d4d4"},y={display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"15px"},v={marginBottom:"5px"},A={position:"relative",top:"50%",left:"50%",transform:"translate(-50%, -50%)",marginBottom:"20px",marginTop:"60px"},j=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],D=a(50),T=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.selectedVal,a=e.onBtnClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:_},this.props.heading),c.a.createElement("hr",{style:O}),c.a.createElement("div",{style:y},"num"===this.props.typeData?this.props.dataArr.map((function(e,n){return c.a.createElement(D.a,{key:"".concat(e,"_").concat(n),variant:"success",size:"sm",active:e===t,onClick:function(){a(e)}},e)})):this.props.dataArr.map((function(e,n){return c.a.createElement(D.a,{key:"".concat(e,"_").concat(n),variant:"success",size:"sm",active:e===t,onClick:function(){a(e)}},!0===e?"True":"False")}))))}}]),a}(n.Component),k=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedVal:null,selectedLaunch:null,selectedLanding:null},e.onYearSelect=function(t){e.setState((function(e){return{selectedVal:t===e.selectedVal?null:t}}),(function(){e.props.getLaunchFilterDataAction({year:e.state.selectedVal,successLaunch:e.state.selectedLaunch,successLand:e.state.selectedLanding})}))},e.onLaunchSelect=function(t){e.setState((function(e){return{selectedLaunch:t===e.selectedLaunch?null:t}}),(function(){e.props.getLaunchFilterDataAction({year:e.state.selectedVal,successLaunch:e.state.selectedLaunch,successLand:e.state.selectedLanding})}))},e.onLandSelect=function(t){e.setState((function(e){return{selectedLanding:t===e.selectedLanding?null:t}}),(function(){e.props.getLaunchFilterDataAction({year:e.state.selectedVal,successLaunch:e.state.selectedLaunch,successLand:e.state.selectedLanding})}))},e}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement(g.a,{lg:2,xs:12},c.a.createElement("div",{style:b},c.a.createElement(T,{heading:"Launch Year",typeData:"num",dataArr:j,selectedVal:this.state.selectedVal,onBtnClick:this.onYearSelect}),c.a.createElement("br",null),c.a.createElement(T,{heading:"Successful Launch",typeData:"bool",dataArr:[!0,!1],selectedVal:this.state.selectedLaunch,onBtnClick:this.onLaunchSelect}),c.a.createElement("br",null),c.a.createElement(T,{heading:"Successful Landing",typeData:"bool",dataArr:[!0,!1],selectedVal:this.state.selectedLanding,onBtnClick:this.onLandSelect}),c.a.createElement("br",null)))}}]),a}(c.a.Component),S=Object(o.b)((function(e){return{loader:e.getLaunchDataReducer.showLoader}}),(function(e){return{getLaunchFilterDataAction:function(t){e(function(e){var t=e.year,a=e.successLaunch,n=void 0===a?null:a,c=e.successLand,r=void 0===c?null:c;return function(e){var a="https://api.spaceXdata.com/v3/launches?limit=100";t&&(a+="&launch_year=".concat(t)),null!=n&&(a+="&launch_success=".concat(n)),null!=r&&(a+="&land_success=".concat(r)),e({type:"GET_DATA_ON_FILTER_PENDING"}),fetch(a).then((function(e){return e.json()})).then((function(t){e({type:"GET_DATA_ON_FILTER_SUCCESS",payload:t})})).catch((function(t){e({type:"GET_DATA_ON_FILTER_FAIL",payload:t})}))}}(t))}}}))(k),w=a(47),C=a(49),N=a(51),x=a(31),F=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.getLaunchData,t=e.data,a=e.showLoader;return c.a.createElement(g.a,{lg:10,xs:12},c.a.createElement(E.a,null,a?c.a.createElement(g.a,{lg:3,xs:12,style:A},c.a.createElement("span",null,c.a.createElement("b",null,"Loading...")),c.a.createElement(w.a,{animation:"border",variant:"primary"})):t&&t.length?t.map((function(e,t){var a=e.launch_date_unix,n=e.flight_number,r=e.rocket,l=e.links,o=e.mission_id,s=e.launch_year,u=e.launch_success;return c.a.createElement(g.a,{key:"".concat(a,"_").concat(n,"_").concat(r.rocket_id),lg:3,xs:12,style:{marginBottom:"20px"}},c.a.createElement(C.a,null,c.a.createElement(C.a.Img,{variant:"top",src:l.mission_patch_small}),c.a.createElement(C.a.Body,null,c.a.createElement(C.a.Title,null,r.rocket_name),c.a.createElement("b",null,"Mission Ids: "),c.a.createElement("ul",null,o.map((function(e,t){return c.a.createElement("li",{key:"".concat(e,"_").concat(t)},e)})))),c.a.createElement(N.a,{className:"list-group-flush"},c.a.createElement(x.a,null,c.a.createElement("b",null,"Launch Year: "),s),c.a.createElement(x.a,null,c.a.createElement("b",null,"Successful Launch: "),u?"true":"false"),c.a.createElement(x.a,null,c.a.createElement("b",null,"Successful Landing: "),r.first_stage.cores&&r.first_stage.cores[0].land_success?"true":"false"))))})):c.a.createElement(g.a,{lg:3,xs:12,style:A},c.a.createElement("span",null,c.a.createElement("b",null,"Data Not Found!")))))}}]),a}(c.a.Component),G=Object(o.b)((function(e){return{getLaunchData:e.getLaunchDataReducer}}),{})(F),I=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("h3",null,"SpaceX Launch Programs")}}]),a}(n.Component),P=a(5),R=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{style:Object(P.a)(Object(P.a)({},_),v)},c.a.createElement("span",null," ",c.a.createElement("b",null,"Developed by : "),"Apoorv Agrawal"))}}]),a}(n.Component),V=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.getLaunchDataAction()}},{key:"render",value:function(){return c.a.createElement(f.a,{fluid:!0,style:L},c.a.createElement(I,null),c.a.createElement(E.a,null,c.a.createElement(S,null),c.a.createElement(G,null)),c.a.createElement(R,null))}}]),a}(c.a.Component),B=Object(o.b)((function(e){return{loader:e.getLaunchDataReducer.showLoader}}),(function(e){return{getLaunchDataAction:function(){e((function(e){e({type:"GET_DATA_ON_LOAD_PENDING"}),fetch("https://api.spaceXdata.com/v3/launches?limit=100").then((function(e){return e.json()})).then((function(t){e({type:"GET_DATA_ON_LOAD_SUCCESS",payload:t})})).catch((function(t){e({type:"GET_DATA_ON_LOAD_FAIL",payload:t})}))}))}}}))(V);var U=function(){return c.a.createElement("div",null,c.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y={data:[],error:"",isPending:!1,showLoader:!0},M=Object(s.c)({getLaunchDataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_DATA_ON_LOAD_PENDING":return Object(P.a)(Object(P.a)({},e),{},{isPending:!0,showLoader:!0});case"GET_DATA_ON_LOAD_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{data:t.payload,isPending:!1,showLoader:!1});case"GET_DATA_ON_LOAD_FAIL":return Object(P.a)(Object(P.a)({},e),{},{isPending:!1,error:t.payload,showLoader:!1});case"GET_DATA_ON_FILTER_PENDING":return Object(P.a)(Object(P.a)({},e),{},{data:[],isPending:!0,showLoader:!0});case"GET_DATA_ON_FILTER_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{data:t.payload,isPending:!1,showLoader:!1});case"GET_DATA_ON_FILTER_FAIL":return Object(P.a)(Object(P.a)({},e),{},{data:[],isPending:!1,error:t.payload,showLoader:!1});default:return e}}}),X=Object(u.createLogger)(),z=Object(s.d)(M,Object(s.a)(i.a,X));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{store:z},c.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.38a886fa.chunk.js.map