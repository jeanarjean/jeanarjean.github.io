/*! For license information please see 1fffeb21ff3103e653e2fb8a4ea4bb4320c1af7b-86ac774c9d5360903ba3.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
        '2rMq': function (e, t, n) {
            var r
            !(function () {
                'use strict'
                var a = !(
                        'undefined' == typeof window ||
                        !window.document ||
                        !window.document.createElement
                    ),
                    o = {
                        canUseDOM: a,
                        canUseWorkers: 'undefined' != typeof Worker,
                        canUseEventListeners:
                            a &&
                            !(!window.addEventListener && !window.attachEvent),
                        canUseViewport: a && !!window.screen
                    }
                void 0 ===
                    (r = function () {
                        return o
                    }.call(t, n, t, e)) || (e.exports = r)
            })()
        },
        '8+s/': function (e, t, n) {
            'use strict'
            function r(e) {
                return e && 'object' == typeof e && 'default' in e
                    ? e.default
                    : e
            }
            var a = n('q1tI'),
                o = r(a),
                i = r(n('2rMq')),
                c = r(n('Gytx'))
            function l(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function')
            }
            function u(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    )
                return !t || ('object' != typeof t && 'function' != typeof t)
                    ? e
                    : t
            }
            e.exports = function (e, t, n) {
                if ('function' != typeof e)
                    throw new Error(
                        'Expected reducePropsToState to be a function.'
                    )
                if ('function' != typeof t)
                    throw new Error(
                        'Expected handleStateChangeOnClient to be a function.'
                    )
                if (void 0 !== n && 'function' != typeof n)
                    throw new Error(
                        'Expected mapStateOnServer to either be undefined or a function.'
                    )
                return function (r) {
                    if ('function' != typeof r)
                        throw new Error(
                            'Expected WrappedComponent to be a React component.'
                        )
                    var s = [],
                        f = void 0
                    function T() {
                        ;(f = e(
                            s.map(function (e) {
                                return e.props
                            })
                        )),
                            E.canUseDOM ? t(f) : n && (f = n(f))
                    }
                    var E = (function (e) {
                        function t() {
                            return l(this, t), u(this, e.apply(this, arguments))
                        }
                        return (
                            (function (e, t) {
                                if ('function' != typeof t && null !== t)
                                    throw new TypeError(
                                        'Super expression must either be null or a function, not ' +
                                            typeof t
                                    )
                                ;(e.prototype = Object.create(
                                    t && t.prototype,
                                    {
                                        constructor: {
                                            value: e,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }
                                )),
                                    t &&
                                        (Object.setPrototypeOf
                                            ? Object.setPrototypeOf(e, t)
                                            : (e.__proto__ = t))
                            })(t, e),
                            (t.peek = function () {
                                return f
                            }),
                            (t.rewind = function () {
                                if (t.canUseDOM)
                                    throw new Error(
                                        'You may only call rewind() on the server. Call peek() to read the current state.'
                                    )
                                var e = f
                                return (f = void 0), (s = []), e
                            }),
                            (t.prototype.shouldComponentUpdate = function (e) {
                                return !c(e, this.props)
                            }),
                            (t.prototype.componentWillMount = function () {
                                s.push(this), T()
                            }),
                            (t.prototype.componentDidUpdate = function () {
                                T()
                            }),
                            (t.prototype.componentWillUnmount = function () {
                                var e = s.indexOf(this)
                                s.splice(e, 1), T()
                            }),
                            (t.prototype.render = function () {
                                return o.createElement(r, this.props)
                            }),
                            t
                        )
                    })(a.Component)
                    return (
                        (E.displayName =
                            'SideEffect(' +
                            (function (e) {
                                return e.displayName || e.name || 'Component'
                            })(r) +
                            ')'),
                        (E.canUseDOM = i.canUseDOM),
                        E
                    )
                }
            }
        },
        Gytx: function (e, t) {
            e.exports = function (e, t, n, r) {
                var a = n ? n.call(r, e, t) : void 0
                if (void 0 !== a) return !!a
                if (e === t) return !0
                if ('object' != typeof e || !e || 'object' != typeof t || !t)
                    return !1
                var o = Object.keys(e),
                    i = Object.keys(t)
                if (o.length !== i.length) return !1
                for (
                    var c = Object.prototype.hasOwnProperty.bind(t), l = 0;
                    l < o.length;
                    l++
                ) {
                    var u = o[l]
                    if (!c(u)) return !1
                    var s = e[u],
                        f = t[u]
                    if (
                        !1 === (a = n ? n.call(r, s, f, u) : void 0) ||
                        (void 0 === a && s !== f)
                    )
                        return !1
                }
                return !0
            }
        },
        L12J: function (e, t, n) {
            'use strict'
            var r = n('q1tI'),
                a = n.n(r),
                o = n('TJpk'),
                i = n.n(o)
            var c = n('9Hrx'),
                l = n('Wbzz')
            n('lKc3')
            function u(e) {
                return a.a.createElement(
                    'div',
                    { className: 'menu-item-container' },
                    a.a.createElement(l.a, { to: e.link }, e.name)
                )
            }
            var s = (function (e) {
                    function t(t) {
                        var n
                        return (
                            ((n = e.call(this, t) || this).toggle =
                                n.toggle.bind(
                                    (function (e) {
                                        if (void 0 === e)
                                            throw new ReferenceError(
                                                "this hasn't been initialised - super() hasn't been called"
                                            )
                                        return e
                                    })(n)
                                )),
                            (n.state = { isOpen: !1, windowWidth: 1026 }),
                            n
                        )
                    }
                    Object(c.a)(t, e)
                    var n = t.prototype
                    return (
                        (n.handleResize = function () {
                            this.setState({ windowWidth: window.innerWidth })
                        }),
                        (n.componentDidMount = function () {
                            window.addEventListener(
                                'resize',
                                this.handleResize.bind(this)
                            ),
                                this.setState({
                                    windowWidth: window.innerWidth
                                })
                        }),
                        (n.componentWillUnmount = function () {
                            window.removeEventListener(
                                'resize',
                                this.handleResize.bind(this)
                            ),
                                (this.setState = function (e, t) {})
                        }),
                        (n.toggle = function () {
                            this.setState({ isOpen: !this.state.isOpen })
                        }),
                        (n.renderFullscreenMenu = function () {
                            return this.state.isOpen
                                ? a.a.createElement(
                                      'div',
                                      {
                                          className: 'overlay',
                                          style: { width: '100%' }
                                      },
                                      a.a.createElement(
                                          'a',
                                          {
                                              href: 'javascript:void(0)',
                                              className: 'closebtn',
                                              onClick: this.toggle.bind(this)
                                          },
                                          '×'
                                      ),
                                      a.a.createElement(
                                          'div',
                                          { className: 'overlay-content' },
                                          a.a.createElement(u, {
                                              name: 'Home',
                                              link: '/',
                                              onClick: (this.state.isOpen = !1)
                                          }),
                                          a.a.createElement('br', null),
                                          a.a.createElement(u, {
                                              name: 'Projects',
                                              link: '/projects'
                                          }),
                                          a.a.createElement('br', null),
                                          a.a.createElement(u, {
                                              name: 'Thoughts',
                                              link: '/blog'
                                          }),
                                          a.a.createElement('br', null),
                                          a.a.createElement(u, {
                                              name: 'About',
                                              link: '/about'
                                          })
                                      ),
                                      ' '
                                  )
                                : a.a.createElement('div', {
                                      className: 'overlay'
                                  })
                        }),
                        (n.renderNavigation = function () {
                            return this.state.windowWidth >= 1025
                                ? a.a.createElement(
                                      'div',
                                      { className: 'header-container-desktop' },
                                      a.a.createElement('div', null),
                                      a.a.createElement(
                                          'div',
                                          {
                                              className:
                                                  'header-content-desktop'
                                          },
                                          a.a.createElement(
                                              'div',
                                              {
                                                  className:
                                                      'left-desktop menu-item'
                                              },
                                              a.a.createElement(u, {
                                                  name: 'Home',
                                                  link: '/'
                                              }),
                                              a.a.createElement(u, {
                                                  name: 'Projects',
                                                  link: '/projects'
                                              })
                                          ),
                                          a.a.createElement(
                                              'div',
                                              { className: 'title' },
                                              a.a.createElement(
                                                  l.a,
                                                  {
                                                      to: '/',
                                                      className: 'website-title'
                                                  },
                                                  a.a.createElement(
                                                      'h1',
                                                      null,
                                                      'jean.arjean'
                                                  )
                                              )
                                          ),
                                          a.a.createElement(
                                              'div',
                                              {
                                                  className:
                                                      'right-desktop menu-item'
                                              },
                                              a.a.createElement(u, {
                                                  name: 'Thoughts',
                                                  link: '/blog'
                                              }),
                                              a.a.createElement(u, {
                                                  name: 'About',
                                                  link: '/about'
                                              })
                                          ),
                                          ' '
                                      )
                                  )
                                : a.a.createElement(
                                      'div',
                                      { className: 'header-content-mobile' },
                                      a.a.createElement(
                                          'div',
                                          {
                                              className:
                                                  'title-mobile left-mobile'
                                          },
                                          a.a.createElement(
                                              l.a,
                                              {
                                                  to: '/',
                                                  className: 'website-title'
                                              },
                                              a.a.createElement(
                                                  'h1',
                                                  null,
                                                  'jean.arjean'
                                              )
                                          )
                                      ),
                                      a.a.createElement(
                                          'div',
                                          { className: 'right-mobile' },
                                          a.a.createElement(
                                              'div',
                                              {
                                                  className: 'right-content',
                                                  onClick:
                                                      this.toggle.bind(this)
                                              },
                                              '☰'
                                          )
                                      )
                                  )
                        }),
                        (n.render = function () {
                            return a.a.createElement(
                                'header',
                                { className: 'header' },
                                this.renderNavigation(),
                                this.renderFullscreenMenu()
                            )
                        }),
                        t
                    )
                })(r.Component),
                f = n('krhX')
            n('j0kf'),
                (t.a = function (e) {
                    var t = e.children
                    return a.a.createElement(l.b, {
                        query: '3868140423',
                        render: function (e) {
                            var n = 'white'
                            return (
                                t &&
                                    t.props &&
                                    t.props.style &&
                                    t.props.style.backgroundColor &&
                                    (n = t.props.style.backgroundColor),
                                a.a.createElement(
                                    'div',
                                    {
                                        className: 'page-container',
                                        style: { backgroundColor: '' + n }
                                    },
                                    a.a.createElement(i.a, {
                                        titleTemplate:
                                            '%s | ' + e.site.siteMetadata.title,
                                        defaultTitle: e.site.siteMetadata.title
                                    }),
                                    a.a.createElement(s, null),
                                    a.a.createElement(
                                        'div',
                                        { className: 'content-wrap' },
                                        t,
                                        a.a.createElement(f.a, null)
                                    )
                                )
                            )
                        }
                    })
                })
        },
        Lnxd: function (e, t, n) {
            'use strict'
            n.d(t, 'a', function () {
                return l
            })
            var r = n('q1tI'),
                a = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                o = r.createContext && r.createContext(a),
                i = function () {
                    return (i =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var a in (t = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        a
                                    ) && (e[a] = t[a])
                            return e
                        }).apply(this, arguments)
                },
                c = function (e, t) {
                    var n = {}
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                            t.indexOf(r) < 0 &&
                            (n[r] = e[r])
                    if (
                        null != e &&
                        'function' == typeof Object.getOwnPropertySymbols
                    ) {
                        var a = 0
                        for (
                            r = Object.getOwnPropertySymbols(e);
                            a < r.length;
                            a++
                        )
                            t.indexOf(r[a]) < 0 && (n[r[a]] = e[r[a]])
                    }
                    return n
                }
            function l(e) {
                return function (t) {
                    return r.createElement(
                        u,
                        i({ attr: i({}, e.attr) }, t),
                        (function e(t) {
                            return (
                                t &&
                                t.map(function (t, n) {
                                    return r.createElement(
                                        t.tag,
                                        i({ key: n }, t.attr),
                                        e(t.child)
                                    )
                                })
                            )
                        })(e.child)
                    )
                }
            }
            function u(e) {
                var t = function (t) {
                    var n,
                        a = e.size || t.size || '1em'
                    t.className && (n = t.className),
                        e.className && (n = (n ? n + ' ' : '') + e.className)
                    var o = e.attr,
                        l = e.title,
                        u = c(e, ['attr', 'title'])
                    return r.createElement(
                        'svg',
                        i(
                            {
                                stroke: 'currentColor',
                                fill: 'currentColor',
                                strokeWidth: '0'
                            },
                            t.attr,
                            o,
                            u,
                            {
                                className: n,
                                style: i(
                                    { color: e.color || t.color },
                                    t.style,
                                    e.style
                                ),
                                height: a,
                                width: a,
                                xmlns: 'http://www.w3.org/2000/svg'
                            }
                        ),
                        l && r.createElement('title', null, l),
                        e.children
                    )
                }
                return void 0 !== o
                    ? r.createElement(o.Consumer, null, function (e) {
                          return t(e)
                      })
                    : t(a)
            }
        },
        TJpk: function (e, t, n) {
            ;(t.__esModule = !0), (t.Helmet = void 0)
            var r =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t]
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r])
                        }
                        return e
                    },
                a = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n]
                            ;(r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                'value' in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                })(),
                o = f(n('q1tI')),
                i = f(n('17x9')),
                c = f(n('8+s/')),
                l = f(n('bmMU')),
                u = n('v1p5'),
                s = n('hFT/')
            function f(e) {
                return e && e.__esModule ? e : { default: e }
            }
            function T(e, t) {
                var n = {}
                for (var r in e)
                    t.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, r) &&
                            (n[r] = e[r]))
                return n
            }
            function E(e, t) {
                if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function')
            }
            function d(e, t) {
                if (!e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    )
                return !t || ('object' != typeof t && 'function' != typeof t)
                    ? e
                    : t
            }
            var p,
                m,
                h,
                A = (0, c.default)(
                    u.reducePropsToState,
                    u.handleClientStateChange,
                    u.mapStateOnServer
                )(function () {
                    return null
                }),
                y =
                    ((p = A),
                    (h = m =
                        (function (e) {
                            function t() {
                                return (
                                    E(this, t),
                                    d(this, e.apply(this, arguments))
                                )
                            }
                            return (
                                (function (e, t) {
                                    if ('function' != typeof t && null !== t)
                                        throw new TypeError(
                                            'Super expression must either be null or a function, not ' +
                                                typeof t
                                        )
                                    ;(e.prototype = Object.create(
                                        t && t.prototype,
                                        {
                                            constructor: {
                                                value: e,
                                                enumerable: !1,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }
                                    )),
                                        t &&
                                            (Object.setPrototypeOf
                                                ? Object.setPrototypeOf(e, t)
                                                : (e.__proto__ = t))
                                })(t, e),
                                (t.prototype.shouldComponentUpdate = function (
                                    e
                                ) {
                                    return !(0, l.default)(this.props, e)
                                }),
                                (t.prototype.mapNestedChildrenToProps =
                                    function (e, t) {
                                        if (!t) return null
                                        switch (e.type) {
                                            case s.TAG_NAMES.SCRIPT:
                                            case s.TAG_NAMES.NOSCRIPT:
                                                return { innerHTML: t }
                                            case s.TAG_NAMES.STYLE:
                                                return { cssText: t }
                                        }
                                        throw new Error(
                                            '<' +
                                                e.type +
                                                ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
                                        )
                                    }),
                                (t.prototype.flattenArrayTypeChildren =
                                    function (e) {
                                        var t,
                                            n = e.child,
                                            a = e.arrayTypeChildren,
                                            o = e.newChildProps,
                                            i = e.nestedChildren
                                        return r(
                                            {},
                                            a,
                                            (((t = {})[n.type] = [].concat(
                                                a[n.type] || [],
                                                [
                                                    r(
                                                        {},
                                                        o,
                                                        this.mapNestedChildrenToProps(
                                                            n,
                                                            i
                                                        )
                                                    )
                                                ]
                                            )),
                                            t)
                                        )
                                    }),
                                (t.prototype.mapObjectTypeChildren = function (
                                    e
                                ) {
                                    var t,
                                        n,
                                        a = e.child,
                                        o = e.newProps,
                                        i = e.newChildProps,
                                        c = e.nestedChildren
                                    switch (a.type) {
                                        case s.TAG_NAMES.TITLE:
                                            return r(
                                                {},
                                                o,
                                                (((t = {})[a.type] = c),
                                                (t.titleAttributes = r({}, i)),
                                                t)
                                            )
                                        case s.TAG_NAMES.BODY:
                                            return r({}, o, {
                                                bodyAttributes: r({}, i)
                                            })
                                        case s.TAG_NAMES.HTML:
                                            return r({}, o, {
                                                htmlAttributes: r({}, i)
                                            })
                                    }
                                    return r(
                                        {},
                                        o,
                                        (((n = {})[a.type] = r({}, i)), n)
                                    )
                                }),
                                (t.prototype.mapArrayTypeChildrenToProps =
                                    function (e, t) {
                                        var n = r({}, t)
                                        return (
                                            Object.keys(e).forEach(function (
                                                t
                                            ) {
                                                var a
                                                n = r(
                                                    {},
                                                    n,
                                                    (((a = {})[t] = e[t]), a)
                                                )
                                            }),
                                            n
                                        )
                                    }),
                                (t.prototype.warnOnInvalidChildren = function (
                                    e,
                                    t
                                ) {
                                    return !0
                                }),
                                (t.prototype.mapChildrenToProps = function (
                                    e,
                                    t
                                ) {
                                    var n = this,
                                        r = {}
                                    return (
                                        o.default.Children.forEach(
                                            e,
                                            function (e) {
                                                if (e && e.props) {
                                                    var a = e.props,
                                                        o = a.children,
                                                        i = T(a, ['children']),
                                                        c = (0,
                                                        u.convertReactPropstoHtmlAttributes)(
                                                            i
                                                        )
                                                    switch (
                                                        (n.warnOnInvalidChildren(
                                                            e,
                                                            o
                                                        ),
                                                        e.type)
                                                    ) {
                                                        case s.TAG_NAMES.LINK:
                                                        case s.TAG_NAMES.META:
                                                        case s.TAG_NAMES
                                                            .NOSCRIPT:
                                                        case s.TAG_NAMES.SCRIPT:
                                                        case s.TAG_NAMES.STYLE:
                                                            r =
                                                                n.flattenArrayTypeChildren(
                                                                    {
                                                                        child: e,
                                                                        arrayTypeChildren:
                                                                            r,
                                                                        newChildProps:
                                                                            c,
                                                                        nestedChildren:
                                                                            o
                                                                    }
                                                                )
                                                            break
                                                        default:
                                                            t =
                                                                n.mapObjectTypeChildren(
                                                                    {
                                                                        child: e,
                                                                        newProps:
                                                                            t,
                                                                        newChildProps:
                                                                            c,
                                                                        nestedChildren:
                                                                            o
                                                                    }
                                                                )
                                                    }
                                                }
                                            }
                                        ),
                                        (t = this.mapArrayTypeChildrenToProps(
                                            r,
                                            t
                                        ))
                                    )
                                }),
                                (t.prototype.render = function () {
                                    var e = this.props,
                                        t = e.children,
                                        n = T(e, ['children']),
                                        a = r({}, n)
                                    return (
                                        t &&
                                            (a = this.mapChildrenToProps(t, a)),
                                        o.default.createElement(p, a)
                                    )
                                }),
                                a(t, null, [
                                    {
                                        key: 'canUseDOM',
                                        set: function (e) {
                                            p.canUseDOM = e
                                        }
                                    }
                                ]),
                                t
                            )
                        })(o.default.Component)),
                    (m.propTypes = {
                        base: i.default.object,
                        bodyAttributes: i.default.object,
                        children: i.default.oneOfType([
                            i.default.arrayOf(i.default.node),
                            i.default.node
                        ]),
                        defaultTitle: i.default.string,
                        defer: i.default.bool,
                        encodeSpecialCharacters: i.default.bool,
                        htmlAttributes: i.default.object,
                        link: i.default.arrayOf(i.default.object),
                        meta: i.default.arrayOf(i.default.object),
                        noscript: i.default.arrayOf(i.default.object),
                        onChangeClientState: i.default.func,
                        script: i.default.arrayOf(i.default.object),
                        style: i.default.arrayOf(i.default.object),
                        title: i.default.string,
                        titleAttributes: i.default.object,
                        titleTemplate: i.default.string
                    }),
                    (m.defaultProps = {
                        defer: !0,
                        encodeSpecialCharacters: !0
                    }),
                    (m.peek = p.peek),
                    (m.rewind = function () {
                        var e = p.rewind()
                        return (
                            e ||
                                (e = (0, u.mapStateOnServer)({
                                    baseTag: [],
                                    bodyAttributes: {},
                                    encodeSpecialCharacters: !0,
                                    htmlAttributes: {},
                                    linkTags: [],
                                    metaTags: [],
                                    noscriptTags: [],
                                    scriptTags: [],
                                    styleTags: [],
                                    title: '',
                                    titleAttributes: {}
                                })),
                            e
                        )
                    }),
                    h)
            ;(y.renderStatic = y.rewind), (t.Helmet = y), (t.default = y)
        },
        bmMU: function (e, t, n) {
            'use strict'
            var r = Array.isArray,
                a = Object.keys,
                o = Object.prototype.hasOwnProperty,
                i = 'undefined' != typeof Element
            e.exports = function (e, t) {
                try {
                    return (function e(t, n) {
                        if (t === n) return !0
                        if (
                            t &&
                            n &&
                            'object' == typeof t &&
                            'object' == typeof n
                        ) {
                            var c,
                                l,
                                u,
                                s = r(t),
                                f = r(n)
                            if (s && f) {
                                if ((l = t.length) != n.length) return !1
                                for (c = l; 0 != c--; )
                                    if (!e(t[c], n[c])) return !1
                                return !0
                            }
                            if (s != f) return !1
                            var T = t instanceof Date,
                                E = n instanceof Date
                            if (T != E) return !1
                            if (T && E) return t.getTime() == n.getTime()
                            var d = t instanceof RegExp,
                                p = n instanceof RegExp
                            if (d != p) return !1
                            if (d && p) return t.toString() == n.toString()
                            var m = a(t)
                            if ((l = m.length) !== a(n).length) return !1
                            for (c = l; 0 != c--; )
                                if (!o.call(n, m[c])) return !1
                            if (
                                i &&
                                t instanceof Element &&
                                n instanceof Element
                            )
                                return t === n
                            for (c = l; 0 != c--; )
                                if (
                                    !(
                                        ('_owner' === (u = m[c]) &&
                                            t.$$typeof) ||
                                        e(t[u], n[u])
                                    )
                                )
                                    return !1
                            return !0
                        }
                        return t != t && n != n
                    })(e, t)
                } catch (n) {
                    if (
                        (n.message && n.message.match(/stack|recursion/i)) ||
                        -2146828260 === n.number
                    )
                        return (
                            console.warn(
                                'Warning: react-fast-compare does not handle circular references.',
                                n.name,
                                n.message
                            ),
                            !1
                        )
                    throw n
                }
            }
        },
        enfU: function (e, t, n) {},
        'hFT/': function (e, t) {
            t.__esModule = !0
            t.ATTRIBUTE_NAMES = {
                BODY: 'bodyAttributes',
                HTML: 'htmlAttributes',
                TITLE: 'titleAttributes'
            }
            var n = (t.TAG_NAMES = {
                    BASE: 'base',
                    BODY: 'body',
                    HEAD: 'head',
                    HTML: 'html',
                    LINK: 'link',
                    META: 'meta',
                    NOSCRIPT: 'noscript',
                    SCRIPT: 'script',
                    STYLE: 'style',
                    TITLE: 'title'
                }),
                r =
                    ((t.VALID_TAG_NAMES = Object.keys(n).map(function (e) {
                        return n[e]
                    })),
                    (t.TAG_PROPERTIES = {
                        CHARSET: 'charset',
                        CSS_TEXT: 'cssText',
                        HREF: 'href',
                        HTTPEQUIV: 'http-equiv',
                        INNER_HTML: 'innerHTML',
                        ITEM_PROP: 'itemprop',
                        NAME: 'name',
                        PROPERTY: 'property',
                        REL: 'rel',
                        SRC: 'src'
                    }),
                    (t.REACT_TAG_MAP = {
                        accesskey: 'accessKey',
                        charset: 'charSet',
                        class: 'className',
                        contenteditable: 'contentEditable',
                        contextmenu: 'contextMenu',
                        'http-equiv': 'httpEquiv',
                        itemprop: 'itemProp',
                        tabindex: 'tabIndex'
                    }))
            ;(t.HELMET_PROPS = {
                DEFAULT_TITLE: 'defaultTitle',
                DEFER: 'defer',
                ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
                ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
                TITLE_TEMPLATE: 'titleTemplate'
            }),
                (t.HTML_TAG_MAP = Object.keys(r).reduce(function (e, t) {
                    return (e[r[t]] = t), e
                }, {})),
                (t.SELF_CLOSING_TAGS = [n.NOSCRIPT, n.SCRIPT, n.STYLE]),
                (t.HELMET_ATTRIBUTE = 'data-react-helmet')
        },
        j0kf: function (e, t, n) {},
        krhX: function (e, t, n) {
            'use strict'
            var r = n('9Hrx'),
                a = n('q1tI'),
                o = n.n(a),
                i = (n('enfU'), n('ma3e')),
                c = (function (e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return (
                        Object(r.a)(t, e),
                        (t.prototype.render = function () {
                            return o.a.createElement(
                                'footer',
                                { className: 'footer' },
                                o.a.createElement('div', null),
                                o.a.createElement(
                                    'div',
                                    null,
                                    o.a.createElement(
                                        'a',
                                        {
                                            className: 'external-links',
                                            href: 'https://instagram.com/jean.arjean'
                                        },
                                        o.a.createElement(i.b, {
                                            className: 'icon-style'
                                        })
                                    ),
                                    o.a.createElement(
                                        'a',
                                        {
                                            className: 'external-links',
                                            href: 'https://github.com/rorscharg'
                                        },
                                        o.a.createElement(i.a, {
                                            className: 'icon-style'
                                        })
                                    ),
                                    o.a.createElement(
                                        'a',
                                        {
                                            className: 'external-links',
                                            href: 'https://twitter.com/rorscharg'
                                        },
                                        o.a.createElement(i.c, {
                                            className: 'icon-style'
                                        })
                                    )
                                ),
                                o.a.createElement('div', null)
                            )
                        }),
                        t
                    )
                })(a.Component)
            t.a = c
        },
        lKc3: function (e, t, n) {},
        v1p5: function (e, t, n) {
            ;(function (e) {
                ;(t.__esModule = !0),
                    (t.warn =
                        t.requestAnimationFrame =
                        t.reducePropsToState =
                        t.mapStateOnServer =
                        t.handleClientStateChange =
                        t.convertReactPropstoHtmlAttributes =
                            void 0)
                var r =
                        'function' == typeof Symbol &&
                        'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e
                              }
                            : function (e) {
                                  return e &&
                                      'function' == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e
                              },
                    a =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t]
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(
                                        n,
                                        r
                                    ) && (e[r] = n[r])
                            }
                            return e
                        },
                    o = l(n('q1tI')),
                    i = l(n('YVoz')),
                    c = n('hFT/')
                function l(e) {
                    return e && e.__esModule ? e : { default: e }
                }
                var u,
                    s = function (e) {
                        var t =
                            !(
                                arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1]
                        return !1 === t
                            ? String(e)
                            : String(e)
                                  .replace(/&/g, '&amp;')
                                  .replace(/</g, '&lt;')
                                  .replace(/>/g, '&gt;')
                                  .replace(/"/g, '&quot;')
                                  .replace(/'/g, '&#x27;')
                    },
                    f = function (e) {
                        var t = m(e, c.TAG_NAMES.TITLE),
                            n = m(e, c.HELMET_PROPS.TITLE_TEMPLATE)
                        if (n && t)
                            return n.replace(/%s/g, function () {
                                return t
                            })
                        var r = m(e, c.HELMET_PROPS.DEFAULT_TITLE)
                        return t || r || void 0
                    },
                    T = function (e) {
                        return (
                            m(e, c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) ||
                            function () {}
                        )
                    },
                    E = function (e, t) {
                        return t
                            .filter(function (t) {
                                return void 0 !== t[e]
                            })
                            .map(function (t) {
                                return t[e]
                            })
                            .reduce(function (e, t) {
                                return a({}, e, t)
                            }, {})
                    },
                    d = function (e, t) {
                        return t
                            .filter(function (e) {
                                return void 0 !== e[c.TAG_NAMES.BASE]
                            })
                            .map(function (e) {
                                return e[c.TAG_NAMES.BASE]
                            })
                            .reverse()
                            .reduce(function (t, n) {
                                if (!t.length)
                                    for (
                                        var r = Object.keys(n), a = 0;
                                        a < r.length;
                                        a++
                                    ) {
                                        var o = r[a].toLowerCase()
                                        if (-1 !== e.indexOf(o) && n[o])
                                            return t.concat(n)
                                    }
                                return t
                            }, [])
                    },
                    p = function (e, t, n) {
                        var a = {}
                        return n
                            .filter(function (t) {
                                return (
                                    !!Array.isArray(t[e]) ||
                                    (void 0 !== t[e] &&
                                        S(
                                            'Helmet: ' +
                                                e +
                                                ' should be of type "Array". Instead found type "' +
                                                r(t[e]) +
                                                '"'
                                        ),
                                    !1)
                                )
                            })
                            .map(function (t) {
                                return t[e]
                            })
                            .reverse()
                            .reduce(function (e, n) {
                                var r = {}
                                n.filter(function (e) {
                                    for (
                                        var n = void 0,
                                            o = Object.keys(e),
                                            i = 0;
                                        i < o.length;
                                        i++
                                    ) {
                                        var l = o[i],
                                            u = l.toLowerCase()
                                        ;-1 === t.indexOf(u) ||
                                            (n === c.TAG_PROPERTIES.REL &&
                                                'canonical' ===
                                                    e[n].toLowerCase()) ||
                                            (u === c.TAG_PROPERTIES.REL &&
                                                'stylesheet' ===
                                                    e[u].toLowerCase()) ||
                                            (n = u),
                                            -1 === t.indexOf(l) ||
                                                (l !==
                                                    c.TAG_PROPERTIES
                                                        .INNER_HTML &&
                                                    l !==
                                                        c.TAG_PROPERTIES
                                                            .CSS_TEXT &&
                                                    l !==
                                                        c.TAG_PROPERTIES
                                                            .ITEM_PROP) ||
                                                (n = l)
                                    }
                                    if (!n || !e[n]) return !1
                                    var s = e[n].toLowerCase()
                                    return (
                                        a[n] || (a[n] = {}),
                                        r[n] || (r[n] = {}),
                                        !a[n][s] && ((r[n][s] = !0), !0)
                                    )
                                })
                                    .reverse()
                                    .forEach(function (t) {
                                        return e.push(t)
                                    })
                                for (
                                    var o = Object.keys(r), l = 0;
                                    l < o.length;
                                    l++
                                ) {
                                    var u = o[l],
                                        s = (0, i.default)({}, a[u], r[u])
                                    a[u] = s
                                }
                                return e
                            }, [])
                            .reverse()
                    },
                    m = function (e, t) {
                        for (var n = e.length - 1; n >= 0; n--) {
                            var r = e[n]
                            if (r.hasOwnProperty(t)) return r[t]
                        }
                        return null
                    },
                    h =
                        ((u = Date.now()),
                        function (e) {
                            var t = Date.now()
                            t - u > 16
                                ? ((u = t), e(t))
                                : setTimeout(function () {
                                      h(e)
                                  }, 0)
                        }),
                    A = function (e) {
                        return clearTimeout(e)
                    },
                    y =
                        'undefined' != typeof window
                            ? window.requestAnimationFrame ||
                              window.webkitRequestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              h
                            : e.requestAnimationFrame || h,
                    v =
                        'undefined' != typeof window
                            ? window.cancelAnimationFrame ||
                              window.webkitCancelAnimationFrame ||
                              window.mozCancelAnimationFrame ||
                              A
                            : e.cancelAnimationFrame || A,
                    S = function (e) {
                        return (
                            console &&
                            'function' == typeof console.warn &&
                            console.warn(e)
                        )
                    },
                    b = null,
                    _ = function (e, t) {
                        var n = e.baseTag,
                            r = e.bodyAttributes,
                            a = e.htmlAttributes,
                            o = e.linkTags,
                            i = e.metaTags,
                            l = e.noscriptTags,
                            u = e.onChangeClientState,
                            s = e.scriptTags,
                            f = e.styleTags,
                            T = e.title,
                            E = e.titleAttributes
                        w(c.TAG_NAMES.BODY, r), w(c.TAG_NAMES.HTML, a), g(T, E)
                        var d = {
                                baseTag: R(c.TAG_NAMES.BASE, n),
                                linkTags: R(c.TAG_NAMES.LINK, o),
                                metaTags: R(c.TAG_NAMES.META, i),
                                noscriptTags: R(c.TAG_NAMES.NOSCRIPT, l),
                                scriptTags: R(c.TAG_NAMES.SCRIPT, s),
                                styleTags: R(c.TAG_NAMES.STYLE, f)
                            },
                            p = {},
                            m = {}
                        Object.keys(d).forEach(function (e) {
                            var t = d[e],
                                n = t.newTags,
                                r = t.oldTags
                            n.length && (p[e] = n),
                                r.length && (m[e] = d[e].oldTags)
                        }),
                            t && t(),
                            u(e, p, m)
                    },
                    O = function (e) {
                        return Array.isArray(e) ? e.join('') : e
                    },
                    g = function (e, t) {
                        void 0 !== e &&
                            document.title !== e &&
                            (document.title = O(e)),
                            w(c.TAG_NAMES.TITLE, t)
                    },
                    w = function (e, t) {
                        var n = document.getElementsByTagName(e)[0]
                        if (n) {
                            for (
                                var r = n.getAttribute(c.HELMET_ATTRIBUTE),
                                    a = r ? r.split(',') : [],
                                    o = [].concat(a),
                                    i = Object.keys(t),
                                    l = 0;
                                l < i.length;
                                l++
                            ) {
                                var u = i[l],
                                    s = t[u] || ''
                                n.getAttribute(u) !== s && n.setAttribute(u, s),
                                    -1 === a.indexOf(u) && a.push(u)
                                var f = o.indexOf(u)
                                ;-1 !== f && o.splice(f, 1)
                            }
                            for (var T = o.length - 1; T >= 0; T--)
                                n.removeAttribute(o[T])
                            a.length === o.length
                                ? n.removeAttribute(c.HELMET_ATTRIBUTE)
                                : n.getAttribute(c.HELMET_ATTRIBUTE) !==
                                      i.join(',') &&
                                  n.setAttribute(
                                      c.HELMET_ATTRIBUTE,
                                      i.join(',')
                                  )
                        }
                    },
                    R = function (e, t) {
                        var n =
                                document.head ||
                                document.querySelector(c.TAG_NAMES.HEAD),
                            r = n.querySelectorAll(
                                e + '[' + c.HELMET_ATTRIBUTE + ']'
                            ),
                            a = Array.prototype.slice.call(r),
                            o = [],
                            i = void 0
                        return (
                            t &&
                                t.length &&
                                t.forEach(function (t) {
                                    var n = document.createElement(e)
                                    for (var r in t)
                                        if (t.hasOwnProperty(r))
                                            if (
                                                r ===
                                                c.TAG_PROPERTIES.INNER_HTML
                                            )
                                                n.innerHTML = t.innerHTML
                                            else if (
                                                r === c.TAG_PROPERTIES.CSS_TEXT
                                            )
                                                n.styleSheet
                                                    ? (n.styleSheet.cssText =
                                                          t.cssText)
                                                    : n.appendChild(
                                                          document.createTextNode(
                                                              t.cssText
                                                          )
                                                      )
                                            else {
                                                var l =
                                                    void 0 === t[r] ? '' : t[r]
                                                n.setAttribute(r, l)
                                            }
                                    n.setAttribute(c.HELMET_ATTRIBUTE, 'true'),
                                        a.some(function (e, t) {
                                            return (i = t), n.isEqualNode(e)
                                        })
                                            ? a.splice(i, 1)
                                            : o.push(n)
                                }),
                            a.forEach(function (e) {
                                return e.parentNode.removeChild(e)
                            }),
                            o.forEach(function (e) {
                                return n.appendChild(e)
                            }),
                            { oldTags: a, newTags: o }
                        )
                    },
                    P = function (e) {
                        return Object.keys(e).reduce(function (t, n) {
                            var r =
                                void 0 !== e[n] ? n + '="' + e[n] + '"' : '' + n
                            return t ? t + ' ' + r : r
                        }, '')
                    },
                    M = function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                        return Object.keys(e).reduce(function (t, n) {
                            return (t[c.REACT_TAG_MAP[n] || n] = e[n]), t
                        }, t)
                    },
                    N = function (e, t, n) {
                        switch (e) {
                            case c.TAG_NAMES.TITLE:
                                return {
                                    toComponent: function () {
                                        return (
                                            (e = t.title),
                                            (n = t.titleAttributes),
                                            ((r = { key: e })[
                                                c.HELMET_ATTRIBUTE
                                            ] = !0),
                                            (a = M(n, r)),
                                            [
                                                o.default.createElement(
                                                    c.TAG_NAMES.TITLE,
                                                    a,
                                                    e
                                                )
                                            ]
                                        )
                                        var e, n, r, a
                                    },
                                    toString: function () {
                                        return (function (e, t, n, r) {
                                            var a = P(n),
                                                o = O(t)
                                            return a
                                                ? '<' +
                                                      e +
                                                      ' ' +
                                                      c.HELMET_ATTRIBUTE +
                                                      '="true" ' +
                                                      a +
                                                      '>' +
                                                      s(o, r) +
                                                      '</' +
                                                      e +
                                                      '>'
                                                : '<' +
                                                      e +
                                                      ' ' +
                                                      c.HELMET_ATTRIBUTE +
                                                      '="true">' +
                                                      s(o, r) +
                                                      '</' +
                                                      e +
                                                      '>'
                                        })(e, t.title, t.titleAttributes, n)
                                    }
                                }
                            case c.ATTRIBUTE_NAMES.BODY:
                            case c.ATTRIBUTE_NAMES.HTML:
                                return {
                                    toComponent: function () {
                                        return M(t)
                                    },
                                    toString: function () {
                                        return P(t)
                                    }
                                }
                            default:
                                return {
                                    toComponent: function () {
                                        return (function (e, t) {
                                            return t.map(function (t, n) {
                                                var r,
                                                    a =
                                                        (((r = { key: n })[
                                                            c.HELMET_ATTRIBUTE
                                                        ] = !0),
                                                        r)
                                                return (
                                                    Object.keys(t).forEach(
                                                        function (e) {
                                                            var n =
                                                                c.REACT_TAG_MAP[
                                                                    e
                                                                ] || e
                                                            if (
                                                                n ===
                                                                    c
                                                                        .TAG_PROPERTIES
                                                                        .INNER_HTML ||
                                                                n ===
                                                                    c
                                                                        .TAG_PROPERTIES
                                                                        .CSS_TEXT
                                                            ) {
                                                                var r =
                                                                    t.innerHTML ||
                                                                    t.cssText
                                                                a.dangerouslySetInnerHTML =
                                                                    {
                                                                        __html: r
                                                                    }
                                                            } else a[n] = t[e]
                                                        }
                                                    ),
                                                    o.default.createElement(
                                                        e,
                                                        a
                                                    )
                                                )
                                            })
                                        })(e, t)
                                    },
                                    toString: function () {
                                        return (function (e, t, n) {
                                            return t.reduce(function (t, r) {
                                                var a = Object.keys(r)
                                                        .filter(function (e) {
                                                            return !(
                                                                e ===
                                                                    c
                                                                        .TAG_PROPERTIES
                                                                        .INNER_HTML ||
                                                                e ===
                                                                    c
                                                                        .TAG_PROPERTIES
                                                                        .CSS_TEXT
                                                            )
                                                        })
                                                        .reduce(function (
                                                            e,
                                                            t
                                                        ) {
                                                            var a =
                                                                void 0 === r[t]
                                                                    ? t
                                                                    : t +
                                                                      '="' +
                                                                      s(
                                                                          r[t],
                                                                          n
                                                                      ) +
                                                                      '"'
                                                            return e
                                                                ? e + ' ' + a
                                                                : a
                                                        },
                                                        ''),
                                                    o =
                                                        r.innerHTML ||
                                                        r.cssText ||
                                                        '',
                                                    i =
                                                        -1 ===
                                                        c.SELF_CLOSING_TAGS.indexOf(
                                                            e
                                                        )
                                                return (
                                                    t +
                                                    '<' +
                                                    e +
                                                    ' ' +
                                                    c.HELMET_ATTRIBUTE +
                                                    '="true" ' +
                                                    a +
                                                    (i
                                                        ? '/>'
                                                        : '>' +
                                                          o +
                                                          '</' +
                                                          e +
                                                          '>')
                                                )
                                            }, '')
                                        })(e, t, n)
                                    }
                                }
                        }
                    }
                ;(t.convertReactPropstoHtmlAttributes = function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {}
                    return Object.keys(e).reduce(function (t, n) {
                        return (t[c.HTML_TAG_MAP[n] || n] = e[n]), t
                    }, t)
                }),
                    (t.handleClientStateChange = function (e) {
                        b && v(b),
                            e.defer
                                ? (b = y(function () {
                                      _(e, function () {
                                          b = null
                                      })
                                  }))
                                : (_(e), (b = null))
                    }),
                    (t.mapStateOnServer = function (e) {
                        var t = e.baseTag,
                            n = e.bodyAttributes,
                            r = e.encode,
                            a = e.htmlAttributes,
                            o = e.linkTags,
                            i = e.metaTags,
                            l = e.noscriptTags,
                            u = e.scriptTags,
                            s = e.styleTags,
                            f = e.title,
                            T = void 0 === f ? '' : f,
                            E = e.titleAttributes
                        return {
                            base: N(c.TAG_NAMES.BASE, t, r),
                            bodyAttributes: N(c.ATTRIBUTE_NAMES.BODY, n, r),
                            htmlAttributes: N(c.ATTRIBUTE_NAMES.HTML, a, r),
                            link: N(c.TAG_NAMES.LINK, o, r),
                            meta: N(c.TAG_NAMES.META, i, r),
                            noscript: N(c.TAG_NAMES.NOSCRIPT, l, r),
                            script: N(c.TAG_NAMES.SCRIPT, u, r),
                            style: N(c.TAG_NAMES.STYLE, s, r),
                            title: N(
                                c.TAG_NAMES.TITLE,
                                { title: T, titleAttributes: E },
                                r
                            )
                        }
                    }),
                    (t.reducePropsToState = function (e) {
                        return {
                            baseTag: d([c.TAG_PROPERTIES.HREF], e),
                            bodyAttributes: E(c.ATTRIBUTE_NAMES.BODY, e),
                            defer: m(e, c.HELMET_PROPS.DEFER),
                            encode: m(
                                e,
                                c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS
                            ),
                            htmlAttributes: E(c.ATTRIBUTE_NAMES.HTML, e),
                            linkTags: p(
                                c.TAG_NAMES.LINK,
                                [c.TAG_PROPERTIES.REL, c.TAG_PROPERTIES.HREF],
                                e
                            ),
                            metaTags: p(
                                c.TAG_NAMES.META,
                                [
                                    c.TAG_PROPERTIES.NAME,
                                    c.TAG_PROPERTIES.CHARSET,
                                    c.TAG_PROPERTIES.HTTPEQUIV,
                                    c.TAG_PROPERTIES.PROPERTY,
                                    c.TAG_PROPERTIES.ITEM_PROP
                                ],
                                e
                            ),
                            noscriptTags: p(
                                c.TAG_NAMES.NOSCRIPT,
                                [c.TAG_PROPERTIES.INNER_HTML],
                                e
                            ),
                            onChangeClientState: T(e),
                            scriptTags: p(
                                c.TAG_NAMES.SCRIPT,
                                [
                                    c.TAG_PROPERTIES.SRC,
                                    c.TAG_PROPERTIES.INNER_HTML
                                ],
                                e
                            ),
                            styleTags: p(
                                c.TAG_NAMES.STYLE,
                                [c.TAG_PROPERTIES.CSS_TEXT],
                                e
                            ),
                            title: f(e),
                            titleAttributes: E(c.ATTRIBUTE_NAMES.TITLE, e)
                        }
                    }),
                    (t.requestAnimationFrame = y),
                    (t.warn = S)
            }.call(this, n('yLpj')))
        }
    }
])
//# sourceMappingURL=1fffeb21ff3103e653e2fb8a4ea4bb4320c1af7b-86ac774c9d5360903ba3.js.map
