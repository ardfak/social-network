(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[4],{291:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__34UcN",dialogsItems:"Dialogs_dialogsItems__1fUE3",active:"Dialogs_active__2kl00",dialog:"Dialogs_dialog__OkxTx",messages:"Dialogs_messages__eBTNZ",message:"Dialogs_message__GpLwX"}},292:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(33),s=t(34),i=t(37),r=t(36),o=t(0),c=t.n(o),l=t(28),u=t(15),m=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){Object(i.a)(o,a);var t=Object(r.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return console.log(this.props),this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}]),o}(c.a.Component);return Object(u.b)(m)(a)}},297:function(e,a,t){"use strict";t.r(a);var n=t(127),s=t(0),i=t.n(s),r=t(291),o=t.n(r),c=t(18),l=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:o.a.dialog+" "+o.a.active},i.a.createElement(c.b,{to:a},e.name))},u=function(e){return i.a.createElement("div",{className:o.a.dialog},e.message)},m=t(91),d=t(128),g=t(56),b=t(49),f=Object(g.a)(100),p=Object(b.b)("textarea"),v=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(m.a,{placeholder:"Enter your message",component:p,name:"newMessageBody",validate:[g.b,f]})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))})),E=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return i.a.createElement(l,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return i.a.createElement(u,{message:e.message,key:e.id})}));a.newMessageBody;return i.a.createElement("div",{className:o.a.dialogs},i.a.createElement("div",{className:o.a.dialogsItems},t),i.a.createElement("div",{className:o.a.messages},i.a.createElement("div",null,n)),i.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},_=t(15),h=t(292),O=t(8);a.default=Object(O.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(n.b)(a))}}})),h.a)(E)}}]);
//# sourceMappingURL=4.b9aab91a.chunk.js.map