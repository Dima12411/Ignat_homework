(this.webpackJsonpignatwork=this.webpackJsonpignatwork||[]).push([[0],[,,,function(e,t,r){e.exports={message:"Message_message__20Ysj",avatar:"Message_avatar__2yvsH",img:"Message_img__lHE6N",message_content:"Message_message_content__UkE-_",message_body:"Message_message_body__3Kk7D",user_message:"Message_user_message__ra6dQ",user_name:"Message_user_name__3CyN_",time_container:"Message_time_container__YhqIi",time:"Message_time__kQTr5"}},,,,function(e,t,r){e.exports={flex:"Affairs_flex__1Qre_",delete:"Affairs_delete__3Z5Qd",button:"Affairs_button__7gJ_P"}},,function(e,t,r){e.exports={superInput:"SuperInputText_superInput__SWHXT",input:"SuperInputText_input__1dKPl",errorInput:"SuperInputText_errorInput__2Kjh6",error:"SuperInputText_error__2q3zH"}},function(e,t,r){e.exports={default:"SuperButton_default__1ndm_",red:"SuperButton_red__14G5g",active:"SuperButton_active__1-OcY",button:"SuperButton_button__2MCvb"}},function(e,t,r){e.exports={someClass:"Greeting_someClass__uatbc",error:"Greeting_error__1p_Av",error2:"Greeting_error2__3KYNl",errorColor:"Greeting_errorColor__1mKGk"}},function(e,t,r){e.exports={blue:"HW4_blue__3xusK",column:"HW4_column__2fUor",testSpanError:"HW4_testSpanError__1bylQ",disabled:"HW4_disabled__HJ25f"}},,function(e,t,r){e.exports={checkbox:"SuperCheckbox_checkbox__3GKGC",spanClassName:"SuperCheckbox_spanClassName__2a_qO"}},,,,function(e,t,r){e.exports={App:"App_App__1I6rA"}},,,,,,,,function(e,t,r){},,,,function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(17),c=r.n(s),i=(r(26),r(18)),o=r.n(i),l=r(3),j=r.n(l),u=r(0);var d=function(e){return Object(u.jsxs)("div",{className:j.a.message,children:[Object(u.jsx)("div",{className:j.a.avatar,children:Object(u.jsx)("img",{className:j.a.img,src:e.avatar,alt:"avatar"})}),Object(u.jsxs)("div",{className:j.a.message_content,children:[Object(u.jsxs)("div",{className:j.a.message_body,children:[Object(u.jsx)("div",{className:j.a.user_name,children:e.name}),Object(u.jsx)("div",{className:j.a.user_message,children:e.message})]}),Object(u.jsx)("div",{className:j.a.time_container,children:Object(u.jsx)("div",{className:j.a.time,children:e.time})})]})]})},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Dima",h="What did you do?",m="22:00";var x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)(d,{avatar:b,name:_,message:h,time:m}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},O=r(2),f=r(7),p=r.n(f),v=r(5),g=r(6),C=r(10),k=r.n(C),N=function(e){var t=e.red,r=e.className,a=Object(g.a)(e,["red","className"]),n="".concat(k.a.button," ").concat(t?k.a.red:k.a.default," ").concat(r);return Object(u.jsx)("button",Object(v.a)({className:n},a))};var y=function(e){var t={color:"white",border:"1px solid black",marginLeft:"20px",backgroundColor:"low"===e.affair.priority?"green":"middle"===e.affair.priority?"orange":"red"};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:p.a.flex,children:[e.affair.name,":",Object(u.jsx)("div",{className:p.a.span,children:Object(u.jsx)("span",{style:t,children:e.affair.priority})}),Object(u.jsx)("div",{children:Object(u.jsx)(N,{className:p.a.delete,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})})]}),Object(u.jsx)("br",{})]})};var S=function(e){var t=e.data.map((function(t){return Object(u.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{className:p.a.button,children:[t,Object(u.jsx)(N,{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)(N,{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)(N,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)(N,{onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"REACT",priority:"high"},{_id:2,name:"ANIME",priority:"low"},{_id:3,name:"GAMES",priority:"low"},{_id:4,name:"WORK",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var A=function(){var e=Object(a.useState)(w),t=Object(O.a)(e,2),r=t[0],n=t[1],s=Object(a.useState)("all"),c=Object(O.a)(s,2),i=c[0],o=c[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(r,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(S,{data:l,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},T=r(21),M=r(11),E=r.n(M),I=function(e){var t=e.name,r=e.setNameCallback,a=e.addUser,n=e.error,s=e.totalUsers,c=e.onKeyPressCallback,i=n?E.a.error:E.a.error2;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:r,onKeyPress:c,className:i}),Object(u.jsx)(N,{onClick:function(){return a(t)},children:"add"}),Object(u.jsx)("span",{children:s}),Object(u.jsx)("div",{className:E.a.errorColor,children:Object(u.jsx)("span",{children:n})})]})},K=function(e){var t=e.users,r=e.addUserCallback,n=Object(a.useState)(""),s=Object(O.a)(n,2),c=s[0],i=s[1],o=Object(a.useState)(""),l=Object(O.a)(o,2),j=l[0],d=l[1],b=t.length;return Object(u.jsx)(I,{name:c,setNameCallback:function(e){var t=e.currentTarget.value.trim();""!==t?(i(t),d("")):(i(""),d("name is require"))},addUser:function(){alert("Hello ".concat(c," !")),r(c),i("")},error:j,totalUsers:b,onKeyPressCallback:function(e){"Enter"===e.key&&(r(c),i(""))}})},H=r(19);var W=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),r=t[0],n=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(K,{users:r,addUserCallback:function(e){var t=[{_id:Object(H.v1)(),name:e}].concat(Object(T.a)(r));n(t)}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},G=r(9),P=r.n(G),U=function(e){e.type;var t=e.onChange,r=e.onChangeText,a=e.onKeyPress,n=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,o=Object(g.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(P.a.error," ").concat(i||""),j="".concat(P.a.input," ").concat(s?P.a.errorInput:P.a.superInput," ").concat(c);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(v.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),n&&"Enter"===e.key&&n()},className:j},o)),s&&Object(u.jsx)("span",{className:l,children:s})]})},B=r(12),F=r.n(B),q=r(14),D=r.n(q),J=function(e){e.type;var t=e.onChange,r=e.onChangeChecked,a=e.className,n=(e.spanClassName,e.children),s=Object(g.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(D.a.checkbox," ").concat(a||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(v.a)({type:"checkbox",onChange:function(e){return t&&t(e),r?r(e.currentTarget.checked):""},className:c},s)),n&&Object(u.jsx)("span",{className:D.a.spanClassName,children:n})]})};var Q=function(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),r=t[0],n=t[1],s=r?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(r)},i=Object(a.useState)(!1),o=Object(O.a)(i,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:F.a.column,children:[Object(u.jsx)(U,{value:r,onChangeText:n,onEnter:c,error:s}),Object(u.jsx)(U,{className:F.a.blue}),Object(u.jsx)(N,{children:"Default"}),Object(u.jsx)(N,{red:!0,onClick:c,children:"Delete "}),Object(u.jsx)(N,{className:F.a.disabled,disabled:!0,children:"Disabled"}),Object(u.jsx)(J,{checked:l,onChangeChecked:j,children:"Notice "}),Object(u.jsx)(J,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var Y=function(){return Object(u.jsx)("div",{children:"// add NavLinks"})};var L=function(){return Object(u.jsx)("div",{children:"// add routes"})},X=r(20);var R=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(X.a,{children:[Object(u.jsx)(Y,{}),Object(u.jsx)(L,{})]})})};var Z=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(x,{}),Object(u.jsx)(A,{}),Object(u.jsx)(W,{}),Object(u.jsx)(Q,{}),Object(u.jsx)(R,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.307ec6d8.chunk.js.map