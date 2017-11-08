webpackJsonp([1],{"+kk0":function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"container"},[e._m(0),e._v(" "),r("div",{staticClass:"jumbotron"},[r("h2",[e._v("Bookmark Your Favorite Sites")]),e._v(" "),r("form",{on:{submit:function(a){a.preventDefault(),e.validateBeforeSubmit(a)}}},[r("div",{staticClass:"form-group"},[r("label",[e._v("Site Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.book.siteName,expression:"book.siteName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{input:!0,"is-danger":e.errors.has("book.siteName")},attrs:{name:"name",type:"text",placeholder:"Website Name"},domProps:{value:e.book.siteName},on:{input:function(a){a.target.composing||e.$set(e.book,"siteName",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("name")))])]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v("Site URL")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.book.siteUrl,expression:"book.siteUrl"},{name:"validate",rawName:"v-validate",value:"required|url",expression:"'required|url'"}],staticClass:"form-control",class:{input:!0,"is-danger":e.errors.has("book.siteUrl")},attrs:{name:"url",type:"url",placeholder:"Website URL"},domProps:{value:e.book.siteUrl},on:{input:function(a){a.target.composing||e.$set(e.book,"siteUrl",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("url"),expression:"errors.has('url')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("url")))])]),e._v(" "),r("button",{staticClass:"btn btn-primary"},[e._v("Submit")])])]),e._v(" "),e._l(e.books,function(a){return r("div",{key:a.key,staticClass:"well"},[r("h3",[e._v(" "+e._s(a.siteName)+"\n            "),r("a",{staticClass:"btn btn-default",attrs:{target:"_blank",href:a.siteUrl}},[e._v("Visit")]),e._v(" "),r("a",{staticClass:"btn btn-danger",on:{click:function(r){e.deleteData(a.key)}}},[e._v("Delete ")])])])}),e._v(" "),e._m(1)],2)},s=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"header clearfix"},[r("h3",{staticClass:"text-muted"},[e._v("Bookmarker")])])},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("footer",{staticClass:"footer"},[r("p",[e._v("© 2016 Bookmarker, Inc.")])])}],o={render:t,staticRenderFns:s};a.a=o},0:function(e,a){},"07PK":function(e,a,r){"use strict";var t=r("Sazm"),s=r.n(t),o=r("vX5M"),n=r("L6bb");a.a={name:"HelloWorld",data:function(){return{msg:"Firebase Authentication tutorial",user:{photoURL:"",userId:"",name:"",email:"",url:"",phone:""}}},methods:{logout:function(){var e=this;s.a.auth().signOut().then(function(){e.$router.push({name:"Login"})})}},created:function(){var e=this,a=s.a.auth().currentUser;if(a){this.user.photoURL=a.photoURL,this.user.userId=a.uid,this.user.name=a.displayName,this.user.email=a.email;var r=n(a.email);console.log(r),o.a.ref("users/"+r).once("value").then(function(a){a&&(console.log(a),e.user.name=a.val().name,e.user.url=a.val().url,e.user.phone=a.val().phone)})}}}},"3BMn":function(e,a,r){"use strict";var t=r("Sazm"),s=r.n(t);a.a={name:"BookMarker",data:function(){return{book:{siteName:"",siteUrl:""},books:[],user:""}},methods:{validateBeforeSubmit:function(){var e=this;this.$validator.validateAll().then(function(a){a&&e.submit()})},submit:function(){var e=this;this.$http.post("https://vue-resource-tutorial-8aa47.firebaseio.com/users/"+this.user.uid+"/books.json",this.book).then(function(a){console.log(a),e.fetchData(),e.book.siteName="",e.book.siteUrl=""},function(e){console.log(e)})},fetchData:function(){var e=this;this.$http.get("https://vue-resource-tutorial-8aa47.firebaseio.com/users/"+this.user.uid+"/books.json").then(function(e){return e.json()}).then(function(a){var r=[];for(var t in a){var s=new Object;s.key=t,s.siteName=a[t].siteName,s.siteUrl=a[t].siteUrl,r.push(s)}e.books=r})},deleteData:function(e){var a=this;this.$http.delete("https://vue-resource-tutorial-8aa47.firebaseio.com/users/"+this.user.uid+"/books/"+e+".json").then(function(e){a.fetchData(),console.log(e)},function(e){console.log(e)})}},created:function(){var e=s.a.auth().currentUser;this.user=e,this.fetchData()}}},"8CHc":function(e,a){},"8QIG":function(e,a){},"8po3":function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"login"},[r("form",{on:{submit:function(a){a.preventDefault(),e.validateBeforeSubmit(a)}}},[r("h3",[e._v("Sign in")]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{input:!0,"is-danger":e.errors.has("user.email")},attrs:{name:"email",type:"email",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(a){a.target.composing||e.$set(e.user,"email",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("email")))])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{input:!0,"is-danger":e.errors.has("user.password")},attrs:{name:"password",type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(a){a.target.composing||e.$set(e.user,"password",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("password")))])]),e._v(" "),e._m(0),e._v(" "),r("p",[e._v("You don't have an account? You can "),r("router-link",{attrs:{to:"/signup"}},[e._v(" create one")]),r("br")],1),e._v(" "),r("hr")])])},s=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("button",{staticStyle:{"margin-bottom":"20px"}},[e._v("Log in")])])}],o={render:t,staticRenderFns:s};a.a=o},Bo4A:function(e,a){},Bu0r:function(e,a,r){"use strict";var t=r("Sazm"),s=r.n(t),o=r("2ahc"),n=r.n(o);a.a={name:"auth",mounted:function(){var e={signInSuccessUrl:"/hello",signInOptions:[s.a.auth.GoogleAuthProvider.PROVIDER_ID,s.a.auth.FacebookAuthProvider.PROVIDER_ID,s.a.auth.EmailAuthProvider.PROVIDER_ID]};new n.a.auth.AuthUI(s.a.auth()).start("#firebaseui-auth-container",e)}}},HCTz:function(e,a,r){"use strict";var t=r("Sazm"),s=r.n(t);a.a={name:"Header",methods:{logout:function(){var e=this;s.a.auth().signOut().then(function(){e.$router.push({name:"Login"})})}}}},Ibc2:function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o={render:t,staticRenderFns:s};a.a=o},J8zR:function(e,a){},LOkK:function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement;return(e._self._c||a)("div",{attrs:{id:"firebaseui-auth-container"}})},s=[],o={render:t,staticRenderFns:s};a.a=o},M93x:function(e,a,r){"use strict";function t(e){r("cWNT")}var s=r("xJD8"),o=r("Ibc2"),n=r("VU/8"),i=t,u=n(s.a,o.a,!1,i,null,null);a.a=u.exports},NHnr:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=r("7+uW"),s=r("M93x"),o=r("YaEn"),n=r("Sazm"),i=r.n(n),u=(r("vX5M"),r("/ocq")),l=r("ORbq");t.a.config.productionTip=!1,t.a.use(u.a),t.a.use(l.a),o.a.beforeEach(function(e,a,r){var t=i.a.auth().currentUser,s=e.matched.some(function(e){return e.meta.requiresAuth});s&&!t?r({name:"Login"}):!s&&t?r({name:"Hello"}):r()});var c=void 0;i.a.auth().onAuthStateChanged(function(e){c||(c=new t.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}}))})},OBXJ:function(e,a,r){"use strict";var t=r("Sazm"),s=r.n(t),o=r("vX5M"),n=r("L6bb");o.a.ref("users");a.a={name:"signUp",data:function(){return{user:{name:"",email:"",password1:"",password2:"",url:"",phone:"",birthdate:""}}},methods:{validateBeforeSubmit:function(){var e=this;this.$validator.validateAll().then(function(a){a&&e.signup()})},signup:function(){var e=this;s.a.auth().createUserWithEmailAndPassword(this.user.email,this.user.password1).then(function(a){alert("Your accound has been created!");e.addUserInfo();e.$router.push({name:"Hello"})},function(e){var a=e.code,r=e.message;"auth/weak-password"==a?alert("The password is too week"):alert("Oops."+r)})},addUserInfo:function(){var e={name:this.user.name,email:this.user.email,url:this.user.url,phone:this.user.phone,birthdate:this.user.birthdate},a=n(this.user.email);console.log(a),o.a.ref("users/"+a).set(e)}}}},QYvC:function(e,a,r){"use strict";function t(e){r("8QIG"),r("J8zR")}var s=r("3BMn"),o=r("+kk0"),n=r("VU/8"),i=t,u=n(s.a,o.a,!1,i,"data-v-c47875ba",null);a.a=u.exports},XGD4:function(e,a,r){"use strict";var t=r("Sazm"),s=r.n(t),o=r("7+uW"),n=r("sUu7");o.a.use(n.a),n.a.Validator.extend("passphrase",{getMessage:function(e){return"Sorry dude, wrong pass phrase."},validate:function(e){return e.toUpperCase()=="Demogorgon".toUpperCase()}}),a.a={name:"signUpValidate",data:function(){return{user:{name:"",email:"",password1:"",password2:"",website:"",phone:""}}},methods:{validateBeforeSubmit:function(){this.$validator.validateAll(),this.error.any()||this.signup()},signup:function(){var e=this;s.a.auth().createUserWithEmailAndPassword(this.user.email,this.user.password1).then(function(a){alert("Your accound has been created!"),e.$router.push({name:"Hello"})},function(e){var a=e.code,r=e.message;"auth/weak-password"==a?alert("The password is too week"):alert("Oops."+r)})}}}},YaEn:function(e,a,r){"use strict";var t=r("7+uW"),s=r("/ocq"),o=r("gORT"),n=r("xJsL"),i=r("psOb"),u=r("kn4y"),l=r("pMke"),c=r("QYvC"),v=r("jyJz"),d=r("c27y");t.a.use(s.a),a.a=new s.a({routes:[{path:"/hello",component:v.a,children:[{path:"",component:o.a,name:"Hello",meta:{requiresAuth:!0}},{path:"/bookmarker",component:c.a,name:"BookMarker",meta:{requiresAuth:!0}},{path:"/about",component:d.a,name:"About",meta:{requiresAuth:!0}}]},{path:"/login",name:"Login",component:n.a},{path:"/signup",name:"Signup",component:i.a},{path:"/signup2",name:"Signup2",component:l.a},{path:"*",redirect:{name:"Login"}},{path:"/firebaseauth",name:"Auth",component:u.a}],mode:"history"})},YdLR:function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("nav",{staticClass:"navbar"},[r("ul",{staticClass:"nav nav-pills navbar-right",staticStyle:{"margin-right":"5Px"}},[r("li",{attrs:{role:"presentation"}},[r("router-link",{attrs:{to:"/hello"}},[e._v("Profile")])],1),e._v(" "),r("li",{attrs:{role:"presentation"}},[r("router-link",{attrs:{to:"/bookmarker"}},[e._v("Bookmarks")])],1),e._v(" "),r("li",{attrs:{role:"presentation"}},[r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),e._v(" "),r("li",{attrs:{role:"presentation"}},[r("a",{on:{click:e.logout}},[e._v("Sign Out")])])])])])},s=[],o={render:t,staticRenderFns:s};a.a=o},Zs8U:function(e,a,r){"use strict";a.a={}},c27y:function(e,a,r){"use strict";var t=r("Zs8U"),s=r("m7+r"),o=r("VU/8"),n=o(t.a,s.a,!1,null,null,null);a.a=n.exports},cWNT:function(e,a){},fQuP:function(e,a){},gORT:function(e,a,r){"use strict";function t(e){r("sQ+B")}var s=r("07PK"),o=r("xap+"),n=r("VU/8"),i=t,u=n(s.a,o.a,!1,i,"data-v-02916c00",null);a.a=u.exports},jyJz:function(e,a,r){"use strict";var t=r("qgpy"),s=r("njuH"),o=r("VU/8"),n=o(t.a,s.a,!1,null,null,null);a.a=n.exports},kn4y:function(e,a,r){"use strict";function t(e){r("fQuP")}var s=r("Bu0r"),o=r("LOkK"),n=r("VU/8"),i=t,u=n(s.a,o.a,!1,i,null,null);a.a=u.exports},"m7+r":function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("h1",[e._v("About")]),e._v(" "),r("h4"),e._v(" "),r("h4",[e._v("Apinun Uppanun")]),e._v(" "),r("h4",[e._v("570610618")]),e._v(" "),r("h4",[e._v("Chaing Mai University")])])}],o={render:t,staticRenderFns:s};a.a=o},"nKb+":function(e,a,r){"use strict";var t=r("Sazm"),s=r.n(t),o=r("2ahc");r.n(o);a.a={name:"login",data:function(){return{user:{email:"",password:""}}},methods:{validateBeforeSubmit:function(){var e=this;this.$validator.validateAll().then(function(a){a&&e.login()})},login:function(){var e=this;s.a.auth().signInWithEmailAndPassword(this.user.email,this.user.password).then(function(a){alert("User authentication successful"),e.$router.push({name:"Hello"})},function(e){"auth/wrong-password"===e.code?alert("Wrong password."):"auth/user-not-found"===e.code?alert("User not found!"):"auth/invalid-email"===e.code?alert("Invalid email"):alert("Oops. "+e.message)}).catch(function(e){"auth/wrong-password"===e.code?alert("Wrong password"):alert(e.message)})},loginGoogle:function(){var e=this;console.log("Google login");var a=new s.a.auth.GoogleAuthProvider;a.addScope("profile"),a.addScope("email"),s.a.auth().signInWithPopup(a).then(function(a){if(a){var r=a.credential.accessToken,t=a.user;console.log("token: "+r),console.log(t),e.$router.push("/hello")}},function(e){alert("Oops. "+e.message)})},loginFacebook:function(){var e=this;console.log("Facebook login");var a=new s.a.auth.FacebookAuthProvider;a.addScope("public_profile"),a.setCustomParameters({display:"popup"}),s.a.auth().signInWithPopup(a).then(function(a){if(a){var r=a.credential.accessToken,t=a.user;console.log("token: "+r),console.log(t),e.$router.push("/hello")}},function(e){alert("Oops. "+e.message)})}},mounted:function(){}}},njuH:function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("app-header"),e._v(" "),r("router-view")],1)},s=[],o={render:t,staticRenderFns:s};a.a=o},pMke:function(e,a,r){"use strict";function t(e){r("Bo4A")}var s=r("XGD4"),o=r("w6i0"),n=r("VU/8"),i=t,u=n(s.a,o.a,!1,i,"data-v-a4e1dd24",null);a.a=u.exports},psOb:function(e,a,r){"use strict";function t(e){r("tzHE")}var s=r("OBXJ"),o=r("zk+C"),n=r("VU/8"),i=t,u=n(s.a,o.a,!1,i,"data-v-07008190",null);a.a=u.exports},qgpy:function(e,a,r){"use strict";var t=r("teIl");a.a={components:{appHeader:t.a}}},"sQ+B":function(e,a){},teIl:function(e,a,r){"use strict";var t=r("HCTz"),s=r("YdLR"),o=r("VU/8"),n=o(t.a,s.a,!1,null,null,null);a.a=n.exports},tzHE:function(e,a){},vX5M:function(e,a,r){"use strict";r.d(a,"a",function(){return i});var t=r("Sazm"),s=r.n(t),o={apiKey:"AIzaSyCAD1FK8dyvXSIpiE8V71dakbxCXfyNkMY",authDomain:"vue-resource-tutorial-8aa47.firebaseapp.com",databaseURL:"https://vue-resource-tutorial-8aa47.firebaseio.com/",projectId:"vue-resource-tutorial-8aa47",storageBucket:"vue-resource-tutorial-8aa47.appspot.com",messagingSenderId:"880920997027"},n=s.a.initializeApp(o),i=n.database()},w4Dr:function(e,a){},w6i0:function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"sign-up-validate"},[r("form",{on:{submit:function(a){a.preventDefault(),e.validateBeforeSubmit(a)}}},[r("p",[e._v("Let's create a new account!")]),e._v(" "),r("div",{staticClass:"form-group",class:{"has-error":e.errors.has("user.name")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"},{name:"validate",rawName:"v-validate.initial",value:e.user.name,expression:"user.name",modifiers:{initial:!0}}],ref:"name",attrs:{type:"text","data-rules":"required|alpha|min:5",placeholder:"Full Name"},domProps:{value:e.user.name},on:{input:function(a){a.target.composing||e.$set(e.user,"name",a.target.value)}}}),r("br"),e._v(" "),e.errors.has("user.name")?r("p",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("user.name")))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group",class:{"has-error":e.errors.has("user.email")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate.initial",value:e.user.email,expression:"user.email",modifiers:{initial:!0}}],ref:"email",attrs:{type:"email","data-rules":"required|email",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(a){a.target.composing||e.$set(e.user,"email",a.target.value)}}}),r("br"),e._v(" "),e.errors.has("user.email")?r("p",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("user.email")))]):e._e()]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password1,expression:"user.password1"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password1},on:{input:function(a){a.target.composing||e.$set(e.user,"password1",a.target.value)}}}),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password2,expression:"user.password2"}],ref:"password2",attrs:{type:"password",placeholder:"Confirm password"},domProps:{value:e.user.password2},on:{input:function(a){a.target.composing||e.$set(e.user,"password2",a.target.value)}}}),r("br"),e._v(" "),r("div",{staticClass:"form-group",class:{"has-error":e.errors.has("user.website")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.website,expression:"user.website"},{name:"validate",rawName:"v-validate.initial",value:e.user.website,expression:"user.website",modifiers:{initial:!0}}],ref:"url",attrs:{type:"text","data-rules":"required|url",placeholder:"Website"},domProps:{value:e.user.website},on:{input:function(a){a.target.composing||e.$set(e.user,"website",a.target.value)}}}),r("br"),e._v(" "),e.errors.has("user.website")?r("p",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("user.website")))]):e._e()]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],attrs:{type:"text",placeholder:"Phone number"},domProps:{value:e.user.phone},on:{input:function(a){a.target.composing||e.$set(e.user,"phone",a.target.value)}}}),r("br"),e._v(" "),r("button",{on:{click:e.signup}},[e._v("Sign Up")])]),e._v(" "),r("span",[e._v("or go back to "),r("router-link",{attrs:{to:"/login"}},[e._v("login")]),e._v(".")],1)])},s=[],o={render:t,staticRenderFns:s};a.a=o},xJD8:function(e,a,r){"use strict";a.a={name:"app"}},xJsL:function(e,a,r){"use strict";function t(e){r("8CHc"),r("w4Dr")}var s=r("nKb+"),o=r("8po3"),n=r("VU/8"),i=t,u=n(s.a,o.a,!1,i,"data-v-cb58660e",null);a.a=u.exports},"xap+":function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("User information:")]),e._v(" "),e.user.photoURL?r("div",[r("p",[e._v("Profile Photo:")]),e._v(" "),r("img",{staticStyle:{height:"120px"},attrs:{src:e.user.photoURL}})]):e._e(),e._v(" "),r("br"),e._v(" "),r("p",[e._v("ID: "+e._s(e.user.userId))]),e._v(" "),e.user.name?r("p",[e._v("Name: "+e._s(e.user.name))]):e._e(),e._v(" "),r("p",[e._v("Email: "+e._s(e.user.email))]),e._v(" "),r("p",[e._v("Website: "+e._s(e.user.url))]),e._v(" "),r("p",[e._v("Phone: "+e._s(e.user.phone))])])},s=[],o={render:t,staticRenderFns:s};a.a=o},"zk+C":function(e,a,r){"use strict";var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"sign-up"},[r("form",{on:{submit:function(a){a.preventDefault(),e.validateBeforeSubmit(a)}}},[r("p",[e._v("Let's create a new account!")]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{input:!0,"is-danger":e.errors.has("user.name")},attrs:{name:"name",type:"name",placeholder:"Full Name"},domProps:{value:e.user.name},on:{input:function(a){a.target.composing||e.$set(e.user,"name",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("name")))])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{input:!0,"is-danger":e.errors.has("user.email")},attrs:{name:"email",type:"email",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(a){a.target.composing||e.$set(e.user,"email",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("email")))])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password1,expression:"user.password1"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{input:!0,"is-danger":e.errors.has("user.password1")},attrs:{name:"password",type:"password",placeholder:"Password"},domProps:{value:e.user.password1},on:{input:function(a){a.target.composing||e.$set(e.user,"password1",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("password")))])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password2,expression:"user.password2"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],class:{input:!0,"is-danger":e.errors.has("user.password2")},attrs:{name:"confirm password",type:"password",placeholder:"Confirm Password"},domProps:{value:e.user.password2},on:{input:function(a){a.target.composing||e.$set(e.user,"password2",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("confirm password"),expression:"errors.has('confirm password')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("confirm password")))])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.birthdate,expression:"user.birthdate"},{name:"validate",rawName:"v-validate",value:"required|date_format:DD/MM/YYYY",expression:"'required|date_format:DD/MM/YYYY'"}],class:{input:!0,"is-danger":e.errors.has("user.birthdate")},attrs:{name:"birthdate",type:"date",placeholder:"Birth day (DD/MM/YYYY)"},domProps:{value:e.user.birthdate},on:{input:function(a){a.target.composing||e.$set(e.user,"birthdate",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("birthdate"),expression:"errors.has('birthdate')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("birthdate")))])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.url,expression:"user.url"},{name:"validate",rawName:"v-validate",value:"required|url|regex:.*(facebook).*",expression:"'required|url|regex:.*(facebook).*'"}],class:{input:!0,"is-danger":e.errors.has("user.url")},attrs:{name:"url",type:"text",placeholder:"Facebook"},domProps:{value:e.user.url},on:{input:function(a){a.target.composing||e.$set(e.user,"url",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("url"),expression:"errors.has('url')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("url")))])]),e._v(" "),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"},{name:"validate",rawName:"v-validate",value:"required|regex:^([0-9]+)$",expression:"'required|regex:^([0-9]+)$'"}],class:{input:!0,"is-danger":e.errors.has("user.phone")},attrs:{name:"phone",type:"text",placeholder:"Phone"},domProps:{value:e.user.phone},on:{input:function(a){a.target.composing||e.$set(e.user,"phone",a.target.value)}}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticStyle:{color:"red"}},[e._v(e._s(e.errors.first("phone")))])]),e._v(" "),e._m(0)])])},s=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("button",{staticStyle:{"margin-bottom":"20px"}},[e._v("Sign Up")])])}],o={render:t,staticRenderFns:s};a.a=o}},["NHnr"]);
//# sourceMappingURL=app.2c50433e22c0a789d74f.js.map