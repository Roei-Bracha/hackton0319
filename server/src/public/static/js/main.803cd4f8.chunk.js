(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5440:function(e,t,a){e.exports=a(5600)},5445:function(e,t,a){},5450:function(e,t,a){},5580:function(e,t,a){},5594:function(e,t,a){},5595:function(e,t,a){},5596:function(e,t,a){},5597:function(e,t,a){},5598:function(e,t,a){},5600:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),s=(a(5445),a(160)),l=a(16),i=a(17),u=a(19),m=a(18),p=a(20),d=a(5605),h=a(5604),f=a(29),E=(a(5450),a(66)),v=a.n(E),b=a(5603);function g(){return r.a.createElement(b.a,{to:"/profile/harry",push:!0},r.a.createElement(v.a,{src:"https://images.pottermore.com/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg"}))}var _=a(30),y=a(28),j=a.n(y),O=a(71),N=a.n(O),S=a(70),w=a.n(S),C=a(69),k=a.n(C),R=a(68),P=a.n(R),T=a(47),q=a.n(T),I=a(37),M=a.n(I),L=a(67),x=a.n(L),B=a(53),D=a.n(B);function J(){var e=Object(n.useState)("Login"),t=Object(_.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(_.a)(o,2),l=s[0],i=s[1],u=Object(n.useState)(""),m=Object(_.a)(u,2),p=m[0],d=m[1],h=Object(n.useState)(""),f=Object(_.a)(h,2),E=f[0],v=f[1],b=Object(n.useState)(!1),g=Object(_.a)(b,2),y=g[0],O=g[1],N=Object(n.useState)(""),S=Object(_.a)(N,2),C=S[0],R=S[1],T=Object(n.useState)(""),I=Object(_.a)(T,2);I[0],I[1];return r.a.createElement("div",null,r.a.createElement(x.a,{value:a,variant:"fullWidth",onChange:function(e,t){c(t)}},r.a.createElement(D.a,{value:"Login",label:"Login"}),r.a.createElement(D.a,{value:"Register",label:"Register"})),r.a.createElement(P.a,null,"Login"===a?"Login":"Register"),r.a.createElement(k.a,null,r.a.createElement(M.a,{fullWidth:!0,required:!0},r.a.createElement(q.a,{label:"Uesr name",value:l,onChange:function(e){i(e.target.value)}})),r.a.createElement(M.a,{fullWidth:!0,required:!0},r.a.createElement(q.a,{label:"Password",value:p,error:y,onChange:function(e){!function(e){var t=e.target.value;if(d(t),"Register"===a)""===t?(R(""),O(!1)):t.length<6?(R("the password should me at list 6 characther long"),O(!0)):(R(""),O(!1))}(e)},type:"password",helperText:C})),"Register"===a&&r.a.createElement(M.a,{fullWidth:!0,required:!0},r.a.createElement(q.a,{label:"Re-type Password",value:E,error:p!==E&&0!==E.length,onChange:function(e){v(e.target.value)},type:"password"}))),r.a.createElement(w.a,null,r.a.createElement(j.a,{color:"primary"},a)))}function W(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(j.a,{onClick:function(){c(!0)},color:"inherit"},"Login / Regiter"),a&&r.a.createElement(N.a,{open:a,onClose:function(){c(!1)},className:"Modal"},r.a.createElement(J,null)))}var Y=a(72),U=a.n(Y),A=a(73),H=a.n(A),Q=a(23),X=a.n(Q);var F=Object(f.b)(function(e){return{userId:e.main.userId}})(function(e){return r.a.createElement(U.a,{style:{position:"relative"},className:"AppNavBar"},r.a.createElement(H.a,{className:"Toolbar"},r.a.createElement(X.a,{variant:"h6",color:"inherit"},"\u05ea\u05dc\u05de\u05d5\u05e8"),e.userId?r.a.createElement(g,null):r.a.createElement(W,null)))}),G=a(39),V=a(38),$={userId:"harry"},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_USER_NAME":return Object(V.a)({},e,{userId:t.userId});default:return e}},K={courses:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COURSES_INIT":return Object(V.a)({},e,{courses:t.courses});default:return e}},ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,te=a(76),ae=a.n(te),ne=a(54),re=a(15),ce=a(27),oe=a(5606),se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={value:"search",redirect:!1},a.changeMode=a.changeMode.bind(Object(ne.a)(Object(ne.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"changeMode",value:function(e,t){this.setState({value:t,redirect:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"bottomBar"},this.state.redirect&&r.a.createElement(oe.a,{push:!0,to:"/".concat(this.state.value)}),r.a.createElement(re.b,{value:this.state.value,onChange:this.changeMode,showLabels:!0},r.a.createElement(re.c,{label:"\u05d0\u05e0\u05d9 \u05de\u05dc\u05de\u05d3",icon:r.a.createElement(ce.a,null),value:"iTeach"}),r.a.createElement(re.c,{label:"\u05d7\u05e4\u05e9 \u05e7\u05d5\u05e8\u05e1",icon:r.a.createElement(ce.e,null),value:"search"}),r.a.createElement(re.c,{label:"\u05d4\u05e7\u05d5\u05e8\u05e1\u05d9\u05dd \u05e9\u05dc\u05d9",icon:r.a.createElement(ce.d,null),value:"myCourses"})))}}]),t}(r.a.Component),le=(a(5580),a(52)),ie=a(156),ue=a.n(ie),me=a(21),pe=a(157),de=a.n(pe),he=a(158),fe=a.n(he),Ee="https://grpahql-talmor.herokuapp.com/v1alpha1/graphql",ve=Object(me.createMuiTheme)({direction:"rtl",palette:{primary:de.a,secondary:fe.a}});console.log(ve);var be=a(159),ge=a.n(be),_e=a(31),ye=a.n(_e),je=a(75),Oe=a.n(je),Ne=a(74),Se=a.n(Ne),we=a(79),Ce=a.n(we),ke=(a(5594),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).joinToCourse=function(e,t){e.stopPropagation(),console.log(t),console.log(a.props.username);var n={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:'mutation{insert_registrations(objects:{course_id:"'.concat(t,'",has_completed:false,talmor_id:"').concat(a.props.username,'"}){affected_rows}}')})};fetch(Ee,n).then(function(e){return e.json()}).then(function(){a.setState({openSuccesReg:!0}),alert("\u05e0\u05e8\u05e9\u05de\u05ea \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4!")})},a.unSignToCourse=function(e,t){e.stopPropagation();var n={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:'mutation{delete_registrations(where:{_and:{talmor_id:{_eq:"'.concat(a.props.username,'"},course_id:{_eq:"').concat(t,'"}}}){affected_rows}}')})};fetch(Ee,n).then(function(e){return e.json()}).then(function(){a.setState({openSuccesReg:!0,isRemoved:!0}),alert("\u05d1\u05d9\u05d8\u05d5\u05dc \u05d4\u05d4\u05e9\u05ea\u05ea\u05e4\u05d5\u05ea \u05e0\u05e8\u05e9\u05dd \u05d1\u05de\u05e2\u05e8\u05db\u05ea")})},a.clickOpen=function(){return a.setState(function(e){return{isOpen:!e.isOpen}})},a.handleCloseSuccesReg=function(){a.setState({openSuccesReg:!1})},a.state={isOpen:!1,isRemoved:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isOpen,n=(t.openSuccesReg,t.isRemoved),c=this.props.course,o=(c.approved,c.course_id),s=c.description,l=c.photo_url,i=c.start_date,u=c.end_date,m=c.start_hour,p=c.end_hour,d=(c.is_one_time,c.talmor_username,c.max_participants,c.min_participants,c.category),h=c.name,f=c.location,E=c.student,v=c.previous_knowledge,g=this.props.isSigned;return r.a.createElement(ye.a,{className:"coursePaper",onClick:this.clickOpen},r.a.createElement("div",{className:"coursePreview"},r.a.createElement("div",{className:"courseHeader",style:{backgroundColor:ve.palette.primary[200]}},r.a.createElement("div",{className:"coursePhotoWrap"},r.a.createElement("img",{src:l,className:"coursePhoto"})),a?r.a.createElement(Se.a,{className:"openIcon"}):r.a.createElement(Oe.a,{className:"openIcon"})),r.a.createElement("div",{className:"courseLabel"},r.a.createElement("span",{className:"courseName"},"".concat(h," (").concat(d,")"))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05ea\u05d0\u05e8\u05d9\u05db\u05d9\u05dd:"),r.a.createElement("span",null,"".concat(Ce()(i).format("DD/MM/YYYY"),"-").concat(Ce()(u).format("DD/MM/YYYY")))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05de\u05d9\u05e7\u05d5\u05dd:"),r.a.createElement("span",null,f.name)),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05de\u05d5\u05e8\u05d4:"),r.a.createElement(b.a,{push:!0,to:"/profile/".concat(E.username)},r.a.createElement("span",null,"".concat(E.userByUsername.first_name," ").concat(E.userByUsername.last_name)))),a?r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05ea\u05d9\u05d0\u05d5\u05e8 \u05e7\u05d5\u05e8\u05e1:"),r.a.createElement("span",null,s)),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05e9\u05e2\u05d5\u05ea:"),r.a.createElement("span",null,"".concat(m,"-").concat(p))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05d9\u05d3\u05e2 \u05e7\u05d5\u05d3\u05dd \u05d3\u05e8\u05d5\u05e9:"),r.a.createElement("span",null,v)),r.a.createElement("div",{className:"footer"},g?r.a.createElement(j.a,{variant:"contained",color:"secondary",className:"joinButton",onClick:function(t){return e.unSignToCourse(t,o)}},r.a.createElement("span",null," \u05d1\u05d8\u05dc \u05d4\u05e9\u05ea\u05ea\u05e4\u05d5\u05ea \u05d1\u05e7\u05d5\u05e8\u05e1"),r.a.createElement(ce.d,{style:{marginRight:"8px"}})):r.a.createElement(j.a,{variant:"contained",color:"primary",className:"joinButton",onClick:function(t){return e.joinToCourse(t,o)}},r.a.createElement("span",null," \u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05e7\u05d5\u05e8\u05e1"),r.a.createElement(ce.d,{style:{marginRight:"8px"}}))),n?r.a.createElement(oe.a,{to:"/search",push:!0}):null,r.a.createElement("div",{className:"row"})):null))}}]),t}(n.Component)),Re=Object(f.b)(function(e){return{username:e.main.userId}})(ke),Pe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:'query{registrations(where:{talmor_id:{_eq:"'.concat(a.props.username,'"}}){course{approved name course_id description start_date end_date start_hour end_hour is_one_time photo_url talmor_username student{username userByUsername{first_name last_name}bio school{name}}max_participants min_participants previous_knowledge category location{name address description}}}}')})};fetch(Ee,e).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.data.registrations.map(function(e){return e.course});a.setState({courses:t})}).catch(function(e){console.error(e)})},a.state={courses:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.courses;return r.a.createElement("div",{className:"myCourses"},e?e.map(function(e){return r.a.createElement(Re,{key:e.course_id,course:e,isSigned:!0})}):null)}}]),t}(n.Component),Te=Object(f.b)(function(e){return{username:e.main.userId}})(Pe),qe=(a(5595),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:"query{courses{approved name course_id description start_date end_date start_hour end_hour is_one_time photo_url talmor_username student{username userByUsername{first_name last_name}bio school{name}}max_participants min_participants previous_knowledge category location{name address description}}}"})};fetch(Ee,e).then(function(e){return e.json()}).then(function(e){var t=e.data.courses;a.setState({courses:t})}).catch(function(e){console.error(e)})},a.state={},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.courses;return r.a.createElement("div",{className:"home"},r.a.createElement("span",null,"\u05e7\u05d5\u05e8\u05e1\u05d9\u05dd \u05e9\u05d0\u05de\u05d5\u05e8\u05d9\u05dd \u05dc\u05d4\u05e4\u05ea\u05d7 \u05d1\u05d1\u05d9\u05ea \u05d4\u05e1\u05e4\u05e8 \u05e9\u05dc\u05da:"),e?e.map(function(e){return r.a.createElement(Re,{key:e.course_id,course:e,isSigned:!1})}):null)}}]),t}(n.Component)),Ie=(a(5596),a(107)),Me=a.n(Ie),Le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateState=function(e){a.setState({user:Object(V.a)({},e)})},a.state={loading:!0,user:{username:"loading"}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:'query{users(where:{username:{_eq:"'.concat(this.props.match.params.username,'"}}){first_name last_name email phone_number phone_number photo_url school{name city}}students(where:{username:{_eq:"').concat(this.props.match.params.username,'"}}){city interests{category_name}bio}}')})};fetch(Ee,t).then(function(e){return e.json()}).then(function(t){e.setState({loading:!1,user:Object(V.a)({},t.data.users[0],t.data.students[0])})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement(ye.a,{className:"Profile"},r.a.createElement(X.a,{variant:"h5",component:"h3"},this.state.loading?r.a.createElement(Me.a,null):r.a.createElement("span",{style:{display:"flex",alignItems:"center"}},r.a.createElement(re.a,{style:{margin:"5px",width:60,height:60},src:this.state.user.photo_url})," ",this.state.user.first_name," ",this.state.user.last_name," ")),r.a.createElement("br",null),this.state.loading?r.a.createElement("p",null," ",r.a.createElement(Me.a,{count:8})," "):r.a.createElement("div",null,r.a.createElement(X.a,null,r.a.createElement("b",null,"\u05e7\u05e6\u05ea \u05e2\u05dc \u05e2\u05e6\u05de\u05d9:")),r.a.createElement(X.a,null,this.state.user.bio),r.a.createElement(X.a,null,r.a.createElement("b",null,"\u05d1\u05d9\u05ea \u05e1\u05e4\u05e8: "),this.state.user.school.name),r.a.createElement(X.a,null,r.a.createElement("b",null," \u05e2\u05d9\u05e8: "),this.state.user.city),r.a.createElement(X.a,null,r.a.createElement("b",null," \u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df: "),this.state.user.phone_number),r.a.createElement(X.a,null,r.a.createElement("b",null,"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc: "),this.state.user.email))))}}]),t}(r.a.Component),xe=(a(5597),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).sendToServer=function(e){e.preventDefault(),console.log(a.state);var t={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:'mutation{insert_courses(objects:{category: "'.concat(a.state.category,'",description: "').concat(a.state.description,'",end_date: "').concat(a.state.end_date,'",start_date: "').concat(a.state.start_date,'",is_one_time: true,max_participants: 10,location_id:"2e681815-d21d-471f-89c2-d4e389e24097",approved:true,talmor_username:"').concat(a.props.talmor_username,'",name:"').concat(a.state.name,'",photo_url:"aaaaa",start_hour:"').concat(a.state.start_hour,':00",end_hour:"').concat(a.state.end_hour,':00"}){affected_rows}}')})};fetch(Ee,t).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){console.error(e)})},a.state={category:"",description:"",start_date:"",end_date:"",start_hour:"",end_hour:"",talmor_username:a.props.talmor_username,name:"",categories:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:"query{categories{category_name}}"})};fetch(Ee,t).then(function(e){return e.json()}).then(function(t){e.setState({categories:t.data.categories})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CreateCourseForm"},r.a.createElement(re.i,{variant:"h5",component:"h3"},"\u05e4\u05ea\u05d9\u05d7\u05ea \u05e7\u05d5\u05e8\u05e1 \u05d7\u05d3\u05e9"),r.a.createElement("form",null,r.a.createElement(re.h,{label:"\u05e9\u05dd \u05d4\u05e7\u05d5\u05e8\u05e1",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}}),r.a.createElement(re.h,{label:"\u05ea\u05d9\u05d0\u05d5\u05e8",value:this.state.description,multiline:!0,onChange:function(t){e.setState({description:t.target.value})}}),r.a.createElement("div",{className:"formRow"},r.a.createElement("span",null,"\u05ea\u05d0\u05e8\u05d9\u05da \u05d4\u05ea\u05d7\u05dc\u05d4:"),r.a.createElement(re.h,{value:this.state.start_date,type:"date",onChange:function(t){e.setState({start_date:t.target.value})}})),r.a.createElement("div",{className:"formRow"},r.a.createElement("span",null,"\u05ea\u05d0\u05e8\u05d9\u05da \u05e1\u05d9\u05d5\u05dd:"),r.a.createElement(re.h,{value:this.state.end_date,type:"date",onChange:function(t){e.setState({end_date:t.target.value})}})),r.a.createElement("div",{className:"formRow"},r.a.createElement("span",null,"\u05e9\u05e2\u05ea \u05d4\u05ea\u05d7\u05dc\u05d4:"),r.a.createElement(re.h,{value:this.state.start_hour,type:"time",onChange:function(t){e.setState({start_hour:t.target.value})}})),r.a.createElement("div",{className:"formRow"},r.a.createElement("span",null,"\u05e9\u05e2\u05ea \u05e1\u05d9\u05d5\u05dd:"),r.a.createElement(re.h,{value:this.state.end_hour,type:"time",onChange:function(t){e.setState({end_hour:t.target.value})}})),r.a.createElement(re.g,{value:this.state.category,onChange:function(t){e.setState({category:t.target.value})}},this.state.categories.map(function(e){return r.a.createElement(re.f,{key:e.category_name,value:e.category_name,style:{direction:"rtl"}},e.category_name)})),r.a.createElement("div",{className:"ButtonDiv"},r.a.createElement(re.d,{variant:"contained",color:"primary",onClick:this.sendToServer},"\u05e9\u05de\u05d5\u05e8  ",r.a.createElement(ce.c,null)))))}}]),t}(n.Component)),Be=Object(f.b)(function(e){return{talmor_username:e.main.userId}})(xe),De=(a(5598),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"CouresITeach"},r.a.createElement("div",{className:"floatingButton"},r.a.createElement(b.a,{to:"/createCourse",push:!0},r.a.createElement(re.e,{color:"primary","aria-label":"Add"},r.a.createElement(ce.b,null)))))}}]),t}(n.Component)),Je=Object(G.e)(Object(G.c)({main:z,course:Z}),ee(Object(G.a)())),We=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).plugin=[].concat(Object(s.a)(Object(me.jssPreset)().plugins),[ue()()]),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(le.create)({plugins:this.plugin}),t=Object(me.createGenerateClassName)();return r.a.createElement(f.a,{store:Je},r.a.createElement(ge.a,{jss:e,generateClassName:t},r.a.createElement(me.MuiThemeProvider,{theme:ve},r.a.createElement(ae.a,null),r.a.createElement(d.a,null,r.a.createElement("div",{className:"allPage"},r.a.createElement("div",{className:"header"},r.a.createElement(F,null)),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"RouterDiv"},r.a.createElement(h.a,{path:"/",exact:!0,component:qe}),r.a.createElement(h.a,{path:"/search",exact:!0,component:qe}),r.a.createElement(h.a,{path:"/profile/:username",component:Le}),r.a.createElement(h.a,{path:"/createcourse",component:Be}),r.a.createElement(h.a,{path:"/iteach",component:De}),r.a.createElement(h.a,{path:"/myCourses",component:Te})),r.a.createElement(se,null)))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5440,1,2]]]);
//# sourceMappingURL=main.803cd4f8.chunk.js.map