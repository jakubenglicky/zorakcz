(()=>{var n={327:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var o=t(645),i=t.n(o)()((function(n){return n[1]}));i.push([n.id,"* {\n  box-sizing: border-box;\n}\nhtml {\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\nbody {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 2;\n  letter-spacing: 0.05em;\n  color: #9b9b9b;\n  background-color: #fff;\n  -webkit-text-size-adjust: none;\n  -webkit-font-smoothing: subpixel-antialiased;\n  margin: 0;\n}\n@media (max-width: 991.98px) {\n  body {\n    margin-top: 57px;\n  }\n}\na {\n  color: #151515;\n  text-decoration: none;\n  transition: 0.25s;\n}\na:hover,\na:focus {\n  color: #9d7f6c;\n  text-decoration: none;\n  outline: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 600;\n  color: #151515;\n}\nh1 {\n  font-size: 32px;\n  line-height: 1.2;\n}\n@media (min-width: 768px) {\n  h1 {\n    font-size: 56px;\n    line-height: 1.4;\n  }\n}\n@media (min-width: 992px) {\n  h1 {\n    font-size: 62px;\n    line-height: 1.2;\n  }\n}\nh2 {\n  font-size: 26px;\n  line-height: 1.3;\n}\n@media (min-width: 768px) {\n  h2 {\n    font-size: 38px;\n    line-height: 1.3;\n  }\n}\n@media (min-width: 992px) {\n  h2 {\n    font-size: 48px;\n    line-height: 1.16667;\n  }\n}\nh4 {\n  font-size: 20px;\n  line-height: 1.35;\n}\nbutton:focus {\n  outline: none;\n}\nimg {\n  max-width: 100%;\n  vertical-align: middle;\n  border-style: none;\n}\n/* Images */\n.image-1ku1 {\n  height: 0;\n  overflow: hidden;\n  width: 100%;\n  padding-bottom: 100%;\n  position: relative;\n}\n.image-1ku1 img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: scale-down;\n  object-fit: scale-down;\n  object-fit: cover;\n}\n/* Header */\nnav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n@media (min-width: 992px) {\n  nav {\n    display: block;\n  }\n}\n@media (max-width: 991.98px) {\n  nav {\n    background-color: #fff;\n    border-bottom: 1px solid #ebebeb;\n    padding-top: 4px;\n    padding-bottom: 4px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 101;\n  }\n}\nnav .navbar-brand img {\n  height: 33px;\n}\n@media (min-width: 992px) {\n  nav .navbar-brand {\n    padding-top: 32px;\n    padding-bottom: 32px;\n    max-width: 1200px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  nav .navbar-brand img {\n    height: auto;\n  }\n}\n@media (min-width: 1200px) {\n  nav .navbar-brand {\n    padding-top: 42px;\n    padding-bottom: 42px;\n  }\n}\nnav .navbar-brand a {\n  padding-left: 15px;\n  padding-right: 15px;\n}\nnav .navbar-toggle {\n  position: relative;\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n  color: #363636;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 101;\n}\n@media (min-width: 992px) {\n  nav .navbar-toggle {\n    display: none;\n  }\n}\nnav .navbar-toggle span {\n  position: relative;\n  display: block;\n  margin: auto;\n  transition: 0.3s all ease;\n}\nnav .navbar-toggle span,\nnav .navbar-toggle span::before,\nnav .navbar-toggle span::after {\n  width: 24px;\n  height: 4px;\n  background-color: #363636;\n  backface-visibility: hidden;\n}\nnav .navbar-toggle span::before,\nnav .navbar-toggle span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -8px;\n  transition: 0.3s all ease;\n  -webkit-transition-duration: 0.3s, 0.3s;\n  transition-duration: 0.3s, 0.3s;\n  -webkit-transition-delay: 0.3s, 0s;\n  transition-delay: 0.3s, 0s;\n  -webkit-transition-property: top, -webkit-transform;\n  transition-property: top, transform;\n}\nnav .navbar-toggle span::after {\n  top: 8px;\n}\n@media (max-width: 991.98px) {\n  nav .navbar-content {\n    background: #fff;\n    border-left: 1px solid #ebebeb;\n    height: 100vh;\n    position: fixed;\n    padding: 43px 0 81px;\n    right: -280px;\n    top: 0;\n    transition: 0.3s;\n    width: 280px;\n    z-index: 100;\n  }\n}\n@media (min-width: 992px) {\n  nav .navbar-content {\n    border-top: 1px solid #ebebeb;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1200px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-right: 15px;\n    padding-left: 15px;\n    position: sticky;\n    top: 0;\n  }\n}\nnav .navbar-content ul {\n  display: block;\n  text-align: right;\n  list-style: none;\n  padding: 14px 0;\n  margin: 0;\n}\n@media (min-width: 992px) {\n  nav .navbar-content ul {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    flex-grow: 1;\n    font-size: 0;\n    line-height: 0;\n    text-align: left;\n    opacity: 1;\n    transition: 0.33s;\n  }\n}\nnav .navbar-content ul li {\n  font-size: 12px;\n  line-height: 1.4;\n}\nnav .navbar-content ul li a {\n  background: transparent;\n  color: #151515;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1.33333;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  display: block;\n  padding: 9px 56px 9px 18px;\n}\nnav .navbar-content ul li a.active {\n  color: #fff;\n  background: #9d7f6c;\n}\n@media (min-width: 992px) {\n  nav .navbar-content ul li a {\n    padding: 5px 7px;\n    display: inline-block;\n  }\n  nav .navbar-content ul li a:hover,\n  nav .navbar-content ul li a.active {\n    background: transparent;\n    color: #9d7f6c;\n  }\n}\n@media (max-width: 991.98px) {\n  nav.is-show .navbar-content {\n    right: 0;\n  }\n}\nnav.is-show .navbar-toggle span {\n  transition: background 0.3s 0s ease;\n  background: transparent;\n}\nnav.is-show .navbar-toggle span::before,\nnav.is-show .navbar-toggle span::after {\n  top: 0;\n  -webkit-transition-delay: 0s, 0.3s;\n  transition-delay: 0s, 0.3s;\n}\nnav.is-show .navbar-toggle span::before {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\nnav.is-show .navbar-toggle span::after {\n  -webkit-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n/* Container */\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col,\n.col-1,\n.col-10,\n.col-11,\n.col-12,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-auto,\n.col-lg,\n.col-lg-1,\n.col-lg-10,\n.col-lg-11,\n.col-lg-12,\n.col-lg-2,\n.col-lg-3,\n.col-lg-4,\n.col-lg-5,\n.col-lg-6,\n.col-lg-7,\n.col-lg-8,\n.col-lg-9,\n.col-lg-auto,\n.col-md,\n.col-md-1,\n.col-md-10,\n.col-md-11,\n.col-md-12,\n.col-md-2,\n.col-md-3,\n.col-md-4,\n.col-md-5,\n.col-md-6,\n.col-md-7,\n.col-md-8,\n.col-md-9,\n.col-md-auto,\n.col-sm,\n.col-sm-1,\n.col-sm-10,\n.col-sm-11,\n.col-sm-12,\n.col-sm-2,\n.col-sm-3,\n.col-sm-4,\n.col-sm-5,\n.col-sm-6,\n.col-sm-7,\n.col-sm-8,\n.col-sm-9,\n.col-sm-auto,\n.col-xl,\n.col-xl-1,\n.col-xl-10,\n.col-xl-11,\n.col-xl-12,\n.col-xl-2,\n.col-xl-3,\n.col-xl-4,\n.col-xl-5,\n.col-xl-6,\n.col-xl-7,\n.col-xl-8,\n.col-xl-9,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media (min-width: 768px) {\n  .col-md-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n}\n/* Main carousel */\n#uvod {\n  width: 100%;\n}\n#uvod .tns-nav,\n#uvod button {\n  display: none;\n}\n#uvod .main-carousel-item {\n  min-height: 34.4271vw;\n  position: relative;\n}\n#uvod .main-carousel-item img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: scale-down;\n  object-fit: scale-down;\n  object-fit: cover;\n  z-index: -1;\n}\n#uvod .main-carousel-item .text {\n  padding: 35px 0 90px;\n}\n@media (min-width: 768px) {\n  #uvod .main-carousel-item .text {\n    padding: 100px 0 200px;\n  }\n}\n#uvod .main-carousel-item .text h1 {\n  color: #fff;\n  letter-spacing: 0.05em;\n}\n/* sluzby */\n#sluzby {\n  padding: 90px 0;\n}\n#sluzby .service-box {\n  margin-bottom: 30px;\n}\n#sluzby .service-box .image {\n  overflow: hidden;\n}\n#sluzby .service-box .image img {\n  transition: all 0.3s ease;\n}\n#sluzby .service-box .image img:hover {\n  transform: scale(1.1);\n}\n#sluzby .service-box h3 {\n  margin-top: 18px;\n  font-size: 16px;\n  text-align: center;\n}\n/* o nas */\n#o-nas {\n  background-color: #f6f6f6;\n  padding: 50px 0;\n}\n@media (min-width: 768px) {\n  #o-nas {\n    padding: 70px 0;\n  }\n}\n@media (min-width: 992px) {\n  #o-nas {\n    padding: 90px 0;\n  }\n}\n/* Footer */\nfooter {\n  background-color: #242424;\n  color: #fff;\n  font-size: 13px;\n  padding: 75px 0 20px;\n}\nfooter a {\n  color: #fff;\n}\nfooter a:hover {\n  color: #9d7f6c;\n}\nfooter h4 {\n  color: #fff;\n  margin-bottom: 25px;\n}\nfooter ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nfooter hr {\n  border-bottom: none;\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n  margin-top: 75px;\n  margin-bottom: 20px;\n}\nfooter .copyright-row {\n  font-size: 12px;\n  padding: 0 15px;\n}\n#realizovane-projekty {\n  padding-bottom: 40px;\n}\n#realizovane-projekty img {\n  margin-left: auto;\n  margin-right: auto;\n  width: 280px;\n  height: 200px;\n  margin-bottom: 5px;\n}\n",""]);const a=i},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{"use strict";var o,i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function r(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},o=[],i=0;i<n.length;i++){var l=n[i],s=e.base?l[0]+e.base:l[0],d=t[s]||0,c="".concat(s," ").concat(d);t[s]=d+1;var p=r(c),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(a[p].references++,a[p].updater(m)):a.push({identifier:c,updater:x(m,e),references:1}),o.push(c)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var r=i(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,c=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=c(e,i);else{var a=document.createTextNode(i),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(a,r[e]):n.appendChild(a)}}function m(n,e,t){var o=t.css,i=t.media,a=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var g=null,f=0;function x(n,e){var t,o,i;if(e.singleton){var a=f++;t=g||(g=s(e)),o=p.bind(null,t,a,!1),i=p.bind(null,t,a,!0)}else t=s(e),o=m.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=r(t[o]);a[i].references--}for(var s=l(n,e),d=0;d<t.length;d++){var c=r(t[d]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=s}}}},225:()=>{var n=!1;try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(n){}let t=document.querySelectorAll(".click-dropdown");t.forEach((e=>{let t=e.querySelector(".open-drop");t.addEventListener("click",(()=>{t.className.includes("no-close")?e.classList.add("is-show"):e.classList.toggle("is-show")}),!!n&&{passive:!0})})),window.addEventListener("click",(n=>{t.forEach((e=>{(n.composedPath().includes(e)||e.className.includes("win-not-close"))&&(!n.composedPath().includes(e)||n.composedPath().includes(e.querySelector(".click-dropdown-content"))||n.composedPath().includes(e.querySelector(".open-drop"))||e.className.includes("win-not-close"))||e.classList.remove("is-show")}))}),!!n&&{passive:!0}),tns({container:".my-slider",items:1,slideBy:"page",autoplay:!0,autowidth:!0,controlsContainer:"#carousel-controls"})}},e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";var n=t(379),e=t.n(n),o=t(327);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,t(225)})()})();