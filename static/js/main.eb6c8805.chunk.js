(window["webpackJsonpmonsters-rolodex"]=window["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),i=n(4),l=n(6),u=n(5),h=n(7),m=(n(14),n(15),function(e){var t=e.monster,n=e.id;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(n,"?set=set2")}),r.a.createElement("h1",null," ",t.name," "),r.a.createElement("h2",null," ",t.email," "))}),d=(n(16),function(e){var t=e.monsters;return r.a.createElement("div",{className:"card-list"},t.map(function(e){return r.a.createElement(m,{key:e.id,id:e.id,monster:e})}))}),f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{class:"search",type:"search",placeholder:t,onChange:n})}),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Rolodex"),r.a.createElement(f,{placeholder:"search monsters",handleChange:this.handleChange}),r.a.createElement(d,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.eb6c8805.chunk.js.map