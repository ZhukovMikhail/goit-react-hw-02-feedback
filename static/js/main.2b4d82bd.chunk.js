(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(4),s=a.n(o),l=(a(15),a(5)),r=a(6),i=a(7),d=a(10),u=a(9),b=(a(16),a(2)),j=a.n(b),p=a(0);var h=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,o=e.positivePercentage;return 0!==n?Object(p.jsxs)("div",{className:j.a.stats,children:[Object(p.jsx)("h2",{className:j.a.title,children:"Statistics:"}),Object(p.jsxs)("p",{children:["Good:",Object(p.jsx)("span",{children:t})]}),Object(p.jsxs)("p",{children:["Neutral:",Object(p.jsx)("span",{children:a})]}),Object(p.jsxs)("p",{children:["Bad:",Object(p.jsx)("span",{children:c})]}),Object(p.jsxs)("p",{children:["Total:",Object(p.jsx)("span",{children:n})]}),Object(p.jsxs)("p",{children:["positive feedback:",Object(p.jsxs)("span",{children:[o,"%"]})]})]}):Object(p.jsx)("h2",{className:j.a.title,children:" No feedback given"})},O=a(8),f=a.n(O),g=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return Object(p.jsx)("button",{type:"button",className:f.a.button,name:e,onClick:a,children:e},e)}))},m=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.compValue=Object.keys(e.state)[0],e.data={compValue:0,total:0,percentageOfcompValue:0},e.hendleFeedback=function(t){var a=t.currentTarget.name;console.log(a),e.setState((function(e){return Object(l.a)({},a,e[a]+1)})),a===e.compValue&&(e.data.compValue+=1),e.hendleTotalValue(),e.onpercentageOfcompValue()},e.hendleTotalValue=function(t){return e.data.total+=1},e.onpercentageOfcompValue=function(t){e.data.percentageOfcompValue=Math.floor(e.data.compValue/e.data.total*100),console.log("good",[Object.keys(e.state)[0]]),console.log("total",e.data.total),console.log("percentageOfcompValue",e.data.percentageOfcompValue)},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"section",children:[Object(p.jsx)("h2",{className:"title",children:"Please leave your feedback"}),Object(p.jsx)("div",{className:"btn",children:Object(p.jsx)(g,{options:["good","neutral","bad"],onLeaveFeedback:this.hendleFeedback})}),Object(p.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.data.total,positivePercentage:this.data.percentageOfcompValue})]})}}]),a}(c.Component),x=m;s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={title:"Statistics_title__1IpSy",stats:"Statistics_stats__3n5TN"}},8:function(e,t,a){e.exports={button:"FeedbackOptions_button__3_bX7"}}},[[18,1,2]]]);
//# sourceMappingURL=main.2b4d82bd.chunk.js.map