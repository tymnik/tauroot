"use strict";(self.webpackChunktauroot=self.webpackChunktauroot||[]).push([[617],{20:function(e,r,n){n.r(r),n.d(r,{default:function(){return Y}});var t=n(152),a=n(791),s=n.p+"static/media/banner-ava.2fae23c9f7aadddf7b78.png",i=n(439),l="Banner_hero__-k1oK",o="Banner_banner__7KCUI",c="Banner_ava__kHx7H",u="Banner_bannerText__UlgHo",d="Banner_btnsBlock__SEzIL",h="Banner_bannerWidget__kpgB5",x="Banner_bannerMenuWrapper__mJftY",g="Banner_barRangeComponent__Ol524",m="Banner_bannerMenuItemsDesktop__xJboC",p="Banner_bannerMenu__GENtD",_="Banner_bannerMenuText__XPI79",f="Banner_bannerMenuOpen__AQJgc",j="DownloadButtons_buttonsList__aRKfl",b="DownloadButtons_androidBtn__QGZW4",v="DownloadButtons_iosBtn__FaM73",k="DownloadButtons_pcBtn__OhVUF",y=n(184),C=function(){var e=function(e){e};return(0,y.jsxs)("ul",{className:j,children:[(0,y.jsx)("li",{children:(0,y.jsxs)("button",{onClick:function(){return e("android")},className:b,"aria-label":"Download for Android",children:[(0,y.jsx)("span",{children:(0,y.jsx)("svg",{width:"11",height:"13",fill:"var(--white)",children:(0,y.jsx)("use",{xlinkHref:"".concat(i.Z,"#android")})})}),"Android"]})}),(0,y.jsx)("li",{children:(0,y.jsxs)("button",{onClick:function(){return e("ios")},className:v,"aria-label":"Download for iOS",children:[(0,y.jsx)("span",{children:(0,y.jsx)("svg",{width:"12",height:"13",fill:"var(--white)",children:(0,y.jsx)("use",{xlinkHref:"".concat(i.Z,"#ios")})})}),"iOS"]})}),(0,y.jsx)("li",{children:(0,y.jsxs)("button",{onClick:function(){return e("pc")},className:k,"aria-label":"Download for PC",children:[(0,y.jsx)("span",{children:(0,y.jsx)("svg",{width:"17",height:"15",fill:"var(--white)",children:(0,y.jsx)("use",{xlinkHref:"".concat(i.Z,"#download")})})}),"Download on PC"]})})]})},N="Widget_textContainer__yeAgw",w="Widget_widgetUsers__ZswSG",B="Widget_widgetUsersAmount__WFtPd",P="Widget_widgetUserRating__0H2lx",R="Widget_userRatingScale__RPhrS",W=function(e,r){return W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])},W(e,r)};function S(e){var r=e.className,n=e.counterClockwise,t=e.dashRatio,s=e.pathRadius,i=e.strokeWidth,l=e.style;return(0,a.createElement)("path",{className:r,style:Object.assign({},l,D({pathRadius:s,dashRatio:t,counterClockwise:n})),d:A({pathRadius:s,counterClockwise:n}),strokeWidth:i,fillOpacity:0})}function A(e){var r=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+r+"\n      a "+r+","+r+" "+n+" 1 1 0,"+2*r+"\n      a "+r+","+r+" "+n+" 1 1 0,-"+2*r+"\n    "}function D(e){var r=e.counterClockwise,n=e.dashRatio,t=e.pathRadius,a=2*Math.PI*t,s=(1-n)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(r?-s:s)+"px"}}var M=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return function(e,r){function n(){this.constructor=e}W(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}(r,e),r.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},r.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},r.prototype.getPathRatio=function(){var e=this.props,r=e.value,n=e.minValue,t=e.maxValue;return(Math.min(Math.max(r,n),t)-n)/(t-n)},r.prototype.render=function(){var e=this.props,r=e.circleRatio,n=e.className,t=e.classes,s=e.counterClockwise,i=e.styles,l=e.strokeWidth,o=e.text,c=this.getPathRadius(),u=this.getPathRatio();return(0,a.createElement)("svg",{className:t.root+" "+n,style:i.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:t.background,style:i.background,cx:50,cy:50,r:50}):null,(0,a.createElement)(S,{className:t.trail,counterClockwise:s,dashRatio:r,pathRadius:c,strokeWidth:l,style:i.trail}),(0,a.createElement)(S,{className:t.path,counterClockwise:s,dashRatio:u*r,pathRadius:c,strokeWidth:l,style:i.path}),o?(0,a.createElement)("text",{className:t.text,style:i.text,x:50,y:50},o):null)},r.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},r}(a.Component);var O="ProgressBarCircle_circularBarContainer__PXyWt",I="ProgressBarCircle_circularBackground__H3Z+O",F="ProgressBarCircle_circularBar__o9dpW",Z="ProgressBarCircle_barTextContent__PvYId";function E(){return(0,y.jsx)("svg",{styles:{height:0},children:(0,y.jsx)("defs",{children:(0,y.jsxs)("linearGradient",{id:"linear-gradient-id",gradientTransform:"rotate(90)",children:[(0,y.jsx)("stop",{offset:"16.29%",stopColor:"#FCC539"}),(0,y.jsx)("stop",{offset:"85.56%",stopColor:"#DC4A19"})]})})})}var H=function(){return(0,y.jsxs)("div",{className:O,children:[(0,y.jsx)(E,{}),(0,y.jsx)("div",{className:I,style:{width:"70px",height:"70px"}}),(0,y.jsx)("div",{className:F,children:(0,y.jsx)(M,{strokeWidth:10,value:6.4,maxValue:7.5,styles:{path:{stroke:"url(#linear-gradient-id)",height:"100%",strokeLinecap:"butt",transition:"stroke-dashoffset 0.5s ease 0s",transformOrigin:"center center"},trail:{stroke:"rgba(0, 0, 0, 0.44)"}}})}),(0,y.jsx)("div",{className:Z,children:6.4})]})},G=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{children:(0,y.jsx)(H,{})}),(0,y.jsxs)("div",{className:N,children:[(0,y.jsx)("h2",{className:w,children:"Players"}),(0,y.jsx)("p",{className:B,children:"12 votes"}),(0,y.jsxs)("h3",{className:P,children:["Your rating:",(0,y.jsx)("span",{className:R,children:"5.2"})]})]})]})},T={fieldGroup:"ProgressBarRange_fieldGroup__c68vV",rangeField:"ProgressBarRange_rangeField__c9+YX",barScale:"ProgressBarRange_barScale__DbDGz",barScaleTitle:"ProgressBarRange_barScaleTitle__We49g"},U=function(){var e=(0,a.useRef)(null),r=(0,a.useState)(""),n=(0,t.Z)(r,2),s=n[0],i=n[1];return(0,y.jsx)("div",{children:(0,y.jsxs)("div",{className:T.fieldGroup,children:[(0,y.jsxs)("label",{htmlFor:"range",className:T.rangeLabel,children:[(0,y.jsx)("p",{className:T.barScaleTitle,children:"Note"}),(0,y.jsxs)("ul",{className:T.barScale,children:[(0,y.jsx)("li",{children:"1"}),(0,y.jsx)("li",{children:"2"}),(0,y.jsx)("li",{children:"3"}),(0,y.jsx)("li",{children:"4"}),(0,y.jsx)("li",{children:"5"}),(0,y.jsx)("li",{children:"6"}),(0,y.jsx)("li",{children:"7"}),(0,y.jsx)("li",{children:"8"}),(0,y.jsx)("li",{children:"9"}),(0,y.jsx)("li",{children:"10"})]})]}),(0,y.jsx)("input",{ref:e,type:"range",name:"range",id:"range",className:T.rangeField,min:1,max:10,onInput:function(e){var r=e.target.value/e.target.max*100;i("linear-gradient(to right, #DC4A19 , #FCC539 ".concat(r,"%, var(--progress-range-bg)").concat(r,"%)"))},style:{background:s},"aria-label":"A range field for voting"})]})})},V={bannerMenu:"BannerMenu_bannerMenu__k8d5O",bannerContent:"BannerMenu_bannerContent__q2qDz"},L=function(e){var r=e.items,n=e.active,t=e.setActive;return(0,y.jsx)("div",{className:n?"".concat(V.bannerMenu," ").concat(V.active):V.menu,onClick:function(){return t(!1)},children:(0,y.jsx)("ul",{className:V.bannerContent,children:r.map((function(e,r){return(0,y.jsx)("li",{children:e.value},r)}))})})},Y=function(){var e=(0,a.useState)(!1),r=(0,t.Z)(e,2),n=r[0],j=r[1],b=[{value:"Lorem Ipsum is simply dummy"},{value:"item"},{value:"item"},{value:"item"},{value:"item"}];return(0,y.jsxs)("section",{className:l,children:[(0,y.jsxs)("div",{className:o,children:[(0,y.jsx)("img",{src:s,alt:"User avatar",className:c}),(0,y.jsx)("h2",{className:u,children:"Lorem Ipsum is simply dummy"}),(0,y.jsx)("div",{className:d,children:(0,y.jsx)(C,{})}),(0,y.jsx)("div",{className:h,children:(0,y.jsx)(G,{})})]}),(0,y.jsxs)("div",{className:x,children:[(0,y.jsx)("div",{className:m,children:(0,y.jsx)(L,{items:b})}),(0,y.jsxs)("div",{className:p,children:[(0,y.jsx)("h3",{className:_,children:"More info"}),(0,y.jsx)("button",{type:"button",className:f,onClick:function(){return j(!n)},"aria-label":n?"Close menu":"Open menu",children:(0,y.jsx)("svg",{width:"20",height:"16",fill:"var(--main-text)",children:(0,y.jsx)("use",{xlinkHref:"".concat(i.Z,"#banner-burger")})})}),(0,y.jsx)("div",{className:g,children:(0,y.jsx)(U,{})})]})]}),(0,y.jsx)(L,{items:b,active:!n,setActive:j})]})}},152:function(e,r,n){function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,s=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(s.push(t.value),!r||s.length!==r);i=!0);}catch(o){l=!0,a=o}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return s}}(e,r)||function(e,r){if(e){if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(r,{Z:function(){return a}})}}]);
//# sourceMappingURL=617.f94cd8a5.chunk.js.map