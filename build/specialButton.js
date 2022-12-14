var specialButton;
(() => {
	"use strict";
	var e,
		r,
		t = {
			221: (e, r, t) => {
				var o = { "./SpecialButton": () => Promise.all([t.e(788), t.e(258)]).then(() => () => t(258)) },
					n = (e, r) => (
						(t.R = r),
						(r = t.o(o, e)
							? o[e]()
							: Promise.resolve().then(() => {
									throw new Error('Module "' + e + '" does not exist in container.');
							  })),
						(t.R = void 0),
						r
					),
					i = (e, r) => {
						if (t.S) {
							var o = "default",
								n = t.S[o];
							if (n && n !== e)
								throw new Error(
									"Container initialization failed as it has already been initialized with a different share scope"
								);
							return (t.S[o] = e), t.I(o, r);
						}
					};
				t.d(r, { get: () => n, init: () => i });
			},
			497: (e) => {
				e.exports = require("react");
			},
		},
		o = {};
	function n(e) {
		var r = o[e];
		if (void 0 !== r) return r.exports;
		var i = (o[e] = { exports: {} });
		return t[e](i, i.exports, n), i.exports;
	}
	(n.m = t),
		(n.c = o),
		(n.n = (e) => {
			var r = e && e.__esModule ? () => e.default : () => e;
			return n.d(r, { a: r }), r;
		}),
		(n.d = (e, r) => {
			for (var t in r) n.o(r, t) && !n.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
		}),
		(n.f = {}),
		(n.e = (e) => Promise.all(Object.keys(n.f).reduce((r, t) => (n.f[t](e, r), r), []))),
		(n.u = (e) => e + ".js"),
		(n.g = (function () {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")();
			} catch (e) {
				if ("object" == typeof window) return window;
			}
		})()),
		(n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
		(e = {}),
		(r = "@avsssai/button:"),
		(n.l = (t, o, i, a) => {
			if (e[t]) e[t].push(o);
			else {
				var s, l;
				if (void 0 !== i)
					for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
						var d = u[c];
						if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == r + i) {
							s = d;
							break;
						}
					}
				s ||
					((l = !0),
					((s = document.createElement("script")).charset = "utf-8"),
					(s.timeout = 120),
					n.nc && s.setAttribute("nonce", n.nc),
					s.setAttribute("data-webpack", r + i),
					(s.src = t)),
					(e[t] = [o]);
				var p = (r, o) => {
						(s.onerror = s.onload = null), clearTimeout(f);
						var n = e[t];
						if ((delete e[t], s.parentNode && s.parentNode.removeChild(s), n && n.forEach((e) => e(o)), r))
							return r(o);
					},
					f = setTimeout(p.bind(null, void 0, { type: "timeout", target: s }), 12e4);
				(s.onerror = p.bind(null, s.onerror)),
					(s.onload = p.bind(null, s.onload)),
					l && document.head.appendChild(s);
			}
		}),
		(n.r = (e) => {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(() => {
			n.S = {};
			var e = {},
				r = {};
			n.I = (t, o) => {
				o || (o = []);
				var i = r[t];
				if ((i || (i = r[t] = {}), !(o.indexOf(i) >= 0))) {
					if ((o.push(i), e[t])) return e[t];
					n.o(n.S, t) || (n.S[t] = {}), n.S[t];
					var a = [];
					return (e[t] = a.length ? Promise.all(a).then(() => (e[t] = 1)) : 1);
				}
			};
		})(),
		(() => {
			var e;
			n.g.importScripts && (e = n.g.location + "");
			var r = n.g.document;
			if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
				var t = r.getElementsByTagName("script");
				t.length && (e = t[t.length - 1].src);
			}
			if (!e) throw new Error("Automatic publicPath is not supported in this browser");
			(e = e
				.replace(/#.*$/, "")
				.replace(/\?.*$/, "")
				.replace(/\/[^\/]+$/, "/")),
				(n.p = e);
		})(),
		(() => {
			var e = { 951: 0 };
			n.f.j = (r, t) => {
				var o = n.o(e, r) ? e[r] : void 0;
				if (0 !== o)
					if (o) t.push(o[2]);
					else {
						var i = new Promise((t, n) => (o = e[r] = [t, n]));
						t.push((o[2] = i));
						var a = n.p + n.u(r),
							s = new Error();
						n.l(
							a,
							(t) => {
								if (n.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
									var i = t && ("load" === t.type ? "missing" : t.type),
										a = t && t.target && t.target.src;
									(s.message = "Loading chunk " + r + " failed.\n(" + i + ": " + a + ")"),
										(s.name = "ChunkLoadError"),
										(s.type = i),
										(s.request = a),
										o[1](s);
								}
							},
							"chunk-" + r,
							r
						);
					}
			};
			var r = (r, t) => {
					var o,
						i,
						[a, s, l] = t,
						u = 0;
					if (a.some((r) => 0 !== e[r])) {
						for (o in s) n.o(s, o) && (n.m[o] = s[o]);
						l && l(n);
					}
					for (r && r(t); u < a.length; u++) (i = a[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
				},
				t = (self.webpackChunk_avsssai_button = self.webpackChunk_avsssai_button || []);
			t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
		})();
	var i = n(221);
	specialButton = i;
})();
