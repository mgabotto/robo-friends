(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),a=n(7),o=n.n(a),i=(n(13),n(14),n(2)),h=n(3),l=n(5),b=n(4),j=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(this.props.id,"?100x100")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:this.props.name}),Object(r.jsxs)("p",{children:[" ",this.props.email]})]})]})}}]),n}(s.Component),d=function(e){var t=e.robots;return Object(r.jsx)(r.Fragment,{children:t.map((function(e,n){return Object(r.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},p=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return this.state.robots.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"title f1",children:"RoboFriends"}),Object(r.jsx)(u,{searchChange:this.onSearchChange}),Object(r.jsx)(p,{children:Object(r.jsx)(d,{robots:t})})]}):Object(r.jsx)("h1",{className:"title f1",children:" Loading"})}}]),n}(s.Component);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cde867a0.chunk.js.map