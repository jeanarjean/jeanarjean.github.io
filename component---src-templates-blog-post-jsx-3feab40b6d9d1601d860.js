webpackJsonp([0xb92941d84ed6],{222:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(2),i=l(u),f=n(20),s=l(f),c=n(11),d=l(c),p=n(18),m=l(p),y=n(16),h=l(y);n(421);var E=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter.image.childImageSharp.responsiveSizes.src,n=(0,m.default)(this.props,"data.site.siteMetadata.title"),l=this.props.pathContext,r=l.previous,a=l.next;return console.log(e),i.default.createElement("div",{className:"post-container",style:{backgroundImage:"url("+t+")"}},i.default.createElement(h.default,null),i.default.createElement("div",{className:"post-content"},i.default.createElement(s.default,{title:e.frontmatter.title+" | "+n}),i.default.createElement("h1",null,e.frontmatter.title),i.default.createElement("p",{style:{display:"block"}},e.frontmatter.date),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.default.createElement("hr",null),i.default.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r&&i.default.createElement("li",null,i.default.createElement(d.default,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),a&&i.default.createElement("li",null,i.default.createElement(d.default,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))))},t}(i.default.Component);t.default=E;t.pageQuery="** extracted graphql fragment **"},421:function(e,t){}});
//# sourceMappingURL=component---src-templates-blog-post-jsx-3feab40b6d9d1601d860.js.map