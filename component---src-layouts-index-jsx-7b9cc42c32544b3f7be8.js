webpackJsonp([79611799117203,60335399758886],{115:function(e,t){e.exports={data:{site:{siteMetadata:{title:"RORSCHARG"}}},layoutContext:{}}},223:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(230),l=r(u),c=n(115),s=r(c);t.default=function(e){return i.default.createElement(l.default,o({},e,s.default))},e.exports=t.default},106:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),a=f.length-1;a>=0;a--)if(f[a]!=d[a])return!1;for(a=f.length-1;a>=0;a--)if(s=f[a],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n(108),l=n(107),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},107:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},108:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},110:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},139:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(8),p=r(d),T=n(147),E=r(T),h=n(106),m=r(h),y=n(140),A=n(56),b=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,m.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=i,t.titleAttributes=l({},a),t));case A.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case A.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(n={},n[r.type]=l({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),l=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=l({},r);return n&&(a=this.mapChildrenToProps(n,a)),f.default.createElement(e,a)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},_=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(v),S=b(_);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},56:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},140:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),l=n(6),c=r(l),s=n(56),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=m(e,s.TAG_NAMES.TITLE),n=m(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=m(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},h=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();t.indexOf(l)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:m(e,s.HELMET_PROPS.DEFER),encode:m(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:h(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:h(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:h(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),b=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,g=function(e){O&&_(O),e.defer?O=v(function(){w(e,function(){O=null})}):(w(e),O=null)},w=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;M(s.TAG_NAMES.BODY,r),M(s.TAG_NAMES.HTML,o),R(d,p);var T={baseTag:N(s.TAG_NAMES.BASE,n),linkTags:N(s.TAG_NAMES.LINK,a),metaTags:N(s.TAG_NAMES.META,i),noscriptTags:N(s.TAG_NAMES.NOSCRIPT,u),scriptTags:N(s.TAG_NAMES.SCRIPT,c),styleTags:N(s.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(h[e]=T[e].oldTags)}),t&&t(),l(e,E,h)},P=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),M(s.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var f=a.indexOf(l);f!==-1&&a.splice(f,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);o.length===a.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},N=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=C(n),a=P(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(a,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(a,r)+"</"+e+">"},j=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),a=L(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,a,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},x=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return j(e,t,n)}}}},q=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(s.TAG_NAMES.BASE,t,r),bodyAttributes:x(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(s.ATTRIBUTE_NAMES.HTML,o,r),link:x(s.TAG_NAMES.LINK,a,r),meta:x(s.TAG_NAMES.META,i,r),noscript:x(s.TAG_NAMES.NOSCRIPT,u,r),script:x(s.TAG_NAMES.SCRIPT,l,r),style:x(s.TAG_NAMES.STYLE,c,r),title:x(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=g,t.mapStateOnServer=q,t.reducePropsToState=y,t.requestAnimationFrame=v,t.warn=S}).call(t,function(){return this}())},26:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),l=n(8),c=r(l),s=function(e,t){var n=e.children,r=e.color,i=e.size,l=e.style,c=e.width,s=e.height,f=o(e,["children","color","size","style","width","height"]),d=t.reactIconBase,p=void 0===d?{}:d,T=i||p.size||"1em";return u.default.createElement("svg",a({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:s||T,width:c||T},p,f,{style:a({verticalAlign:"middle",color:r||p.color},p.style||{},l)}))};s.propTypes={color:c.default.string,size:c.default.oneOfType([c.default.string,c.default.number]),width:c.default.oneOfType([c.default.string,c.default.number]),height:c.default.oneOfType([c.default.string,c.default.number]),style:c.default.object},s.contextTypes={reactIconBase:c.default.shape(s.propTypes)},t.default=s,e.exports=t.default},141:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(26),l=r(u),c=function(e){return i.default.createElement(l.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m33.4 31.8v-14.4h-3q0.4 1.4 0.4 2.9 0 2.8-1.4 5.2t-3.9 3.7-5.3 1.4q-4.4 0-7.6-3t-3.1-7.3q0-1.5 0.5-2.9h-3.2v14.4q0 0.6 0.4 1t1 0.4h23.8q0.6 0 1-0.4t0.4-1z m-6.3-11.9q0-2.7-2.1-4.7t-4.8-1.9q-2.9 0-4.9 1.9t-2 4.7 2 4.8 4.9 1.9q2.8 0 4.8-1.9t2.1-4.8z m6.3-8v-3.7q0-0.6-0.4-1.1t-1.1-0.4h-3.9q-0.7 0-1.1 0.4t-0.5 1.1v3.7q0 0.6 0.5 1.1t1.1 0.4h3.9q0.6 0 1.1-0.4t0.4-1.1z m3.9-4.6v25.4q0 1.9-1.3 3.1t-3.1 1.3h-25.5q-1.8 0-3.1-1.3t-1.3-3.1v-25.4q0-1.9 1.3-3.1t3.1-1.3h25.5q1.8 0 3.1 1.3t1.3 3.1z"})))};t.default=c,e.exports=t.default},142:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(26),l=r(u),c=function(e){return i.default.createElement(l.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m31.6 13.6q-1.3 0.6-2.7 0.8 1.5-0.9 2-2.6-1.4 0.8-2.9 1.1-1.4-1.5-3.5-1.5-1.9 0-3.3 1.4t-1.3 3.3q0 0.7 0.1 1.1-2.9-0.2-5.4-1.5t-4.3-3.4q-0.7 1.1-0.7 2.3 0 2.6 2.1 3.9-1.1 0-2.3-0.5v0q0 1.7 1.1 3t2.8 1.6q-0.7 0.2-1.1 0.2-0.3 0-0.9-0.1 0.4 1.4 1.6 2.3t2.8 1q-2.6 2-5.9 2-0.6 0-1.1-0.1 3.3 2.1 7.2 2.1 2.5 0 4.7-0.8t3.7-2.1 2.7-3.1 1.7-3.6 0.5-3.7q0-0.4 0-0.7 1.4-1 2.4-2.4z m5.7-4.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"})))};t.default=c,e.exports=t.default},143:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),i=r(a),u=n(26),l=r(u),c=function(e){return i.default.createElement(l.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z"})))};t.default=c,e.exports=t.default},147:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function d(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return c.createElement(u,this.props)},t}(l.Component);return E.displayName="SideEffect("+r(u)+")",E.canUseDOM=s.canUseDOM,E}}var l=n(1),c=r(l),s=r(n(110)),f=r(n(148));e.exports=u},148:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!u(c))return!1;var s=e[c],f=t[c];if(o=n?n.call(r,s,f,c):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},82:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(16);r(c);n(121);var s=n(143),f=r(s),d=n(141),p=r(d),T=n(142),E=r(T),h=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return l.default.createElement("footer",{className:"footer"},l.default.createElement("div",null),l.default.createElement("div",null,l.default.createElement("a",{className:"external-links",href:"https://instagram.com/rorscharg"},l.default.createElement(p.default,{className:"icon-style"})),l.default.createElement("a",{className:"external-links",href:"https://github.com/rorscharg"},l.default.createElement(f.default,{className:"icon-style"})),l.default.createElement("a",{className:"external-links",href:"https://twitter.com/rorscharg"},l.default.createElement(E.default,{className:"icon-style"}))),l.default.createElement("div",null))},t}(u.Component);t.default=h,e.exports=t.default},121:function(e,t){},227:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return c.default.createElement("div",{className:"menu-item-container"},c.default.createElement(f.default,{to:e.link},e.name))}t.__esModule=!0;var l=n(1),c=r(l),s=n(16),f=r(s);n(466);var d=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.toggle=r.toggle.bind(r),r.state={isOpen:!1,windowWidth:1026},r}return i(t,e),t.prototype.handleResize=function(){this.setState({windowWidth:window.innerWidth})},t.prototype.componentDidMount=function(){window.addEventListener("resize",this.handleResize.bind(this)),this.setState({windowWidth:window.innerWidth})},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize.bind(this))},t.prototype.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.prototype.renderFullscreenMenu=function(){return this.state.isOpen?c.default.createElement("div",{className:"overlay",style:{width:"100%"}},c.default.createElement("a",{href:"javascript:void(0)",className:"closebtn",onClick:this.toggle.bind(this)},"×"),c.default.createElement("div",{className:"overlay-content"},c.default.createElement(u,{name:"Home",link:"/",onClick:this.state.isOpen=!1}),c.default.createElement("br",null),c.default.createElement(u,{name:"Projects",link:"/projects"}),c.default.createElement("br",null),c.default.createElement(u,{name:"Thoughts",link:"/blog"}),c.default.createElement("br",null),c.default.createElement(u,{name:"About",link:"/about"}))," "):c.default.createElement("div",{className:"overlay"})},t.prototype.renderNavigation=function(){return this.state.windowWidth>=1025?c.default.createElement("div",{className:"header-container-desktop"},c.default.createElement("div",null),c.default.createElement("div",{className:"header-content-desktop"},c.default.createElement("div",{className:"left-desktop menu-item"},c.default.createElement(u,{name:"Home",link:"/"}),c.default.createElement(u,{name:"Projects",link:"/projects"})),c.default.createElement("div",{className:"title"},c.default.createElement(f.default,{to:"/",className:"website-title"},c.default.createElement("h1",null,"RORSCHARG"))),c.default.createElement("div",{className:"right-desktop menu-item"},c.default.createElement(u,{name:"Thoughts",link:"/blog"}),c.default.createElement(u,{name:"About",link:"/about"}))," ")):c.default.createElement("div",{className:"header-content-mobile"},c.default.createElement("div",{className:"title-mobile left-mobile"},c.default.createElement(f.default,{to:"/",className:"website-title"},c.default.createElement("h1",null,"RORSCHARG"))),c.default.createElement("div",{className:"right-mobile"},c.default.createElement("div",{className:"right-content",onClick:this.toggle.bind(this)},"☰")))},t.prototype.render=function(){return c.default.createElement("header",{className:"header"},this.renderNavigation(),this.renderFullscreenMenu())},t}(l.Component);t.default=d,e.exports=t.default},466:function(e,t){},230:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),l=r(u),c=n(51),s=r(c),f=n(139),d=r(f),p=n(227),T=r(p),E=n(82),h=r(E);n(469);var m=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children),n=(0,s.default)(this,"props.data.site.siteMetadata.title");return l.default.createElement("div",{className:"page-container"},l.default.createElement(d.default,{title:n}),l.default.createElement(T.default,null),l.default.createElement("div",{className:"content-wrap"},t(),l.default.createElement(h.default,null)))},t}(l.default.Component);t.default=m;t.pageQuery="** extracted graphql fragment **"},469:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-jsx-7b9cc42c32544b3f7be8.js.map