(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4710],{34193:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var A=t(14251),r=t(52875),o=t(44747),i=t(9941),a=t(35944),c=t(87603),u=t.n(c),l=t(67294),s=t(62976),d=t(11163),f=t(84932),g=t(67629),p=(t(57263),t(81255)),b={xsmall:400,small:450,medium:550,large:900},h=100;function m(e){var n=e.children,t=(0,o.Z)(e,["children"]),A=t.onRequestClose,r=(0,d.useRouter)(),c=(0,i.Z)(l.useState(!1),2),g=c[0],m=c[1],w=(0,i.Z)(l.useState(t.isOpen),2),q=w[0],y=w[1],B=(0,i.Z)(l.useState(!1),2),x=B[0],k=B[1];if(l.useEffect((function(){if(t.isOpen){var e=setTimeout((function(){return k(!0)}));return function(){clearTimeout(e)}}k(!1)}),[t.isOpen]),l.useEffect((function(){if(!t.isOpen){var e=setTimeout((function(){y(!1)}),h);return function(){clearTimeout(e)}}y(t.isOpen)}),[t.isOpen]),l.useEffect((function(){return m(!0)}),[]),l.useEffect((function(){if(t.isOpen&&!t.preventCloseOnRouteChange){var e=function(){return A()};return r.events.on("routeChangeStart",e),function(){r.events.off("routeChangeStart",e)}}}),[t.isOpen,t.preventCloseOnRouteChange,r,A]),!g)return null;var E=b[t.width||"medium"],C=x?1:0;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(s.Ot,{prefix:"modal",children:(0,a.tZ)(f.t9,{style:{opacity:C},isOpen:q,onDismiss:t.preventClose?void 0:t.onRequestClose,className:"oldModalOverlay",children:(0,a.BX)(f.cZ,{"aria-label":"Dialog",style:{maxWidth:"calc(".concat(E,"px + var(--space-32))")},className:"oldModalContent",children:[n,t.preventClose||t.hideCloseButton?null:(0,a.tZ)("div",{"aria-label":"Close",className:u().dynamic([["9f06ff8373dbab42",[p.n0,h]]])+" close-control",children:(0,a.tZ)(v,{onClick:function(){t.onRequestClose()}})})]})})}),(0,a.tZ)(u(),{id:"9f06ff8373dbab42",dynamic:[p.n0,h],children:".oldModalOverlay{position:fixed;top:0;right:0;bottom:0;left:0;overflow:auto;z-index:".concat(p.n0,";background-color:var(--background-overlay);-webkit-transition:opacity ").concat(h,"ms;-moz-transition:opacity ").concat(h,"ms;-o-transition:opacity ").concat(h,"ms;transition:opacity ").concat(h,"ms;opacity:0;padding:0 var(--space-16)}.oldModalContent{margin:20vh auto;outline:none;position:relative;background-color:var(--background-default);-webkit-box-shadow:var(--shadow-2);-moz-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2);-webkit-border-radius:var(--border-radius-8);-moz-border-radius:var(--border-radius-8);border-radius:var(--border-radius-8);border:1px solid var(--background-highest)}.oldModalOverlay.is-open{opacity:1}.close-control.__jsx-style-dynamic-selector{position:absolute;top:0;right:0;-webkit-transform:translate(0,-webkit-calc(-100% - var(--space-8)));-moz-transform:translate(0,-moz-calc(-100% - var(--space-8)));-ms-transform:translate(0,calc(-100% - var(--space-8)));-o-transform:translate(0,calc(-100% - var(--space-8)));transform:translate(0,-webkit-calc(-100% - var(--space-8)));transform:translate(0,-moz-calc(-100% - var(--space-8)));transform:translate(0,calc(-100% - var(--space-8)))}")})]})}function v(e){return(0,a.BX)("button",(0,r.Z)((0,A.Z)({},e),{className:"jsx-a21f4f6814924b01 "+(e&&null!=e.className&&e.className||""),children:[(0,a.tZ)(g.Z,{}),(0,a.tZ)(u(),{id:"a21f4f6814924b01",children:"button.jsx-a21f4f6814924b01{cursor:pointer;color:var(--foreground-dimmest);border:1px solid var(--background-highest);background-color:var(--background-default);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-shadow:var(--shadow-2);-moz-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:var(--space-32);height:var(--space-32)}button.jsx-a21f4f6814924b01:focus{outline:0 none}button.jsx-a21f4f6814924b01:hover{color:var(--foreground-default)}"})]}))}},36228:function(e,n,t){"use strict";var A;t.d(n,{y:function(){return A}}),function(e){e.Welcome="Welcome",e.Editor="Editor",e.Examples="Examples",e.Run="Run",e.Output="Output",e.Sidepane="Sidepane",e.Share="Share",e.SidebarButton="SidebarButton",e.GlobalNavButton="GlobalNavButton",e.NotificationsButton="NotificationsButton",e.AvatarButton="AvatarButton",e.SidebarAnnouncement="SidebarAnnouncement",e.Feedback="Feedback"}(A||(A={}))},52867:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var A=t(34727),r=t(70655),o=t(15519),i=t(50055),a=t(48920),c=t(5133),u=t(21603);function l(e){var n=e.container,t=e.beforeRun,l=function(){var e=function(e){f!==e&&(f=e,s.emit(a.z.STATE_CHANGE,f))};e(d?p?a.A.STOPPING:"none"===g?a.A.IDLE:a.A.RUNNING:a.A.OFFLINE)},s=(0,c.ZP)(),d=null,f=a.A.OFFLINE,g="none",p=!1,b=Math.random();function h(){return(h=(0,A.Z)((function(){var e,A,o,i;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:if(f!==a.A.IDLE&&f!==a.A.STOPPING)throw new Error("Cannot run while state is not IDLE or STOPPING, got state: "+f);return A=Math.random(),b=A,s.emit(a.z.LOCAL_RUN),g="before-run",l(),o=u.kg.timeStart({replLanguage:null===(e=n.getContext())||void 0===e?void 0:e.repl.language}),[4,t(o,{runId:A.toString(),channelId:null===d||void 0===d?void 0:d.id,type:"shellrunner"})];case 1:if(r.sent(),b!==A)return[2];if("none"===g)return[2];if("server"===g)return[2];if(!d)throw new Error("State is RUNNING but shellrunner is null?");return g="optimistic",d.send({runMain:{}}),i=d.onCommand((function(e){"state"===e.body&&(i(),o("run finished"))})),[2]}}))}))).apply(this,arguments)}function m(){return(m=(0,A.Z)((function(e){return(0,r.__generator)(this,(function(n){if(f!==a.A.IDLE&&f!==a.A.RUNNING)throw new Error("Can only send input when running or idle");if(!d)throw new Error("State is not OFFLINE but shellrunner is null?");return d.send({input:e}),[2]}))}))).apply(this,arguments)}return n.openChannel({name:"shellrunner",service:"shellrun2",skip:function(e){var n,t=e.repl;return n=t.language,!(!0===o.Z.usesInterpreter(n)||!1!==o.Z.usesRunProject(n))}},(function(e){var n=e.channel;if(!e.error){if(!n)throw new Error("Expected error");return d=n,l(),n.onCommand((function(e){if(null!=e.state){var n=e.state===i.api.State.Stopped;p&&n&&(p=!1),n?"server"===g&&(g="none"):g="server",l()}else null!=e.output?s.emit(a.z.OUTPUT,e.output):e.hint&&s.emit(a.z.OUTPUT,"\r\n\x1b[0m\x1b[33m".concat(e.hint.text,"\x1b[0m\r\n"))})),function(){g="none",p=!1,d=null,l()}}})),{mode:"shellrunner",run:function(){return h.apply(this,arguments)},stopRun:function(){if(f!==a.A.RUNNING)throw new Error("stopRun must be called when running but got ".concat(f));if(!d)throw new Error("State is RUNNING but shellrunner is null?");if("before-run"===g)return g="none",void l();g="none",p=!0,l(),d.send({clear:{}})},sendInput:function(e){return m.apply(this,arguments)},resizeTerminal:function(e){if(!d)throw new Error("resizeTerminal must be called when online");d.send({resizeTerm:e})},onOutput:function(e){return s.on(a.z.OUTPUT,e),function(){s.removeListener(a.z.OUTPUT,e)}},onLocalRun:function(e){return s.on(a.z.LOCAL_RUN,e),function(){s.removeListener(a.z.LOCAL_RUN,e)}},onStateChanged:function(e){return s.on(a.z.STATE_CHANGE,e),function(){s.removeListener(a.z.STATE_CHANGE,e)}},getRunState:function(){return f}}}var s=t(75240);function d(e){var n=e.container,t=e.beforeRun,o=e.mode,i=void 0===o?"shellrunner":o;if("shellrunner"===i)return l({container:n,beforeRun:t});if("html"===i)return function(e){var n=e.beforeRun,t=e.container,o=function(){(function(e){l!==e&&(l=e,i.emit(a.z.STATE_CHANGE,l))})("none"===d?a.A.IDLE:a.A.RUNNING)},i=(0,c.ZP)(),l=a.A.OFFLINE,d="none",f=Math.random();function g(){return(g=(0,A.Z)((function(){var e,t;return(0,r.__generator)(this,(function(A){switch(A.label){case 0:if(l!==a.A.IDLE&&l!==a.A.STOPPING)throw new Error("Cannot run while state is not IDLE or STOPPING, got state: "+l);return e=Math.random(),f=e,i.emit(a.z.LOCAL_RUN),d="before-run",o(),t=u.kg.timeStart({replLanguage:"html"}),[4,n(t,{runId:e.toString(),type:"html"})];case 1:return A.sent(),f!==e||"none"===d||(d="running",o(),d="none",o()),[2]}}))}))).apply(this,arguments)}function p(){return(p=(0,A.Z)((function(e){return(0,r.__generator)(this,(function(e){throw new Error("sendInput not implemented for htmlrunner")}))}))).apply(this,arguments)}return t.onConnectionStateChanged((function(e){e===s.e.CONNECTED&&(d="none",o())})),{mode:"html",run:function(){return g.apply(this,arguments)},stopRun:function(){if(l!==a.A.RUNNING)throw new Error("stopRun must be called when running but got ".concat(l));d="none",o()},sendInput:function(e){return p.apply(this,arguments)},resizeTerminal:function(e){throw new Error("resizeTerminal is a no-op in html mode")},onOutput:function(e){throw new Error("onOutput not implemented for htmlrunner")},onStateChanged:function(e){return i.on(a.z.STATE_CHANGE,e),function(){i.removeListener(a.z.STATE_CHANGE,e)}},onLocalRun:function(e){return i.on(a.z.LOCAL_RUN,e),function(){i.removeListener(a.z.LOCAL_RUN,e)}},getRunState:function(){return l}}}({beforeRun:t,container:n});throw new Error("mode not supported: "+i)}},48920:function(e,n,t){"use strict";var A,r;t.d(n,{A:function(){return r},z:function(){return A}}),function(e){e.STATE_CHANGE="STATE_CHANGE",e.OUTPUT="OUTPUT",e.LOCAL_RUN="RUN"}(A||(A={})),function(e){e.OFFLINE="OFFLINE",e.IDLE="IDLE",e.RUNNING="RUNNING",e.STOPPING="STOPPING"}(r||(r={}))},20431:function(e,n,t){"use strict";t.d(n,{X:function(){return o},z:function(){return i}});var A=t(67294),r=A.createContext(null);function o(){return A.useContext(r)}var i=r.Provider},34385:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var A=t(6899),r=function(){};function o(e){var n=(0,A.e)(e);return n?n.delegateTooltip:r}},6899:function(e,n,t){"use strict";t.d(n,{e:function(){return o}});var A=t(67294),r=t(20431);function o(e){var n=(0,r.X)(),t=(0,A.useCallback)((function(t){null===n||void 0===n||n.setStepTargetElement(e,t)}),[e,null===n||void 0===n?void 0:n.setStepTargetElement]);return n&&n.steps.some((function(n){return n.id===e}))?{delegateTooltip:t,isActive:!n.isLoading&&!n.isDone&&n.activeStep.id===e,activeStep:n.activeStep,done:n.done,goto:n.goto,id:n.id,isDone:n.isDone,isLoading:n.isLoading,next:n.next,prev:n.prev,restart:n.restart,steps:n.steps}:null}},73515:function(e,n,t){"use strict";var A=t(35944),r=t(87603),o=t.n(r),i=t(30019),a=t(44781),c=t(6951),u=t(19526),l=t(34193),s=t(81255),d=t(45273);n.Z=function(e){e.devHide;var n=e.eventId,t=e.currentUserImage,r=e.currentUserUsername;return(0,A.tZ)(l.Z,{width:"medium",isOpen:!0,preventClose:!0,onRequestClose:function(){},children:(0,A.BX)("div",{className:o().dynamic([["52051431ebcedd91",[s.n0]]])+" modal-content",children:[(0,A.BX)(u.gC,{spacing:2,align:"center",children:[(0,A.tZ)(i.Z,{level:2,children:" Your Repl is having a bit of trouble."}),(0,A.tZ)("div",{className:o().dynamic([["52051431ebcedd91",[s.n0]]])+" spacer"}),(0,A.tZ)(a.Z,{size:"large",children:"The issue has been logged and the Replit team will look into it. Try reloading the page to get back to coding."}),n?(0,A.tZ)("div",{css:[s.l0.p(16),s.l0.width("100%"),s.l0.backgroundColor.backgroundHigher,s.l0.borderRadius(8)],className:o().dynamic([["52051431ebcedd91",[s.n0]]]),children:(0,A.BX)(u.gC,{spacing:1,children:[r&&t?(0,A.BX)(u.Ug,{spacing:2,align:"center",children:[(0,A.tZ)(d.Z,{src:t,username:r,size:48}),(0,A.tZ)(a.Z,{size:"medium",children:r})]}):null,(0,A.BX)("div",{css:[s.l0.font.code],className:o().dynamic([["52051431ebcedd91",[s.n0]]]),children:["Error: ",n]})]})}):null,(0,A.tZ)("div",{className:o().dynamic([["52051431ebcedd91",[s.n0]]])+" spacer"}),(0,A.tZ)(c.Z,{onClick:function(){return window.location.reload()},color:"primary",filled:!0,fullWidth:!0,children:"reload"}),!1]}),(0,A.tZ)(o(),{id:"52051431ebcedd91",dynamic:[s.n0],children:".modal-content.__jsx-style-dynamic-selector{padding:var(--space-32)}.sentry-error-embed-wrapper{z-index:".concat(s.n0,"!important}")})]})})}},48386:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var A=t(35944),r=t(87603),o=t.n(r),i=t(15085),a=t(57704),c=function(e){var n=e.onClick;return(0,A.tZ)(i.u,{tooltip:"Clear",placement:"bottom-start",children:(0,A.BX)("button",{"aria-label":"Clear",onClick:n,css:i.l0.focusRing,className:"jsx-fba03c32cb6e41ee",children:[(0,A.tZ)(a.Z,{size:16}),(0,A.tZ)(o(),{id:"fba03c32cb6e41ee",children:"button.jsx-fba03c32cb6e41ee{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:var(--border-radius-4);-moz-border-radius:var(--border-radius-4);border-radius:var(--border-radius-4);padding:var(--space-4);background-color:var(--background-root);color:var(--foreground-default);-webkit-transition:background-color.2s;-moz-transition:background-color.2s;-o-transition:background-color.2s;transition:background-color.2s;border:none;cursor:pointer}button.jsx-fba03c32cb6e41ee:hover{background-color:var(--background-higher)}button.jsx-fba03c32cb6e41ee:focus{outline:none}"})]})})}},91202:function(e,n,t){"use strict";t.d(n,{l:function(){return c}});var A=t(35944),r=t(87603),o=t.n(r),i=t(15085),a=t(87653),c=function(e){var n=e.onClick;return(0,A.tZ)(i.u,{tooltip:"Search",placement:"bottom-start",children:(0,A.BX)("button",{"aria-label":"Search",onClick:n,css:i.l0.focusRing,className:"jsx-fba03c32cb6e41ee",children:[(0,A.tZ)(a.Z,{size:16}),(0,A.tZ)(o(),{id:"fba03c32cb6e41ee",children:"button.jsx-fba03c32cb6e41ee{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:var(--border-radius-4);-moz-border-radius:var(--border-radius-4);border-radius:var(--border-radius-4);padding:var(--space-4);background-color:var(--background-root);color:var(--foreground-default);-webkit-transition:background-color.2s;-moz-transition:background-color.2s;-o-transition:background-color.2s;transition:background-color.2s;border:none;cursor:pointer}button.jsx-fba03c32cb6e41ee:hover{background-color:var(--background-higher)}button.jsx-fba03c32cb6e41ee:focus{outline:none}"})]})})}},29672:function(e,n,t){"use strict";t.d(n,{R:function(){return u}});var A=t(35944),r=t(87603),o=t.n(r),i=t(15085),a=t(6951),c=t(67294);function u(e){var n=e.findNext,t=e.findPrevious,r=e.exit,u=(0,c.useRef)(null),l=(0,c.useState)(""),s=l[0],d=l[1];(0,c.useEffect)((function(){u.current&&u.current.focus()}),[]);return(0,A.BX)("div",{className:"jsx-d22d76e8545c71ca search",children:[(0,A.tZ)("input",{ref:u,placeholder:"Find",value:s,onChange:function(e){return d(e.target.value)},onKeyDown:function(e){return function(e){"Escape"!==e.key?"Enter"===e.key&&(e.shiftKey?t(s):n(s)):r()}(e)},css:[i.l0.focusRing],className:"jsx-d22d76e8545c71ca"}),(0,A.tZ)(a.Z,{size:"small",onClick:function(){return n(s)},children:"Next"}),(0,A.tZ)(a.Z,{size:"small",onClick:function(){return t(s)},children:"Previous"}),(0,A.tZ)(a.Z,{size:"small",onClick:r,children:"Exit"}),(0,A.tZ)(o(),{id:"d22d76e8545c71ca",children:".search.jsx-d22d76e8545c71ca{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:30px}input.jsx-d22d76e8545c71ca{padding:4px var(--space-8)var(--space-4);background-color:var(--background-default);color:var(--white);height:24px;width:85px;border:none;-webkit-border-radius:var(--border-radius-4);-moz-border-radius:var(--border-radius-4);border-radius:var(--border-radius-4);-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}input.jsx-d22d76e8545c71ca::-webkit-input-placeholder{color:var(--white)}input.jsx-d22d76e8545c71ca:-moz-placeholder{color:var(--white)}input.jsx-d22d76e8545c71ca::-moz-placeholder{color:var(--white)}input.jsx-d22d76e8545c71ca:-ms-input-placeholder{color:var(--white)}input.jsx-d22d76e8545c71ca::-ms-input-placeholder{color:var(--white)}input.jsx-d22d76e8545c71ca::placeholder{color:var(--white)}input.jsx-d22d76e8545c71ca:focus{outline:none;border:var(--accent-primary-default)}input.jsx-d22d76e8545c71ca,.search button{margin:0 var(--space-4)}"})]})}},61622:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var A,r=t(9941),o=t(35944),i=t(67294),a=t(15085),c=t(10129),u=t(23697),l=t(70917),s=t(50055),d=t(10449),f=t(48920);function g(e,n){var t,r;switch(e){case A.Init:t="5%",r="Loading...";break;case A.Booting:r="Booting Repl",t="20%";break;case A.LoadingFiles:r="Downloading files",t="".concat(Math.floor(20+70*n).toString(),"%");break;case A.Ready:r="Ready",t="100%";break;default:(0,d.Z)(e)}return{percentString:t,message:r}}!function(e){e.Init="Init",e.Booting="Booting",e.LoadingFiles="LoadingFiles",e.Ready="Ready"}(A||(A={}));var p=(0,l.F4)({"0%":{opacity:0,top:0},"100%":{opacity:1,top:"-25px"}});function b(e){var n=e.onBootStatus,t=e.initialRunState,r=(0,i.useState)({current:t===f.A.OFFLINE?A.Init:A.Ready,previous:null}),a=r[0],c=r[1],u=(0,i.useState)(0),l=u[0],d=u[1];(0,i.useEffect)((function(){var e=0,t=0,r=null,o=null,i=function(){e=0,t=0,r=null,o&&(clearInterval(o),o=null)},a=n((function(n){var a;switch(function(n){var A=n.stage,a=n.progress,c=n.total;if(o&&clearInterval(o),A!==s.api.BootStatus.Stage.PULL_FILES&&A!==s.api.BootStatus.Stage.LOAD_BLOCK||!c)return i(),void d(0);if(!(e>a)&&t!==a){var u=Date.now(),l=0;l=r?(a-t)/(u-r)*50:5e4,r=u,t=a,o=setInterval((function(){(e+=l)>c&&(e=c),e=Math.max(e,a),d(e/c)}),50)}}(n),n.stage){case s.api.BootStatus.Stage.ACQUIRING:a=A.Booting;break;case s.api.BootStatus.Stage.PULL_FILES:case s.api.BootStatus.Stage.LOAD_BLOCK:a=A.LoadingFiles;break;case s.api.BootStatus.Stage.COMPLETE:a=A.Ready;break;default:return}c((function(e){return e.current===a?e:{current:a,previous:e.current}}))}));return function(){i(),a()}}),[n]);var b=a.previous?g(a.previous,1):null,h=g(a.current,l);return(0,o.BX)("div",{css:{position:"absolute",left:"25%",right:"25%",top:"45%",backgroundColor:"transparent",color:"white",transition:"all 1s 0.5s",opacity:a.current===A.Ready?0:1},children:[(0,o.BX)("div",{children:[b?(0,o.BX)("div",{css:{textAlign:"center",position:"absolute",width:"100%",top:"-100px",opacity:0,transition:"top 0.4s, opacity 0.4s"},children:[b.message,a.previous===A.LoadingFiles&&" 100%"]},b.message):null,(0,o.BX)("div",{css:{textAlign:"center",position:"absolute",width:"100%",top:"-25px",opacity:1,animationName:p.toString(),animationDuration:"0.6s"},children:[h.message,a.current===A.LoadingFiles&&" ".concat(h.percentString)]},h.message)]}),(0,o.tZ)("div",{css:{background:"none",border:"solid white 1px",borderRadius:"10px"},children:(0,o.tZ)("div",{css:{height:"5px",width:h.percentString,backgroundColor:"#fff",transition:"width cubic-bezier(0.28, 0.26, 0.33, 1) 2s"}})})]})}var h=t(84563);var m=t(29672),v=t(91202),w=t(48386),q=t(34385),y=t(36228),B=t(34140),x=t(43186),k=(0,l.iv)([a.l0.height("100%"),a.l0.width("100%"),a.l0.position.relative,a.l0.backgroundColor.backgroundDefault,a.l0.borderRadius(0,0,8,8),a.l0.pl(16),a.l0.pt(4),{"&:focus-within .controls":{opacity:"1"}}]),E=(0,l.iv)([a.l0.height("100%"),a.l0.overflow("auto"),{"& .xterm":a.l0.height("100%"),"& .xterm .xterm-viewport":[a.l0.borderRadius(0,0,8,8),a.l0.overflowY("auto")]}]),C=(0,l.iv)([a.l0.flex.row,a.l0.align.center,a.l0.justify.end,a.l0.position.absolute,a.l0.top(8),a.l0.right(8),a.l0.minHeight(30),{opacity:"0",zIndex:100}]),I=function(e,n){var t=e.runner,A=e.debugClient,l=e.packager,s=e.onBootStatus,d=(0,r.Z)(function(e){var n=e.runner,t=e.debugClient,A=e.packager,o=(0,r.Z)((0,u.Z)(),2),a=o[0],c=o[1],l=(0,i.useState)(""),s=l[0],d=l[1];return(0,i.useEffect)((function(){if(!a)return n.onOutput((function(e){return d((function(n){return n+e}))}))}),[a,n,d]),(0,i.useEffect)((function(){if(!a&&A)return A.onOutput((function(e){return d((function(n){return n+e.replace(/\n/g,"\n\r")}))}))}),[a,A,d]),(0,i.useEffect)((function(){var e=function(e){if(!a)throw new Error("Expected xterm");a.write(e.replace(/\n/g,"\n\r"))};if(a&&A){var n=A.onOutput((function(n){e(n)})),t=A.onError((function(){return e("\x1b[31m\n\nReplit: Package operation failed.\x1b[00m")})),r=A.onStateChanged((function(n){n&&e("\n\nReplit: Updating package configuration\n\n")}));return function(){n(),t(),r()}}}),[a,A]),(0,i.useEffect)((function(){s&&a&&(a.write(s),d(""))}),[a,s]),(0,i.useEffect)((function(){if(a){var e=function(){n.getRunState()!==f.A.OFFLINE&&n.resizeTerminal(a.getSize())},A=[];A.push(a.onResize(e).dispose);var r=[];A.push(a.onData((function(e){var A=(0,h.I)(e);"running"!==(null===t||void 0===t?void 0:t.state.current)?n.getRunState()!==f.A.OFFLINE?n.sendInput(A):r.push(A):t.sendInput(A)})).dispose),A.push(n.onOutput((function(e){a.write(e)})));var o=!1;return A.push(n.onStateChanged((function(t){if(t!==f.A.OFFLINE){if(o||(e(),o=!0),r.length){var A=!0,i=!1,a=void 0;try{for(var c,u=r[Symbol.iterator]();!(A=(c=u.next()).done);A=!0){var l=c.value;n.sendInput(l)}}catch(s){i=!0,a=s}finally{try{A||null==u.return||u.return()}finally{if(i)throw a}}r=[]}}else o=!1}))),n.getRunState()!==f.A.OFFLINE&&(e(),o=!0),function(){A.forEach((function(e){return e()}))}}}),[a,n,t]),[a,c,d]}({runner:t,debugClient:A,packager:l}),3),g=d[0],p=d[1],I=d[2],N=(0,r.Z)(i.useState(!1),2),S=N[0],Z=N[1],R=(0,x.Z)().preferences.accessibleTerminal,L=(0,u.a)();i.useImperativeHandle(n,(function(){return{write:function(e){g?g.write(e):I((function(n){return n+e.replace(/\n/g,"\n\r")}))},clear:function(){g&&g.clear()},focus:function(){g&&g.focus()}}}));var Q=(0,q.Z)(y.y.Output);return(0,o.BX)(a.G7,{css:[k,L],onKeyDown:function(e){"f"===e.key&&(0,c.j)(e)&&!e.shiftKey&&(Z(!0),e.preventDefault())},innerRef:Q,children:[(0,o.BX)(a.G7,{css:C,className:"controls",children:[S&&g?(0,o.tZ)(m.R,{findPrevious:g.findPrevious,findNext:g.findNext,exit:function(){return Z(!1)}}):(0,o.tZ)(v.l,{onClick:function(){return Z(!0)}}),(0,o.tZ)(w.Z,{onClick:function(){g&&(g.clear(),g.focus())}})]}),R?null:(0,o.tZ)(B.T,{children:'Enable "Accessible Terminal" in Workspace Settings to use a screen reader with the console.'}),(0,o.tZ)(a.G7,{css:E,innerRef:p}),s?(0,o.tZ)(b,{initialRunState:t.getRunState(),onBootStatus:s}):null]})},N=i.forwardRef(I)},23697:function(e,n,t){"use strict";t.d(n,{Z:function(){return F},a:function(){return f}});var A=t(34727),r=t(9941),o=t(70655),i=t(67294),a=t(92876),c=t(96189),u=t(79500),l=t(30888),s=t(14840),d=t(98251);function f(){var e={};return(0,l.F)().theme.id===s.Dy.id&&(e=(0,d.zL)(s.Sj.values)),e}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.Sj.values;return{foreground:e.global.foregroundDefault,background:e.global.backgroundDefault,cursor:e.global.foregroundDefault,cursorAccent:e.global.backgroundHigher,selectionBackground:e.global.foregroundDefault,black:e.global.backgroundRoot,red:e.global.redStronger,green:e.global.accentPositiveDefault,yellow:e.global.yellowDefault,blue:e.global.blueStronger,magenta:e.global.magentaDefault,cyan:e.global.tealDefault,white:e.global.foregroundDefault,brightBlack:e.global.outlineDimmest,brightRed:e.global.redStrongest,brightGreen:e.global.accentPositiveStronger,brightYellow:e.global.yellowStronger,brightBlue:e.global.blueStrongest,brightMagenta:e.global.magentaStronger,brightCyan:e.global.tealStronger,brightWhite:e.global.foregroundDefault}}var p="replit-icons-font";function b(){if(!document.getElementById(p)){var e=t(98160),n=t(97028),A=document.createElement("style");A.id=p,A.type="text/css",A.appendChild(document.createTextNode("\n@font-face {\n  font-family: 'replit-icons';\n  font-style: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  src: url(".concat(e,") format('woff'),\n    url(").concat(n,") format('truetype');\n}"))),document.head.appendChild(A)}}var h="BESbswy",m=3e3;function v(e){return w.apply(this,arguments)}function w(){return(w=(0,A.Z)((function(e){return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return document.fonts?[4,y(document.fonts,e)]:[3,2];case 1:case 3:return n.sent(),[2];case 2:return[4,Promise.all([x("serif",e),x("sans-serif",e),x("monospace",e)])]}}))}))).apply(this,arguments)}function q(e){var n=e.family,t=e.style,A=void 0===t?"normal":t,r=e.weight,o=void 0===r?"normal":r;return"".concat(A," ").concat(o," 100px ").concat(n)}function y(e,n){return B.apply(this,arguments)}function B(){return(B=(0,A.Z)((function(e,n){var t,A,r,i,a,c;return(0,o.__generator)(this,(function(o){return t=n.fontInfo,A=n.characters,r=void 0===A?h:A,i=n.timeout,a=void 0===i?m:i,c=q(t),[2,new Promise((function(n,t){var A=!1,o=setTimeout((function(){A=!0,t(new Error("Font loading timed out"))}),a);e.load(c,r).then((function(){A||(clearTimeout(o),n())})).catch((function(e){A||(clearTimeout(o),t(e))}))}))]}))}))).apply(this,arguments)}function x(e,n){return k.apply(this,arguments)}function k(){return(k=(0,A.Z)((function(e,n){var t,A,r,i,a,c,u,l,s;return(0,o.__generator)(this,(function(o){return t=n.fontInfo,A=n.characters,r=void 0===A?h:A,i=n.timeout,a=void 0===i?m:i,c=q(t),(u=document.createElement("span")).innerText=r,u.style.font="normal normal 100px ".concat(e),u.style.position="absolute",u.style.left="-9999px",u.style.top="-9999px",document.body.appendChild(u),l=u.offsetWidth,u.style.font=c,(s=function(){return l!==u.offsetWidth})()?[2]:[2,new Promise((function(e,n){var A=setInterval((function(){s()&&(clearInterval(A),clearTimeout(r),document.body.removeChild(u),e())}),50),r=setTimeout((function(){clearInterval(A),document.body.removeChild(u),s()?e():n(new Error("Font loading timed out "+t.family))}),a)}))]}))}))).apply(this,arguments)}function E(e){a.Tb(e)}var C='"ReplitHack"',I=400,N=700,S=String.fromCharCode(61095);function Z(){return R.apply(this,arguments)}function R(){return(R=(0,A.Z)((function(){return(0,o.__generator)(this,(function(e){switch(e.label){case 0:return b(),[4,Promise.all([v({fontInfo:{family:"replit-icons"},characters:S}).catch(E),v({fontInfo:{family:C,weight:I.toString()}}).catch(E),v({fontInfo:{family:C,weight:I.toString(),style:"italic"}}).catch(E),v({fontInfo:{family:C,weight:N.toString()}}).catch(E),v({fontInfo:{family:C,weight:N.toString(),style:"italic"}}).catch(E)])];case 1:return e.sent(),[2]}}))}))).apply(this,arguments)}var L,Q=t(93096);var z=t.n(Q)()((function(){if("undefined"!==typeof AudioContext){var e=(L||(L=new AudioContext),L),n=e.createBufferSource();e.decodeAudioData(function(e){for(var n=window.atob(e),t=n.length,A=new Uint8Array(t),r=0;r<t;r++)A[r]=n.charCodeAt(r);return A.buffer}("SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"),(function(t){n.buffer=t,n.connect(e.destination),n.start(0)}))}}),500,{leading:!0,trailing:!0}),D=t(43186),T=t(2858),G=t(16965);function M(){return Promise.all([t.e(6142).then(t.t.bind(t,12320,23)),t.e(2617).then(t.t.bind(t,12617,23)),t.e(747).then(t.t.bind(t,747,23)),t.e(7511).then(t.t.bind(t,67511,23)),t.e(2993).then(t.t.bind(t,32993,23)),t.e(567).then(t.bind(t,70567)),t.e(9421).then(t.t.bind(t,9421,23))])}function F(){var e=(0,i.useState)(null),n=e[0],a=e[1],u=(0,i.useState)(null),d=u[0],f=u[1],p=function(){var e=(0,l.F)(),n=e.theme,t=e.values;return(0,i.useMemo)((function(){return n.id===s.Dy.id?g(s.Sj.values):g(t)}),[n,t])}(),b={screenReaderMode:(0,D.Z)().preferences.accessibleTerminal,fileLinking:function(){var e=(0,i.useContext)(T.Z);return(0,i.useMemo)((function(){return e?{listFiles:e.fs.listFiles,openFile:e.session.openFile}:null}),[e])}(),terminalTheme:p},h=(0,G.Z)(b),m=(0,c.Z)((function(){return null===d||void 0===d?void 0:d.fit()}),{type:"debounce",wait:200}),v=(0,i.useRef)(null);return(0,i.useLayoutEffect)((function(){if(n){var e=[];return function(){t.apply(this,arguments)}(),function(){e.forEach((function(e){return e()}))}}function t(){return t=(0,A.Z)((function(){var t,A,i,a,c,u,l,s,d,g,p,b,w,q,y,B;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return[4,Promise.all([M(),Z()])];case 1:return t=r.Z.apply(void 0,[o.sent(),1]),A=(0,r.Z)(t[0],7),i=A[0].Terminal,a=A[1].FitAddon,c=A[2].SearchAddon,u=A[3].WebLinksAddon,l=A[4].Unicode11Addon,s=A[5].FileLinkAddon,d=A[6].CanvasAddon,n?(g=new i({allowProposedApi:!0,cursorBlink:!1,scrollback:1e3,tabStopWidth:4,fontFamily:"".concat(C,', replit-icons, Monaco, "Ubuntu Mono", Consolas, monospace'),fontSize:14,lineHeight:1,fontWeight:I,fontWeightBold:N,drawBoldTextInBrightColors:!1,minimumContrastRatio:4.5,theme:h.current.terminalTheme,screenReaderMode:h.current.screenReaderMode}),h.current.fileLinking?(v.current=new s(h.current.fileLinking.openFile,h.current.fileLinking.listFiles),g.loadAddon(v.current)):v.current=null,p=new a,g.loadAddon(p),b=new u,g.loadAddon(b),w=new c,g.loadAddon(w),q=new l,g.loadAddon(q),g.unicode.activeVersion="11",g.onBell(z),g.open(n),e.push((function(){return g.dispose()})),y=new d,g.loadAddon(y),g.attachCustomKeyEventHandler((function(e){return O(g,e)})),B=!1,g.attachCustomKeyEventHandler((function(e){return"shift"===e.key.toLowerCase()||"ctrl"===e.key.toLowerCase()||"alt"===e.key.toLowerCase()||"meta"===e.key.toLowerCase()||("tab"!==e.key.toLowerCase()||!B)&&(B="escape"===e.key.toLowerCase(),!0)})),f({onKey:g.onKey.bind(g),onData:g.onData.bind(g),onResize:g.onResize.bind(g),write:g.write.bind(g),fit:function(){var e=n.getBoundingClientRect(),t=e.width,A=e.height;t>0&&A>0&&p.fit()},focus:function(){return g.focus()},clear:function(){return g.clear()},findPrevious:function(e){return w.findPrevious(e)},findNext:function(e){return w.findNext(e)},getSize:function(){return{cols:g.cols,rows:g.rows}},_term:g}),m(n),[2]):[2]}}))})),t.apply(this,arguments)}}),[n,m,h]),function(e,n,A){var r=A.screenReaderMode,o=A.fileLinking,a=A.terminalTheme;(0,i.useEffect)((function(){e&&a&&(e.options.theme=a)}),[e,a]),(0,i.useEffect)((function(){e&&(e.options.screenReaderMode=r)}),[e,r]),(0,i.useEffect)((function(){if(e)if(o){if(!n.current){var A=!1;return t.e(567).then(t.bind(t,70567)).then((function(t){var r=t.FileLinkAddon;A||(n.current=new r(o.openFile,o.listFiles),e.loadAddon(n.current))})),function(){A=!0}}n.current.update(o.openFile,o.listFiles),n.current.reactivate()}else n.current&&n.current.deactivate()}),[e,o,n])}(null===d||void 0===d?void 0:d._term,v,b),[d,a]}function O(e,n){return!window.navigator.clipboard||("c"!==n.key.toLowerCase()||!n.ctrlKey||!n.shiftKey||("keyup"===n.type&&e.hasSelection()&&(0,u.Z)(e.getSelection()).catch((function(e){a.$e((function(n){n.setTag("xterm-clipboard",!0),n.setExtra("type","copy"),a.Tb(e)}))})),n.preventDefault(),n.stopPropagation(),!1))}},84563:function(e,n,t){"use strict";t.d(n,{I:function(){return o}});var A="\x1b[200~",r="\x1b[201~";function o(e){return function(e){return e.startsWith(A)&&e.endsWith(r)}(e)?e.slice(A.length,e.length-r.length):e}},97028:function(e){e.exports="data:application/x-font-ttf;base64,AAEAAAAOAIAAAwBgRkZUTYQd29oAAAWIAAAAHEdERUYAKQAqAAAFYAAAACZPUy8yQ0FcUwAAAWgAAABgY21hcAAP8lIAAAHYAAABQmN2dCAAIgKIAAADHAAAAARnYXNwAAAAAQAABVgAAAAIZ2x5ZqQ1ewkAAAMsAAAAiGhlYWQPsR5/AAAA7AAAADZoaGVhBgEEBQAAASQAAAAkaG10eAwAAKIAAAHIAAAAEGxvY2EAbgBUAAADIAAAAAptYXhwAAgAPAAAAUgAAAAgbmFtZSBsbRoAAAO0AAABbnBvc3SwqUy9AAAFJAAAADIAAQAAAAAAAI7W8KxfDzz1AAsEAAAAAADXNj/0AAAAANc7muQAIgAAAgACqgAAAAgAAgAAAAAAAAABAAAEAAAAAAAEAAAAAAACAAABAAAAAAAAAAAAAAAAAAAABAABAAAABAAMAAMAAAAAAAIAAAAAAAAAAAAAAC4AAAAAAAMEAAGQAAUAAAKAAwAAAACAAoADAAAAAgAAAAEAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAFBmRWQAQO6n7qcEAAAAAAAEAAAAAAAAAQAAAAAAAAAAAAAAIAABBAAAIgAAAAAEAAAABAAAgAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAO6n//8AAO6n//8RXAABAAAAAAAAAQYAAAEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAogAAAAqACoAKgBEAAAAAgAiAAABMgKqAAMABwAusQEALzyyBwQA7TKxBgXcPLIDAgDtMgCxAwAvPLIFBADtMrIHBgH8PLIBAgDtMjMRIREnMxEjIgEQ7szMAqr9ViICZgAAAwCAAAACAAJAAAMABwALAAABFTM1BRUzNQMVMzUBQMD+gMDAwAGAwMDAwMABgMDAAAAAAAAADgCuAAEAAAAAAAAAAAACAAEAAAAAAAEACwAbAAEAAAAAAAIAAQArAAEAAAAAAAMADABHAAEAAAAAAAQACwBsAAEAAAAAAAUACwCQAAEAAAAAAAYACwC0AAMAAQQJAAAAAAAAAAMAAQQJAAEAFgADAAMAAQQJAAIAAgAnAAMAAQQJAAMAGAAtAAMAAQQJAAQAFgBUAAMAAQQJAAUAFgB4AAMAAQQJAAYAFgCcAAAAAHIAZQBwAGwAaQB0AGkAYwBvAG4AcwAAcmVwbGl0aWNvbnMAAAoAAAoAAHIAZQBwAGwAaQB0ACAAaQBjAG8AbgBzAAByZXBsaXQgaWNvbnMAAHIAZQBwAGwAaQB0AGkAYwBvAG4AcwAAcmVwbGl0aWNvbnMAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAVmVyc2lvbiAxLjAAAHIAZQBwAGwAaQB0AGkAYwBvAG4AcwAAcmVwbGl0aWNvbnMAAAAAAgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAEAAAAAQACAQIHdW5pRUVBNwAAAAEAAf//AAAAAQAAAAwAAAAWAB4AAgABAAMAAwABAAQAAAACAAAAAQAAAAEAAAAAAAAAAQAAAADVrAEBAAAAANc2P/QAAAAA1zua5A=="},98160:function(e){e.exports="data:application/font-woff;base64,d09GRgABAAAAAAPUAA4AAAAABaQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAADuAAAABwAAAAchB3b2kdERUYAAAOUAAAAJAAAACYAKQAqT1MvMgAAAawAAAA5AAAAYENBXFNjbWFwAAAB+AAAAD4AAAFCAA/yUmN2dCAAAAI4AAAABAAAAAQAIgKIZ2FzcAAAA4wAAAAIAAAACAAAAAFnbHlmAAACSAAAAHwAAACIpDV7CWhlYWQAAAFEAAAAMQAAADYPsR5/aGhlYQAAAXgAAAAYAAAAJAYBBAVobXR4AAAB6AAAABAAAAAQDAAAomxvY2EAAAI8AAAACgAAAAoAbgBUbWF4cAAAAZAAAAAaAAAAIAAIADxuYW1lAAACxAAAAKgAAAFuIGxtGnBvc3QAAANsAAAAHgAAADKwqUy9eJxjYGQAg75rH9bE89t8ZeBmAfOvm9l/AdPWs54wKDEwMDEwrQJyOYAMIAAARtIKWgAAAHicY2BkYGBhAAEIycTAwMiAClgAAWwAEXicY2BkYGBgYeBhYGYAASYGBNADEQADJABFAAB4nGNgZmFgnMDAysDA1MDMAAQNEJoJiBkZ0ACjABInIM01hcHh3fJ3y1nAfBaoGiQlCgyMAFRaBy8AAAAEAAAiAAAAAAQAAAAEAACAeJxjYGBgZoBgGQZGBhCwAfIYwXwWBgUgzQKEQP675f//Q0jBGKhKBkY2BhiTgZEJSDAxoAJGhmEPAP2eCE8AAAAiAogAAAAqACoAKgBEAAB4nGNgYlBiYGA0YlrFwMzAzqC3kZFB32YTOwvDW6ONbKx3bDYxMwGZDBuZQcKsIOFN7GyMf2w2MYLEjQUVBdWNBZWVGAXenTnDtOpvmBJTGgPQpAYGBiYGJgewmdxA80WNTVmBmBmIGR0O/Gs4cOAAI4iAUAwMDAARHSJHeJyNzU0KgzAUBOCJRqE/dFkK3WTnolT0FL1A6QUki4AkEl30GD1Az9BVD9hRX6HQjcbAl5dhAmCHFxS+XyJW2OAoHmcncYotLmLNTCvO6Ic4p99MKr2S1tkKe2p2wlWIUxxwFmtmruKMvotz+jlWRVh0fNZh4G4Q4NFzbLvWDa4Jnof19P8mzX/WSHhJ4Y2ZyKmbbg1qlKg4trF3wZu6rBb1fACKDTLseJxjYGJABowM6IAFLMrEyMRempfp6upoDgAL4gJjAAAAAQAB//8AAHicY2BkYGDgAWIxBjkGJgZGBmYgZGRgAYowATEjBAMACK0AVAAAAAEAAAAA1awBAQAAAADXNj/0AAAAANc7muQ="}}]);
//# sourceMappingURL=4710-157dbc2cbcf29c89.js.map