(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=(n(15),n(6)),o=n(7),u=n(9),i=n(8),s=n(2),p=function(e){return r.a.createElement("div",null,200===e.responseObj.cod?r.a.createElement("div",null,r.a.createElement("p",null," In ",e.responseObj.name,", it is currently ",e.responseObj.main.temp,"\xb0F. Feels like: ",e.responseObj.main.feels_like,"\xb0F")):null)};n(16);n(1).config();var m=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),o=Object(s.a)(l,2),u=o[0],i=o[1];return r.a.createElement("div",{className:"input-box"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(u,"&appid=").concat("77d759f97da377dfeb73c3abaf234163","&units=imperial")).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.log(e)}))}},r.a.createElement("input",{type:"text",placeholder:"...",value:u,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{type:"submit"},"submit"),r.a.createElement(p,{responseObj:n})))};n(1).config();var f=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loaded:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({loaded:!0})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null))}}]),n}(r.a.Component);n(1).config();var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("body",null,r.a.createElement("h1",null,"Enter your city"),r.a.createElement(f,null)))};n(1).config(),Object(c.render)(r.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f08fdede.chunk.js.map