(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(4),r=a.n(o),s=(a(15),a(5)),i=a(6),d=a(7),b=a(10),u=a(9),l=(a(16),a(0)),j=function(e){var t=e.children;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Please leave feedback"}),t]})},h=a(8),k=a.n(h),p=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return Object(l.jsx)("button",{className:k.a.Button,onClick:function(){return a(e)},children:e.toUpperCase()},e)}))},O=a(2),f=a.n(O),v=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,o=e.positivePercentage;return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Statistics"}),Object(l.jsxs)("p",{className:f.a.Feedback,children:["Good: ",Object(l.jsx)("span",{className:f.a.FeedbackGood,children:t}),"Neutral: ",Object(l.jsx)("span",{className:f.a.FeedbackNeutral,children:a}),"Bad: ",Object(l.jsx)("span",{className:f.a.FeedbackBad,children:c})]}),Object(l.jsxs)("p",{children:["Total: ",n()]}),Object(l.jsxs)("p",{children:["Positive feedback: ",Math.ceil(o()),"%"]})]})},F=function e(t){var a=t.children;return Object(l.jsx)(e,{children:a})},x=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){return e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return e.state.good/e.countTotalFeedback()*100},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(j,{children:[Object(l.jsx)(F,{children:Object(l.jsx)(p,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(l.jsx)(v,{good:t,neutral:a,bad:c,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})]})})}}]),a}(c.Component),_=x;r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={Feedback:"Statistics_Feedback__1C1Dh",FeedbackGood:"Statistics_FeedbackGood__1Zqfw",FeedbackNeutral:"Statistics_FeedbackNeutral__2oCPY",FeedbackBad:"Statistics_FeedbackBad__1IDLQ"}},8:function(e,t,a){e.exports={Button:"FeedbackOptions_Button__3AaUo"}}},[[18,1,2]]]);
//# sourceMappingURL=main.1c0c027e.chunk.js.map