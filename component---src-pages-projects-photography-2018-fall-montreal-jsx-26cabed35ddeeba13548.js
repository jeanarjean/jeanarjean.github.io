(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(204);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{images:["/projects/photography/2018_fall_montreal/lady2.jpg","/projects/photography/2018_fall_montreal/lady.jpg","/projects/photography/2018_fall_montreal/bus2.jpg","/projects/photography/2018_fall_montreal/sunny.jpg","/projects/photography/2018_fall_montreal/bus.jpg","/projects/photography/2018_fall_montreal/cooltrains.jpg","/projects/photography/2018_fall_montreal/cooltrains2.jpg","/projects/photography/2018_fall_montreal/street.jpg","/projects/photography/2018_fall_montreal/hurry.jpg","/projects/photography/2018_fall_montreal/funfunfun.jpg","/projects/photography/2018_fall_montreal/left.jpg","/projects/photography/2018_fall_montreal/middle.jpg","/projects/photography/2018_fall_montreal/right.jpg","/projects/photography/2018_fall_montreal/saturated.jpg","/projects/photography/2018_fall_montreal/memyselfandi.jpg","/projects/photography/2018_fall_montreal/lorde.jpg","/projects/photography/2018_fall_montreal/try.jpg"]}))},n}(r.a.Component);t.default=l},196:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),o=a(15),l=a.n(o),i=a(55),c=a.n(i);a.d(t,"a",function(){return c.a});a(197);var s=r.a.createContext({});function p(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&o(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(p,{data:t,query:a,render:n||o,staticQueryData:e})})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},197:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(206),a(208)),l=a(207);var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("a",{className:"external-links",href:"https://instagram.com/jean.arjean"},r.a.createElement(l.a,{className:"icon-style"})),r.a.createElement("a",{className:"external-links",href:"https://github.com/rorscharg"},r.a.createElement(o.a,{className:"icon-style"})),r.a.createElement("a",{className:"external-links",href:"https://twitter.com/rorscharg"},r.a.createElement(l.b,{className:"icon-style"}))),r.a.createElement("div",null))},n}(n.Component);t.a=i},199:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),i=a(77),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},200:function(e){e.exports={data:{site:{siteMetadata:{title:"jean.arjean"}}}}},201:function(e,t,a){"use strict";var n=a(200),r=a(0),o=a.n(r),l=a(203),i=a.n(l),c=(a(20),a(202),a(196));a(205);function s(e){return o.a.createElement("div",{className:"menu-item-container"},o.a.createElement(c.a,{to:e.link},e.name))}var p=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={isOpen:!1,windowWidth:1026},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.handleResize=function(){this.setState({windowWidth:window.innerWidth})},r.componentDidMount=function(){window.addEventListener("resize",this.handleResize.bind(this)),this.setState({windowWidth:window.innerWidth})},r.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize.bind(this))},r.toggle=function(){this.setState({isOpen:!this.state.isOpen})},r.renderFullscreenMenu=function(){return this.state.isOpen?o.a.createElement("div",{className:"overlay",style:{width:"100%"}},o.a.createElement("a",{href:"javascript:void(0)",className:"closebtn",onClick:this.toggle.bind(this)},"×"),o.a.createElement("div",{className:"overlay-content"},o.a.createElement(s,{name:"Home",link:"/",onClick:this.state.isOpen=!1}),o.a.createElement("br",null),o.a.createElement(s,{name:"Projects",link:"/projects"}),o.a.createElement("br",null),o.a.createElement(s,{name:"Thoughts",link:"/blog"}),o.a.createElement("br",null),o.a.createElement(s,{name:"About",link:"/about"}))," "):o.a.createElement("div",{className:"overlay"})},r.renderNavigation=function(){return this.state.windowWidth>=1025?o.a.createElement("div",{className:"header-container-desktop"},o.a.createElement("div",null),o.a.createElement("div",{className:"header-content-desktop"},o.a.createElement("div",{className:"left-desktop menu-item"},o.a.createElement(s,{name:"Home",link:"/"}),o.a.createElement(s,{name:"Projects",link:"/projects"})),o.a.createElement("div",{className:"title"},o.a.createElement(c.a,{to:"/",className:"website-title"},o.a.createElement("h1",null,"jean.arjean"),o.a.createElement("p",null,"(web, game) dev, street photograhpy"))),o.a.createElement("div",{className:"right-desktop menu-item"},o.a.createElement(s,{name:"Thoughts",link:"/blog"}),o.a.createElement(s,{name:"About",link:"/about"}))," ")):o.a.createElement("div",{className:"header-content-mobile"},o.a.createElement("div",{className:"title-mobile left-mobile"},o.a.createElement(c.a,{to:"/",className:"website-title"},o.a.createElement("h1",null,"jean.arjean"),o.a.createElement("p",null,"(web, game) dev, street photograhpy"))),o.a.createElement("div",{className:"right-mobile"},o.a.createElement("div",{className:"right-content",onClick:this.toggle.bind(this)},"☰")))},r.render=function(){return o.a.createElement("header",{className:"header"},this.renderNavigation(),this.renderFullscreenMenu())},n}(r.Component),m=a(198);a(209),t.a=function(e){var t=e.children;return o.a.createElement(c.b,{query:"3470870683",render:function(e){return o.a.createElement("div",{className:"page-container"},o.a.createElement(i.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),o.a.createElement(p,null),o.a.createElement("div",{className:"content-wrap"},t,o.a.createElement(m.a,null)))},data:n})}},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(201);a(210);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"photography-album-container"},r.a.createElement(i,{images:this.props.images})))},n}(n.Component);function i(e){return r.a.createElement("div",null,e.images.map(function(e){return r.a.createElement("div",{key:e},r.a.createElement("img",{src:e,style:c,alt:e}),r.a.createElement("br",null))}))}var c={display:"block",margin:"auto",maxWidth:"80vw",maxHeight:"100vh"};t.a=l}}]);
//# sourceMappingURL=component---src-pages-projects-photography-2018-fall-montreal-jsx-26cabed35ddeeba13548.js.map