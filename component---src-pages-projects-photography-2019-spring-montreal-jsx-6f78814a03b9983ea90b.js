(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(204);var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{images:["/projects/photography/2019_spring_montreal/night5.jpg","/projects/photography/2019_spring_montreal/night1.jpg","/projects/photography/2019_spring_montreal/night2.jpg","/projects/photography/2019_spring_montreal/night3.jpg","/projects/photography/2019_spring_montreal/night4.jpg","/projects/photography/2019_spring_montreal/mist.jpg","/projects/photography/2019_spring_montreal/pink.jpg","/projects/photography/2019_spring_montreal/pink2.jpg","/projects/photography/2019_spring_montreal/bnw3.jpg","/projects/photography/2019_spring_montreal/punch.jpg","/projects/photography/2019_spring_montreal/bnw4.jpg","/projects/photography/2019_spring_montreal/bnw5.jpg","/projects/photography/2019_spring_montreal/rene.jpg","/projects/photography/2019_spring_montreal/blackonblack.jpg","/projects/photography/2019_spring_montreal/bullshit.jpg","/projects/photography/2019_spring_montreal/blue.jpg","/projects/photography/2019_spring_montreal/life.jpg","/projects/photography/2019_spring_montreal/hood.jpg","/projects/photography/2019_spring_montreal/cats.jpg","/projects/photography/2019_spring_montreal/go.jpg","/projects/photography/2019_spring_montreal/mean.jpg","/projects/photography/2019_spring_montreal/polondeath.jpg","/projects/photography/2019_spring_montreal/suitndeath.jpg","/projects/photography/2019_spring_montreal/orange.jpg","/projects/photography/2019_spring_montreal/orangetruck.jpg"]}))},n}(r.a.Component);t.default=i},196:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),o=a(15),i=a.n(o),l=a(55),s=a.n(l);a.d(t,"a",function(){return s.a});a(197);var c=r.a.createContext({});function p(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(p,{data:t,query:a,render:n||o,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},197:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(206),a(208)),i=a(207);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("a",{className:"external-links",href:"https://instagram.com/jean.arjean"},r.a.createElement(i.a,{className:"icon-style"})),r.a.createElement("a",{className:"external-links",href:"https://github.com/rorscharg"},r.a.createElement(o.a,{className:"icon-style"})),r.a.createElement("a",{className:"external-links",href:"https://twitter.com/rorscharg"},r.a.createElement(i.b,{className:"icon-style"}))),r.a.createElement("div",null))},n}(n.Component);t.a=l},199:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),l=a(77),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},200:function(e){e.exports={data:{site:{siteMetadata:{title:"jean.arjean"}}}}},201:function(e,t,a){"use strict";var n=a(200),r=a(0),o=a.n(r),i=a(203),l=a.n(i),s=(a(20),a(202),a(196));a(205);function c(e){return o.a.createElement("div",{className:"menu-item-container"},o.a.createElement(s.a,{to:e.link},e.name))}var p=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={isOpen:!1,windowWidth:1026},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.handleResize=function(){this.setState({windowWidth:window.innerWidth})},r.componentDidMount=function(){window.addEventListener("resize",this.handleResize.bind(this)),this.setState({windowWidth:window.innerWidth})},r.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize.bind(this))},r.toggle=function(){this.setState({isOpen:!this.state.isOpen})},r.renderFullscreenMenu=function(){return this.state.isOpen?o.a.createElement("div",{className:"overlay",style:{width:"100%"}},o.a.createElement("a",{href:"javascript:void(0)",className:"closebtn",onClick:this.toggle.bind(this)},"×"),o.a.createElement("div",{className:"overlay-content"},o.a.createElement(c,{name:"Home",link:"/",onClick:this.state.isOpen=!1}),o.a.createElement("br",null),o.a.createElement(c,{name:"Projects",link:"/projects"}),o.a.createElement("br",null),o.a.createElement(c,{name:"Thoughts",link:"/blog"}),o.a.createElement("br",null),o.a.createElement(c,{name:"About",link:"/about"}))," "):o.a.createElement("div",{className:"overlay"})},r.renderNavigation=function(){return this.state.windowWidth>=1025?o.a.createElement("div",{className:"header-container-desktop"},o.a.createElement("div",null),o.a.createElement("div",{className:"header-content-desktop"},o.a.createElement("div",{className:"left-desktop menu-item"},o.a.createElement(c,{name:"Home",link:"/"}),o.a.createElement(c,{name:"Projects",link:"/projects"})),o.a.createElement("div",{className:"title"},o.a.createElement(s.a,{to:"/",className:"website-title"},o.a.createElement("h1",null,"jean.arjean"),o.a.createElement("p",null,"web dev"))),o.a.createElement("div",{className:"right-desktop menu-item"},o.a.createElement(c,{name:"Thoughts",link:"/blog"}),o.a.createElement(c,{name:"About",link:"/about"}))," ")):o.a.createElement("div",{className:"header-content-mobile"},o.a.createElement("div",{className:"title-mobile left-mobile"},o.a.createElement(s.a,{to:"/",className:"website-title"},o.a.createElement("h1",null,"jean.arjean"),o.a.createElement("p",null,"web dev"))),o.a.createElement("div",{className:"right-mobile"},o.a.createElement("div",{className:"right-content",onClick:this.toggle.bind(this)},"☰")))},r.render=function(){return o.a.createElement("header",{className:"header"},this.renderNavigation(),this.renderFullscreenMenu())},n}(r.Component),m=a(198);a(209),t.a=function(e){var t=e.children;return o.a.createElement(s.b,{query:"3470870683",render:function(e){return o.a.createElement("div",{className:"page-container"},o.a.createElement(l.a,{titleTemplate:"%s | "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title}),o.a.createElement(p,null),o.a.createElement("div",{className:"content-wrap"},t,o.a.createElement(m.a,null)))},data:n})}},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(201);a(210);var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"photography-album-container"},r.a.createElement(l,{images:this.props.images})))},n}(n.Component);function l(e){return r.a.createElement("div",null,e.images.map(function(e){return r.a.createElement("div",{key:e},r.a.createElement("img",{src:e,style:s,alt:e}),r.a.createElement("br",null))}))}var s={display:"block",margin:"auto",maxWidth:"80vw",maxHeight:"100vh"};t.a=i}}]);
//# sourceMappingURL=component---src-pages-projects-photography-2019-spring-montreal-jsx-6f78814a03b9983ea90b.js.map