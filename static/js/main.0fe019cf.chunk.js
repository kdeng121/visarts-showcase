(this["webpackJsonpvisarts-showcase"]=this["webpackJsonpvisarts-showcase"]||[]).push([[0],{134:function(e,t,a){},203:function(e,t,a){e.exports=a(407)},208:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(41),l=a.n(s),r=(a(208),a(134),a(135),a(129)),o=a(50),u=a(22),c=a(34),m=a(20),h=a(35),d=a(36),b=a(7),v=a(37),p=a(175),g=a(176),E=a(178),f=a(177),S=a(174),y=a(62),O=a(194),C=a.n(O).a.initializeApp({apiKey:"AIzaSyAxi0R0RARe2uX8afqlzXrBC7_ilIjgd7Y",authDomain:"visarts-showcase.firebaseapp.com",databaseURL:"https://visarts-showcase.firebaseio.com",projectId:"visarts-showcase",storageBucket:"visarts-showcase.appspot.com",messagingSenderId:"939119617819",appId:"1:939119617819:web:1b50e3b920b6ee3e6a15be",measurementId:"G-2LCJJDS2VZ"}),j=(a(217),{firstName:"",lastName:"",netId:"",grade:"",title:"",medium:"",year:"",description:"",image:null,url:""}),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state=j,a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleFiles=a.handleFiles.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"resetState",value:function(){this.setState(j)}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(u.a)({},n,a))}},{key:"handleFiles",value:function(e){if(e.target.files[0]){var t=e.target.files[0];this.setState({image:t})}}},{key:"validateInput",value:function(){}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.image,n=C.storage().ref("Spring2020/".concat(a.name));n.put(a).then((function(){n.getDownloadURL().then((function(e){t.setState({url:e}),t.pushToDatabase(),console.log("Uploaded file successfully: ",a.name,t.state)}))})),alert("A name was submitted: "+this.state.firstName+" "+this.state.lastName)}},{key:"pushToDatabase",value:function(){var e=C.database().ref("submissions"),t={firstName:this.state.firstName,lastName:this.state.lastName,netId:this.state.netId,grade:this.state.grade,title:this.state.title,medium:this.state.medium,year:this.state.year,description:this.state.description,url:this.state.url};e.push(t)}},{key:"render",value:function(){return i.a.createElement("div",{className:"submissionForm"},i.a.createElement(p.a,{onSubmit:this.handleSubmit,className:"form"},i.a.createElement(g.a,null,i.a.createElement(E.a,null,"First Name"),i.a.createElement(f.a,{name:"firstName",type:"text",placeholder:"First Name",value:this.state.firstName,onChange:this.handleChange})),i.a.createElement(g.a,null,i.a.createElement(E.a,null,"Last Name"),i.a.createElement(f.a,{name:"lastName",type:"text",placeholder:"Last Name",value:this.state.lastName,onChange:this.handleChange})),i.a.createElement(g.a,null,i.a.createElement(E.a,null,"NetID"),i.a.createElement(f.a,{name:"netId",type:"text",placeholder:"NetID",value:this.state.netId,onChange:this.handleChange})),i.a.createElement(g.a,null,i.a.createElement(E.a,null,"Current grade"),i.a.createElement(f.a,{name:"grade",type:"select",value:this.state.grade,onChange:this.handleChange,placeholder:""},i.a.createElement("option",null),i.a.createElement("option",null,"First-year"),i.a.createElement("option",null,"Sophomore"),i.a.createElement("option",null,"Junior"),i.a.createElement("option",null,"Senior"),i.a.createElement("option",null,"Graduate/professional"))),i.a.createElement(g.a,null,i.a.createElement(E.a,null,"Upload artwork"),i.a.createElement(S.a,{type:"file",name:"file",onChange:this.handleFiles})),i.a.createElement(g.a,null,i.a.createElement(E.a,null,"Title of work"),i.a.createElement(f.a,{name:"title",type:"text",placeholder:"Title",value:this.state.title,onChange:this.handleChange})),i.a.createElement(g.a,null,i.a.createElement(E.a,null,"Medium"),i.a.createElement(f.a,{name:"medium",type:"text",placeholder:"e.g. digital, screenprint, watercolor, etc.",value:this.state.medium,onChange:this.handleChange})),i.a.createElement(g.a,null,i.a.createElement(E.a,null,"Year of creation"),i.a.createElement(f.a,{name:"year",type:"year",placeholder:"Year",value:this.state.year,onChange:this.handleChange})),i.a.createElement(g.a,null,i.a.createElement(E.a,null,"Description"),i.a.createElement(f.a,{name:"description",type:"textarea",placeholder:"Description",value:this.state.description,onChange:this.handleChange})),i.a.createElement(y.a,{color:"primary",type:"submit"},"Submit")))}}]),t}(i.a.Component),k=a(96),w=a(198),I=a(128),x=a.n(I),D=(a(192),a(404),a(166)),V=a(199),A={submissions:[],unvotedSubmissions:[],currentSubmission:{},currentVote:null},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state=A,a.currentUser=a.props.user,a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleChangeVote=a.handleChangeVote.bind(Object(b.a)(a)),a.handleNext=a.handleNext.bind(Object(b.a)(a)),a.handlePrevious=a.handlePrevious.bind(Object(b.a)(a)),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Component mounted");var t=C.database().ref("submissions"),a=C.database().ref("voters/".concat(this.currentUser.uid,"/votes"));a.on("value",(function(e){return console.log("VOTE",e.val())})),t.on("value",(function(t){var n=t.val(),i=[],s=[],l=function(e){o=Object(w.a)({},n[e],{},{id:e}),i.push(o),a.on("value",(function(t){null!=t.val()&&e in t.val()||s.push(o)}))};for(var r in n){var o;l(r)}e.setState({submissions:i,unvotedSubmissions:s,currentSubmission:s[0]})}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=C.database().ref("voters/".concat(this.currentUser.uid,"/votes")),n=Object(u.a)({},this.state.currentSubmission.id,this.state.currentVote),i=Object(k.a)(this.state.unvotedSubmissions),s=i.indexOf(this.state.currentSubmission);s>-1&&(i.splice(s,1),this.setState({unvotedSubmissions:i},(function(){0==t.state.unvotedSubmissions.length?t.setState({currentSubmission:null}):t.handleNext()||t.handlePrevious()}))),a.update(n).then((function(){return console.log("Pushed vote successful",t.state.currentVote)}))}},{key:"handleNext",value:function(e){var t=this.state.unvotedSubmissions.indexOf(this.state.currentSubmission);return t+1>=0&&t+1<this.state.unvotedSubmissions.length&&(this.setState({currentSubmission:this.state.unvotedSubmissions[t+1]}),!0)}},{key:"handlePrevious",value:function(e){var t=this.state.unvotedSubmissions.indexOf(this.state.currentSubmission);return t-1>=0&&t-1<this.state.unvotedSubmissions.length&&(this.setState({currentSubmission:this.state.unvotedSubmissions[t-1]}),!0)}},{key:"handleChangeVote",value:function(e){this.setState({currentVote:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h3",null,"Hello, ",this.currentUser.displayName,"! Please submit a vote on the following ",this.state.unvotedSubmissions.length," submissions."),i.a.createElement("div",{className:"inline"},i.a.createElement(y.a,{outline:!0,color:"secondary",onClick:this.handlePrevious},"Previous"),i.a.createElement(y.a,{outline:!0,color:"secondary",onClick:this.handleNext},"Next")),this.state.currentSubmission?i.a.createElement(D.a,{className:"themed-container"},i.a.createElement("a",{href:this.state.currentSubmission.url,target:"_blank"},i.a.createElement("img",{src:this.state.currentSubmission.url,width:"auto",height:"250"})),i.a.createElement("p",null,i.a.createElement("i",null,"(Click to enlarge)")),i.a.createElement("p",null,"Title: ",this.state.currentSubmission.title),i.a.createElement("p",null,"Description: ",this.state.currentSubmission.description),i.a.createElement("p",null,"Medium: ",this.state.currentSubmission.medium),i.a.createElement("p",null,"Dimensions: ",this.state.currentSubmission.dimensions),i.a.createElement("p",null,"Vote: ",i.a.createElement(V.a,{value:this.state.currentVote,onChange:this.handleChangeVote})),i.a.createElement(p.a,{onSubmit:this.handleSubmit},i.a.createElement(y.a,{type:"submit"},"Submit Vote")),i.a.createElement("button",{onClick:function(){console.log(e.state)}},"Get the fuckin state")):i.a.createElement("h3",null,"No more submissions to rate!"))}}]),t}(i.a.Component),F=a(200),G=C.auth(),T={googleProvider:new x.a.auth.GoogleAuthProvider},U=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.signOut,n=e.signInWithGoogle;return i.a.createElement("div",null,i.a.createElement("h1",null,"VOTING PAGE"),i.a.createElement(P,{user:t}),t?i.a.createElement("button",{onClick:a},"Sign out"):i.a.createElement("button",{onClick:n},"Sign in with Google"))}}]),t}(i.a.Component),R=Object(F.a)({providers:T,firebaseAppAuth:G})(U),L=a(424),J=a(428),M=a(431),z=a(432),B=a(426),W=a(429),Y=a(430),_=a(427);Object(L.a)({table:{minWidth:650}});function X(e,t,a,n,i){return{name:e,calories:t,fat:a,carbs:n,protein:i}}X("Frozen yoghurt",159,6,24,4),X("Ice cream sandwich",237,9,37,4.3),X("Eclair",262,16,24,6),X("Cupcake",305,3.7,67,4.3),X("Gingerbread",356,16,49,3.9);var q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={data:{},submissions:[]},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=C.database().ref("submissions"),a=C.database().ref("voters");t.on("value",(function(t){var n=t.val(),i={},s=function(t){i[t]={votes:[],title:n[t].title,description:n[t].description,url:n[t].url,firstName:n[t].firstName,lastName:n[t].lastName,id:t},a.on("value",(function(e){var a=e.val();for(var n in a){C.database().ref("voters/".concat(n,"/votes")).on("value",(function(e){var a=e.val();if(t in a){var n=a[t];i[t].votes.push(n)}}))}})),e.setState({data:i})};for(var l in n)s(l);var r=[];Object.keys(e.state.data).forEach((function(t){r.push(e.state.data[t])})),e.setState({submissions:r})}))}},{key:"render",value:function(){var e=this;return i.a.createElement(B.a,{component:_.a},i.a.createElement(J.a,{"aria-label":"simple table"},i.a.createElement(W.a,null,i.a.createElement(Y.a,null,i.a.createElement(z.a,null,i.a.createElement("b",null,"Title")),i.a.createElement(z.a,{align:"right"},i.a.createElement("b",null,"URL")),i.a.createElement(z.a,{align:"right"},i.a.createElement("b",null,"Description")),i.a.createElement(z.a,{align:"right"},i.a.createElement("b",null,"First Name")),i.a.createElement(z.a,{align:"right"},i.a.createElement("b",null,"Last Name")),i.a.createElement(z.a,{align:"right"},i.a.createElement("b",null,"Total Votes")),i.a.createElement(z.a,{align:"right"},i.a.createElement("b",null,"Average Rating")),i.a.createElement(z.a,{align:"right"},i.a.createElement("b",null,"Median Rating")))),i.a.createElement(M.a,null,this.state.submissions.map((function(e){return i.a.createElement(Y.a,{key:e.id},i.a.createElement(z.a,{component:"th",scope:"row"},e.title),i.a.createElement(z.a,{align:"right"},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("img",{src:e.url,width:"auto",height:"50"}))),i.a.createElement(z.a,{align:"right"},e.description),i.a.createElement(z.a,{align:"right"},e.firstName),i.a.createElement(z.a,{align:"right"},e.lastName))})))),i.a.createElement("button",{onClick:function(){console.log(e.state)}},"Get the fuckin state"))}}]),t}(i.a.Component),H=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Admin Sign In"),i.a.createElement(q,null))}}]),t}(i.a.Component);var K=function(){return i.a.createElement("div",{className:"App-style"},i.a.createElement("h2",{align:"center"},i.a.createElement("b",null,"VisArts Spring Showcase Submission")),i.a.createElement(r.a,{basename:"/"},i.a.createElement(o.a,{exact:!0,path:"/",component:N}),i.a.createElement(o.a,{path:"/voting",component:R}),i.a.createElement(o.a,{path:"/admin",component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[203,1,2]]]);
//# sourceMappingURL=main.0fe019cf.chunk.js.map