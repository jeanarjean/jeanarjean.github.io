webpackJsonp([0xc23565d713b7],{229:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(1),u=r(s),c=a(16),i=r(c);a(468);var f=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"small-card"},u.default.createElement(i.default,{to:this.props.link,className:"small-card-link"},u.default.createElement("div",{className:"small-card-container"},u.default.createElement("div",{className:"small-card-title"},this.props.name),u.default.createElement("div",{className:"small-card-image"},u.default.createElement("img",{src:this.props.image,alt:this.props.image,className:"small-card-image-preview"})))))},t}(s.Component);t.default=f,e.exports=t.default},468:function(e,t){},234:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(1),u=r(s),c=a(16),i=r(c),f=a(51),p=r(f),d=a(229),m=r(d);a(473);var h=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=((0,p.default)(this,"props.data.site.siteMetadata.title"),(0,p.default)(this,"props.data.allMarkdownRemark.edges")),t=e[0].node,a=(0,p.default)(t,"frontmatter.title")||t.fields.slug;return u.default.createElement("div",{className:"home-container"},u.default.createElement("div",{className:"home-content"},u.default.createElement("h1",null,"Last Post:"),u.default.createElement("div",{key:t.fields.slug},u.default.createElement("h3",null,u.default.createElement(i.default,{style:{boxShadow:"none"},to:t.fields.slug},a)),u.default.createElement("small",null,t.frontmatter.date),u.default.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})),u.default.createElement("h1",null,"Last Photography Project:"),u.default.createElement("div",{className:"latest-photography-card"},u.default.createElement(m.default,{name:"Montreal, Summer 2019",link:"/projects/photography/2019_summer_montreal",image:"projects/photography/2019_summer_montreal/temptation.jpg",alt:"projects/photography/2019_summer_montreal/grad.jpg",className:"latest-photography-card"}," "))))},t}(u.default.Component);t.default=h;t.pageQuery="** extracted graphql fragment **"},473:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-jsx-cbd08e86c49bbb42e0d3.js.map