(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(212),l=a.n(i),o=a(220),c=a(201);a(288);var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){l()(this,"props.data.site.siteMetadata.title"),l()(this,"props.data.allMarkdownRemark.edges");return r.a.createElement(c.a,null,r.a.createElement("div",{className:"projects-container"},r.a.createElement(o.a,{name:"Photography",link:"/projects/photography/",image:"projects/photography/2017_fall_montreal/sipping.jpg",alt:"2017_fall_montreal/sipping.jpg"}," "),r.a.createElement(o.a,{name:"Programming",link:"/projects/programming/",image:"projects/programming.png",alt:"programming.jpg"}," ")))},n}(r.a.Component);t.default=s},196:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(15),l=a.n(i),o=a(55),c=a.n(o);a.d(t,"a",function(){return c.a});a(197);var s=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||i,staticQueryData:e})})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},197:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(206),a(208)),l=a(207);var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("a",{className:"external-links",href:"https://instagram.com/jean.arjean"},r.a.createElement(l.a,{className:"icon-style"})),r.a.createElement("a",{className:"external-links",href:"https://github.com/rorscharg"},r.a.createElement(i.a,{className:"icon-style"})),r.a.createElement("a",{className:"external-links",href:"https://twitter.com/rorscharg"},r.a.createElement(l.b,{className:"icon-style"}))),r.a.createElement("div",null))},n}(n.Component);t.a=o},199:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),i=a(15),l=a.n(i),o=a(77),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},200:function(e){e.exports={data:{site:{siteMetadata:{title:"jean.arjean"}}}}},201:function(e,t,a){"use strict";var n=a(200),r=a(0),i=a.n(r),l=a(203),o=a.n(l),c=(a(20),a(202),a(196));a(205);function s(e){return i.a.createElement("div",{className:"menu-item-container"},i.a.createElement(c.a,{to:e.link},e.name))}var m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={isOpen:!1,windowWidth:1026},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.handleResize=function(){this.setState({windowWidth:window.innerWidth})},r.componentDidMount=function(){window.addEventListener("resize",this.handleResize.bind(this)),this.setState({windowWidth:window.innerWidth})},r.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize.bind(this))},r.toggle=function(){this.setState({isOpen:!this.state.isOpen})},r.renderFullscreenMenu=function(){return this.state.isOpen?i.a.createElement("div",{className:"overlay",style:{width:"100%"}},i.a.createElement("a",{href:"javascript:void(0)",className:"closebtn",onClick:this.toggle.bind(this)},"×"),i.a.createElement("div",{className:"overlay-content"},i.a.createElement(s,{name:"Home",link:"/",onClick:this.state.isOpen=!1}),i.a.createElement("br",null),i.a.createElement(s,{name:"Projects",link:"/projects"}),i.a.createElement("br",null),i.a.createElement(s,{name:"Thoughts",link:"/blog"}),i.a.createElement("br",null),i.a.createElement(s,{name:"About",link:"/about"}))," "):i.a.createElement("div",{className:"overlay"})},r.renderNavigation=function(){return this.state.windowWidth>=1025?i.a.createElement("div",{className:"header-container-desktop"},i.a.createElement("div",null),i.a.createElement("div",{className:"header-content-desktop"},i.a.createElement("div",{className:"left-desktop menu-item"},i.a.createElement(s,{name:"Home",link:"/"}),i.a.createElement(s,{name:"Projects",link:"/projects"})),i.a.createElement("div",{className:"title"},i.a.createElement(c.a,{to:"/",className:"website-title"},i.a.createElement("h1",null,"jean.arjean"),i.a.createElement("p",null,"(web, game) dev, street photograhpy"))),i.a.createElement("div",{className:"right-desktop menu-item"},i.a.createElement(s,{name:"Thoughts",link:"/blog"}),i.a.createElement(s,{name:"About",link:"/about"}))," ")):i.a.createElement("div",{className:"header-content-mobile"},i.a.createElement("div",{className:"title-mobile left-mobile"},i.a.createElement(c.a,{to:"/",className:"website-title"},i.a.createElement("h1",null,"jean.arjean"),i.a.createElement("p",null,"(web, game) dev, street photograhpy"))),i.a.createElement("div",{className:"right-mobile"},i.a.createElement("div",{className:"right-content",onClick:this.toggle.bind(this)},"☰")))},r.render=function(){return i.a.createElement("header",{className:"header"},this.renderNavigation(),this.renderFullscreenMenu())},n}(r.Component),u=a(198);a(209),t.a=function(e){var t=e.children;return i.a.createElement(c.b,{query:"3470870683",render:function(e){return i.a.createElement("div",{className:"page-container"},i.a.createElement(o.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),i.a.createElement(m,null),i.a.createElement("div",{className:"content-wrap"},t,i.a.createElement(u.a,null)))},data:n})}},220:function(e,t,a){"use strict";a(20),a(202);var n=a(0),r=a.n(n),i=a(196);a(225);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:"card"},r.a.createElement(i.a,{to:this.props.link,className:"card-link"},r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"card-title"},this.props.name),r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:this.props.image,alt:this.props.image,className:"card-image-preview"})))))},n}(n.Component);t.a=l}}]);
//# sourceMappingURL=component---src-pages-projects-index-jsx-48f2156a0e958bbdd7ec.js.map