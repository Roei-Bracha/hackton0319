(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5440:function(e,t,a){e.exports=a(5602)},5445:function(e,t,a){},5450:function(e,t,a){},5580:function(e,t,a){},5594:function(e,t,a){},5595:function(e,t,a){},5596:function(e,t,a){},5597:function(e,t,a){},5598:function(e,t,a){},5599:function(e,t,a){},5600:function(e,t,a){},5602:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),s=(a(5445),a(161)),l=a(16),i=a(17),u=a(19),m=a(18),p=a(20),h=a(5607),d=a(5606),f=a(30),E=(a(5450),a(67)),g=a.n(E),v=a(5605);function b(){return r.a.createElement(v.a,{to:"/profile/harry",push:!0},r.a.createElement(g.a,{src:"https://images.pottermore.com/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg"}))}var _=a(31),y=a(29),O=a.n(y),j=a(72),N=a.n(j),S=a(71),w=a.n(S),C=a(70),k=a.n(C),P=a(69),R=a.n(P),q=a(47),T=a.n(q),M=a(37),I=a.n(M),L=a(68),D=a.n(L),F=a(53),x=a.n(F);function B(){var e=Object(n.useState)("Login"),t=Object(_.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(_.a)(o,2),l=s[0],i=s[1],u=Object(n.useState)(""),m=Object(_.a)(u,2),p=m[0],h=m[1],d=Object(n.useState)(""),f=Object(_.a)(d,2),E=f[0],g=f[1],v=Object(n.useState)(!1),b=Object(_.a)(v,2),y=b[0],j=b[1],N=Object(n.useState)(""),S=Object(_.a)(N,2),C=S[0],P=S[1],q=Object(n.useState)(""),M=Object(_.a)(q,2);M[0],M[1];return r.a.createElement("div",null,r.a.createElement(D.a,{value:a,variant:"fullWidth",onChange:function(e,t){c(t)}},r.a.createElement(x.a,{value:"Login",label:"Login"}),r.a.createElement(x.a,{value:"Register",label:"Register"})),r.a.createElement(R.a,null,"Login"===a?"Login":"Register"),r.a.createElement(k.a,null,r.a.createElement(I.a,{fullWidth:!0,required:!0},r.a.createElement(T.a,{label:"Uesr name",value:l,onChange:function(e){i(e.target.value)}})),r.a.createElement(I.a,{fullWidth:!0,required:!0},r.a.createElement(T.a,{label:"Password",value:p,error:y,onChange:function(e){!function(e){var t=e.target.value;if(h(t),"Register"===a)""===t?(P(""),j(!1)):t.length<6?(P("the password should me at list 6 characther long"),j(!0)):(P(""),j(!1))}(e)},type:"password",helperText:C})),"Register"===a&&r.a.createElement(I.a,{fullWidth:!0,required:!0},r.a.createElement(T.a,{label:"Re-type Password",value:E,error:p!==E&&0!==E.length,onChange:function(e){g(e.target.value)},type:"password"}))),r.a.createElement(w.a,null,r.a.createElement(O.a,{color:"primary"},a)))}function J(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(O.a,{onClick:function(){c(!0)},color:"inherit"},"Login / Regiter"),a&&r.a.createElement(N.a,{open:a,onClose:function(){c(!1)},className:"Modal"},r.a.createElement(B,null)))}var W=a(73),Y=a.n(W),U=a(74),A=a.n(U),H=a(23),Q=a.n(H);var X=Object(f.b)(function(e){return{userId:e.main.userId}})(function(e){return r.a.createElement(Y.a,{style:{position:"relative"},className:"AppNavBar"},r.a.createElement(A.a,{className:"Toolbar"},r.a.createElement(Q.a,{variant:"h6",color:"inherit"},"\u05ea\u05dc\u05de\u05d5\u05e8"),e.userId?r.a.createElement(b,null):r.a.createElement(J,null)))}),G=a(39),V=a(38),$={userId:"harry"},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_USER_NAME":return Object(V.a)({},e,{userId:t.userId});default:return e}},K={courses:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COURSES_INIT":return Object(V.a)({},e,{courses:t.courses});default:return e}},ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,te=a(77),ae=a.n(te),ne=a(55),re=a(15),ce=a(24),oe=a(5608),se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={value:"search",redirect:!1},a.changeMode=a.changeMode.bind(Object(ne.a)(Object(ne.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"changeMode",value:function(e,t){this.setState({value:t,redirect:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"bottomBar"},this.state.redirect&&r.a.createElement(oe.a,{push:!0,to:"/".concat(this.state.value)}),r.a.createElement(re.b,{value:this.state.value,onChange:this.changeMode,showLabels:!0},r.a.createElement(re.c,{label:"\u05d0\u05e0\u05d9 \u05de\u05dc\u05de\u05d3",icon:r.a.createElement(ce.a,null),value:"iTeach"}),r.a.createElement(re.c,{label:"\u05d7\u05e4\u05e9 \u05e7\u05d5\u05e8\u05e1",icon:r.a.createElement(ce.f,null),value:"search"}),r.a.createElement(re.c,{label:"\u05d4\u05e7\u05d5\u05e8\u05e1\u05d9\u05dd \u05e9\u05dc\u05d9",icon:r.a.createElement(ce.e,null),value:"myCourses"})))}}]),t}(r.a.Component),le=(a(5580),a(52)),ie=a(157),ue=a.n(ie),me=a(21),pe=a(158),he=a.n(pe),de=a(159),fe=a.n(de),Ee="https://grpahql-talmor.herokuapp.com/v1alpha1/graphql",ge=Object(me.createMuiTheme)({direction:"rtl",palette:{primary:he.a,secondary:fe.a}});console.log(ge);var ve=a(160),be=a.n(ve),_e=a(28),ye=a.n(_e),Oe=a(76),je=a.n(Oe),Ne=a(75),Se=a.n(Ne),we=a(54),Ce=a.n(we),ke=(a(5594),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).joinToCourse=function(e,t){e.stopPropagation(),console.log(t),console.log(a.props.username);var n={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:'mutation{insert_registrations(objects:{course_id:"'.concat(t,'",has_completed:false,talmor_id:"').concat(a.props.username,'"}){affected_rows}}')})};fetch(Ee,n).then(function(e){return e.json()}).then(function(){a.setState({openSuccesReg:!0}),alert("\u05e0\u05e8\u05e9\u05de\u05ea \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4!")})},a.unSignToCourse=function(e,t){e.stopPropagation();var n={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:'mutation{delete_registrations(where:{_and:{talmor_id:{_eq:"'.concat(a.props.username,'"},course_id:{_eq:"').concat(t,'"}}}){affected_rows}}')})};fetch(Ee,n).then(function(e){return e.json()}).then(function(){a.setState({openSuccesReg:!0,isRemoved:!0}),alert("\u05d1\u05d9\u05d8\u05d5\u05dc \u05d4\u05d4\u05e9\u05ea\u05ea\u05e4\u05d5\u05ea \u05e0\u05e8\u05e9\u05dd \u05d1\u05de\u05e2\u05e8\u05db\u05ea")})},a.clickOpen=function(){return a.setState(function(e){return{isOpen:!e.isOpen}})},a.handleCloseSuccesReg=function(){a.setState({openSuccesReg:!1})},a.state={isOpen:!1,isRemoved:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.isOpen,n=(t.openSuccesReg,t.isRemoved),c=this.props.course,o=(c.approved,c.course_id),s=c.description,l=c.photo_url,i=c.start_date,u=c.end_date,m=c.start_hour,p=c.end_hour,h=(c.is_one_time,c.talmor_username,c.max_participants,c.min_participants,c.category),d=c.name,f=c.location,E=c.student,g=c.previous_knowledge,b=this.props.isSigned;return r.a.createElement(ye.a,{className:"coursePaper",onClick:this.clickOpen},r.a.createElement("div",{className:"coursePreview"},r.a.createElement("div",{className:"courseHeader",style:{backgroundColor:ge.palette.primary[200]}},r.a.createElement("div",{className:"coursePhotoWrap"},r.a.createElement("img",{src:l,className:"coursePhoto"})),a?r.a.createElement(Se.a,{className:"openIcon"}):r.a.createElement(je.a,{className:"openIcon"})),r.a.createElement("div",{className:"courseLabel"},r.a.createElement("span",{className:"courseName"},"".concat(d," (").concat(h,")"))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05ea\u05d0\u05e8\u05d9\u05db\u05d9\u05dd:"),r.a.createElement("span",null,"".concat(Ce()(i).format("DD/MM/YYYY"),"-").concat(Ce()(u).format("DD/MM/YYYY")))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05de\u05d9\u05e7\u05d5\u05dd:"),r.a.createElement("span",null,f.name)),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05de\u05d5\u05e8\u05d4:"),r.a.createElement(v.a,{push:!0,to:"/profile/".concat(E.username)},r.a.createElement("span",null,"".concat(E.userByUsername.first_name," ").concat(E.userByUsername.last_name)))),a?r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05ea\u05d9\u05d0\u05d5\u05e8 \u05e7\u05d5\u05e8\u05e1:"),r.a.createElement("span",null,s)),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05e9\u05e2\u05d5\u05ea:"),r.a.createElement("span",null,"".concat(m,"-").concat(p))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05d9\u05d3\u05e2 \u05e7\u05d5\u05d3\u05dd \u05d3\u05e8\u05d5\u05e9:"),r.a.createElement("span",null,g)),r.a.createElement("div",{className:"footer"},b?r.a.createElement(O.a,{variant:"contained",color:"secondary",className:"joinButton",onClick:function(t){return e.unSignToCourse(t,o)}},r.a.createElement("span",null," \u05d1\u05d8\u05dc \u05d4\u05e9\u05ea\u05ea\u05e4\u05d5\u05ea \u05d1\u05e7\u05d5\u05e8\u05e1"),r.a.createElement(ce.e,{style:{marginRight:"8px"}})):r.a.createElement(O.a,{variant:"contained",color:"primary",className:"joinButton",onClick:function(t){return e.joinToCourse(t,o)}},r.a.createElement("span",null," \u05d4\u05e6\u05d8\u05e8\u05e3 \u05dc\u05e7\u05d5\u05e8\u05e1"),r.a.createElement(ce.e,{style:{marginRight:"8px"}}))),n?r.a.createElement(oe.a,{to:"/search",push:!0}):null,r.a.createElement("div",{className:"row"})):null))}}]),t}(n.Component)),Pe=Object(f.b)(function(e){return{username:e.main.userId}})(ke),Re=(a(5595),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:'query{registrations(where:{talmor_id:{_eq:"'.concat(a.props.username,'"}}){course{approved name course_id description start_date end_date start_hour end_hour is_one_time photo_url talmor_username student{username userByUsername{first_name last_name}bio school{name}}max_participants min_participants previous_knowledge category location{name address description}}}}')})};fetch(Ee,e).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.data.registrations.map(function(e){return e.course});a.setState({courses:t})}).catch(function(e){console.error(e)})},a.state={courses:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.courses;return r.a.createElement("div",{className:"myCourses"},e?e.map(function(e){return r.a.createElement(Pe,{key:e.course_id,course:e,isSigned:!0})}):null)}}]),t}(n.Component)),qe=Object(f.b)(function(e){return{username:e.main.userId}})(Re),Te=(a(5596),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:"query{categories{category_name}}"})};fetch(Ee,e).then(function(e){return e.json()}).then(function(e){var t=e.data.categories;a.setState({categories:t})}).catch(function(e){console.error(e)})},a.state={categories:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.categories,t=this.props.changeCategory;return r.a.createElement("div",{className:"filter"},r.a.createElement(ye.a,null,r.a.createElement("div",{className:"filterContent"},r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"rowLabel"},"\u05e7\u05d8\u05d2\u05d5\u05e8\u05d9\u05d4:"),r.a.createElement("select",{onChange:function(e){return t(e.target.value)}},e.map(function(e){return r.a.createElement("option",{key:e.category_name,value:e.category_name},e.category_name)}))))))}}]),t}(n.Component)),Me=(a(5597),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:"query{courses{approved name course_id description start_date end_date start_hour end_hour is_one_time photo_url talmor_username student{username userByUsername{first_name last_name}bio school{name}}max_participants min_participants previous_knowledge category location{name address description}}}"})};fetch(Ee,e).then(function(e){return e.json()}).then(function(e){var t=e.data.courses;a.setState({courses:t})}).catch(function(e){console.error(e)})},a.changeCategoryFilter=function(e){console.log(e),a.setState({categoryFilter:e})},a.changeFilterOpen=function(){a.setState(function(e){return{isFilterOpen:!e.isFilterOpen}})},a.state={isFilterOpen:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.courses,a=e.categoryFilter,n=e.isFilterOpen;return r.a.createElement("div",{className:"homeWithFilter"},n?r.a.createElement(Te,{changeCategory:this.changeCategoryFilter,onClick:this.changeFilterOpen}):r.a.createElement(ce.c,{onClick:this.changeFilterOpen}),r.a.createElement("div",{className:"home"},r.a.createElement("span",null,"\u05e7\u05d5\u05e8\u05e1\u05d9\u05dd \u05e9\u05d0\u05de\u05d5\u05e8\u05d9\u05dd \u05dc\u05d4\u05e4\u05ea\u05d7 \u05d1\u05d1\u05d9\u05ea \u05d4\u05e1\u05e4\u05e8 \u05e9\u05dc\u05da:"),t?t.filter(function(e){return!a||e.category===a}).map(function(e){return r.a.createElement(Pe,{key:e.course_id,course:e,isSigned:!1})}):null))}}]),t}(n.Component)),Ie=(a(5598),a(107)),Le=a.n(Ie),De=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateState=function(e){a.setState({user:Object(V.a)({},e)})},a.state={loading:!0,user:{username:"loading"}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:'query{users(where:{username:{_eq:"'.concat(this.props.match.params.username,'"}}){first_name last_name email phone_number phone_number photo_url school{name city}}students(where:{username:{_eq:"').concat(this.props.match.params.username,'"}}){city interests{category_name}bio}}')})};fetch(Ee,t).then(function(e){return e.json()}).then(function(t){e.setState({loading:!1,user:Object(V.a)({},t.data.users[0],t.data.students[0])})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement(ye.a,{className:"Profile"},r.a.createElement(Q.a,{variant:"h5",component:"h3"},this.state.loading?r.a.createElement(Le.a,null):r.a.createElement("span",{style:{display:"flex",alignItems:"center"}},r.a.createElement(re.a,{style:{margin:"5px",width:60,height:60},src:this.state.user.photo_url})," ",this.state.user.first_name," ",this.state.user.last_name," ")),r.a.createElement("br",null),this.state.loading?r.a.createElement("p",null," ",r.a.createElement(Le.a,{count:8})," "):r.a.createElement("div",null,r.a.createElement(Q.a,null,r.a.createElement("b",null,"\u05e7\u05e6\u05ea \u05e2\u05dc \u05e2\u05e6\u05de\u05d9:")),r.a.createElement(Q.a,null,this.state.user.bio),r.a.createElement(Q.a,null,r.a.createElement("b",null,"\u05d1\u05d9\u05ea \u05e1\u05e4\u05e8: "),this.state.user.school.name),r.a.createElement(Q.a,null,r.a.createElement("b",null," \u05e2\u05d9\u05e8: "),this.state.user.city),r.a.createElement(Q.a,null,r.a.createElement("b",null," \u05de\u05e1\u05e4\u05e8 \u05d8\u05dc\u05e4\u05d5\u05df: "),this.state.user.phone_number),r.a.createElement(Q.a,null,r.a.createElement("b",null,"\u05d0\u05d9\u05de\u05d9\u05d9\u05dc: "),this.state.user.email))))}}]),t}(r.a.Component),Fe=(a(5599),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).sendToServer=function(e){e.preventDefault(),console.log(a.state);var t={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:'mutation{insert_courses(objects:{category: "'.concat(a.state.category,'",description: "').concat(a.state.description,'",end_date: "').concat(a.state.end_date,'",start_date: "').concat(a.state.start_date,'",is_one_time: true,max_participants: 10,location_id:"2e681815-d21d-471f-89c2-d4e389e24097",approved:true,talmor_username:"').concat(a.props.talmor_username,'",name:"').concat(a.state.name,'",photo_url:"aaaaa",start_hour:"').concat(a.state.start_hour,':00",end_hour:"').concat(a.state.end_hour,':00"}){affected_rows}}')})};fetch(Ee,t).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){console.error(e)})},a.state={category:"",description:"",start_date:"",end_date:"",start_hour:"",end_hour:"",talmor_username:a.props.talmor_username,name:"",categories:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify({query:"query{categories{category_name}}"})};fetch(Ee,t).then(function(e){return e.json()}).then(function(t){e.setState({categories:t.data.categories})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CreateCourseForm"},r.a.createElement(re.i,{variant:"h5",component:"h3"},"\u05e4\u05ea\u05d9\u05d7\u05ea \u05e7\u05d5\u05e8\u05e1 \u05d7\u05d3\u05e9"),r.a.createElement("form",null,r.a.createElement(re.h,{label:"\u05e9\u05dd \u05d4\u05e7\u05d5\u05e8\u05e1",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}}),r.a.createElement(re.h,{label:"\u05ea\u05d9\u05d0\u05d5\u05e8",value:this.state.description,multiline:!0,onChange:function(t){e.setState({description:t.target.value})}}),r.a.createElement("div",{className:"formRow"},r.a.createElement("span",null,"\u05ea\u05d0\u05e8\u05d9\u05da \u05d4\u05ea\u05d7\u05dc\u05d4:"),r.a.createElement(re.h,{value:this.state.start_date,type:"date",onChange:function(t){e.setState({start_date:t.target.value})}})),r.a.createElement("div",{className:"formRow"},r.a.createElement("span",null,"\u05ea\u05d0\u05e8\u05d9\u05da \u05e1\u05d9\u05d5\u05dd:"),r.a.createElement(re.h,{value:this.state.end_date,type:"date",onChange:function(t){e.setState({end_date:t.target.value})}})),r.a.createElement("div",{className:"formRow"},r.a.createElement("span",null,"\u05e9\u05e2\u05ea \u05d4\u05ea\u05d7\u05dc\u05d4:"),r.a.createElement(re.h,{value:this.state.start_hour,type:"time",onChange:function(t){e.setState({start_hour:t.target.value})}})),r.a.createElement("div",{className:"formRow"},r.a.createElement("span",null,"\u05e9\u05e2\u05ea \u05e1\u05d9\u05d5\u05dd:"),r.a.createElement(re.h,{value:this.state.end_hour,type:"time",onChange:function(t){e.setState({end_hour:t.target.value})}})),r.a.createElement(re.g,{value:this.state.category,onChange:function(t){e.setState({category:t.target.value})}},this.state.categories.map(function(e){return r.a.createElement(re.f,{key:e.category_name,value:e.category_name,style:{direction:"rtl"}},e.category_name)})),r.a.createElement("div",{className:"ButtonDiv"},r.a.createElement(re.d,{variant:"contained",color:"primary",onClick:this.sendToServer},"\u05e9\u05de\u05d5\u05e8  ",r.a.createElement(ce.d,null)))))}}]),t}(n.Component)),xe=Object(f.b)(function(e){return{talmor_username:e.main.userId}})(Fe),Be=(a(5600),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"CouresITeach"},r.a.createElement("div",{className:"floatingButton"},r.a.createElement(v.a,{to:"/createCourse",push:!0},r.a.createElement(re.e,{color:"primary","aria-label":"Add"},r.a.createElement(ce.b,null)))))}}]),t}(n.Component)),Je=Object(G.e)(Object(G.c)({main:z,course:Z}),ee(Object(G.a)())),We=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).plugin=[].concat(Object(s.a)(Object(me.jssPreset)().plugins),[ue()()]),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(le.create)({plugins:this.plugin}),t=Object(me.createGenerateClassName)();return r.a.createElement(f.a,{store:Je},r.a.createElement(be.a,{jss:e,generateClassName:t},r.a.createElement(me.MuiThemeProvider,{theme:ge},r.a.createElement(ae.a,null),r.a.createElement(h.a,null,r.a.createElement("div",{className:"allPage"},r.a.createElement("div",{className:"header"},r.a.createElement(X,null)),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"RouterDiv"},r.a.createElement(d.a,{path:"/",exact:!0,component:Me}),r.a.createElement(d.a,{path:"/search",exact:!0,component:Me}),r.a.createElement(d.a,{path:"/profile/:username",component:De}),r.a.createElement(d.a,{path:"/createcourse",component:xe}),r.a.createElement(d.a,{path:"/iteach",component:Be}),r.a.createElement(d.a,{path:"/myCourses",component:qe})),r.a.createElement(se,null)))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5440,1,2]]]);
//# sourceMappingURL=main.36558824.chunk.js.map