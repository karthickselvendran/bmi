(this.webpackJsonpbmi=this.webpackJsonpbmi||[]).push([[0],{39:function(e,t,a){e.exports=a(48)},44:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),c=(a(44),a(11)),o=a(22),s=a(15),u=a(29),m=a(30),h=a(33),b=a(74),d=a(78),g=a(79),v=a(80),E=a(81),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={text1:"0",text:"0",result:"0"},a.bmi=function(){0!==a.state.text1&&0!==a.state.text?a.setState({result:a.state.text1/Math.pow(a.state.text/100,2)}):0===a.state.text1&&0===a.state.text?alert("Please enter the Height and Weight"):(0!==a.state.text1&&alert("Please enter the Height"),0!==a.state.text&&alert("Please enter the Weight"))},a.sets=function(e){a.setState(Object(c.a)({},e.target.id,e.target.value))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b.a,{position:"static",align:"center",color:"secondary"},r.a.createElement(d.a,null,r.a.createElement(g.a,{variant:"h6"},"BMI Calculator"))),r.a.createElement("div",{style:{marginLeft:"40%",marginTop:"8%"}},r.a.createElement("br",null),r.a.createElement(v.a,{id:"text1",label:"Weight(kg)",variant:"outlined",onChange:function(t){return e.sets(t)},value:this.state.text1,type:Number}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{id:"text",label:"Height(cm)",variant:"outlined",onChange:function(t){return e.sets(t)},value:this.state.text}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.a,{id:"outlined-basic",label:"Result",variant:"outlined",placeholder:"Result",value:this.state.result}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"contained",id:"result",onClick:function(){return e.bmi()},align:"center",color:"secondary"},"Result")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.f5c1748f.chunk.js.map