(this["webpackJsonpgenerator-tabliczki"]=this["webpackJsonpgenerator-tabliczki"]||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=(a(28),a(8)),i=(a(29),a(7)),u=a(37),m=a(18),s=a(38),E=function(e){var t=e.pair,a=t[0]*t[1],n=Math.random()>.5?[a,t[0]]:[a,t[1]];return l.a.createElement("tr",null,l.a.createElement("td",null,n[0]),l.a.createElement("td",null,"/"),l.a.createElement("td",null,n[1]),l.a.createElement("td",null,"="),l.a.createElement("td",{className:"result-box"}))},p=function(e){var t=e.pair;return l.a.createElement("tr",null,l.a.createElement("td",null,t[0]),l.a.createElement("td",null,"*"),l.a.createElement("td",null,t[1]),l.a.createElement("td",null,"="),l.a.createElement("td",{className:"result-box"}))},v=function(e){var t=e.pairs,a=e.type;return l.a.createElement("table",{className:"default-table"},l.a.createElement("tbody",null,t.map((function(e,t){return"mul"===a?l.a.createElement(p,{key:t,pair:e}):l.a.createElement(E,{key:t,pair:e})}))))},d=function(e){var t=e.type,a=e.list;return l.a.createElement(u.a,null,l.a.createElement(m.a,{md:4},l.a.createElement(v,{pairs:a.slice(0,a.length/2),type:"divOnly"===t?"div":"mul"})),l.a.createElement(m.a,{md:4},l.a.createElement(v,{pairs:a.slice(a.length/2),type:"mulOnly"===t?"mul":"div"})))},f=function(e){var t=e.type,a=e.max,n=e.amount,r=e.perPage;return l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement(m.a,{md:6},l.a.createElement(d,{list:Object(i.generateList)(a,n),type:t})),l.a.createElement(m.a,{md:6},r>1?l.a.createElement(d,{list:Object(i.generateList)(a,n),type:t}):null)),l.a.createElement(u.a,{className:"mt-5"},l.a.createElement(m.a,{md:6},r>2?l.a.createElement(d,{list:Object(i.generateList)(a,n),type:t}):null),l.a.createElement(m.a,{md:6},r>3?l.a.createElement(d,{list:Object(i.generateList)(a,n),type:t}):null)))},h=(a(30),a(40)),g=a(39);var y=function(){var e=Object(n.useState)("default"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(50),i=Object(o.a)(c,2),E=i[0],p=i[1],v=Object(n.useState)(40),d=Object(o.a)(v,2),y=d[0],b=d[1],k=Object(n.useState)(4),w=Object(o.a)(k,2),z=w[0],O=w[1];return l.a.createElement("div",{className:"App"},l.a.createElement(s.a,{className:"controls-section mt-3 p-4"},l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement("h4",null,"Generator tabliczki mnozenia"),l.a.createElement("small",null,"repo: ",l.a.createElement("a",{href:"https://github.com/lukKowalski/multiplication-table-generator"},"https://github.com/lukKowalski/multiplication-table-generator")," "))),l.a.createElement(h.a,{className:"mt-3"},l.a.createElement(h.a.Group,{as:u.a,controlId:"formPlaintextEmail"},l.a.createElement(m.a,null,l.a.createElement(h.a.Control,{as:"select",value:a,onChange:function(e){return r(e.target.value)}},l.a.createElement("option",{value:"mulOnly"},"Mnozenie"),l.a.createElement("option",{value:"divOnly"},"Dzielenie"),l.a.createElement("option",{value:"default"},"Mnozenie i dzielenie"))),l.a.createElement(m.a,null,l.a.createElement(h.a.Control,{as:"select",value:E,onChange:function(e){return p(e.target.value)}},l.a.createElement("option",{value:20},"Dzia\u0142ania do 20"),l.a.createElement("option",{value:30},"Dzia\u0142ania do 30"),l.a.createElement("option",{value:40},"Dzia\u0142ania do 40"),l.a.createElement("option",{value:50},"Dzia\u0142ania do 50"),l.a.createElement("option",{value:100},"Dzia\u0142ania do 100"))),l.a.createElement(m.a,null,l.a.createElement(h.a.Control,{as:"select",value:y,onChange:function(e){return b(e.target.value)}},l.a.createElement("option",{value:10},"10 Przyk\u0142ad\xf3w"),l.a.createElement("option",{value:20},"20 Przyk\u0142ad\xf3w"),l.a.createElement("option",{value:30},"30 Przyk\u0142ad\xf3w"),l.a.createElement("option",{value:40},"40 Przyk\u0142ad\xf3w"))),l.a.createElement(m.a,null,l.a.createElement(h.a.Control,{as:"select",value:z,onChange:function(e){return O(e.target.value)}},l.a.createElement("option",{value:1},"1 Zestaw na stron\u0119"),l.a.createElement("option",{value:2},"2 Zestawy na stron\u0119"),l.a.createElement("option",{value:3},"3 Zestawy na stron\u0119"),l.a.createElement("option",{value:4},"4 Zestawy na stron\u0119"))))),l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(g.a,{variant:"info"},"Wci\u015bnij Ctrl + P aby uzyska\u0107 wersj\u0119 do druku")))),l.a.createElement(s.a,{className:"mt-5"},l.a.createElement(f,{type:a,max:E,amount:y,perPage:z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t){var a=function(e){return Math.ceil(Math.random()*e)},n=function(e){var t=a(10);return[t,Math.min(10,a(Math.floor(e/t)))]},l=function(e,t){for(var a=t.length-1;a>0;){var n=t[a];if(n[0]===e[0]&&n[1]===e[1])return!0;a--}return!1},r=function(e,t){for(var a=[];a.length<t;){var r=n(e);r[0]&&r[1]&&!l(r,a)&&a.push(r)}return a};e.exports={generateList:r,printList:function(e,t){var a="";return r(e,t).forEach((function(e,t){var n;t%2>0?(a+=function(e){var t=e[0]*e[1];return Math.random()>=.5?"".concat(t," : ").concat(e[0]," = ___"):"".concat(t," : ").concat(e[1]," = ___")}(e),a+="\n"):(a+="".concat((n=e)[0]," * ").concat(n[1]," = ___"),a+="        ")})),a}}}},[[23,1,2]]]);
//# sourceMappingURL=main.50422293.chunk.js.map