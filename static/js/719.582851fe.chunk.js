"use strict";(self.webpackChunktauroot=self.webpackChunktauroot||[]).push([[719],{719:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(152),a=n(791),o=n(874),i={headerTop:"Header_headerTop__AsyyT",headerBottom:"Header_headerBottom__RnFtf",logo:"Header_logo__UsziS",burgerMenuOpen:"Header_burgerMenuOpen__5CCmF"},c=n(439),s={input:"SearchBar_input__FwggK",searchContainer:"SearchBar_searchContainer__QKKVH",searchIcon:"SearchBar_searchIcon__Iv6qP"},l=n(184),d=function(e){var t=e.onSubmit,n=(0,a.useState)(""),o=(0,r.Z)(n,2),i=o[0],d=o[1];return(0,l.jsx)("div",{className:s.searchBar,children:(0,l.jsx)("form",{className:s.form,onSubmit:function(e){e.preventDefault(),t(i)},children:(0,l.jsxs)("div",{className:s.searchContainer,children:[(0,l.jsx)("input",{className:s.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search for...",value:i,onChange:function(e){d(e.target.value)}}),(0,l.jsx)("i",{className:s.searchIcon,children:(0,l.jsx)("svg",{width:"19",height:"20",fill:"#E1541B",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#search")})})})]})})})},h="ItemsList_itemsList__fXpcx",u=function(){return(0,l.jsxs)("ul",{className:h,children:[(0,l.jsx)("li",{children:"Item"}),(0,l.jsx)("li",{children:"Item"}),(0,l.jsx)("li",{children:"Item"}),(0,l.jsx)("li",{children:"Item"}),(0,l.jsx)("li",{children:"Item"}),(0,l.jsx)("li",{children:"Item"}),(0,l.jsx)("li",{children:"Item"}),(0,l.jsx)("li",{children:"Item"})]})},g="MenuList_menuList__AVE2j",A=function(){return(0,l.jsxs)("ul",{className:g,children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("svg",{width:"9",height:"14",fill:"var(--main-text)",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#phone")})}),(0,l.jsx)("p",{children:"Menu item 1"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("svg",{width:"12",height:"14",fill:"var(--main-text)",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#filter")})}),(0,l.jsx)("p",{children:"Menu item 2"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("svg",{width:"12",height:"14",fill:"var(--main-text)",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#android")})}),(0,l.jsx)("p",{children:"Menu item 3"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("svg",{width:"12",height:"14",fill:"var(--main-text)",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#ios")})}),(0,l.jsx)("p",{children:"Menu item 4"})]})]})},x="MobMenu_mobileMenu__ICu6p",m="MobMenu_isOpen__QOXfI",f=function(e){e.setIsOpenMobileMenu;var t=e.isOpenMobileMenu;return(0,l.jsxs)("div",{className:"".concat(x," ").concat(t&&m),children:[(0,l.jsx)(d,{}),(0,l.jsx)(u,{}),(0,l.jsx)(A,{})]})},b="HeaderNavIcons_navBar__AYdrZ",p="HeaderNavIcons_navList__f8Ujd",j=function(){return(0,l.jsx)("div",{className:b,children:(0,l.jsxs)("ul",{className:p,children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:(0,l.jsx)("svg",{width:"8",height:"16",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#facebook")})})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:(0,l.jsx)("svg",{width:"15",height:"12",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#twitter")})})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:(0,l.jsx)("svg",{width:"14",height:"14",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#instagram")})})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube",children:(0,l.jsx)("svg",{width:"18",height:"12",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#youtube")})})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.google.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Google",children:(0,l.jsx)("svg",{width:"21",height:"17",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#google")})})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"/",target:"_blank",rel:"noopener noreferrer","aria-label":"RSS Feed",children:(0,l.jsx)("svg",{width:"14",height:"14",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#rss")})})})})]})})},v={toggleBox:"ThemeSwitcher_toggleBox__J42Cf",toggleBall:"ThemeSwitcher_toggleBall__ZTmKp",toggle:"ThemeSwitcher_toggle__KyiZG",toggleScenery:"ThemeSwitcher_toggleScenery__wr1Wp",toggleSun:"ThemeSwitcher_toggleSun__GRpmB",toggleMoon:"ThemeSwitcher_toggleMoon__roHT3"},w=function(){return(0,l.jsxs)("div",{className:v.toggleContainer,children:[(0,l.jsx)("input",{type:"checkbox",id:"check",className:v.toggle,onChange:function(e){e.target.checked?document.querySelector("body").setAttribute("data-theme","dark"):document.querySelector("body").setAttribute("data-theme","light")}}),(0,l.jsx)("label",{htmlFor:"check",children:(0,l.jsxs)("div",{className:v.toggleBox,children:[(0,l.jsx)("div",{className:v.toggleBall}),(0,l.jsxs)("div",{className:v.toggleScenery,children:[(0,l.jsx)("div",{className:v.toggleSun,children:(0,l.jsx)("svg",{id:"sun",width:"15",height:"15",fill:"var(--toggle-bar-bg)",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#sun")})})}),(0,l.jsx)("div",{className:v.toggleMoon,children:(0,l.jsx)("svg",{id:"moon",width:"17",height:"17",fill:"var(--toggle-bar-bg)",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#moon")})})})]})]})})]})},y=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],c=t[1],s=(0,a.useState)(!1),d=(0,r.Z)(s,2),h=d[0],u=d[1];return(0,l.jsxs)("header",{className:i.header,children:[(0,l.jsxs)("div",{className:i.headerTop,children:[(0,l.jsx)(j,{}),(0,l.jsx)(w,{})]}),(0,l.jsxs)("div",{className:i.headerBottom,children:[(0,l.jsx)("a",{href:"/",children:(0,l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAAkCAMAAABL2vROAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABLUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALeL9wMAAAAYdFJOUwDvv19/YBDfnyAfQM+vj29QMIA/cE+QoPYH8RMAAARcSURBVGje7ZnpcuMgDIABY47axlfa5v2fdBODbQ4JaNJ2szOrP83UMpY+JCGAkP/ykAitdaWe+D61X5VO3aQpai2MXu/SD02OSGeq9E41NQUPVEZuRpr7XwONeLk/4fdfbfwen0JLDDL+bdz2bpMqoGBXXxTiplhkqNchatTXkv5w14zcjJy2Hzwdc/Pius2pAl7t/dmWyPiyBkaEAsXRySq9icZadKmFQYbtVzKqlqcXCvZUfwuMBXxxTvQ+ID16icPiM2tqCYbYSLL428obRCGuzt8A4/MMZ8MNO0aKyow4wqdXnCt2TP8STmEPq+00pCf2wSlbrbCJEiGefIs2GDQexwMuo3F3YUUYjgXle+VfFUjDOSnHRO+ShPNtag+1d5aE8a7rZiuSLVFooC2k74OKjROt/ergw3gDvc3DcDliROoRnZMcoWPgzWZWLxJkoZozVYo6GECifAQ0VTpTwn53fg6GLdJ0jf5tYvNbuJBcIhYLGAQudYY6GGmizGGgKiiJqbcKPQpD+kQTGjyMlTTSyRyw0EhCuInr6mAkiSJDDyAYhHu4H4RhJ3wEnmyZToX//eta6twUvC7uMFkljChRlogwCGP2BnsQhkSfaT/u9LWicdvVONjKAKGBwggTRcfVHIShn4bRYTO5xx31A6i4bxlR71yksUoYLlEEPGEgjM2V/hkYBmxw/AnpTtuKgWEdziUkFZUwbKIMUJIgMMana0aPVYzDNftwM+29CCNXWKx7XSUMlygTkCQwDFuUxmdgZMuiOd6zBhW343YFxJ6m4HMwjkQBqhreZ2gPRqc9qYAhsk62Rw51XvlwfkQijtnssysNr4ZhI8kswFqddqCjDCp8ujd5K8PQ2alsD1u7xOp4m8tCemhBVtUwXKJAuyTb97Jd+mNvIn4OxvR3YbjNPGA7tmvV5Icjg30VBpomWwkyX4AhKLLDg2EwQZ6CIa542fUb3BRaDGOAS0vyCv8CjD1RGlKGQdkat5Lrmyc1q4kEP+aHqTlXHX9Z7JpDTjWdZZsuzyUYWHuzwRj4Kc0qUre+vLRmmynPeoa22e5Zc76BtC1As1uEweHPqtwUPg5jTNvCaA8nTqtkhpl3HscyK2tPXhiGwHdWdsTBb6cmdPQe340RZLf1ejCgI7bgmGb1c0GKUtmRqBq0uX81GHbCeoG01izM+AFhdix+NrUMhtaQl4bhTrQSGjONZtIAB+GHk2O05CZqF/g08NVgCAnZeaFxMXF6gwZYyPhIKLpaEu7CZSIvDmM337d/v2BTQKzIRsR6AUjXKEnP1sk1hJy8CoyepxJ4eZv1sZu1nszeXUa5s+tRNd3U9LQ4PToDGXFXa26b6Lk1+/Cc/C6MsU1lr2qARPc+wF0fcH6SNMLxyXp604odOv8sDNjjEgx3FxT5CBkP6DFNaqDJlfwjMAhZo43XedcYyrssIzuv0ErDvSiM+8XpOQLj+AlfoDeieu1Azw0lpvb7MP4AQrEBtc3qeXgAAAAASUVORK5CYII=",alt:"logo",className:i.logo})}),(0,l.jsx)("button",{type:"button",className:i.burgerMenuOpen,onClick:function(){return c(!n)},children:(0,l.jsx)(o.p,{color:"#2A86E5",toggled:h,size:26,rounded:!0,toggle:u,label:"Show menu"})})]}),(0,l.jsx)(f,{setIsOpenMobileMenu:c,isOpenMobileMenu:n})]})}},874:function(e,t,n){n.d(t,{p:function(){return s}});var r=n(683),a=n(152),o=n(791),i=function(e){var t=e.color,n=void 0===t?"currentColor":t,r=e.direction,i=void 0===r?"left":r,c=e.distance,s=void 0===c?"md":c,l=e.duration,d=void 0===l?.4:l,h=e.easing,u=void 0===h?"cubic-bezier(0, 0, 0, 1)":h,g=e.hideOutline,A=void 0===g||g,x=e.label,m=e.lines,f=void 0===m?3:m,b=e.onToggle,p=e.render,j=e.rounded,v=void 0!==j&&j,w=e.size,y=void 0===w?32:w,S=e.toggle,M=e.toggled,k=(0,o.useState)(!1),_=(0,a.Z)(k,2),Z=_[0],R=_[1],C=Math.max(12,Math.min(48,y)),T=Math.round((48-C)/2),O=C/12,N=Math.round(O),B=C/(f*(("lg"===s?.25:"sm"===s?.75:.5)+(3===f?1:1.25))),I=Math.round(B),H=N*f+I*(f-1),U=Math.round((48-H)/2),E=parseFloat((C/(3===f?"lg"===s?4.0425:"sm"===s?5.1625:4.6325:"lg"===s?6.7875:"sm"===s?8.4875:7.6675)-(O-N+(B-I))/(3===f?1:2)/(4/3)).toFixed(2)),G=Math.max(0,d),P={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(G,"s ").concat(u),userSelect:"none",width:"".concat(48,"px")},D={background:n,height:"".concat(N,"px"),left:"".concat(T,"px"),position:"absolute"};A&&(P.outline="none"),v&&(D.borderRadius="9em");var L=S||R,X=void 0!==M?M:Z;return p({barHeight:N,barStyles:D,burgerStyles:P,easing:u,handler:function(){L(!X),"function"===typeof b&&b(!X)},isLeft:"left"===i,isToggled:X,label:x,margin:I,move:E,time:G,topOffset:U,width:C})};function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s=function(e){return o.createElement(i,c({},e,{render:function(e){return o.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:function(t){return"Enter"===t.key&&e.handler()},role:"button",style:e.burgerStyles,tabIndex:0},o.createElement("div",{style:(0,r.Z)((0,r.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"".concat(e.barStyles.borderRadius," 0 0 ").concat(e.barStyles.borderRadius),top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(".concat(.48*e.move,"px, ").concat(.73*e.move,"px) rotate(45deg)"):"none")})}),o.createElement("div",{style:(0,r.Z)((0,r.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"0 ".concat(e.barStyles.borderRadius," ").concat(e.barStyles.borderRadius," 0"),left:"50%",top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(-".concat(.48*e.move,"px, ").concat(.73*e.move,"px) rotate(-45deg)"):"none")})}),o.createElement("div",{style:(0,r.Z)((0,r.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"".concat(e.barStyles.borderRadius," 0 0 ").concat(e.barStyles.borderRadius),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),opacity:e.isToggled?0:1,transform:"".concat(e.isToggled?"translate(".concat(1.25*-e.move,"px, 0)"):"none")})}),o.createElement("div",{style:(0,r.Z)((0,r.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"0 ".concat(e.barStyles.borderRadius," ").concat(e.barStyles.borderRadius," 0"),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),left:"50%",transition:"".concat(e.time,"s ").concat(e.easing),opacity:e.isToggled?0:1,transform:"".concat(e.isToggled?"translate(".concat(1.25*e.move,"px, 0)"):"none")})}),o.createElement("div",{style:(0,r.Z)((0,r.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"".concat(e.barStyles.borderRadius," 0 0 ").concat(e.barStyles.borderRadius),top:"".concat(e.topOffset+2*e.barHeight+2*e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(".concat(.48*e.move,"px, -").concat(.73*e.move,"px) rotate(-45deg)"):"none")})}),o.createElement("div",{style:(0,r.Z)((0,r.Z)({},e.barStyles),{},{width:"".concat(e.width/2,"px"),borderRadius:"0 ".concat(e.barStyles.borderRadius," ").concat(e.barStyles.borderRadius," 0"),left:"50%",top:"".concat(e.topOffset+2*e.barHeight+2*e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"translate(-".concat(.48*e.move,"px, -").concat(.73*e.move,"px) rotate(45deg)"):"none")})}))}}))}},152:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){c=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=719.582851fe.chunk.js.map