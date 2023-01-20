"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2995],{80498:function(e,t,a){a.d(t,{a:function(){return B},Z:function(){return j}});var r=a(95209),n=a(34727),i=a(75815),o=a(18352),s=a(67573),c=a(90132),l=a(14251),u=a(52875),d=a(44747),m=a(9941),f=a(48270),p=a(70655),v=a(35944),h=a(87603),b=a.n(h),y=a(67294),g=a(91296),x=a.n(g),Z=a(48966),w=a(15794),k={isEmail:[[Z.isEmail,"Invalid email address"]],email:[[Z.isEmail,"Invalid email address"],[function(){var e=(0,n.Z)((function(e){return(0,p.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,w.uz)("/data/user/exists",{email:e})];case 1:return[2,!t.sent().exists]}}))}));return function(t){return e.apply(this,arguments)}}(),"Email already in use"]],username:[[function(e){return(0,Z.isByteLength)(e,2,15)},"Your username must be between 2 and 15 characters"],[function(e){return!!e.match(/^[0-9a-zA-Z]+$/)},"Your username can only contain alphanumeric characters (letters A-Z, numbers 0-9)"],[function(){var e=(0,n.Z)((function(e){return(0,p.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,w.uz)("/data/user/exists",{username:e})];case 1:return[2,!t.sent().exists]}}))}));return function(t){return e.apply(this,arguments)}}(),"Username is taken"]],name:[[function(e){return(0,Z.isByteLength)(e,1,255)},"Your name must be at least 1 character long"]],classroomName:[[function(e){return(0,Z.isByteLength)(e,1,255)},"Classroom name must be at least 1 character long"]],replTitle:[[function(e){return(0,Z.isByteLength)(e,1,60)},"Titles must be between 1 and 60 characters"]],replDescription:[[function(e){return(0,Z.isByteLength)(e,0,255)},"Description should not be longer than 255 characters"]],notEmpty:[[function(e){return!(0,Z.isEmpty)(e)},"Cannot be empty"]],postTitle:[[function(e){return(0,Z.isByteLength)(e,1,100)&&!!e.match(/[0-9a-zA-Z]+/)},"Your post title must be less than 100 characters and contain at least one alphanumeric character"]],replTag:[[function(e){return(0,Z.isByteLength)(e,2,15)},"Tag must be between 2 and 15 characters"],[function(e){return!!e.match(/^[0-9a-zA-Z_]+$/)},"Tag must be alphanumeric characters"]],replFolderName:[[function(e){return(0,Z.isByteLength)(e.trim(),1,60)},"Folder name must be between 1 and 60 characters"],[function(e){return!e.match(/[/*?"\\]+/)},'Folder name cannot contain /, *, ", ? \\']]},_=a(27206),z=a(77365),j=function(e){(0,c.Z)(a,e);var t=(0,f.Z)(a);function a(){return(0,i.Z)(this,a),t.apply(this,arguments)}return(0,o.Z)(a,[{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"select",value:function(){this.input&&this.input.select()}},{key:"blur",value:function(){this.input&&this.input.blur()}},{key:"render",value:function(){var e=this,t=this.props,a=t.error,r=t.isLoading,n=(0,d.Z)(t,["error","isLoading"]),i=a?[{message:a,state:"error"}]:void 0;return(0,v.BX)("div",{className:"jsx-ac5406405936ddf form-input-with-ui",children:[(0,v.tZ)(_.ZP,(0,u.Z)((0,l.Z)({},n),{validationResults:i,ref:function(t){return e.input=t}})),r?(0,v.tZ)("div",{style:{right:"8px",top:"12px",position:"absolute"},className:"jsx-ac5406405936ddf",children:(0,v.tZ)(z.Z,{size:16})}):null,(0,v.tZ)(b(),{id:"ac5406405936ddf",children:".form-input-with-ui.jsx-ac5406405936ddf{position:relative;width:100%}"})]})}}]),a}(y.Component);(0,s.Z)(j,"defaultProps",{isLoading:!1,type:"text",value:"",required:!1});var B=function(e){(0,c.Z)(a,e);var t=(0,f.Z)(a);function a(e){var o;(0,i.Z)(this,a),o=t.call(this,e),(0,s.Z)((0,r.Z)(o),"onBlur",(function(e){o.props.onBlur&&o.props.onBlur(e),o.validateNow()})),(0,s.Z)((0,r.Z)(o),"onChange",(function(e){o.props.onChange(e),o.clearErrTimeout=setTimeout((function(){return o.setState({error:null})}),200),o.validate()})),(0,s.Z)((0,r.Z)(o),"validateNow",(function(){o.validate.cancel(),o._validate()}));var c=(0,r.Z)(o);return(0,s.Z)((0,r.Z)(o),"_validate",(0,n.Z)((function(){var e,t,a,r,n,i,o,s,l,u,d,f;return(0,p.__generator)(this,(function(p){switch(p.label){case 0:if(e=!0,!(t=c.props.validators||k[c.props.validator]))throw new Error("Please supply validators or a type of validator");a=!0,r=!1,n=void 0,p.label=1;case 1:p.trys.push([1,7,8,9]),i=t[Symbol.iterator](),p.label=2;case 2:return(a=(o=i.next()).done)?[3,6]:(s=(0,m.Z)(o.value,2),l=s[0],u=s[1],(d=l(c.props.value)).then?(c.setState({isLoading:!0}),[4,d]):[3,4]);case 3:d=p.sent(),c.setState({isLoading:!1}),p.label=4;case 4:if(!d)return c.props.onValidation(u),e=!1,c.setState({error:u}),c.clearErrTimeout&&clearTimeout(c.clearErrTimeout),[3,6];p.label=5;case 5:return a=!0,[3,2];case 6:return[3,9];case 7:return f=p.sent(),r=!0,n=f,[3,9];case 8:try{a||null==i.return||i.return()}finally{if(r)throw n}return[7];case 9:return e&&(c.setState({error:null}),c.props.onValidation(null)),[2]}}))}))),(0,s.Z)((0,r.Z)(o),"validate",x()((function(){return o._validate()}),o.props.debounceTime)),o.state={error:null,isLoading:!1},o}return(0,o.Z)(a,[{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"select",value:function(){this.input&&this.input.select()}},{key:"blur",value:function(){this.input&&this.input.blur()}},{key:"render",value:function(){var e=this,t=this.props,a=(t.onValidation,t.validator,t.validators,t.debounceTime,(0,d.Z)(t,["onValidation","validator","validators","debounceTime"])),r=(0,u.Z)((0,l.Z)({},a),{onChange:this.onChange,onBlur:this.onBlur,ref:function(t){return e.input=t},error:this.state.error,isLoading:this.state.isLoading});return(0,v.tZ)(j,(0,l.Z)({},r))}}]),a}(y.Component);(0,s.Z)(B,"defaultProps",{debounceTime:1e3})},8766:function(e,t,a){var r=a(34727),n=a(70655),i=a(83868),o=a.n(i),s=a(93235),c=a.n(s),l=a(15794),u=function(){var e=(0,r.Z)((function(e){return(0,n.__generator)(this,(function(t){switch(t.label){case 0:return e?o()(e)?[4,(0,l.uz)("/data/user/exists",{email:e})]:[2,{message:"Invalid email address"}]:[2,null];case 1:return t.sent().exists?[2,{message:"Email already in use"}]:[2]}}))}));return function(t){return e.apply(this,arguments)}}();t.Z={isValidEmail:function(){var e=(0,r.Z)((function(e){return(0,n.__generator)(this,(function(t){return e?o()(e)?[2]:[2,{message:"Invalid email address"}]:[2,{message:"Must include valid email address"}]}))}));return function(t){return e.apply(this,arguments)}}(),email:u,teacherEmail:function(){var e=(0,r.Z)((function(e){var t;return(0,n.__generator)(this,(function(a){switch(a.label){case 0:return e?[4,u(e)]:[2,null];case 1:return(t=a.sent())?[2,t]:[4,(0,l.uz)("/data/user/is-teacher-email",{email:e})];case 2:return a.sent().isTeacherEmail?[2]:[2,{message:"Ensure you\u2019re using your institution\u2019s email",severity:"warning"}]}}))}));return function(t){return e.apply(this,arguments)}}(),username:function(){var e=(0,r.Z)((function(e){return(0,n.__generator)(this,(function(t){switch(t.label){case 0:return e?c()(e,{min:2,max:15})?e.match(/^[0-9a-zA-Z]+$/)?[4,(0,l.uz)("/data/user/exists",{username:e})]:[2,{message:"Your username can only contain alphanumeric characters (letters A-Z, numbers 0-9)"}]:[2,{message:"Your username must be between 2 and 15 characters"}]:[2,null];case 1:return t.sent().exists?[2,{message:"Username is taken"}]:[2]}}))}));return function(t){return e.apply(this,arguments)}}(),teamUsername:function(){var e=(0,r.Z)((function(e){return(0,n.__generator)(this,(function(t){switch(t.label){case 0:return e?c()(e,{min:2,max:28})?e.match(/^[0-9a-zA-Z-]+$/)?e.match(/^-.*|.*-$|.*--.*/)?[2,{message:"A username can not start or end with hyphens, or contain two consecutive hyphens."}]:[4,(0,l.uz)("/data/user/exists",{username:e})]:[2,{message:"Username can only contain alphanumeric characters (letters A-Z, numbers 0-9) and hyphens."}]:[2,{message:"Your username must be between 2 and 28 characters"}]:[2,null];case 1:return t.sent().exists?[2,{message:"Username is taken"}]:[2]}}))}));return function(t){return e.apply(this,arguments)}}(),password:function(e){return e?c()(e,{min:8})?void 0:{message:"Must be at least 8 characters"}:null},school:function(e){return null}}},27206:function(e,t,a){a.d(t,{P3:function(){return w},QE:function(){return _}});var r=a(14251),n=a(52875),i=a(44747),o=a(9941),s=a(35944),c=a(87603),l=a.n(c),u=a(67294),d=a(94184),m=a.n(d),f=a(31980),p=a(88075),v=a(88961),h=a(44781),b=a(19526),y=a(42941),g=a(4158),x=a(37424),Z=a(77365),w={default:"default",loading:"default",error:"negative",success:"positive",warning:"default"},k=u.forwardRef((function(e,t){var a,c,d,f=e.label,k=e.description,z=e.icon,j=e.id,B=e.onChange,E=e.large,N=e.placeholder,L=void 0===N?"":N,T=e.validationResults,C=e.onValidationError,Y=e.dataCy,A=(0,i.Z)(e,["label","description","icon","id","onChange","large","placeholder","validationResults","onValidationError","dataCy"]),F=(0,x.H)(),S=j||F("input"),X=k?F("input-description"):void 0,V=(0,o.Z)(u.useState(!1),2),q=V[0],P=V[1];(null===T||void 0===T?void 0:T.some((function(e){return"loading"===e.state})))?(a="loading",c=(0,s.tZ)(Z.Z,{size:16})):(null===T||void 0===T?void 0:T.some((function(e){return"error"===e.state})))?(a="error",d="var(--accent-negative-default)",c=(0,s.tZ)(v.Z,{}),q&&(null===C||void 0===C||C())):(null===T||void 0===T?void 0:T.some((function(e){return"warning"===e.state})))?(a="warning",d="var(--foreground-dimmest)",c=(0,s.tZ)(g.Z,{})):(null===T||void 0===T?void 0:T.every((function(e){return"success"===e.state})))?(a="success",d="var(--accent-positive-default)",c=(0,s.tZ)(p.Z,{})):a="default";var R=w[a],U=E?"var(--font-size-subhead-default)":"var(--font-size-default)";return(0,s.BX)("div",{className:l().dynamic([["9c951117c656eeb7",[d,U,A.monospace?"var(--font-family-code)":"var(--font-family-default)",U,z?"var(--space-24)":"auto"]]])+" container",children:[f?(0,s.BX)(s.HY,{children:[A.required?(0,s.BX)(b.Ug,{spacing:"2px",children:[(0,s.tZ)(h.Z,{tag:"label",foreground:q?1:2,size:E?"small":"xsmall",htmlFor:S,children:f}),(0,s.tZ)("span",{className:l().dynamic([["9c951117c656eeb7",[d,U,A.monospace?"var(--font-family-code)":"var(--font-family-default)",U,z?"var(--space-24)":"auto"]]])+" required",children:"*"})]}):(0,s.tZ)(h.Z,{tag:"label",foreground:q?1:2,size:E?"small":"xsmall",htmlFor:S,children:f}),(0,s.tZ)(y.Z,{height:"4px"})]}):null,(0,s.BX)("div",{className:l().dynamic([["9c951117c656eeb7",[d,U,A.monospace?"var(--font-family-code)":"var(--font-family-default)",U,z?"var(--space-24)":"auto"]]])+" input-container",children:[z?(0,s.tZ)("div",{className:l().dynamic([["9c951117c656eeb7",[d,U,A.monospace?"var(--font-family-code)":"var(--font-family-default)",U,z?"var(--space-24)":"auto"]]])+" icon-container left",children:z}):null,(0,s.tZ)("input",(0,n.Z)((0,r.Z)({id:S,ref:t,required:A.required||!1,onChange:B,placeholder:L,"aria-busy":"loading"===a,"aria-invalid":"error"===a,"aria-describedby":X,"data-cy":Y},A),{onFocus:function(e){P(!0),A.onFocus&&A.onFocus(e)},onBlur:function(e){P(!1),A.onBlur&&A.onBlur(e)},className:l().dynamic([["9c951117c656eeb7",[d,U,A.monospace?"var(--font-family-code)":"var(--font-family-default)",U,z?"var(--space-24)":"auto"]]])+" "+(m()(R,A.className)||"")})),c?(0,s.tZ)("div",{onMouseEnter:function(){return P(!0)},onMouseLeave:function(){return P(!1)},className:l().dynamic([["9c951117c656eeb7",[d,U,A.monospace?"var(--font-family-code)":"var(--font-family-default)",U,z?"var(--space-24)":"auto"]]])+" icon-container right",children:c}):null]}),k?(0,s.BX)(s.HY,{children:[(0,s.tZ)(y.Z,{height:"4px"}),(0,s.tZ)(h.Z,{id:X,tag:"span",foreground:3,size:E?"medium":"small",children:k})]}):null,(null===T||void 0===T?void 0:T.some((function(e){return!!e.message})))&&q?(0,s.tZ)(_,{validationResults:T}):null,(0,s.tZ)(l(),{id:"9c951117c656eeb7",dynamic:[d,U,A.monospace?"var(--font-family-code)":"var(--font-family-default)",U,z?"var(--space-24)":"auto"],children:".container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}.required.__jsx-style-dynamic-selector{color:var(--accent-negative-default);font-size:var(--font-size-small)}.spacer.row.__jsx-style-dynamic-selector{width:var(--space-4)}.spacer.col.__jsx-style-dynamic-selector{height:var(--space-4)}.input-container.__jsx-style-dynamic-selector{position:relative}.icon-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);background-color:var(--background-default);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;padding:var(--space-4)}.icon-container.right.__jsx-style-dynamic-selector{right:var(--space-8);color:".concat(d,"}.icon-container.left.__jsx-style-dynamic-selector{left:var(--space-4);background-color:transparent;color:var(--foreground-dimmest)}input.__jsx-style-dynamic-selector{font-size:").concat(U,";font-family:").concat(A.monospace?"var(--font-family-code)":"var(--font-family-default)",";line-height:").concat(U,";background-color:var(--background-default);color:var(--foreground-default);padding:var(--space-8);padding-left:").concat(z?"var(--space-24)":"auto",";border:1px solid var(--outline-dimmest);-webkit-border-radius:var(--border-radius-4);-moz-border-radius:var(--border-radius-4);border-radius:var(--border-radius-4);outline:none;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:color.1s,background-color.1s;-moz-transition:color.1s,background-color.1s;-o-transition:color.1s,background-color.1s;transition:color.1s,background-color.1s}input.__jsx-style-dynamic-selector:disabled{opacity:.5}input.default.__jsx-style-dynamic-selector:hover{border-color:var(--accent-primary-dimmer)}input.success.__jsx-style-dynamic-selector{border-color:var(--accent-positive-stronger)}input.success.__jsx-style-dynamic-selector:hover{border-color:var(--accent-positive-dimmer)}input.negative.__jsx-style-dynamic-selector{border-color:var(--accent-negative-default)}input.negative.__jsx-style-dynamic-selector:hover{border-color:var(--accent-negative-dimmer)}input.__jsx-style-dynamic-selector:active,input.__jsx-style-dynamic-selector:focus{border-color:var(--accent-primary-default)}")})]})})),_=function(e){var t=e.validationResults;return(0,s.BX)("div",{"aria-live":"polite",className:"jsx-717f837fe0108fc4 container",children:[t.map((function(e,t){var a;switch(e.state){case"success":a=(0,s.tZ)(p.Z,{color:"var(--accent-positive-default)"});break;case"error":a=(0,s.tZ)(v.Z,{color:"var(--accent-negative-default)"});break;case"warning":a=(0,s.tZ)(g.Z,{color:"var(--foreground-dimmest)"});break;default:a=(0,s.tZ)(f.Z,{color:"var(--foreground-dimmest)"})}return(0,s.BX)("div",{className:"jsx-717f837fe0108fc4 validation-row",children:[(0,s.tZ)("div",{className:"jsx-717f837fe0108fc4 validation-icon-container",children:a}),(0,s.tZ)(y.Z,{width:"4px"}),(0,s.tZ)(h.Z,{foreground:2,size:"small",children:e.message})]},e.state+t.toString())})),(0,s.tZ)(l(),{id:"717f837fe0108fc4",children:".container.jsx-717f837fe0108fc4{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:absolute;top:-webkit-calc(100% + var(--space-4));top:-moz-calc(100% + var(--space-4));top:calc(100% + var(--space-4));background-color:var(--background-default);padding:var(--space-8);-webkit-border-radius:var(--border-radius-4);-moz-border-radius:var(--border-radius-4);border-radius:var(--border-radius-4);z-index:9999;-webkit-box-shadow:var(--shadow-2);-moz-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2)}.validation-row.jsx-717f837fe0108fc4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%;padding-bottom:var(--space-4)}.validation-icon-container.jsx-717f837fe0108fc4{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding-right:var(--space-4)}"})]})};t.ZP=k}}]);
//# sourceMappingURL=2995-51cc56c7698717e7.js.map