(this.webpackJsonpmapu=this.webpackJsonpmapu||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/logo.9d56970a.svg"},28:function(e,t,a){e.exports=a(50)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(24),c=a.n(r),i=(a(33),a(9)),l=a(15),u=a(3),d=a(25),s=a.n(d),p=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2);a[0],a[1];return o.a.createElement("button",{style:{width:"150px",margin:"10px",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px",cursor:"cursor"},type:"button",onMouseEnter:function(e){e.target.style.background="linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)"},onMouseLeave:function(e){e.target.style.background="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},onClick:function(t){"function"==typeof e.func&&e.func(),""!==e.link&&(window.location.href=e.link),t.preventDefault()}},e.children)},m=(a(34),a(35),Object(n.createContext)(null)),h=function(){var e=Object(n.useContext)(m),t=e.user;e.setUser;return o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,o.a.createElement("b",null,"Welcome to ",o.a.createElement("code",null,"Mapu Marshmalloww")," website!!")),o.a.createElement("div",null,t),o.a.createElement("div",null,o.a.createElement(p,{link:"https://www.instagram.com/mapu.marshmalloww/"},"Instagram"),o.a.createElement(p,{link:"https://www.facebook.com/mapumarshmalloww"},"FaceBook"),o.a.createElement(p,{link:"https://www.youtube.com/watch?v=tad5W3Sm670&list=PLGaFouLvwkgDxFgBtTrohIEprCaDBmgi-"},"YouTube")))},g=function(){return o.a.createElement("div",{className:"App-header"},"About Mapu Page")},b=a(26),w=a.n(b).a.initializeApp({apiKey:"AIzaSyDrTfcicqIgz61tiSgUS4aF6tRoWs9G46g",authDomain:"mapu-marshmalloww.firebaseapp.com",databaseURL:"https://mapu-marshmalloww.firebaseio.com",projectId:"mapu-marshmalloww",storageBucket:"mapu-marshmalloww.appspot.com",messagingSenderId:"231452892738",appId:"1:231452892738:web:e07ef231d84fa312ddd7db",measurementId:"G-VF12NPEP96"}),E=function(e){var t=Object(n.useContext)(m),a=t.user,r=t.setUser,c=Object(n.useState)(!1),l=Object(i.a)(c,2),u=l[0],d=l[1],s=Object(n.useState)(""),p=Object(i.a)(s,2),h=p[0],g=p[1],b=Object(n.useState)(""),E=Object(i.a)(b,2),x=E[0],f=E[1],v=Object(n.useState)(""),k=Object(i.a)(v,2),F=k[0],y=k[1],O=Object(n.useState)(""),S=Object(i.a)(O,2),j=S[0],C=S[1],B=Object(n.useState)(""),A=Object(i.a)(B,2),P=A[0],D=A[1],I=Object(n.useState)(!0),L=Object(i.a)(I,2),M=L[0],N=L[1],z=Object(n.useState)(!1),U=Object(i.a)(z,2),W=U[0],R=U[1];function G(){f(""),D("")}function T(){w.auth().onAuthStateChanged((function(e){e?(r(e.email),x||P||(d(!0),g(""),y(""),C(""))):r("")}))}return Object(n.useEffect)((function(){T()}),[]),o.a.createElement("div",null,!1===u&&o.a.createElement("form",{onSubmit:M?function(e){G(),e.preventDefault(),w.auth().signInWithEmailAndPassword(h,F).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":f(e.message);break;case"auth/wrong-password":D(e.message)}}))}:function(e){G(),w.auth().createUserWithEmailAndPassword(h,F).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalied-email":f(e.message);break;case"auth/weak-password":D(e.message)}})),e.preventDefault()}},o.a.createElement("input",{name:"email",value:h,onChange:function(e){return g(e.target.value)},style:""===x?{padding:"10px",background:"white",border:"0px",width:"150px",backgroundColor:"white",borderColor:"white"}:{padding:"10px",background:"white",border:"0px",width:"150px",backgroundColor:"#FA5858",borderColor:"white"},placeholder:"Email"}),o.a.createElement("div",{style:{fontSize:"10px",color:"red"}},x),o.a.createElement("input",{name:"password",value:F,type:"password",onChange:function(e){return y(e.target.value)},style:""===P?{padding:"10px",background:"white",border:"0px",width:"150px",backgroundColor:"white",borderColor:"white"}:{padding:"10px",background:"white",border:"0px",width:"150px",backgroundColor:"#FA5858",borderColor:"white"},placeholder:"Password"}),o.a.createElement("div",{style:{fontSize:"10px",color:"red"}},P),!M&&o.a.createElement("input",{name:"password2",value:j,type:"password",onChange:function(e){return C(e.target.value)},style:F===j?{padding:"10px",background:"white",border:"0px",width:"150px",backgroundColor:"white",borderColor:"white"}:{padding:"10px",background:"white",border:"0px",width:"150px",backgroundColor:"#FA5858",borderColor:"white"},placeholder:"Confirm Password"}),o.a.createElement("div",{style:{fontSize:"10px",color:"red"}},M||F===j?null:"Password does not match"),o.a.createElement("input",{type:"submit",value:M?"Login":"Signup",style:{width:"150px",margin:"10px",background:W?"linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)":"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px",cursor:"cursor"},onMouseEnter:function(e){return R(!0)},onMouseLeave:function(e){return R(!1)}}),o.a.createElement("div",{style:{fontSize:"12px",color:"white"},onClick:function(){N(!M)}},M?"Signup":"Login")),!0===u&&o.a.createElement("button",{onClick:function(e){w.auth().signOut(),d(!1)},style:{width:"auto",margin:"10px",background:W?"linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)":"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px",cursor:"cursor"},onMouseEnter:function(e){return R(!0)},onMouseLeave:function(e){return R(!1)}},"LOG OUT ",a))},x=function(){return o.a.createElement("div",{className:"App-header"},o.a.createElement(E,null))},f=function(){return o.a.createElement("div",{className:"App-header"},"Admin Page")},v=function(){return o.a.createElement("div",{className:"App-header"},"Page Not Found")};var k=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1];return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("div",{style:{background:"black",padding:"10px",color:"white"}},o.a.createElement(l.b,{style:{margin:"10px",color:"white",textDecoration:"none"},to:"/"},"Home"),o.a.createElement(l.b,{style:{margin:"10px",color:"white",textDecoration:"none"},to:"/about"},"About"),o.a.createElement(l.b,{style:{margin:"10px",color:"white",textDecoration:"none"},to:"/login"},"Login")),o.a.createElement(m.Provider,{value:{user:a,setUser:r}},o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:"/about",component:g}),o.a.createElement(u.b,{exact:!0,path:"/",component:h}),o.a.createElement(u.b,{exact:!0,path:"/admin",component:f}),o.a.createElement(u.b,{exact:!0,path:"/login",component:x}),o.a.createElement(u.b,{exact:!0,path:"/404",component:v}),o.a.createElement(u.a,{to:"/404"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.67d95d1c.chunk.js.map