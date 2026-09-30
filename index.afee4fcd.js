!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var i={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var r={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),r[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.afee4fcd.js","kpnp7":"save-the-children.afa9e55b.png","hgGTc":"project-hope.6b951dc9.png","2MWV0":"international-medical-corps.38e7f653.png","4ZTUI":"razom.61fc7ccd.png","hBth6":"action-against-hunger.2a8c3c0d.png","gHqnK":"serhiy-prytula.69cae55e.png","6LSSl":"united24.7e58352b.png","7ifE3":"medecins-sans-frontieres.9cc61963.png","9i4x1":"world-vision.544fa60d.png","dr5to":"save-the-children2x.688b6dc7.png","cSsiM":"project-hope2x.ee6ab1e6.png","irDEj":"international-medical-corps2x.2c438457.png","93Ubl":"razom2x.49347143.png","cLv6B":"action-against-hunger2x.68b93551.png","9duFQ":"serhiy-prytula2x.b3afcdef.png","1sqtC":"united24-2x.d41967f5.png","kgIN4":"medecins-sans-frontieres2x.b0544e06.png","hvqBJ":"world-vision2x.01220224.png","k5HmC":"icon.6c821e0f.svg","29jFa":"index.94ea1c3f.css"}'));var s,a,c={};function l(e,t){return function(){return e.apply(t,arguments)}}s=void 0!==t?t:"undefined"!=typeof window?window:c,a=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",i="Failure",r="Warning",o="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},l=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=l(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,p){if(!c("body"))return!1;t||f.Notify.init({});var m=l(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof d?g=d:"object"==typeof p&&(g=p),t=l(!0,t,g)}var y,_,v=t[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),t.plainText&&(y=u,(_=e.document.createElement("div")).innerHTML=y,u=_.textContent||_.innerText||""),!t.plainText&&u.length>t.messageMaxLength&&(t=l(!0,t,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>t.messageMaxLength&&(u=u.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(v.fontAwesomeIconColor=v.background),t.cssAnimation||(t.cssAnimationDuration=0);var b=e.document.getElementById(s.wrapID)||e.document.createElement("div");if(b.id=s.wrapID,b.style.width=t.width,b.style.zIndex=t.zindex,b.style.opacity=t.opacity,"center-center"===t.position?(b.style.left=t.distance,b.style.top=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===t.position?(b.style.left=t.distance,b.style.right=t.distance,b.style.top=t.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===t.position?(b.style.left=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===t.position?(b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.left="auto"):"left-top"===t.position?(b.style.left=t.distance,b.style.top=t.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===t.position?(b.style.left=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=t.distance,b.style.top=t.distance,b.style.left="auto",b.style.bottom="auto"),t.backOverlay){var w=e.document.getElementById(s.overlayID)||e.document.createElement("div");w.id=s.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=t.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=v.backOverlayColor||t.backOverlayColor,w.className=t.cssAnimation?"nx-with-animation":"",w.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(s.overlayID)||e.document.body.appendChild(w)}e.document.getElementById(s.wrapID)||e.document.body.appendChild(b);var E=e.document.createElement("div");E.id=t.ID+"-"+h,E.className=t.className+" "+v.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),E.style.fontSize=t.fontSize,E.style.color=v.textColor,E.style.background=v.background,E.style.borderRadius=t.borderRadius,E.style.pointerEvents="all",t.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(E.style.animationDuration=t.cssAnimationDuration+"ms");var I="";if(t.closeButton&&"function"!=typeof d&&(I='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+v.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)E.innerHTML='<i style="color:'+v.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+v.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?I:"");else{var C="";a===n?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===r?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===o&&(C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),E.innerHTML=C+'<span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?I:"")}else E.innerHTML='<span class="nx-message">'+u+"</span>"+(t.closeButton?I:"");if("left-bottom"===t.position||"right-bottom"===t.position){var k=e.document.getElementById(s.wrapID);k.insertBefore(E,k.firstChild)}else e.document.getElementById(s.wrapID).appendChild(E);var T=e.document.getElementById(E.id);if(T){var S,N,R=function(){T.classList.add("nx-remove");var t=e.document.getElementById(s.overlayID);t&&b.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(S)},x=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var t=e.document.getElementById(s.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(N)};if(t.closeButton&&"function"!=typeof d&&e.document.getElementById(E.id).querySelector("span.nx-close-button").addEventListener("click",(function(){R();var e=setTimeout((function(){x(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof d||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof d&&d(),R();var e=setTimeout((function(){x(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var A=function(){S=setTimeout((function(){R()}),t.timeout),N=setTimeout((function(){x()}),t.timeout+t.cssAnimationDuration)};A(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(S),clearTimeout(N)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),A()})))}}if(t.showOnlyTheLastOne&&h>0)for(var O=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+h+"])"),P=0;P<O.length;P++){var L=O[P];null!==L.parentNode&&L.parentNode.removeChild(L)}t=l(!0,t,m)},f={Notify:{init:function(n){t=l(!0,s,n),function(t,n){if(!c("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=l(!0,t,e)},success:function(e,t,i){d(n,e,t,i)},failure:function(e,t,n){d(i,e,t,n)},warning:function(e,t,n){d(r,e,t,n)},info:function(e,t,n){d(o,e,t,n)}}};return"object"==typeof e.Notiflix?l(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return a(s)})):"object"==typeof c?c=a(s):s.Notiflix=a(s);const{toString:u}=Object.prototype,{getPrototypeOf:h}=Object,d=(f=Object.create(null),e=>{const t=u.call(e);return f[t]||(f[t]=t.slice(8,-1).toLowerCase())});var f;const p=e=>(e=e.toLowerCase(),t=>d(t)===e),m=e=>t=>typeof t===e,{isArray:g}=Array,y=m("undefined");const _=p("ArrayBuffer");const v=m("string"),b=m("function"),w=m("number"),E=e=>null!==e&&"object"==typeof e,I=e=>{if("object"!==d(e))return!1;const t=h(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},C=p("Date"),k=p("File"),T=p("Blob"),S=p("FileList"),N=p("URLSearchParams");function R(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),g(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let s;for(i=0;i<o;i++)s=r[i],t.call(null,e[s],s,e)}}function x(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,O=e=>!y(e)&&e!==A;const P=(L="undefined"!=typeof Uint8Array&&h(Uint8Array),e=>L&&e instanceof L);var L;const D=p("HTMLFormElement"),M=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),U=p("RegExp"),F=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};R(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)},B="abcdefghijklmnopqrstuvwxyz",j="0123456789",q={DIGIT:j,ALPHA:B,ALPHA_DIGIT:B+B.toUpperCase()+j};const H=p("AsyncFunction");var W={isArray:g,isArrayBuffer:_,isBuffer:function(e){return null!==e&&!y(e)&&null!==e.constructor&&!y(e.constructor)&&b(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||b(e.append)&&("formdata"===(t=d(e))||"object"===t&&b(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&_(e.buffer),t},isString:v,isNumber:w,isBoolean:e=>!0===e||!1===e,isObject:E,isPlainObject:I,isUndefined:y,isDate:C,isFile:k,isBlob:T,isRegExp:U,isFunction:b,isStream:e=>E(e)&&b(e.pipe),isURLSearchParams:N,isTypedArray:P,isFileList:S,forEach:R,merge:function e(){const{caseless:t}=O(this)&&this||{},n={},i=(i,r)=>{const o=t&&x(n,r)||r;I(n[o])&&I(i)?n[o]=e(n[o],i):I(i)?n[o]=e({},i):g(i)?n[o]=i.slice():n[o]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&R(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(R(t,((t,i)=>{n&&b(t)?e[i]=l(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,o,s;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)s=r[o],i&&!i(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&h(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:d,kindOfTest:p,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(g(e))return e;let t=e.length;if(!w(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:D,hasOwnProperty:M,hasOwnProp:M,reduceDescriptors:F,freezeMethods:e=>{F(e,((t,n)=>{if(b(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];b(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return g(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:x,global:A,isContextDefined:O,ALPHABET:q,generateString:(e=16,t=q.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&b(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(E(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=g(e)?[]:{};return R(e,((e,t)=>{const o=n(e,i+1);!y(o)&&(r[t]=o)})),t[i]=void 0,r}}return e};return n(e,0)},isAsyncFn:H,isThenable:e=>e&&(E(e)||b(e))&&b(e.then)&&b(e.catch)};function z(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}W.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:W.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const V=z.prototype,$={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{$[e]={value:e}})),Object.defineProperties(z,$),Object.defineProperty(V,"isAxiosError",{value:!0}),z.from=(e,t,n,i,r,o)=>{const s=Object.create(V);return W.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),z.call(s,e.message,t,n,i,r),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};var K,G,J,Y=z;G=function(e){var t,n,i=oe(e),r=i[0],o=i[1],s=new te(function(e,t,n){return 3*(t+n)/4-n}(0,r,o)),a=0,c=o>0?r-4:r;for(n=0;n<c;n+=4)t=ee[e.charCodeAt(n)]<<18|ee[e.charCodeAt(n+1)]<<12|ee[e.charCodeAt(n+2)]<<6|ee[e.charCodeAt(n+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;2===o&&(t=ee[e.charCodeAt(n)]<<2|ee[e.charCodeAt(n+1)]>>4,s[a++]=255&t);1===o&&(t=ee[e.charCodeAt(n)]<<10|ee[e.charCodeAt(n+1)]<<4|ee[e.charCodeAt(n+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t);return s},J=function(e){for(var t,n=e.length,i=n%3,r=[],o=16383,s=0,a=n-i;s<a;s+=o)r.push(se(e,s,s+o>a?a:s+o));1===i?(t=e[n-1],r.push(Z[t>>2]+Z[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(Z[t>>10]+Z[t>>4&63]+Z[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Q,X,Z=[],ee=[],te="undefined"!=typeof Uint8Array?Uint8Array:Array,ne="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ie=0,re=ne.length;ie<re;++ie)Z[ie]=ne[ie],ee[ne.charCodeAt(ie)]=ie;function oe(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function se(e,t,n){for(var i,r,o=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(Z[(r=i)>>18&63]+Z[r>>12&63]+Z[r>>6&63]+Z[63&r]);return o.join("")}ee["-".charCodeAt(0)]=62,ee["_".charCodeAt(0)]=63,Q=function(e,t,n,i,r){var o,s,a=8*r-i-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=e[t+h];for(h+=d,o=f&(1<<-u)-1,f>>=-u,u+=a;u>0;o=256*o+e[t+h],h+=d,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=i;u>0;s=256*s+e[t+h],h+=d,u-=8);if(0===o)o=1-l;else{if(o===c)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),o-=l}return(f?-1:1)*s*Math.pow(2,o-i)},X=function(e,t,n,i,r,o){var s,a,c,l=8*o-r-1,u=(1<<l)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(s++,c/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(t*c-1)*Math.pow(2,r),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),s=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(s=s<<r|a,l+=r;l>0;e[n+f]=255&s,f+=p,s/=256,l-=8);e[n+f-p]|=128*m};const ae="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;K=ue;const ce=2147483647;function le(e){if(e>ce)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,ue.prototype),t}function ue(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return fe(e)}return he(e,t,n)}function he(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!ue.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|ye(e,t);let i=le(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Qe(e,Uint8Array)){const t=new Uint8Array(e);return me(t.buffer,t.byteOffset,t.byteLength)}return pe(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Qe(e,ArrayBuffer)||e&&Qe(e.buffer,ArrayBuffer))return me(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Qe(e,SharedArrayBuffer)||e&&Qe(e.buffer,SharedArrayBuffer)))return me(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return ue.from(i,t,n);const r=function(e){if(ue.isBuffer(e)){const t=0|ge(e.length),n=le(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Xe(e.length)?le(0):pe(e);if("Buffer"===e.type&&Array.isArray(e.data))return pe(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ue.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function de(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function fe(e){return de(e),le(e<0?0:0|ge(e))}function pe(e){const t=e.length<0?0:0|ge(e.length),n=le(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function me(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,ue.prototype),i}function ge(e){if(e>=ce)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ce.toString(16)+" bytes");return 0|e}function ye(e,t){if(ue.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Qe(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ge(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Je(e).length;default:if(r)return i?-1:Ge(e).length;t=(""+t).toLowerCase(),r=!0}}function _e(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Oe(this,t,n);case"utf8":case"utf-8":return Ne(this,t,n);case"ascii":return xe(this,t,n);case"latin1":case"binary":return Ae(this,t,n);case"base64":return Se(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Pe(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function ve(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function be(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Xe(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=ue.from(t,i)),ue.isBuffer(t))return 0===t.length?-1:we(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):we(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function we(e,t,n,i,r){let o,s=1,a=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,c/=2,n/=2}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(r){let i=-1;for(o=n;o<a;o++)if(l(e,o)===l(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===c)return i*s}else-1!==i&&(o-=o-i),i=-1}else for(n+c>a&&(n=a-c),o=n;o>=0;o--){let n=!0;for(let i=0;i<c;i++)if(l(e,o+i)!==l(t,i)){n=!1;break}if(n)return o}return-1}function Ee(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=t.length;let s;for(i>o/2&&(i=o/2),s=0;s<i;++s){const i=parseInt(t.substr(2*s,2),16);if(Xe(i))return s;e[n+s]=i}return s}function Ie(e,t,n,i){return Ye(Ge(t,e.length-n),e,n,i)}function Ce(e,t,n,i){return Ye(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function ke(e,t,n,i){return Ye(Je(t),e,n,i)}function Te(e,t,n,i){return Ye(function(e,t){let n,i,r;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(t,e.length-n),e,n,i)}function Se(e,t,n){return 0===t&&n===e.length?J(e):J(e.slice(t,n))}function Ne(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(r+s<=n){let n,i,a,c;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[r+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(o=c));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(c=(15&t)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=s}return function(e){const t=e.length;if(t<=Re)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=Re));return n}(i)}ue.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ue.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ue.prototype,"parent",{enumerable:!0,get:function(){if(ue.isBuffer(this))return this.buffer}}),Object.defineProperty(ue.prototype,"offset",{enumerable:!0,get:function(){if(ue.isBuffer(this))return this.byteOffset}}),ue.poolSize=8192,ue.from=function(e,t,n){return he(e,t,n)},Object.setPrototypeOf(ue.prototype,Uint8Array.prototype),Object.setPrototypeOf(ue,Uint8Array),ue.alloc=function(e,t,n){return function(e,t,n){return de(e),e<=0?le(e):void 0!==t?"string"==typeof n?le(e).fill(t,n):le(e).fill(t):le(e)}(e,t,n)},ue.allocUnsafe=function(e){return fe(e)},ue.allocUnsafeSlow=function(e){return fe(e)},ue.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ue.prototype},ue.compare=function(e,t){if(Qe(e,Uint8Array)&&(e=ue.from(e,e.offset,e.byteLength)),Qe(t,Uint8Array)&&(t=ue.from(t,t.offset,t.byteLength)),!ue.isBuffer(e)||!ue.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},ue.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ue.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ue.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=ue.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(Qe(t,Uint8Array))r+t.length>i.length?(ue.isBuffer(t)||(t=ue.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!ue.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},ue.byteLength=ye,ue.prototype._isBuffer=!0,ue.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)ve(this,t,t+1);return this},ue.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)ve(this,t,t+3),ve(this,t+1,t+2);return this},ue.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)ve(this,t,t+7),ve(this,t+1,t+6),ve(this,t+2,t+5),ve(this,t+3,t+4);return this},ue.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Ne(this,0,e):_e.apply(this,arguments)},ue.prototype.toLocaleString=ue.prototype.toString,ue.prototype.equals=function(e){if(!ue.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===ue.compare(this,e)},ue.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ae&&(ue.prototype[ae]=ue.prototype.inspect),ue.prototype.compare=function(e,t,n,i,r){if(Qe(e,Uint8Array)&&(e=ue.from(e,e.offset,e.byteLength)),!ue.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),c=this.slice(i,r),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){o=c[e],s=l[e];break}return o<s?-1:s<o?1:0},ue.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},ue.prototype.indexOf=function(e,t,n){return be(this,e,t,n,!0)},ue.prototype.lastIndexOf=function(e,t,n){return be(this,e,t,n,!1)},ue.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return Ee(this,e,t,n);case"utf8":case"utf-8":return Ie(this,e,t,n);case"ascii":case"latin1":case"binary":return Ce(this,e,t,n);case"base64":return ke(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Te(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},ue.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const Re=4096;function xe(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function Ae(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Oe(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=Ze[e[i]];return r}function Pe(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function Le(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function De(e,t,n,i,r,o){if(!ue.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<o)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function Me(e,t,n,i,r){ze(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function Ue(e,t,n,i,r){ze(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function Fe(e,t,n,i,r,o){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Be(e,t,n,i,r){return t=+t,n>>>=0,r||Fe(e,0,n,4),X(e,t,n,i,23,4),n+4}function je(e,t,n,i,r){return t=+t,n>>>=0,r||Fe(e,0,n,8),X(e,t,n,i,52,8),n+8}ue.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,ue.prototype),i},ue.prototype.readUintLE=ue.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Le(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return i},ue.prototype.readUintBE=ue.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Le(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},ue.prototype.readUint8=ue.prototype.readUInt8=function(e,t){return e>>>=0,t||Le(e,1,this.length),this[e]},ue.prototype.readUint16LE=ue.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Le(e,2,this.length),this[e]|this[e+1]<<8},ue.prototype.readUint16BE=ue.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Le(e,2,this.length),this[e]<<8|this[e+1]},ue.prototype.readUint32LE=ue.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Le(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ue.prototype.readUint32BE=ue.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Le(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ue.prototype.readBigUInt64LE=et((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||$e(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),ue.prototype.readBigUInt64BE=et((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||$e(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),ue.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Le(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},ue.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Le(e,t,this.length);let i=t,r=1,o=this[e+--i];for(;i>0&&(r*=256);)o+=this[e+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*t)),o},ue.prototype.readInt8=function(e,t){return e>>>=0,t||Le(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},ue.prototype.readInt16LE=function(e,t){e>>>=0,t||Le(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},ue.prototype.readInt16BE=function(e,t){e>>>=0,t||Le(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},ue.prototype.readInt32LE=function(e,t){return e>>>=0,t||Le(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ue.prototype.readInt32BE=function(e,t){return e>>>=0,t||Le(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ue.prototype.readBigInt64LE=et((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||$e(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),ue.prototype.readBigInt64BE=et((function(e){Ve(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||$e(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),ue.prototype.readFloatLE=function(e,t){return e>>>=0,t||Le(e,4,this.length),Q(this,e,!0,23,4)},ue.prototype.readFloatBE=function(e,t){return e>>>=0,t||Le(e,4,this.length),Q(this,e,!1,23,4)},ue.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Le(e,8,this.length),Q(this,e,!0,52,8)},ue.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Le(e,8,this.length),Q(this,e,!1,52,8)},ue.prototype.writeUintLE=ue.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){De(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[t]=255&e;++o<n&&(r*=256);)this[t+o]=e/r&255;return t+n},ue.prototype.writeUintBE=ue.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){De(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+n},ue.prototype.writeUint8=ue.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||De(this,e,t,1,255,0),this[t]=255&e,t+1},ue.prototype.writeUint16LE=ue.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||De(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ue.prototype.writeUint16BE=ue.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||De(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ue.prototype.writeUint32LE=ue.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||De(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ue.prototype.writeUint32BE=ue.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||De(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ue.prototype.writeBigUInt64LE=et((function(e,t=0){return Me(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ue.prototype.writeBigUInt64BE=et((function(e,t=0){return Ue(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ue.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);De(this,e,t,n,i-1,-i)}let r=0,o=1,s=0;for(this[t]=255&e;++r<n&&(o*=256);)e<0&&0===s&&0!==this[t+r-1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},ue.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);De(this,e,t,n,i-1,-i)}let r=n-1,o=1,s=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===s&&0!==this[t+r+1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},ue.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||De(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ue.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||De(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ue.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||De(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ue.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||De(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ue.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||De(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ue.prototype.writeBigInt64LE=et((function(e,t=0){return Me(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ue.prototype.writeBigInt64BE=et((function(e,t=0){return Ue(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ue.prototype.writeFloatLE=function(e,t,n){return Be(this,e,t,!0,n)},ue.prototype.writeFloatBE=function(e,t,n){return Be(this,e,t,!1,n)},ue.prototype.writeDoubleLE=function(e,t,n){return je(this,e,t,!0,n)},ue.prototype.writeDoubleBE=function(e,t,n){return je(this,e,t,!1,n)},ue.prototype.copy=function(e,t,n,i){if(!ue.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},ue.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!ue.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const o=ue.isBuffer(e)?e:ue.from(e,i),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=o[r%s]}return this};const qe={};function He(e,t,n){qe[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function We(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function ze(e,t,n,i,r,o){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new qe.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){Ve(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||$e(t,e.length-(n+1))}(i,r,o)}function Ve(e,t){if("number"!=typeof e)throw new qe.ERR_INVALID_ARG_TYPE(t,"number",e)}function $e(e,t,n){if(Math.floor(e)!==e)throw Ve(e,n),new qe.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new qe.ERR_BUFFER_OUT_OF_BOUNDS;throw new qe.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}He("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),He("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),He("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=We(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=We(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const Ke=/[^+/0-9A-Za-z-_]/g;function Ge(e,t){let n;t=t||1/0;const i=e.length;let r=null;const o=[];for(let s=0;s<i;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Je(e){return G(function(e){if((e=(e=e.split("=")[0]).trim().replace(Ke,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Ye(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Qe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Xe(e){return e!=e}const Ze=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function et(e){return"undefined"==typeof BigInt?tt:e}function tt(){throw new Error("BigInt not supported")}var nt=K;function it(e){return W.isPlainObject(e)||W.isArray(e)}function rt(e){return W.endsWith(e,"[]")?e.slice(0,-2):e}function ot(e,t,n){return e?e.concat(t).map((function(e,t){return e=rt(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const st=W.toFlatObject(W,{},null,(function(e){return/^is[A-Z]/.test(e)}));var at=function(e,t,n){if(!W.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(n=W.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!W.isUndefined(t[e])}))).metaTokens,r=n.visitor||l,o=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&W.isSpecCompliantForm(t);if(!W.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(W.isDate(e))return e.toISOString();if(!a&&W.isBlob(e))throw new Y("Blob is not supported. Use a Buffer instead.");return W.isArrayBuffer(e)||W.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):nt.from(e):e}function l(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(W.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(W.isArray(e)&&function(e){return W.isArray(e)&&!e.some(it)}(e)||(W.isFileList(e)||W.endsWith(n,"[]"))&&(a=W.toArray(e)))return n=rt(n),a.forEach((function(e,i){!W.isUndefined(e)&&null!==e&&t.append(!0===s?ot([n],i,o):null===s?n:n+"[]",c(e))})),!1;return!!it(e)||(t.append(ot(r,n,o),c(e)),!1)}const u=[],h=Object.assign(st,{defaultVisitor:l,convertValue:c,isVisitable:it});if(!W.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!W.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),W.forEach(n,(function(n,o){!0===(!(W.isUndefined(n)||null===n)&&r.call(t,n,W.isString(o)?o.trim():o,i,h))&&e(n,i?i.concat(o):[o])})),u.pop()}}(e),t};function ct(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function lt(e,t){this._pairs=[],e&&at(e,this,t)}const ut=lt.prototype;ut.append=function(e,t){this._pairs.push([e,t])},ut.toString=function(e){const t=e?function(t){return e.call(this,t,ct)}:ct;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var ht=lt;function dt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ft(e,t,n){if(!t)return e;const i=n&&n.encode||dt,r=n&&n.serialize;let o;if(o=r?r(t,n):W.isURLSearchParams(t)?t.toString():new ht(t,n).toString(i),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}var pt=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){W.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},mt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var gt={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ht,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function yt(e,t){return at(e,new gt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return gt.isNode&&W.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var _t=function(e){function t(e,n,i,r){let o=e[r++];const s=Number.isFinite(+o),a=r>=e.length;if(o=!o&&W.isArray(i)?i.length:o,a)return W.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s;i[o]&&W.isObject(i[o])||(i[o]=[]);return t(e,n,i[o],r)&&W.isArray(i[o])&&(i[o]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],t[o]=e[o];return t}(i[o])),!s}if(W.isFormData(e)&&W.isFunction(e.entries)){const n={};return W.forEachEntry(e,((e,i)=>{t(function(e){return W.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const vt={"Content-Type":void 0};const bt={transitional:mt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=W.isObject(e);r&&W.isHTMLForm(e)&&(e=new FormData(e));if(W.isFormData(e))return i&&i?JSON.stringify(_t(e)):e;if(W.isArrayBuffer(e)||W.isBuffer(e)||W.isStream(e)||W.isFile(e)||W.isBlob(e))return e;if(W.isArrayBufferView(e))return e.buffer;if(W.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return yt(e,this.formSerializer).toString();if((o=W.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return at(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(W.isString(e))try{return(t||JSON.parse)(e),W.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||bt.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&W.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw Y.from(e,Y.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:gt.classes.FormData,Blob:gt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};W.forEach(["delete","get","head"],(function(e){bt.headers[e]={}})),W.forEach(["post","put","patch"],(function(e){bt.headers[e]=W.merge(vt)}));var wt=bt;const Et=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var It=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&Et[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const Ct=Symbol("internals");function kt(e){return e&&String(e).trim().toLowerCase()}function Tt(e){return!1===e||null==e?e:W.isArray(e)?e.map(Tt):String(e)}function St(e,t,n,i,r){return W.isFunction(i)?i.call(this,t,n):(r&&(t=n),W.isString(t)?W.isString(i)?-1!==t.indexOf(i):W.isRegExp(i)?i.test(t):void 0:void 0)}class Nt{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function r(e,t,n){const r=kt(t);if(!r)throw new Error("header name must be a non-empty string");const o=W.findKey(i,r);(!o||void 0===i[o]||!0===n||void 0===n&&!1!==i[o])&&(i[o||t]=Tt(e))}const o=(e,t)=>W.forEach(e,((e,n)=>r(e,n,t)));return W.isPlainObject(e)||e instanceof this.constructor?o(e,t):W.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?o(It(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=kt(e)){const n=W.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(W.isFunction(t))return t.call(this,e,n);if(W.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=kt(e)){const n=W.findKey(this,e);return!(!n||void 0===this[n]||t&&!St(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=kt(e)){const r=W.findKey(n,e);!r||t&&!St(0,n[r],r,t)||(delete n[r],i=!0)}}return W.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];e&&!St(0,this[r],r,e,!0)||(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return W.forEach(this,((i,r)=>{const o=W.findKey(n,r);if(o)return t[o]=Tt(i),void delete t[r];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();s!==r&&delete t[r],t[s]=Tt(i),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return W.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&W.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ct]=this[Ct]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=kt(e);t[i]||(!function(e,t){const n=W.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return W.isArray(e)?e.forEach(i):i(e),this}}Nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),W.freezeMethods(Nt.prototype),W.freezeMethods(Nt);var Rt=Nt;function xt(e,t){const n=this||wt,i=t||n,r=Rt.from(i.headers);let o=i.data;return W.forEach(e,(function(e){o=e.call(n,o,r.normalize(),t?t.status:void 0)})),r.normalize(),o}function At(e){return!(!e||!e.__CANCEL__)}function Ot(e,t,n){Y.call(this,null==e?"canceled":e,Y.ERR_CANCELED,t,n),this.name="CanceledError"}W.inherits(Ot,Y,{__CANCEL__:!0});var Pt=Ot;function Lt(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Dt=gt.isStandardBrowserEnv?{write:function(e,t,n,i,r,o){const s=[];s.push(e+"="+encodeURIComponent(t)),W.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),W.isString(i)&&s.push("path="+i),W.isString(r)&&s.push("domain="+r),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Mt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ut(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Mt(e,t):t}var Ft=gt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=W.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Bt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var jt=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=i[s];r||(r=c),n[o]=a,i[o]=c;let u=s,h=0;for(;u!==o;)h+=n[u++],u%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-r<t)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}};function qt(e,t){let n=0;const i=jt(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,c=i(a);n=o;const l={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&o<=s?(s-o)/c:void 0,event:r};l[t?"download":"upload"]=!0,e(l)}}var Ht="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=Rt.from(e.headers).normalize(),o=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}W.isFormData(i)&&(gt.isStandardBrowserEnv||gt.isStandardBrowserWebWorkerEnv?r.setContentType(!1):r.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const l=Ut(e.baseURL,e.url);function u(){if(!c)return;const i=Rt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());Lt((function(e){t(e),a()}),(function(e){n(e),a()}),{data:o&&"text"!==o&&"json"!==o?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),ft(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new Y("Request aborted",Y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new Y("Network Error",Y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||mt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Y(t,i.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,c)),c=null},gt.isStandardBrowserEnv){const t=(e.withCredentials||Ft(l))&&e.xsrfCookieName&&Dt.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&W.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),W.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&"json"!==o&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",qt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",qt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new Pt(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=Bt(l);h&&-1===gt.protocols.indexOf(h)?n(new Y("Unsupported protocol "+h+":",Y.ERR_BAD_REQUEST,e)):c.send(i||null)}))};const Wt={http:null,xhr:Ht};W.forEach(Wt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var zt={getAdapter:e=>{e=W.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=W.isString(n)?Wt[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new Y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(W.hasOwnProp(Wt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!W.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Wt};function Vt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Pt(null,e)}function $t(e){Vt(e),e.headers=Rt.from(e.headers),e.data=xt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return zt.getAdapter(e.adapter||wt.adapter)(e).then((function(t){return Vt(e),t.data=xt.call(e,e.transformResponse,t),t.headers=Rt.from(t.headers),t}),(function(t){return At(t)||(Vt(e),t&&t.response&&(t.response.data=xt.call(e,e.transformResponse,t.response),t.response.headers=Rt.from(t.response.headers))),Promise.reject(t)}))}const Kt=e=>e instanceof Rt?e.toJSON():e;function Gt(e,t){t=t||{};const n={};function i(e,t,n){return W.isPlainObject(e)&&W.isPlainObject(t)?W.merge.call({caseless:n},e,t):W.isPlainObject(t)?W.merge({},t):W.isArray(t)?t.slice():t}function r(e,t,n){return W.isUndefined(t)?W.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function o(e,t){if(!W.isUndefined(t))return i(void 0,t)}function s(e,t){return W.isUndefined(t)?W.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,o){return o in t?i(n,r):o in e?i(void 0,n):void 0}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>r(Kt(e),Kt(t),!0)};return W.forEach(Object.keys(Object.assign({},e,t)),(function(i){const o=c[i]||r,s=o(e[i],t[i],i);W.isUndefined(s)&&o!==a||(n[i]=s)})),n}const Jt="1.4.0",Yt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Yt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Qt={};Yt.transitional=function(e,t,n){function i(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,o)=>{if(!1===e)throw new Y(i(r," has been removed"+(t?" in "+t:"")),Y.ERR_DEPRECATED);return t&&!Qt[r]&&(Qt[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,o)}};var Xt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const o=i[r],s=t[o];if(s){const t=e[o],n=void 0===t||s(t,o,e);if(!0!==n)throw new Y("option "+o+" must be "+n,Y.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Y("Unknown option "+o,Y.ERR_BAD_OPTION)}},validators:Yt};const Zt=Xt.validators;class en{constructor(e){this.defaults=e,this.interceptors={request:new pt,response:new pt}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Gt(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let o;void 0!==n&&Xt.assertOptions(n,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean)},!1),null!=i&&(W.isFunction(i)?t.paramsSerializer={serialize:i}:Xt.assertOptions(i,{encode:Zt.function,serialize:Zt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),o=r&&W.merge(r.common,r[t.method]),o&&W.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=Rt.concat(o,r);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[$t.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);h<u;)l=l.then(e[h++],e[h++]);return l}u=s.length;let d=t;for(h=0;h<u;){const e=s[h++],t=s[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=$t.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=c.length;h<u;)l=l.then(c[h++],c[h++]);return l}getUri(e){return ft(Ut((e=Gt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}W.forEach(["delete","get","head","options"],(function(e){en.prototype[e]=function(t,n){return this.request(Gt(n||{},{method:e,url:t,data:(n||{}).data}))}})),W.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(Gt(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}en.prototype[e]=t(),en.prototype[e+"Form"]=t(!0)}));var tn=en;class nn{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new Pt(e,i,r),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new nn((function(t){e=t})),cancel:e}}}var rn=nn;const on={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(on).forEach((([e,t])=>{on[t]=e}));var sn=on;const an=function e(t){const n=new tn(t),i=l(tn.prototype.request,n);return W.extend(i,tn.prototype,n,{allOwnKeys:!0}),W.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(Gt(t,n))},i}(wt);an.Axios=tn,an.CanceledError=Pt,an.CancelToken=rn,an.isCancel=At,an.VERSION=Jt,an.toFormData=at,an.AxiosError=Y,an.Cancel=an.CanceledError,an.all=function(e){return Promise.all(e)},an.spread=function(e){return function(t){return e.apply(null,t)}},an.isAxiosError=function(e){return W.isObject(e)&&!0===e.isAxiosError},an.mergeConfig=Gt,an.AxiosHeaders=Rt,an.formToJSON=e=>_t(W.isHTMLForm(e)?new FormData(e):e),an.HttpStatusCode=sn,an.default=an;var cn=an;const{Axios:ln,AxiosError:un,CanceledError:hn,isCancel:dn,CancelToken:fn,VERSION:pn,all:mn,Cancel:gn,isAxiosError:yn,spread:_n,toFormData:vn,AxiosHeaders:bn,HttpStatusCode:wn,formToJSON:En,mergeConfig:In}=cn;var Cn={};e(Cn,"Spinner",(function(){return Sn}),(function(e){return Sn=e}));var kn=function(){return kn=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},kn.apply(this,arguments)},Tn={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},Sn=function(){function e(e){void 0===e&&(e={}),this.opts=kn(kn({},Tn),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),Nn(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",i="none";!0===t.shadow?i="0 2px 4px #000":"string"==typeof t.shadow&&(i=t.shadow);for(var r=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],i=0,r=e.split(",");i<r.length;i++){var o=r[i].match(t);if(null!==o){var s=+o[2],a=+o[5],c=o[4],l=o[7];0!==s||c||(c=l),0!==a||l||(l=c),c===l&&n.push({prefix:o[1]||"",x:s,y:a,xUnits:c,yUnits:l,end:o[8]})}}return n}(i),o=0;o<t.lines;o++){var s=~~(360/t.lines*o+t.rotate),a=Nn(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:Rn(t.fadeColor,o),borderRadius:n,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+t.radius+"px)"}),c=o*t.direction/t.lines/t.speed;c-=1/t.speed;var l=Nn(document.createElement("div"),{width:"100%",height:"100%",background:Rn(t.color,o),borderRadius:n,boxShadow:xn(r,s),animation:1/t.speed+"s linear "+c+"s infinite "+t.animation});a.appendChild(l),e.appendChild(a)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function Nn(e,t){for(var n in t)e.style[n]=t[n];return e}function Rn(e,t){return"string"==typeof e?e:e[t%e.length]}function xn(e,t){for(var n=[],i=0,r=e;i<r.length;i++){var o=r[i],s=An(o.x,o.y,t);n.push(o.prefix+s[0]+o.xUnits+" "+s[1]+o.yUnits+o.end)}return n.join(", ")}function An(e,t,n){var i=n*Math.PI/180,r=Math.sin(i),o=Math.cos(i);return[Math.round(1e3*(e*o+t*r))/1e3,Math.round(1e3*(-e*r+t*o))/1e3]}const On={spinner:document.querySelector(".centered-element"),homeCategoryBooksList:document.querySelector(".js-home-category-books-list"),homeObserverTarget:document.querySelector(".js-guard"),homeMainScrollUp:document.querySelector(".js-home-main-scroll-up"),homeButtonsSeeMore:document.getElementsByClassName("home-see-more-btn"),homeMainTitle:document.querySelector(".home-main-title"),homeMainTitleAccent:document.querySelector(".home-main-title-accent"),homeBookTitles:document.getElementsByClassName("home-books-book-title"),categoriesList:document.querySelector(".categories-list"),categoriesContainer:document.querySelector(".js-categories-list"),categoriesContainerItem:document.querySelector(".js-categories-list-item"),toggleEl:document.querySelector("#theme-switcher"),bodyEl:document.querySelector("body"),switcherEl:document.querySelector(".js-dark-switcher"),btnOpenModalLogin:document.querySelector(".header__menu-login"),modalLogin:document.querySelector("#login-modal"),btnCloseModalLogin:document.querySelector(".modal-close-btn"),btnSignUp:document.querySelector('[data-sign="up"]'),btnSignIn:document.querySelector('[data-sign="in"]'),btnGoogle:document.querySelector('[name="submitUpBtn"]'),inputName:document.querySelector('[name="username"]'),switcherCircle:document.querySelector(".switcher-input"),btnOpenBurgerMenu:document.querySelector(".js-open-menu"),headerNav:document.querySelector(".header__nav"),btnAddShoppinfList:document.querySelector("#js-book-modal-btn"),supportUkraineAside:document.querySelector(".support-box"),headerHomeBtn:document.querySelectorAll(".js-nav__list-home"),headerShoppingListBtn:document.querySelectorAll(".js-nav__list-sl")};let Pn=new(0,Cn.Spinner)({zIndex:100});class Ln{constructor(e){this.url=e,this.selectedCategory="",this._id=""}async fetchPhoto(){Pn.spin(On.spinner);const e=`https://books-backend.p.goit.global/books/${this.url}${this.selectedCategory}${this._id}`;try{return(await async function(e){const t=[0,700,1500];let n;for(const i of t){i&&await new Promise((e=>setTimeout(e,i)));try{return await cn.get(e)}catch(e){n=e;const t=e.response?.status;if(429!==t&&500!==t&&503!==t)throw e}}throw n}(e)).data}catch(e){return console.log(e.message),null}finally{Pn.stop()}}}const Dn=new Ln("category-list"),Mn=new Ln("top-books"),Un=new Ln("category?category="),Fn=new Ln("");async function Bn(){try{const e=await Mn.fetchPhoto();return Array.isArray(e)?0===e.length?(c.Notify.failure("No bestsellers are available right now."),[]):e:(c.Notify.failure("The book service is busy right now. Please try again."),[])}catch(e){return console.log(e.message),[]}}let jn,qn=0,Hn=new IntersectionObserver((function(){if(qn+=4,qn>=Wn.length)return void Hn.unobserve(On.homeObserverTarget);On.homeCategoryBooksList.querySelector(".home-books-list")?.insertAdjacentHTML("beforeend",$n(zn(Wn.slice(qn,qn+4))))}),{root:null,rootMargin:"100px",threshold:1}),Wn=[];function zn(e){return e.flatMap((({books:e})=>e))}function Vn(){qn=0,Bn().then((e=>{Array.isArray(e)&&e.length&&(Wn=e,jn=Wn.length,On.homeCategoryBooksList.insertAdjacentHTML("beforeend",`<li class="home-books-category-item"><ul class="home-books-list">${$n(zn(Wn.slice(0,4)))}</ul></li>`),Hn.observe(On.homeObserverTarget))})).catch((e=>console.log(e)))}function $n(e){return e.map((({_id:e,author:t,book_image:n,title:i})=>{const r=i||"",o=r.length>40?r.slice(0,37)+"...":r;return`  <li class="home-books-item js-home-books-item" data-id=${e}>\n                <img class="home-books-book-picture" src="${n}" alt="${o}" />\n                <p class="home-books-book-title">${o}</p>\n                <p class="home-books-book-author">${t||""}</p>\n              </li>`})).join("")}On.categoriesContainer.addEventListener("click",(function(e){if(!e.target.classList.contains("js-all-categories"))return;On.homeCategoryBooksList.innerHTML="",On.homeMainTitle.textContent="Best sellers",On.homeMainTitleAccent.textContent="Books",Vn()})),Vn(),On.homeMainScrollUp.addEventListener("click",(function(){const{height:e}=On.homeCategoryBooksList.getBoundingClientRect();window.scrollBy({top:-e,behavior:"smooth"}),On.homeMainScrollUp.style.display="none"}));let Kn=localStorage.getItem("user-theme")||"light";window.addEventListener("load",(function(){"dark"===localStorage.getItem("user-theme")&&On.bodyEl.classList.add("dark-theme")}));const Gn=window.location.pathname.includes("shopping-cart");On.headerHomeBtn.forEach((e=>e.classList.toggle("current",!Gn))),On.headerShoppingListBtn.forEach((e=>e.classList.toggle("current",Gn))),"dark"===Kn&&On.toggleEl&&(On.toggleEl.checked=!0),On.toggleEl.addEventListener("click",(function(){Kn="light"===Kn?"dark":"light",localStorage.setItem("user-theme",Kn),On.bodyEl.classList.toggle("dark-theme")})),function(){const e=document.createElement("li");e.classList.add("js-all-categories","js-category-name-item","categories-list__item","category-active"),e.textContent="All categories",On.categoriesContainer.prepend(e)}(),async function(){try{const e=await Dn.fetchPhoto();return Array.isArray(e)?0===e.length?(c.Notify.failure("No book categories are available right now."),[]):e:(c.Notify.failure("The book service is busy right now. Please try again."),[])}catch(e){return console.log(e.message),[]}}().then((e=>{Array.isArray(e)&&e.length&&On.categoriesContainer.insertAdjacentHTML("beforeend",e.map((({list_name:e})=>{const t=document.createElement("li");return t.className="categories-list__item categories-list__item-name js-category-name-item",t.dataset.category=e,t.textContent=e,t.outerHTML})).join(""))})).catch((e=>console.log(e)));var Jn;Jn=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("kpnp7");var Yn;Yn=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("hgGTc");var Qn;Qn=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("2MWV0");var Xn;Xn=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("4ZTUI");var Zn;Zn=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("hBth6");var ei;ei=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("gHqnK");var ti;ti=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("6LSSl");var ni;ni=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("7ifE3");var ii;ii=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9i4x1");var ri;ri=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("dr5to");var oi;oi=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("cSsiM");var si;si=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("irDEj");var ai;ai=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("93Ubl");var ci;ci=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("cLv6B");var li;li=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("9duFQ");var ui;ui=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("1sqtC");var hi;hi=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("kgIN4");var di;di=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("hvqBJ");const fi=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:n(Jn),img2x:n(ri)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:n(Yn),img2x:n(oi)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:n(Qn),img2x:n(si)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:n(Xn),img2x:n(ai)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:n(Zn),img2x:n(ci)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:n(ei),img2x:n(li)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:n(ti),img2x:n(ui)},{title:"Medecins Sans Frontieres",url:"https://www.msf.org/ukraine",img:n(ni),img2x:n(hi)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:n(ii),img2x:n(di)}],pi=document.querySelector(".js-support"),mi=fi.map((({title:e,url:t,img:n,img2x:i},r)=>`<li class="support-link">\n        <a class="js-target support-number" href="${t}" target="_blank" rel="noreferrer">\n          <span>${String(r+1).padStart(2,"0")}</span>\n          <img class="support-img" srcset="${n} 1x, ${i} 2x" src="${n}" alt="${e}" />\n        </a>\n      </li>`)).join("");pi.insertAdjacentHTML("beforeend",mi);document.querySelector(".support-button")?.addEventListener("click",(()=>{document.querySelector(".slider-container")?.scrollBy({top:140,behavior:"smooth"})}));let gi=0;document.querySelector(".slider-container");const yi=document.querySelector(".support-list"),_i=document.querySelector(".slider-button"),vi=document.querySelectorAll(".support-link");let bi=vi.length;vi.forEach((e=>{e.style.minHeight="32px"})),_i.addEventListener("click",(()=>{(function(){const e=window.innerWidth;return e>=1440?bi-(Math.abs(gi)+192)/39:e>=768?bi-(Math.abs(gi)+192)/40:bi-(Math.abs(gi)+192)/55})()>=1?gi-=32:gi=0,yi.style.transition="transform 0.3s ease-out",wi(),setTimeout((()=>{yi.style.transition=""}),300)})),window.addEventListener("resize",(()=>{bi=vi.length,wi()}));const wi=()=>{yi.style.transform=`translateY(${gi}px)`};async function Ei(e){try{Un.selectedCategory=encodeURIComponent(e);const t=await Un.fetchPhoto();return Array.isArray(t)?0===t.length?(c.Notify.failure("There are no books in this category."),[]):t:(c.Notify.failure("The book service is busy right now. Please try that category again."),[])}catch(e){return console.log(e.message),[]}}function Ii(e){return`<li class="home-books-category-item"><ul class="home-books-list">${e.map((({author:e,book_image:t,title:n,_id:i})=>{const r=n||"",o=e||"",s=r.length>40?r.slice(0,37)+"...":r;return`<li class="home-books-item js-home-books-item" data-id=${i}>\n                <img class="home-books-book-picture" src="${t}" alt="${s}" />\n                <p class="home-books-book-title">${s}</p>\n                <p class="home-books-book-author">${o.length>40?o.slice(0,37)+"...":o}</p>\n              </li>`})).join("")}</ul></li>`}function Ci(e){const t=e.split(" "),n=t[t.length-1];t.pop();const i=t.join(" ");On.homeMainTitle.textContent=i,On.homeMainTitleAccent.textContent=n}On.homeCategoryBooksList.addEventListener("click",(function(e){if(!e.target.classList.contains("js-btn-more"))return;On.homeCategoryBooksList.innerHTML="",Hn.unobserve(On.homeObserverTarget);const t=e.target.dataset.category;[...On.categoriesContainer.children].map((e=>{const n=e.dataset.category;e.classList.remove("category-active"),n===t&&e.classList.add("category-active")})),Ci(t),Ei(t).then((e=>{e?.length&&On.homeCategoryBooksList.insertAdjacentHTML("beforeend",Ii(e))})).catch((e=>console.log(e)))})),On.categoriesContainer.addEventListener("click",(function(e){if(!e.target.classList.contains("js-category-name-item"))return;[...On.categoriesContainer.children].map((e=>e.classList.remove("category-active"))),e.target.classList.add("category-active"),On.homeCategoryBooksList.innerHTML="",Hn.unobserve(On.homeObserverTarget);const t=e.target.dataset.category;if(t){if(Ci(t),e.target.classList.contains("js-all-categories"))return;Ei(t).then((e=>{e?.length&&On.homeCategoryBooksList.insertAdjacentHTML("beforeend",Ii(e))})).catch((e=>console.log(e)))}}));var ki,Ti,Si,Ni=ki={};function Ri(){throw new Error("setTimeout has not been defined")}function xi(){throw new Error("clearTimeout has not been defined")}function Ai(e){if(Ti===setTimeout)return setTimeout(e,0);if((Ti===Ri||!Ti)&&setTimeout)return Ti=setTimeout,setTimeout(e,0);try{return Ti(e,0)}catch(t){try{return Ti.call(null,e,0)}catch(t){return Ti.call(this,e,0)}}}!function(){try{Ti="function"==typeof setTimeout?setTimeout:Ri}catch(e){Ti=Ri}try{Si="function"==typeof clearTimeout?clearTimeout:xi}catch(e){Si=xi}}();var Oi,Pi=[],Li=!1,Di=-1;function Mi(){Li&&Oi&&(Li=!1,Oi.length?Pi=Oi.concat(Pi):Di=-1,Pi.length&&Ui())}function Ui(){if(!Li){var e=Ai(Mi);Li=!0;for(var t=Pi.length;t;){for(Oi=Pi,Pi=[];++Di<t;)Oi&&Oi[Di].run();Di=-1,t=Pi.length}Oi=null,Li=!1,function(e){if(Si===clearTimeout)return clearTimeout(e);if((Si===xi||!Si)&&clearTimeout)return Si=clearTimeout,clearTimeout(e);try{Si(e)}catch(t){try{return Si.call(null,e)}catch(t){return Si.call(this,e)}}}(e)}}function Fi(e,t){this.fun=e,this.array=t}function Bi(){}Ni.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Pi.push(new Fi(e,t)),1!==Pi.length||Li||Ai(Ui)},Fi.prototype.run=function(){this.fun.apply(null,this.array)},Ni.title="browser",Ni.browser=!0,Ni.env={},Ni.argv=[],Ni.version="",Ni.versions={},Ni.on=Bi,Ni.addListener=Bi,Ni.once=Bi,Ni.off=Bi,Ni.removeListener=Bi,Ni.removeAllListeners=Bi,Ni.emit=Bi,Ni.prependListener=Bi,Ni.prependOnceListener=Bi,Ni.listeners=function(e){return[]},Ni.binding=function(e){throw new Error("process.binding is not supported")},Ni.cwd=function(){return"/"},Ni.chdir=function(e){throw new Error("process.chdir is not supported")},Ni.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ji=!1,qi=!1,Hi="${JSCORE_VERSION}",Wi=function(e,t){if(!e)throw zi(t)},zi=function(e){return new Error("Firebase Database ("+Hi+") INTERNAL ASSERT FAILED: "+e)},Vi=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},$i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Vi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==s||null==a)throw new Ki;const c=r<<2|o>>4;if(i.push(c),64!==s){const e=o<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gi=function(e){const t=Vi(e);return $i.encodeByteArray(t,!0)},Ji=function(e){return Gi(e).replace(/\./g,"")},Yi=function(e){try{return $i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qi(e){return Xi(void 0,e)}function Xi(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Xi(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zi=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,er=()=>{try{return Zi()||(()=>{if(void 0===ki||void 0===ki.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Yi(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},tr=e=>{var t,n;return null===(n=null===(t=er())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},nr=e=>{const t=tr(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},ir=e=>{var t;return null===(t=er())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ji(JSON.stringify({alg:"none",type:"JWT"})),Ji(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ar(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sr())}function cr(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function lr(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function ur(){const e=sr();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function hr(){return!0===ji||!0===qi}function dr(){try{return"object"==typeof indexedDB}catch(e){return!1}}class fr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pr.prototype.create)}}class pr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?function(e,t){return e.replace(mr,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new fr(i,s,n)}}const mr=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e){return JSON.parse(e)}function yr(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=function(e){let t={},n={},i={},r="";try{const o=e.split(".");t=gr(Yi(o[0])||""),n=gr(Yi(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},vr=function(e){const t=_r(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},br=function(e){const t=_r(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Er(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Ir(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Cr(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function kr(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(Tr(n)&&Tr(o)){if(!kr(n,o))return!1}else if(n!==o)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Tr(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sr(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Nr(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Rr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^s&(a^c),r=1518500249):(i=s^a^c,r=1859775393):e<60?(i=s&a|c&(s|a),r=2400959708):(i=s^a^c,r=3395469782);const t=(o<<5|o>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(0===o)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function Ar(e,t){const n=new Or(e,t);return n.subscribe.bind(n)}class Or{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Pr),void 0===i.error&&(i.error=Pr),void 0===i.complete&&(i.complete=Pr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Pr(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dr=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,Wi(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Mr=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ur(e){return e&&e._delegate?e._delegate:e}class Fr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new rr;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===Br?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class qr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=[];var Wr,zr;(zr=Wr||(Wr={}))[zr.DEBUG=0]="DEBUG",zr[zr.VERBOSE=1]="VERBOSE",zr[zr.INFO=2]="INFO",zr[zr.WARN=3]="WARN",zr[zr.ERROR=4]="ERROR",zr[zr.SILENT=5]="SILENT";const Vr={debug:Wr.DEBUG,verbose:Wr.VERBOSE,info:Wr.INFO,warn:Wr.WARN,error:Wr.ERROR,silent:Wr.SILENT},$r=Wr.INFO,Kr={[Wr.DEBUG]:"log",[Wr.VERBOSE]:"log",[Wr.INFO]:"info",[Wr.WARN]:"warn",[Wr.ERROR]:"error"},Gr=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Kr[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Jr{constructor(e){this.name=e,this._logLevel=$r,this._logHandler=Gr,this._userLogHandler=null,Hr.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Wr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Vr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Wr.DEBUG,...e),this._logHandler(this,Wr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Wr.VERBOSE,...e),this._logHandler(this,Wr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Wr.INFO,...e),this._logHandler(this,Wr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Wr.WARN,...e),this._logHandler(this,Wr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Wr.ERROR,...e),this._logHandler(this,Wr.ERROR,...e)}}let Yr,Qr;const Xr=new WeakMap,Zr=new WeakMap,eo=new WeakMap,to=new WeakMap,no=new WeakMap;let io={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Zr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eo.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return so(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ro(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Qr||(Qr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ao(this),t),so(Xr.get(this))}:function(...t){return so(e.apply(ao(this),t))}:function(t,...n){const i=e.call(ao(this),t,...n);return eo.set(i,t.sort?t.sort():[t]),so(i)}}function oo(e){return"function"==typeof e?ro(e):(e instanceof IDBTransaction&&function(e){if(Zr.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));Zr.set(e,t)}(e),t=e,(Yr||(Yr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,io):e);var t}function so(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(so(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Xr.set(t,e)})).catch((()=>{})),no.set(t,e),t}(e);if(to.has(e))return to.get(e);const t=oo(e);return t!==e&&(to.set(e,t),no.set(t,e)),t}const ao=e=>no.get(e);function co(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(e,t),a=so(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(so(s.result),e.oldVersion,e.newVersion,so(s.transaction),e)})),n&&s.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const lo=["get","getKey","getAll","getAllKeys","count"],uo=["put","add","delete","clear"],ho=new Map;function fo(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ho.get(t))return ho.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=uo.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!lo.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&o.done]))[0]};return ho.set(t,o),o}io=(e=>({...e,get:(t,n,i)=>fo(t,n)||e.get(t,n,i),has:(t,n)=>!!fo(t,n)||e.has(t,n)}))(io);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const mo="@firebase/app",go="0.9.9",yo=new Jr("@firebase/app"),_o="[DEFAULT]",vo={[mo]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},bo=new Map,wo=new Map;function Eo(e,t){try{e.container.addComponent(t)}catch(n){yo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Io(e){const t=e.name;if(wo.has(t))return yo.debug(`There were multiple attempts to register component ${t}.`),!1;wo.set(t,e);for(const t of bo.values())Eo(t,e);return!0}function Co(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ko=new pr("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Fr("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ko.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="9.21.0";function No(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:_o,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw ko.create("bad-app-name",{appName:String(r)});var o;if(n||(n=null===(o=er())||void 0===o?void 0:o.config),!n)throw ko.create("no-options");const s=bo.get(r);if(s){if(kr(n,s.options)&&kr(i,s.config))return s;throw ko.create("duplicate-app",{appName:r})}const a=new qr(r);for(const e of wo.values())a.addComponent(e);const c=new To(n,i,a);return bo.set(r,c),c}function Ro(e="[DEFAULT]"){const t=bo.get(e);if(!t&&e===_o)return No();if(!t)throw ko.create("no-app",{appName:e});return t}function xo(e,t,n){var i;let r=null!==(i=vo[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void yo.warn(e.join(" "))}Io(new Fr(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ao="firebase-heartbeat-store";let Oo=null;function Po(){return Oo||(Oo=co("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Ao)}}).catch((e=>{throw ko.create("idb-open",{originalErrorMessage:e.message})}))),Oo}async function Lo(e,t){try{const n=(await Po()).transaction(Ao,"readwrite"),i=n.objectStore(Ao);return await i.put(t,Do(e)),n.done}catch(e){if(e instanceof fr)yo.warn(e.message);else{const t=ko.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});yo.warn(t.message)}}}function Do(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fo(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Uo();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Uo(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Bo(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Bo(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Ji(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uo(){return(new Date).toISOString().substring(0,10)}class Fo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!dr()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Po()).transaction(Ao).objectStore(Ao).get(Do(e))}catch(e){if(e instanceof fr)yo.warn(e.message);else{const t=ko.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});yo.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Lo(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Lo(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Bo(e){return Ji(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jo;jo="",Io(new Fr("platform-logger",(e=>new po(e)),"PRIVATE")),Io(new Fr("heartbeat",(e=>new Mo(e)),"PRIVATE")),xo(mo,go,jo),xo(mo,go,"esm2017"),xo("fire-js","");function qo(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Ho(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wo=Ho,zo=new pr("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Vo=new Jr("@firebase/auth");function $o(e,...t){Vo.logLevel<=Wr.ERROR&&Vo.error(`Auth (9.21.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(e,...t){throw Yo(e,...t)}function Go(e,...t){return Yo(e,...t)}function Jo(e,t,n){const i=Object.assign(Object.assign({},Wo()),{[t]:n});return new pr("auth","Firebase",i).create(t,{appName:e.name})}function Yo(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return zo.create(e,...t)}function Qo(e,t,...n){if(!e)throw Yo(t,...n)}function Xo(e){const t="INTERNAL ASSERTION FAILED: "+e;throw $o(t),new Error(t)}function Zo(e,t){e||Xo(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ts(){return"http:"===ns()||"https:"===ns()}function ns(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ts()||cr()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zo(t>e,"Short delay should be less than long delay!"),this.isMobile=ar()||lr()}get(){return is()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e,t){Zo(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Xo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Xo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Xo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},cs=new rs(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function us(e,t,n,i,r={}){return hs(e,r,(async()=>{let r={},o={};i&&("GET"===t?o=i:r={body:JSON.stringify(i)});const s=Sr(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ss.fetch()(fs(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function hs(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},as),t);try{const t=new ps(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ms(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ms(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw ms(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw ms(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Jo(e,a,s);Ko(e,a)}}catch(t){if(t instanceof fr)throw t;Ko(e,"network-request-failed",{message:String(t)})}}async function ds(e,t,n,i,r={}){const o=await us(e,t,n,i,r);return"mfaPendingCredential"in o&&Ko(e,"multi-factor-auth-required",{_serverResponse:o}),o}function fs(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?os(e.config,r):`${e.config.apiScheme}://${r}`}class ps{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Go(this.auth,"network-request-failed"))),cs.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ms(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Go(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gs(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(e){return 1e3*Number(e)}function _s(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const e=Yi(n);return e?JSON.parse(e):($o("Failed to decode base64 JWT payload"),null)}catch(e){return $o("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function vs(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof fr&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class bs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gs(this.lastLoginAt),this.creationTime=gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(e){var t;const n=e.auth,i=await e.getIdToken(),r=await vs(e,async function(e,t){return us(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Qo(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=qo(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=s,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new ws(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Qo(e.idToken,"internal-error"),Qo(void 0!==e.idToken,"internal-error"),Qo(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=_s(e);return Qo(t,"internal-error"),Qo(void 0!==t.exp,"internal-error"),Qo(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Qo(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await hs(e,{},(async()=>{const n=Sr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=fs(e,i,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",ss.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new Is;return n&&(Qo("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(Qo("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(Qo("number"==typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Is,this.toJSON())}_performRefresh(){return Xo("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e,t){Qo("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ks{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=qo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ws(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await vs(this,this.stsTokenManager.getToken(this.auth,e));return Qo(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ur(e),i=await n.getIdToken(t),r=_s(i);Qo(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:gs(ys(r.auth_time)),issuedAtTime:gs(ys(r.iat)),expirationTime:gs(ys(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ur(e);await Es(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Qo(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ks(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Qo(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Es(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vs(this,async function(e,t){return us(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:_,emailVerified:v,isAnonymous:b,providerData:w,stsTokenManager:E}=t;Qo(_&&E,e,"internal-error");const I=Is.fromJSON(this.name,E);Qo("string"==typeof _,e,"internal-error"),Cs(u,e.name),Cs(h,e.name),Qo("boolean"==typeof v,e,"internal-error"),Qo("boolean"==typeof b,e,"internal-error"),Cs(d,e.name),Cs(f,e.name),Cs(p,e.name),Cs(m,e.name),Cs(g,e.name),Cs(y,e.name);const C=new ks({uid:_,auth:e,email:h,emailVerified:v,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new Is;i.updateFromServerResponse(t);const r=new ks({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Es(r),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Map;function Ss(e){Zo(e instanceof Function,"Expected a class definition");let t=Ts.get(e);return t?(Zo(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ts.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ns.type="NONE";const Rs=Ns;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(e,t,n){return`firebase:${e}:${t}:${n}`}class As{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=xs(this.userKey,i.apiKey,r),this.fullPersistenceKey=xs("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ks._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new As(Ss(Rs),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Ss(Rs);const o=xs(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const i=ks._fromJSON(e,t);n!==r&&(s=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new As(r,e,n)):new As(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ms(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ps(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Fs(t))return"Blackberry";if(Bs(t))return"Webos";if(Ls(t))return"Safari";if((t.includes("chrome/")||Ds(t))&&!t.includes("edge/"))return"Chrome";if(Us(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ps(e=sr()){return/firefox\//i.test(e)}function Ls(e=sr()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ds(e=sr()){return/crios\//i.test(e)}function Ms(e=sr()){return/iemobile/i.test(e)}function Us(e=sr()){return/android/i.test(e)}function Fs(e=sr()){return/blackberry/i.test(e)}function Bs(e=sr()){return/webos/i.test(e)}function js(e=sr()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function qs(){return ur()&&10===document.documentMode}function Hs(e=sr()){return js(e)||Us(e)||Bs(e)||Fs(e)||/windows phone/i.test(e)||Ms(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ws(e,t=[]){let n;switch(e){case"Browser":n=Os(sr());break;case"Worker":n=`${Os(sr())}-${e}`;break;default:n=e}return`${n}/JsCore/9.21.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(e,t){return us(e,"GET","/v2/recaptchaConfig",ls(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(e){return void 0!==e&&void 0!==e.enterprise}class $s{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(e){return new Promise(((t,n)=>{const i=document.createElement("script");var r,o;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Go("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function Gs(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Js{constructor(e){this.type="recaptcha-enterprise",this.auth=Zs(e)}async verify(e="verify",t=!1){function n(t,n,i){const r=window.grecaptcha;Vs(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{zs(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new $s(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&Vs(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Ks("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Ys(e,t,n,i=!1){const r=new Js(e);let o;try{o=await r.verify(n)}catch(e){o=await r.verify(n,!0)}const s=Object.assign({},t);return i?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ea(this),this.idTokenSubscription=new ea(this),this.beforeStateQueue=new Qs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ss(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Qo(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Es(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ur(e):null;return t&&Qo(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Qo(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ss(e))}))}async initializeRecaptchaConfig(){const e=await zs(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new $s(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Js(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ss(e)||this._popupRedirectResolver;Qo(t,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[Ss(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Qo(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Qo(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ws(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Vo.logLevel<=Wr.WARN&&Vo.warn(`Auth (9.21.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Zs(e){return Ur(e)}class ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ar((e=>this.observer=e))}get next(){return Qo(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e,t,n){const i=Zs(e);Qo(i._canInitEmulator,i,"emulator-config-failed"),Qo(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=na(t),{host:s,port:a}=function(e){const t=na(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:ia(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:ia(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function na(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ia(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ra{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xo("not implemented")}_getIdTokenResponse(e){return Xo("not implemented")}_linkToIdToken(e,t){return Xo("not implemented")}_getReauthenticationResolver(e){return Xo("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(e,t){return us(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function sa(e,t){return ds(e,"POST","/v1/accounts:signInWithPassword",ls(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aa extends ra{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new aa(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new aa(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Ys(e,n,"signInWithPassword");return sa(e,t)}return sa(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Ys(e,n,"signInWithPassword");return sa(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ds(e,"POST","/v1/accounts:signInWithEmailLink",ls(e,t))}(e,{email:this._email,oobCode:this._password});default:Ko(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return oa(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ds(e,"POST","/v1/accounts:signInWithEmailLink",ls(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ko(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(e,t){return ds(e,"POST","/v1/accounts:signInWithIdp",ls(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends ra{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new la(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ko("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=qo(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new la(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return ca(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ca(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ca(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Sr(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha extends ra{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ha({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ha({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ds(e,"POST","/v1/accounts:signInWithPhoneNumber",ls(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ds(e,"POST","/v1/accounts:signInWithPhoneNumber",ls(e,t));if(n.temporaryProof)throw ms(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ds(e,"POST","/v1/accounts:signInWithPhoneNumber",ls(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ua)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new ha({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){var t,n,i,r,o,s;const a=Nr(Rr(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Qo(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Nr(Rr(e)).link,n=t?Nr(Rr(t)).deep_link_id:null,i=Nr(Rr(e)).deep_link_id;return(i?Nr(Rr(i)).link:null)||i||n||t||e}(e);try{return new da(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa{constructor(){this.providerId=fa.PROVIDER_ID}static credential(e,t){return aa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=da.parseLink(t);return Qo(n,"argument-error"),aa._fromEmailAndCode(e,n.code,n.tenantId)}}fa.PROVIDER_ID="password",fa.EMAIL_PASSWORD_SIGN_IN_METHOD="password",fa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends pa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ga extends ma{constructor(){super("facebook.com")}static credential(e){return la._fromParams({providerId:ga.PROVIDER_ID,signInMethod:ga.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ga.credentialFromTaggedObject(e)}static credentialFromError(e){return ga.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ga.credential(e.oauthAccessToken)}catch(e){return null}}}ga.FACEBOOK_SIGN_IN_METHOD="facebook.com",ga.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return la._fromParams({providerId:ya.PROVIDER_ID,signInMethod:ya.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ya.credentialFromTaggedObject(e)}static credentialFromError(e){return ya.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ya.credential(t,n)}catch(e){return null}}}ya.GOOGLE_SIGN_IN_METHOD="google.com",ya.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a extends ma{constructor(){super("github.com")}static credential(e){return la._fromParams({providerId:_a.PROVIDER_ID,signInMethod:_a.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _a.credentialFromTaggedObject(e)}static credentialFromError(e){return _a.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _a.credential(e.oauthAccessToken)}catch(e){return null}}}_a.GITHUB_SIGN_IN_METHOD="github.com",_a.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class va extends ma{constructor(){super("twitter.com")}static credential(e,t){return la._fromParams({providerId:va.PROVIDER_ID,signInMethod:va.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return va.credentialFromTaggedObject(e)}static credentialFromError(e){return va.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return va.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ba(e,t){return ds(e,"POST","/v1/accounts:signUp",ls(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */va.TWITTER_SIGN_IN_METHOD="twitter.com",va.PROVIDER_ID="twitter.com";class wa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ks._fromIdTokenResponse(e,n,i),o=Ea(n);return new wa({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Ea(n);return new wa({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Ea(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ia extends fr{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ia.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ia(e,t,n,i)}}function Ca(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ia._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(e,t,n=!1){const i=await vs(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wa._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ta(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const o=await vs(e,Ca(i,r,t,e),n);Qo(o.idToken,i,"internal-error");const s=_s(o.idToken);Qo(s,i,"internal-error");const{sub:a}=s;return Qo(e.uid===a,i,"user-mismatch"),wa._forOperation(e,r,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ko(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(e,t,n=!1){const i="signIn",r=await Ca(e,i,t),o=await wa._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function Na(e,t){return Sa(Zs(e),t)}async function Ra(e,t,n){var i;const r=Zs(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(i=r._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await Ys(r,o,"signUpPassword");s=ba(r,e)}else s=ba(r,o).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Ys(r,o,"signUpPassword");return ba(r,e)}return Promise.reject(e)}));const a=await s.catch((e=>Promise.reject(e))),c=await wa._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function xa(e,t,n){return Na(Ur(e),fa.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(e,t,n,i){return Ur(e).onAuthStateChanged(t,n,i)}new WeakMap;const Oa="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends Pa{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=sr();return Ls(e)||js(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Hs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);qs()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}La.type="LOCAL";const Da=La;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends Pa{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ma.type="SESSION";const Ua=Ma;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Fa(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ba(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fa.receivers=[];class ja{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const c=Ba("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ha(){return void 0!==qa().WorkerGlobalScope&&"function"==typeof qa().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wa="firebaseLocalStorageDb",za="firebaseLocalStorage",Va="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ka(e,t){return e.transaction([za],t?"readwrite":"readonly").objectStore(za)}function Ga(){const e=indexedDB.open(Wa,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(za,{keyPath:Va})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(za)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Wa);return new $a(e).toPromise()}(),t(await Ga()))}))}))}async function Ja(e,t,n){const i=Ka(e,!0).put({[Va]:t,value:n});return new $a(i).toPromise()}function Ya(e,t){const n=Ka(e,!0).delete(t);return new $a(n).toPromise()}class Qa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ga()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ha()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(Ha()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ja(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ga();return await Ja(e,Oa,"1"),await Ya(e,Oa),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ja(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Ka(e,!1).get(t),i=await new $a(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ya(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ka(e,!1).getAll();return new $a(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Qa.type="LOCAL";const Xa=Qa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Gs("rcb"),new rs(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Za="recaptcha";async function ec(e,t,n){var i;const r=await n.verify();try{let o;if(Qo("string"==typeof r,e,"argument-error"),Qo(n.type===Za,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){Qo("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return us(e,"POST","/v2/accounts/mfaEnrollment:start",ls(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Qo("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;Qo(n,e,"missing-multi-factor-info");const s=await function(e,t){return us(e,"POST","/v2/accounts/mfaSignIn:start",ls(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return us(e,"POST","/v1/accounts:sendVerificationCode",ls(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{constructor(e){this.providerId=tc.PROVIDER_ID,this.auth=Zs(e)}verifyPhoneNumber(e,t){return ec(this.auth,e,Ur(t))}static credential(e,t){return ha._fromVerification(e,t)}static credentialFromResult(e){const t=e;return tc.credentialFromTaggedObject(t)}static credentialFromError(e){return tc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ha._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nc(e,t){return t?Ss(t):(Qo(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tc.PROVIDER_ID="phone",tc.PHONE_SIGN_IN_METHOD="phone";class ic extends ra{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ca(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ca(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ca(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rc(e){return Sa(e.auth,new ic(e),e.bypassAuthState)}function oc(e){const{auth:t,user:n}=e;return Qo(n,t,"internal-error"),Ta(n,new ic(e),e.bypassAuthState)}async function sc(e){const{auth:t,user:n}=e;return Qo(n,t,"internal-error"),ka(n,new ic(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rc;case"linkViaPopup":case"linkViaRedirect":return sc;case"reauthViaPopup":case"reauthViaRedirect":return oc;default:Ko(this.auth,"internal-error")}}resolve(e){Zo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new rs(2e3,1e4);class lc extends ac{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,lc.currentPopupAction&&lc.currentPopupAction.cancel(),lc.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Qo(e,this.auth,"internal-error"),e}async onExecution(){Zo(1===this.filter.length,"Popup operations only handle one event");const e=Ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Go(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Go(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Go(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,cc.get())};e()}}lc.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uc=new Map;class hc extends ac{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=uc.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=pc(t),i=fc(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}uc.set(this.auth._key(),e)}return this.bypassAuthState||uc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function dc(e,t){uc.set(e._key(),t)}function fc(e){return Ss(e._redirectPersistence)}function pc(e){return xs("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(e,t,n=!1){const i=Zs(e),r=nc(i,t),o=new hc(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}class gc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _c(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!_c(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Go(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(yc(e))}saveEventToCache(e){this.cachedEventUids.add(yc(e)),this.lastProcessedEventTime=Date.now()}}function yc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function _c({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bc=/^https?/;async function wc(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return us(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ec(e))return}catch(e){}Ko(e,"unauthorized-domain")}function Ec(e){const t=es(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!bc.test(n))return!1;if(vc.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new rs(3e4,6e4);function Cc(){const e=qa().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let kc=null;function Tc(e){return kc=kc||function(e){return new Promise(((t,n)=>{var i,r,o;function s(){Cc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Cc(),n(Go(e,"network-request-failed"))},timeout:Ic.get()})}if(null===(r=null===(i=qa().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=qa().gapi)||void 0===o?void 0:o.load)){const t=Gs("iframefcb");return qa()[t]=()=>{gapi.load?s():n(Go(e,"network-request-failed"))},Ks(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw kc=null,e}))}(e),kc}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new rs(5e3,15e3),Nc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xc(e){const t=e.config;Qo(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?os(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:So},r=Rc.get(e.config.apiHost);r&&(i.eid=r);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Sr(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ac={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Oc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Pc(e,t,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ac),{width:i.toString(),height:r.toString(),top:o,left:s}),l=sr().toLowerCase();n&&(a=Ds(l)?"_blank":n),Ps(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=sr()){var t;return js(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Oc(null);const h=window.open(t||"",a,u);Qo(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Oc(h)}const Lc="emulator/auth/handler",Dc=encodeURIComponent("fac");async function Mc(e,t,n,i,r,o){Qo(e.config.authDomain,e,"auth-domain-config-required"),Qo(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:So,eventId:r};if(t instanceof pa){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Ir(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof ma){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),l=c?`#${Dc}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?os(e,Lc):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Sr(a).slice(1)}${l}`}const Uc="webStorageSupport";const Fc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ua,this._completeRedirectFn=mc,this._overrideRedirectResult=dc}async _openPopup(e,t,n,i){var r;Zo(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Pc(e,await Mc(e,t,n,es(),i),Ba())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){qa().location.href=e}(await Mc(e,t,n,es(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Zo(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Tc(e),n=qa().gapi;return Qo(n,e,"internal-error"),t.open({where:document.body,url:xc(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nc,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=Go(e,"network-request-failed"),o=qa().setTimeout((()=>{i(r)}),Sc.get());function s(){qa().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{i(r)}))}))))}(e),n=new gc(e);return t.register("authEvent",(t=>{Qo(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Uc,{type:Uc},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),Ko(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hs()||Ls()||js()}};var Bc="@firebase/auth",jc="0.23.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Qo(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hc=ir("authIdTokenMaxAge")||300;let Wc=null;var zc;zc="Browser",Io(new Fr("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=n.options;Qo(o&&!o.includes(":"),"invalid-api-key",{appName:n.name}),Qo(!(null==s?void 0:s.includes(":")),"argument-error",{appName:n.name});const a={apiKey:o,authDomain:s,clientPlatform:zc,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ws(zc)},c=new Xs(n,i,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ss);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Io(new Fr("auth-internal",(e=>{const t=Zs(e.getProvider("auth").getImmediate());return new qc(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),xo(Bc,jc,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(zc)),xo(Bc,jc,"esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xo("firebase","9.21.0","app");const Vc="@firebase/database",$c="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),yr(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:gr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return wr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Gc(t)}}catch(e){}return new Jc},Qc=Yc("localStorage"),Xc=Yc("sessionStorage"),Zc=new Jr("@firebase/database"),el=function(){let e=1;return function(){return e++}}(),tl=function(e){const t=Dr(e),n=new xr;n.update(t);const i=n.digest();return $i.encodeByteArray(i)},nl=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=nl.apply(null,i):t+="object"==typeof i?yr(i):i,t+=" "}return t};let il=null,rl=!0;const ol=function(e,t){Wi(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Zc.logLevel=Wr.VERBOSE,il=Zc.log.bind(Zc),t&&Xc.set("logging_enabled",!0)):"function"==typeof e?il=e:(il=null,Xc.remove("logging_enabled"))},sl=function(...e){if(!0===rl&&(rl=!1,null===il&&!0===Xc.get("logging_enabled")&&ol(!0)),il){const t=nl.apply(null,e);il(t)}},al=function(e){return function(...t){sl(e,...t)}},cl=function(...e){const t="FIREBASE INTERNAL ERROR: "+nl(...e);Zc.error(t)},ll=function(...e){const t=`FIREBASE FATAL ERROR: ${nl(...e)}`;throw Zc.error(t),new Error(t)},ul=function(...e){const t="FIREBASE WARNING: "+nl(...e);Zc.warn(t)},hl=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},dl="[MIN_NAME]",fl="[MAX_NAME]",pl=function(e,t){if(e===t)return 0;if(e===dl||t===fl)return-1;if(t===dl||e===fl)return 1;{const n=El(e),i=El(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},ml=function(e,t){return e===t?0:e<t?-1:1},gl=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+yr(t))},yl=function(e){if("object"!=typeof e||null===e)return yr(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=yr(t[i]),n+=":",n+=yl(e[t[i]]);return n+="}",n},_l=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function vl(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const bl=function(e){Wi(!hl(e),"Invalid JSON number");const t=1023;let n,i,r,o,s;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=o+t,r=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(s=0;s<64;s+=8){let e=parseInt(c.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const wl=new RegExp("^-?(0*)\\d{1,10}$"),El=function(e){if(wl.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Il=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw ul("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Cl=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){ul(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(sl("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ul(e)}}class Sl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sl.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nl="5",Rl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xl="websocket",Al="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ol{constructor(e,t,n,i,r=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qc.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qc.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Pl(e,t,n){let i;if(Wi("string"==typeof t,"typeof type must == string"),Wi("object"==typeof n,"typeof params must == object"),t===xl)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Al)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return vl(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.counters_={}}incrementCounter(e,t=1){wr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Qi(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl={},Ml={};function Ul(e){const t=e.toString();return Dl[t]||(Dl[t]=new Ll),Dl[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Il((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="start";class jl{constructor(e,t,n,i,r,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=al(e),this.stats_=Ul(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Pl(t,Al,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Fl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(hr()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ql(((...e)=>{const[t,n,i,r,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Bl)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=Nl,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Rl.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jl.forceAllow_=!0}static forceDisallow(){jl.forceDisallow_=!0}static isAvailable(){return!hr()&&(!!jl.forceAllow_||!(jl.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=yr(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Gi(t),i=_l(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(hr())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=yr(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ql{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,hr())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=el(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ql.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){sl("frame writing exception"),e.stack&&sl(e.stack),sl(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||sl("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){hr()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{sl("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl=null;"undefined"!=typeof MozWebSocket?Hl=MozWebSocket:"undefined"!=typeof WebSocket&&(Hl=WebSocket);class Wl{constructor(e,t,n,i,r,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=al(this.connId),this.stats_=Ul(t),this.connURL=Wl.connectionURL_(t,o,s,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const o={};return o.v=Nl,!hr()&&"undefined"!=typeof location&&location.hostname&&Rl.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),i&&(o.ac=i),r&&(o.p=r),Pl(e,xl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qc.set("previous_websocket_failure",!0);try{let e;if(hr()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Kc}/${ki.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new Hl(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Wl.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Hl&&!Wl.forceDisallow_}static previouslyFailed(){return Qc.isInMemoryStorage||!0===Qc.get("previous_websocket_failure")}markConnectionHealthy(){Qc.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=gr(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Wi(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=yr(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=_l(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wl.responsesRequiredToBeHealthy=2,Wl.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[jl,Wl]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Wl&&Wl.isAvailable();let n=t&&!Wl.previouslyFailed();if(e.webSocketOnly&&(t||ul("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Wl];else{const e=this.transports_=[];for(const t of zl.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);zl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zl.globalTransportInitialized_=!1;class Vl{constructor(e,t,n,i,r,o,s,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=al("c:"+this.id+":"),this.transportManager_=new zl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Cl((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=gl("t",e),n=gl("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=gl("t",e),n=gl("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=gl("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?cl("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Nl!==n&&ul("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Cl((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cl((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qc.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.allowedEvents_=e,this.listeners_={},Wi(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Wi(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Kl{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ar()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Gl}getInitialEvent(e){return Wi("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Yl(){return new Jl("")}function Ql(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Xl(e){return e.pieces_.length-e.pieceNum_}function Zl(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Jl(e.pieces_,t)}function eu(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function tu(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function nu(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Jl(t,0)}function iu(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Jl)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Jl(n,0)}function ru(e){return e.pieceNum_>=e.pieces_.length}function ou(e,t){const n=Ql(e),i=Ql(t);if(null===n)return t;if(n===i)return ou(Zl(e),Zl(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function su(e,t){const n=tu(e,0),i=tu(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=pl(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function au(e,t){if(Xl(e)!==Xl(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function cu(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Xl(e)>Xl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class lu{constructor(e,t){this.errorPrefix_=t,this.parts_=tu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Mr(this.parts_[e]);uu(this)}}function uu(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+hu(e))}function hu(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du extends Kl{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new du}getInitialEvent(e){return Wi("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=1e3;class pu extends $l{constructor(e,t,n,i,r,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=pu.nextPersistentConnectionId_++,this.log_=al("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fu,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!hr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");du.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Gl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(yr(r)),Wi(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new rr,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Wi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Wi(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const o=r.d,s=r.s;pu.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==s&&this.removeListen_(n,i),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&wr(e,"w")){const n=Er(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();ul(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||br(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=vr(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Wi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const o={p:t,d:n};void 0!==r&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+yr(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):cl("Unrecognized action received from server: "+yr(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Wi(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=fu),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pu.nextConnectionId_++,r=this.lastSessionId;let o=!1,s=null;const a=function(){s?s.close():(o=!0,n())},c=function(e){Wi(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?sl("getToken() completed but was canceled"):(sl("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,s=new Vl(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{ul(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&ul(e),a())}}}interrupt(e){sl("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){sl("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ir(this.interruptReasons_)&&(this.reconnectDelay_=fu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>yl(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Jl(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){sl("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){sl("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";hr()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Kc.replace(/\./g,"-")]=1,ar()?e["framework.cordova"]=1:lr()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gl.getInstance().currentlyOnline();return Ir(this.interruptReasons_)&&e}}pu.nextPersistentConnectionId_=0,pu.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mu{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new mu(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new mu(dl,e),i=new mu(dl,t);return 0!==this.compare(n,i)}minPost(){return mu.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;class _u extends gu{static get __EMPTY_NODE(){return yu}static set __EMPTY_NODE(e){yu=e}compare(e,t){return pl(e.name,t.name)}isDefinedOn(e){throw zi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return mu.MIN}maxPost(){return new mu(fl,yu)}makePost(e,t){return Wi("string"==typeof e,"KeyIndex indexValue must always be a string."),new mu(e,yu)}toString(){return".key"}}const vu=new _u;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,i&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class wu{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:wu.RED,this.left=null!=i?i:Eu.EMPTY_NODE,this.right=null!=r?r:Eu.EMPTY_NODE}copy(e,t,n,i,r){return new wu(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Eu.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Eu.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,wu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,wu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}wu.RED=!0,wu.BLACK=!1;class Eu{constructor(e,t=Eu.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Eu(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,wu.BLACK,null,null))}remove(e){return new Eu(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,wu.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new bu(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new bu(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new bu(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Iu(e,t){return pl(e.name,t.name)}function Cu(e,t){return pl(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku;Eu.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new wu(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Tu=function(e){return"number"==typeof e?"number:"+bl(e):"string:"+e},Su=function(e){if(e.isLeafNode()){const t=e.val();Wi("string"==typeof t||"number"==typeof t||"object"==typeof t&&wr(t,".sv"),"Priority must be a string or number.")}else Wi(e===ku||e.isEmpty(),"priority of unexpected type.");Wi(e===ku||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Nu,Ru,xu;class Au{constructor(e,t=Au.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Wi(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Su(this.priorityNode_)}static set __childrenNodeConstructor(e){Nu=e}static get __childrenNodeConstructor(){return Nu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Au(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Au.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ru(e)?this:".priority"===Ql(e)?this.priorityNode_:Au.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Au.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Ql(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Wi(".priority"!==n||1===Xl(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Au.__childrenNodeConstructor.EMPTY_NODE.updateChild(Zl(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tu(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?bl(this.value_):this.value_,this.lazyHash_=tl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Au.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Au.__childrenNodeConstructor?-1:(Wi(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Au.VALUE_TYPE_ORDER.indexOf(t),r=Au.VALUE_TYPE_ORDER.indexOf(n);return Wi(i>=0,"Unknown leaf type: "+t),Wi(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Au.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ou=new class extends gu{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?pl(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return mu.MIN}maxPost(){return new mu(fl,new Au("[PRIORITY-POST]",xu))}makePost(e,t){const n=Ru(e);return new mu(t,new Au("[PRIORITY-POST]",n))}toString(){return".priority"}},Pu=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Pu,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Du=function(e,t,n,i){e.sort(t);const r=function(t,i){const o=i-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new wu(a,s.node,wu.BLACK,null,null);{const c=parseInt(o/2,10)+t,l=r(t,c),u=r(c+1,i);return s=e[c],a=n?n(s):s,new wu(a,s.node,wu.BLACK,l,u)}},o=function(t){let i=null,o=null,s=e.length;const a=function(t,i){const o=s-t,a=s;s-=t;const l=r(o+1,a),u=e[o],h=n?n(u):u;c(new wu(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(o=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,wu.BLACK):(a(i,wu.BLACK),a(i,wu.RED))}return o}(new Lu(e.length));return new Eu(i||t,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu;const Uu={};class Fu{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Wi(Uu&&Ou,"ChildrenNode.ts has not been loaded"),Mu=Mu||new Fu({".priority":Uu},{".priority":Ou}),Mu}get(e){const t=Er(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Eu?t:null}hasIndex(e){return wr(this.indexSet_,e.toString())}addIndex(e,t){Wi(e!==vu,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(mu.Wrap);let o,s=r.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=r.getNext();o=i?Du(n,e.getCompare()):Uu;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=o,new Fu(l,c)}addToIndexes(e,t){const n=Cr(this.indexes_,((n,i)=>{const r=Er(this.indexSet_,i);if(Wi(r,"Missing index implementation for "+i),n===Uu){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(mu.Wrap);let o=i.getNext();for(;o;)o.name!==e.name&&n.push(o),o=i.getNext();return n.push(e),Du(n,r.getCompare())}return Uu}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new mu(e.name,i))),r.insert(e,e.node)}}));return new Fu(n,this.indexSet_)}removeFromIndexes(e,t){const n=Cr(this.indexes_,(n=>{if(n===Uu)return n;{const i=t.get(e.name);return i?n.remove(new mu(e.name,i)):n}}));return new Fu(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu;class ju{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Su(this.priorityNode_),this.children_.isEmpty()&&Wi(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bu||(Bu=new ju(new Eu(Cu),null,Fu.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bu}updatePriority(e){return this.children_.isEmpty()?this:new ju(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Bu:t}}getChild(e){const t=Ql(e);return null===t?this:this.getImmediateChild(t).getChild(Zl(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Wi(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new mu(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=i.isEmpty()?Bu:this.priorityNode_;return new ju(i,o,r)}}updateChild(e,t){const n=Ql(e);if(null===n)return t;{Wi(".priority"!==Ql(e)||1===Xl(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Zl(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Ou,((o,s)=>{t[o]=s.val(e),n++,r&&ju.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tu(this.getPriority().val())+":"),this.forEachChild(Ou,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":tl(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new mu(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new mu(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new mu(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,mu.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,mu.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qu?-1:0}withIndex(e){if(e===vu||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ju(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===vu||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ou),n=t.getIterator(Ou);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===vu?null:this.indexMap_.get(e.toString())}}ju.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const qu=new class extends ju{constructor(){super(new Eu(Cu),ju.EMPTY_NODE,Fu.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ju.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(mu,{MIN:{value:new mu(dl,ju.EMPTY_NODE)},MAX:{value:new mu(fl,qu)}}),_u.__EMPTY_NODE=ju.EMPTY_NODE,Au.__childrenNodeConstructor=ju,ku=qu,function(e){xu=e}(qu);function Hu(e,t=null){if(null===e)return ju.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Wi(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Au(e,Hu(t))}if(e instanceof Array){let n=ju.EMPTY_NODE;return vl(e,((t,i)=>{if(wr(e,t)&&"."!==t.substring(0,1)){const e=Hu(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Hu(t))}{const n=[];let i=!1;if(vl(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Hu(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new mu(e,r)))}})),0===n.length)return ju.EMPTY_NODE;const r=Du(n,Iu,(e=>e.name),Cu);if(i){const e=Du(n,Ou.getCompare());return new ju(r,Hu(t),new Fu({".priority":e},{".priority":Ou}))}return new ju(r,Hu(t),Fu.Default)}}!function(e){Ru=e}(Hu);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wu extends gu{constructor(e){super(),this.indexPath_=e,Wi(!ru(e)&&".priority"!==Ql(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?pl(e.name,t.name):r}makePost(e,t){const n=Hu(e),i=ju.EMPTY_NODE.updateChild(this.indexPath_,n);return new mu(t,i)}maxPost(){const e=ju.EMPTY_NODE.updateChild(this.indexPath_,qu);return new mu(fl,e)}toString(){return tu(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new class extends gu{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?pl(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return mu.MIN}maxPost(){return mu.MAX}makePost(e,t){const n=Hu(e);return new mu(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(e){return{type:"value",snapshotNode:e}}function $u(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ku(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Gu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ju{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ou}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Wi(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Wi(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:dl}hasEnd(){return this.endSet_}getIndexEndValue(){return Wi(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Wi(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fl}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Wi(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ou}copy(){const e=new Ju;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Yu(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ou?n="$priority":e.index_===zu?n="$value":e.index_===vu?n="$key":(Wi(e.index_ instanceof Wu,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=yr(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=yr(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+yr(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=yr(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+yr(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Qu(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ou&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends $l{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=al("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Wi(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Xu.getListenId_(e,n),s={};this.listens_[o]=s;const a=Yu(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),Er(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Xu.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Yu(e._queryParams),n=e._path.toString(),i=new rr;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Sr(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=gr(s.responseText)}catch(e){ul("Failed to parse JSON response for "+o+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&ul("Got unsuccessful REST response for "+o+" Status: "+s.status),n(s.status);n=null}},s.open("GET",o,!0),s.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.rootNode_=ju.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return{value:null,children:new Map}}function th(e,t,n){if(ru(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Ql(t);e.children.has(i)||e.children.set(i,eh());th(e.children.get(i),t=Zl(t),n)}}function nh(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{nh(i,new Jl(t.toString()+"/"+e),n)}))}class ih{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&vl(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ih(e);const n=1e4+2e4*Math.random();Cl(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;vl(e,((e,i)=>{i>0&&wr(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Cl(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oh,sh;function ah(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(sh=oh||(oh={}))[sh.OVERWRITE=0]="OVERWRITE",sh[sh.MERGE=1]="MERGE",sh[sh.ACK_USER_WRITE=2]="ACK_USER_WRITE",sh[sh.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class ch{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=oh.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(ru(this.path)){if(null!=this.affectedTree.value)return Wi(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Jl(e));return new ch(Yl(),t,this.revert)}}return Wi(Ql(this.path)===e,"operationForChild called for unrelated child."),new ch(Zl(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lh{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=oh.OVERWRITE}operationForChild(e){return ru(this.path)?new lh(this.source,Yl(),this.snap.getImmediateChild(e)):new lh(this.source,Zl(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=oh.MERGE}operationForChild(e){if(ru(this.path)){const t=this.children.subtree(new Jl(e));return t.isEmpty()?null:t.value?new lh(this.source,Yl(),t.value):new uh(this.source,Yl(),t)}return Wi(Ql(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new uh(this.source,Zl(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ru(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ql(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(e,t,n,i,r,o){const s=i.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw zi("Should only compare child_ events.");const i=new mu(t.childName,t.snapshotNode),r=new mu(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),s.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function fh(e,t){return{eventCache:e,serverCache:t}}function ph(e,t,n,i){return fh(new hh(t,n,i),e.serverCache)}function mh(e,t,n,i){return fh(e.eventCache,new hh(t,n,i))}function gh(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function yh(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h;class vh{constructor(e,t=(()=>(_h||(_h=new Eu(ml)),_h))()){this.value=e,this.children=t}static fromObject(e){let t=new vh(null);return vl(e,((e,n)=>{t=t.set(new Jl(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Yl(),value:this.value};if(ru(e))return null;{const n=Ql(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Zl(e),t);if(null!=r){return{path:iu(new Jl(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ru(e))return this;{const t=Ql(e),n=this.children.get(t);return null!==n?n.subtree(Zl(e)):new vh(null)}}set(e,t){if(ru(e))return new vh(t,this.children);{const n=Ql(e),i=(this.children.get(n)||new vh(null)).set(Zl(e),t),r=this.children.insert(n,i);return new vh(this.value,r)}}remove(e){if(ru(e))return this.children.isEmpty()?new vh(null):new vh(null,this.children);{const t=Ql(e),n=this.children.get(t);if(n){const i=n.remove(Zl(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new vh(null):new vh(this.value,r)}return this}}get(e){if(ru(e))return this.value;{const t=Ql(e),n=this.children.get(t);return n?n.get(Zl(e)):null}}setTree(e,t){if(ru(e))return t;{const n=Ql(e),i=(this.children.get(n)||new vh(null)).setTree(Zl(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new vh(this.value,r)}}fold(e){return this.fold_(Yl(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(iu(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Yl(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(ru(e))return null;{const i=Ql(e),r=this.children.get(i);return r?r.findOnPath_(Zl(e),iu(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Yl(),t)}foreachOnPath_(e,t,n){if(ru(e))return this;{this.value&&n(t,this.value);const i=Ql(e),r=this.children.get(i);return r?r.foreachOnPath_(Zl(e),iu(t,i),n):new vh(null)}}foreach(e){this.foreach_(Yl(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(iu(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.writeTree_=e}static empty(){return new bh(new vh(null))}}function wh(e,t,n){if(ru(t))return new bh(new vh(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let o=i.value;const s=ou(r,t);return o=o.updateChild(s,n),new bh(e.writeTree_.set(r,o))}{const i=new vh(n),r=e.writeTree_.setTree(t,i);return new bh(r)}}}function Eh(e,t,n){let i=e;return vl(n,((e,n)=>{i=wh(i,iu(t,e),n)})),i}function Ih(e,t){if(ru(t))return bh.empty();{const n=e.writeTree_.setTree(t,new vh(null));return new bh(n)}}function Ch(e,t){return null!=kh(e,t)}function kh(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ou(n.path,t)):null}function Th(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ou,((e,n)=>{t.push(new mu(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new mu(e,n.value))})),t}function Sh(e,t){if(ru(t))return e;{const n=kh(e,t);return new bh(null!=n?new vh(n):e.writeTree_.subtree(t))}}function Nh(e){return e.writeTree_.isEmpty()}function Rh(e,t){return xh(Yl(),e.writeTree_,t)}function xh(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(Wi(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=xh(iu(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(iu(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(e,t){return zh(t,e)}function Oh(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Wi(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,s=e.allWrites.length-1;for(;r&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&Ph(t,i.path)?r=!1:cu(i.path,t.path)&&(o=!0)),s--}if(r){if(o)return function(e){e.visibleWrites=Dh(e.allWrites,Lh,Yl()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ih(e.visibleWrites,i.path);else{vl(i.children,(t=>{e.visibleWrites=Ih(e.visibleWrites,iu(i.path,t))}))}return!0}return!1}function Ph(e,t){if(e.snap)return cu(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&cu(iu(e.path,n),t))return!0;return!1}function Lh(e){return e.visible}function Dh(e,t,n){let i=bh.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)cu(n,e)?(t=ou(n,e),i=wh(i,t,o.snap)):cu(e,n)&&(t=ou(e,n),i=wh(i,Yl(),o.snap.getChild(t)));else{if(!o.children)throw zi("WriteRecord should have .snap or .children");if(cu(n,e))t=ou(n,e),i=Eh(i,t,o.children);else if(cu(e,n))if(t=ou(e,n),ru(t))i=Eh(i,Yl(),o.children);else{const e=Er(o.children,Ql(t));if(e){const n=e.getChild(Zl(t));i=wh(i,Yl(),n)}}}}}return i}function Mh(e,t,n,i,r){if(i||r){const o=Sh(e.visibleWrites,t);if(!r&&Nh(o))return n;if(r||null!=n||Ch(o,Yl())){const o=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(cu(e.path,t)||cu(t,e.path))};return Rh(Dh(e.allWrites,o,t),n||ju.EMPTY_NODE)}return null}{const i=kh(e.visibleWrites,t);if(null!=i)return i;{const i=Sh(e.visibleWrites,t);if(Nh(i))return n;if(null!=n||Ch(i,Yl())){return Rh(i,n||ju.EMPTY_NODE)}return null}}}function Uh(e,t,n,i){return Mh(e.writeTree,e.treePath,t,n,i)}function Fh(e,t){return function(e,t,n){let i=ju.EMPTY_NODE;const r=kh(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Ou,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Sh(e.visibleWrites,t);return n.forEachChild(Ou,((e,t)=>{const n=Rh(Sh(r,new Jl(e)),t);i=i.updateImmediateChild(e,n)})),Th(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Th(Sh(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Bh(e,t,n,i){return function(e,t,n,i,r){Wi(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=iu(t,n);if(Ch(e.visibleWrites,o))return null;{const t=Sh(e.visibleWrites,o);return Nh(t)?r.getChild(n):Rh(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function jh(e,t){return function(e,t){return kh(e.visibleWrites,t)}(e.writeTree,iu(e.treePath,t))}function qh(e,t,n,i,r,o){return function(e,t,n,i,r,o,s){let a;const c=Sh(e.visibleWrites,t),l=kh(c,Yl());if(null!=l)a=l;else{if(null==n)return[];a=Rh(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,o)}function Hh(e,t,n){return function(e,t,n,i){const r=iu(t,n),o=kh(e.visibleWrites,r);if(null!=o)return o;if(i.isCompleteForChild(n))return Rh(Sh(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Wh(e,t){return zh(iu(e.treePath,t),e.writeTree)}function zh(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Wi("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Wi(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Gu(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Ku(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,$u(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw zi("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Gu(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Kh{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new hh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hh(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:yh(this.viewCache_),r=qh(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(e,t,n,i,r){const o=new Vh;let s,a;if(n.type===oh.OVERWRITE){const c=n;c.source.fromUser?s=Qh(e,t,c.path,c.snap,i,r,o):(Wi(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!ru(c.path),s=Yh(e,t,c.path,c.snap,i,r,a,o))}else if(n.type===oh.MERGE){const c=n;c.source.fromUser?s=function(e,t,n,i,r,o,s){let a=t;return i.foreach(((i,c)=>{const l=iu(n,i);Xh(t,Ql(l))&&(a=Qh(e,a,l,c,r,o,s))})),i.foreach(((i,c)=>{const l=iu(n,i);Xh(t,Ql(l))||(a=Qh(e,a,l,c,r,o,s))})),a}(e,t,c.path,c.children,i,r,o):(Wi(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),s=ed(e,t,c.path,c.children,i,r,a,o))}else if(n.type===oh.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,i,r,o){let s;if(null!=jh(i,n))return t;{const a=new Kh(i,t,r),c=t.eventCache.getNode();let l;if(ru(n)||".priority"===Ql(n)){let n;if(t.serverCache.isFullyInitialized())n=Uh(i,yh(t));else{const e=t.serverCache.getNode();Wi(e instanceof ju,"serverChildren would be complete if leaf node"),n=Fh(i,e)}l=e.filter.updateFullNode(c,n,o)}else{const r=Ql(n);let u=Hh(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=c.getImmediateChild(r)),l=null!=u?e.filter.updateChild(c,r,u,Zl(n),a,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,ju.EMPTY_NODE,Zl(n),a,o):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Uh(i,yh(t)),s.isLeafNode()&&(l=e.filter.updateFullNode(l,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=jh(i,Yl()),ph(t,l,s,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,o):function(e,t,n,i,r,o,s){if(null!=jh(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(ru(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Yh(e,t,n,c.getNode().getChild(n),r,o,a,s);if(ru(n)){let i=new vh(null);return c.getNode().forEachChild(vu,((e,t)=>{i=i.set(new Jl(e),t)})),ed(e,t,n,i,r,o,a,s)}return t}{let l=new vh(null);return i.foreach(((e,t)=>{const i=iu(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),ed(e,t,n,l,r,o,a,s)}}(e,t,a.path,a.affectedTree,i,r,o)}else{if(n.type!==oh.LISTEN_COMPLETE)throw zi("Unknown operation type: "+n.type);s=function(e,t,n,i,r){const o=t.serverCache,s=mh(t,o.getNode(),o.isFullyInitialized()||ru(n),o.isFiltered());return Jh(e,s,n,i,$h,r)}(e,t,n.path,i,o)}const c=o.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=gh(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(Vu(gh(t)))}}(t,s,c),{viewCache:s,changes:c}}function Jh(e,t,n,i,r,o){const s=t.eventCache;if(null!=jh(i,n))return t;{let a,c;if(ru(n))if(Wi(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=yh(t),r=Fh(i,n instanceof ju?n:ju.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=Uh(i,yh(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const l=Ql(n);if(".priority"===l){Wi(1===Xl(n),"Can't have a priority with additional path components");const r=s.getNode();c=t.serverCache.getNode();const o=Bh(i,n,r,c);a=null!=o?e.filter.updatePriority(r,o):s.getNode()}else{const u=Zl(n);let h;if(s.isCompleteForChild(l)){c=t.serverCache.getNode();const e=Bh(i,n,s.getNode(),c);h=null!=e?s.getNode().getImmediateChild(l).updateChild(u,e):s.getNode().getImmediateChild(l)}else h=Hh(i,l,t.serverCache);a=null!=h?e.filter.updateChild(s.getNode(),l,h,u,r,o):s.getNode()}}return ph(t,a,s.isFullyInitialized()||ru(n),e.filter.filtersNodes())}}function Yh(e,t,n,i,r,o,s,a){const c=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(ru(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=Ql(n);if(!c.isCompleteForPath(n)&&Xl(n)>1)return t;const r=Zl(n),o=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,$h,null)}const h=mh(t,l,c.isFullyInitialized()||ru(n),u.filtersNodes());return Jh(e,h,n,r,new Kh(r,h,o),a)}function Qh(e,t,n,i,r,o,s){const a=t.eventCache;let c,l;const u=new Kh(r,t,o);if(ru(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,s),c=ph(t,l,!0,e.filter.filtersNodes());else{const r=Ql(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=ph(t,l,a.isFullyInitialized(),a.isFiltered());else{const o=Zl(n),l=a.getNode().getImmediateChild(r);let h;if(ru(o))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===eu(o)&&e.getChild(nu(o)).isEmpty()?e:e.updateChild(o,i):ju.EMPTY_NODE}if(l.equals(h))c=t;else{c=ph(t,e.filter.updateChild(a.getNode(),r,h,o,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Xh(e,t){return e.eventCache.isCompleteForChild(t)}function Zh(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ed(e,t,n,i,r,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=ru(n)?i:new vh(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=Zh(0,t.serverCache.getNode().getImmediateChild(n),i);l=Yh(e,l,new Jl(n),c,r,o,s,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=Zh(0,t.serverCache.getNode().getImmediateChild(n),i);l=Yh(e,l,new Jl(n),c,r,o,s,a)}})),l}function td(e,t){const n=yh(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ru(t)&&!n.getImmediateChild(Ql(t)).isEmpty())?n.getChild(t):null}function nd(e,t,n,i){t.type===oh.MERGE&&null!==t.source.queryId&&(Wi(yh(e.viewCache_),"We should always have a full cache before handling merges"),Wi(gh(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=Gh(e.processor_,r,t,n,i);var s,a;return s=e.processor_,a=o.viewCache,Wi(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),Wi(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),Wi(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,id(e,o.changes,o.viewCache.eventCache.getNode(),null)}function id(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],o=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),dh(e,r,"child_removed",t,i,n),dh(e,r,"child_added",t,i,n),dh(e,r,"child_moved",o,i,n),dh(e,r,"child_changed",t,i,n),dh(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd,od;function sd(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return Wi(null!=o,"SyncTree gave us an op for an invalid query."),nd(o,t,n,i)}{let r=[];for(const o of e.views.values())r=r.concat(nd(o,t,n,i));return r}}function ad(e,t){let n=null;for(const i of e.views.values())n=n||td(i,t);return n}class cd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new vh(null),this.pendingWriteTree_={visibleWrites:bh.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ld(e,t,n,i,r){return function(e,t,n,i,r){Wi(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=wh(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?md(e,new lh({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ud(e,t,n,i){!function(e,t,n,i){Wi(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Eh(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const r=vh.fromObject(n);return md(e,new uh({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function hd(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Oh(e.pendingWriteTree_,t)){let t=new vh(null);return null!=i.snap?t=t.set(Yl(),!0):vl(i.children,(e=>{t=t.set(new Jl(e),!0)})),md(e,new ch(i.path,t,n))}return[]}function dd(e,t,n){return md(e,new lh({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function fd(e,t,n,i){const r=_d(e,i);if(null!=r){const i=vd(r),o=i.path,s=i.queryId,a=ou(o,t);return bd(e,o,new lh(ah(s),a,n))}return[]}function pd(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=ad(n,ou(e,t));if(i)return i}));return Mh(i,t,r,n,!0)}function md(e,t){return gd(t,e.syncPointTree_,null,Ah(e.pendingWriteTree_,Yl()))}function gd(e,t,n,i){if(ru(e.path))return yd(e,t,n,i);{const r=t.get(Yl());null==n&&null!=r&&(n=ad(r,Yl()));let o=[];const s=Ql(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=Wh(i,s);o=o.concat(gd(a,c,e,t))}return r&&(o=o.concat(sd(r,e,i,n))),o}}function yd(e,t,n,i){const r=t.get(Yl());null==n&&null!=r&&(n=ad(r,Yl()));let o=[];return t.children.inorderTraversal(((t,r)=>{const s=n?n.getImmediateChild(t):null,a=Wh(i,t),c=e.operationForChild(t);c&&(o=o.concat(yd(c,r,s,a)))})),r&&(o=o.concat(sd(r,e,i,n))),o}function _d(e,t){return e.tagToQueryMap.get(t)}function vd(e){const t=e.indexOf("$");return Wi(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Jl(e.substr(0,t))}}function bd(e,t,n){const i=e.syncPointTree_.get(t);Wi(i,"Missing sync point for query tag that we're tracking");return sd(i,n,Ah(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new wd(t)}node(){return this.node_}}class Ed{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=iu(this.path_,e);return new Ed(this.syncTree_,t)}node(){return pd(this.syncTree_,this.path_)}}const Id=function(e,t,n){return e&&"object"==typeof e?(Wi(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Cd(e[".sv"],t,n):"object"==typeof e[".sv"]?kd(e[".sv"],t):void Wi(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Cd=function(e,t,n){if("timestamp"===e)return n.timestamp;Wi(!1,"Unexpected server value: "+e)},kd=function(e,t,n){e.hasOwnProperty("increment")||Wi(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Wi(!1,"Unexpected increment value: "+i);const r=t.node();if(Wi(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return"number"!=typeof o?i:o+i},Td=function(e,t,n,i){return Nd(t,new Ed(n,e),i)},Sd=function(e,t,n){return Nd(e,new wd(t),n)};function Nd(e,t,n){const i=e.getPriority().val(),r=Id(i,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const i=e,o=Id(i.getValue(),t,n);return o!==i.getValue()||r!==i.getPriority().val()?new Au(o,Hu(r)):e}{const i=e;return o=i,r!==i.getPriority().val()&&(o=o.updatePriority(new Au(r))),i.forEachChild(Ou,((e,i)=>{const r=Nd(i,t.getImmediateChild(e),n);r!==i&&(o=o.updateImmediateChild(e,r))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function xd(e,t){let n=t instanceof Jl?t:new Jl(t),i=e,r=Ql(n);for(;null!==r;){const e=Er(i.node.children,r)||{children:{},childCount:0};i=new Rd(r,i,e),n=Zl(n),r=Ql(n)}return i}function Ad(e){return e.node.value}function Od(e,t){e.node.value=t,Ud(e)}function Pd(e){return e.node.childCount>0}function Ld(e,t){vl(e.node.children,((n,i)=>{t(new Rd(n,e,i))}))}function Dd(e,t,n,i){n&&!i&&t(e),Ld(e,(e=>{Dd(e,t,!0,i)})),n&&i&&t(e)}function Md(e){return new Jl(null===e.parent?e.name:Md(e.parent)+"/"+e.name)}function Ud(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Ad(e)&&!Pd(e)}(n),r=wr(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ud(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ud(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Fd=/[\[\].#$\/\u0000-\u001F\u007F]/,Bd=/[\[\].#$\u0000-\u001F\u007F]/,jd=10485760,qd=function(e){return"string"==typeof e&&0!==e.length&&!Fd.test(e)},Hd=function(e){return"string"==typeof e&&0!==e.length&&!Bd.test(e)},Wd=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!hl(e)||e&&"object"==typeof e&&wr(e,".sv")},zd=function(e,t,n,i){i&&void 0===t||Vd(Lr(e,"value"),t,n)},Vd=function(e,t,n){const i=n instanceof Jl?new lu(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+hu(i));if("function"==typeof t)throw new Error(e+"contains a function "+hu(i)+" with contents = "+t.toString());if(hl(t))throw new Error(e+"contains "+t.toString()+" "+hu(i));if("string"==typeof t&&t.length>3495253.3333333335&&Mr(t)>jd)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+hu(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(vl(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!qd(t)))throw new Error(e+" contains an invalid key ("+t+") "+hu(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=Mr(a),uu(s),Vd(e,o,i),function(e){const t=e.parts_.pop();e.byteLength_-=Mr(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+hu(i)+" in addition to actual children.")}},$d=function(e,t,n,i){if(i&&void 0===t)return;const r=Lr(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];vl(t,((e,t)=>{const i=new Jl(e);if(Vd(r,t,iu(n,i)),".priority"===eu(i)&&!Wd(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=tu(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!qd(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(su);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&cu(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,o)},Kd=function(e,t,n,i){if(!(i&&void 0===n||Hd(n)))throw new Error(Lr(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Gd=function(e,t){if(".info"===Ql(t))throw new Error(e+" failed = Can't modify data under /.info/")},Jd=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!qd(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Hd(e)}(n))throw new Error(Lr(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qd(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],o=r.getPath();null===n||au(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(r)}n&&e.eventLists_.push(n)}function Xd(e,t,n){Qd(e,n),Zd(e,(e=>cu(e,t)||cu(t,e)))}function Zd(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(ef(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ef(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();il&&sl("event: "+n.toString()),Il(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="repo_interrupt";class nf{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=eh(),this.transactionQueueTree_=new Rd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rf(e,t,n){if(e.stats_=Ul(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Xu(e.repoInfo_,((t,n,i,r)=>{af(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>cf(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{yr(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new pu(e.repoInfo_,t,((t,n,i,r)=>{af(e,t,n,i,r)}),(t=>{cf(e,t)}),(t=>{!function(e,t){vl(t,((t,n)=>{lf(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Ml[n]||(Ml[n]=t()),Ml[n]}(e.repoInfo_,(()=>new rh(e.stats_,e.server_))),e.infoData_=new Zu,e.infoSyncTree_=new cd({startListening:(t,n,i,r)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=dd(e.infoSyncTree_,t._path,s),setTimeout((()=>{r("ok")}),0)),o},stopListening:()=>{}}),lf(e,"connected",!1),e.serverSyncTree_=new cd({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const o=r(n,i);Xd(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function of(e){const t=e.infoData_.getNode(new Jl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function sf(e){return(t=(t={timestamp:of(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function af(e,t,n,i,r){e.dataUpdateCount++;const o=new Jl(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(r)if(i){const t=Cr(n,(e=>Hu(e)));s=function(e,t,n,i){const r=_d(e,i);if(r){const i=vd(r),o=i.path,s=i.queryId,a=ou(o,t),c=vh.fromObject(n);return bd(e,o,new uh(ah(s),a,c))}return[]}(e.serverSyncTree_,o,t,r)}else{const t=Hu(n);s=fd(e.serverSyncTree_,o,t,r)}else if(i){const t=Cr(n,(e=>Hu(e)));s=function(e,t,n){const i=vh.fromObject(n);return md(e,new uh({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,o,t)}else{const t=Hu(n);s=dd(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=yf(e,o)),Xd(e.eventQueue_,a,s)}function cf(e,t){lf(e,"connected",t),!1===t&&function(e){ff(e,"onDisconnectEvents");const t=sf(e),n=eh();nh(e.onDisconnect_,Yl(),((i,r)=>{const o=Td(i,r,e.serverSyncTree_,t);th(n,i,o)}));let i=[];nh(n,Yl(),((t,n)=>{i=i.concat(dd(e.serverSyncTree_,t,n));const r=Ef(e,t);yf(e,r)})),e.onDisconnect_=eh(),Xd(e.eventQueue_,Yl(),i)}(e)}function lf(e,t,n){const i=new Jl("/.info/"+t),r=Hu(n);e.infoData_.updateSnapshot(i,r);const o=dd(e.infoSyncTree_,i,r);Xd(e.eventQueue_,i,o)}function uf(e){return e.nextWriteId_++}function hf(e,t,n,i,r){ff(e,"set",{path:t.toString(),value:n,priority:i});const o=sf(e),s=Hu(n,i),a=pd(e.serverSyncTree_,t),c=Sd(s,a,o),l=uf(e),u=ld(e.serverSyncTree_,t,c,l,!0);Qd(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,i)=>{const o="ok"===n;o||ul("set at "+t+" failed: "+n);const s=hd(e.serverSyncTree_,l,!o);Xd(e.eventQueue_,t,s),pf(e,r,n,i)}));const h=Ef(e,t);yf(e,h),Xd(e.eventQueue_,h,[])}function df(e){e.persistentConnection_&&e.persistentConnection_.interrupt(tf)}function ff(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),sl(n,...t)}function pf(e,t,n,i){t&&Il((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const o=new Error(r);o.code=e,t(o)}}))}function mf(e,t,n){return pd(e.serverSyncTree_,t,n)||ju.EMPTY_NODE}function gf(e,t=e.transactionQueueTree_){if(t||wf(e,t),Ad(t)){const n=vf(e,t);Wi(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=mf(e,t,i);let o=r;const s=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Wi(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=ou(t,i.path);o=o.updateChild(r,i.currentOutputSnapshotRaw)}const a=o.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{ff(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(hd(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();wf(e,xd(e.transactionQueueTree_,t)),gf(e,e.transactionQueueTree_),Xd(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Il(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{ul("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}yf(e,t)}}),s)}(e,Md(t),n)}else Pd(t)&&Ld(t,(t=>{gf(e,t)}))}function yf(e,t){const n=_f(e,t),i=Md(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=ou(n,c.path);let u,h=!1;if(Wi(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,r=r.concat(hd(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)h=!0,u="maxretry",r=r.concat(hd(e.serverSyncTree_,c.currentWriteId,!0));else{const n=mf(e,c.path,o);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Vd("transaction failed: Data returned ",i,c.path);let t=Hu(i);"object"==typeof i&&null!=i&&wr(i,".priority")||(t=t.updatePriority(n.getPriority()));const s=c.currentWriteId,a=sf(e),l=Sd(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=uf(e),o.splice(o.indexOf(s),1),r=r.concat(ld(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(hd(e.serverSyncTree_,s,!0))}else h=!0,u="nodata",r=r.concat(hd(e.serverSyncTree_,c.currentWriteId,!0))}Xd(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,s=t[a].unwatcher,setTimeout(s,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var s;wf(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Il(i[e]);gf(e,e.transactionQueueTree_)}(e,vf(e,n),i),i}function _f(e,t){let n,i=e.transactionQueueTree_;for(n=Ql(t);null!==n&&void 0===Ad(i);)i=xd(i,n),n=Ql(t=Zl(t));return i}function vf(e,t){const n=[];return bf(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function bf(e,t,n){const i=Ad(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Ld(t,(t=>{bf(e,t,n)}))}function wf(e,t){const n=Ad(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Od(t,n.length>0?n:void 0)}Ld(t,(t=>{wf(e,t)}))}function Ef(e,t){const n=Md(_f(e,t)),i=xd(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{If(e,t)})),If(e,i),Dd(i,(t=>{If(e,t)})),n}function If(e,t){const n=Ad(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Wi(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Wi(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(hd(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Od(t,void 0):n.length=o+1,Xd(e.eventQueue_,Md(t),r);for(let e=0;e<i.length;e++)Il(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=function(e,t){const n=kf(e),i=n.namespace;"firebase.com"===n.domain&&ll(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ll("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&ul("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ol(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Jl(n.pathString)}},kf=function(e){let t="",n="",i="",r="",o="",s=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ul(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=i}"ns"in d&&(o=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:s,scheme:a,pathString:r,namespace:o}},Tf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sf{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return ru(this._path)?null:eu(this._path)}get ref(){return new Nf(this._repo,this._path)}get _queryIdentifier(){const e=Qu(this._queryParams),t=yl(e);return"{}"===t?"default":t}get _queryObject(){return Qu(this._queryParams)}isEqual(e){if(!((e=Ur(e))instanceof Sf))return!1;const t=this._repo===e._repo,n=au(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Nf extends Sf{constructor(e,t){super(e,t,new Ju,!1)}get parent(){const e=nu(this._path);return null===e?null:new Nf(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}function Rf(e,t){return(e=Ur(e))._checkNotDeleted("ref"),void 0!==t?xf(e._root,t):e._root}function xf(e,t){var n,i,r,o;return null===Ql((e=Ur(e))._path)?(n="child",i="path",o=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Kd(n,i,r,o)):Kd("child","path",t,!1),new Nf(e._repo,iu(e._path,t))}function Af(e,t){e=Ur(e),Gd("set",e._path),zd("set",t,e._path,!1);const n=new rr;return hf(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Of(e,t){$d("update",t,e._path,!1);const n=new rr;return function(e,t,n,i){ff(e,"update",{path:t.toString(),value:n});let r=!0;const o=sf(e),s={};if(vl(n,((n,i)=>{r=!1,s[n]=Td(iu(t,n),Hu(i),e.serverSyncTree_,o)})),r)sl("update() called with empty data.  Don't do anything."),pf(0,i,"ok",void 0);else{const r=uf(e),o=ud(e.serverSyncTree_,t,s,r);Qd(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||ul("update at "+t+" failed: "+n);const a=hd(e.serverSyncTree_,r,!s),c=a.length>0?yf(e,t):t;Xd(e.eventQueue_,c,a),pf(0,i,n,o)})),vl(n,(n=>{const i=Ef(e,iu(t,n));yf(e,i)})),Xd(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}!function(e){Wi(!rd,"__referenceConstructor has already been defined"),rd=e}(Nf),function(e){Wi(!od,"__referenceConstructor has already been defined"),od=e}(Nf);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pf={};let Lf=!1;function Df(e,t,n,i,r){let o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||ll("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),sl("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,c=Cf(o,r),l=c.repoInfo;void 0!==ki&&ki.env&&(a=ki.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(s=!0,o=`http://${a}?ns=${l.namespace}`,c=Cf(o,r),l=c.repoInfo):s=!c.repoInfo.secure;const u=r&&s?new Sl(Sl.OWNER):new Tl(e.name,e.options,t);Jd("Invalid Firebase Database URL",c),ru(c.path)||ll("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=Pf[t.name];r||(r={},Pf[t.name]=r);let o=r[e.toURLString()];o&&ll("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new nf(e,Lf,n,i),r[e.toURLString()]=o,o}(l,e,u,new kl(e.name,n));return new Mf(h,e)}class Mf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nf(this._repo,Yl())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Pf[t];n&&n[e.key]===e||ll(`Database ${t}(${e.repoInfo_}) has already been deleted.`),df(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ll("Cannot call "+e+" on a deleted database.")}}pu.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},pu.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Kc=So,Io(new Fr("database",((e,{instanceIdentifier:t})=>Df(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),xo(Vc,$c,e),xo(Vc,$c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();const Uf=No({apiKey:"AIzaSyC7Z7_-Y0HZydiU1oV6nn67k_xdA2wTdKw",authDomain:"auth-4cd7f.firebaseapp.com",projectId:"auth-4cd7f",storageBucket:"auth-4cd7f.appspot.com",messagingSenderId:"584186100730",appId:"1:584186100730:web:7d9867ccbf4b0067e48243",databaseURL:"https://auth-4cd7f-default-rtdb.firebaseio.com"}),Ff=function(e=Ro()){const t=Co(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Co(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(kr(n.getOptions(),null!=t?t:{}))return e;Ko(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Fc,persistence:[Xa,Da,Ua]}),i=ir("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Hc)return;const i=null==t?void 0:t.token;Wc!==i&&(Wc=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){Ur(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){Ur(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const o=tr("auth");return o&&ta(n,`http://${o}`),n}(Uf),Bf=function(e=Ro(),t){const n=Co(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=nr("database");e&&function(e,t,n,i={}){(e=Ur(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&ll("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&ll('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Sl(Sl.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:or(i.mockUserToken,e.app.options.projectId);o=new Sl(t)}!function(e,t,n,i){e.repoInfo_=new Ol(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,o)}(n,...e)}return n}(Uf);new ya;async function jf(e){try{Fn._id=e;const t=await Fn.fetchPhoto();return t&&"object"==typeof t?t:(c.Notify.failure("The book service is busy right now. Please try again."),null)}catch(e){return console.log(e.message),null}}var qf={};qf=function e(t,n,i){function r(s,a){if(!n[s]){if(!t[s]){var c=void 0;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};t[s][0].call(u.exports,(function(e){return r(t[s][1][e]||e)}),u,u.exports,e,t,n,i)}return n[s].exports}for(var o=void 0,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},o=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=o,n.create=function(e,t){var n=function(e,t){var n=i('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return o.appendChild(e)}));var s=r(o,"IMG"),a=r(o,"VIDEO"),c=r(o,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===o(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var a={element:function(){return n},visible:function(){return o(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:s};return a}},{}]},{},[1])(1);var Hf;function Wf(e){const t=qf.create(`<div class="book-modal">\n    <img src="${e.book_image}" alt="${e.title}" class="book-modal-img"/>\n    <div class='book-modal-details'>\n        <h2 class="book-modal-title">${e.title}</h2>\n        <h3 class="book-modal-author">${e.author}</h3>\n        <p class='book-modal-desc'>${e.description}</p>\n        <ul class='icon-book-modal-list'>\n        <li>\n            <a href="${e.buy_links[0].url}" target="_blank">\n            <svg class='icon-book-modal-amazon'><use href="${n(Hf)}#icon-amazon"></use></svg>\n            </a>\n        </li>\n        <li>\n            <a href="${e.buy_links[1].url}" target="_blank">\n            <svg class='icon-book-modal-ibooks'><use href="${n(Hf)}#icon-ibooks"></use></svg>\n            </a>\n        </li>\n        <li>\n            <a href="${e.buy_links[4].url}" target="_blank">\n            <svg class='icon-book-modal-bookshop'><use href="${n(Hf)}#icon-bookshop"></use></svg>\n            </a>\n        </li>\n        </ul>\n    </div>\n    <button class='book-modal-btn js-add' id='js-book-modal-btn'></button>\n    <p class='book-modal-buy'>Congratulations! This book is on your shopping list. To remove it, press “Remove from the shopping list”.</p>\n    <button class='book-modal-close' id='js-book-modal-btn-close'>\n    <svg class='icon-book-modal-close'><use href='${n(Hf)}#icon-closeCross'></use></svg>\n    </button>\n    </div>`,{handler:null,onShow(e){this.handler=zf.bind(e),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler)}});t.show(),document.addEventListener("click",(e=>{e.target.closest("#js-book-modal-btn-close")&&t.close()}))}function zf(e){"Escape"===e.code&&this.close()}Hf=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("k5HmC");const Vf=document.querySelector(".js-home-category-books-list"),$f=JSON.parse(localStorage.getItem("books"))??[];Vf.addEventListener("click",(function(e){const t=e.target.parentNode;jf(t.dataset.id).then((e=>{if(!e||!t.classList.contains("js-home-books-item"))return;Wf(e);const n=document.querySelector("#js-book-modal-btn");Ff.currentUser;Aa(Ff,(e=>{e||(document.querySelector(".book-modal-buy").style.display="none",n.style.display="none")}));const i=$f.some((({_id:t})=>t===e._id));function r(t){const n=t.target.classList.contains("js-add"),i=$f.some((({_id:t})=>t===e._id));if(n){if(t.target.classList.remove("js-add"),t.target.classList.add("js-remove"),document.querySelector(".book-modal-buy").style.display="block",i)return;$f.push(e),localStorage.setItem("books",JSON.stringify($f))}else t.target.classList.remove("js-remove"),t.target.classList.add("js-add"),document.querySelector(".book-modal-buy").style.display="none",$f.map((t=>{t._id===e._id&&($f.splice($f.indexOf(t),1),localStorage.setItem("books",JSON.stringify($f)))}))}document.querySelector(".book-modal-buy").style.display="none",i?(n.addEventListener("click",r),n.classList.remove("js-add"),n.classList.add("js-remove"),document.querySelector(".book-modal-buy").style.display="block"):(n.addEventListener("click",r),n.classList.add("js-add"),n.classList.remove("js-remove"),document.querySelector(".book-modal-buy").style.display="none")})).catch((e=>console.log(e)))}));let Kf=window.innerWidth;addEventListener("resize",(function(e){const t=window.innerWidth;(t>=768&&Kf<768||t<768&&Kf>=768||t>=1440&&Kf<1440||t<1440&&Kf>=1440)&&location.reload()}));const Gf=document.querySelector(".js-open-menu"),Jf=document.querySelector(".js-close-menu"),Yf=document.querySelector(".js-menu-container");Gf.addEventListener("click",(function(){document.body.style.overflow="hidden",Gf.classList.add("is-open"),Yf.classList.add("is-open"),Gf.classList.contains("is-open")&&(Jf.classList.add("is-open"),Jf.classList.toggle("block"),Gf.style.display="none")})),Jf.addEventListener("click",(function(){document.body.style.overflow="auto",Gf.classList.remove("is-open"),Jf.classList.toggle("block"),Jf.classList.remove("is-open"),Yf.classList.remove("is-open"),Gf.style.display="block"}));getComputedStyle(Jf).display;const Qf={"auth/email-already-in-use":"An account with this email already exists. Sign in instead.","auth/invalid-email":"Enter a valid email address.","auth/missing-email":"Enter your email address.","auth/missing-password":"Enter your password.","auth/weak-password":"Use a password with at least 6 characters.","auth/user-not-found":"No account found for that email.","auth/wrong-password":"That password is incorrect.","auth/invalid-credential":"Email or password is incorrect.","auth/invalid-login-credentials":"Email or password is incorrect.","auth/user-disabled":"This account has been disabled.","auth/too-many-requests":"Too many attempts. Wait a moment and try again.","auth/network-request-failed":"Check your connection and try again."};function Xf(e){return Qf[e?.code]||"Something went wrong. Please try again."}function Zf(){var e;(e=Ff,Ur(e).signOut()).then((()=>{c.Notify.success("You have logged out."),On.headerNav.setAttribute("hidden",!0)})).catch((e=>{c.Notify.failure(Xf(e))}))}function ep(){On.modalLogin.setAttribute("hidden",!0)}On.btnOpenModalLogin.addEventListener("click",(function(e){if("Log out"===e.target.textContent)return Zf(),void(On.btnOpenModalLogin.textContent="Sign in");On.modalLogin.removeAttribute("hidden")})),On.btnCloseModalLogin.addEventListener("click",ep),On.btnSignUp.addEventListener("click",(function(e){On.btnGoogle.textContent="SIGN UP",On.btnSignIn.classList.remove("is-active"),On.btnSignUp.classList.add("is-active"),On.inputName.getAttribute("style")&&On.inputName.removeAttribute("style")})),On.btnSignIn.addEventListener("click",(function(e){On.btnGoogle.textContent="SIGN IN",On.btnSignIn.classList.add("is-active"),On.btnSignUp.classList.remove("is-active"),On.inputName.style.visibility="hidden"})),On.btnGoogle.addEventListener("click",(function(){if("SIGN UP"===On.btnGoogle.textContent){const e=document.querySelector('[name="username"]').value,t=document.querySelector('[name="email"]').value,n=document.querySelector('[name="password"]').value;Ra(Ff,t,n).then((n=>{const i=n.user;Af(Rf(Bf,"users/"+i.uid),{username:e,email:t}),ep(),c.Notify.success("Your account has been created.")})).catch((e=>{c.Notify.failure(Xf(e))}));Ff.currentUser;Aa(Ff,(e=>{if(e){e.uid;On.btnOpenModalLogin.textContent="Log out"}}))}if("SIGN IN"===On.btnGoogle.textContent){const e=document.querySelector('[name="email"]').value,t=document.querySelector('[name="password"]').value;xa(Ff,e,t).then((e=>{const t=e.user,n=new Date;Of(Rf(Bf,"users/"+t.uid),{last_login:n}),ep(),c.Notify.success("You are now signed in.")})).catch((e=>{c.Notify.failure(Xf(e))}))}}));Ff.currentUser;Aa(Ff,(e=>{if(e){e.uid;On.btnOpenModalLogin.textContent="Log out"}}));const tp={openModal:document.querySelector(".open-modal-team"),closeModal:document.querySelector(".close-modal-team"),teamBackdrop:document.querySelector(".backdrop-modal"),teamModal:document.getElementsByClassName("team__modal")};function np(e){tp.teamModal[0].classList.remove("closeModalAnimationTeam"),tp.teamBackdrop.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",ip),document.body.style.overflow=""}function ip(e){"Escape"===e.code&&(tp.teamModal[0].classList.remove("openModalAnimationTeam"),tp.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((()=>{np()}),400),np())}function rp(e){e.target===tp.teamBackdrop&&(tp.teamModal[0].classList.remove("openModalAnimationTeam"),tp.teamModal[0].classList.add("closeModalAnimationTeam"),setTimeout((()=>{np()}),400))}tp.openModal.addEventListener("click",(function(e){tp.teamBackdrop.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",ip),document.addEventListener("click",rp),tp.teamModal[0].classList.add("openModalAnimationTeam")})),tp.closeModal.addEventListener("click",np);const op=document.querySelector(".js-scroll-button");op.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){scrollY>100?op.classList.remove("visually-hidden-scroll"):op.classList.add("visually-hidden-scroll")}))}();
//# sourceMappingURL=index.afee4fcd.js.map
