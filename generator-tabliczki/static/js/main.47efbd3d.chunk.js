(this["webpackJsonpgenerator-tabliczki"]=this["webpackJsonpgenerator-tabliczki"]||[]).push([[0],{23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),o=(t(28),t(8)),m=(t(29),t(7)),u=t(37),i=t(18),s=t(38),E=function(e){var a=e.pair,t=a[0]*a[1],n=Math.random()>.5?[t,a[0]]:[t,a[1]];return l.a.createElement("tr",null,l.a.createElement("td",null,n[0]),l.a.createElement("td",null,"/"),l.a.createElement("td",null,n[1]),l.a.createElement("td",null,"="),l.a.createElement("td",{className:"result-box"}))},p=function(e){var a=e.pair;return l.a.createElement("tr",null,l.a.createElement("td",null,a[0]),l.a.createElement("td",null,"*"),l.a.createElement("td",null,a[1]),l.a.createElement("td",null,"="),l.a.createElement("td",{className:"result-box"}))},v=function(e){var a=e.pairs,t=e.type;return l.a.createElement("table",{className:"default-table"},l.a.createElement("tbody",null,a.map((function(e,a){return"mul"===t?l.a.createElement(p,{key:a,pair:e}):l.a.createElement(E,{key:a,pair:e})}))))},d=function(e){var a=e.type,t=e.list;return l.a.createElement(u.a,null,l.a.createElement(i.a,{md:5},l.a.createElement(v,{pairs:t.slice(0,t.length/2),type:"divOnly"===a?"div":"mul"})),l.a.createElement(i.a,{md:5},l.a.createElement(v,{pairs:t.slice(t.length/2),type:"mulOnly"===a?"mul":"div"})))},f=function(e){var a=e.type,t=e.max,n=e.amount,r=e.perPage;return l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement(i.a,{md:6},l.a.createElement(u.a,null,l.a.createElement(i.a,null,l.a.createElement("h5",{className:"set-name"},"Zestaw 1"))),l.a.createElement(d,{list:Object(m.generateList)(t,n),type:a})),r>1?l.a.createElement(i.a,{md:6},l.a.createElement(u.a,null,l.a.createElement(i.a,null,l.a.createElement("h5",{className:"set-name"},"Zestaw 2"))),r>1?l.a.createElement(d,{list:Object(m.generateList)(t,n),type:a}):null):null),l.a.createElement(u.a,{className:"mt-5"},r>2?l.a.createElement(i.a,{md:6},l.a.createElement(u.a,null,l.a.createElement(i.a,null,l.a.createElement("h5",{className:"set-name"},"Zestaw 3"))),r>1?l.a.createElement(d,{list:Object(m.generateList)(t,n),type:a}):null):null,r>3?l.a.createElement(i.a,{md:6},l.a.createElement(u.a,null,l.a.createElement(i.a,null,l.a.createElement("h5",{className:"set-name"},"Zestaw 4"))),r>1?l.a.createElement(d,{list:Object(m.generateList)(t,n),type:a}):null):null))},h=(t(30),t(40)),g=t(39);var y=function(){var e=Object(n.useState)("default"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(50),m=Object(o.a)(c,2),E=m[0],p=m[1],v=Object(n.useState)(40),d=Object(o.a)(v,2),y=d[0],b=d[1],w=Object(n.useState)(4),k=Object(o.a)(w,2),z=k[0],O=k[1];return l.a.createElement("div",{className:"App"},l.a.createElement(s.a,{className:"controls-section mt-3 p-4"},l.a.createElement(u.a,null,l.a.createElement(i.a,null,l.a.createElement("h4",null,"Generator tabliczki mnozenia"),l.a.createElement("small",null,"repo: ",l.a.createElement("a",{href:"https://github.com/lukKowalski/multiplication-table-generator"},"https://github.com/lukKowalski/multiplication-table-generator")," "))),l.a.createElement(h.a,{className:"mt-3"},l.a.createElement(h.a.Group,{as:u.a,controlId:"formPlaintextEmail"},l.a.createElement(i.a,null,l.a.createElement(h.a.Control,{as:"select",value:t,onChange:function(e){return r(e.target.value)}},l.a.createElement("option",{value:"mulOnly"},"Mnozenie"),l.a.createElement("option",{value:"divOnly"},"Dzielenie"),l.a.createElement("option",{value:"default"},"Mnozenie i dzielenie"))),l.a.createElement(i.a,null,l.a.createElement(h.a.Control,{as:"select",value:E,onChange:function(e){return p(e.target.value)}},l.a.createElement("option",{value:20},"Dzia\u0142ania do 20"),l.a.createElement("option",{value:30},"Dzia\u0142ania do 30"),l.a.createElement("option",{value:40},"Dzia\u0142ania do 40"),l.a.createElement("option",{value:50},"Dzia\u0142ania do 50"),l.a.createElement("option",{value:100},"Dzia\u0142ania do 100"))),l.a.createElement(i.a,null,l.a.createElement(h.a.Control,{as:"select",value:y,onChange:function(e){return b(e.target.value)}},l.a.createElement("option",{value:10},"10 Przyk\u0142ad\xf3w"),l.a.createElement("option",{value:20},"20 Przyk\u0142ad\xf3w"),l.a.createElement("option",{value:30},"30 Przyk\u0142ad\xf3w"),l.a.createElement("option",{value:40},"40 Przyk\u0142ad\xf3w"))),l.a.createElement(i.a,null,l.a.createElement(h.a.Control,{as:"select",value:z,onChange:function(e){return O(e.target.value)}},l.a.createElement("option",{value:1},"1 Zestaw na stron\u0119"),l.a.createElement("option",{value:2},"2 Zestawy na stron\u0119"),l.a.createElement("option",{value:3},"3 Zestawy na stron\u0119"),l.a.createElement("option",{value:4},"4 Zestawy na stron\u0119"))))),l.a.createElement(u.a,null,l.a.createElement(i.a,null,l.a.createElement(g.a,{variant:"info"},"Wci\u015bnij Ctrl + P aby uzyska\u0107 wersj\u0119 do druku")))),l.a.createElement(s.a,{className:"mt-5"},l.a.createElement(f,{type:t,max:E,amount:y,perPage:z})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a){var t=function(e){return Math.ceil(Math.random()*e)},n=function(e){var a=t(10);return[a,Math.min(10,t(Math.floor(e/a)))]},l=function(e,a){for(var t=a.length-1;t>0;){var n=a[t];if(n[0]===e[0]&&n[1]===e[1])return!0;t--}return!1},r=function(e,a){for(var t=[];t.length<a;){var r=n(e);r[0]&&r[1]&&!l(r,t)&&t.push(r)}return t};e.exports={generateList:r,printList:function(e,a){var t="";return r(e,a).forEach((function(e,a){var n;a%2>0?(t+=function(e){var a=e[0]*e[1];return Math.random()>=.5?"".concat(a," : ").concat(e[0]," = ___"):"".concat(a," : ").concat(e[1]," = ___")}(e),t+="\n"):(t+="".concat((n=e)[0]," * ").concat(n[1]," = ___"),t+="        ")})),t}}}},[[23,1,2]]]);
//# sourceMappingURL=main.47efbd3d.chunk.js.map