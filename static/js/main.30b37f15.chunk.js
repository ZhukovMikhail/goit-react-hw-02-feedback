(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(4),s=n.n(o),r=(n(15),n(5)),i=n(6),l=n(7),d=n(10),b=n(9),j=(n(16),n(2)),u=n.n(j),h=n(0);var p=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,o=t.positivePercentage;return 0!==c?Object(h.jsxs)("div",{className:u.a.stats,children:[Object(h.jsx)("h2",{className:u.a.title,children:"Statistics:"}),Object(h.jsxs)("p",{children:["Good:",Object(h.jsx)("span",{children:e})]}),Object(h.jsxs)("p",{children:["Neutral:",Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("p",{children:["Bad:",Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("p",{children:["Total:",Object(h.jsx)("span",{children:c})]}),Object(h.jsxs)("p",{children:["positive feedback:",Object(h.jsxs)("span",{children:[o,"%"]})]})]}):Object(h.jsx)("h2",{className:u.a.title,children:" No feedback given"})},O=n(8),f=n.n(O),x=function(t){var e=t.options,n=t.onLeaveFeedback;return e.map((function(t){return Object(h.jsx)("button",{type:"button",className:f.a.button,name:t,onClick:n,children:t},t)}))},g=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0,total:0,percentageOfGood:0},t.hendleFeedback=function(e){var n=e.currentTarget.name;console.log(n),t.setState((function(t){return Object(r.a)({},n,t.good+1)})),t.hendleTotalValue(),t.onPercentageOfGood()},t.hendleTotalValue=function(e){t.setState((function(t){return{total:t.total+1}})),console.log(t.state.total+1)},t.onPercentageOfGood=function(e){t.setState((function(t){return{percentageOfGood:Math.floor(100*(t.good/t.total+.001))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("h2",{className:"title",children:"Please leave your feedback"}),Object(h.jsx)("div",{className:"btn",children:Object(h.jsx)(x,{options:["good","neutral","bad"],onLeaveFeedback:this.hendleFeedback})}),Object(h.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,positivePercentage:this.state.percentageOfGood})]})}}]),n}(a.Component),v=g;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={title:"Statistics_title__1IpSy",stats:"Statistics_stats__3n5TN"}},8:function(t,e,n){t.exports={button:"FeedbackOptions_button__3_bX7"}}},[[18,1,2]]]);
//# sourceMappingURL=main.30b37f15.chunk.js.map