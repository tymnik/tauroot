"use strict";(self.webpackChunktauroot=self.webpackChunktauroot||[]).push([[123],{104:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(152),r=n(791),o=n(874),c=n.p+"static/media/banner-ava.2fae23c9f7aadddf7b78.png",i="BannerMenu_bannerMenu__k8d5O",s="BannerMenu_isOpen__ujuPG",l="BannerMenu_bannerList__jdV81",d="BannerMenu_currentItem__-5duy",u=n(184),m=function(e){e.setIsOpenBannerMenu;var t=e.isOpenBannerMenu;return(0,u.jsx)("div",{className:"".concat(i," ").concat(t?s:""),children:(0,u.jsxs)("ul",{className:l,children:[(0,u.jsx)("li",{className:d,children:"Lorem Ipsum is simply dummy"}),(0,u.jsx)("li",{children:"item"}),(0,u.jsx)("li",{children:"item"}),(0,u.jsx)("li",{children:"item"}),(0,u.jsx)("li",{children:"item"})]})})},b="Banner_hero__-k1oK",p="Banner_banner__7KCUI",f="Banner_ava__kHx7H",g="Banner_bannerText__UlgHo",h="Banner_bannerMenu__GENtD",y="Banner_bannerMenuText__XPI79",v="Banner_bannerMenuOpen__AQJgc",x=function(){var e=(0,r.useState)(!1),t=(0,a.Z)(e,2),n=t[0],i=t[1],s=(0,r.useState)(!1),l=(0,a.Z)(s,2),d=l[0],x=l[1];return(0,u.jsxs)("section",{className:b,children:[(0,u.jsxs)("div",{className:p,children:[(0,u.jsx)("img",{src:c,alt:"User avatar",className:f}),(0,u.jsx)("h2",{className:g,children:"Lorem Ipsum is simply dummy"})]}),(0,u.jsxs)("div",{className:h,children:[(0,u.jsx)("h3",{className:y,children:"More info"}),(0,u.jsx)("button",{type:"button",className:v,onClick:function(){return i(!n)},children:(0,u.jsx)(o.p,{color:"#707070",toggled:d,size:20,rounded:!0,toggle:x,label:"Show menu"})}),(0,u.jsx)(m,{isOpenBannerMenu:d,setIsOpenBannerMenu:x})]})]})}},874:function(e,t,n){n.d(t,{p:function(){return s}});var a=n(683),r=n(152),o=n(791),c=function(e){var t=e.color,n=void 0===t?"currentColor":t,a=e.direction,c=void 0===a?"left":a,i=e.distance,s=void 0===i?"md":i,l=e.duration,d=void 0===l?.4:l,u=e.easing,m=void 0===u?"cubic-bezier(0, 0, 0, 1)":u,b=e.hideOutline,p=void 0===b||b,f=e.label,g=e.lines,h=void 0===g?3:g,y=e.onToggle,v=e.render,x=e.rounded,_=void 0!==x&&x,S=e.size,j=void 0===S?32:S,w=e.toggle,M=e.toggled,O=(0,o.useState)(!1),R=(0,r.Z)(O,2),Z=R[0],B=R[1],T=Math.max(12,Math.min(48,j)),N=Math.round((48-T)/2),k=T/12,E=Math.round(k),I=T/(h*(("lg"===s?.25:"sm"===s?.75:.5)+(3===h?1:1.25))),H=Math.round(I),A=E*h+H*(h-1),C=Math.round((48-A)/2),U=parseFloat((T/(3===h?"lg"===s?4.0425:"sm"===s?5.1625:4.6325:"lg"===s?6.7875:"sm"===s?8.4875:7.6675)-(k-E+(I-H))/(3===h?1:2)/(4/3)).toFixed(2)),L=Math.max(0,d),z={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(L,"s ").concat(m),userSelect:"none",width:"".concat(48,"px")},K={background:n,height:"".concat(E,"px"),left:"".concat(N,"px"),position:"absolute"};p&&(z.outline="none"),_&&(K.borderRadius="9em");var P=w||B,F=void 0!==M?M:Z;return v({barHeight:E,barStyles:K,burgerStyles:z,easing:m,handler:function(){P(!F),"function"===typeof y&&y(!F)},isLeft:"left"===c,isToggled:F,label:f,margin:H,move:U,time:L,topOffset:C,width:T})};function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var s=function(e){return o.createElement(c,i({},e,{render:function(e){return o.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:function(t){return"Enter"===t.key&&e.handler()},role:"button",style:e.burgerStyles,tabIndex:0},o.createElement("div",{style:(0,a.Z)((0,a.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"".concat(e.barStyles.borderRadius," 0 0 ").concat(e.barStyles.borderRadius),top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(".concat(.48*e.move,"px, ").concat(.73*e.move,"px) rotate(45deg)"):"none")})}),o.createElement("div",{style:(0,a.Z)((0,a.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"0 ".concat(e.barStyles.borderRadius," ").concat(e.barStyles.borderRadius," 0"),left:"50%",top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(-".concat(.48*e.move,"px, ").concat(.73*e.move,"px) rotate(-45deg)"):"none")})}),o.createElement("div",{style:(0,a.Z)((0,a.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"".concat(e.barStyles.borderRadius," 0 0 ").concat(e.barStyles.borderRadius),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),opacity:e.isToggled?0:1,transform:"".concat(e.isToggled?"translate(".concat(1.25*-e.move,"px, 0)"):"none")})}),o.createElement("div",{style:(0,a.Z)((0,a.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"0 ".concat(e.barStyles.borderRadius," ").concat(e.barStyles.borderRadius," 0"),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),left:"50%",transition:"".concat(e.time,"s ").concat(e.easing),opacity:e.isToggled?0:1,transform:"".concat(e.isToggled?"translate(".concat(1.25*e.move,"px, 0)"):"none")})}),o.createElement("div",{style:(0,a.Z)((0,a.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"".concat(e.barStyles.borderRadius," 0 0 ").concat(e.barStyles.borderRadius),top:"".concat(e.topOffset+2*e.barHeight+2*e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(".concat(.48*e.move,"px, -").concat(.73*e.move,"px) rotate(-45deg)"):"none")})}),o.createElement("div",{style:(0,a.Z)((0,a.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"0 ".concat(e.barStyles.borderRadius," ").concat(e.barStyles.borderRadius," 0"),left:"50%",top:"".concat(e.topOffset+2*e.barHeight+2*e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(-".concat(.48*e.move,"px, -").concat(.73*e.move,"px) rotate(45deg)"):"none")})}))}}))}},152:function(e,t,n){function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);c=!0);}catch(s){i=!0,r=s}finally{try{c||null==n.return||n.return()}finally{if(i)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=123.6ab1168c.chunk.js.map