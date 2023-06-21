(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        160: function (t, e, r) {
            t.exports = r(308)
        },
        165: function (t, e, r) { },
        187: function (t, e, r) { },
        192: function (t, e) { },
        194: function (t, e) { },
        208: function (t, e) { },
        210: function (t, e) { },
        238: function (t, e) { },
        240: function (t, e) { },
        241: function (t, e) { },
        246: function (t, e) { },
        248: function (t, e) { },
        254: function (t, e) { },
        256: function (t, e) { },
        275: function (t, e) { },
        287: function (t, e) { },
        290: function (t, e) { },
        308: function (t, e, r) {
            "use strict";
            r.r(e);
            var n = r(2),
                o = r.n(n),
                a = r(22),
                i = r.n(a),
                c = (r(165), r(158)),
                u = r(7),
                l = r(6),
                s = r(11),
                f = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = localStorage.getItem(t) || e,
                        o = Object(n.useState)(r),
                        a = Object(l.a)(o, 2),
                        i = a[0],
                        c = a[1];
                    return Object(n.useEffect)(function () {
                        console.debug("hooks useLocalStorage useEffect", "item=", i), null === i ? localStorage.removeItem(t) : localStorage.setItem(t, i)
                    }, [t, i]), [i, c]
                },
                h = o.a.createContext(),
                p = r(13),
                m = function (t) {
                    var e = t.logout,
                        r = Object(n.useContext)(h).currentUser;
                    console.debug("Navigation", "currentUser=", r);
                    return o.a.createElement(p.f, {
                        className: "Navigation navbar-expand-lg",
                        color: "secondary",
                        dark: !0
                    }, o.a.createElement(p.g, {
                        href: "/"
                    }, "Jobly"), r ? o.a.createElement(p.d, {
                        className: "ml-auto",
                        navbar: !0
                    }, o.a.createElement(p.e, null, o.a.createElement(s.c, {
                        className: "nav-link",
                        to: "/companies"
                    }, "Companies")), o.a.createElement(p.e, null, o.a.createElement(s.c, {
                        className: "nav-link",
                        to: "/jobs"
                    }, "Jobs")), o.a.createElement(p.e, null, o.a.createElement(s.c, {
                        className: "nav-link",
                        to: "/profile"
                    }, "Profile")), o.a.createElement(p.e, null, o.a.createElement(s.b, {
                        className: "nav-link",
                        to: "/",
                        onClick: e
                    }, "Log out ", r.first_name || r.username))) : o.a.createElement(p.d, {
                        className: "ml-auto",
                        navbar: !0
                    }, o.a.createElement(p.e, null, o.a.createElement(s.c, {
                        className: "nav-link",
                        to: "/login"
                    }, "Login")), o.a.createElement(p.e, null, o.a.createElement(s.c, {
                        className: "nav-link",
                        to: "/signup"
                    }, "Sign Up"))))
                },
                v = r(0),
                d = function () {
                    var t = Object(n.useContext)(h).currentUser;
                    return console.debug("Homepage", "currentUser=", t), o.a.createElement("div", {
                        className: "Homepage"
                    }, o.a.createElement("div", {
                        className: "container text-center"
                    }, o.a.createElement("h1", {
                        className: "mb-4 font-weight-bold"
                    }, "Jobly"), o.a.createElement("p", {
                        className: "lead"
                    }, "Jobly helps people get their dream jobs."), t ? o.a.createElement("h2", null, "Welcome Back, ", t.firstName || t.username, "!") : o.a.createElement("p", null, o.a.createElement(s.b, {
                        className: "btn btn-primary font-weight-bold mr-3",
                        to: "/login"
                    }, "Log in"), o.a.createElement(s.b, {
                        className: "btn btn-primary font-weight-bold",
                        to: "/signup"
                    }, "Sign up"))))
                },
                y = function (t) {
                    var e = t.searchFor;
                    console.debug("SearchForm", "searchFor=", typeof e);
                    var r = Object(n.useState)(""),
                        a = Object(l.a)(r, 2),
                        i = a[0],
                        c = a[1];
                    return o.a.createElement("div", {
                        className: "mb-4"
                    }, o.a.createElement("form", {
                        className: "form-inline",
                        onSubmit: function (t) {
                            t.preventDefault(), e(i.trim() || void 0), c(i.trim())
                        }
                    }, o.a.createElement("input", {
                        className: "form-control form-control-lg flex-grow-1",
                        name: "searchTerm",
                        placeholder: "Enter search term..",
                        value: i,
                        onChange: function (t) {
                            c(t.target.value)
                        }
                    }), o.a.createElement("button", {
                        type: "submit",
                        className: "btn btn-lg btn-primary"
                    }, "Submit")))
                },
                g = r(152),
                w = function (t) {
                    var e = t.name,
                        r = t.description,
                        n = t.logoUrl,
                        a = t.handle;
                    return o.a.createElement(g.Link, {
                        to: "/companies/".concat(a)
                    }, o.a.createElement(p.a, null, o.a.createElement(p.c, null, e, n && o.a.createElement("img", {
                        src: n,
                        alt: e,
                        className: "float-right ml-5"
                    })), o.a.createElement(p.b, null, r)))
                },
                b = r(153),
                E = r(154),
                x = r(155),
                L = r.n(x);

            function j() {
                j = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (_) {
                    c = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        a = Object.create(o.prototype),
                        i = new L(n || []);
                    return a._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return N()
                            }
                            for (r.method = o, r.arg = a; ;) {
                                var i = r.delegate;
                                if (i) {
                                    var c = b(i, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (_) {
                        return {
                            type: "throw",
                            arg: _
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function f() { }

                function h() { }

                function p() { }
                var m = {};
                c(m, o, function () {
                    return this
                });
                var v = Object.getPrototypeOf,
                    d = v && v(v(O([])));
                d && d !== e && r.call(d, o) && (m = d);
                var y = p.prototype = f.prototype = Object.create(m);

                function g(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        c(t, e, function (t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function w(t, e) {
                    var n;
                    this._invoke = function (o, a) {
                        function i() {
                            return new e(function (n, i) {
                                ! function n(o, a, i, c) {
                                    var u = l(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            f = s.value;
                                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                                            n("next", t, i, c)
                                        }, function (t) {
                                            n("throw", t, i, c)
                                        }) : e.resolve(f).then(function (t) {
                                            s.value = t, i(s)
                                        }, function (t) {
                                            return n("throw", t, i, c)
                                        })
                                    }
                                    c(u.arg)
                                }(o, a, n, i)
                            })
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function O(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: N
                    }
                }

                function N() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, c(y, "constructor", p), c(p, "constructor", h), h.displayName = c(p, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, i, "GeneratorFunction")), t.prototype = Object.create(y), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, a, function () {
                    return this
                }), t.AsyncIterator = w, t.async = function (e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(u(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then(function (t) {
                        return t.done ? t.value : i.next()
                    })
                }, g(y), c(y, i, "Generator"), c(y, o, function () {
                    return this
                }), c(y, "toString", function () {
                    return "[object Generator]"
                }), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = O, L.prototype = {
                    constructor: L,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, s) : this.complete(i)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), s
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }
            var O = function () {
                function t() {
                    Object(b.a)(this, t)
                }
                return Object(E.a)(t, null, [{
                    key: "request",
                    value: function () {
                        var e = Object(u.a)(j().mark(function e(r) {
                            var n, o, a, i, c, u, l = arguments;
                            return j().wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = l.length > 1 && void 0 !== l[1] ? l[1] : {}, o = l.length > 2 && void 0 !== l[2] ? l[2] : "get", console.debug("API Call:", r, n, o), a = "".concat("https://react-jobly-backend-1981.herokuapp.com", "/").concat(r), i = {
                                            Authorization: "Bearer ".concat(t.token)
                                        }, c = "get" === o ? n : {}, e.prev = 6, e.next = 9, L()({
                                            url: a,
                                            method: o,
                                            data: n,
                                            params: c,
                                            headers: i
                                        });
                                    case 9:
                                        return e.abrupt("return", e.sent.data);
                                    case 12:
                                        throw e.prev = 12, e.t0 = e.catch(6), console.error("API Error:", e.t0.response), u = e.t0.response.data.error.message, Array.isArray(u) ? u : [u];
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [6, 12]
                            ])
                        }));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "login",
                    value: function () {
                        var t = Object(u.a)(j().mark(function t(e) {
                            var r;
                            return j().wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.request("auth/token", e, "post");
                                    case 2:
                                        return r = t.sent, t.abrupt("return", r.token);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "signup",
                    value: function () {
                        var t = Object(u.a)(j().mark(function t(e) {
                            var r;
                            return j().wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.request("auth/register", e, "post");
                                    case 2:
                                        return r = t.sent, t.abrupt("return", r.token);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "saveProfile",
                    value: function () {
                        var t = Object(u.a)(j().mark(function t(e, r) {
                            var n;
                            return j().wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.request("users/".concat(e), r, "patch");
                                    case 2:
                                        return n = t.sent, t.abrupt("return", n.user);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function (e, r) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getCurrentUser",
                    value: function () {
                        var t = Object(u.a)(j().mark(function t(e) {
                            var r;
                            return j().wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.request("users/".concat(e));
                                    case 2:
                                        return r = t.sent, t.abrupt("return", r.user);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getCompany",
                    value: function () {
                        var t = Object(u.a)(j().mark(function t(e) {
                            var r;
                            return j().wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.request("companies/".concat(e));
                                    case 2:
                                        return r = t.sent, t.abrupt("return", r.company);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getCompanies",
                    value: function () {
                        var t = Object(u.a)(j().mark(function t(e) {
                            var r;
                            return j().wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.request("companies", {
                                            name: e
                                        });
                                    case 2:
                                        return r = t.sent, t.abrupt("return", r.companies);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getJobs",
                    value: function () {
                        var t = Object(u.a)(j().mark(function t(e) {
                            var r;
                            return j().wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.request("jobs", {
                                            title: e
                                        });
                                    case 2:
                                        return r = t.sent, t.abrupt("return", r.jobs);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "applyToJob",
                    value: function () {
                        var t = Object(u.a)(j().mark(function t(e, r) {
                            return j().wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.request("users/".concat(e, "/jobs/").concat(r), {}, "post");
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function (e, r) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]), t
            }(),
                N = r(156),
                _ = r(159),
                k = function () {
                    return o.a.createElement(_.a, {
                        icon: N.faSpinner
                    })
                };

            function S() {
                S = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (N) {
                    c = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        a = Object.create(o.prototype),
                        i = new L(n || []);
                    return a._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return O()
                            }
                            for (r.method = o, r.arg = a; ;) {
                                var i = r.delegate;
                                if (i) {
                                    var c = b(i, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (N) {
                        return {
                            type: "throw",
                            arg: N
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function f() { }

                function h() { }

                function p() { }
                var m = {};
                c(m, o, function () {
                    return this
                });
                var v = Object.getPrototypeOf,
                    d = v && v(v(j([])));
                d && d !== e && r.call(d, o) && (m = d);
                var y = p.prototype = f.prototype = Object.create(m);

                function g(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        c(t, e, function (t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function w(t, e) {
                    var n;
                    this._invoke = function (o, a) {
                        function i() {
                            return new e(function (n, i) {
                                ! function n(o, a, i, c) {
                                    var u = l(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            f = s.value;
                                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                                            n("next", t, i, c)
                                        }, function (t) {
                                            n("throw", t, i, c)
                                        }) : e.resolve(f).then(function (t) {
                                            s.value = t, i(s)
                                        }, function (t) {
                                            return n("throw", t, i, c)
                                        })
                                    }
                                    c(u.arg)
                                }(o, a, n, i)
                            })
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, c(y, "constructor", p), c(p, "constructor", h), h.displayName = c(p, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, i, "GeneratorFunction")), t.prototype = Object.create(y), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, a, function () {
                    return this
                }), t.AsyncIterator = w, t.async = function (e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(u(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then(function (t) {
                        return t.done ? t.value : i.next()
                    })
                }, g(y), c(y, i, "Generator"), c(y, o, function () {
                    return this
                }), c(y, "toString", function () {
                    return "[object Generator]"
                }), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, L.prototype = {
                    constructor: L,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, s) : this.complete(i)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), s
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }
            var G = function () {
                console.debug("CompanyList");
                var t = Object(n.useState)(null),
                    e = Object(l.a)(t, 2),
                    r = e[0],
                    a = e[1];

                function i(t) {
                    return c.apply(this, arguments)
                }

                function c() {
                    return (c = Object(u.a)(S().mark(function t(e) {
                        var r;
                        return S().wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, O.getCompanies(e);
                                case 2:
                                    r = t.sent, a(r);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }))).apply(this, arguments)
                }
                return Object(n.useEffect)(function () {
                    console.debug("CompanyList useEffect"), i()
                }, []), r ? o.a.createElement("div", {
                    className: "CompanyList col-md-8 offset-md-2"
                }, o.a.createElement(y, {
                    searchFor: i
                }), r.length ? o.a.createElement("div", {
                    className: "CompanyList-list"
                }, r.map(function (t) {
                    return o.a.createElement(w, {
                        key: t.handle,
                        handle: t.handle,
                        name: t.name,
                        description: t.description,
                        logoUrl: t.logoUrl
                    })
                })) : o.a.createElement("p", {
                    className: "lead"
                }, "Results were not found!")) : o.a.createElement(k, null)
            };
            r(187);

            function P() {
                P = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (N) {
                    c = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        a = Object.create(o.prototype),
                        i = new L(n || []);
                    return a._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return O()
                            }
                            for (r.method = o, r.arg = a; ;) {
                                var i = r.delegate;
                                if (i) {
                                    var c = b(i, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (N) {
                        return {
                            type: "throw",
                            arg: N
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function f() { }

                function h() { }

                function p() { }
                var m = {};
                c(m, o, function () {
                    return this
                });
                var v = Object.getPrototypeOf,
                    d = v && v(v(j([])));
                d && d !== e && r.call(d, o) && (m = d);
                var y = p.prototype = f.prototype = Object.create(m);

                function g(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        c(t, e, function (t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function w(t, e) {
                    var n;
                    this._invoke = function (o, a) {
                        function i() {
                            return new e(function (n, i) {
                                ! function n(o, a, i, c) {
                                    var u = l(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            f = s.value;
                                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                                            n("next", t, i, c)
                                        }, function (t) {
                                            n("throw", t, i, c)
                                        }) : e.resolve(f).then(function (t) {
                                            s.value = t, i(s)
                                        }, function (t) {
                                            return n("throw", t, i, c)
                                        })
                                    }
                                    c(u.arg)
                                }(o, a, n, i)
                            })
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, c(y, "constructor", p), c(p, "constructor", h), h.displayName = c(p, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, i, "GeneratorFunction")), t.prototype = Object.create(y), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, a, function () {
                    return this
                }), t.AsyncIterator = w, t.async = function (e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(u(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then(function (t) {
                        return t.done ? t.value : i.next()
                    })
                }, g(y), c(y, i, "Generator"), c(y, o, function () {
                    return this
                }), c(y, "toString", function () {
                    return "[object Generator]"
                }), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, L.prototype = {
                    constructor: L,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, s) : this.complete(i)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), s
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }
            var F = function (t) {
                var e = t.id,
                    r = t.title,
                    a = t.salary,
                    i = t.equity,
                    c = t.companyName;
                console.debug("JobCard");
                var s = Object(n.useContext)(h),
                    f = s.hasAppliedToJob,
                    p = s.applyToJob,
                    m = Object(n.useState)(),
                    v = Object(l.a)(m, 2),
                    d = v[0],
                    y = v[1];

                function g() {
                    return (g = Object(u.a)(P().mark(function t(r) {
                        return P().wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!f(e)) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    p(e), y(!0);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }))).apply(this, arguments)
                }
                return Object(n.useEffect)(function () {
                    console.debug("JobCard useEffect updateAppliedStatus", "id=", e), y(f(e))
                }, [e, f]), o.a.createElement("div", {
                    className: "JobCard card"
                }, " ", d, o.a.createElement("div", {
                    className: "card-body"
                }, o.a.createElement("h6", {
                    className: "card-title"
                }, r), o.a.createElement("p", null, c), a && o.a.createElement("div", null, o.a.createElement("small", null, "Salary: ", function (t) {
                    for (var e = [], r = t.toString(), n = r.length - 1; n >= 0; n--) e.push(r[n]), n > 0 && n % 3 === 0 && e.push(",");
                    return e.reverse().join("")
                }(a))), void 0 !== i && o.a.createElement("div", null, o.a.createElement("small", null, "Equity: ", i)), o.a.createElement("button", {
                    className: "btn btn-danger font-weight-bold text-uppercase float-right",
                    onClick: function (t) {
                        return g.apply(this, arguments)
                    },
                    disabled: d
                }, d ? "Applied" : "Apply")))
            },
                T = function (t) {
                    var e = t.jobs;
                    t.apply;
                    return console.debug("JobCardList", "jobs=", e), o.a.createElement("div", {
                        className: "JobCardList"
                    }, e.map(function (t) {
                        return o.a.createElement(F, {
                            key: t.id,
                            id: t.id,
                            title: t.title,
                            salary: t.salary,
                            equity: t.equity,
                            companyName: t.companyName
                        })
                    }))
                };

            function C() {
                C = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (N) {
                    c = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        a = Object.create(o.prototype),
                        i = new L(n || []);
                    return a._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return O()
                            }
                            for (r.method = o, r.arg = a; ;) {
                                var i = r.delegate;
                                if (i) {
                                    var c = b(i, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (N) {
                        return {
                            type: "throw",
                            arg: N
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function f() { }

                function h() { }

                function p() { }
                var m = {};
                c(m, o, function () {
                    return this
                });
                var v = Object.getPrototypeOf,
                    d = v && v(v(j([])));
                d && d !== e && r.call(d, o) && (m = d);
                var y = p.prototype = f.prototype = Object.create(m);

                function g(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        c(t, e, function (t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function w(t, e) {
                    var n;
                    this._invoke = function (o, a) {
                        function i() {
                            return new e(function (n, i) {
                                ! function n(o, a, i, c) {
                                    var u = l(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            f = s.value;
                                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                                            n("next", t, i, c)
                                        }, function (t) {
                                            n("throw", t, i, c)
                                        }) : e.resolve(f).then(function (t) {
                                            s.value = t, i(s)
                                        }, function (t) {
                                            return n("throw", t, i, c)
                                        })
                                    }
                                    c(u.arg)
                                }(o, a, n, i)
                            })
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, c(y, "constructor", p), c(p, "constructor", h), h.displayName = c(p, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, i, "GeneratorFunction")), t.prototype = Object.create(y), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, a, function () {
                    return this
                }), t.AsyncIterator = w, t.async = function (e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(u(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then(function (t) {
                        return t.done ? t.value : i.next()
                    })
                }, g(y), c(y, i, "Generator"), c(y, o, function () {
                    return this
                }), c(y, "toString", function () {
                    return "[object Generator]"
                }), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, L.prototype = {
                    constructor: L,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, s) : this.complete(i)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), s
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }
            var I = function () {
                console.debug("JobList");
                var t = Object(n.useState)(null),
                    e = Object(l.a)(t, 2),
                    r = e[0],
                    a = e[1];

                function i(t) {
                    return c.apply(this, arguments)
                }

                function c() {
                    return (c = Object(u.a)(C().mark(function t(e) {
                        var r;
                        return C().wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, O.getJobs(e);
                                case 2:
                                    r = t.sent, a(r);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }))).apply(this, arguments)
                }
                return Object(n.useEffect)(function () {
                    console.debug("JobList useEffect"), i()
                }, []), r ? o.a.createElement("div", {
                    className: "JobList col-md-8 offset-md-2"
                }, o.a.createElement(y, {
                    searchFor: i
                }), r.length ? o.a.createElement(T, {
                    jobs: r
                }) : o.a.createElement("p", {
                    className: "lead"
                }, "Sorry, no results were found!")) : o.a.createElement(k, null)
            };

            function A() {
                A = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (N) {
                    c = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        a = Object.create(o.prototype),
                        i = new L(n || []);
                    return a._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return O()
                            }
                            for (r.method = o, r.arg = a; ;) {
                                var i = r.delegate;
                                if (i) {
                                    var c = b(i, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (N) {
                        return {
                            type: "throw",
                            arg: N
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function f() { }

                function h() { }

                function p() { }
                var m = {};
                c(m, o, function () {
                    return this
                });
                var v = Object.getPrototypeOf,
                    d = v && v(v(j([])));
                d && d !== e && r.call(d, o) && (m = d);
                var y = p.prototype = f.prototype = Object.create(m);

                function g(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        c(t, e, function (t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function w(t, e) {
                    var n;
                    this._invoke = function (o, a) {
                        function i() {
                            return new e(function (n, i) {
                                ! function n(o, a, i, c) {
                                    var u = l(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            f = s.value;
                                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                                            n("next", t, i, c)
                                        }, function (t) {
                                            n("throw", t, i, c)
                                        }) : e.resolve(f).then(function (t) {
                                            s.value = t, i(s)
                                        }, function (t) {
                                            return n("throw", t, i, c)
                                        })
                                    }
                                    c(u.arg)
                                }(o, a, n, i)
                            })
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, c(y, "constructor", p), c(p, "constructor", h), h.displayName = c(p, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, i, "GeneratorFunction")), t.prototype = Object.create(y), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, a, function () {
                    return this
                }), t.AsyncIterator = w, t.async = function (e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(u(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then(function (t) {
                        return t.done ? t.value : i.next()
                    })
                }, g(y), c(y, i, "Generator"), c(y, o, function () {
                    return this
                }), c(y, "toString", function () {
                    return "[object Generator]"
                }), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, L.prototype = {
                    constructor: L,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, s) : this.complete(i)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), s
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }
            var U = function () {
                var t = Object(v.useParams)().handle;
                console.debug("CompanyDetail", "handle=", t);
                var e = Object(n.useState)(null),
                    r = Object(l.a)(e, 2),
                    a = r[0],
                    i = r[1];
                return Object(n.useEffect)(function () {
                    function e() {
                        return (e = Object(u.a)(A().mark(function e() {
                            return A().wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = i, e.next = 3, O.getCompany(t);
                                    case 3:
                                        e.t1 = e.sent, (0, e.t0)(e.t1);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }))).apply(this, arguments)
                    } ! function () {
                        e.apply(this, arguments)
                    }()
                }, [t]), a ? o.a.createElement("div", {
                    className: "col-md-8 offset-md-2"
                }, o.a.createElement("h3", null, a.name), o.a.createElement("p", null, a.description), o.a.createElement(T, {
                    jobs: a.jobs
                })) : o.a.createElement(k, null)
            },
                J = r(21),
                q = r(27),
                Y = function (t) {
                    var e = t.type,
                        r = void 0 === e ? "danger" : e,
                        n = t.messages,
                        a = void 0 === n ? [] : n;
                    return console.debug("Alert", "type=", r, "messages=", a), o.a.createElement("div", {
                        className: "alert alert-".concat(r),
                        role: "alert"
                    }, a.map(function (t) {
                        return o.a.createElement("p", {
                            className: "mb-0 small",
                            key: t
                        }, t)
                    }), ";")
                };

            function R() {
                R = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (N) {
                    c = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        a = Object.create(o.prototype),
                        i = new L(n || []);
                    return a._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return O()
                            }
                            for (r.method = o, r.arg = a; ;) {
                                var i = r.delegate;
                                if (i) {
                                    var c = b(i, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (N) {
                        return {
                            type: "throw",
                            arg: N
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function f() { }

                function h() { }

                function p() { }
                var m = {};
                c(m, o, function () {
                    return this
                });
                var v = Object.getPrototypeOf,
                    d = v && v(v(j([])));
                d && d !== e && r.call(d, o) && (m = d);
                var y = p.prototype = f.prototype = Object.create(m);

                function g(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        c(t, e, function (t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function w(t, e) {
                    var n;
                    this._invoke = function (o, a) {
                        function i() {
                            return new e(function (n, i) {
                                ! function n(o, a, i, c) {
                                    var u = l(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            f = s.value;
                                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                                            n("next", t, i, c)
                                        }, function (t) {
                                            n("throw", t, i, c)
                                        }) : e.resolve(f).then(function (t) {
                                            s.value = t, i(s)
                                        }, function (t) {
                                            return n("throw", t, i, c)
                                        })
                                    }
                                    c(u.arg)
                                }(o, a, n, i)
                            })
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, c(y, "constructor", p), c(p, "constructor", h), h.displayName = c(p, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, i, "GeneratorFunction")), t.prototype = Object.create(y), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, a, function () {
                    return this
                }), t.AsyncIterator = w, t.async = function (e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(u(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then(function (t) {
                        return t.done ? t.value : i.next()
                    })
                }, g(y), c(y, i, "Generator"), c(y, o, function () {
                    return this
                }), c(y, "toString", function () {
                    return "[object Generator]"
                }), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, L.prototype = {
                    constructor: L,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, s) : this.complete(i)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), s
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }
            var D = function (t) {
                var e = t.login,
                    r = Object(v.useHistory)(),
                    a = Object(n.useState)({
                        username: "",
                        password: ""
                    }),
                    i = Object(l.a)(a, 2),
                    c = i[0],
                    s = i[1],
                    f = Object(n.useState)([]),
                    h = Object(l.a)(f, 2),
                    p = h[0],
                    m = h[1];

                function d(t) {
                    return y.apply(this, arguments)
                }

                function y() {
                    return (y = Object(u.a)(R().mark(function t(n) {
                        var o;
                        return R().wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return n.preventDefault(), t.next = 3, e(c);
                                case 3:
                                    (o = t.sent).success ? r.push("/companies") : m(o.errors);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }))).apply(this, arguments)
                }

                function g(t) {
                    var e = t.target,
                        r = e.name,
                        n = e.value;
                    s(function (t) {
                        return Object(q.a)({}, t, Object(J.a)({}, r, n))
                    })
                }
                return console.debug("LoginForm", "login=", typeof e, "formData=", c, "formErrors", p), o.a.createElement("div", {
                    className: "LoginForm"
                }, o.a.createElement("div", {
                    className: "container col-md-6 offset-md-3 col-lg-4 offset-lg-4"
                }, o.a.createElement("h3", {
                    className: "mb-3"
                }, "Log In"), o.a.createElement("div", {
                    className: "card"
                }, o.a.createElement("div", {
                    className: "card-body"
                }, o.a.createElement("form", {
                    onSubmit: d
                }, o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "Username"), o.a.createElement("input", {
                    name: "username",
                    className: "form-control",
                    value: c.username,
                    onChange: g,
                    autoComplete: "username",
                    required: !0
                })), o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "Password"), o.a.createElement("input", {
                    type: "password",
                    name: "password",
                    className: "form-control",
                    value: c.password,
                    onChange: g,
                    autoComplete: "current-password",
                    required: !0
                })), p.length ? o.a.createElement(Y, {
                    type: "danger",
                    messages: p
                }) : null, o.a.createElement("button", {
                    className: "btn btn-primary float-right",
                    onSubmit: d
                }, "Submit"))))))
            };

            function B() {
                B = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (N) {
                    c = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        a = Object.create(o.prototype),
                        i = new L(n || []);
                    return a._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return O()
                            }
                            for (r.method = o, r.arg = a; ;) {
                                var i = r.delegate;
                                if (i) {
                                    var c = b(i, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (N) {
                        return {
                            type: "throw",
                            arg: N
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function f() { }

                function h() { }

                function p() { }
                var m = {};
                c(m, o, function () {
                    return this
                });
                var v = Object.getPrototypeOf,
                    d = v && v(v(j([])));
                d && d !== e && r.call(d, o) && (m = d);
                var y = p.prototype = f.prototype = Object.create(m);

                function g(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        c(t, e, function (t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function w(t, e) {
                    var n;
                    this._invoke = function (o, a) {
                        function i() {
                            return new e(function (n, i) {
                                ! function n(o, a, i, c) {
                                    var u = l(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            f = s.value;
                                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                                            n("next", t, i, c)
                                        }, function (t) {
                                            n("throw", t, i, c)
                                        }) : e.resolve(f).then(function (t) {
                                            s.value = t, i(s)
                                        }, function (t) {
                                            return n("throw", t, i, c)
                                        })
                                    }
                                    c(u.arg)
                                }(o, a, n, i)
                            })
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, c(y, "constructor", p), c(p, "constructor", h), h.displayName = c(p, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, i, "GeneratorFunction")), t.prototype = Object.create(y), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, a, function () {
                    return this
                }), t.AsyncIterator = w, t.async = function (e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(u(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then(function (t) {
                        return t.done ? t.value : i.next()
                    })
                }, g(y), c(y, i, "Generator"), c(y, o, function () {
                    return this
                }), c(y, "toString", function () {
                    return "[object Generator]"
                }), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, L.prototype = {
                    constructor: L,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, s) : this.complete(i)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), s
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }
            var H = function () {
                var t = Object(n.useContext)(h),
                    e = t.currentUser,
                    r = t.setCurrentUser,
                    a = Object(n.useState)({
                        firstName: e.firstName,
                        lastName: e.lastName,
                        email: e.email,
                        username: e.username,
                        password: ""
                    }),
                    i = Object(l.a)(a, 2),
                    c = i[0],
                    s = i[1],
                    f = Object(n.useState)([]),
                    p = Object(l.a)(f, 2),
                    m = p[0],
                    v = p[1],
                    d = Object(n.useState)(!1),
                    y = Object(l.a)(d, 2),
                    g = y[0],
                    w = y[1];

                function b() {
                    return (b = Object(u.a)(B().mark(function t(e) {
                        var n, o, a;
                        return B().wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return e.preventDefault(), n = {
                                        firstName: c.firstName,
                                        lastName: c.lastName,
                                        email: c.email,
                                        password: c.password
                                    }, o = c.username, t.prev = 3, t.next = 6, O.saveProfile(o, n);
                                case 6:
                                    a = t.sent, t.next = 14;
                                    break;
                                case 9:
                                    return t.prev = 9, t.t0 = t.catch(3), v(t.t0), t.abrupt("return");
                                case 14:
                                    s(function (t) {
                                        return Object(q.a)({}, t, {
                                            password: ""
                                        })
                                    }), v([]), w(!0), r(a);
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        }, t, null, [
                            [3, 9]
                        ])
                    }))).apply(this, arguments)
                }

                function E(t) {
                    var e = t.target,
                        r = e.name,
                        n = e.value;
                    s(function (t) {
                        return Object(q.a)({}, t, Object(J.a)({}, r, n))
                    }), v([])
                }
                return console.debug("ProfileForm", "currentUser=", e, "formData=", c, "formErrors=", m, "saveConfirmed=", g), o.a.createElement("div", {
                    className: "col-md-6 col-lg-4 offset-md-3 offset-lg-4"
                }, o.a.createElement("h3", null, "Profile"), o.a.createElement("div", {
                    className: "card"
                }, o.a.createElement("div", {
                    className: "card-body"
                }, o.a.createElement("form", null, o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "Username"), o.a.createElement("p", {
                    className: "form-control-plaintext h5"
                }, c.username)), o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "First Name"), o.a.createElement("input", {
                    name: "firstName",
                    className: "form-control",
                    value: c.firstName,
                    onChange: E
                })), o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "Last Name"), o.a.createElement("input", {
                    name: "lastName",
                    className: "form-control",
                    value: c.lastName,
                    onChange: E
                })), o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "Email"), o.a.createElement("input", {
                    name: "email",
                    className: "form-control",
                    value: c.email,
                    onChange: E
                })), o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "Confirm password to make changes:"), o.a.createElement("input", {
                    type: "password",
                    name: "password",
                    className: "form-control",
                    value: c.password,
                    onChange: E
                })), m.length ? o.a.createElement(Y, {
                    type: "danger",
                    messages: m
                }) : null, g ? o.a.createElement(Y, {
                    type: "success",
                    messages: ["Updated successfully."]
                }) : null, o.a.createElement("button", {
                    className: "btn btn-primary btn-block mt-4",
                    onClick: function (t) {
                        return b.apply(this, arguments)
                    }
                }, "Save Changes")))))
            };

            function W() {
                W = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (N) {
                    c = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        a = Object.create(o.prototype),
                        i = new L(n || []);
                    return a._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return O()
                            }
                            for (r.method = o, r.arg = a; ;) {
                                var i = r.delegate;
                                if (i) {
                                    var c = b(i, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (N) {
                        return {
                            type: "throw",
                            arg: N
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function f() { }

                function h() { }

                function p() { }
                var m = {};
                c(m, o, function () {
                    return this
                });
                var v = Object.getPrototypeOf,
                    d = v && v(v(j([])));
                d && d !== e && r.call(d, o) && (m = d);
                var y = p.prototype = f.prototype = Object.create(m);

                function g(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        c(t, e, function (t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function w(t, e) {
                    var n;
                    this._invoke = function (o, a) {
                        function i() {
                            return new e(function (n, i) {
                                ! function n(o, a, i, c) {
                                    var u = l(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            f = s.value;
                                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                                            n("next", t, i, c)
                                        }, function (t) {
                                            n("throw", t, i, c)
                                        }) : e.resolve(f).then(function (t) {
                                            s.value = t, i(s)
                                        }, function (t) {
                                            return n("throw", t, i, c)
                                        })
                                    }
                                    c(u.arg)
                                }(o, a, n, i)
                            })
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, c(y, "constructor", p), c(p, "constructor", h), h.displayName = c(p, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, i, "GeneratorFunction")), t.prototype = Object.create(y), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, a, function () {
                    return this
                }), t.AsyncIterator = w, t.async = function (e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(u(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then(function (t) {
                        return t.done ? t.value : i.next()
                    })
                }, g(y), c(y, i, "Generator"), c(y, o, function () {
                    return this
                }), c(y, "toString", function () {
                    return "[object Generator]"
                }), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, L.prototype = {
                    constructor: L,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, s) : this.complete(i)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), s
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }
            var z = function (t) {
                var e = t.signup,
                    r = Object(v.useHistory)(),
                    a = Object(n.useState)({
                        username: "",
                        password: "",
                        firstName: "",
                        lastName: "",
                        email: ""
                    }),
                    i = Object(l.a)(a, 2),
                    c = i[0],
                    s = i[1],
                    f = Object(n.useState)([]),
                    h = Object(l.a)(f, 2),
                    p = h[0],
                    m = h[1];

                function d(t) {
                    return y.apply(this, arguments)
                }

                function y() {
                    return (y = Object(u.a)(W().mark(function t(n) {
                        var o;
                        return W().wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return n.preventDefault(), t.next = 3, e(c);
                                case 3:
                                    (o = t.sent).success ? r.push("/companies") : m(o.errors);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }))).apply(this, arguments)
                }

                function g(t) {
                    var e = t.target,
                        r = e.name,
                        n = e.value;
                    s(function (t) {
                        return Object(q.a)({}, t, Object(J.a)({}, r, n))
                    })
                }
                return console.debug("SignupForm", "signup=", typeof e, "formData=", c, "formErrors=", p), o.a.createElement("div", {
                    className: "SignupForm"
                }, o.a.createElement("div", {
                    className: "container col-md-6 offset-md-3 col-lg-4 offset-lg-4"
                }, o.a.createElement("h2", {
                    className: "mb-3"
                }, "Sign Up"), o.a.createElement("div", {
                    className: "card"
                }, o.a.createElement("div", {
                    className: "card-body"
                }, o.a.createElement("form", {
                    onSubmit: d
                }, o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "Username"), o.a.createElement("input", {
                    name: "username",
                    className: "form-control",
                    value: c.username,
                    onChange: g,
                    required: !0
                })), o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "Password"), o.a.createElement("input", {
                    type: "password",
                    name: "password",
                    className: "form-control",
                    value: c.password,
                    onChange: g,
                    required: !0
                })), o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "First name"), o.a.createElement("input", {
                    name: "firstName",
                    className: "form-control",
                    value: c.firstName,
                    onChange: g,
                    required: !0
                })), o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "Last name"), o.a.createElement("input", {
                    name: "lastName",
                    className: "form-control",
                    value: c.lastName,
                    onChange: g,
                    required: !0
                })), o.a.createElement("div", {
                    className: "form-group"
                }, o.a.createElement("label", null, "Email"), o.a.createElement("input", {
                    type: "email",
                    name: "email",
                    className: "form-control",
                    value: c.email,
                    onChange: g,
                    required: !0
                })), p.length ? o.a.createElement(Y, {
                    type: "danger",
                    messages: p
                }) : null, o.a.createElement("button", {
                    type: "submit",
                    className: "btn btn-primary float-right",
                    onSubmit: d
                }, "Submit"))))))
            },
                $ = function (t) {
                    var e = t.exact,
                        r = t.path,
                        a = t.children,
                        i = Object(n.useContext)(h).currentUser;
                    return console.debug("PrivateRoute", "exact=", e, "path=", r, "currentUser=", i), i ? o.a.createElement(v.Route, {
                        exact: e,
                        path: r
                    }, a) : o.a.createElement(v.Redirect, {
                        to: "/login"
                    })
                },
                K = function (t) {
                    var e = t.login,
                        r = t.signup;
                    return console.debug("Routes", "login=".concat(typeof e), "register=".concat(typeof register)), o.a.createElement("div", {
                        className: "pt-5"
                    }, o.a.createElement(v.Switch, null, o.a.createElement(v.Route, {
                        exact: !0,
                        path: "/"
                    }, o.a.createElement(d, null)), o.a.createElement(v.Route, {
                        exact: !0,
                        path: "/login"
                    }, o.a.createElement(D, {
                        login: e
                    })), o.a.createElement(v.Route, {
                        exact: !0,
                        path: "/signup"
                    }, o.a.createElement(z, {
                        signup: r
                    })), o.a.createElement($, {
                        exact: !0,
                        path: "/companies"
                    }, o.a.createElement(G, null)), o.a.createElement($, {
                        exact: !0,
                        path: "/jobs"
                    }, o.a.createElement(I, null)), o.a.createElement($, {
                        exact: !0,
                        path: "/companies/:handle"
                    }, o.a.createElement(U, null)), o.a.createElement($, {
                        path: "/profile"
                    }, o.a.createElement(H, null)), o.a.createElement(v.Redirect, {
                        to: "/"
                    })))
                },
                M = r(157),
                Q = r.n(M);
            r(148);

            function V() {
                V = function () {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (N) {
                    c = function (t, e, r) {
                        return t[e] = r
                    }
                }

                function u(t, e, r, n) {
                    var o = e && e.prototype instanceof f ? e : f,
                        a = Object.create(o.prototype),
                        i = new L(n || []);
                    return a._invoke = function (t, e, r) {
                        var n = "suspendedStart";
                        return function (o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return O()
                            }
                            for (r.method = o, r.arg = a; ;) {
                                var i = r.delegate;
                                if (i) {
                                    var c = b(i, r);
                                    if (c) {
                                        if (c === s) continue;
                                        return c
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var u = l(t, e, r);
                                if ("normal" === u.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }(t, r, i), a
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (N) {
                        return {
                            type: "throw",
                            arg: N
                        }
                    }
                }
                t.wrap = u;
                var s = {};

                function f() { }

                function h() { }

                function p() { }
                var m = {};
                c(m, o, function () {
                    return this
                });
                var v = Object.getPrototypeOf,
                    d = v && v(v(j([])));
                d && d !== e && r.call(d, o) && (m = d);
                var y = p.prototype = f.prototype = Object.create(m);

                function g(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        c(t, e, function (t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function w(t, e) {
                    var n;
                    this._invoke = function (o, a) {
                        function i() {
                            return new e(function (n, i) {
                                ! function n(o, a, i, c) {
                                    var u = l(t[o], t, a);
                                    if ("throw" !== u.type) {
                                        var s = u.arg,
                                            f = s.value;
                                        return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                                            n("next", t, i, c)
                                        }, function (t) {
                                            n("throw", t, i, c)
                                        }) : e.resolve(f).then(function (t) {
                                            s.value = t, i(s)
                                        }, function (t) {
                                            return n("throw", t, i, c)
                                        })
                                    }
                                    c(u.arg)
                                }(o, a, n, i)
                            })
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return s;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return s
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
                }

                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(E, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                a = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = p, c(y, "constructor", p), c(p, "constructor", h), h.displayName = c(p, i, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, c(t, i, "GeneratorFunction")), t.prototype = Object.create(y), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, g(w.prototype), c(w.prototype, a, function () {
                    return this
                }), t.AsyncIterator = w, t.async = function (e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new w(u(e, r, n, o), a);
                    return t.isGeneratorFunction(r) ? i : i.next().then(function (t) {
                        return t.done ? t.value : i.next()
                    })
                }, g(y), c(y, i, "Generator"), c(y, o, function () {
                    return this
                }), c(y, "toString", function () {
                    return "[object Generator]"
                }), t.keys = function (t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, L.prototype = {
                    constructor: L,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(r, n) {
                            return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                i = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, s) : this.complete(i)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), s
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), s
                    }
                }, t
            }
            var X = "jobly-token";
            var Z = function () {
                var t = Object(n.useState)(!1),
                    e = Object(l.a)(t, 2),
                    r = e[0],
                    a = e[1],
                    i = Object(n.useState)(new Set([])),
                    p = Object(l.a)(i, 2),
                    v = p[0],
                    d = p[1],
                    y = Object(n.useState)(null),
                    g = Object(l.a)(y, 2),
                    w = g[0],
                    b = g[1],
                    E = f(X),
                    x = Object(l.a)(E, 2),
                    L = x[0],
                    j = x[1];

                function N() {
                    return (N = Object(u.a)(V().mark(function t(e) {
                        var r;
                        return V().wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, O.signup(e);
                                case 3:
                                    return r = t.sent, j(r), t.abrupt("return", {
                                        success: !0
                                    });
                                case 8:
                                    return t.prev = 8, t.t0 = t.catch(0), console.error("signup falied", t.t0), t.abrupt("return", {
                                        success: !1,
                                        err: t.t0
                                    });
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }, t, null, [
                            [0, 8]
                        ])
                    }))).apply(this, arguments)
                }

                function _() {
                    return (_ = Object(u.a)(V().mark(function t(e) {
                        var r;
                        return V().wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, O.login(e);
                                case 3:
                                    return r = t.sent, j(r), t.abrupt("return", {
                                        success: !0
                                    });
                                case 8:
                                    return t.prev = 8, t.t0 = t.catch(0), console.error("login failed", t.t0), t.abrupt("return", {
                                        success: !1,
                                        err: t.t0
                                    });
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }, t, null, [
                            [0, 8]
                        ])
                    }))).apply(this, arguments)
                }

                function S(t) {
                    return v.has(t)
                }
                return Object(n.useEffect)(function () {
                    function t() {
                        return (t = Object(u.a)(V().mark(function t() {
                            var e, r, n;
                            return V().wrap(function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!L) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.prev = 1, e = Q.a.decode(L), r = e.username, O.token = L, t.next = 6, O.getCurrentUser(r);
                                    case 6:
                                        n = t.sent, b(n), d(new Set(n.applications)), t.next = 15;
                                        break;
                                    case 11:
                                        t.prev = 11, t.t0 = t.catch(1), console.error("App loadUserInfo: problem loading", t.t0), b(null);
                                    case 15:
                                        a(!0);
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [1, 11]
                            ])
                        }))).apply(this, arguments)
                    }
                    console.debug("App useEffect loadUserInfo", "token=", L), a(!1),
                        function () {
                            t.apply(this, arguments)
                        }()
                }, [L]), r ? o.a.createElement(s.a, null, o.a.createElement(h.Provider, {
                    value: {
                        currentUser: w,
                        setCurrentUser: b,
                        hasAppliedToJob: S,
                        applyToJob: function (t) {
                            S(t) || (O.applyToJob(w.username, t), d(new Set([].concat(Object(c.a)(v), [t]))))
                        }
                    }
                }, o.a.createElement("div", {
                    className: "App"
                }, o.a.createElement(m, {
                    logout: function () {
                        b(null), j(null)
                    }
                }), o.a.createElement(K, {
                    login: function (t) {
                        return _.apply(this, arguments)
                    },
                    signup: function (t) {
                        return N.apply(this, arguments)
                    }
                })))) : o.a.createElement(k, null)
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            i.a.render(o.a.createElement(Z, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (t) {
                t.unregister()
            })
        }
    },
    [
        [160, 2, 1]
    ]
]);
//# sourceMappingURL=main.a43140b7.chunk.js.map