(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return v});var a=n(0),r=n.n(a),o=n(15),i=n.n(o),l=n(293),u=n.n(l),c=n(206),s=n(198),d=n(204),f=(n(303),["#eb4559","#f78259","#aeefec","#d7385e"]),m=-1,p=function(e){var t=e.data,n=t.allMarkdownRemark.group,a=t.site.siteMetadata.title;return r.a.createElement(d.a,null,r.a.createElement(c.Helmet,{title:a}),r.a.createElement("div",{className:"tags-container"},r.a.createElement("h1",null,"Tags"),r.a.createElement("ul",null,n.map(function(e){return m=(m+1)%4,r.a.createElement("span",{key:e.fieldValue},r.a.createElement(s.a,{to:"/tags/"+u()(e.fieldValue)+"/",style:{backgroundColor:f[m],padding:"10px",textDecoration:"none",borderRadius:"10000000px",color:"#242424",fontWeight:"550"}},e.fieldValue," (",e.totalCount,")"),r.a.createElement("span",{style:{display:"inline-block",width:"10px"}}))}))))};p.propTypes={data:i.a.shape({allMarkdownRemark:i.a.shape({group:i.a.arrayOf(i.a.shape({fieldValue:i.a.string.isRequired,totalCount:i.a.number.isRequired}).isRequired)}),site:i.a.shape({siteMetadata:i.a.shape({title:i.a.string.isRequired})})})},t.default=p;var v="3450235017"},198:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),o=n(15),i=n.n(o),l=n(55),u=n.n(l);n.d(t,"a",function(){return u.a});n(199);var c=r.a.createContext({});function s(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:n,render:a||o,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},199:function(e,t,n){var a;e.exports=(a=n(202))&&a.default||a},200:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=(n(208),n(201));var i=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("a",{className:"external-links",href:"https://instagram.com/jean.arjean"},r.a.createElement(o.b,{className:"icon-style"})),r.a.createElement("a",{className:"external-links",href:"https://github.com/rorscharg"},r.a.createElement(o.a,{className:"icon-style"})),r.a.createElement("a",{className:"external-links",href:"https://twitter.com/rorscharg"},r.a.createElement(o.c,{className:"icon-style"}))),r.a.createElement("div",null))},a}(a.Component);t.a=i},202:function(e,t,n){"use strict";n.r(t);n(18);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),l=n(77),u=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},203:function(e){e.exports={data:{site:{siteMetadata:{title:"jean.arjean"}}}}},204:function(e,t,n){"use strict";var a=n(203),r=n(0),o=n.n(r),i=n(206),l=n.n(i),u=(n(20),n(205),n(198));n(207);function c(e){return o.a.createElement("div",{className:"menu-item-container"},o.a.createElement(u.a,{to:e.link},e.name))}var s=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).toggle=n.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n.state={isOpen:!1,windowWidth:1026},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.handleResize=function(){this.setState({windowWidth:window.innerWidth})},r.componentDidMount=function(){window.addEventListener("resize",this.handleResize.bind(this)),this.setState({windowWidth:window.innerWidth})},r.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize.bind(this))},r.toggle=function(){this.setState({isOpen:!this.state.isOpen})},r.renderFullscreenMenu=function(){return this.state.isOpen?o.a.createElement("div",{className:"overlay",style:{width:"100%"}},o.a.createElement("a",{href:"javascript:void(0)",className:"closebtn",onClick:this.toggle.bind(this)},"×"),o.a.createElement("div",{className:"overlay-content"},o.a.createElement(c,{name:"Home",link:"/",onClick:this.state.isOpen=!1}),o.a.createElement("br",null),o.a.createElement(c,{name:"Projects",link:"/projects"}),o.a.createElement("br",null),o.a.createElement(c,{name:"Thoughts",link:"/blog"}),o.a.createElement("br",null),o.a.createElement(c,{name:"About",link:"/about"}))," "):o.a.createElement("div",{className:"overlay"})},r.renderNavigation=function(){return this.state.windowWidth>=1025?o.a.createElement("div",{className:"header-container-desktop"},o.a.createElement("div",null),o.a.createElement("div",{className:"header-content-desktop"},o.a.createElement("div",{className:"left-desktop menu-item"},o.a.createElement(c,{name:"Home",link:"/"}),o.a.createElement(c,{name:"Projects",link:"/projects"})),o.a.createElement("div",{className:"title"},o.a.createElement(u.a,{to:"/",className:"website-title"},o.a.createElement("h1",null,"jean.arjean"),o.a.createElement("p",null,"developer"))),o.a.createElement("div",{className:"right-desktop menu-item"},o.a.createElement(c,{name:"Thoughts",link:"/blog"}),o.a.createElement(c,{name:"About",link:"/about"}))," ")):o.a.createElement("div",{className:"header-content-mobile"},o.a.createElement("div",{className:"title-mobile left-mobile"},o.a.createElement(u.a,{to:"/",className:"website-title"},o.a.createElement("h1",null,"jean.arjean"),o.a.createElement("p",null,"web dev"))),o.a.createElement("div",{className:"right-mobile"},o.a.createElement("div",{className:"right-content",onClick:this.toggle.bind(this)},"☰")))},r.render=function(){return o.a.createElement("header",{className:"header"},this.renderNavigation(),this.renderFullscreenMenu())},a}(r.Component),d=n(200);n(209),t.a=function(e){var t=e.children;return o.a.createElement(u.b,{query:"3470870683",render:function(e){var n="white";return t&&t.props&&t.props.style&&t.props.style.backgroundColor&&(n=t.props.style.backgroundColor),o.a.createElement("div",{className:"page-container",style:{backgroundColor:""+n}},o.a.createElement(l.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),o.a.createElement(s,null),o.a.createElement("div",{className:"content-wrap"},t,o.a.createElement(d.a,null)))},data:a})}},213:function(e,t,n){var a=n(216).Symbol;e.exports=a},214:function(e,t){var n=Array.isArray;e.exports=n},215:function(e,t,n){var a=n(218),r=n(226),o="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||r(e)&&a(e)==o}},216:function(e,t,n){var a=n(223),r="object"==typeof self&&self&&self.Object===Object&&self,o=a||r||Function("return this")();e.exports=o},218:function(e,t,n){var a=n(213),r=n(224),o=n(225),i="[object Null]",l="[object Undefined]",u=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?l:i:u&&u in Object(e)?r(e):o(e)}},222:function(e,t,n){var a=n(227);e.exports=function(e){return null==e?"":a(e)}},223:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(116))},224:function(e,t,n){n(78),n(11);var a=n(213),r=Object.prototype,o=r.hasOwnProperty,i=r.toString,l=a?a.toStringTag:void 0;e.exports=function(e){var t=o.call(e,l),n=e[l];try{e[l]=void 0;var a=!0}catch(u){}var r=i.call(e);return a&&(t?e[l]=n:delete e[l]),r}},225:function(e,t,n){n(78),n(11);var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},226:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},227:function(e,t,n){n(78),n(11);var a=n(213),r=n(228),o=n(214),i=n(215),l=1/0,u=a?a.prototype:void 0,c=u?u.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return r(t,e)+"";if(i(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-l?"-0":n}},228:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},293:function(e,t,n){var a=n(294)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=a},294:function(e,t,n){n(12),n(212);var a=n(295),r=n(296),o=n(299),i=RegExp("['’]","g");e.exports=function(e){return function(t){return a(o(r(t).replace(i,"")),e,"")}}},295:function(e,t){e.exports=function(e,t,n,a){var r=-1,o=null==e?0:e.length;for(a&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}},296:function(e,t,n){n(12),n(212);var a=n(297),r=n(222),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(o,a).replace(i,"")}},297:function(e,t,n){var a=n(298)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},298:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},299:function(e,t,n){n(115);var a=n(300),r=n(301),o=n(222),i=n(302);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?r(e)?i(e):a(e):e.match(t)||[]}},300:function(e,t,n){n(115);var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},301:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},302:function(e,t,n){n(115),n(212);var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+a+"]",o="\\d+",i="[\\u2700-\\u27bf]",l="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+a+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",d="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+l+"|"+u+")",m="(?:"+d+"|"+u+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,s].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),h="(?:"+[i,c,s].join("|")+")"+v,E=RegExp([d+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,d,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,d+f,"$"].join("|")+")",d+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,h].join("|"),"g");e.exports=function(e){return e.match(E)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-jsx-e4266cb6364c9e1c9067.js.map