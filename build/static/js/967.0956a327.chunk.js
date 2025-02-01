"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[967],{1205:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(344),o=n(5969),i=n(6060),s=n(2604),r=n(5527),d=n(1556),c=n(1949),l=n(8500),h=n(5043),p=n(864),m=n.n(p),x=n(3216),u=n(6240),g=n(2960);const f=e=>{let{children:t}=e;const n=(0,u.A)(),{settings:a}=(0,c.A)(),i=a.themes[a.layout1Settings.leftSidebar.theme]||n;return(0,g.jsx)(o.A,{theme:i,children:t})};var b=n(4535),y=n(5212),S=n(1472),j=n(8739);const A=(0,b.Ay)(j.A)((()=>({top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"})));(0,b.Ay)(S.L9)((e=>{let{theme:t}=e;return{fontWeight:700,fontSize:"1rem",cursor:"pointer",borderRadius:"4px",marginBottom:"2.5rem",letterSpacing:"1.5px",padding:".25rem .5rem",transform:"rotate(90deg)",color:t.palette.secondary.main,backgroundColor:t.palette.primary.dark,"&:hover, &.open":{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText}}})),(0,b.Ay)("div")((e=>{let{theme:t}=e;return{top:0,right:0,zIndex:50,width:320,display:"flex",height:"100vh",position:"fixed",paddingBottom:"32px",flexDirection:"column",boxShadow:y.p[12],background:t.palette.background.default,"& .helpText":{margin:"0px .5rem 1rem"}}})),(0,b.Ay)(A)((()=>({width:"100%",height:"152px !important",cursor:"pointer",marginTop:"12px",marginBottom:"12px","& .layout-name":{display:"none"},"&:hover .layout-name":{zIndex:12,width:"100%",height:"100%",display:"flex",alignItems:"center",position:"absolute",justifyContent:"center",background:"rgba(0,0,0,0.3)"}}))),(0,b.Ay)("div")((()=>({minHeight:58,display:"flex",alignItems:"center",marginBottom:"16px",padding:"14px 20px",boxShadow:y.p[6],justifyContent:"space-between"}))),(0,b.Ay)("img")((()=>({width:"100%"}))),(0,b.Ay)(m())((()=>({paddingLeft:"16px",paddingRight:"16px"}))),(0,i.A)("div")((e=>{let{theme:t,width:n}=e;return{position:"fixed",height:"100vh",width:n,right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:t.shadows[8],backgroundColor:t.palette.primary.main,zIndex:98,transition:"all 0.15s ease",color:t.palette.text.primary,"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:e=>e.width},".matx-customizer":{right:e=>e.width}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:e=>`calc(100% - ${e.width})`}}}}})),(0,i.A)("div")((()=>({position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}})));var w=n(4692),I=n(4598),v=n(9787),T=n(1e3),k=n(854),C=n.n(k);const _=(0,b.Ay)(T.A)((()=>({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 18px 20px 29px"}))),N=(0,b.Ay)(S.L9)((e=>{let{mode:t}=e;return{fontSize:18,marginLeft:".5rem",display:"compact"===t?"none":"block"}})),L=e=>{let{children:t}=e;const{settings:n}=(0,c.A)(),a=n.layout1Settings.leftSidebar,{mode:o}=a,[i,s]=(0,h.useState)({name:"",motto:"",address:"",phone:"",phonetwo:"",email:"",sessionStart:"",sessionEnd:"",schoolLogo:""}),r="https://eduproapi.vercel.app";return(0,h.useEffect)((()=>{(async()=>{try{const e=await C().get(`${r}/api/account-setting`),{data:t}=e.data;s(t)}catch(e){console.error("Error fetching school settings:",e)}})()}),[r]),(0,g.jsxs)(_,{children:[(0,g.jsx)(T.A,{display:"flex",alignItems:"center",children:(0,g.jsx)(N,{mode:o,className:"sidenavHoverShow",children:(0,g.jsx)("img",{src:`https://edupros.s3.amazonaws.com/${i.schoolLogo}`,style:{width:"120px",height:"90px"}})})}),(0,g.jsx)(T.A,{className:"sidenavHoverShow",sx:{display:"compact"===o?"none":"block"},children:t||null})]})},E=[{name:"Dashboard",path:"/dashboard/admin",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"dashboard"})},{name:"Admin",path:"/admin/admin",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"person"})},{name:"Student",icon:"people",children:[{name:"Admit Student",iconText:"SI",path:"/dashboard/student_add"},{name:"Student Information",iconText:"SU",children:[{name:"Class J.S.1 ",iconText:"SI",path:"/dashboard/jss1-student_information"},{name:"Class J.S.2",iconText:"SI",path:"/dashboard/jss2-student_information"},{name:"Class J.S.3",iconText:"SI",path:"/dashboard/jss3-student_information"},{name:"Class S.S.1.S",iconText:"SI",path:"/dashboard/ss1-science-student_information"},{name:"Class S.S.1.A",iconText:"SI",path:"/dashboard/ss1-art-student_information"},{name:"Class S.S.1.C",iconText:"SI",path:"/dashboard/ss1-commercial-student_information"},{name:"Class S.S.2.S",iconText:"SI",path:"/dashboard/ss2-science-student_information"},{name:"Class S.S.2.A",iconText:"SI",path:"/dashboard/ss2-art-student_information"},{name:"Class S.S.2.C",iconText:"SI",path:"/dashboard/ss2-commercial-student_information"},{name:"Class S.S.3.S",iconText:"SI",path:"/dashboard/ss3-science-student_information"},{name:"Class S.S.3.A",iconText:"SI",path:"/dashboard/ss3-art-student_information"},{name:"Class S.S.3.C",iconText:"SI",path:"/dashboard/ss3-commercial-student_information"}]},{name:"Student Promotion",iconText:"404",path:"/dashboard/promotion"}]},{name:"Affective Psychomotor",icon:"person",children:[{name:"Manage Category",iconText:"SI",path:"/dashboard/psychomotor_report_cat"},{name:"Manage Student Report",iconText:"SI",path:"/dashboard/manage_psychomotor"}]},{name:"Teacher",path:"/dashboard/teacher",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"person"})},{name:"Noticeboard",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"info"}),path:"/dashboard/noticeboard"},{name:"Parents",path:"/dashboard/parent",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"person"})},{name:"Class",icon:"school",children:[{name:"Manage Class",iconText:"SI",path:"/dashboard/class"},{name:"Academic Syllabus",iconText:"SI",path:"/dashboard/syllabus"}]},{name:"Exam",icon:"assignment",children:[{name:"Exam List",iconText:"SI",path:"/dashboard/examlist"},{name:"Exam Grades",iconText:"SI",path:"/dashboard/grade"},{name:"Manage Marks",iconText:"SI",path:"/dashboard/exam"},{name:"On-Screen Marking",iconText:"SI",path:"/dashboard/onscreen-marking"},{name:"Tabulation Sheet",iconText:"SI",path:"/dashboard/tabulation-sheet"}]},{name:"Online Exam",icon:"computer",children:[{name:"Create Online Exam",iconText:"SI",path:"/dashboard/online-exam"},{name:"Manage Online Exam",iconText:"SI",path:"/dashboard/manage-online-exam"}]},{name:"Past Questions",icon:"assignment",children:[{name:"Add Past Questions",iconText:"SI",path:"/dashboard/addpq"}]},{name:"Accounting",icon:"payment",children:[{name:"Create Student Receipt",iconText:"SI",path:"/dashboard/student-receipt"},{name:"Student Payments",iconText:"SI",path:"/dashboard/student-payment"}]},{name:"Study Material",path:"/dashboard/study-material",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"group_work"})},{name:"Daily Attendance",path:"/dashboard/attendance",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"access_alarm"})},{name:"Profile",path:"/dashboard/profile",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"person"})},{name:"Setting",path:"/dashboard/setting",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"settings"})},{name:"Account",path:"/dashboard/account",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"edit"})}],O=[{name:"Dashboard",path:"/student/dashboard/default",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"dashboard"})},{name:"Teachers",path:"/student/dashboard/teacher",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"person"})},{name:"Subject",path:"/student/dashboard/subject",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"book"})},{name:"Exam Mark/Report Card",path:"/student/dashboard/student_mark_sheet",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"assignment"})},{name:"Past Questions",icon:"assignment",children:[{name:"View Past Questions",iconText:"SI",path:"/student/dashboard/view-past-questions"}]},{name:"Online Exam",icon:"assignment",children:[{name:"Manage Online Exam",iconText:"SI",path:"student/dashboard/manage-online-exam"},{name:"View Result",iconText:"SI",path:"/student/dashboard/manage-online-result"}]},{name:" Payment History",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"payment"}),path:"/student/dashboard/student-payment"},{name:" Attendance",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"access_alarm"}),path:"/student/dashboard/student-payment"},{name:"Study Material",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"group_work"}),path:"/student/dashboard/student-payment"},{name:"Profile",path:"/dashboard/profile",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"person"})}],M=()=>[{name:"Dashboard",path:"/teacher/dashboard",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"dashboard"})},{name:"Student",icon:"people",children:[{name:"Student Information",iconText:"SU",children:[]}]},{name:"Affective Psychomotor",icon:"person",children:[{name:"Manage Category",iconText:"SI",path:"/dashboard/psychomotor_report_cat"},{name:"Manage Student Report",iconText:"SI",path:"/dashboard/manage_psychomotor"}]},{name:"Teachers",path:"/teacher/dashboard/teacher",icon:"dashboard"},{name:"Subject",icon:"book",children:[]},{name:"Exam",icon:"assignment",children:[{name:"Manage Marks",iconText:"SI",path:"/dashboard/exam"},{name:"Question Paper",iconText:"SI",path:"/dashboard/manage-mark-view"},{name:"On-Screen Marking",iconText:"SI",path:"/dashboard/onscreen-marking"}]},{name:"Online Exam",icon:"computer",children:[{name:"Create Online Exam",iconText:"SI",path:"/dashboard/online-exam"},{name:"Manage Online Exam",iconText:"SI",path:"/dashboard/manage-online-exam"}]},{name:"Profile",path:"/dashboard/profile",icon:(0,g.jsx)("span",{style:{color:"#ffc107"},children:"person"})}];var R=n(2754);const D=(0,i.A)(m())((()=>({paddingLeft:"1rem",paddingRight:"1rem",position:"relative"}))),z=(0,i.A)("div")((e=>{let{theme:t}=e;return{position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",zIndex:-1,[t.breakpoints.up("lg")]:{display:"none"}}})),P=e=>{let{children:t}=e;const{settings:n,updateSettings:a}=(0,c.A)(),{user:o}=(0,R.A)();let i=[];switch(o.role){case"admin":default:i=E;break;case"student":i=O;break;case"teacher":i=M}return(0,g.jsxs)(h.Fragment,{children:[(0,g.jsxs)(D,{options:{suppressScrollX:!0},children:[t,(0,g.jsx)(d.Gd,{items:i})]}),(0,g.jsx)(z,{onClick:()=>(e=>{let t=n.activeLayout+"Settings",o=n[t];a({...n,[t]:{...o,leftSidebar:{...o.leftSidebar,...e}}})})({mode:"close"})})]})},F=(0,i.A)(s.A)((e=>{let{theme:t,width:n,primaryBg:a,bgImgURL:o}=e;return{position:"fixed",top:0,left:0,height:"100vh",width:n,boxShadow:y.p[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.palette.text.primary,transition:"all 250ms ease-in-out",backgroundImage:`linear-gradient(to bottom, rgba(${a}, 0.96), rgba(${a}, 0.96)), url(${o})`,"&:hover":{width:l.FM,"& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}})),$=(0,i.A)(s.A)((()=>({height:"100%",display:"flex",flexDirection:"column"}))),B=()=>{const e=(0,r.A)(),{settings:t,updateSettings:n}=(0,c.A)(),a=t.layout1Settings.leftSidebar,{mode:o,bgImgURL:i}=a,s=(0,v.zs)(e.palette.primary.main);return(0,g.jsx)(F,{bgImgURL:i,primaryBg:s,width:"compact"===o?l.YN:l.FM,children:(0,g.jsxs)($,{children:[(0,g.jsx)(L,{children:(0,g.jsx)(w.A,{smDown:!0,children:(0,g.jsx)(I.A,{onChange:()=>{var e;e={mode:"compact"===o?"full":"compact"},n({layout1Settings:{leftSidebar:{...e}}})},checked:"full"!==a.mode,color:"secondary",size:"small"})})}),(0,g.jsx)(P,{})]})})},G=h.memo(B);var H=n(7392),U=n(818),W=n(4208),Q=n(7830),J=n(5475),Y=n(4109),Z=n(5865);const q=(e,t)=>{switch(t.type){case"LOAD_NOTIFICATIONS":return{...e,notifications:t.payload};case"DELETE_NOTIFICATION":return{...e,notifications:e.notifications.filter((e=>e.id!==t.payload))};case"CLEAR_NOTIFICATIONS":return{...e,notifications:[]};default:return{...e}}},V={notifications:[]},X=(0,h.createContext)({notifications:[],deleteNotification:()=>{},clearNotifications:()=>{},getNotifications:()=>{},createNotification:()=>{}}),K=e=>{let{settings:t,children:n}=e;const[a,o]=(0,h.useReducer)(q,V),i=async()=>{try{const e=await C().get("/api/notification");o({type:"LOAD_NOTIFICATIONS",payload:e.data})}catch(e){console.error(e)}};return(0,h.useEffect)((()=>{(async()=>{try{const e=await C().get("https://eduproapi.vercel.app/api/get-all-notices");o({type:"LOAD_NOTIFICATIONS",payload:e.data})}catch(e){console.error("Error fetching notices:",e),e.response&&console.error("Server responded with:",e.response.data)}})()}),[]),(0,g.jsx)(X.Provider,{value:{notifications:a.notifications,deleteNotification:async e=>{try{await C().post("/api/notification/delete",{id:e}),o({type:"DELETE_NOTIFICATION",payload:e})}catch(t){console.error(t)}},clearNotifications:async()=>{try{await C().post("/api/notification/delete-all"),o({type:"CLEAR_NOTIFICATIONS"})}catch(e){console.error(e)}},getNotifications:i,createNotification:async e=>{try{await C().post("/api/notification/add",{notification:e}),i()}catch(t){console.error(t)}}},children:n})},ee=X,te=()=>(0,h.useContext)(ee),ne=(0,i.A)("div")((()=>({padding:"16px",marginBottom:"16px",display:"block",alignItems:"center",height:"auto",borderBottom:"1px solid #ddd"}))),ae=((0,i.A)(s.A)((e=>{let{theme:t}=e;return{position:"relative","&:hover":{"& .messageTime":{display:"none"},"& .deleteButton":{opacity:"1"}},"& .messageTime":{color:t.palette.text.secondary},"& .icon":{fontSize:"1.25rem"}}})),(0,i.A)(H.A)((e=>{let{theme:t}=e;return{opacity:"0",position:"absolute",right:5,marginTop:9,marginRight:"24px",background:"rgba(0, 0, 0, 0.01)"}})),(0,i.A)("div")((e=>{let{theme:t}=e;return{padding:"12px 8px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(0, 0, 0, 0.01)","& small":{fontWeight:"500",marginLeft:"16px",color:t.palette.text.secondary}}})),(0,i.A)("span")((e=>{let{theme:t}=e;return{fontWeight:"500",marginLeft:"16px",color:t.palette.text.secondary}})),()=>{const e=["skyblue","yellow","pink","blue"];return e[Math.floor(Math.random()*e.length)]}),oe=e=>{let{container:t}=e;const{settings:n}=(0,c.A)(),[a,i]=((0,r.A)().palette.text.secondary,h.useState(!1)),{deleteNotification:d,clearNotifications:l,notifications:p}=te(),m=()=>{i(!a)},{palette:x}=(0,r.A)(),u=x.text.primary;return(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(H.A,{onClick:m,children:(0,g.jsx)(j.A,{color:"secondary",badgeContent:null===p||void 0===p?void 0:p.length,children:(0,g.jsx)(W.A,{sx:{color:u},children:"notifications"})})}),(0,g.jsx)(o.A,{theme:n.themes[n.activeTheme],children:(0,g.jsx)(Y.Ay,{width:"100px",container:t,variant:"temporary",anchor:"right",open:a,onClose:m,ModalProps:{keepMounted:!0},children:(0,g.jsxs)(s.A,{p:2,children:[(0,g.jsx)("h2",{children:"Notice Board"}),(0,g.jsx)("div",{className:"notice-box-wrap",style:{display:"block"},children:p.map((e=>(0,g.jsxs)(ne,{children:[(0,g.jsx)("div",{className:`post-date bg-${ae()}`,style:{width:"100%"},children:new Date(e.date).toLocaleDateString()}),(0,g.jsx)(Z.A,{variant:"h6",className:"notice-title",children:(0,g.jsx)("a",{href:"#",children:e.notice})}),(0,g.jsxs)("div",{className:"entry-meta",children:[e.posted_by," / ",(0,g.jsx)("span",{children:" ago"})]})]},e._id)))})]})})})]})};var ie=n(9361);const se=(0,i.A)(H.A)((e=>{let{theme:t}=e;return{color:t.palette.text.primary}})),re=(0,i.A)("div")((e=>{let{theme:t}=e;return{top:0,zIndex:96,transition:"all 0.3s ease",boxShadow:y.p[8],height:l.kW}})),de=(0,i.A)(s.A)((e=>{let{theme:t}=e;return{padding:"8px",paddingLeft:18,paddingRight:20,height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:t.palette.primary.main,[t.breakpoints.down("sm")]:{paddingLeft:16,paddingRight:16},[t.breakpoints.down("xs")]:{paddingLeft:14,paddingRight:16}}})),ce=(0,i.A)(s.A)((()=>({display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}}))),le=(0,i.A)(U.A)((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",minWidth:185,"& a":{width:"100%",display:"flex",alignItems:"center",textDecoration:"none"},"& span":{marginRight:"10px",color:t.palette.text.primary}}})),he=((0,i.A)("div")((e=>{let{theme:t}=e;return{display:"inherit",[t.breakpoints.down("md")]:{display:"none !important"}}})),()=>{const e=(0,r.A)(),{settings:t,updateSettings:n}=(0,c.A)(),{logout:o,user:i}=(0,R.A)(),l=(0,a.A)(e.breakpoints.down("md")),p="https://eduproapi.vercel.app",{sessions:m,currentSession:u,setSessions:f,setCurrentSession:b}=(0,h.useContext)(ie.I),y=(0,x.Zp)();(0,h.useEffect)((()=>{C().get(`${p}/api/sessions`).then((e=>{if(Array.isArray(e.data)){const t=e.data.find((e=>e.isActive));t?b(t):console.warn("No active session found"),f(e.data)}else console.error("Unexpected response structure",e)})).catch((e=>{console.error("Error fetching sessions:",e)}))}),[]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(re,{children:(0,g.jsxs)(de,{children:[(0,g.jsxs)(s.A,{display:"flex",alignItems:"center",children:[(0,g.jsx)(se,{onClick:()=>{let e,{layout1Settings:a}=t;var o;e=l?"close"===a.leftSidebar.mode?"mobile":"close":"full"===a.leftSidebar.mode?"close":"full",o={mode:e},n({layout1Settings:{leftSidebar:{...o}}})},children:(0,g.jsx)(W.A,{children:"menu"})}),(0,g.jsx)(d._I,{menuButton:(0,g.jsx)(ce,{children:(0,g.jsx)(w.A,{xsDown:!0,children:(0,g.jsx)(S.L9,{children:(0,g.jsxs)("strong",{style:{display:"flex",alignItems:"center"},children:[null!==u&&void 0!==u&&u.name?`Current Session: ${u.name}`:"No active session",(0,g.jsx)(W.A,{style:{fontSize:"20px",marginLeft:"5px"},children:"arrow_drop_down"})]})})})}),children:m.length>0?m.map((e=>(0,g.jsx)(le,{onClick:()=>(e=>{const t=m.find((t=>t._id===e));t&&(console.log("Switching to session:",t),C().patch(`${p}/api/sessions/${e}/activate`).then((n=>{console.log("Session activated:",n.data),b(t),f((t=>t.map((t=>t._id===e?{...t,isActive:!0}:{...t,isActive:!1}))))})).catch((e=>{console.error("Error activating session:",e)})))})(e._id),children:(0,g.jsx)(J.N_,{children:(0,g.jsx)(S.L9,{children:null===e||void 0===e?void 0:e.name})})},e._id))):(0,g.jsx)(le,{children:(0,g.jsx)(S.L9,{children:"No sessions available"})})})]}),(0,g.jsxs)(s.A,{display:"flex",alignItems:"center",children:[(0,g.jsx)(K,{children:(0,g.jsx)(oe,{})}),(0,g.jsxs)(d._I,{menuButton:(0,g.jsxs)(ce,{children:[(0,g.jsx)(w.A,{xsDown:!0,children:(0,g.jsx)(S.L9,{children:(0,g.jsx)("strong",{children:i.username})})}),(0,g.jsx)(Q.A,{src:i.avatar,sx:{cursor:"pointer"}})]}),children:[(0,g.jsx)(le,{onClick:()=>{"admin"===i.role?y("/dashboard/admin"):"teacher"===i.role?y("/dashboard/teacher"):"student"===i.role?y("/dashboard/student"):y("/session/signin")},children:(0,g.jsxs)(J.N_,{to:"/",children:[(0,g.jsx)(W.A,{children:" home "}),(0,g.jsx)(S.L9,{children:" Home "})]})}),(0,g.jsx)(le,{children:(0,g.jsxs)(J.N_,{to:"/dashboard/profile",children:[(0,g.jsx)(W.A,{children:" person "}),(0,g.jsx)(S.L9,{children:" Profile "})]})}),(0,g.jsx)(le,{children:(0,g.jsxs)(J.N_,{to:"/dashboard/setting",children:[(0,g.jsx)(W.A,{children:" settings "}),(0,g.jsx)(S.L9,{children:" Settings "})]})}),(0,g.jsxs)(le,{onClick:o,children:[(0,g.jsx)(W.A,{children:" power_settings_new "}),(0,g.jsx)(S.L9,{children:" Logout "})]})]})]})]})})})}),pe=h.memo(he),me=(0,i.A)(s.A)((e=>{let{theme:t}=e;return{display:"flex",background:t.palette.background.default}})),xe=(0,i.A)(s.A)((()=>({height:"100%",display:"flex",overflowY:"auto",overflowX:"hidden",flexDirection:"column",justifyContent:"space-between"}))),ue=(0,i.A)(m())((()=>({height:"100%",position:"relative",display:"flex",flexGrow:"1",flexDirection:"column"}))),ge=(0,i.A)(s.A)((e=>{let{width:t,secondarySidebar:n}=e;return{height:"100vh",display:"flex",flexGrow:"1",flexDirection:"column",verticalAlign:"top",marginLeft:t,position:"relative",overflow:"hidden",transition:"all 0.3s ease",marginRight:n.open?50:0}})),fe=()=>{const{settings:e,updateSettings:t}=(0,c.A)(),{layout1Settings:n,secondarySidebar:i}=e,p=e.themes[n.topbar.theme],{leftSidebar:{mode:m,show:u}}=n,b=(()=>{switch(m){case"full":return l.FM;case"compact":return l.YN;default:return"0px"}})(),y=(0,r.A)(),S=(0,a.A)(y.breakpoints.down("md")),j=(0,h.useRef)({isMdScreen:S,settings:e}),A=`theme-${y.palette.type}`;return(0,h.useEffect)((()=>{let{settings:e}=j.current,n=e.layout1Settings.leftSidebar.mode;if(e.layout1Settings.leftSidebar.show){t({layout1Settings:{leftSidebar:{mode:S?"close":n}}})}}),[S]),(0,g.jsxs)(me,{className:A,children:[u&&"close"!==m&&(0,g.jsx)(f,{children:(0,g.jsx)(G,{})}),(0,g.jsxs)(ge,{width:b,secondarySidebar:i,children:[n.topbar.show&&n.topbar.fixed&&(0,g.jsx)(o.A,{theme:p,children:(0,g.jsx)(pe,{fixed:!0,className:"elevation-z8"})}),e.perfectScrollbar&&(0,g.jsxs)(ue,{children:[n.topbar.show&&!n.topbar.fixed&&(0,g.jsx)(o.A,{theme:p,children:(0,g.jsx)(pe,{})}),(0,g.jsx)(s.A,{flexGrow:1,position:"relative",children:(0,g.jsx)(d.lZ,{children:(0,g.jsx)(x.sv,{})})})]}),!e.perfectScrollbar&&(0,g.jsxs)(xe,{children:[n.topbar.show&&!n.topbar.fixed&&(0,g.jsx)(o.A,{theme:p,children:(0,g.jsx)(pe,{})}),(0,g.jsx)(s.A,{flexGrow:1,position:"relative",children:(0,g.jsx)(d.lZ,{children:(0,g.jsx)(x.sv,{})})})]})]})]})},be=h.memo(fe)},9787:(e,t,n)=>{n.d(t,{zs:()=>a});const a=e=>{if(e.match("rgba")){return e.slice(5).split(",").slice(0,-1).join(",")}let t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return t=e.substring(1).split(""),3===t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),[t>>16&255,t>>8&255,255&t].join(",")}}}]);
//# sourceMappingURL=967.0956a327.chunk.js.map