(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(210);var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{images:["/projects/photography/2019_summer_montreal/grad.jpg","/projects/photography/2019_summer_montreal/miss.jpg","/projects/photography/2019_summer_montreal/fucktop.jpg","/projects/photography/2019_summer_montreal/temptation.jpg","/projects/photography/2019_summer_montreal/favoritelight.jpg","/projects/photography/2019_summer_montreal/beigendeath.jpg","/projects/photography/2019_summer_montreal/johnwick.jpg","/projects/photography/2019_summer_montreal/reptilian.jpg","/projects/photography/2019_summer_montreal/red.jpg","/projects/photography/2019_summer_montreal/somethingyoulike.jpg","/projects/photography/2019_summer_montreal/downdowndown.jpg"]}))},n}(r.a.Component);t.default=i},198:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(15),i=a.n(o),l=a(55),c=a.n(l);a.d(t,"a",function(){return c.a});a(199);var s=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||o,staticQueryData:e})})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},199:function(e,t,a){var n;e.exports=(n=a(202))&&n.default||n},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(208),a(201));var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("a",{className:"external-links",href:"https://instagram.com/jean.arjean"},r.a.createElement(o.b,{className:"icon-style"})),r.a.createElement("a",{className:"external-links",href:"https://github.com/rorscharg"},r.a.createElement(o.a,{className:"icon-style"})),r.a.createElement("a",{className:"external-links",href:"https://twitter.com/rorscharg"},r.a.createElement(o.c,{className:"icon-style"}))),r.a.createElement("div",null))},n}(n.Component);t.a=i},202:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),l=a(77),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},203:function(e){e.exports={data:{site:{siteMetadata:{title:"jean.arjean"}}}}},204:function(e,t,a){"use strict";var n=a(203),r=a(0),o=a.n(r),i=a(206),l=a.n(i),c=(a(20),a(205),a(198));a(207);function s(e){return o.a.createElement("div",{className:"menu-item-container"},o.a.createElement(c.a,{to:e.link},e.name))}var m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={isOpen:!1,windowWidth:1026},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.handleResize=function(){this.setState({windowWidth:window.innerWidth})},r.componentDidMount=function(){window.addEventListener("resize",this.handleResize.bind(this)),this.setState({windowWidth:window.innerWidth})},r.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize.bind(this))},r.toggle=function(){this.setState({isOpen:!this.state.isOpen})},r.renderFullscreenMenu=function(){return this.state.isOpen?o.a.createElement("div",{className:"overlay",style:{width:"100%"}},o.a.createElement("a",{href:"javascript:void(0)",className:"closebtn",onClick:this.toggle.bind(this)},"×"),o.a.createElement("div",{className:"overlay-content"},o.a.createElement(s,{name:"Home",link:"/",onClick:this.state.isOpen=!1}),o.a.createElement("br",null),o.a.createElement(s,{name:"Projects",link:"/projects"}),o.a.createElement("br",null),o.a.createElement(s,{name:"Thoughts",link:"/blog"}),o.a.createElement("br",null),o.a.createElement(s,{name:"About",link:"/about"}))," "):o.a.createElement("div",{className:"overlay"})},r.renderNavigation=function(){return this.state.windowWidth>=1025?o.a.createElement("div",{className:"header-container-desktop"},o.a.createElement("div",null),o.a.createElement("div",{className:"header-content-desktop"},o.a.createElement("div",{className:"left-desktop menu-item"},o.a.createElement(s,{name:"Home",link:"/"}),o.a.createElement(s,{name:"Projects",link:"/projects"})),o.a.createElement("div",{className:"title"},o.a.createElement(c.a,{to:"/",className:"website-title"},o.a.createElement("h1",null,"jean.arjean"),o.a.createElement("p",null,"developer"))),o.a.createElement("div",{className:"right-desktop menu-item"},o.a.createElement(s,{name:"Thoughts",link:"/blog"}),o.a.createElement(s,{name:"About",link:"/about"}))," ")):o.a.createElement("div",{className:"header-content-mobile"},o.a.createElement("div",{className:"title-mobile left-mobile"},o.a.createElement(c.a,{to:"/",className:"website-title"},o.a.createElement("h1",null,"jean.arjean"),o.a.createElement("p",null,"web dev"))),o.a.createElement("div",{className:"right-mobile"},o.a.createElement("div",{className:"right-content",onClick:this.toggle.bind(this)},"☰")))},r.render=function(){return o.a.createElement("header",{className:"header"},this.renderNavigation(),this.renderFullscreenMenu())},n}(r.Component),u=a(200);a(209),t.a=function(e){var t=e.children;return o.a.createElement(c.b,{query:"3470870683",render:function(e){var a="white";return t&&t.props&&t.props.style&&t.props.style.backgroundColor&&(a=t.props.style.backgroundColor),o.a.createElement("div",{className:"page-container",style:{backgroundColor:""+a}},o.a.createElement(l.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),o.a.createElement(m,null),o.a.createElement("div",{className:"content-wrap"},t,o.a.createElement(u.a,null)))},data:n})}},210:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(204);a(211);var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"photography-album-container"},r.a.createElement(l,{images:this.props.images})))},n}(n.Component);function l(e){return r.a.createElement("div",null,e.images.map(function(e){return r.a.createElement("div",{key:e},r.a.createElement("img",{src:e,style:c,alt:e}),r.a.createElement("br",null))}))}var c={display:"block",margin:"auto",maxWidth:"80vw",maxHeight:"100vh"};t.a=i}}]);
//# sourceMappingURL=component---src-pages-projects-photography-2019-summer-montreal-jsx-e50764ada09f06dbaa24.js.map