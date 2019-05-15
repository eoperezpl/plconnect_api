var PL_API=function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){var o=t(1).default;n.exports={Auth:o}},function(n,e,t){"use strict";function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}t.r(e),t.d(e,"default",function(){return i});var i=function(){function n(){var e=this;if(function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.events={start:{callback:function(){},msg_error:"Event -> start callback is not function"},connect:{callback:function(){},msg_error:"Event -> connect callback is not function"},disconnect:{callback:function(){},msg_error:"Event -> disconnect callback is not function"},finish:{callback:function(){},msg_error:"Event -> finish callback is not function"}},this.primary_url="https://foservices.prensalibre.com",this.auth_id="0f07e8e38a7b56f90912b3d0d874f7e7",this.FindAuthToken=function(){var n=!1,t=localStorage.getItem(e.auth_id);return null!==t&&(n=atob(t)),n},this.SetAuthToken=function(n){localStorage.setItem(e.auth_id,btoa(n))},this.UnsetAuthToken=function(){return localStorage.removeItem(e.auth_id),!e.FindAuthToken()},this.parseJwt=function(n){if(n){var e=n.split(".")[1],t=decodeURIComponent(atob(e).split("").map(function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(t)}return!1},this.DoPOST=function(n,e,t){fetch(n,{method:"POST",mode:"cors",headers:new Headers({"Content-Type":"application/json"}),cache:"no-cache",body:JSON.stringify(e)}).then(function(n){return n.json()}).then(function(n){t(n)}).catch(function(n){console.error(n)})},this.SendMsg=function(n){console.log(n)},this.execEventOnGo=function(n,t){if(void 0!==t[n]){var o=e.FindAuthToken();t[n](e.parseJwt(o))}},this.execEvent=function(n,t){void 0!==e.events[n]?"function"==typeof e.events[n].callback?(0,e.events[n].callback)(t):e.SendMsg(e.events[n].msg_error):e.SendMsg("The event '"+n+"' not exists")},window.PlConnectApiInstance)return window.PlConnectApiInstance;window.PlConnectApiInstance=this}var e,t,i;return e=n,(t=[{key:"Event",value:function(n,e){void 0!==this.events[n]?this.events[n].callback=e:console.log("Event '"+n+"' is not defined")}},{key:"EventTrigger",value:function(n){var e=this.FindAuthToken();this.execEvent(n,this.parseJwt(e))}},{key:"CheckLogin",value:function(n){var e=this;n||(n={}),this.EventTrigger("start"),this.execEventOnGo("start",n);var t=this.FindAuthToken();t?this.DoPOST(this.primary_url+"/auth/check",{token:t},function(t){void 0!==t.auth&&(1===t.auth?(e.SendMsg("** User connected **"),e.EventTrigger("connect"),e.execEventOnGo("connect",n)):(e.EventTrigger("disconnect"),e.execEventOnGo("disconnect",n))),e.EventTrigger("finish"),e.execEventOnGo("finish",n)}):(this.EventTrigger("disconnect"),this.execEventOnGo("disconnect",n),this.EventTrigger("finish"),this.execEventOnGo("finish",n))}},{key:"MakeLogin",value:function(n,e,t){var o=this;t||(t={}),this.EventTrigger("start"),this.execEventOnGo("start",t),this.DoPOST(this.primary_url+"/auth/login",{user:n,password:e},function(n){void 0!==n.auth&&(1===n.auth?(o.SetAuthToken(n.token),o.EventTrigger("connect"),o.execEventOnGo("connect",t)):(o.EventTrigger("disconnect"),o.execEventOnGo("disconnect",t))),o.EventTrigger("finish"),o.execEventOnGo("finish",t)})}},{key:"MakeLogout",value:function(){return this.UnsetAuthToken()}},{key:"MakeRegister",value:function(){}}])&&o(e.prototype,t),i&&o(e,i),n}()}]);