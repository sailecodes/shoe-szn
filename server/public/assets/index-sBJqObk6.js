var Qa = (e, t, n) => {
  if (!t.has(e)) throw TypeError("Cannot " + n);
};
var R = (e, t, n) => (Qa(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
  b = (e, t, n) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  U = (e, t, n, r) => (Qa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var Jo = (e, t, n, r) => ({
    set _(i) {
      U(e, t, i, n);
    },
    get _() {
      return R(e, t, r);
    },
  }),
  fe = (e, t, n) => (Qa(e, t, "access private method"), n);
function lh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function ah(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sh = { exports: {} },
  pa = {},
  uh = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ao = Symbol.for("react.element"),
  z0 = Symbol.for("react.portal"),
  N0 = Symbol.for("react.fragment"),
  L0 = Symbol.for("react.strict_mode"),
  T0 = Symbol.for("react.profiler"),
  O0 = Symbol.for("react.provider"),
  D0 = Symbol.for("react.context"),
  M0 = Symbol.for("react.forward_ref"),
  F0 = Symbol.for("react.suspense"),
  I0 = Symbol.for("react.memo"),
  $0 = Symbol.for("react.lazy"),
  nd = Symbol.iterator;
function A0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nd && e[nd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ch = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  dh = Object.assign,
  fh = {};
function Ni(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = fh), (this.updater = n || ch);
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ni.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hh() {}
hh.prototype = Ni.prototype;
function $u(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = fh), (this.updater = n || ch);
}
var Au = ($u.prototype = new hh());
Au.constructor = $u;
dh(Au, Ni.prototype);
Au.isPureReactComponent = !0;
var rd = Array.isArray,
  ph = Object.prototype.hasOwnProperty,
  Uu = { current: null },
  mh = { key: !0, ref: !0, __self: !0, __source: !0 };
function vh(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t))
      ph.call(t, r) && !mh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: Ao, type: e, key: o, ref: l, props: i, _owner: Uu.current };
}
function U0(e, t) {
  return { $$typeof: Ao, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Bu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ao;
}
function B0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var id = /\/+/g;
function Ka(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? B0("" + e.key) : t.toString(36);
}
function xl(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ao:
          case z0:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Ka(l, 0) : r),
      rd(i)
        ? ((n = ""),
          e != null && (n = e.replace(id, "$&/") + "/"),
          xl(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Bu(i) &&
            (i = U0(i, n + (!i.key || (l && l.key === i.key) ? "" : ("" + i.key).replace(id, "$&/") + "/") + e)),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), rd(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + Ka(o, a);
      l += xl(o, t, n, s, i);
    }
  else if (((s = A0(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; ) (o = o.value), (s = r + Ka(o, a++)), (l += xl(o, t, n, s, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function el(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    xl(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function H0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ze = { current: null },
  Sl = { transition: null },
  W0 = { ReactCurrentDispatcher: Ze, ReactCurrentBatchConfig: Sl, ReactCurrentOwner: Uu };
q.Children = {
  map: el,
  forEach: function (e, t, n) {
    el(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      el(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      el(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bu(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
q.Component = Ni;
q.Fragment = N0;
q.Profiler = T0;
q.PureComponent = $u;
q.StrictMode = L0;
q.Suspense = F0;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W0;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = dh({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Uu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t) ph.call(t, s) && !mh.hasOwnProperty(s) && (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ao, type: e.type, key: i, ref: o, props: r, _owner: l };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: D0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: O0, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = vh;
q.createFactory = function (e) {
  var t = vh.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: M0, render: e };
};
q.isValidElement = Bu;
q.lazy = function (e) {
  return { $$typeof: $0, _payload: { _status: -1, _result: e }, _init: H0 };
};
q.memo = function (e, t) {
  return { $$typeof: I0, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = Sl.transition;
  Sl.transition = {};
  try {
    e();
  } finally {
    Sl.transition = t;
  }
};
q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
q.useCallback = function (e, t) {
  return Ze.current.useCallback(e, t);
};
q.useContext = function (e) {
  return Ze.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return Ze.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return Ze.current.useEffect(e, t);
};
q.useId = function () {
  return Ze.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return Ze.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return Ze.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return Ze.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return Ze.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return Ze.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return Ze.current.useRef(e);
};
q.useState = function (e) {
  return Ze.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return Ze.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return Ze.current.useTransition();
};
q.version = "18.2.0";
uh.exports = q;
var z = uh.exports;
const ot = ah(z),
  b0 = lh({ __proto__: null, default: ot }, [z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var V0 = z,
  Q0 = Symbol.for("react.element"),
  K0 = Symbol.for("react.fragment"),
  G0 = Object.prototype.hasOwnProperty,
  Y0 = V0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  q0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function gh(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) G0.call(t, r) && !q0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Q0, type: e, key: o, ref: l, props: i, _owner: Y0.current };
}
pa.Fragment = K0;
pa.jsx = gh;
pa.jsxs = gh;
sh.exports = pa;
var y = sh.exports,
  zs = {},
  yh = { exports: {} },
  yt = {},
  wh = { exports: {} },
  xh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, I) {
    var B = D.length;
    D.push(I);
    e: for (; 0 < B; ) {
      var Y = (B - 1) >>> 1,
        J = D[Y];
      if (0 < i(J, I)) (D[Y] = I), (D[B] = J), (B = Y);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var I = D[0],
      B = D.pop();
    if (B !== I) {
      D[0] = B;
      e: for (var Y = 0, J = D.length, ut = J >>> 1; Y < ut; ) {
        var ke = 2 * (Y + 1) - 1,
          be = D[ke],
          Ee = ke + 1,
          ct = D[Ee];
        if (0 > i(be, B))
          Ee < J && 0 > i(ct, be) ? ((D[Y] = ct), (D[Ee] = B), (Y = Ee)) : ((D[Y] = be), (D[ke] = B), (Y = ke));
        else if (Ee < J && 0 > i(ct, B)) (D[Y] = ct), (D[Ee] = B), (Y = Ee);
        else break e;
      }
    }
    return I;
  }
  function i(D, I) {
    var B = D.sortIndex - I.sortIndex;
    return B !== 0 ? B : D.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    c = 1,
    m = null,
    h = 3,
    g = !1,
    w = !1,
    S = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(D) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= D) r(u), (I.sortIndex = I.expirationTime), t(s, I);
      else break;
      I = n(u);
    }
  }
  function E(D) {
    if (((S = !1), p(D), !w))
      if (n(s) !== null) (w = !0), Wt(_);
      else {
        var I = n(u);
        I !== null && ie(E, I.startTime - D);
      }
  }
  function _(D, I) {
    (w = !1), S && ((S = !1), d(N), (N = -1)), (g = !0);
    var B = h;
    try {
      for (p(I), m = n(s); m !== null && (!(m.expirationTime > I) || (D && !Z())); ) {
        var Y = m.callback;
        if (typeof Y == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var J = Y(m.expirationTime <= I);
          (I = e.unstable_now()), typeof J == "function" ? (m.callback = J) : m === n(s) && r(s), p(I);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var ut = !0;
      else {
        var ke = n(u);
        ke !== null && ie(E, ke.startTime - I), (ut = !1);
      }
      return ut;
    } finally {
      (m = null), (h = B), (g = !1);
    }
  }
  var v = !1,
    C = null,
    N = -1,
    T = 5,
    $ = -1;
  function Z() {
    return !(e.unstable_now() - $ < T);
  }
  function Se() {
    if (C !== null) {
      var D = e.unstable_now();
      $ = D;
      var I = !0;
      try {
        I = C(!0, D);
      } finally {
        I ? ge() : ((v = !1), (C = null));
      }
    } else v = !1;
  }
  var ge;
  if (typeof f == "function")
    ge = function () {
      f(Se);
    };
  else if (typeof MessageChannel < "u") {
    var et = new MessageChannel(),
      yn = et.port2;
    (et.port1.onmessage = Se),
      (ge = function () {
        yn.postMessage(null);
      });
  } else
    ge = function () {
      k(Se, 0);
    };
  function Wt(D) {
    (C = D), v || ((v = !0), ge());
  }
  function ie(D, I) {
    N = k(function () {
      D(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Wt(_));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (D) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = h;
      }
      var B = h;
      h = I;
      try {
        return D();
      } finally {
        h = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, I) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var B = h;
      h = D;
      try {
        return I();
      } finally {
        h = B;
      }
    }),
    (e.unstable_scheduleCallback = function (D, I, B) {
      var Y = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? Y + B : Y))
          : (B = Y),
        D)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = B + J),
        (D = { id: c++, callback: I, priorityLevel: D, startTime: B, expirationTime: J, sortIndex: -1 }),
        B > Y
          ? ((D.sortIndex = B), t(u, D), n(s) === null && D === n(u) && (S ? (d(N), (N = -1)) : (S = !0), ie(E, B - Y)))
          : ((D.sortIndex = J), t(s, D), w || g || ((w = !0), Wt(_))),
        D
      );
    }),
    (e.unstable_shouldYield = Z),
    (e.unstable_wrapCallback = function (D) {
      var I = h;
      return function () {
        var B = h;
        h = I;
        try {
          return D.apply(this, arguments);
        } finally {
          h = B;
        }
      };
    });
})(xh);
wh.exports = xh;
var X0 = wh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sh = z,
  gt = X0;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var kh = new Set(),
  po = {};
function Lr(e, t) {
  gi(e, t), gi(e + "Capture", t);
}
function gi(e, t) {
  for (po[e] = t, e = 0; e < t.length; e++) kh.add(t[e]);
}
var fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Ns = Object.prototype.hasOwnProperty,
  Z0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  od = {},
  ld = {};
function J0(e) {
  return Ns.call(ld, e) ? !0 : Ns.call(od, e) ? !1 : Z0.test(e) ? (ld[e] = !0) : ((od[e] = !0), !1);
}
function e1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function t1(e, t, n, r) {
  if (t === null || typeof t > "u" || e1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Je(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var He = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    He[e] = new Je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  He[t] = new Je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  He[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  He[e] = new Je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    He[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  He[e] = new Je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  He[e] = new Je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  He[e] = new Je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  He[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hu = /[\-:]([a-z])/g;
function Wu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hu, Wu);
    He[t] = new Je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Hu, Wu);
  He[t] = new Je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Hu, Wu);
  He[t] = new Je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  He[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new Je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  He[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bu(e, t, n, r) {
  var i = He.hasOwnProperty(t) ? He[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (t1(t, n, i, r) && (n = null),
    r || i === null
      ? J0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vn = Sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  tl = Symbol.for("react.element"),
  $r = Symbol.for("react.portal"),
  Ar = Symbol.for("react.fragment"),
  Vu = Symbol.for("react.strict_mode"),
  Ls = Symbol.for("react.profiler"),
  Eh = Symbol.for("react.provider"),
  Ch = Symbol.for("react.context"),
  Qu = Symbol.for("react.forward_ref"),
  Ts = Symbol.for("react.suspense"),
  Os = Symbol.for("react.suspense_list"),
  Ku = Symbol.for("react.memo"),
  Rn = Symbol.for("react.lazy"),
  Ph = Symbol.for("react.offscreen"),
  ad = Symbol.iterator;
function $i(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ad && e[ad]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ve = Object.assign,
  Ga;
function Xi(e) {
  if (Ga === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ga = (t && t[1]) || "";
    }
  return (
    `
` +
    Ga +
    e
  );
}
var Ya = !1;
function qa(e, t) {
  if (!e || Ya) return "";
  Ya = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var s =
                  `
` + i[l].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Ya = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xi(e) : "";
}
function n1(e) {
  switch (e.tag) {
    case 5:
      return Xi(e.type);
    case 16:
      return Xi("Lazy");
    case 13:
      return Xi("Suspense");
    case 19:
      return Xi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = qa(e.type, !1)), e;
    case 11:
      return (e = qa(e.type.render, !1)), e;
    case 1:
      return (e = qa(e.type, !0)), e;
    default:
      return "";
  }
}
function Ds(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ar:
      return "Fragment";
    case $r:
      return "Portal";
    case Ls:
      return "Profiler";
    case Vu:
      return "StrictMode";
    case Ts:
      return "Suspense";
    case Os:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ch:
        return (e.displayName || "Context") + ".Consumer";
      case Eh:
        return (e._context.displayName || "Context") + ".Provider";
      case Qu:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ku:
        return (t = e.displayName || null), t !== null ? t : Ds(e.type) || "Memo";
      case Rn:
        (t = e._payload), (e = e._init);
        try {
          return Ds(e(t));
        } catch {}
    }
  return null;
}
function r1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ds(t);
    case 8:
      return t === Vu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Gn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Rh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function i1(e) {
  var t = Rh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function nl(e) {
  e._valueTracker || (e._valueTracker = i1(e));
}
function _h(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Rh(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Al(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ms(e, t) {
  var n = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function sd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function jh(e, t) {
  (t = t.checked), t != null && bu(e, "checked", t, !1);
}
function Fs(e, t) {
  jh(e, t);
  var n = Gn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Is(e, t.type, n) : t.hasOwnProperty("defaultValue") && Is(e, t.type, Gn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ud(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Is(e, t, n) {
  (t !== "number" || Al(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zi = Array.isArray;
function Jr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function $s(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function cd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Zi(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gn(n) };
}
function zh(e, t) {
  var n = Gn(t.value),
    r = Gn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function dd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Nh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function As(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Nh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var rl,
  Lh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        rl = rl || document.createElement("div"),
          rl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = rl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function mo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var no = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  o1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(no).forEach(function (e) {
  o1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (no[t] = no[e]);
  });
});
function Th(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (no.hasOwnProperty(e) && no[e])
    ? ("" + t).trim()
    : t + "px";
}
function Oh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Th(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var l1 = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Us(e, t) {
  if (t) {
    if (l1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Bs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Hs = null;
function Gu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ws = null,
  ei = null,
  ti = null;
function fd(e) {
  if ((e = Ho(e))) {
    if (typeof Ws != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = wa(t)), Ws(e.stateNode, e.type, t));
  }
}
function Dh(e) {
  ei ? (ti ? ti.push(e) : (ti = [e])) : (ei = e);
}
function Mh() {
  if (ei) {
    var e = ei,
      t = ti;
    if (((ti = ei = null), fd(e), t)) for (e = 0; e < t.length; e++) fd(t[e]);
  }
}
function Fh(e, t) {
  return e(t);
}
function Ih() {}
var Xa = !1;
function $h(e, t, n) {
  if (Xa) return e(t, n);
  Xa = !0;
  try {
    return Fh(e, t, n);
  } finally {
    (Xa = !1), (ei !== null || ti !== null) && (Ih(), Mh());
  }
}
function vo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var bs = !1;
if (fn)
  try {
    var Ai = {};
    Object.defineProperty(Ai, "passive", {
      get: function () {
        bs = !0;
      },
    }),
      window.addEventListener("test", Ai, Ai),
      window.removeEventListener("test", Ai, Ai);
  } catch {
    bs = !1;
  }
function a1(e, t, n, r, i, o, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ro = !1,
  Ul = null,
  Bl = !1,
  Vs = null,
  s1 = {
    onError: function (e) {
      (ro = !0), (Ul = e);
    },
  };
function u1(e, t, n, r, i, o, l, a, s) {
  (ro = !1), (Ul = null), a1.apply(s1, arguments);
}
function c1(e, t, n, r, i, o, l, a, s) {
  if ((u1.apply(this, arguments), ro)) {
    if (ro) {
      var u = Ul;
      (ro = !1), (Ul = null);
    } else throw Error(L(198));
    Bl || ((Bl = !0), (Vs = u));
  }
}
function Tr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ah(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function hd(e) {
  if (Tr(e) !== e) throw Error(L(188));
}
function d1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tr(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return hd(i), e;
        if (o === r) return hd(i), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Uh(e) {
  return (e = d1(e)), e !== null ? Bh(e) : null;
}
function Bh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Hh = gt.unstable_scheduleCallback,
  pd = gt.unstable_cancelCallback,
  f1 = gt.unstable_shouldYield,
  h1 = gt.unstable_requestPaint,
  Pe = gt.unstable_now,
  p1 = gt.unstable_getCurrentPriorityLevel,
  Yu = gt.unstable_ImmediatePriority,
  Wh = gt.unstable_UserBlockingPriority,
  Hl = gt.unstable_NormalPriority,
  m1 = gt.unstable_LowPriority,
  bh = gt.unstable_IdlePriority,
  ma = null,
  Zt = null;
function v1(e) {
  if (Zt && typeof Zt.onCommitFiberRoot == "function")
    try {
      Zt.onCommitFiberRoot(ma, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var At = Math.clz32 ? Math.clz32 : w1,
  g1 = Math.log,
  y1 = Math.LN2;
function w1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((g1(e) / y1) | 0)) | 0;
}
var il = 64,
  ol = 4194304;
function Ji(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Wl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = Ji(a)) : ((o &= l), o !== 0 && (r = Ji(o)));
  } else (l = n & ~i), l !== 0 ? (r = Ji(l)) : o !== 0 && (r = Ji(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - At(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function x1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function S1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - At(o),
      a = 1 << l,
      s = i[l];
    s === -1 ? (!(a & n) || a & r) && (i[l] = x1(a, t)) : s <= t && (e.expiredLanes |= a), (o &= ~a);
  }
}
function Qs(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Vh() {
  var e = il;
  return (il <<= 1), !(il & 4194240) && (il = 64), e;
}
function Za(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Uo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - At(t)),
    (e[t] = n);
}
function k1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - At(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function qu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - At(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var re = 0;
function Qh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Kh,
  Xu,
  Gh,
  Yh,
  qh,
  Ks = !1,
  ll = [],
  An = null,
  Un = null,
  Bn = null,
  go = new Map(),
  yo = new Map(),
  jn = [],
  E1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function md(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      An = null;
      break;
    case "dragenter":
    case "dragleave":
      Un = null;
      break;
    case "mouseover":
    case "mouseout":
      Bn = null;
      break;
    case "pointerover":
    case "pointerout":
      go.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yo.delete(t.pointerId);
  }
}
function Ui(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }),
      t !== null && ((t = Ho(t)), t !== null && Xu(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function C1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (An = Ui(An, e, t, n, r, i)), !0;
    case "dragenter":
      return (Un = Ui(Un, e, t, n, r, i)), !0;
    case "mouseover":
      return (Bn = Ui(Bn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return go.set(o, Ui(go.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (o = i.pointerId), yo.set(o, Ui(yo.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Xh(e) {
  var t = sr(e.target);
  if (t !== null) {
    var n = Tr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ah(n)), t !== null)) {
          (e.blockedOn = t),
            qh(e.priority, function () {
              Gh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Hs = r), n.target.dispatchEvent(r), (Hs = null);
    } else return (t = Ho(n)), t !== null && Xu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vd(e, t, n) {
  kl(e) && n.delete(t);
}
function P1() {
  (Ks = !1),
    An !== null && kl(An) && (An = null),
    Un !== null && kl(Un) && (Un = null),
    Bn !== null && kl(Bn) && (Bn = null),
    go.forEach(vd),
    yo.forEach(vd);
}
function Bi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Ks || ((Ks = !0), gt.unstable_scheduleCallback(gt.unstable_NormalPriority, P1)));
}
function wo(e) {
  function t(i) {
    return Bi(i, e);
  }
  if (0 < ll.length) {
    Bi(ll[0], e);
    for (var n = 1; n < ll.length; n++) {
      var r = ll[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    An !== null && Bi(An, e), Un !== null && Bi(Un, e), Bn !== null && Bi(Bn, e), go.forEach(t), yo.forEach(t), n = 0;
    n < jn.length;
    n++
  )
    (r = jn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); ) Xh(n), n.blockedOn === null && jn.shift();
}
var ni = vn.ReactCurrentBatchConfig,
  bl = !0;
function R1(e, t, n, r) {
  var i = re,
    o = ni.transition;
  ni.transition = null;
  try {
    (re = 1), Zu(e, t, n, r);
  } finally {
    (re = i), (ni.transition = o);
  }
}
function _1(e, t, n, r) {
  var i = re,
    o = ni.transition;
  ni.transition = null;
  try {
    (re = 4), Zu(e, t, n, r);
  } finally {
    (re = i), (ni.transition = o);
  }
}
function Zu(e, t, n, r) {
  if (bl) {
    var i = Gs(e, t, n, r);
    if (i === null) ss(e, t, r, Vl, n), md(e, r);
    else if (C1(i, e, t, n, r)) r.stopPropagation();
    else if ((md(e, r), t & 4 && -1 < E1.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ho(i);
        if ((o !== null && Kh(o), (o = Gs(e, t, n, r)), o === null && ss(e, t, r, Vl, n), o === i)) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ss(e, t, r, null, n);
  }
}
var Vl = null;
function Gs(e, t, n, r) {
  if (((Vl = null), (e = Gu(r)), (e = sr(e)), e !== null))
    if (((t = Tr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ah(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vl = e), null;
}
function Zh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (p1()) {
        case Yu:
          return 1;
        case Wh:
          return 4;
        case Hl:
        case m1:
          return 16;
        case bh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var In = null,
  Ju = null,
  El = null;
function Jh() {
  if (El) return El;
  var e,
    t = Ju,
    n = t.length,
    r,
    i = "value" in In ? In.value : In.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (El = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Cl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function al() {
  return !0;
}
function gd() {
  return !1;
}
function wt(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? al : gd),
      (this.isPropagationStopped = gd),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = al));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = al));
      },
      persist: function () {},
      isPersistent: al,
    }),
    t
  );
}
var Li = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ec = wt(Li),
  Bo = ve({}, Li, { view: 0, detail: 0 }),
  j1 = wt(Bo),
  Ja,
  es,
  Hi,
  va = ve({}, Bo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Hi &&
            (Hi && e.type === "mousemove"
              ? ((Ja = e.screenX - Hi.screenX), (es = e.screenY - Hi.screenY))
              : (es = Ja = 0),
            (Hi = e)),
          Ja);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : es;
    },
  }),
  yd = wt(va),
  z1 = ve({}, va, { dataTransfer: 0 }),
  N1 = wt(z1),
  L1 = ve({}, Bo, { relatedTarget: 0 }),
  ts = wt(L1),
  T1 = ve({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  O1 = wt(T1),
  D1 = ve({}, Li, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  M1 = wt(D1),
  F1 = ve({}, Li, { data: 0 }),
  wd = wt(F1),
  I1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  $1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  A1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function U1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = A1[e]) ? !!t[e] : !1;
}
function tc() {
  return U1;
}
var B1 = ve({}, Bo, {
    key: function (e) {
      if (e.key) {
        var t = I1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? $1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tc,
    charCode: function (e) {
      return e.type === "keypress" ? Cl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Cl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  H1 = wt(B1),
  W1 = ve({}, va, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xd = wt(W1),
  b1 = ve({}, Bo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tc,
  }),
  V1 = wt(b1),
  Q1 = ve({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  K1 = wt(Q1),
  G1 = ve({}, va, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Y1 = wt(G1),
  q1 = [9, 13, 27, 32],
  nc = fn && "CompositionEvent" in window,
  io = null;
fn && "documentMode" in document && (io = document.documentMode);
var X1 = fn && "TextEvent" in window && !io,
  ep = fn && (!nc || (io && 8 < io && 11 >= io)),
  Sd = " ",
  kd = !1;
function tp(e, t) {
  switch (e) {
    case "keyup":
      return q1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function np(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ur = !1;
function Z1(e, t) {
  switch (e) {
    case "compositionend":
      return np(t);
    case "keypress":
      return t.which !== 32 ? null : ((kd = !0), Sd);
    case "textInput":
      return (e = t.data), e === Sd && kd ? null : e;
    default:
      return null;
  }
}
function J1(e, t) {
  if (Ur) return e === "compositionend" || (!nc && tp(e, t)) ? ((e = Jh()), (El = Ju = In = null), (Ur = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ep && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ev = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ed(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ev[e.type] : t === "textarea";
}
function rp(e, t, n, r) {
  Dh(r),
    (t = Ql(t, "onChange")),
    0 < t.length && ((n = new ec("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var oo = null,
  xo = null;
function tv(e) {
  pp(e, 0);
}
function ga(e) {
  var t = Wr(e);
  if (_h(t)) return e;
}
function nv(e, t) {
  if (e === "change") return t;
}
var ip = !1;
if (fn) {
  var ns;
  if (fn) {
    var rs = "oninput" in document;
    if (!rs) {
      var Cd = document.createElement("div");
      Cd.setAttribute("oninput", "return;"), (rs = typeof Cd.oninput == "function");
    }
    ns = rs;
  } else ns = !1;
  ip = ns && (!document.documentMode || 9 < document.documentMode);
}
function Pd() {
  oo && (oo.detachEvent("onpropertychange", op), (xo = oo = null));
}
function op(e) {
  if (e.propertyName === "value" && ga(xo)) {
    var t = [];
    rp(t, xo, e, Gu(e)), $h(tv, t);
  }
}
function rv(e, t, n) {
  e === "focusin" ? (Pd(), (oo = t), (xo = n), oo.attachEvent("onpropertychange", op)) : e === "focusout" && Pd();
}
function iv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ga(xo);
}
function ov(e, t) {
  if (e === "click") return ga(t);
}
function lv(e, t) {
  if (e === "input" || e === "change") return ga(t);
}
function av(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ht = typeof Object.is == "function" ? Object.is : av;
function So(e, t) {
  if (Ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ns.call(t, i) || !Ht(e[i], t[i])) return !1;
  }
  return !0;
}
function Rd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _d(e, t) {
  var n = Rd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Rd(n);
  }
}
function lp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? lp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ap() {
  for (var e = window, t = Al(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Al(e.document);
  }
  return t;
}
function rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function sv(e) {
  var t = ap(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && lp(n.ownerDocument.documentElement, n)) {
    if (r !== null && rc(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = _d(n, o));
        var l = _d(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var uv = fn && "documentMode" in document && 11 >= document.documentMode,
  Br = null,
  Ys = null,
  lo = null,
  qs = !1;
function jd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qs ||
    Br == null ||
    Br !== Al(r) ||
    ((r = Br),
    "selectionStart" in r && rc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (lo && So(lo, r)) ||
      ((lo = r),
      (r = Ql(Ys, "onSelect")),
      0 < r.length &&
        ((t = new ec("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Br))));
}
function sl(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Hr = {
    animationend: sl("Animation", "AnimationEnd"),
    animationiteration: sl("Animation", "AnimationIteration"),
    animationstart: sl("Animation", "AnimationStart"),
    transitionend: sl("Transition", "TransitionEnd"),
  },
  is = {},
  sp = {};
fn &&
  ((sp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hr.animationend.animation, delete Hr.animationiteration.animation, delete Hr.animationstart.animation),
  "TransitionEvent" in window || delete Hr.transitionend.transition);
function ya(e) {
  if (is[e]) return is[e];
  if (!Hr[e]) return e;
  var t = Hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in sp) return (is[e] = t[n]);
  return e;
}
var up = ya("animationend"),
  cp = ya("animationiteration"),
  dp = ya("animationstart"),
  fp = ya("transitionend"),
  hp = new Map(),
  zd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Xn(e, t) {
  hp.set(e, t), Lr(t, [e]);
}
for (var os = 0; os < zd.length; os++) {
  var ls = zd[os],
    cv = ls.toLowerCase(),
    dv = ls[0].toUpperCase() + ls.slice(1);
  Xn(cv, "on" + dv);
}
Xn(up, "onAnimationEnd");
Xn(cp, "onAnimationIteration");
Xn(dp, "onAnimationStart");
Xn("dblclick", "onDoubleClick");
Xn("focusin", "onFocus");
Xn("focusout", "onBlur");
Xn(fp, "onTransitionEnd");
gi("onMouseEnter", ["mouseout", "mouseover"]);
gi("onMouseLeave", ["mouseout", "mouseover"]);
gi("onPointerEnter", ["pointerout", "pointerover"]);
gi("onPointerLeave", ["pointerout", "pointerover"]);
Lr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Lr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Lr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Lr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var eo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  fv = new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));
function Nd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), c1(r, t, void 0, e), (e.currentTarget = null);
}
function pp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
          Nd(i, a, u), (o = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]), (s = a.instance), (u = a.currentTarget), (a = a.listener), s !== o && i.isPropagationStopped())
          )
            break e;
          Nd(i, a, u), (o = s);
        }
    }
  }
  if (Bl) throw ((e = Vs), (Bl = !1), (Vs = null), e);
}
function se(e, t) {
  var n = t[tu];
  n === void 0 && (n = t[tu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (mp(t, e, 2, !1), n.add(r));
}
function as(e, t, n) {
  var r = 0;
  t && (r |= 4), mp(n, e, r, t);
}
var ul = "_reactListening" + Math.random().toString(36).slice(2);
function ko(e) {
  if (!e[ul]) {
    (e[ul] = !0),
      kh.forEach(function (n) {
        n !== "selectionchange" && (fv.has(n) || as(n, !1, e), as(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ul] || ((t[ul] = !0), as("selectionchange", !1, t));
  }
}
function mp(e, t, n, r) {
  switch (Zh(t)) {
    case 1:
      var i = R1;
      break;
    case 4:
      i = _1;
      break;
    default:
      i = Zu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !bs || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ss(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo), s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = sr(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  $h(function () {
    var u = o,
      c = Gu(n),
      m = [];
    e: {
      var h = hp.get(e);
      if (h !== void 0) {
        var g = ec,
          w = e;
        switch (e) {
          case "keypress":
            if (Cl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = H1;
            break;
          case "focusin":
            (w = "focus"), (g = ts);
            break;
          case "focusout":
            (w = "blur"), (g = ts);
            break;
          case "beforeblur":
          case "afterblur":
            g = ts;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = yd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = N1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = V1;
            break;
          case up:
          case cp:
          case dp:
            g = O1;
            break;
          case fp:
            g = K1;
            break;
          case "scroll":
            g = j1;
            break;
          case "wheel":
            g = Y1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = M1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = xd;
        }
        var S = (t & 4) !== 0,
          k = !S && e === "scroll",
          d = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var f = u, p; f !== null; ) {
          p = f;
          var E = p.stateNode;
          if (
            (p.tag === 5 && E !== null && ((p = E), d !== null && ((E = vo(f, d)), E != null && S.push(Eo(f, E, p)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < S.length && ((h = new g(h, w, null, n, c)), m.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h && n !== Hs && (w = n.relatedTarget || n.fromElement) && (sr(w) || w[hn]))
        )
          break e;
        if (
          (g || h) &&
          ((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = u),
              (w = w ? sr(w) : null),
              w !== null && ((k = Tr(w)), w !== k || (w.tag !== 5 && w.tag !== 6)) && (w = null))
            : ((g = null), (w = u)),
          g !== w)
        ) {
          if (
            ((S = yd),
            (E = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = xd), (E = "onPointerLeave"), (d = "onPointerEnter"), (f = "pointer")),
            (k = g == null ? h : Wr(g)),
            (p = w == null ? h : Wr(w)),
            (h = new S(E, f + "leave", g, n, c)),
            (h.target = k),
            (h.relatedTarget = p),
            (E = null),
            sr(c) === u && ((S = new S(d, f + "enter", w, n, c)), (S.target = p), (S.relatedTarget = k), (E = S)),
            (k = E),
            g && w)
          )
            t: {
              for (S = g, d = w, f = 0, p = S; p; p = Fr(p)) f++;
              for (p = 0, E = d; E; E = Fr(E)) p++;
              for (; 0 < f - p; ) (S = Fr(S)), f--;
              for (; 0 < p - f; ) (d = Fr(d)), p--;
              for (; f--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                (S = Fr(S)), (d = Fr(d));
              }
              S = null;
            }
          else S = null;
          g !== null && Ld(m, h, g, S, !1), w !== null && k !== null && Ld(m, k, w, S, !0);
        }
      }
      e: {
        if (
          ((h = u ? Wr(u) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var _ = nv;
        else if (Ed(h))
          if (ip) _ = lv;
          else {
            _ = iv;
            var v = rv;
          }
        else
          (g = h.nodeName) && g.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (_ = ov);
        if (_ && (_ = _(e, u))) {
          rp(m, _, n, c);
          break e;
        }
        v && v(e, h, u),
          e === "focusout" && (v = h._wrapperState) && v.controlled && h.type === "number" && Is(h, "number", h.value);
      }
      switch (((v = u ? Wr(u) : window), e)) {
        case "focusin":
          (Ed(v) || v.contentEditable === "true") && ((Br = v), (Ys = u), (lo = null));
          break;
        case "focusout":
          lo = Ys = Br = null;
          break;
        case "mousedown":
          qs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qs = !1), jd(m, n, c);
          break;
        case "selectionchange":
          if (uv) break;
        case "keydown":
        case "keyup":
          jd(m, n, c);
      }
      var C;
      if (nc)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Ur ? tp(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (ep &&
          n.locale !== "ko" &&
          (Ur || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Ur && (C = Jh())
            : ((In = c), (Ju = "value" in In ? In.value : In.textContent), (Ur = !0))),
        (v = Ql(u, N)),
        0 < v.length &&
          ((N = new wd(N, e, null, n, c)),
          m.push({ event: N, listeners: v }),
          C ? (N.data = C) : ((C = np(n)), C !== null && (N.data = C)))),
        (C = X1 ? Z1(e, n) : J1(e, n)) &&
          ((u = Ql(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new wd("onBeforeInput", "beforeinput", null, n, c)),
            m.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    pp(m, t);
  });
}
function Eo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ql(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o), (o = vo(e, n)), o != null && r.unshift(Eo(e, o, i)), (o = vo(e, t)), o != null && r.push(Eo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Fr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ld(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((s = vo(n, o)), s != null && l.unshift(Eo(n, s, a)))
        : i || ((s = vo(n, o)), s != null && l.push(Eo(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var hv = /\r\n?/g,
  pv = /\u0000|\uFFFD/g;
function Td(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      hv,
      `
`
    )
    .replace(pv, "");
}
function cl(e, t, n) {
  if (((t = Td(t)), Td(e) !== t && n)) throw Error(L(425));
}
function Kl() {}
var Xs = null,
  Zs = null;
function Js(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var eu = typeof setTimeout == "function" ? setTimeout : void 0,
  mv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Od = typeof Promise == "function" ? Promise : void 0,
  vv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Od < "u"
      ? function (e) {
          return Od.resolve(null).then(e).catch(gv);
        }
      : eu;
function gv(e) {
  setTimeout(function () {
    throw e;
  });
}
function us(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), wo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  wo(t);
}
function Hn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Dd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ti = Math.random().toString(36).slice(2),
  Xt = "__reactFiber$" + Ti,
  Co = "__reactProps$" + Ti,
  hn = "__reactContainer$" + Ti,
  tu = "__reactEvents$" + Ti,
  yv = "__reactListeners$" + Ti,
  wv = "__reactHandles$" + Ti;
function sr(e) {
  var t = e[Xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[hn] || n[Xt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Dd(e); e !== null; ) {
          if ((n = e[Xt])) return n;
          e = Dd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ho(e) {
  return (e = e[Xt] || e[hn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Wr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function wa(e) {
  return e[Co] || null;
}
var nu = [],
  br = -1;
function Zn(e) {
  return { current: e };
}
function ce(e) {
  0 > br || ((e.current = nu[br]), (nu[br] = null), br--);
}
function ae(e, t) {
  br++, (nu[br] = e.current), (e.current = t);
}
var Yn = {},
  Ye = Zn(Yn),
  lt = Zn(!1),
  kr = Yn;
function yi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function at(e) {
  return (e = e.childContextTypes), e != null;
}
function Gl() {
  ce(lt), ce(Ye);
}
function Md(e, t, n) {
  if (Ye.current !== Yn) throw Error(L(168));
  ae(Ye, t), ae(lt, n);
}
function vp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, r1(e) || "Unknown", i));
  return ve({}, n, r);
}
function Yl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yn),
    (kr = Ye.current),
    ae(Ye, e),
    ae(lt, lt.current),
    !0
  );
}
function Fd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n ? ((e = vp(e, t, kr)), (r.__reactInternalMemoizedMergedChildContext = e), ce(lt), ce(Ye), ae(Ye, e)) : ce(lt),
    ae(lt, n);
}
var on = null,
  xa = !1,
  cs = !1;
function gp(e) {
  on === null ? (on = [e]) : on.push(e);
}
function xv(e) {
  (xa = !0), gp(e);
}
function Jn() {
  if (!cs && on !== null) {
    cs = !0;
    var e = 0,
      t = re;
    try {
      var n = on;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (on = null), (xa = !1);
    } catch (i) {
      throw (on !== null && (on = on.slice(e + 1)), Hh(Yu, Jn), i);
    } finally {
      (re = t), (cs = !1);
    }
  }
  return null;
}
var Vr = [],
  Qr = 0,
  ql = null,
  Xl = 0,
  Pt = [],
  Rt = 0,
  Er = null,
  sn = 1,
  un = "";
function or(e, t) {
  (Vr[Qr++] = Xl), (Vr[Qr++] = ql), (ql = e), (Xl = t);
}
function yp(e, t, n) {
  (Pt[Rt++] = sn), (Pt[Rt++] = un), (Pt[Rt++] = Er), (Er = e);
  var r = sn;
  e = un;
  var i = 32 - At(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - At(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (sn = (1 << (32 - At(t) + i)) | (n << i) | r),
      (un = o + e);
  } else (sn = (1 << o) | (n << i) | r), (un = e);
}
function ic(e) {
  e.return !== null && (or(e, 1), yp(e, 1, 0));
}
function oc(e) {
  for (; e === ql; ) (ql = Vr[--Qr]), (Vr[Qr] = null), (Xl = Vr[--Qr]), (Vr[Qr] = null);
  for (; e === Er; )
    (Er = Pt[--Rt]), (Pt[Rt] = null), (un = Pt[--Rt]), (Pt[Rt] = null), (sn = Pt[--Rt]), (Pt[Rt] = null);
}
var vt = null,
  mt = null,
  he = !1,
  $t = null;
function wp(e, t) {
  var n = _t(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Id(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (vt = e), (mt = Hn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (vt = e), (mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Er !== null ? { id: sn, overflow: un } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = _t(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (vt = e),
            (mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ru(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function iu(e) {
  if (he) {
    var t = mt;
    if (t) {
      var n = t;
      if (!Id(e, t)) {
        if (ru(e)) throw Error(L(418));
        t = Hn(n.nextSibling);
        var r = vt;
        t && Id(e, t) ? wp(r, n) : ((e.flags = (e.flags & -4097) | 2), (he = !1), (vt = e));
      }
    } else {
      if (ru(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (vt = e);
    }
  }
}
function $d(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  vt = e;
}
function dl(e) {
  if (e !== vt) return !1;
  if (!he) return $d(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Js(e.type, e.memoizedProps))),
    t && (t = mt))
  ) {
    if (ru(e)) throw (xp(), Error(L(418)));
    for (; t; ) wp(e, t), (t = Hn(t.nextSibling));
  }
  if (($d(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              mt = Hn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      mt = null;
    }
  } else mt = vt ? Hn(e.stateNode.nextSibling) : null;
  return !0;
}
function xp() {
  for (var e = mt; e; ) e = Hn(e.nextSibling);
}
function wi() {
  (mt = vt = null), (he = !1);
}
function lc(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
var Sv = vn.ReactCurrentBatchConfig;
function Ot(e, t) {
  if (e && e.defaultProps) {
    (t = ve({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Zl = Zn(null),
  Jl = null,
  Kr = null,
  ac = null;
function sc() {
  ac = Kr = Jl = null;
}
function uc(e) {
  var t = Zl.current;
  ce(Zl), (e._currentValue = t);
}
function ou(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ri(e, t) {
  (Jl = e),
    (ac = Kr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (rt = !0), (e.firstContext = null));
}
function zt(e) {
  var t = e._currentValue;
  if (ac !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
      if (Jl === null) throw Error(L(308));
      (Kr = e), (Jl.dependencies = { lanes: 0, firstContext: e });
    } else Kr = Kr.next = e;
  return t;
}
var ur = null;
function cc(e) {
  ur === null ? (ur = [e]) : ur.push(e);
}
function Sp(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? ((n.next = n), cc(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), pn(e, r);
}
function pn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var _n = !1;
function dc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function kp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function cn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Wn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), te & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), pn(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), cc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    pn(e, n)
  );
}
function Pl(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qu(e, n);
  }
}
function Ad(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function ea(e, t, n, r) {
  var i = e.updateQueue;
  _n = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (o = u) : (l.next = u), (l = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== l && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = i.baseState;
    (l = 0), (c = u = s = null), (a = o);
    do {
      var h = a.lane,
        g = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next = { eventTime: g, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var w = e,
            S = a;
          switch (((h = t), (g = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                m = w.call(g, m, h);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (((w = S.payload), (h = typeof w == "function" ? w.call(g, m, h) : w), h == null)) break e;
              m = ve({}, m, h);
              break e;
            case 2:
              _n = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (h = i.effects), h === null ? (i.effects = [a]) : h.push(a));
      } else
        (g = { eventTime: g, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
          c === null ? ((u = c = g), (s = m)) : (c = c.next = g),
          (l |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a), (a = h.next), (h.next = null), (i.lastBaseUpdate = h), (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = m),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Pr |= l), (e.lanes = l), (e.memoizedState = m);
  }
}
function Ud(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function")) throw Error(L(191, i));
        i.call(r);
      }
    }
}
var Ep = new Sh.Component().refs;
function lu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      i = Vn(e),
      o = cn(r, i);
    (o.payload = t), n != null && (o.callback = n), (t = Wn(e, o, i)), t !== null && (Ut(t, e, i, r), Pl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      i = Vn(e),
      o = cn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Wn(e, o, i)),
      t !== null && (Ut(t, e, i, r), Pl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Xe(),
      r = Vn(e),
      i = cn(n, r);
    (i.tag = 2), t != null && (i.callback = t), (t = Wn(e, i, r)), t !== null && (Ut(t, e, r, n), Pl(t, e, r));
  },
};
function Bd(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !So(n, r) || !So(i, o)
      : !0
  );
}
function Cp(e, t, n) {
  var r = !1,
    i = Yn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = zt(o))
      : ((i = at(t) ? kr : Ye.current), (r = t.contextTypes), (o = (r = r != null) ? yi(e, i) : Yn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Sa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Hd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Sa.enqueueReplaceState(t, t.state, null);
}
function au(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Ep), dc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? (i.context = zt(o)) : ((o = at(t) ? kr : Ye.current), (i.context = yi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (lu(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && Sa.enqueueReplaceState(i, i.state, null),
      ea(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wi(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            a === Ep && (a = i.refs = {}), l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function fl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function Wd(e) {
  var t = e._init;
  return t(e._payload);
}
function Pp(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [f]), (d.flags |= 16)) : p.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; ) f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function i(d, f) {
    return (d = Qn(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate), p !== null ? ((p = p.index), p < f ? ((d.flags |= 2), f) : p) : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, f, p, E) {
    return f === null || f.tag !== 6 ? ((f = gs(p, d.mode, E)), (f.return = d), f) : ((f = i(f, p)), (f.return = d), f);
  }
  function s(d, f, p, E) {
    var _ = p.type;
    return _ === Ar
      ? c(d, f, p.props.children, E, p.key)
      : f !== null &&
        (f.elementType === _ || (typeof _ == "object" && _ !== null && _.$$typeof === Rn && Wd(_) === f.type))
      ? ((E = i(f, p.props)), (E.ref = Wi(d, f, p)), (E.return = d), E)
      : ((E = Ll(p.type, p.key, p.props, null, d.mode, E)), (E.ref = Wi(d, f, p)), (E.return = d), E);
  }
  function u(d, f, p, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== p.containerInfo ||
      f.stateNode.implementation !== p.implementation
      ? ((f = ys(p, d.mode, E)), (f.return = d), f)
      : ((f = i(f, p.children || [])), (f.return = d), f);
  }
  function c(d, f, p, E, _) {
    return f === null || f.tag !== 7
      ? ((f = wr(p, d.mode, E, _)), (f.return = d), f)
      : ((f = i(f, p)), (f.return = d), f);
  }
  function m(d, f, p) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = gs("" + f, d.mode, p)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case tl:
          return (p = Ll(f.type, f.key, f.props, null, d.mode, p)), (p.ref = Wi(d, null, f)), (p.return = d), p;
        case $r:
          return (f = ys(f, d.mode, p)), (f.return = d), f;
        case Rn:
          var E = f._init;
          return m(d, E(f._payload), p);
      }
      if (Zi(f) || $i(f)) return (f = wr(f, d.mode, p, null)), (f.return = d), f;
      fl(d, f);
    }
    return null;
  }
  function h(d, f, p, E) {
    var _ = f !== null ? f.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number") return _ !== null ? null : a(d, f, "" + p, E);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case tl:
          return p.key === _ ? s(d, f, p, E) : null;
        case $r:
          return p.key === _ ? u(d, f, p, E) : null;
        case Rn:
          return (_ = p._init), h(d, f, _(p._payload), E);
      }
      if (Zi(p) || $i(p)) return _ !== null ? null : c(d, f, p, E, null);
      fl(d, p);
    }
    return null;
  }
  function g(d, f, p, E, _) {
    if ((typeof E == "string" && E !== "") || typeof E == "number") return (d = d.get(p) || null), a(f, d, "" + E, _);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case tl:
          return (d = d.get(E.key === null ? p : E.key) || null), s(f, d, E, _);
        case $r:
          return (d = d.get(E.key === null ? p : E.key) || null), u(f, d, E, _);
        case Rn:
          var v = E._init;
          return g(d, f, p, v(E._payload), _);
      }
      if (Zi(E) || $i(E)) return (d = d.get(p) || null), c(f, d, E, _, null);
      fl(f, E);
    }
    return null;
  }
  function w(d, f, p, E) {
    for (var _ = null, v = null, C = f, N = (f = 0), T = null; C !== null && N < p.length; N++) {
      C.index > N ? ((T = C), (C = null)) : (T = C.sibling);
      var $ = h(d, C, p[N], E);
      if ($ === null) {
        C === null && (C = T);
        break;
      }
      e && C && $.alternate === null && t(d, C),
        (f = o($, f, N)),
        v === null ? (_ = $) : (v.sibling = $),
        (v = $),
        (C = T);
    }
    if (N === p.length) return n(d, C), he && or(d, N), _;
    if (C === null) {
      for (; N < p.length; N++)
        (C = m(d, p[N], E)), C !== null && ((f = o(C, f, N)), v === null ? (_ = C) : (v.sibling = C), (v = C));
      return he && or(d, N), _;
    }
    for (C = r(d, C); N < p.length; N++)
      (T = g(C, d, N, p[N], E)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? N : T.key),
          (f = o(T, f, N)),
          v === null ? (_ = T) : (v.sibling = T),
          (v = T));
    return (
      e &&
        C.forEach(function (Z) {
          return t(d, Z);
        }),
      he && or(d, N),
      _
    );
  }
  function S(d, f, p, E) {
    var _ = $i(p);
    if (typeof _ != "function") throw Error(L(150));
    if (((p = _.call(p)), p == null)) throw Error(L(151));
    for (var v = (_ = null), C = f, N = (f = 0), T = null, $ = p.next(); C !== null && !$.done; N++, $ = p.next()) {
      C.index > N ? ((T = C), (C = null)) : (T = C.sibling);
      var Z = h(d, C, $.value, E);
      if (Z === null) {
        C === null && (C = T);
        break;
      }
      e && C && Z.alternate === null && t(d, C),
        (f = o(Z, f, N)),
        v === null ? (_ = Z) : (v.sibling = Z),
        (v = Z),
        (C = T);
    }
    if ($.done) return n(d, C), he && or(d, N), _;
    if (C === null) {
      for (; !$.done; N++, $ = p.next())
        ($ = m(d, $.value, E)), $ !== null && ((f = o($, f, N)), v === null ? (_ = $) : (v.sibling = $), (v = $));
      return he && or(d, N), _;
    }
    for (C = r(d, C); !$.done; N++, $ = p.next())
      ($ = g(C, d, N, $.value, E)),
        $ !== null &&
          (e && $.alternate !== null && C.delete($.key === null ? N : $.key),
          (f = o($, f, N)),
          v === null ? (_ = $) : (v.sibling = $),
          (v = $));
    return (
      e &&
        C.forEach(function (Se) {
          return t(d, Se);
        }),
      he && or(d, N),
      _
    );
  }
  function k(d, f, p, E) {
    if (
      (typeof p == "object" && p !== null && p.type === Ar && p.key === null && (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case tl:
          e: {
            for (var _ = p.key, v = f; v !== null; ) {
              if (v.key === _) {
                if (((_ = p.type), _ === Ar)) {
                  if (v.tag === 7) {
                    n(d, v.sibling), (f = i(v, p.props.children)), (f.return = d), (d = f);
                    break e;
                  }
                } else if (
                  v.elementType === _ ||
                  (typeof _ == "object" && _ !== null && _.$$typeof === Rn && Wd(_) === v.type)
                ) {
                  n(d, v.sibling), (f = i(v, p.props)), (f.ref = Wi(d, v, p)), (f.return = d), (d = f);
                  break e;
                }
                n(d, v);
                break;
              } else t(d, v);
              v = v.sibling;
            }
            p.type === Ar
              ? ((f = wr(p.props.children, d.mode, E, p.key)), (f.return = d), (d = f))
              : ((E = Ll(p.type, p.key, p.props, null, d.mode, E)), (E.ref = Wi(d, f, p)), (E.return = d), (d = E));
          }
          return l(d);
        case $r:
          e: {
            for (v = p.key; f !== null; ) {
              if (f.key === v)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === p.containerInfo &&
                  f.stateNode.implementation === p.implementation
                ) {
                  n(d, f.sibling), (f = i(f, p.children || [])), (f.return = d), (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = ys(p, d.mode, E)), (f.return = d), (d = f);
          }
          return l(d);
        case Rn:
          return (v = p._init), k(d, f, v(p._payload), E);
      }
      if (Zi(p)) return w(d, f, p, E);
      if ($i(p)) return S(d, f, p, E);
      fl(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = i(f, p)), (f.return = d), (d = f))
          : (n(d, f), (f = gs(p, d.mode, E)), (f.return = d), (d = f)),
        l(d))
      : n(d, f);
  }
  return k;
}
var xi = Pp(!0),
  Rp = Pp(!1),
  Wo = {},
  Jt = Zn(Wo),
  Po = Zn(Wo),
  Ro = Zn(Wo);
function cr(e) {
  if (e === Wo) throw Error(L(174));
  return e;
}
function fc(e, t) {
  switch ((ae(Ro, t), ae(Po, e), ae(Jt, Wo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : As(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = As(t, e));
  }
  ce(Jt), ae(Jt, t);
}
function Si() {
  ce(Jt), ce(Po), ce(Ro);
}
function _p(e) {
  cr(Ro.current);
  var t = cr(Jt.current),
    n = As(t, e.type);
  t !== n && (ae(Po, e), ae(Jt, n));
}
function hc(e) {
  Po.current === e && (ce(Jt), ce(Po));
}
var pe = Zn(0);
function ta(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ds = [];
function pc() {
  for (var e = 0; e < ds.length; e++) ds[e]._workInProgressVersionPrimary = null;
  ds.length = 0;
}
var Rl = vn.ReactCurrentDispatcher,
  fs = vn.ReactCurrentBatchConfig,
  Cr = 0,
  me = null,
  ze = null,
  Me = null,
  na = !1,
  ao = !1,
  _o = 0,
  kv = 0;
function Ve() {
  throw Error(L(321));
}
function mc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ht(e[n], t[n])) return !1;
  return !0;
}
function vc(e, t, n, r, i, o) {
  if (
    ((Cr = o),
    (me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Rl.current = e === null || e.memoizedState === null ? Rv : _v),
    (e = n(r, i)),
    ao)
  ) {
    o = 0;
    do {
      if (((ao = !1), (_o = 0), 25 <= o)) throw Error(L(301));
      (o += 1), (Me = ze = null), (t.updateQueue = null), (Rl.current = jv), (e = n(r, i));
    } while (ao);
  }
  if (((Rl.current = ra), (t = ze !== null && ze.next !== null), (Cr = 0), (Me = ze = me = null), (na = !1), t))
    throw Error(L(300));
  return e;
}
function gc() {
  var e = _o !== 0;
  return (_o = 0), e;
}
function Qt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Me === null ? (me.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function Nt() {
  if (ze === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ze.next;
  var t = Me === null ? me.memoizedState : Me.next;
  if (t !== null) (Me = t), (ze = e);
  else {
    if (e === null) throw Error(L(310));
    (ze = e),
      (e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null,
      }),
      Me === null ? (me.memoizedState = Me = e) : (Me = Me.next = e);
  }
  return Me;
}
function jo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hs(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = ze,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = o;
    do {
      var c = u.lane;
      if ((Cr & c) === c)
        s !== null &&
          (s = s.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var m = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        s === null ? ((a = s = m), (l = r)) : (s = s.next = m), (me.lanes |= c), (Pr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (l = r) : (s.next = a),
      Ht(r, t.memoizedState) || (rt = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (me.lanes |= o), (Pr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ps(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Ht(o, t.memoizedState) || (rt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function jp() {}
function zp(e, t) {
  var n = me,
    r = Nt(),
    i = t(),
    o = !Ht(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (rt = !0)),
    (r = r.queue),
    yc(Tp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Me !== null && Me.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), zo(9, Lp.bind(null, n, r, i, t), void 0, null), Ie === null)) throw Error(L(349));
    Cr & 30 || Np(n, t, i);
  }
  return i;
}
function Np(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (me.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Lp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Op(t) && Dp(e);
}
function Tp(e, t, n) {
  return n(function () {
    Op(t) && Dp(e);
  });
}
function Op(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ht(e, n);
  } catch {
    return !0;
  }
}
function Dp(e) {
  var t = pn(e, 1);
  t !== null && Ut(t, e, 1, -1);
}
function bd(e) {
  var t = Qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: jo, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = Pv.bind(null, me, e)),
    [t.memoizedState, e]
  );
}
function zo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (me.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Mp() {
  return Nt().memoizedState;
}
function _l(e, t, n, r) {
  var i = Qt();
  (me.flags |= e), (i.memoizedState = zo(1 | t, n, void 0, r === void 0 ? null : r));
}
function ka(e, t, n, r) {
  var i = Nt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ze !== null) {
    var l = ze.memoizedState;
    if (((o = l.destroy), r !== null && mc(r, l.deps))) {
      i.memoizedState = zo(t, n, o, r);
      return;
    }
  }
  (me.flags |= e), (i.memoizedState = zo(1 | t, n, o, r));
}
function Vd(e, t) {
  return _l(8390656, 8, e, t);
}
function yc(e, t) {
  return ka(2048, 8, e, t);
}
function Fp(e, t) {
  return ka(4, 2, e, t);
}
function Ip(e, t) {
  return ka(4, 4, e, t);
}
function $p(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ap(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), ka(4, 4, $p.bind(null, t, e), n);
}
function wc() {}
function Up(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Bp(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mc(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Hp(e, t, n) {
  return Cr & 21
    ? (Ht(n, t) || ((n = Vh()), (me.lanes |= n), (Pr |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (rt = !0)), (e.memoizedState = n));
}
function Ev(e, t) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = fs.transition;
  fs.transition = {};
  try {
    e(!1), t();
  } finally {
    (re = n), (fs.transition = r);
  }
}
function Wp() {
  return Nt().memoizedState;
}
function Cv(e, t, n) {
  var r = Vn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), bp(e))) Vp(t, n);
  else if (((n = Sp(e, t, n, r)), n !== null)) {
    var i = Xe();
    Ut(n, e, r, i), Qp(n, t, r);
  }
}
function Pv(e, t, n) {
  var r = Vn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bp(e)) Vp(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ht(a, l))) {
          var s = t.interleaved;
          s === null ? ((i.next = i), cc(t)) : ((i.next = s.next), (s.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Sp(e, t, i, r)), n !== null && ((i = Xe()), Ut(n, e, r, i), Qp(n, t, r));
  }
}
function bp(e) {
  var t = e.alternate;
  return e === me || (t !== null && t === me);
}
function Vp(e, t) {
  ao = na = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Qp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qu(e, n);
  }
}
var ra = {
    readContext: zt,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useInsertionEffect: Ve,
    useLayoutEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useMutableSource: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    unstable_isNewReconciler: !1,
  },
  Rv = {
    readContext: zt,
    useCallback: function (e, t) {
      return (Qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: zt,
    useEffect: Vd,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), _l(4194308, 4, $p.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return _l(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _l(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Qt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Cv.bind(null, me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bd,
    useDebugValue: wc,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e);
    },
    useTransition: function () {
      var e = bd(!1),
        t = e[0];
      return (e = Ev.bind(null, e[1])), (Qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = me,
        i = Qt();
      if (he) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Ie === null)) throw Error(L(349));
        Cr & 30 || Np(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Vd(Tp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        zo(9, Lp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qt(),
        t = Ie.identifierPrefix;
      if (he) {
        var n = un,
          r = sn;
        (n = (r & ~(1 << (32 - At(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _o++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = kv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _v = {
    readContext: zt,
    useCallback: Up,
    useContext: zt,
    useEffect: yc,
    useImperativeHandle: Ap,
    useInsertionEffect: Fp,
    useLayoutEffect: Ip,
    useMemo: Bp,
    useReducer: hs,
    useRef: Mp,
    useState: function () {
      return hs(jo);
    },
    useDebugValue: wc,
    useDeferredValue: function (e) {
      var t = Nt();
      return Hp(t, ze.memoizedState, e);
    },
    useTransition: function () {
      var e = hs(jo)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: jp,
    useSyncExternalStore: zp,
    useId: Wp,
    unstable_isNewReconciler: !1,
  },
  jv = {
    readContext: zt,
    useCallback: Up,
    useContext: zt,
    useEffect: yc,
    useImperativeHandle: Ap,
    useInsertionEffect: Fp,
    useLayoutEffect: Ip,
    useMemo: Bp,
    useReducer: ps,
    useRef: Mp,
    useState: function () {
      return ps(jo);
    },
    useDebugValue: wc,
    useDeferredValue: function (e) {
      var t = Nt();
      return ze === null ? (t.memoizedState = e) : Hp(t, ze.memoizedState, e);
    },
    useTransition: function () {
      var e = ps(jo)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: jp,
    useSyncExternalStore: zp,
    useId: Wp,
    unstable_isNewReconciler: !1,
  };
function ki(e, t) {
  try {
    var n = "",
      r = t;
    do (n += n1(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ms(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function su(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zv = typeof WeakMap == "function" ? WeakMap : Map;
function Kp(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      oa || ((oa = !0), (yu = r)), su(e, t);
    }),
    n
  );
}
function Gp(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        su(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        su(e, t), typeof r != "function" && (bn === null ? (bn = new Set([this])) : bn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
      }),
    n
  );
}
function Qd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Wv.bind(null, e, t, n)), t.then(e, e));
}
function Kd(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = cn(-1, 1)), (t.tag = 2), Wn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Nv = vn.ReactCurrentOwner,
  rt = !1;
function qe(e, t, n, r) {
  t.child = e === null ? Rp(t, null, n, r) : xi(t, e.child, n, r);
}
function Yd(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    ri(t, i),
    (r = vc(e, t, n, r, o, i)),
    (n = gc()),
    e !== null && !rt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), mn(e, t, i))
      : (he && n && ic(t), (t.flags |= 1), qe(e, t, r, i), t.child)
  );
}
function qd(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !_c(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Yp(e, t, o, r, i))
      : ((e = Ll(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : So), n(l, r) && e.ref === t.ref)) return mn(e, t, i);
  }
  return (t.flags |= 1), (e = Qn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Yp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (So(o, r) && e.ref === t.ref)
      if (((rt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (rt = !0);
      else return (t.lanes = e.lanes), mn(e, t, i);
  }
  return uu(e, t, n, r, i);
}
function qp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ae(Yr, pt), (pt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ae(Yr, pt),
          (pt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ae(Yr, pt),
        (pt |= r);
    }
  else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), ae(Yr, pt), (pt |= r);
  return qe(e, t, i, n), t.child;
}
function Xp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function uu(e, t, n, r, i) {
  var o = at(n) ? kr : Ye.current;
  return (
    (o = yi(t, o)),
    ri(t, i),
    (n = vc(e, t, n, r, o, i)),
    (r = gc()),
    e !== null && !rt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), mn(e, t, i))
      : (he && r && ic(t), (t.flags |= 1), qe(e, t, n, i), t.child)
  );
}
function Xd(e, t, n, r, i) {
  if (at(n)) {
    var o = !0;
    Yl(t);
  } else o = !1;
  if ((ri(t, i), t.stateNode === null)) jl(e, t), Cp(t, n, r), au(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = zt(u)) : ((u = at(n) ? kr : Ye.current), (u = yi(t, u)));
    var c = n.getDerivedStateFromProps,
      m = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Hd(t, l, r, u)),
      (_n = !1);
    var h = t.memoizedState;
    (l.state = h),
      ea(t, r, l, i),
      (s = t.memoizedState),
      a !== r || h !== s || lt.current || _n
        ? (typeof c == "function" && (lu(t, n, c, r), (s = t.memoizedState)),
          (a = _n || Bd(t, n, a, r, h, s, u))
            ? (m ||
                (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      kp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ot(t.type, a)),
      (l.props = u),
      (m = t.pendingProps),
      (h = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null ? (s = zt(s)) : ((s = at(n) ? kr : Ye.current), (s = yi(t, s)));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((a !== m || h !== s) && Hd(t, l, r, s)),
      (_n = !1),
      (h = t.memoizedState),
      (l.state = h),
      ea(t, r, l, i);
    var w = t.memoizedState;
    a !== m || h !== w || lt.current || _n
      ? (typeof g == "function" && (lu(t, n, g, r), (w = t.memoizedState)),
        (u = _n || Bd(t, n, u, r, h, w, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, s),
              typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return cu(e, t, n, r, o, i);
}
function cu(e, t, n, r, i, o) {
  Xp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Fd(t, n, !1), mn(e, t, o);
  (r = t.stateNode), (Nv.current = t);
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = xi(t, e.child, null, o)), (t.child = xi(t, null, a, o))) : qe(e, t, a, o),
    (t.memoizedState = r.state),
    i && Fd(t, n, !0),
    t.child
  );
}
function Zp(e) {
  var t = e.stateNode;
  t.pendingContext ? Md(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Md(e, t.context, !1),
    fc(e, t.containerInfo);
}
function Zd(e, t, n, r, i) {
  return wi(), lc(i), (t.flags |= 256), qe(e, t, n, r), t.child;
}
var du = { dehydrated: null, treeContext: null, retryLane: 0 };
function fu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jp(e, t, n) {
  var r = t.pendingProps,
    i = pe.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    ae(pe, i & 1),
    e === null)
  )
    return (
      iu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = l)) : (o = Pa(l, r, 0, null)),
              (e = wr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = fu(n)),
              (t.memoizedState = du),
              e)
            : xc(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return Lv(e, t, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = Qn(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Qn(a, o)) : ((o = wr(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? fu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = du),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Qn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function xc(e, t) {
  return (t = Pa({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function hl(e, t, n, r) {
  return (
    r !== null && lc(r),
    xi(t, e.child, null, n),
    (e = xc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Lv(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ms(Error(L(422)))), hl(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Pa({ mode: "visible", children: r.children }, i, 0, null)),
        (o = wr(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && xi(t, e.child, null, l),
        (t.child.memoizedState = fu(l)),
        (t.memoizedState = du),
        o);
  if (!(t.mode & 1)) return hl(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(L(419))), (r = ms(o, r, void 0)), hl(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), rt || a)) {
    if (((r = Ie), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 && i !== o.retryLane && ((o.retryLane = i), pn(e, i), Ut(r, e, i, -1));
    }
    return Rc(), (r = ms(Error(L(421)))), hl(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = bv.bind(null, e)), (i._reactRetry = t), null)
    : ((e = o.treeContext),
      (mt = Hn(i.nextSibling)),
      (vt = t),
      (he = !0),
      ($t = null),
      e !== null && ((Pt[Rt++] = sn), (Pt[Rt++] = un), (Pt[Rt++] = Er), (sn = e.id), (un = e.overflow), (Er = t)),
      (t = xc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Jd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ou(e.return, t, n);
}
function vs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function em(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((qe(e, t, r.children, n), (r = pe.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Jd(e, n, t);
        else if (e.tag === 19) Jd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ae(pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && ta(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          vs(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ta(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        vs(t, !0, n, null, o);
        break;
      case "together":
        vs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function jl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mn(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Pr |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (e = t.child, n = Qn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Qn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Tv(e, t, n) {
  switch (t.tag) {
    case 3:
      Zp(t), wi();
      break;
    case 5:
      _p(t);
      break;
    case 1:
      at(t.type) && Yl(t);
      break;
    case 4:
      fc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ae(Zl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ae(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Jp(e, t, n)
          : (ae(pe, pe.current & 1), (e = mn(e, t, n)), e !== null ? e.sibling : null);
      ae(pe, pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return em(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ae(pe, pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), qp(e, t, n);
  }
  return mn(e, t, n);
}
var tm, hu, nm, rm;
tm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
hu = function () {};
nm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), cr(Jt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ms(e, i)), (r = Ms(e, r)), (o = []);
        break;
      case "select":
        (i = ve({}, i, { value: void 0 })), (r = ve({}, r, { value: void 0 })), (o = []);
        break;
      case "textarea":
        (i = $s(e, i)), (r = $s(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kl);
    }
    Us(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (po.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && s !== a && (s != null || a != null)))
        if (u === "style")
          if (a) {
            for (l in a) !a.hasOwnProperty(l) || (s && s.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ""));
            for (l in s) s.hasOwnProperty(l) && a[l] !== s[l] && (n || (n = {}), (n[l] = s[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") || (o = o || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (po.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && se("scroll", e), o || a === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
rm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function bi(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ov(e, t, n) {
  var r = t.pendingProps;
  switch ((oc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Qe(t), null;
    case 1:
      return at(t.type) && Gl(), Qe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Si(),
        ce(lt),
        ce(Ye),
        pc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $t !== null && (Su($t), ($t = null)))),
        hu(e, t),
        Qe(t),
        null
      );
    case 5:
      hc(t);
      var i = cr(Ro.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        nm(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Qe(t), null;
        }
        if (((e = cr(Jt.current)), dl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Xt] = t), (r[Co] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < eo.length; i++) se(eo[i], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              sd(r, o), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }), se("invalid", r);
              break;
            case "textarea":
              cd(r, o), se("invalid", r);
          }
          Us(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 && cl(r.textContent, a, e), (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 && cl(r.textContent, a, e), (i = ["children", "" + a]))
                : po.hasOwnProperty(l) && a != null && l === "onScroll" && se("scroll", r);
            }
          switch (n) {
            case "input":
              nl(r), ud(r, o, !0);
              break;
            case "textarea":
              nl(r), dd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Kl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Nh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Xt] = t),
            (e[Co] = r),
            tm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Bs(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < eo.length; i++) se(eo[i], e);
                i = r;
                break;
              case "source":
                se("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (i = r);
                break;
              case "details":
                se("toggle", e), (i = r);
                break;
              case "input":
                sd(e, r), (i = Ms(e, r)), se("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = ve({}, r, { value: void 0 })), se("invalid", e);
                break;
              case "textarea":
                cd(e, r), (i = $s(e, r)), se("invalid", e);
                break;
              default:
                i = r;
            }
            Us(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? Oh(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Lh(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && mo(e, s)
                    : typeof s == "number" && mo(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (po.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && se("scroll", e)
                      : s != null && bu(e, o, s, l));
              }
            switch (n) {
              case "input":
                nl(e), ud(e, r, !1);
                break;
              case "textarea":
                nl(e), dd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Jr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && Jr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Kl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Qe(t), null;
    case 6:
      if (e && t.stateNode != null) rm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = cr(Ro.current)), cr(Jt.current), dl(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[Xt] = t), (o = r.nodeValue !== n) && ((e = vt), e !== null))
          )
            switch (e.tag) {
              case 3:
                cl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && cl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Xt] = t), (t.stateNode = r);
      }
      return Qe(t), null;
    case 13:
      if (
        (ce(pe), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && mt !== null && t.mode & 1 && !(t.flags & 128)) xp(), wi(), (t.flags |= 98560), (o = !1);
        else if (((o = dl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(L(317));
            o[Xt] = t;
          } else wi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Qe(t), (o = !1);
        } else $t !== null && (Su($t), ($t = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || pe.current & 1 ? Ne === 0 && (Ne = 3) : Rc())),
          t.updateQueue !== null && (t.flags |= 4),
          Qe(t),
          null);
    case 4:
      return Si(), hu(e, t), e === null && ko(t.stateNode.containerInfo), Qe(t), null;
    case 10:
      return uc(t.type._context), Qe(t), null;
    case 17:
      return at(t.type) && Gl(), Qe(t), null;
    case 19:
      if ((ce(pe), (o = t.memoizedState), o === null)) return Qe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) bi(o, !1);
        else {
          if (Ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = ta(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    bi(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return ae(pe, (pe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && Pe() > Ei && ((t.flags |= 128), (r = !0), bi(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ta(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              bi(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !he)
            )
              return Qe(t), null;
          } else
            2 * Pe() - o.renderingStartTime > Ei &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), bi(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last), n !== null ? (n.sibling = l) : (t.child = l), (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Pe()),
          (t.sibling = null),
          (n = pe.current),
          ae(pe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Qe(t), null);
    case 22:
    case 23:
      return (
        Pc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? pt & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Dv(e, t) {
  switch ((oc(t), t.tag)) {
    case 1:
      return at(t.type) && Gl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Si(), ce(lt), ce(Ye), pc(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return hc(t), null;
    case 13:
      if ((ce(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(L(340));
        wi();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return ce(pe), null;
    case 4:
      return Si(), null;
    case 10:
      return uc(t.type._context), null;
    case 22:
    case 23:
      return Pc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pl = !1,
  Ge = !1,
  Mv = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Gr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function pu(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var ef = !1;
function Fv(e, t) {
  if (((Xs = bl), (e = ap()), rc(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              m !== n || (i !== 0 && m.nodeType !== 3) || (a = l + i),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = l + r),
                m.nodeType === 3 && (l += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (h = m), (m = g);
            for (;;) {
              if (m === e) break t;
              if ((h === n && ++u === i && (a = l), h === o && ++c === r && (s = l), (g = m.nextSibling) !== null))
                break;
              (m = h), (h = m.parentNode);
            }
            m = g;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Zs = { focusedElem: e, selectionRange: n }, bl = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    k = w.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Ot(t.type, S), k);
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (E) {
          we(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (w = ef), (ef = !1), w;
}
function so(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && pu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ea(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function mu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function im(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), im(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[Xt], delete t[Co], delete t[tu], delete t[yv], delete t[wv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function om(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || om(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function vu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Kl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vu(e, t, n), e = e.sibling; e !== null; ) vu(e, t, n), (e = e.sibling);
}
function gu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gu(e, t, n), e = e.sibling; e !== null; ) gu(e, t, n), (e = e.sibling);
}
var Ae = null,
  Ft = !1;
function kn(e, t, n) {
  for (n = n.child; n !== null; ) lm(e, t, n), (n = n.sibling);
}
function lm(e, t, n) {
  if (Zt && typeof Zt.onCommitFiberUnmount == "function")
    try {
      Zt.onCommitFiberUnmount(ma, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ge || Gr(n, t);
    case 6:
      var r = Ae,
        i = Ft;
      (Ae = null),
        kn(e, t, n),
        (Ae = r),
        (Ft = i),
        Ae !== null &&
          (Ft
            ? ((e = Ae), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (Ft
          ? ((e = Ae), (n = n.stateNode), e.nodeType === 8 ? us(e.parentNode, n) : e.nodeType === 1 && us(e, n), wo(e))
          : us(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae), (i = Ft), (Ae = n.stateNode.containerInfo), (Ft = !0), kn(e, t, n), (Ae = r), (Ft = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ge && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag), l !== void 0 && (o & 2 || o & 4) && pu(n, t, l), (i = i.next);
        } while (i !== r);
      }
      kn(e, t, n);
      break;
    case 1:
      if (!Ge && (Gr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          we(n, t, a);
        }
      kn(e, t, n);
      break;
    case 21:
      kn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Ge = (r = Ge) || n.memoizedState !== null), kn(e, t, n), (Ge = r)) : kn(e, t, n);
      break;
    default:
      kn(e, t, n);
  }
}
function nf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Mv()),
      t.forEach(function (r) {
        var i = Vv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (Ft = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (Ft = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (Ft = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(L(160));
        lm(o, l, i), (Ae = null), (Ft = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        we(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) am(t, e), (t = t.sibling);
}
function am(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Tt(t, e), Vt(e), r & 4)) {
        try {
          so(3, e, e.return), Ea(3, e);
        } catch (S) {
          we(e, e.return, S);
        }
        try {
          so(5, e, e.return);
        } catch (S) {
          we(e, e.return, S);
        }
      }
      break;
    case 1:
      Tt(t, e), Vt(e), r & 512 && n !== null && Gr(n, n.return);
      break;
    case 5:
      if ((Tt(t, e), Vt(e), r & 512 && n !== null && Gr(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          mo(i, "");
        } catch (S) {
          we(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && jh(i, o), Bs(a, l);
            var u = Bs(a, o);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                m = s[l + 1];
              c === "style"
                ? Oh(i, m)
                : c === "dangerouslySetInnerHTML"
                ? Lh(i, m)
                : c === "children"
                ? mo(i, m)
                : bu(i, c, m, u);
            }
            switch (a) {
              case "input":
                Fs(i, o);
                break;
              case "textarea":
                zh(i, o);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Jr(i, !!o.multiple, g, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Jr(i, !!o.multiple, o.defaultValue, !0)
                      : Jr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Co] = o;
          } catch (S) {
            we(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Tt(t, e), Vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (S) {
          we(e, e.return, S);
        }
      }
      break;
    case 3:
      if ((Tt(t, e), Vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          wo(t.containerInfo);
        } catch (S) {
          we(e, e.return, S);
        }
      break;
    case 4:
      Tt(t, e), Vt(e);
      break;
    case 13:
      Tt(t, e),
        Vt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (Ec = Pe())),
        r & 4 && nf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ge = (u = Ge) || c), Tt(t, e), (Ge = u)) : Tt(t, e),
        Vt(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (M = e, c = e.child; c !== null; ) {
            for (m = M = c; M !== null; ) {
              switch (((h = M), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  so(4, h, h.return);
                  break;
                case 1:
                  Gr(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r), (w.props = t.memoizedProps), (w.state = t.memoizedState), w.componentWillUnmount();
                    } catch (S) {
                      we(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Gr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    of(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (M = g)) : of(m);
            }
            c = c.sibling;
          }
        e: for (c = null, m = e; ; ) {
          if (m.tag === 5) {
            if (c === null) {
              c = m;
              try {
                (i = m.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = m.stateNode),
                      (s = m.memoizedProps.style),
                      (l = s != null && s.hasOwnProperty("display") ? s.display : null),
                      (a.style.display = Th("display", l)));
              } catch (S) {
                we(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (c === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (S) {
                we(e, e.return, S);
              }
          } else if (((m.tag !== 22 && m.tag !== 23) || m.memoizedState === null || m === e) && m.child !== null) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            c === m && (c = null), (m = m.return);
          }
          c === m && (c = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Tt(t, e), Vt(e), r & 4 && nf(e);
      break;
    case 21:
      break;
    default:
      Tt(t, e), Vt(e);
  }
}
function Vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (om(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (mo(i, ""), (r.flags &= -33));
          var o = tf(e);
          gu(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = tf(e);
          vu(e, a, l);
          break;
        default:
          throw Error(L(161));
      }
    } catch (s) {
      we(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Iv(e, t, n) {
  (M = e), sm(e);
}
function sm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || pl;
      if (!l) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || Ge;
        a = pl;
        var u = Ge;
        if (((pl = l), (Ge = s) && !u))
          for (M = i; M !== null; )
            (l = M),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null ? lf(i) : s !== null ? ((s.return = l), (M = s)) : lf(i);
        for (; o !== null; ) (M = o), sm(o), (o = o.sibling);
        (M = i), (pl = a), (Ge = u);
      }
      rf(e);
    } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (M = o)) : rf(e);
  }
}
function rf(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || Ea(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Ot(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Ud(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ud(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var m = c.dehydrated;
                    m !== null && wo(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Ge || (t.flags & 512 && mu(t));
      } catch (h) {
        we(t, t.return, h);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function of(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function lf(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ea(4, t);
          } catch (s) {
            we(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              we(t, i, s);
            }
          }
          var o = t.return;
          try {
            mu(t);
          } catch (s) {
            we(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            mu(t);
          } catch (s) {
            we(t, l, s);
          }
      }
    } catch (s) {
      we(t, t.return, s);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var $v = Math.ceil,
  ia = vn.ReactCurrentDispatcher,
  Sc = vn.ReactCurrentOwner,
  jt = vn.ReactCurrentBatchConfig,
  te = 0,
  Ie = null,
  _e = null,
  Be = 0,
  pt = 0,
  Yr = Zn(0),
  Ne = 0,
  No = null,
  Pr = 0,
  Ca = 0,
  kc = 0,
  uo = null,
  nt = null,
  Ec = 0,
  Ei = 1 / 0,
  nn = null,
  oa = !1,
  yu = null,
  bn = null,
  ml = !1,
  $n = null,
  la = 0,
  co = 0,
  wu = null,
  zl = -1,
  Nl = 0;
function Xe() {
  return te & 6 ? Pe() : zl !== -1 ? zl : (zl = Pe());
}
function Vn(e) {
  return e.mode & 1
    ? te & 2 && Be !== 0
      ? Be & -Be
      : Sv.transition !== null
      ? (Nl === 0 && (Nl = Vh()), Nl)
      : ((e = re), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Zh(e.type))), e)
    : 1;
}
function Ut(e, t, n, r) {
  if (50 < co) throw ((co = 0), (wu = null), Error(L(185)));
  Uo(e, n, r),
    (!(te & 2) || e !== Ie) &&
      (e === Ie && (!(te & 2) && (Ca |= n), Ne === 4 && zn(e, Be)),
      st(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((Ei = Pe() + 500), xa && Jn()));
}
function st(e, t) {
  var n = e.callbackNode;
  S1(e, t);
  var r = Wl(e, e === Ie ? Be : 0);
  if (r === 0) n !== null && pd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pd(n), t === 1))
      e.tag === 0 ? xv(af.bind(null, e)) : gp(af.bind(null, e)),
        vv(function () {
          !(te & 6) && Jn();
        }),
        (n = null);
    else {
      switch (Qh(r)) {
        case 1:
          n = Yu;
          break;
        case 4:
          n = Wh;
          break;
        case 16:
          n = Hl;
          break;
        case 536870912:
          n = bh;
          break;
        default:
          n = Hl;
      }
      n = vm(n, um.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function um(e, t) {
  if (((zl = -1), (Nl = 0), te & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (ii() && e.callbackNode !== n) return null;
  var r = Wl(e, e === Ie ? Be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = aa(e, r);
  else {
    t = r;
    var i = te;
    te |= 2;
    var o = dm();
    (Ie !== e || Be !== t) && ((nn = null), (Ei = Pe() + 500), yr(e, t));
    do
      try {
        Bv();
        break;
      } catch (a) {
        cm(e, a);
      }
    while (!0);
    sc(), (ia.current = o), (te = i), _e !== null ? (t = 0) : ((Ie = null), (Be = 0), (t = Ne));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = Qs(e)), i !== 0 && ((r = i), (t = xu(e, i)))), t === 1))
      throw ((n = No), yr(e, 0), zn(e, r), st(e, Pe()), n);
    if (t === 6) zn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Av(i) &&
          ((t = aa(e, r)), t === 2 && ((o = Qs(e)), o !== 0 && ((r = o), (t = xu(e, o)))), t === 1))
      )
        throw ((n = No), yr(e, 0), zn(e, r), st(e, Pe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          lr(e, nt, nn);
          break;
        case 3:
          if ((zn(e, r), (r & 130023424) === r && ((t = Ec + 500 - Pe()), 10 < t))) {
            if (Wl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = eu(lr.bind(null, e, nt, nn), t);
            break;
          }
          lr(e, nt, nn);
          break;
        case 4:
          if ((zn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - At(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * $v(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = eu(lr.bind(null, e, nt, nn), r);
            break;
          }
          lr(e, nt, nn);
          break;
        case 5:
          lr(e, nt, nn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return st(e, Pe()), e.callbackNode === n ? um.bind(null, e) : null;
}
function xu(e, t) {
  var n = uo;
  return (
    e.current.memoizedState.isDehydrated && (yr(e, t).flags |= 256),
    (e = aa(e, t)),
    e !== 2 && ((t = nt), (nt = n), t !== null && Su(t)),
    e
  );
}
function Su(e) {
  nt === null ? (nt = e) : nt.push.apply(nt, e);
}
function Av(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ht(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function zn(e, t) {
  for (t &= ~kc, t &= ~Ca, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - At(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function af(e) {
  if (te & 6) throw Error(L(327));
  ii();
  var t = Wl(e, 0);
  if (!(t & 1)) return st(e, Pe()), null;
  var n = aa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qs(e);
    r !== 0 && ((t = r), (n = xu(e, r)));
  }
  if (n === 1) throw ((n = No), yr(e, 0), zn(e, t), st(e, Pe()), n);
  if (n === 6) throw Error(L(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), lr(e, nt, nn), st(e, Pe()), null;
}
function Cc(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    (te = n), te === 0 && ((Ei = Pe() + 500), xa && Jn());
  }
}
function Rr(e) {
  $n !== null && $n.tag === 0 && !(te & 6) && ii();
  var t = te;
  te |= 1;
  var n = jt.transition,
    r = re;
  try {
    if (((jt.transition = null), (re = 1), e)) return e();
  } finally {
    (re = r), (jt.transition = n), (te = t), !(te & 6) && Jn();
  }
}
function Pc() {
  (pt = Yr.current), ce(Yr);
}
function yr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), mv(n)), _e !== null))
    for (n = _e.return; n !== null; ) {
      var r = n;
      switch ((oc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Gl();
          break;
        case 3:
          Si(), ce(lt), ce(Ye), pc();
          break;
        case 5:
          hc(r);
          break;
        case 4:
          Si();
          break;
        case 13:
          ce(pe);
          break;
        case 19:
          ce(pe);
          break;
        case 10:
          uc(r.type._context);
          break;
        case 22:
        case 23:
          Pc();
      }
      n = n.return;
    }
  if (
    ((Ie = e),
    (_e = e = Qn(e.current, null)),
    (Be = pt = t),
    (Ne = 0),
    (No = null),
    (kc = Ca = Pr = 0),
    (nt = uo = null),
    ur !== null)
  ) {
    for (t = 0; t < ur.length; t++)
      if (((n = ur[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    ur = null;
  }
  return e;
}
function cm(e, t) {
  do {
    var n = _e;
    try {
      if ((sc(), (Rl.current = ra), na)) {
        for (var r = me.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        na = !1;
      }
      if (
        ((Cr = 0), (Me = ze = me = null), (ao = !1), (_o = 0), (Sc.current = null), n === null || n.return === null)
      ) {
        (Ne = 1), (No = t), (_e = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          s = t;
        if (((t = Be), (a.flags |= 32768), s !== null && typeof s == "object" && typeof s.then == "function")) {
          var u = s,
            c = a,
            m = c.tag;
          if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue), (c.memoizedState = h.memoizedState), (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Kd(l);
          if (g !== null) {
            (g.flags &= -257), Gd(g, l, a, o, t), g.mode & 1 && Qd(o, u, t), (t = g), (s = u);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Qd(o, u, t), Rc();
              break e;
            }
            s = Error(L(426));
          }
        } else if (he && a.mode & 1) {
          var k = Kd(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), Gd(k, l, a, o, t), lc(ki(s, a));
            break e;
          }
        }
        (o = s = ki(s, a)), Ne !== 4 && (Ne = 2), uo === null ? (uo = [o]) : uo.push(o), (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Kp(o, s, t);
              Ad(o, d);
              break e;
            case 1:
              a = s;
              var f = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (p !== null && typeof p.componentDidCatch == "function" && (bn === null || !bn.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = Gp(o, a, t);
                Ad(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hm(n);
    } catch (_) {
      (t = _), _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dm() {
  var e = ia.current;
  return (ia.current = ra), e === null ? ra : e;
}
function Rc() {
  (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4), Ie === null || (!(Pr & 268435455) && !(Ca & 268435455)) || zn(Ie, Be);
}
function aa(e, t) {
  var n = te;
  te |= 2;
  var r = dm();
  (Ie !== e || Be !== t) && ((nn = null), yr(e, t));
  do
    try {
      Uv();
      break;
    } catch (i) {
      cm(e, i);
    }
  while (!0);
  if ((sc(), (te = n), (ia.current = r), _e !== null)) throw Error(L(261));
  return (Ie = null), (Be = 0), Ne;
}
function Uv() {
  for (; _e !== null; ) fm(_e);
}
function Bv() {
  for (; _e !== null && !f1(); ) fm(_e);
}
function fm(e) {
  var t = mm(e.alternate, e, pt);
  (e.memoizedProps = e.pendingProps), t === null ? hm(e) : (_e = t), (Sc.current = null);
}
function hm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Dv(n, t)), n !== null)) {
        (n.flags &= 32767), (_e = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ne = 6), (_e = null);
        return;
      }
    } else if (((n = Ov(n, t, pt)), n !== null)) {
      _e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  Ne === 0 && (Ne = 5);
}
function lr(e, t, n) {
  var r = re,
    i = jt.transition;
  try {
    (jt.transition = null), (re = 1), Hv(e, t, n, r);
  } finally {
    (jt.transition = i), (re = r);
  }
  return null;
}
function Hv(e, t, n, r) {
  do ii();
  while ($n !== null);
  if (te & 6) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (k1(e, o),
    e === Ie && ((_e = Ie = null), (Be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ml ||
      ((ml = !0),
      vm(Hl, function () {
        return ii(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = jt.transition), (jt.transition = null);
    var l = re;
    re = 1;
    var a = te;
    (te |= 4),
      (Sc.current = null),
      Fv(e, n),
      am(n, e),
      sv(Zs),
      (bl = !!Xs),
      (Zs = Xs = null),
      (e.current = n),
      Iv(n),
      h1(),
      (te = a),
      (re = l),
      (jt.transition = o);
  } else e.current = n;
  if (
    (ml && ((ml = !1), ($n = e), (la = i)),
    (o = e.pendingLanes),
    o === 0 && (bn = null),
    v1(n.stateNode),
    st(e, Pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (oa) throw ((oa = !1), (e = yu), (yu = null), e);
  return (
    la & 1 && e.tag !== 0 && ii(),
    (o = e.pendingLanes),
    o & 1 ? (e === wu ? co++ : ((co = 0), (wu = e))) : (co = 0),
    Jn(),
    null
  );
}
function ii() {
  if ($n !== null) {
    var e = Qh(la),
      t = jt.transition,
      n = re;
    try {
      if (((jt.transition = null), (re = 16 > e ? 16 : e), $n === null)) var r = !1;
      else {
        if (((e = $n), ($n = null), (la = 0), te & 6)) throw Error(L(331));
        var i = te;
        for (te |= 4, M = e.current; M !== null; ) {
          var o = M,
            l = o.child;
          if (M.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      so(8, c, o);
                  }
                  var m = c.child;
                  if (m !== null) (m.return = c), (M = m);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var h = c.sibling,
                        g = c.return;
                      if ((im(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (M = h);
                        break;
                      }
                      M = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var k = S.sibling;
                    (S.sibling = null), (S = k);
                  } while (S !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (M = l);
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    so(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (M = d);
                break e;
              }
              M = o.return;
            }
        }
        var f = e.current;
        for (M = f; M !== null; ) {
          l = M;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (M = p);
          else
            e: for (l = f; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ea(9, a);
                  }
                } catch (_) {
                  we(a, a.return, _);
                }
              if (a === l) {
                M = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (M = E);
                break e;
              }
              M = a.return;
            }
        }
        if (((te = i), Jn(), Zt && typeof Zt.onPostCommitFiberRoot == "function"))
          try {
            Zt.onPostCommitFiberRoot(ma, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (re = n), (jt.transition = t);
    }
  }
  return !1;
}
function sf(e, t, n) {
  (t = ki(n, t)), (t = Kp(e, t, 1)), (e = Wn(e, t, 1)), (t = Xe()), e !== null && (Uo(e, 1, t), st(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) sf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (bn === null || !bn.has(r)))
        ) {
          (e = ki(n, e)), (e = Gp(t, e, 1)), (t = Wn(t, e, 1)), (e = Xe()), t !== null && (Uo(t, 1, e), st(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Wv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ie === e &&
      (Be & n) === n &&
      (Ne === 4 || (Ne === 3 && (Be & 130023424) === Be && 500 > Pe() - Ec) ? yr(e, 0) : (kc |= n)),
    st(e, t);
}
function pm(e, t) {
  t === 0 && (e.mode & 1 ? ((t = ol), (ol <<= 1), !(ol & 130023424) && (ol = 4194304)) : (t = 1));
  var n = Xe();
  (e = pn(e, t)), e !== null && (Uo(e, t, n), st(e, n));
}
function bv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), pm(e, n);
}
function Vv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), pm(e, n);
}
var mm;
mm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || lt.current) rt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (rt = !1), Tv(e, t, n);
      rt = !!(e.flags & 131072);
    }
  else (rt = !1), he && t.flags & 1048576 && yp(t, Xl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      jl(e, t), (e = t.pendingProps);
      var i = yi(t, Ye.current);
      ri(t, n), (i = vc(null, t, r, e, i, n));
      var o = gc();
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            at(r) ? ((o = !0), Yl(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            dc(t),
            (i.updater = Sa),
            (t.stateNode = i),
            (i._reactInternals = t),
            au(t, r, e, n),
            (t = cu(null, t, r, !0, o, n)))
          : ((t.tag = 0), he && o && ic(t), qe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (jl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Kv(r)),
          (e = Ot(r, e)),
          i)
        ) {
          case 0:
            t = uu(null, t, r, e, n);
            break e;
          case 1:
            t = Xd(null, t, r, e, n);
            break e;
          case 11:
            t = Yd(null, t, r, e, n);
            break e;
          case 14:
            t = qd(null, t, r, Ot(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ot(r, i)), uu(e, t, r, i, n);
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ot(r, i)), Xd(e, t, r, i, n);
    case 3:
      e: {
        if ((Zp(t), e === null)) throw Error(L(387));
        (r = t.pendingProps), (o = t.memoizedState), (i = o.element), kp(e, t), ea(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = ki(Error(L(423)), t)), (t = Zd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ki(Error(L(424)), t)), (t = Zd(e, t, r, n, i));
            break e;
          } else
            for (
              mt = Hn(t.stateNode.containerInfo.firstChild),
                vt = t,
                he = !0,
                $t = null,
                n = Rp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wi(), r === i)) {
            t = mn(e, t, n);
            break e;
          }
          qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _p(t),
        e === null && iu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Js(r, i) ? (l = null) : o !== null && Js(r, o) && (t.flags |= 32),
        Xp(e, t),
        qe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && iu(t), null;
    case 13:
      return Jp(e, t, n);
    case 4:
      return (
        fc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = xi(t, null, r, n)) : qe(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Ot(r, i)), Yd(e, t, r, i, n);
    case 7:
      return qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          ae(Zl, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Ht(o.value, l)) {
            if (o.children === i.children && !lt.current) {
              t = mn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = cn(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (s.next = s) : ((s.next = c.next), (c.next = s)), (u.pending = s);
                      }
                    }
                    (o.lanes |= n), (s = o.alternate), s !== null && (s.lanes |= n), ou(o.return, n, t), (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(L(341));
                (l.lanes |= n), (a = l.alternate), a !== null && (a.lanes |= n), ou(l, n, t), (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        qe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ri(t, n),
        (i = zt(i)),
        (r = r(i)),
        (t.flags |= 1),
        qe(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = Ot(r, t.pendingProps)), (i = Ot(r.type, i)), qd(e, t, r, i, n);
    case 15:
      return Yp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ot(r, i)),
        jl(e, t),
        (t.tag = 1),
        at(r) ? ((e = !0), Yl(t)) : (e = !1),
        ri(t, n),
        Cp(t, r, i),
        au(t, r, i, n),
        cu(null, t, r, !0, e, n)
      );
    case 19:
      return em(e, t, n);
    case 22:
      return qp(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function vm(e, t) {
  return Hh(e, t);
}
function Qv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _t(e, t, n, r) {
  return new Qv(e, t, n, r);
}
function _c(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Kv(e) {
  if (typeof e == "function") return _c(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Qu)) return 11;
    if (e === Ku) return 14;
  }
  return 2;
}
function Qn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _t(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ll(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) _c(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Ar:
        return wr(n.children, i, o, t);
      case Vu:
        (l = 8), (i |= 8);
        break;
      case Ls:
        return (e = _t(12, n, t, i | 2)), (e.elementType = Ls), (e.lanes = o), e;
      case Ts:
        return (e = _t(13, n, t, i)), (e.elementType = Ts), (e.lanes = o), e;
      case Os:
        return (e = _t(19, n, t, i)), (e.elementType = Os), (e.lanes = o), e;
      case Ph:
        return Pa(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Eh:
              l = 10;
              break e;
            case Ch:
              l = 9;
              break e;
            case Qu:
              l = 11;
              break e;
            case Ku:
              l = 14;
              break e;
            case Rn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (t = _t(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function wr(e, t, n, r) {
  return (e = _t(7, e, r, t)), (e.lanes = n), e;
}
function Pa(e, t, n, r) {
  return (e = _t(22, e, r, t)), (e.elementType = Ph), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function gs(e, t, n) {
  return (e = _t(6, e, null, t)), (e.lanes = n), e;
}
function ys(e, t, n) {
  return (
    (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function Gv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Za(0)),
    (this.expirationTimes = Za(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Za(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function jc(e, t, n, r, i, o, l, a, s) {
  return (
    (e = new Gv(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = _t(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    dc(o),
    e
  );
}
function Yv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: $r, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function gm(e) {
  if (!e) return Yn;
  e = e._reactInternals;
  e: {
    if (Tr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (at(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (at(n)) return vp(e, n, t);
  }
  return t;
}
function ym(e, t, n, r, i, o, l, a, s) {
  return (
    (e = jc(n, r, !0, e, i, o, l, a, s)),
    (e.context = gm(null)),
    (n = e.current),
    (r = Xe()),
    (i = Vn(n)),
    (o = cn(r, i)),
    (o.callback = t ?? null),
    Wn(n, o, i),
    (e.current.lanes = i),
    Uo(e, i, r),
    st(e, r),
    e
  );
}
function Ra(e, t, n, r) {
  var i = t.current,
    o = Xe(),
    l = Vn(i);
  return (
    (n = gm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = cn(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Wn(i, t, l)),
    e !== null && (Ut(e, i, l, o), Pl(e, i, l)),
    l
  );
}
function sa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function uf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zc(e, t) {
  uf(e, t), (e = e.alternate) && uf(e, t);
}
function qv() {
  return null;
}
var wm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nc(e) {
  this._internalRoot = e;
}
_a.prototype.render = Nc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Ra(e, t, null, null);
};
_a.prototype.unmount = Nc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rr(function () {
      Ra(null, e, null, null);
    }),
      (t[hn] = null);
  }
};
function _a(e) {
  this._internalRoot = e;
}
_a.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Yh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jn.length && t !== 0 && t < jn[n].priority; n++);
    jn.splice(n, 0, e), n === 0 && Xh(e);
  }
};
function Lc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ja(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function cf() {}
function Xv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = sa(l);
        o.call(u);
      };
    }
    var l = ym(t, r, e, 0, null, !1, !1, "", cf);
    return (e._reactRootContainer = l), (e[hn] = l.current), ko(e.nodeType === 8 ? e.parentNode : e), Rr(), l;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = sa(s);
      a.call(u);
    };
  }
  var s = jc(e, 0, !1, null, null, !1, !1, "", cf);
  return (
    (e._reactRootContainer = s),
    (e[hn] = s.current),
    ko(e.nodeType === 8 ? e.parentNode : e),
    Rr(function () {
      Ra(t, s, n, r);
    }),
    s
  );
}
function za(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = sa(l);
        a.call(s);
      };
    }
    Ra(t, l, e, i);
  } else l = Xv(n, t, e, i, r);
  return sa(l);
}
Kh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ji(t.pendingLanes);
        n !== 0 && (qu(t, n | 1), st(t, Pe()), !(te & 6) && ((Ei = Pe() + 500), Jn()));
      }
      break;
    case 13:
      Rr(function () {
        var r = pn(e, 1);
        if (r !== null) {
          var i = Xe();
          Ut(r, e, 1, i);
        }
      }),
        zc(e, 1);
  }
};
Xu = function (e) {
  if (e.tag === 13) {
    var t = pn(e, 134217728);
    if (t !== null) {
      var n = Xe();
      Ut(t, e, 134217728, n);
    }
    zc(e, 134217728);
  }
};
Gh = function (e) {
  if (e.tag === 13) {
    var t = Vn(e),
      n = pn(e, t);
    if (n !== null) {
      var r = Xe();
      Ut(n, e, t, r);
    }
    zc(e, t);
  }
};
Yh = function () {
  return re;
};
qh = function (e, t) {
  var n = re;
  try {
    return (re = e), t();
  } finally {
    re = n;
  }
};
Ws = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Fs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = wa(r);
            if (!i) throw Error(L(90));
            _h(r), Fs(r, i);
          }
        }
      }
      break;
    case "textarea":
      zh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jr(e, !!n.multiple, t, !1);
  }
};
Fh = Cc;
Ih = Rr;
var Zv = { usingClientEntryPoint: !1, Events: [Ho, Wr, wa, Dh, Mh, Cc] },
  Vi = { findFiberByHostInstance: sr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  Jv = {
    bundleType: Vi.bundleType,
    version: Vi.version,
    rendererPackageName: Vi.rendererPackageName,
    rendererConfig: Vi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Uh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vi.findFiberByHostInstance || qv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber)
    try {
      (ma = vl.inject(Jv)), (Zt = vl);
    } catch {}
}
yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zv;
yt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lc(t)) throw Error(L(200));
  return Yv(e, t, null, n);
};
yt.createRoot = function (e, t) {
  if (!Lc(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = wm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = jc(e, 1, !1, null, null, n, !1, r, i)),
    (e[hn] = t.current),
    ko(e.nodeType === 8 ? e.parentNode : e),
    new Nc(t)
  );
};
yt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(L(188)) : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Uh(t)), (e = e === null ? null : e.stateNode), e;
};
yt.flushSync = function (e) {
  return Rr(e);
};
yt.hydrate = function (e, t, n) {
  if (!ja(t)) throw Error(L(200));
  return za(null, e, t, !0, n);
};
yt.hydrateRoot = function (e, t, n) {
  if (!Lc(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = wm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = ym(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[hn] = t.current),
    ko(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new _a(t);
};
yt.render = function (e, t, n) {
  if (!ja(t)) throw Error(L(200));
  return za(null, e, t, !1, n);
};
yt.unmountComponentAtNode = function (e) {
  if (!ja(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Rr(function () {
        za(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[hn] = null);
        });
      }),
      !0)
    : !1;
};
yt.unstable_batchedUpdates = Cc;
yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ja(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return za(e, t, n, !1, r);
};
yt.version = "18.2.0-next-9e3b772b8-20220608";
function xm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xm);
    } catch (e) {
      console.error(e);
    }
}
xm(), (yh.exports = yt);
var Tc = yh.exports;
const eg = ah(Tc),
  tg = lh({ __proto__: null, default: eg }, [Tc]);
var df = Tc;
(zs.createRoot = df.createRoot), (zs.hydrateRoot = df.hydrateRoot);
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xe() {
  return (
    (xe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xe.apply(this, arguments)
  );
}
var Ce;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ce || (Ce = {}));
const ff = "popstate";
function ng(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: a } = r.location;
    return Lo(
      "",
      { pathname: o, search: l, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : jr(i);
  }
  return ig(t, n, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function _r(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function rg() {
  return Math.random().toString(36).substr(2, 8);
}
function hf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Lo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    xe({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? gn(t) : t, {
      state: n,
      key: (t && t.key) || r || rg(),
    })
  );
}
function jr(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function gn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function ig(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    a = Ce.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), l.replaceState(xe({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function m() {
    a = Ce.Pop;
    let k = c(),
      d = k == null ? null : k - u;
    (u = k), s && s({ action: a, location: S.location, delta: d });
  }
  function h(k, d) {
    a = Ce.Push;
    let f = Lo(S.location, k, d);
    n && n(f, k), (u = c() + 1);
    let p = hf(f, u),
      E = S.createHref(f);
    try {
      l.pushState(p, "", E);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      i.location.assign(E);
    }
    o && s && s({ action: a, location: S.location, delta: 1 });
  }
  function g(k, d) {
    a = Ce.Replace;
    let f = Lo(S.location, k, d);
    n && n(f, k), (u = c());
    let p = hf(f, u),
      E = S.createHref(f);
    l.replaceState(p, "", E), o && s && s({ action: a, location: S.location, delta: 0 });
  }
  function w(k) {
    let d = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof k == "string" ? k : jr(k);
    return K(d, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, d);
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(i, l);
    },
    listen(k) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(ff, m),
        (s = k),
        () => {
          i.removeEventListener(ff, m), (s = null);
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: w,
    encodeLocation(k) {
      let d = w(k);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: h,
    replace: g,
    go(k) {
      return l.go(k);
    },
  };
  return S;
}
var ye;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(ye || (ye = {}));
const og = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function lg(e) {
  return e.index === !0;
}
function ku(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let l = [...n, o],
        a = typeof i.id == "string" ? i.id : l.join("-");
      if (
        (K(i.index !== !0 || !i.children, "Cannot specify children on an index route"),
        K(
          !r[a],
          'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`
        ),
        lg(i))
      ) {
        let s = xe({}, i, t(i), { id: a });
        return (r[a] = s), s;
      } else {
        let s = xe({}, i, t(i), { id: a, children: void 0 });
        return (r[a] = s), i.children && (s.children = ku(i.children, t, l, r)), s;
      }
    })
  );
}
function qr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? gn(t) : t,
    i = qn(r.pathname || "/", n);
  if (i == null) return null;
  let o = Sm(e);
  sg(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) l = gg(o[a], wg(i));
  return l;
}
function ag(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Sm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (K(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = dn([r, s.relativePath]),
      c = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (K(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
      ),
      Sm(o.children, t, c, u)),
      !(o.path == null && !o.index) && t.push({ path: u, score: mg(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, l) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
      else for (let s of km(o.path)) i(o, l, s);
    }),
    t
  );
}
function km(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = km(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function sg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : vg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ug = /^:\w+$/,
  cg = 3,
  dg = 2,
  fg = 1,
  hg = 10,
  pg = -2,
  pf = (e) => e === "*";
function mg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(pf) && (r += pg),
    t && (r += dg),
    n.filter((i) => !pf(i)).reduce((i, o) => i + (ug.test(o) ? cg : o === "" ? fg : hg), r)
  );
}
function vg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function gg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      s = l === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = Eu({ path: a.relativePath, caseSensitive: a.caseSensitive, end: s }, u);
    if (!c) return null;
    Object.assign(r, c.params);
    let m = a.route;
    o.push({ params: r, pathname: dn([i, c.pathname]), pathnameBase: Eg(dn([i, c.pathnameBase])), route: m }),
      c.pathnameBase !== "/" && (i = dn([i, c.pathnameBase]));
  }
  return o;
}
function Eu(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = yg(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, m) => {
      let { paramName: h, isOptional: g } = c;
      if (h === "*") {
        let S = a[m] || "";
        l = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[m];
      return g && !w ? (u[h] = void 0) : (u[h] = xg(w || "", h)), u;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function yg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    _r(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (l, a, s) => (r.push({ paramName: a, isOptional: s != null }), s ? "/?([^\\/]+)?" : "/([^\\/]+)")
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }), (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function wg(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      _r(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function xg(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      _r(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function qn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Sg(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? gn(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : kg(n, t)) : t, search: Cg(r), hash: Pg(i) };
}
function kg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ws(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Em(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Oc(e, t) {
  let n = Em(e);
  return t ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function Dc(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = gn(e))
    : ((i = xe({}, e)),
      K(!i.pathname || !i.pathname.includes("?"), ws("?", "pathname", "search", i)),
      K(!i.pathname || !i.pathname.includes("#"), ws("#", "pathname", "hash", i)),
      K(!i.search || !i.search.includes("#"), ws("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    a;
  if (l == null) a = n;
  else {
    let m = t.length - 1;
    if (!r && l.startsWith("..")) {
      let h = l.split("/");
      for (; h[0] === ".."; ) h.shift(), (m -= 1);
      i.pathname = h.join("/");
    }
    a = m >= 0 ? t[m] : "/";
  }
  let s = Sg(i, a),
    u = l && l !== "/" && l.endsWith("/"),
    c = (o || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const dn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Eg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Cg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Pg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Mc {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function Cm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Pm = ["post", "put", "patch", "delete"],
  Rg = new Set(Pm),
  _g = ["get", ...Pm],
  jg = new Set(_g),
  zg = new Set([301, 302, 303, 307, 308]),
  Ng = new Set([307, 308]),
  xs = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Lg = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Qi = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Rm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Tg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  _m = "remix-router-transitions";
function Og(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
    r = !n;
  K(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let x = e.detectErrorBoundary;
    i = (P) => ({ hasErrorBoundary: x(P) });
  } else i = Tg;
  let o = {},
    l = ku(e.routes, i, void 0, o),
    a,
    s = e.basename || "/",
    u = xe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    c = null,
    m = new Set(),
    h = null,
    g = null,
    w = null,
    S = e.hydrationData != null,
    k = qr(l, e.history.location, s),
    d = null;
  if (k == null) {
    let x = Ct(404, { pathname: e.history.location.pathname }),
      { matches: P, route: j } = kf(l);
    (k = P), (d = { [j.id]: x });
  }
  let f,
    p = k.some((x) => x.route.lazy),
    E = k.some((x) => x.route.loader);
  if (p) f = !1;
  else if (!E) f = !0;
  else if (u.v7_partialHydration) {
    let x = e.hydrationData ? e.hydrationData.loaderData : null,
      P = e.hydrationData ? e.hydrationData.errors : null;
    f = k.every(
      (j) =>
        j.route.loader &&
        j.route.loader.hydrate !== !0 &&
        ((x && x[j.route.id] !== void 0) || (P && P[j.route.id] !== void 0))
    );
  } else f = e.hydrationData != null;
  let _,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: k,
      initialized: f,
      navigation: xs,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = Ce.Pop,
    N = !1,
    T,
    $ = !1,
    Z = new Map(),
    Se = null,
    ge = !1,
    et = !1,
    yn = [],
    Wt = [],
    ie = new Map(),
    D = 0,
    I = -1,
    B = new Map(),
    Y = new Set(),
    J = new Map(),
    ut = new Map(),
    ke = new Set(),
    be = new Map(),
    Ee = new Map(),
    ct = !1;
  function nr() {
    if (
      ((c = e.history.listen((x) => {
        let { action: P, location: j, delta: O } = x;
        if (ct) {
          ct = !1;
          return;
        }
        _r(
          Ee.size === 0 || O != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let F = Jc({ currentLocation: v.location, nextLocation: j, historyAction: P });
        if (F && O != null) {
          (ct = !0),
            e.history.go(O * -1),
            qo(F, {
              state: "blocked",
              location: j,
              proceed() {
                qo(F, { state: "proceeding", proceed: void 0, reset: void 0, location: j }), e.history.go(O);
              },
              reset() {
                let G = new Map(v.blockers);
                G.set(F, Qi), Le({ blockers: G });
              },
            });
          return;
        }
        return rr(P, j);
      })),
      n)
    ) {
      bg(t, Z);
      let x = () => Vg(t, Z);
      t.addEventListener("pagehide", x), (Se = () => t.removeEventListener("pagehide", x));
    }
    return v.initialized || rr(Ce.Pop, v.location, { initialHydration: !0 }), _;
  }
  function en() {
    c && c(),
      Se && Se(),
      m.clear(),
      T && T.abort(),
      v.fetchers.forEach((x, P) => Yo(P)),
      v.blockers.forEach((x, P) => Zc(P));
  }
  function Mi(x) {
    return m.add(x), () => m.delete(x);
  }
  function Le(x, P) {
    P === void 0 && (P = {}), (v = xe({}, v, x));
    let j = [],
      O = [];
    u.v7_fetcherPersist &&
      v.fetchers.forEach((F, G) => {
        F.state === "idle" && (ke.has(G) ? O.push(G) : j.push(G));
      }),
      [...m].forEach((F) =>
        F(v, {
          deletedFetchers: O,
          unstable_viewTransitionOpts: P.viewTransitionOpts,
          unstable_flushSync: P.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist && (j.forEach((F) => v.fetchers.delete(F)), O.forEach((F) => Yo(F)));
  }
  function tt(x, P, j) {
    var O, F;
    let { flushSync: G } = j === void 0 ? {} : j,
      W =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        It(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((O = x.state) == null ? void 0 : O._isRedirect) !== !0,
      H;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (H = P.actionData)
        : (H = null)
      : W
      ? (H = v.actionData)
      : (H = null);
    let A = P.loaderData ? Sf(v.loaderData, P.loaderData, P.matches || [], P.errors) : v.loaderData,
      X = v.blockers;
    X.size > 0 && ((X = new Map(X)), X.forEach((le, $e) => X.set($e, Qi)));
    let Te =
      N === !0 ||
      (v.navigation.formMethod != null &&
        It(v.navigation.formMethod) &&
        ((F = x.state) == null ? void 0 : F._isRedirect) !== !0);
    a && ((l = a), (a = void 0)),
      ge ||
        C === Ce.Pop ||
        (C === Ce.Push ? e.history.push(x, x.state) : C === Ce.Replace && e.history.replace(x, x.state));
    let V;
    if (C === Ce.Pop) {
      let le = Z.get(v.location.pathname);
      le && le.has(x.pathname)
        ? (V = { currentLocation: v.location, nextLocation: x })
        : Z.has(x.pathname) && (V = { currentLocation: x, nextLocation: v.location });
    } else if ($) {
      let le = Z.get(v.location.pathname);
      le ? le.add(x.pathname) : ((le = new Set([x.pathname])), Z.set(v.location.pathname, le)),
        (V = { currentLocation: v.location, nextLocation: x });
    }
    Le(
      xe({}, P, {
        actionData: H,
        loaderData: A,
        historyAction: C,
        location: x,
        initialized: !0,
        navigation: xs,
        revalidation: "idle",
        restoreScrollPosition: td(x, P.matches || v.matches),
        preventScrollReset: Te,
        blockers: X,
      }),
      { viewTransitionOpts: V, flushSync: G === !0 }
    ),
      (C = Ce.Pop),
      (N = !1),
      ($ = !1),
      (ge = !1),
      (et = !1),
      (yn = []),
      (Wt = []);
  }
  async function Qc(x, P) {
    if (typeof x == "number") {
      e.history.go(x);
      return;
    }
    let j = Cu(
        v.location,
        v.matches,
        s,
        u.v7_prependBasename,
        x,
        u.v7_relativeSplatPath,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      { path: O, submission: F, error: G } = mf(u.v7_normalizeFormMethod, !1, j, P),
      W = v.location,
      H = Lo(v.location, O, P && P.state);
    H = xe({}, H, e.history.encodeLocation(H));
    let A = P && P.replace != null ? P.replace : void 0,
      X = Ce.Push;
    A === !0
      ? (X = Ce.Replace)
      : A === !1 ||
        (F != null && It(F.formMethod) && F.formAction === v.location.pathname + v.location.search && (X = Ce.Replace));
    let Te = P && "preventScrollReset" in P ? P.preventScrollReset === !0 : void 0,
      V = (P && P.unstable_flushSync) === !0,
      le = Jc({ currentLocation: W, nextLocation: H, historyAction: X });
    if (le) {
      qo(le, {
        state: "blocked",
        location: H,
        proceed() {
          qo(le, { state: "proceeding", proceed: void 0, reset: void 0, location: H }), Qc(x, P);
        },
        reset() {
          let $e = new Map(v.blockers);
          $e.set(le, Qi), Le({ blockers: $e });
        },
      });
      return;
    }
    return await rr(X, H, {
      submission: F,
      pendingError: G,
      preventScrollReset: Te,
      replace: P && P.replace,
      enableViewTransition: P && P.unstable_viewTransition,
      flushSync: V,
    });
  }
  function g0() {
    if ((Ua(), Le({ revalidation: "loading" }), v.navigation.state !== "submitting")) {
      if (v.navigation.state === "idle") {
        rr(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      rr(C || v.historyAction, v.navigation.location, { overrideNavigation: v.navigation });
    }
  }
  async function rr(x, P, j) {
    T && T.abort(),
      (T = null),
      (C = x),
      (ge = (j && j.startUninterruptedRevalidation) === !0),
      R0(v.location, v.matches),
      (N = (j && j.preventScrollReset) === !0),
      ($ = (j && j.enableViewTransition) === !0);
    let O = a || l,
      F = j && j.overrideNavigation,
      G = qr(O, P, s),
      W = (j && j.flushSync) === !0;
    if (!G) {
      let $e = Ct(404, { pathname: P.pathname }),
        { matches: xt, route: Oe } = kf(O);
      Ba(), tt(P, { matches: xt, loaderData: {}, errors: { [Oe.id]: $e } }, { flushSync: W });
      return;
    }
    if (v.initialized && !et && $g(v.location, P) && !(j && j.submission && It(j.submission.formMethod))) {
      tt(P, { matches: G }, { flushSync: W });
      return;
    }
    T = new AbortController();
    let H = Gi(e.history, P, T.signal, j && j.submission),
      A,
      X;
    if (j && j.pendingError) X = { [fo(G).route.id]: j.pendingError };
    else if (j && j.submission && It(j.submission.formMethod)) {
      let $e = await y0(H, P, j.submission, G, { replace: j.replace, flushSync: W });
      if ($e.shortCircuited) return;
      (A = $e.pendingActionData),
        (X = $e.pendingActionError),
        (F = Ss(P, j.submission)),
        (W = !1),
        (H = new Request(H.url, { signal: H.signal }));
    }
    let {
      shortCircuited: Te,
      loaderData: V,
      errors: le,
    } = await w0(
      H,
      P,
      G,
      F,
      j && j.submission,
      j && j.fetcherSubmission,
      j && j.replace,
      j && j.initialHydration === !0,
      W,
      A,
      X
    );
    Te || ((T = null), tt(P, xe({ matches: G }, A ? { actionData: A } : {}, { loaderData: V, errors: le })));
  }
  async function y0(x, P, j, O, F) {
    F === void 0 && (F = {}), Ua();
    let G = Hg(P, j);
    Le({ navigation: G }, { flushSync: F.flushSync === !0 });
    let W,
      H = Ru(O, P);
    if (!H.route.action && !H.route.lazy)
      W = { type: ye.error, error: Ct(405, { method: x.method, pathname: P.pathname, routeId: H.route.id }) };
    else if (((W = await Ki("action", x, H, O, o, i, s, u.v7_relativeSplatPath)), x.signal.aborted))
      return { shortCircuited: !0 };
    if (fr(W)) {
      let A;
      return (
        F && F.replace != null ? (A = F.replace) : (A = W.location === v.location.pathname + v.location.search),
        await Fi(v, W, { submission: j, replace: A }),
        { shortCircuited: !0 }
      );
    }
    if (Xr(W)) {
      let A = fo(O, H.route.id);
      return (
        (F && F.replace) !== !0 && (C = Ce.Push),
        { pendingActionData: {}, pendingActionError: { [A.route.id]: W.error } }
      );
    }
    if (dr(W)) throw Ct(400, { type: "defer-action" });
    return { pendingActionData: { [H.route.id]: W.data } };
  }
  async function w0(x, P, j, O, F, G, W, H, A, X, Te) {
    let V = O || Ss(P, F),
      le = F || G || Pf(V),
      $e = a || l,
      [xt, Oe] = vf(e.history, v, j, le, P, u.v7_partialHydration && H === !0, et, yn, Wt, ke, J, Y, $e, s, X, Te);
    if (
      (Ba((oe) => !(j && j.some((de) => de.route.id === oe)) || (xt && xt.some((de) => de.route.id === oe))),
      (I = ++D),
      xt.length === 0 && Oe.length === 0)
    ) {
      let oe = qc();
      return (
        tt(
          P,
          xe(
            { matches: j, loaderData: {}, errors: Te || null },
            X ? { actionData: X } : {},
            oe ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: A }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!ge && (!u.v7_partialHydration || !H)) {
      Oe.forEach((de) => {
        let bt = v.fetchers.get(de.key),
          Zo = Yi(void 0, bt ? bt.data : void 0);
        v.fetchers.set(de.key, Zo);
      });
      let oe = X || v.actionData;
      Le(
        xe(
          { navigation: V },
          oe ? (Object.keys(oe).length === 0 ? { actionData: null } : { actionData: oe }) : {},
          Oe.length > 0 ? { fetchers: new Map(v.fetchers) } : {}
        ),
        { flushSync: A }
      );
    }
    Oe.forEach((oe) => {
      ie.has(oe.key) && xn(oe.key), oe.controller && ie.set(oe.key, oe.controller);
    });
    let Or = () => Oe.forEach((oe) => xn(oe.key));
    T && T.signal.addEventListener("abort", Or);
    let { results: Ha, loaderResults: Dr, fetcherResults: Sn } = await Kc(v.matches, j, xt, Oe, x);
    if (x.signal.aborted) return { shortCircuited: !0 };
    T && T.signal.removeEventListener("abort", Or), Oe.forEach((oe) => ie.delete(oe.key));
    let ir = Ef(Ha);
    if (ir) {
      if (ir.idx >= xt.length) {
        let oe = Oe[ir.idx - xt.length].key;
        Y.add(oe);
      }
      return await Fi(v, ir.result, { replace: W }), { shortCircuited: !0 };
    }
    let { loaderData: Wa, errors: ba } = xf(v, j, xt, Dr, Te, Oe, Sn, be);
    be.forEach((oe, de) => {
      oe.subscribe((bt) => {
        (bt || oe.done) && be.delete(de);
      });
    });
    let Va = qc(),
      Mr = Xc(I),
      Xo = Va || Mr || Oe.length > 0;
    return xe({ loaderData: Wa, errors: ba }, Xo ? { fetchers: new Map(v.fetchers) } : {});
  }
  function x0(x, P, j, O) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ie.has(x) && xn(x);
    let F = (O && O.unstable_flushSync) === !0,
      G = a || l,
      W = Cu(
        v.location,
        v.matches,
        s,
        u.v7_prependBasename,
        j,
        u.v7_relativeSplatPath,
        P,
        O == null ? void 0 : O.relative
      ),
      H = qr(G, W, s);
    if (!H) {
      Ii(x, P, Ct(404, { pathname: W }), { flushSync: F });
      return;
    }
    let { path: A, submission: X, error: Te } = mf(u.v7_normalizeFormMethod, !0, W, O);
    if (Te) {
      Ii(x, P, Te, { flushSync: F });
      return;
    }
    let V = Ru(H, A);
    if (((N = (O && O.preventScrollReset) === !0), X && It(X.formMethod))) {
      S0(x, P, A, V, H, F, X);
      return;
    }
    J.set(x, { routeId: P, path: A }), k0(x, P, A, V, H, F, X);
  }
  async function S0(x, P, j, O, F, G, W) {
    if ((Ua(), J.delete(x), !O.route.action && !O.route.lazy)) {
      let de = Ct(405, { method: W.formMethod, pathname: j, routeId: P });
      Ii(x, P, de, { flushSync: G });
      return;
    }
    let H = v.fetchers.get(x);
    wn(x, Wg(W, H), { flushSync: G });
    let A = new AbortController(),
      X = Gi(e.history, j, A.signal, W);
    ie.set(x, A);
    let Te = D,
      V = await Ki("action", X, O, F, o, i, s, u.v7_relativeSplatPath);
    if (X.signal.aborted) {
      ie.get(x) === A && ie.delete(x);
      return;
    }
    if (u.v7_fetcherPersist && ke.has(x)) {
      if (fr(V) || Xr(V)) {
        wn(x, En(void 0));
        return;
      }
    } else {
      if (fr(V))
        if ((ie.delete(x), I > Te)) {
          wn(x, En(void 0));
          return;
        } else return Y.add(x), wn(x, Yi(W)), Fi(v, V, { fetcherSubmission: W });
      if (Xr(V)) {
        Ii(x, P, V.error);
        return;
      }
    }
    if (dr(V)) throw Ct(400, { type: "defer-action" });
    let le = v.navigation.location || v.location,
      $e = Gi(e.history, le, A.signal),
      xt = a || l,
      Oe = v.navigation.state !== "idle" ? qr(xt, v.navigation.location, s) : v.matches;
    K(Oe, "Didn't find any matches after fetcher action");
    let Or = ++D;
    B.set(x, Or);
    let Ha = Yi(W, V.data);
    v.fetchers.set(x, Ha);
    let [Dr, Sn] = vf(e.history, v, Oe, W, le, !1, et, yn, Wt, ke, J, Y, xt, s, { [O.route.id]: V.data }, void 0);
    Sn.filter((de) => de.key !== x).forEach((de) => {
      let bt = de.key,
        Zo = v.fetchers.get(bt),
        j0 = Yi(void 0, Zo ? Zo.data : void 0);
      v.fetchers.set(bt, j0), ie.has(bt) && xn(bt), de.controller && ie.set(bt, de.controller);
    }),
      Le({ fetchers: new Map(v.fetchers) });
    let ir = () => Sn.forEach((de) => xn(de.key));
    A.signal.addEventListener("abort", ir);
    let { results: Wa, loaderResults: ba, fetcherResults: Va } = await Kc(v.matches, Oe, Dr, Sn, $e);
    if (A.signal.aborted) return;
    A.signal.removeEventListener("abort", ir), B.delete(x), ie.delete(x), Sn.forEach((de) => ie.delete(de.key));
    let Mr = Ef(Wa);
    if (Mr) {
      if (Mr.idx >= Dr.length) {
        let de = Sn[Mr.idx - Dr.length].key;
        Y.add(de);
      }
      return Fi(v, Mr.result);
    }
    let { loaderData: Xo, errors: oe } = xf(v, v.matches, Dr, ba, void 0, Sn, Va, be);
    if (v.fetchers.has(x)) {
      let de = En(V.data);
      v.fetchers.set(x, de);
    }
    Xc(Or),
      v.navigation.state === "loading" && Or > I
        ? (K(C, "Expected pending action"),
          T && T.abort(),
          tt(v.navigation.location, { matches: Oe, loaderData: Xo, errors: oe, fetchers: new Map(v.fetchers) }))
        : (Le({ errors: oe, loaderData: Sf(v.loaderData, Xo, Oe, oe), fetchers: new Map(v.fetchers) }), (et = !1));
  }
  async function k0(x, P, j, O, F, G, W) {
    let H = v.fetchers.get(x);
    wn(x, Yi(W, H ? H.data : void 0), { flushSync: G });
    let A = new AbortController(),
      X = Gi(e.history, j, A.signal);
    ie.set(x, A);
    let Te = D,
      V = await Ki("loader", X, O, F, o, i, s, u.v7_relativeSplatPath);
    if ((dr(V) && (V = (await Nm(V, X.signal, !0)) || V), ie.get(x) === A && ie.delete(x), !X.signal.aborted)) {
      if (ke.has(x)) {
        wn(x, En(void 0));
        return;
      }
      if (fr(V))
        if (I > Te) {
          wn(x, En(void 0));
          return;
        } else {
          Y.add(x), await Fi(v, V);
          return;
        }
      if (Xr(V)) {
        Ii(x, P, V.error);
        return;
      }
      K(!dr(V), "Unhandled fetcher deferred data"), wn(x, En(V.data));
    }
  }
  async function Fi(x, P, j) {
    let { submission: O, fetcherSubmission: F, replace: G } = j === void 0 ? {} : j;
    P.revalidate && (et = !0);
    let W = Lo(x.location, P.location, { _isRedirect: !0 });
    if ((K(W, "Expected a location on the redirect navigation"), n)) {
      let le = !1;
      if (P.reloadDocument) le = !0;
      else if (Rm.test(P.location)) {
        const $e = e.history.createURL(P.location);
        le = $e.origin !== t.location.origin || qn($e.pathname, s) == null;
      }
      if (le) {
        G ? t.location.replace(P.location) : t.location.assign(P.location);
        return;
      }
    }
    T = null;
    let H = G === !0 ? Ce.Replace : Ce.Push,
      { formMethod: A, formAction: X, formEncType: Te } = x.navigation;
    !O && !F && A && X && Te && (O = Pf(x.navigation));
    let V = O || F;
    if (Ng.has(P.status) && V && It(V.formMethod))
      await rr(H, W, { submission: xe({}, V, { formAction: P.location }), preventScrollReset: N });
    else {
      let le = Ss(W, O);
      await rr(H, W, { overrideNavigation: le, fetcherSubmission: F, preventScrollReset: N });
    }
  }
  async function Kc(x, P, j, O, F) {
    let G = await Promise.all([
        ...j.map((A) => Ki("loader", F, A, P, o, i, s, u.v7_relativeSplatPath)),
        ...O.map((A) =>
          A.matches && A.match && A.controller
            ? Ki(
                "loader",
                Gi(e.history, A.path, A.controller.signal),
                A.match,
                A.matches,
                o,
                i,
                s,
                u.v7_relativeSplatPath
              )
            : { type: ye.error, error: Ct(404, { pathname: A.path }) }
        ),
      ]),
      W = G.slice(0, j.length),
      H = G.slice(j.length);
    return (
      await Promise.all([
        Cf(
          x,
          j,
          W,
          W.map(() => F.signal),
          !1,
          v.loaderData
        ),
        Cf(
          x,
          O.map((A) => A.match),
          H,
          O.map((A) => (A.controller ? A.controller.signal : null)),
          !0
        ),
      ]),
      { results: G, loaderResults: W, fetcherResults: H }
    );
  }
  function Ua() {
    (et = !0),
      yn.push(...Ba()),
      J.forEach((x, P) => {
        ie.has(P) && (Wt.push(P), xn(P));
      });
  }
  function wn(x, P, j) {
    j === void 0 && (j = {}),
      v.fetchers.set(x, P),
      Le({ fetchers: new Map(v.fetchers) }, { flushSync: (j && j.flushSync) === !0 });
  }
  function Ii(x, P, j, O) {
    O === void 0 && (O = {});
    let F = fo(v.matches, P);
    Yo(x), Le({ errors: { [F.route.id]: j }, fetchers: new Map(v.fetchers) }, { flushSync: (O && O.flushSync) === !0 });
  }
  function Gc(x) {
    return u.v7_fetcherPersist && (ut.set(x, (ut.get(x) || 0) + 1), ke.has(x) && ke.delete(x)), v.fetchers.get(x) || Lg;
  }
  function Yo(x) {
    let P = v.fetchers.get(x);
    ie.has(x) && !(P && P.state === "loading" && B.has(x)) && xn(x),
      J.delete(x),
      B.delete(x),
      Y.delete(x),
      ke.delete(x),
      v.fetchers.delete(x);
  }
  function E0(x) {
    if (u.v7_fetcherPersist) {
      let P = (ut.get(x) || 0) - 1;
      P <= 0 ? (ut.delete(x), ke.add(x)) : ut.set(x, P);
    } else Yo(x);
    Le({ fetchers: new Map(v.fetchers) });
  }
  function xn(x) {
    let P = ie.get(x);
    K(P, "Expected fetch controller: " + x), P.abort(), ie.delete(x);
  }
  function Yc(x) {
    for (let P of x) {
      let j = Gc(P),
        O = En(j.data);
      v.fetchers.set(P, O);
    }
  }
  function qc() {
    let x = [],
      P = !1;
    for (let j of Y) {
      let O = v.fetchers.get(j);
      K(O, "Expected fetcher: " + j), O.state === "loading" && (Y.delete(j), x.push(j), (P = !0));
    }
    return Yc(x), P;
  }
  function Xc(x) {
    let P = [];
    for (let [j, O] of B)
      if (O < x) {
        let F = v.fetchers.get(j);
        K(F, "Expected fetcher: " + j), F.state === "loading" && (xn(j), B.delete(j), P.push(j));
      }
    return Yc(P), P.length > 0;
  }
  function C0(x, P) {
    let j = v.blockers.get(x) || Qi;
    return Ee.get(x) !== P && Ee.set(x, P), j;
  }
  function Zc(x) {
    v.blockers.delete(x), Ee.delete(x);
  }
  function qo(x, P) {
    let j = v.blockers.get(x) || Qi;
    K(
      (j.state === "unblocked" && P.state === "blocked") ||
        (j.state === "blocked" && P.state === "blocked") ||
        (j.state === "blocked" && P.state === "proceeding") ||
        (j.state === "blocked" && P.state === "unblocked") ||
        (j.state === "proceeding" && P.state === "unblocked"),
      "Invalid blocker state transition: " + j.state + " -> " + P.state
    );
    let O = new Map(v.blockers);
    O.set(x, P), Le({ blockers: O });
  }
  function Jc(x) {
    let { currentLocation: P, nextLocation: j, historyAction: O } = x;
    if (Ee.size === 0) return;
    Ee.size > 1 && _r(!1, "A router only supports one blocker at a time");
    let F = Array.from(Ee.entries()),
      [G, W] = F[F.length - 1],
      H = v.blockers.get(G);
    if (!(H && H.state === "proceeding") && W({ currentLocation: P, nextLocation: j, historyAction: O })) return G;
  }
  function Ba(x) {
    let P = [];
    return (
      be.forEach((j, O) => {
        (!x || x(O)) && (j.cancel(), P.push(O), be.delete(O));
      }),
      P
    );
  }
  function P0(x, P, j) {
    if (((h = x), (w = P), (g = j || null), !S && v.navigation === xs)) {
      S = !0;
      let O = td(v.location, v.matches);
      O != null && Le({ restoreScrollPosition: O });
    }
    return () => {
      (h = null), (w = null), (g = null);
    };
  }
  function ed(x, P) {
    return (
      (g &&
        g(
          x,
          P.map((O) => ag(O, v.loaderData))
        )) ||
      x.key
    );
  }
  function R0(x, P) {
    if (h && w) {
      let j = ed(x, P);
      h[j] = w();
    }
  }
  function td(x, P) {
    if (h) {
      let j = ed(x, P),
        O = h[j];
      if (typeof O == "number") return O;
    }
    return null;
  }
  function _0(x) {
    (o = {}), (a = ku(x, i, void 0, o));
  }
  return (
    (_ = {
      get basename() {
        return s;
      },
      get future() {
        return u;
      },
      get state() {
        return v;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: nr,
      subscribe: Mi,
      enableScrollRestoration: P0,
      navigate: Qc,
      fetch: x0,
      revalidate: g0,
      createHref: (x) => e.history.createHref(x),
      encodeLocation: (x) => e.history.encodeLocation(x),
      getFetcher: Gc,
      deleteFetcher: E0,
      dispose: en,
      getBlocker: C0,
      deleteBlocker: Zc,
      _internalFetchControllers: ie,
      _internalActiveDeferreds: be,
      _internalSetRoutes: _0,
    }),
    _
  );
}
function Dg(e) {
  return e != null && (("formData" in e && e.formData != null) || ("body" in e && e.body !== void 0));
}
function Cu(e, t, n, r, i, o, l, a) {
  let s, u;
  if (l) {
    s = [];
    for (let m of t)
      if ((s.push(m), m.route.id === l)) {
        u = m;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let c = Dc(i || ".", Oc(s, o), qn(e.pathname, n) || e.pathname, a === "path");
  return (
    i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !Fc(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r && n !== "/" && (c.pathname = c.pathname === "/" ? n : dn([n, c.pathname])),
    jr(c)
  );
}
function mf(e, t, n, r) {
  if (!r || !Dg(r)) return { path: n };
  if (r.formMethod && !Bg(r.formMethod)) return { path: n, error: Ct(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Ct(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    l = e ? o.toUpperCase() : o.toLowerCase(),
    a = zm(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!It(l)) return i();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((g, w) => {
              let [S, k] = w;
              return (
                "" +
                g +
                S +
                "=" +
                k +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!It(l)) return i();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  K(typeof FormData == "function", "FormData is not available in this environment");
  let s, u;
  if (r.formData) (s = Pu(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Pu(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = wf(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = wf(s));
    } catch {
      return i();
    }
  let c = {
    formMethod: l,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (It(c.formMethod)) return { path: n, submission: c };
  let m = gn(n);
  return t && m.search && Fc(m.search) && s.append("index", ""), (m.search = "?" + s), { path: jr(m), submission: c };
}
function Mg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function vf(e, t, n, r, i, o, l, a, s, u, c, m, h, g, w, S) {
  let k = S ? Object.values(S)[0] : w ? Object.values(w)[0] : void 0,
    d = e.createURL(t.location),
    f = e.createURL(i),
    p = S ? Object.keys(S)[0] : void 0,
    _ = Mg(n, p).filter((C, N) => {
      let { route: T } = C;
      if (T.lazy) return !0;
      if (T.loader == null) return !1;
      if (o) return T.loader.hydrate ? !0 : t.loaderData[T.id] === void 0 && (!t.errors || t.errors[T.id] === void 0);
      if (Fg(t.loaderData, t.matches[N], C) || a.some((Se) => Se === C.route.id)) return !0;
      let $ = t.matches[N],
        Z = C;
      return gf(
        C,
        xe({ currentUrl: d, currentParams: $.params, nextUrl: f, nextParams: Z.params }, r, {
          actionResult: k,
          defaultShouldRevalidate:
            l || d.pathname + d.search === f.pathname + f.search || d.search !== f.search || jm($, Z),
        })
      );
    }),
    v = [];
  return (
    c.forEach((C, N) => {
      if (o || !n.some((ge) => ge.route.id === C.routeId) || u.has(N)) return;
      let T = qr(h, C.path, g);
      if (!T) {
        v.push({ key: N, routeId: C.routeId, path: C.path, matches: null, match: null, controller: null });
        return;
      }
      let $ = t.fetchers.get(N),
        Z = Ru(T, C.path),
        Se = !1;
      m.has(N)
        ? (Se = !1)
        : s.includes(N)
        ? (Se = !0)
        : $ && $.state !== "idle" && $.data === void 0
        ? (Se = l)
        : (Se = gf(
            Z,
            xe(
              {
                currentUrl: d,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: f,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: k, defaultShouldRevalidate: l }
            )
          )),
        Se &&
          v.push({ key: N, routeId: C.routeId, path: C.path, matches: T, match: Z, controller: new AbortController() });
    }),
    [_, v]
  );
}
function Fg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function jm(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]);
}
function gf(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function yf(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  K(i, "No route found in manifest");
  let o = {};
  for (let l in r) {
    let s = i[l] !== void 0 && l !== "hasErrorBoundary";
    _r(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !s && !og.has(l) && (o[l] = r[l]);
  }
  Object.assign(i, o), Object.assign(i, xe({}, t(i), { lazy: void 0 }));
}
async function Ki(e, t, n, r, i, o, l, a, s) {
  s === void 0 && (s = {});
  let u,
    c,
    m,
    h = (S) => {
      let k,
        d = new Promise((f, p) => (k = p));
      return (
        (m = () => k()),
        t.signal.addEventListener("abort", m),
        Promise.race([S({ request: t, params: n.params, context: s.requestContext }), d])
      );
    };
  try {
    let S = n.route[e];
    if (n.route.lazy)
      if (S) {
        let k,
          d = await Promise.all([
            h(S).catch((f) => {
              k = f;
            }),
            yf(n.route, o, i),
          ]);
        if (k) throw k;
        c = d[0];
      } else if ((await yf(n.route, o, i), (S = n.route[e]), S)) c = await h(S);
      else if (e === "action") {
        let k = new URL(t.url),
          d = k.pathname + k.search;
        throw Ct(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: ye.data, data: void 0 };
    else if (S) c = await h(S);
    else {
      let k = new URL(t.url),
        d = k.pathname + k.search;
      throw Ct(404, { pathname: d });
    }
    K(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") +
        "function. Please return a value or `null`."
    );
  } catch (S) {
    (u = ye.error), (c = S);
  } finally {
    m && t.signal.removeEventListener("abort", m);
  }
  if (Ug(c)) {
    let S = c.status;
    if (zg.has(S)) {
      let d = c.headers.get("Location");
      if ((K(d, "Redirects returned/thrown from loaders/actions must have a Location header"), !Rm.test(d)))
        d = Cu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, d, a);
      else if (!s.isStaticRequest) {
        let f = new URL(t.url),
          p = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          E = qn(p.pathname, l) != null;
        p.origin === f.origin && E && (d = p.pathname + p.search + p.hash);
      }
      if (s.isStaticRequest) throw (c.headers.set("Location", d), c);
      return {
        type: ye.redirect,
        status: S,
        location: d,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (s.isRouteRequest) throw { type: u === ye.error ? ye.error : ye.data, response: c };
    let k;
    try {
      let d = c.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d) ? (k = await c.json()) : (k = await c.text());
    } catch (d) {
      return { type: ye.error, error: d };
    }
    return u === ye.error
      ? { type: u, error: new Mc(S, c.statusText, k), headers: c.headers }
      : { type: ye.data, data: k, statusCode: c.status, headers: c.headers };
  }
  if (u === ye.error) return { type: u, error: c };
  if (Ag(c)) {
    var g, w;
    return {
      type: ye.deferred,
      deferredData: c,
      statusCode: (g = c.init) == null ? void 0 : g.status,
      headers: ((w = c.init) == null ? void 0 : w.headers) && new Headers(c.init.headers),
    };
  }
  return { type: ye.data, data: c };
}
function Gi(e, t, n, r) {
  let i = e.createURL(zm(t)).toString(),
    o = { signal: n };
  if (r && It(r.formMethod)) {
    let { formMethod: l, formEncType: a } = r;
    (o.method = l.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })), (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Pu(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function Pu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function wf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Ig(e, t, n, r, i) {
  let o = {},
    l = null,
    a,
    s = !1,
    u = {};
  return (
    n.forEach((c, m) => {
      let h = t[m].route.id;
      if ((K(!fr(c), "Cannot handle redirect results in processLoaderData"), Xr(c))) {
        let g = fo(e, h),
          w = c.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[g.route.id] == null && (l[g.route.id] = w),
          (o[h] = void 0),
          s || ((s = !0), (a = Cm(c.error) ? c.error.status : 500)),
          c.headers && (u[h] = c.headers);
      } else
        dr(c) ? (i.set(h, c.deferredData), (o[h] = c.deferredData.data)) : (o[h] = c.data),
          c.statusCode != null && c.statusCode !== 200 && !s && (a = c.statusCode),
          c.headers && (u[h] = c.headers);
    }),
    r && ((l = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: l, statusCode: a || 200, loaderHeaders: u }
  );
}
function xf(e, t, n, r, i, o, l, a) {
  let { loaderData: s, errors: u } = Ig(t, n, r, i, a);
  for (let c = 0; c < o.length; c++) {
    let { key: m, match: h, controller: g } = o[c];
    K(l !== void 0 && l[c] !== void 0, "Did not find corresponding fetcher result");
    let w = l[c];
    if (!(g && g.signal.aborted))
      if (Xr(w)) {
        let S = fo(e.matches, h == null ? void 0 : h.route.id);
        (u && u[S.route.id]) || (u = xe({}, u, { [S.route.id]: w.error })), e.fetchers.delete(m);
      } else if (fr(w)) K(!1, "Unhandled fetcher revalidation redirect");
      else if (dr(w)) K(!1, "Unhandled fetcher deferred data");
      else {
        let S = En(w.data);
        e.fetchers.set(m, S);
      }
  }
  return { loaderData: s, errors: u };
}
function Sf(e, t, n, r) {
  let i = xe({}, t);
  for (let o of n) {
    let l = o.route.id;
    if (
      (t.hasOwnProperty(l) ? t[l] !== void 0 && (i[l] = t[l]) : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return i;
}
function fo(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function kf(e) {
  let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
}
function Ct(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    l = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((l = "Bad Request"),
        i && n && r
          ? (a =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (a = "defer() is not supported in actions")
          : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((l = "Forbidden"), (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((l = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((l = "Method Not Allowed"),
        i && n && r
          ? (a =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Mc(e || 500, l, new Error(a), !0)
  );
}
function Ef(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (fr(n)) return { result: n, idx: t };
  }
}
function zm(e) {
  let t = typeof e == "string" ? gn(e) : e;
  return jr(xe({}, t, { hash: "" }));
}
function $g(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function dr(e) {
  return e.type === ye.deferred;
}
function Xr(e) {
  return e.type === ye.error;
}
function fr(e) {
  return (e && e.type) === ye.redirect;
}
function Ag(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Ug(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Bg(e) {
  return jg.has(e.toLowerCase());
}
function It(e) {
  return Rg.has(e.toLowerCase());
}
async function Cf(e, t, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      s = t[l];
    if (!s) continue;
    let u = e.find((m) => m.route.id === s.route.id),
      c = u != null && !jm(u, s) && (o && o[s.route.id]) !== void 0;
    if (dr(a) && (i || c)) {
      let m = r[l];
      K(m, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Nm(a, m, i).then((h) => {
          h && (n[l] = h || n[l]);
        });
    }
  }
}
async function Nm(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ye.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: ye.error, error: i };
      }
    return { type: ye.data, data: e.deferredData.data };
  }
}
function Fc(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ru(e, t) {
  let n = typeof t == "string" ? gn(t).search : t.search;
  if (e[e.length - 1].route.index && Fc(n || "")) return e[e.length - 1];
  let r = Em(e);
  return r[r.length - 1];
}
function Pf(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: i, formData: o, json: l } = e;
  if (!(!t || !n || !r)) {
    if (i != null) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: i };
    if (o != null) return { formMethod: t, formAction: n, formEncType: r, formData: o, json: void 0, text: void 0 };
    if (l !== void 0) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: l, text: void 0 };
  }
}
function Ss(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Hg(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Yi(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Wg(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function En(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function bg(e, t) {
  try {
    let n = e.sessionStorage.getItem(_m);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {})) o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function Vg(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(_m, JSON.stringify(n));
    } catch (r) {
      _r(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").");
    }
  }
}
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function To() {
  return (
    (To = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    To.apply(this, arguments)
  );
}
const bo = z.createContext(null),
  Ic = z.createContext(null),
  er = z.createContext(null),
  Na = z.createContext(null),
  tr = z.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Lm = z.createContext(null);
function Qg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Vo() || K(!1);
  let { basename: r, navigator: i } = z.useContext(er),
    { hash: o, pathname: l, search: a } = La(e, { relative: n }),
    s = l;
  return r !== "/" && (s = l === "/" ? r : dn([r, l])), i.createHref({ pathname: s, search: a, hash: o });
}
function Vo() {
  return z.useContext(Na) != null;
}
function Qo() {
  return Vo() || K(!1), z.useContext(Na).location;
}
function Tm(e) {
  z.useContext(er).static || z.useLayoutEffect(e);
}
function Kg() {
  let { isDataRoute: e } = z.useContext(tr);
  return e ? ay() : Gg();
}
function Gg() {
  Vo() || K(!1);
  let e = z.useContext(bo),
    { basename: t, future: n, navigator: r } = z.useContext(er),
    { matches: i } = z.useContext(tr),
    { pathname: o } = Qo(),
    l = JSON.stringify(Oc(i, n.v7_relativeSplatPath)),
    a = z.useRef(!1);
  return (
    Tm(() => {
      a.current = !0;
    }),
    z.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let m = Dc(u, JSON.parse(l), o, c.relative === "path");
        e == null && t !== "/" && (m.pathname = m.pathname === "/" ? t : dn([t, m.pathname])),
          (c.replace ? r.replace : r.push)(m, c.state, c);
      },
      [t, r, l, o, e]
    )
  );
}
const Yg = z.createContext(null);
function qg(e) {
  let t = z.useContext(tr).outlet;
  return t && z.createElement(Yg.Provider, { value: e }, t);
}
function La(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = z.useContext(er),
    { matches: i } = z.useContext(tr),
    { pathname: o } = Qo(),
    l = JSON.stringify(Oc(i, r.v7_relativeSplatPath));
  return z.useMemo(() => Dc(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function Xg(e, t, n, r) {
  Vo() || K(!1);
  let { navigator: i } = z.useContext(er),
    { matches: o } = z.useContext(tr),
    l = o[o.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Qo(),
    c;
  if (t) {
    var m;
    let k = typeof t == "string" ? gn(t) : t;
    s === "/" || ((m = k.pathname) != null && m.startsWith(s)) || K(!1), (c = k);
  } else c = u;
  let h = c.pathname || "/",
    g = s === "/" ? h : h.slice(s.length) || "/",
    w = qr(e, { pathname: g }),
    S = ny(
      w &&
        w.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, a, k.params),
            pathname: dn([s, i.encodeLocation ? i.encodeLocation(k.pathname).pathname : k.pathname]),
            pathnameBase:
              k.pathnameBase === "/"
                ? s
                : dn([s, i.encodeLocation ? i.encodeLocation(k.pathnameBase).pathname : k.pathnameBase]),
          })
        ),
      o,
      n,
      r
    );
  return t && S
    ? z.createElement(
        Na.Provider,
        {
          value: {
            location: To({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c),
            navigationType: Ce.Pop,
          },
        },
        S
      )
    : S;
}
function Zg() {
  let e = ly(),
    t = Cm(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return z.createElement(
    z.Fragment,
    null,
    z.createElement("h2", null, "Unexpected Application Error!"),
    z.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? z.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Jg = z.createElement(Zg, null);
class ey extends z.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0
      ? z.createElement(
          tr.Provider,
          { value: this.props.routeContext },
          z.createElement(Lm.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function ty(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = z.useContext(bo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    z.createElement(tr.Provider, { value: t }, r)
  );
}
function ny(e, t, n, r) {
  var i;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = l.findIndex((m) => m.route.id && (a == null ? void 0 : a[m.route.id]));
    c >= 0 || K(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let m = l[c];
      if (((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (u = c), m.route.id)) {
        let { loaderData: h, errors: g } = n,
          w = m.route.loader && h[m.route.id] === void 0 && (!g || g[m.route.id] === void 0);
        if (m.route.lazy || w) {
          (s = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((c, m, h) => {
    let g,
      w = !1,
      S = null,
      k = null;
    n &&
      ((g = a && m.route.id ? a[m.route.id] : void 0),
      (S = m.route.errorElement || Jg),
      s &&
        (u < 0 && h === 0
          ? (sy("route-fallback", !1), (w = !0), (k = null))
          : u === h && ((w = !0), (k = m.route.hydrateFallbackElement || null))));
    let d = t.concat(l.slice(0, h + 1)),
      f = () => {
        let p;
        return (
          g
            ? (p = S)
            : w
            ? (p = k)
            : m.route.Component
            ? (p = z.createElement(m.route.Component, null))
            : m.route.element
            ? (p = m.route.element)
            : (p = c),
          z.createElement(ty, {
            match: m,
            routeContext: { outlet: c, matches: d, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || h === 0)
      ? z.createElement(ey, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: g,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Om = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), e
    );
  })(Om || {}),
  ua = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ua || {});
function ry(e) {
  let t = z.useContext(bo);
  return t || K(!1), t;
}
function iy(e) {
  let t = z.useContext(Ic);
  return t || K(!1), t;
}
function oy(e) {
  let t = z.useContext(tr);
  return t || K(!1), t;
}
function Dm(e) {
  let t = oy(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || K(!1), n.route.id;
}
function ly() {
  var e;
  let t = z.useContext(Lm),
    n = iy(ua.UseRouteError),
    r = Dm(ua.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ay() {
  let { router: e } = ry(Om.UseNavigateStable),
    t = Dm(ua.UseNavigateStable),
    n = z.useRef(!1);
  return (
    Tm(() => {
      n.current = !0;
    }),
    z.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, To({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Rf = {};
function sy(e, t, n) {
  !t && !Rf[e] && (Rf[e] = !0);
}
function uy(e) {
  return qg(e.context);
}
function cy(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ce.Pop,
    navigator: o,
    static: l = !1,
    future: a,
  } = e;
  Vo() && K(!1);
  let s = t.replace(/^\/*/, "/"),
    u = z.useMemo(
      () => ({ basename: s, navigator: o, static: l, future: To({ v7_relativeSplatPath: !1 }, a) }),
      [s, a, o, l]
    );
  typeof r == "string" && (r = gn(r));
  let { pathname: c = "/", search: m = "", hash: h = "", state: g = null, key: w = "default" } = r,
    S = z.useMemo(() => {
      let k = qn(c, s);
      return k == null ? null : { location: { pathname: k, search: m, hash: h, state: g, key: w }, navigationType: i };
    }, [s, c, m, h, g, w, i]);
  return S == null
    ? null
    : z.createElement(er.Provider, { value: u }, z.createElement(Na.Provider, { children: n, value: S }));
}
new Promise(() => {});
function dy(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: z.createElement(e.Component), Component: void 0 }),
    e.HydrateFallback &&
      Object.assign(t, { hydrateFallbackElement: z.createElement(e.HydrateFallback), HydrateFallback: void 0 }),
    e.ErrorBoundary && Object.assign(t, { errorElement: z.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ci() {
  return (
    (Ci = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ci.apply(this, arguments)
  );
}
function Mm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function fy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function hy(e, t) {
  return e.button === 0 && (!t || t === "_self") && !fy(e);
}
const py = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  my = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"];
function vy(e, t) {
  return Og({
    basename: t == null ? void 0 : t.basename,
    future: Ci({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: ng({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || gy(),
    routes: e,
    mapRouteProperties: dy,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function gy() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Ci({}, t, { errors: yy(t.errors) })), t;
}
function yy(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse") n[r] = new Mc(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let l = new o(i.message);
            (l.stack = ""), (n[r] = l);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const Fm = z.createContext({ isTransitioning: !1 }),
  wy = z.createContext(new Map()),
  xy = "startTransition",
  _f = b0[xy],
  Sy = "flushSync",
  jf = tg[Sy];
function ky(e) {
  _f ? _f(e) : e();
}
function qi(e) {
  jf ? jf(e) : e();
}
class Ey {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function Cy(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = z.useState(n.state),
    [l, a] = z.useState(),
    [s, u] = z.useState({ isTransitioning: !1 }),
    [c, m] = z.useState(),
    [h, g] = z.useState(),
    [w, S] = z.useState(),
    k = z.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = z.useCallback(
      (C) => {
        d ? ky(C) : C();
      },
      [d]
    ),
    p = z.useCallback(
      (C, N) => {
        let { deletedFetchers: T, unstable_flushSync: $, unstable_viewTransitionOpts: Z } = N;
        T.forEach((ge) => k.current.delete(ge)),
          C.fetchers.forEach((ge, et) => {
            ge.data !== void 0 && k.current.set(et, ge.data);
          });
        let Se = n.window == null || typeof n.window.document.startViewTransition != "function";
        if (!Z || Se) {
          $ ? qi(() => o(C)) : f(() => o(C));
          return;
        }
        if ($) {
          qi(() => {
            h && (c && c.resolve(), h.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Z.currentLocation,
                nextLocation: Z.nextLocation,
              });
          });
          let ge = n.window.document.startViewTransition(() => {
            qi(() => o(C));
          });
          ge.finished.finally(() => {
            qi(() => {
              m(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            qi(() => g(ge));
          return;
        }
        h
          ? (c && c.resolve(),
            h.skipTransition(),
            S({ state: C, currentLocation: Z.currentLocation, nextLocation: Z.nextLocation }))
          : (a(C),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Z.currentLocation,
              nextLocation: Z.nextLocation,
            }));
      },
      [n.window, h, c, k, f]
    );
  z.useLayoutEffect(() => n.subscribe(p), [n, p]),
    z.useEffect(() => {
      s.isTransitioning && !s.flushSync && m(new Ey());
    }, [s]),
    z.useEffect(() => {
      if (c && l && n.window) {
        let C = l,
          N = c.promise,
          T = n.window.document.startViewTransition(async () => {
            f(() => o(C)), await N;
          });
        T.finished.finally(() => {
          m(void 0), g(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          g(T);
      }
    }, [f, l, c, n.window]),
    z.useEffect(() => {
      c && l && i.location.key === l.location.key && c.resolve();
    }, [c, h, i.location, l]),
    z.useEffect(() => {
      !s.isTransitioning &&
        w &&
        (a(w.state),
        u({ isTransitioning: !0, flushSync: !1, currentLocation: w.currentLocation, nextLocation: w.nextLocation }),
        S(void 0));
    }, [s.isTransitioning, w]),
    z.useEffect(() => {}, []);
  let E = z.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (C) => n.navigate(C),
        push: (C, N, T) => n.navigate(C, { state: N, preventScrollReset: T == null ? void 0 : T.preventScrollReset }),
        replace: (C, N, T) =>
          n.navigate(C, { replace: !0, state: N, preventScrollReset: T == null ? void 0 : T.preventScrollReset }),
      }),
      [n]
    ),
    _ = n.basename || "/",
    v = z.useMemo(() => ({ router: n, navigator: E, static: !1, basename: _ }), [n, E, _]);
  return z.createElement(
    z.Fragment,
    null,
    z.createElement(
      bo.Provider,
      { value: v },
      z.createElement(
        Ic.Provider,
        { value: i },
        z.createElement(
          wy.Provider,
          { value: k.current },
          z.createElement(
            Fm.Provider,
            { value: s },
            z.createElement(
              cy,
              {
                basename: _,
                location: i.location,
                navigationType: i.historyAction,
                navigator: E,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? z.createElement(Py, { routes: n.routes, future: n.future, state: i })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function Py(e) {
  let { routes: t, future: n, state: r } = e;
  return Xg(t, void 0, r, n);
}
const Ry = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  _y = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  zr = z.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: m,
      } = t,
      h = Mm(t, py),
      { basename: g } = z.useContext(er),
      w,
      S = !1;
    if (typeof u == "string" && _y.test(u) && ((w = u), Ry))
      try {
        let p = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
          _ = qn(E.pathname, g);
        E.origin === p.origin && _ != null ? (u = _ + E.search + E.hash) : (S = !0);
      } catch {}
    let k = Qg(u, { relative: i }),
      d = zy(u, { replace: l, state: a, target: s, preventScrollReset: c, relative: i, unstable_viewTransition: m });
    function f(p) {
      r && r(p), p.defaultPrevented || d(p);
    }
    return z.createElement("a", Ci({}, h, { href: w || k, onClick: S || o ? r : f, ref: n, target: s }));
  }),
  ar = z.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: l = !1,
        style: a,
        to: s,
        unstable_viewTransition: u,
        children: c,
      } = t,
      m = Mm(t, my),
      h = La(s, { relative: m.relative }),
      g = Qo(),
      w = z.useContext(Ic),
      { navigator: S } = z.useContext(er),
      k = w != null && Ny(h) && u === !0,
      d = S.encodeLocation ? S.encodeLocation(h).pathname : h.pathname,
      f = g.pathname,
      p = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    i || ((f = f.toLowerCase()), (p = p ? p.toLowerCase() : null), (d = d.toLowerCase()));
    const E = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
    let _ = f === d || (!l && f.startsWith(d) && f.charAt(E) === "/"),
      v = p != null && (p === d || (!l && p.startsWith(d) && p.charAt(d.length) === "/")),
      C = { isActive: _, isPending: v, isTransitioning: k },
      N = _ ? r : void 0,
      T;
    typeof o == "function"
      ? (T = o(C))
      : (T = [o, _ ? "active" : null, v ? "pending" : null, k ? "transitioning" : null].filter(Boolean).join(" "));
    let $ = typeof a == "function" ? a(C) : a;
    return z.createElement(
      zr,
      Ci({}, m, { "aria-current": N, className: T, ref: n, style: $, to: s, unstable_viewTransition: u }),
      typeof c == "function" ? c(C) : c
    );
  });
var _u;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(_u || (_u = {}));
var zf;
(function (e) {
  (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(zf || (zf = {}));
function jy(e) {
  let t = z.useContext(bo);
  return t || K(!1), t;
}
function zy(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    s = Kg(),
    u = Qo(),
    c = La(e, { relative: l });
  return z.useCallback(
    (m) => {
      if (hy(m, n)) {
        m.preventDefault();
        let h = r !== void 0 ? r : jr(u) === jr(c);
        s(e, { replace: h, state: i, preventScrollReset: o, relative: l, unstable_viewTransition: a });
      }
    },
    [u, s, c, r, i, n, e, o, l, a]
  );
}
function Ny(e, t) {
  t === void 0 && (t = {});
  let n = z.useContext(Fm);
  n == null && K(!1);
  let { basename: r } = jy(_u.useViewTransitionState),
    i = La(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = qn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    l = qn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Eu(i.pathname, l) != null || Eu(i.pathname, o) != null;
}
var Ko = class {
    constructor() {
      (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ta = typeof window > "u" || "Deno" in window;
function Dt() {}
function Ly(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ty(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Oy(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Nf(e, t) {
  const { type: n = "all", exact: r, fetchStatus: i, predicate: o, queryKey: l, stale: a } = e;
  if (l) {
    if (r) {
      if (t.queryHash !== $c(l, t.options)) return !1;
    } else if (!Oo(t.queryKey, l)) return !1;
  }
  if (n !== "all") {
    const s = t.isActive();
    if ((n === "active" && !s) || (n === "inactive" && s)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (typeof i < "u" && i !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Lf(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Nr(t.options.mutationKey) !== Nr(o)) return !1;
    } else if (!Oo(t.options.mutationKey, o)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function $c(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Nr)(e);
}
function Nr(e) {
  return JSON.stringify(e, (t, n) =>
    ju(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  );
}
function Oo(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !Oo(e[n], t[n]))
    : !1;
}
function Im(e, t) {
  if (e === t) return e;
  const n = Tf(e) && Tf(t);
  if (n || (ju(e) && ju(t))) {
    const r = n ? e.length : Object.keys(e).length,
      i = n ? t : Object.keys(t),
      o = i.length,
      l = n ? [] : {};
    let a = 0;
    for (let s = 0; s < o; s++) {
      const u = n ? s : i[s];
      (l[u] = Im(e[u], t[u])), l[u] === e[u] && a++;
    }
    return r === o && a === r ? e : l;
  }
  return t;
}
function Dy(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Tf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ju(e) {
  if (!Of(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Of(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Of(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function My(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Fy(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Im(e, t)
    : t;
}
function Iy(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function $y(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var pr,
  Nn,
  oi,
  Xf,
  Ay =
    ((Xf = class extends Ko {
      constructor() {
        super();
        b(this, pr, void 0);
        b(this, Nn, void 0);
        b(this, oi, void 0);
        U(this, oi, (t) => {
          if (!Ta && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, Nn) || this.setEventListener(R(this, oi));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, Nn)) == null || t.call(this), U(this, Nn, void 0));
      }
      setEventListener(t) {
        var n;
        U(this, oi, t),
          (n = R(this, Nn)) == null || n.call(this),
          U(
            this,
            Nn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        R(this, pr) !== t && (U(this, pr, t), this.onFocus());
      }
      onFocus() {
        this.listeners.forEach((t) => {
          t();
        });
      }
      isFocused() {
        var t;
        return typeof R(this, pr) == "boolean"
          ? R(this, pr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
      }
    }),
    (pr = new WeakMap()),
    (Nn = new WeakMap()),
    (oi = new WeakMap()),
    Xf),
  zu = new Ay(),
  li,
  Ln,
  ai,
  Zf,
  Uy =
    ((Zf = class extends Ko {
      constructor() {
        super();
        b(this, li, !0);
        b(this, Ln, void 0);
        b(this, ai, void 0);
        U(this, ai, (t) => {
          if (!Ta && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n), window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, Ln) || this.setEventListener(R(this, ai));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = R(this, Ln)) == null || t.call(this), U(this, Ln, void 0));
      }
      setEventListener(t) {
        var n;
        U(this, ai, t), (n = R(this, Ln)) == null || n.call(this), U(this, Ln, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        R(this, li) !== t &&
          (U(this, li, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return R(this, li);
      }
    }),
    (li = new WeakMap()),
    (Ln = new WeakMap()),
    (ai = new WeakMap()),
    Zf),
  ca = new Uy();
function By(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ac(e) {
  return (e ?? "online") === "online" ? ca.isOnline() : !0;
}
var $m = class {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert), (this.silent = e == null ? void 0 : e.silent);
  }
};
function ks(e) {
  return e instanceof $m;
}
function Am(e) {
  let t = !1,
    n = 0,
    r = !1,
    i,
    o,
    l;
  const a = new Promise((k, d) => {
      (o = k), (l = d);
    }),
    s = (k) => {
      var d;
      r || (g(new $m(k)), (d = e.abort) == null || d.call(e));
    },
    u = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    m = () => !zu.isFocused() || (e.networkMode !== "always" && !ca.isOnline()),
    h = (k) => {
      var d;
      r || ((r = !0), (d = e.onSuccess) == null || d.call(e, k), i == null || i(), o(k));
    },
    g = (k) => {
      var d;
      r || ((r = !0), (d = e.onError) == null || d.call(e, k), i == null || i(), l(k));
    },
    w = () =>
      new Promise((k) => {
        var d;
        (i = (f) => {
          const p = r || !m();
          return p && k(f), p;
        }),
          (d = e.onPause) == null || d.call(e);
      }).then(() => {
        var k;
        (i = void 0), r || (k = e.onContinue) == null || k.call(e);
      }),
    S = () => {
      if (r) return;
      let k;
      try {
        k = e.fn();
      } catch (d) {
        k = Promise.reject(d);
      }
      Promise.resolve(k)
        .then(h)
        .catch((d) => {
          var v;
          if (r) return;
          const f = e.retry ?? (Ta ? 0 : 3),
            p = e.retryDelay ?? By,
            E = typeof p == "function" ? p(n, d) : p,
            _ = f === !0 || (typeof f == "number" && n < f) || (typeof f == "function" && f(n, d));
          if (t || !_) {
            g(d);
            return;
          }
          n++,
            (v = e.onFail) == null || v.call(e, n, d),
            My(E)
              .then(() => {
                if (m()) return w();
              })
              .then(() => {
                t ? g(d) : S();
              });
        });
    };
  return (
    Ac(e.networkMode) ? S() : w().then(S),
    {
      promise: a,
      cancel: s,
      continue: () => ((i == null ? void 0 : i()) ? a : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
function Hy() {
  let e = [],
    t = 0,
    n = (h) => {
      h();
    },
    r = (h) => {
      h();
    },
    i = (h) => setTimeout(h, 0);
  const o = (h) => {
      i = h;
    },
    l = (h) => {
      let g;
      t++;
      try {
        g = h();
      } finally {
        t--, t || u();
      }
      return g;
    },
    a = (h) => {
      t
        ? e.push(h)
        : i(() => {
            n(h);
          });
    },
    s =
      (h) =>
      (...g) => {
        a(() => {
          h(...g);
        });
      },
    u = () => {
      const h = e;
      (e = []),
        h.length &&
          i(() => {
            r(() => {
              h.forEach((g) => {
                n(g);
              });
            });
          });
    };
  return {
    batch: l,
    batchCalls: s,
    schedule: a,
    setNotifyFunction: (h) => {
      n = h;
    },
    setBatchNotifyFunction: (h) => {
      r = h;
    },
    setScheduler: o,
  };
}
var Ue = Hy(),
  mr,
  Jf,
  Um =
    ((Jf = class {
      constructor() {
        b(this, mr, void 0);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Ty(this.gcTime) &&
            U(
              this,
              mr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Ta ? 1 / 0 : 5 * 60 * 1e3));
      }
      clearGcTimeout() {
        R(this, mr) && (clearTimeout(R(this, mr)), U(this, mr, void 0));
      }
    }),
    (mr = new WeakMap()),
    Jf),
  si,
  ui,
  St,
  Tn,
  kt,
  De,
  Mo,
  vr,
  ci,
  Tl,
  Mt,
  tn,
  eh,
  Wy =
    ((eh = class extends Um {
      constructor(t) {
        super();
        b(this, ci);
        b(this, Mt);
        b(this, si, void 0);
        b(this, ui, void 0);
        b(this, St, void 0);
        b(this, Tn, void 0);
        b(this, kt, void 0);
        b(this, De, void 0);
        b(this, Mo, void 0);
        b(this, vr, void 0);
        U(this, vr, !1),
          U(this, Mo, t.defaultOptions),
          fe(this, ci, Tl).call(this, t.options),
          U(this, De, []),
          U(this, St, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          U(this, si, t.state || by(this.options)),
          (this.state = R(this, si)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      optionalRemove() {
        !R(this, De).length && this.state.fetchStatus === "idle" && R(this, St).remove(this);
      }
      setData(t, n) {
        const r = Fy(this.state.data, t, this.options);
        return (
          fe(this, Mt, tn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        fe(this, Mt, tn).call(this, { type: "setState", state: t, setStateOptions: n });
      }
      cancel(t) {
        var r;
        const n = R(this, Tn);
        return (r = R(this, kt)) == null || r.cancel(t), n ? n.then(Dt).catch(Dt) : Promise.resolve();
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(R(this, si));
      }
      isActive() {
        return R(this, De).some((t) => t.options.enabled !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return (
          this.state.isInvalidated || !this.state.dataUpdatedAt || R(this, De).some((t) => t.getCurrentResult().isStale)
        );
      }
      isStaleByTime(t = 0) {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || !Oy(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = R(this, De).find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }), (n = R(this, kt)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = R(this, De).find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }), (n = R(this, kt)) == null || n.continue();
      }
      addObserver(t) {
        R(this, De).includes(t) ||
          (R(this, De).push(t),
          this.clearGcTimeout(),
          R(this, St).notify({ type: "observerAdded", query: this, observer: t }));
      }
      removeObserver(t) {
        R(this, De).includes(t) &&
          (U(
            this,
            De,
            R(this, De).filter((n) => n !== t)
          ),
          R(this, De).length ||
            (R(this, kt) && (R(this, vr) ? R(this, kt).cancel({ revert: !0 }) : R(this, kt).cancelRetry()),
            this.scheduleGc()),
          R(this, St).notify({ type: "observerRemoved", query: this, observer: t }));
      }
      getObserversCount() {
        return R(this, De).length;
      }
      invalidate() {
        this.state.isInvalidated || fe(this, Mt, tn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, m, h;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.dataUpdatedAt && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
          else if (R(this, Tn)) return (u = R(this, kt)) == null || u.continueRetry(), R(this, Tn);
        }
        if ((t && fe(this, ci, Tl).call(this, t), !this.options.queryFn)) {
          const g = R(this, De).find((w) => w.options.queryFn);
          g && fe(this, ci, Tl).call(this, g.options);
        }
        const r = new AbortController(),
          i = { queryKey: this.queryKey, meta: this.meta },
          o = (g) => {
            Object.defineProperty(g, "signal", { enumerable: !0, get: () => (U(this, vr, !0), r.signal) });
          };
        o(i);
        const l = () =>
            this.options.queryFn
              ? (U(this, vr, !1),
                this.options.persister
                  ? this.options.persister(this.options.queryFn, i, this)
                  : this.options.queryFn(i))
              : Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),
          a = { fetchOptions: n, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: l };
        o(a),
          (c = this.options.behavior) == null || c.onFetch(a, this),
          U(this, ui, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !== ((m = a.fetchOptions) == null ? void 0 : m.meta)) &&
            fe(this, Mt, tn).call(this, { type: "fetch", meta: (h = a.fetchOptions) == null ? void 0 : h.meta });
        const s = (g) => {
          var w, S, k, d;
          (ks(g) && g.silent) || fe(this, Mt, tn).call(this, { type: "error", error: g }),
            ks(g) ||
              ((S = (w = R(this, St).config).onError) == null || S.call(w, g, this),
              (d = (k = R(this, St).config).onSettled) == null || d.call(k, this.state.data, g, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          U(
            this,
            kt,
            Am({
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (g) => {
                var w, S, k, d;
                if (typeof g > "u") {
                  s(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(g),
                  (S = (w = R(this, St).config).onSuccess) == null || S.call(w, g, this),
                  (d = (k = R(this, St).config).onSettled) == null || d.call(k, g, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: s,
              onFail: (g, w) => {
                fe(this, Mt, tn).call(this, { type: "failed", failureCount: g, error: w });
              },
              onPause: () => {
                fe(this, Mt, tn).call(this, { type: "pause" });
              },
              onContinue: () => {
                fe(this, Mt, tn).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
            })
          ),
          U(this, Tn, R(this, kt).promise),
          R(this, Tn)
        );
      }
    }),
    (si = new WeakMap()),
    (ui = new WeakMap()),
    (St = new WeakMap()),
    (Tn = new WeakMap()),
    (kt = new WeakMap()),
    (De = new WeakMap()),
    (Mo = new WeakMap()),
    (vr = new WeakMap()),
    (ci = new WeakSet()),
    (Tl = function (t) {
      (this.options = { ...R(this, Mo), ...t }), this.updateGcTime(this.options.gcTime);
    }),
    (Mt = new WeakSet()),
    (tn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              fetchFailureCount: 0,
              fetchFailureReason: null,
              fetchMeta: t.meta ?? null,
              fetchStatus: Ac(this.options.networkMode) ? "fetching" : "paused",
              ...(!r.dataUpdatedAt && { error: null, status: "pending" }),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null }),
            };
          case "error":
            const i = t.error;
            return ks(i) && i.revert && R(this, ui)
              ? { ...R(this, ui), fetchStatus: "idle" }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Ue.batch(() => {
          R(this, De).forEach((r) => {
            r.onQueryUpdate();
          }),
            R(this, St).notify({ query: this, type: "updated", action: t });
        });
    }),
    eh);
function by(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = typeof t < "u",
    r = n ? (typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Kt,
  th,
  Vy =
    ((th = class extends Ko {
      constructor(t = {}) {
        super();
        b(this, Kt, void 0);
        (this.config = t), U(this, Kt, new Map());
      }
      build(t, n, r) {
        const i = n.queryKey,
          o = n.queryHash ?? $c(i, n);
        let l = this.get(o);
        return (
          l ||
            ((l = new Wy({
              cache: this,
              queryKey: i,
              queryHash: o,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(l)),
          l
        );
      }
      add(t) {
        R(this, Kt).has(t.queryHash) || (R(this, Kt).set(t.queryHash, t), this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = R(this, Kt).get(t.queryHash);
        n && (t.destroy(), n === t && R(this, Kt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ue.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return R(this, Kt).get(t);
      }
      getAll() {
        return [...R(this, Kt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Nf(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Nf(t, r)) : n;
      }
      notify(t) {
        Ue.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ue.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ue.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Kt = new WeakMap()),
    th),
  Gt,
  Fo,
  ft,
  di,
  Yt,
  Cn,
  nh,
  Qy =
    ((nh = class extends Um {
      constructor(t) {
        super();
        b(this, Yt);
        b(this, Gt, void 0);
        b(this, Fo, void 0);
        b(this, ft, void 0);
        b(this, di, void 0);
        (this.mutationId = t.mutationId),
          U(this, Fo, t.defaultOptions),
          U(this, ft, t.mutationCache),
          U(this, Gt, []),
          (this.state = t.state || Bm()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = { ...R(this, Fo), ...t }), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        R(this, Gt).includes(t) ||
          (R(this, Gt).push(t),
          this.clearGcTimeout(),
          R(this, ft).notify({ type: "observerAdded", mutation: this, observer: t }));
      }
      removeObserver(t) {
        U(
          this,
          Gt,
          R(this, Gt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          R(this, ft).notify({ type: "observerRemoved", mutation: this, observer: t });
      }
      optionalRemove() {
        R(this, Gt).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, ft).remove(this));
      }
      continue() {
        var t;
        return ((t = R(this, di)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables);
      }
      async execute(t) {
        var i, o, l, a, s, u, c, m, h, g, w, S, k, d, f, p, E, _, v, C;
        const n = () => (
            U(
              this,
              di,
              Am({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(t)
                    : Promise.reject(new Error("No mutationFn found")),
                onFail: (N, T) => {
                  fe(this, Yt, Cn).call(this, { type: "failed", failureCount: N, error: T });
                },
                onPause: () => {
                  fe(this, Yt, Cn).call(this, { type: "pause" });
                },
                onContinue: () => {
                  fe(this, Yt, Cn).call(this, { type: "continue" });
                },
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
              })
            ),
            R(this, di).promise
          ),
          r = this.state.status === "pending";
        try {
          if (!r) {
            fe(this, Yt, Cn).call(this, { type: "pending", variables: t }),
              await ((o = (i = R(this, ft).config).onMutate) == null ? void 0 : o.call(i, t, this));
            const T = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
            T !== this.state.context && fe(this, Yt, Cn).call(this, { type: "pending", context: T, variables: t });
          }
          const N = await n();
          return (
            await ((u = (s = R(this, ft).config).onSuccess) == null
              ? void 0
              : u.call(s, N, t, this.state.context, this)),
            await ((m = (c = this.options).onSuccess) == null ? void 0 : m.call(c, N, t, this.state.context)),
            await ((g = (h = R(this, ft).config).onSettled) == null
              ? void 0
              : g.call(h, N, null, this.state.variables, this.state.context, this)),
            await ((S = (w = this.options).onSettled) == null ? void 0 : S.call(w, N, null, t, this.state.context)),
            fe(this, Yt, Cn).call(this, { type: "success", data: N }),
            N
          );
        } catch (N) {
          try {
            throw (
              (await ((d = (k = R(this, ft).config).onError) == null
                ? void 0
                : d.call(k, N, t, this.state.context, this)),
              await ((p = (f = this.options).onError) == null ? void 0 : p.call(f, N, t, this.state.context)),
              await ((_ = (E = R(this, ft).config).onSettled) == null
                ? void 0
                : _.call(E, void 0, N, this.state.variables, this.state.context, this)),
              await ((C = (v = this.options).onSettled) == null ? void 0 : C.call(v, void 0, N, t, this.state.context)),
              N)
            );
          } finally {
            fe(this, Yt, Cn).call(this, { type: "error", error: N });
          }
        }
      }
    }),
    (Gt = new WeakMap()),
    (Fo = new WeakMap()),
    (ft = new WeakMap()),
    (di = new WeakMap()),
    (Yt = new WeakSet()),
    (Cn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return { ...r, failureCount: t.failureCount, failureReason: t.error };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: !Ac(this.options.networkMode),
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Ue.batch(() => {
          R(this, Gt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            R(this, ft).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    nh);
function Bm() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Et,
  Io,
  gr,
  rh,
  Ky =
    ((rh = class extends Ko {
      constructor(t = {}) {
        super();
        b(this, Et, void 0);
        b(this, Io, void 0);
        b(this, gr, void 0);
        (this.config = t), U(this, Et, []), U(this, Io, 0);
      }
      build(t, n, r) {
        const i = new Qy({
          mutationCache: this,
          mutationId: ++Jo(this, Io)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(i), i;
      }
      add(t) {
        R(this, Et).push(t), this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        U(
          this,
          Et,
          R(this, Et).filter((n) => n !== t)
        ),
          this.notify({ type: "removed", mutation: t });
      }
      clear() {
        Ue.batch(() => {
          R(this, Et).forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return R(this, Et);
      }
      find(t) {
        const n = { exact: !0, ...t };
        return R(this, Et).find((r) => Lf(n, r));
      }
      findAll(t = {}) {
        return R(this, Et).filter((n) => Lf(t, n));
      }
      notify(t) {
        Ue.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        return (
          U(
            this,
            gr,
            (R(this, gr) ?? Promise.resolve())
              .then(() => {
                const t = R(this, Et).filter((n) => n.state.isPaused);
                return Ue.batch(() => t.reduce((n, r) => n.then(() => r.continue().catch(Dt)), Promise.resolve()));
              })
              .then(() => {
                U(this, gr, void 0);
              })
          ),
          R(this, gr)
        );
      }
    }),
    (Et = new WeakMap()),
    (Io = new WeakMap()),
    (gr = new WeakMap()),
    rh);
function Gy(e) {
  return {
    onFetch: (t, n) => {
      const r = async () => {
        var w, S, k, d, f;
        const i = t.options,
          o =
            (k = (S = (w = t.fetchOptions) == null ? void 0 : w.meta) == null ? void 0 : S.fetchMore) == null
              ? void 0
              : k.direction,
          l = ((d = t.state.data) == null ? void 0 : d.pages) || [],
          a = ((f = t.state.data) == null ? void 0 : f.pageParams) || [],
          s = { pages: [], pageParams: [] };
        let u = !1;
        const c = (p) => {
            Object.defineProperty(p, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (u = !0)
                  : t.signal.addEventListener("abort", () => {
                      u = !0;
                    }),
                t.signal
              ),
            });
          },
          m = t.options.queryFn || (() => Promise.reject(new Error(`Missing queryFn: '${t.options.queryHash}'`))),
          h = async (p, E, _) => {
            if (u) return Promise.reject();
            if (E == null && p.pages.length) return Promise.resolve(p);
            const v = {
              queryKey: t.queryKey,
              pageParam: E,
              direction: _ ? "backward" : "forward",
              meta: t.options.meta,
            };
            c(v);
            const C = await m(v),
              { maxPages: N } = t.options,
              T = _ ? $y : Iy;
            return { pages: T(p.pages, C, N), pageParams: T(p.pageParams, E, N) };
          };
        let g;
        if (o && l.length) {
          const p = o === "backward",
            E = p ? Yy : Df,
            _ = { pages: l, pageParams: a },
            v = E(i, _);
          g = await h(_, v, p);
        } else {
          g = await h(s, a[0] ?? i.initialPageParam);
          const p = e ?? l.length;
          for (let E = 1; E < p; E++) {
            const _ = Df(i, g);
            g = await h(g, _);
          }
        }
        return g;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var i, o;
            return (o = (i = t.options).persister) == null
              ? void 0
              : o.call(i, r, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, n);
          })
        : (t.fetchFn = r);
    },
  };
}
function Df(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return e.getNextPageParam(t[r], t, n[r], n);
}
function Yy(e, { pages: t, pageParams: n }) {
  var r;
  return (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n);
}
var je,
  On,
  Dn,
  fi,
  hi,
  Mn,
  pi,
  mi,
  ih,
  qy =
    ((ih = class {
      constructor(e = {}) {
        b(this, je, void 0);
        b(this, On, void 0);
        b(this, Dn, void 0);
        b(this, fi, void 0);
        b(this, hi, void 0);
        b(this, Mn, void 0);
        b(this, pi, void 0);
        b(this, mi, void 0);
        U(this, je, e.queryCache || new Vy()),
          U(this, On, e.mutationCache || new Ky()),
          U(this, Dn, e.defaultOptions || {}),
          U(this, fi, new Map()),
          U(this, hi, new Map()),
          U(this, Mn, 0);
      }
      mount() {
        Jo(this, Mn)._++,
          R(this, Mn) === 1 &&
            (U(
              this,
              pi,
              zu.subscribe(() => {
                zu.isFocused() && (this.resumePausedMutations(), R(this, je).onFocus());
              })
            ),
            U(
              this,
              mi,
              ca.subscribe(() => {
                ca.isOnline() && (this.resumePausedMutations(), R(this, je).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Jo(this, Mn)._--,
          R(this, Mn) === 0 &&
            ((e = R(this, pi)) == null || e.call(this),
            U(this, pi, void 0),
            (t = R(this, mi)) == null || t.call(this),
            U(this, mi, void 0));
      }
      isFetching(e) {
        return R(this, je).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return R(this, On).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var t;
        return (t = R(this, je).find({ queryKey: e })) == null ? void 0 : t.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        return t !== void 0 ? Promise.resolve(t) : this.fetchQuery(e);
      }
      getQueriesData(e) {
        return this.getQueryCache()
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = R(this, je).find({ queryKey: e }),
          i = r == null ? void 0 : r.state.data,
          o = Ly(t, i);
        if (typeof o > "u") return;
        const l = this.defaultQueryOptions({ queryKey: e });
        return R(this, je)
          .build(this, l)
          .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ue.batch(() =>
          this.getQueryCache()
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var t;
        return (t = R(this, je).find({ queryKey: e })) == null ? void 0 : t.state;
      }
      removeQueries(e) {
        const t = R(this, je);
        Ue.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = R(this, je),
          r = { type: "active", ...e };
        return Ue.batch(
          () => (
            n.findAll(e).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Ue.batch(() =>
            R(this, je)
              .findAll(e)
              .map((i) => i.cancel(n))
          );
        return Promise.all(r).then(Dt).catch(Dt);
      }
      invalidateQueries(e = {}, t = {}) {
        return Ue.batch(() => {
          if (
            (R(this, je)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = { ...t, cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0 },
          r = Ue.batch(() =>
            R(this, je)
              .findAll(e)
              .filter((i) => !i.isDisabled())
              .map((i) => {
                let o = i.fetch(void 0, n);
                return n.throwOnError || (o = o.catch(Dt)), i.state.fetchStatus === "paused" ? Promise.resolve() : o;
              })
          );
        return Promise.all(r).then(Dt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        typeof t.retry > "u" && (t.retry = !1);
        const n = R(this, je).build(this, t);
        return n.isStaleByTime(t.staleTime) ? n.fetch(t) : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Dt).catch(Dt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Gy(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Dt).catch(Dt);
      }
      resumePausedMutations() {
        return R(this, On).resumePausedMutations();
      }
      getQueryCache() {
        return R(this, je);
      }
      getMutationCache() {
        return R(this, On);
      }
      getDefaultOptions() {
        return R(this, Dn);
      }
      setDefaultOptions(e) {
        U(this, Dn, e);
      }
      setQueryDefaults(e, t) {
        R(this, fi).set(Nr(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...R(this, fi).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Oo(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        R(this, hi).set(Nr(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...R(this, hi).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Oo(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e != null && e._defaulted) return e;
        const t = {
          ...R(this, Dn).queries,
          ...((e == null ? void 0 : e.queryKey) && this.getQueryDefaults(e.queryKey)),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = $c(t.queryKey, t)),
          typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"),
          typeof t.throwOnError > "u" && (t.throwOnError = !!t.suspense),
          typeof t.networkMode > "u" && t.persister && (t.networkMode = "offlineFirst"),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...R(this, Dn).mutations,
              ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        R(this, je).clear(), R(this, On).clear();
      }
    }),
    (je = new WeakMap()),
    (On = new WeakMap()),
    (Dn = new WeakMap()),
    (fi = new WeakMap()),
    (hi = new WeakMap()),
    (Mn = new WeakMap()),
    (pi = new WeakMap()),
    (mi = new WeakMap()),
    ih),
  Fn,
  ln,
  ht,
  an,
  vi,
  Ol,
  $o,
  Nu,
  oh,
  Xy =
    ((oh = class extends Ko {
      constructor(n, r) {
        super();
        b(this, vi);
        b(this, $o);
        b(this, Fn, void 0);
        b(this, ln, void 0);
        b(this, ht, void 0);
        b(this, an, void 0);
        U(this, ln, void 0), U(this, Fn, n), this.setOptions(r), this.bindMethods(), fe(this, vi, Ol).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
      }
      setOptions(n) {
        var i;
        const r = this.options;
        (this.options = R(this, Fn).defaultMutationOptions(n)),
          Dy(r, this.options) ||
            R(this, Fn)
              .getMutationCache()
              .notify({ type: "observerOptionsUpdated", mutation: R(this, ht), observer: this }),
          (i = R(this, ht)) == null || i.setOptions(this.options),
          r != null &&
            r.mutationKey &&
            this.options.mutationKey &&
            Nr(r.mutationKey) !== Nr(this.options.mutationKey) &&
            this.reset();
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() || (n = R(this, ht)) == null || n.removeObserver(this);
      }
      onMutationUpdate(n) {
        fe(this, vi, Ol).call(this), fe(this, $o, Nu).call(this, n);
      }
      getCurrentResult() {
        return R(this, ln);
      }
      reset() {
        var n;
        (n = R(this, ht)) == null || n.removeObserver(this),
          U(this, ht, void 0),
          fe(this, vi, Ol).call(this),
          fe(this, $o, Nu).call(this);
      }
      mutate(n, r) {
        var i;
        return (
          U(this, an, r),
          (i = R(this, ht)) == null || i.removeObserver(this),
          U(this, ht, R(this, Fn).getMutationCache().build(R(this, Fn), this.options)),
          R(this, ht).addObserver(this),
          R(this, ht).execute(n)
        );
      }
    }),
    (Fn = new WeakMap()),
    (ln = new WeakMap()),
    (ht = new WeakMap()),
    (an = new WeakMap()),
    (vi = new WeakSet()),
    (Ol = function () {
      var r;
      const n = ((r = R(this, ht)) == null ? void 0 : r.state) ?? Bm();
      U(this, ln, {
        ...n,
        isPending: n.status === "pending",
        isSuccess: n.status === "success",
        isError: n.status === "error",
        isIdle: n.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    ($o = new WeakSet()),
    (Nu = function (n) {
      Ue.batch(() => {
        var r, i, o, l, a, s, u, c;
        if (R(this, an) && this.hasListeners()) {
          const m = R(this, ln).variables,
            h = R(this, ln).context;
          (n == null ? void 0 : n.type) === "success"
            ? ((i = (r = R(this, an)).onSuccess) == null || i.call(r, n.data, m, h),
              (l = (o = R(this, an)).onSettled) == null || l.call(o, n.data, null, m, h))
            : (n == null ? void 0 : n.type) === "error" &&
              ((s = (a = R(this, an)).onError) == null || s.call(a, n.error, m, h),
              (c = (u = R(this, an)).onSettled) == null || c.call(u, void 0, n.error, m, h));
        }
        this.listeners.forEach((m) => {
          m(R(this, ln));
        });
      });
    }),
    oh),
  Hm = z.createContext(void 0),
  Zy = (e) => {
    const t = z.useContext(Hm);
    if (e) return e;
    if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  Jy = ({ client: e, children: t }) => (
    z.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    z.createElement(Hm.Provider, { value: e }, t)
  );
function ew(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function tw(e, t) {
  const n = Zy(t),
    [r] = z.useState(() => new Xy(n, e));
  z.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const i = z.useSyncExternalStore(
      z.useCallback((l) => r.subscribe(Ue.batchCalls(l)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult()
    ),
    o = z.useCallback(
      (l, a) => {
        r.mutate(l, a).catch(nw);
      },
      [r]
    );
  if (i.error && ew(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: o, mutateAsync: i.mutate };
}
function nw() {}
var it = function () {
  return (
    (it =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    it.apply(this, arguments)
  );
};
function da(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var ue = "-ms-",
  ho = "-moz-",
  ne = "-webkit-",
  Wm = "comm",
  Oa = "rule",
  Uc = "decl",
  rw = "@import",
  bm = "@keyframes",
  iw = "@layer",
  Vm = Math.abs,
  Bc = String.fromCharCode,
  Lu = Object.assign;
function ow(e, t) {
  return Fe(e, 0) ^ 45 ? (((((((t << 2) ^ Fe(e, 0)) << 2) ^ Fe(e, 1)) << 2) ^ Fe(e, 2)) << 2) ^ Fe(e, 3) : 0;
}
function Qm(e) {
  return e.trim();
}
function rn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, n) {
  return e.replace(t, n);
}
function Dl(e, t, n) {
  return e.indexOf(t, n);
}
function Fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pi(e, t, n) {
  return e.slice(t, n);
}
function qt(e) {
  return e.length;
}
function Km(e) {
  return e.length;
}
function to(e, t) {
  return t.push(e), e;
}
function lw(e, t) {
  return e.map(t).join("");
}
function Mf(e, t) {
  return e.filter(function (n) {
    return !rn(n, t);
  });
}
var Da = 1,
  Ri = 1,
  Gm = 0,
  Lt = 0,
  Re = 0,
  Oi = "";
function Ma(e, t, n, r, i, o, l, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Da,
    column: Ri,
    length: l,
    return: "",
    siblings: a,
  };
}
function Pn(e, t) {
  return Lu(Ma("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ir(e) {
  for (; e.root; ) e = Pn(e.root, { children: [e] });
  to(e, e.siblings);
}
function aw() {
  return Re;
}
function sw() {
  return (Re = Lt > 0 ? Fe(Oi, --Lt) : 0), Ri--, Re === 10 && ((Ri = 1), Da--), Re;
}
function Bt() {
  return (Re = Lt < Gm ? Fe(Oi, Lt++) : 0), Ri++, Re === 10 && ((Ri = 1), Da++), Re;
}
function xr() {
  return Fe(Oi, Lt);
}
function Ml() {
  return Lt;
}
function Fa(e, t) {
  return Pi(Oi, e, t);
}
function Tu(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function uw(e) {
  return (Da = Ri = 1), (Gm = qt((Oi = e))), (Lt = 0), [];
}
function cw(e) {
  return (Oi = ""), e;
}
function Es(e) {
  return Qm(Fa(Lt - 1, Ou(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function dw(e) {
  for (; (Re = xr()) && Re < 33; ) Bt();
  return Tu(e) > 2 || Tu(Re) > 3 ? "" : " ";
}
function fw(e, t) {
  for (; --t && Bt() && !(Re < 48 || Re > 102 || (Re > 57 && Re < 65) || (Re > 70 && Re < 97)); );
  return Fa(e, Ml() + (t < 6 && xr() == 32 && Bt() == 32));
}
function Ou(e) {
  for (; Bt(); )
    switch (Re) {
      case e:
        return Lt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ou(Re);
        break;
      case 40:
        e === 41 && Ou(e);
        break;
      case 92:
        Bt();
        break;
    }
  return Lt;
}
function hw(e, t) {
  for (; Bt() && e + Re !== 57; ) if (e + Re === 84 && xr() === 47) break;
  return "/*" + Fa(t, Lt - 1) + "*" + Bc(e === 47 ? e : Bt());
}
function pw(e) {
  for (; !Tu(xr()); ) Bt();
  return Fa(e, Lt);
}
function mw(e) {
  return cw(Fl("", null, null, null, [""], (e = uw(e)), 0, [0], e));
}
function Fl(e, t, n, r, i, o, l, a, s) {
  for (
    var u = 0, c = 0, m = l, h = 0, g = 0, w = 0, S = 1, k = 1, d = 1, f = 0, p = "", E = i, _ = o, v = r, C = p;
    k;

  )
    switch (((w = f), (f = Bt()))) {
      case 40:
        if (w != 108 && Fe(C, m - 1) == 58) {
          Dl((C += Q(Es(f), "&", "&\f")), "&\f", Vm(u ? a[u - 1] : 0)) != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Es(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += dw(w);
        break;
      case 92:
        C += fw(Ml() - 1, 7);
        continue;
      case 47:
        switch (xr()) {
          case 42:
          case 47:
            to(vw(hw(Bt(), Ml()), t, n, s), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * S:
        a[u++] = qt(C) * d;
      case 125 * S:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            k = 0;
          case 59 + c:
            d == -1 && (C = Q(C, /\f/g, "")),
              g > 0 &&
                qt(C) - m &&
                to(g > 32 ? If(C + ";", r, n, m - 1, s) : If(Q(C, " ", "") + ";", r, n, m - 2, s), s);
            break;
          case 59:
            C += ";";
          default:
            if ((to((v = Ff(C, t, n, u, c, i, a, p, (E = []), (_ = []), m, o)), o), f === 123))
              if (c === 0) Fl(C, t, v, v, E, o, m, a, _);
              else
                switch (h === 99 && Fe(C, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Fl(e, v, v, r && to(Ff(e, v, v, 0, 0, i, a, p, i, (E = []), m, _), _), i, _, m, a, r ? E : _);
                    break;
                  default:
                    Fl(C, v, v, v, [""], _, 0, a, _);
                }
        }
        (u = c = g = 0), (S = d = 1), (p = C = ""), (m = l);
        break;
      case 58:
        (m = 1 + qt(C)), (g = w);
      default:
        if (S < 1) {
          if (f == 123) --S;
          else if (f == 125 && S++ == 0 && sw() == 125) continue;
        }
        switch (((C += Bc(f)), f * S)) {
          case 38:
            d = c > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (a[u++] = (qt(C) - 1) * d), (d = 1);
            break;
          case 64:
            xr() === 45 && (C += Es(Bt())), (h = xr()), (c = m = qt((p = C += pw(Ml())))), f++;
            break;
          case 45:
            w === 45 && qt(C) == 2 && (S = 0);
        }
    }
  return o;
}
function Ff(e, t, n, r, i, o, l, a, s, u, c, m) {
  for (var h = i - 1, g = i === 0 ? o : [""], w = Km(g), S = 0, k = 0, d = 0; S < r; ++S)
    for (var f = 0, p = Pi(e, h + 1, (h = Vm((k = l[S])))), E = e; f < w; ++f)
      (E = Qm(k > 0 ? g[f] + " " + p : Q(p, /&\f/g, g[f]))) && (s[d++] = E);
  return Ma(e, t, n, i === 0 ? Oa : a, s, u, c, m);
}
function vw(e, t, n, r) {
  return Ma(e, t, n, Wm, Bc(aw()), Pi(e, 2, -2), 0, r);
}
function If(e, t, n, r, i) {
  return Ma(e, t, n, Uc, Pi(e, 0, r), Pi(e, r + 1, -1), r, i);
}
function Ym(e, t, n) {
  switch (ow(e, t)) {
    case 5103:
      return ne + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ne + e + e;
    case 4789:
      return ho + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ne + e + ho + e + ue + e + e;
    case 5936:
      switch (Fe(e, t + 11)) {
        case 114:
          return ne + e + ue + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ne + e + ue + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ne + e + ue + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ne + e + ue + e + e;
    case 6165:
      return ne + e + ue + "flex-" + e + e;
    case 5187:
      return ne + e + Q(e, /(\w+).+(:[^]+)/, ne + "box-$1$2" + ue + "flex-$1$2") + e;
    case 5443:
      return (
        ne +
        e +
        ue +
        "flex-item-" +
        Q(e, /flex-|-self/g, "") +
        (rn(e, /flex-|baseline/) ? "" : ue + "grid-row-" + Q(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return ne + e + ue + "flex-line-pack" + Q(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return ne + e + ue + Q(e, "shrink", "negative") + e;
    case 5292:
      return ne + e + ue + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return ne + "box-" + Q(e, "-grow", "") + ne + e + ue + Q(e, "grow", "positive") + e;
    case 4554:
      return ne + Q(e, /([^-])(transform)/g, "$1" + ne + "$2") + e;
    case 6187:
      return Q(Q(Q(e, /(zoom-|grab)/, ne + "$1"), /(image-set)/, ne + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, ne + "$1$`$1");
    case 4968:
      return (
        Q(Q(e, /(.+:)(flex-)?(.*)/, ne + "box-pack:$3" + ue + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ne + e + e
      );
    case 4200:
      if (!rn(e, /flex-|baseline/)) return ue + "grid-column-align" + Pi(e, t) + e;
      break;
    case 2592:
    case 3360:
      return ue + Q(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), rn(r.props, /grid-\w+-end/);
        })
        ? ~Dl(e + (n = n[t].value), "span", 0)
          ? e
          : ue +
            Q(e, "-start", "") +
            e +
            ue +
            "grid-row-span:" +
            (~Dl(n, "span", 0) ? rn(n, /\d+/) : +rn(n, /\d+/) - +rn(e, /\d+/)) +
            ";"
        : ue + Q(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return rn(r.props, /grid-\w+-start/);
        })
        ? e
        : ue + Q(Q(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, ne + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (qt(e) - 1 - t > 6)
        switch (Fe(e, t + 1)) {
          case 109:
            if (Fe(e, t + 4) !== 45) break;
          case 102:
            return Q(e, /(.+:)(.+)-([^]+)/, "$1" + ne + "$2-$3$1" + ho + (Fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Dl(e, "stretch", 0) ? Ym(Q(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return Q(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (r, i, o, l, a, s, u) {
        return ue + i + ":" + o + u + (l ? ue + i + "-span:" + (a ? s : +s - +o) + u : "") + e;
      });
    case 4949:
      if (Fe(e, t + 6) === 121) return Q(e, ":", ":" + ne) + e;
      break;
    case 6444:
      switch (Fe(e, Fe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            Q(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" + ne + (Fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ne + "$2$3$1" + ue + "$2box$3"
            ) + e
          );
        case 100:
          return Q(e, ":", ":" + ue) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Q(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function fa(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function gw(e, t, n, r) {
  switch (e.type) {
    case iw:
      if (e.children.length) break;
    case rw:
    case Uc:
      return (e.return = e.return || e.value);
    case Wm:
      return "";
    case bm:
      return (e.return = e.value + "{" + fa(e.children, r) + "}");
    case Oa:
      if (!qt((e.value = e.props.join(",")))) return "";
  }
  return qt((n = fa(e.children, r))) ? (e.return = e.value + "{" + n + "}") : "";
}
function yw(e) {
  var t = Km(e);
  return function (n, r, i, o) {
    for (var l = "", a = 0; a < t; a++) l += e[a](n, r, i, o) || "";
    return l;
  };
}
function ww(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function xw(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Uc:
        e.return = Ym(e.value, e.length, n);
        return;
      case bm:
        return fa([Pn(e, { value: Q(e.value, "@", "@" + ne) })], r);
      case Oa:
        if (e.length)
          return lw((n = e.props), function (i) {
            switch (rn(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Ir(Pn(e, { props: [Q(i, /:(read-\w+)/, ":" + ho + "$1")] })),
                  Ir(Pn(e, { props: [i] })),
                  Lu(e, { props: Mf(n, r) });
                break;
              case "::placeholder":
                Ir(Pn(e, { props: [Q(i, /:(plac\w+)/, ":" + ne + "input-$1")] })),
                  Ir(Pn(e, { props: [Q(i, /:(plac\w+)/, ":" + ho + "$1")] })),
                  Ir(Pn(e, { props: [Q(i, /:(plac\w+)/, ue + "input-$1")] })),
                  Ir(Pn(e, { props: [i] })),
                  Lu(e, { props: Mf(n, r) });
                break;
            }
            return "";
          });
    }
}
var Sw = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  dt = {},
  _i = (typeof process < "u" && dt !== void 0 && (dt.REACT_APP_SC_ATTR || dt.SC_ATTR)) || "data-styled",
  qm = "active",
  Xm = "data-styled-version",
  Ia = "6.1.6",
  Hc = `/*!sc*/
`,
  Wc = typeof window < "u" && "HTMLElement" in window,
  kw = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      dt !== void 0 &&
      dt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      dt.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? dt.REACT_APP_SC_DISABLE_SPEEDY !== "false" && dt.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      dt !== void 0 &&
      dt.SC_DISABLE_SPEEDY !== void 0 &&
      dt.SC_DISABLE_SPEEDY !== "" &&
      dt.SC_DISABLE_SPEEDY !== "false" &&
      dt.SC_DISABLE_SPEEDY),
  $a = Object.freeze([]),
  ji = Object.freeze({});
function Ew(e, t, n) {
  return n === void 0 && (n = ji), (e.theme !== n.theme && e.theme) || t || n.theme;
}
var Zm = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Cw = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Pw = /(^-|-$)/g;
function $f(e) {
  return e.replace(Cw, "-").replace(Pw, "");
}
var Rw = /(a)(d)/gi,
  gl = 52,
  Af = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Du(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > gl; t = (t / gl) | 0) n = Af(t % gl) + n;
  return (Af(t % gl) + n).replace(Rw, "$1-$2");
}
var Cs,
  Jm = 5381,
  Zr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  e0 = function (e) {
    return Zr(Jm, e);
  };
function _w(e) {
  return Du(e0(e) >>> 0);
}
function jw(e) {
  return e.displayName || e.name || "Component";
}
function Ps(e) {
  return typeof e == "string" && !0;
}
var t0 = typeof Symbol == "function" && Symbol.for,
  n0 = t0 ? Symbol.for("react.memo") : 60115,
  zw = t0 ? Symbol.for("react.forward_ref") : 60112,
  Nw = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Lw = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  r0 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Tw =
    (((Cs = {})[zw] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
    (Cs[n0] = r0),
    Cs);
function Uf(e) {
  return ("type" in (t = e) && t.type.$$typeof) === n0 ? r0 : "$$typeof" in e ? Tw[e.$$typeof] : Nw;
  var t;
}
var Ow = Object.defineProperty,
  Dw = Object.getOwnPropertyNames,
  Bf = Object.getOwnPropertySymbols,
  Mw = Object.getOwnPropertyDescriptor,
  Fw = Object.getPrototypeOf,
  Hf = Object.prototype;
function i0(e, t, n) {
  if (typeof t != "string") {
    if (Hf) {
      var r = Fw(t);
      r && r !== Hf && i0(e, r, n);
    }
    var i = Dw(t);
    Bf && (i = i.concat(Bf(t)));
    for (var o = Uf(e), l = Uf(t), a = 0; a < i.length; ++a) {
      var s = i[a];
      if (!(s in Lw || (n && n[s]) || (l && s in l) || (o && s in o))) {
        var u = Mw(t, s);
        try {
          Ow(e, s, u);
        } catch {}
      }
    }
  }
  return e;
}
function zi(e) {
  return typeof e == "function";
}
function bc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function hr(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Wf(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Do(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Mu(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Do(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Mu(e[r], t[r]);
  else if (Do(t)) for (var r in t) e[r] = Mu(e[r], t[r]);
  return e;
}
function Vc(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Go(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var Iw = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, o = i; t >= o; ) if ((o <<= 1) < 0) throw Go(16, "".concat(t));
          (this.groupSizes = new Uint32Array(o)), this.groupSizes.set(r), (this.length = o);
          for (var l = i; l < o; l++) this.groupSizes[l] = 0;
        }
        for (var a = this.indexOfGroup(t + 1), s = ((l = 0), n.length); l < s; l++)
          this.tag.insertRule(a, n[l]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var o = r; o < i; o++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (var r = this.groupSizes[t], i = this.indexOfGroup(t), o = i + r, l = i; l < o; l++)
          n += "".concat(this.tag.getRule(l)).concat(Hc);
        return n;
      }),
      e
    );
  })(),
  Il = new Map(),
  ha = new Map(),
  $l = 1,
  yl = function (e) {
    if (Il.has(e)) return Il.get(e);
    for (; ha.has($l); ) $l++;
    var t = $l++;
    return Il.set(e, t), ha.set(t, e), t;
  },
  $w = function (e, t) {
    ($l = t + 1), Il.set(e, t), ha.set(t, e);
  },
  Aw = "style[".concat(_i, "][").concat(Xm, '="').concat(Ia, '"]'),
  Uw = new RegExp("^".concat(_i, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
  Bw = function (e, t, n) {
    for (var r, i = n.split(","), o = 0, l = i.length; o < l; o++) (r = i[o]) && e.registerName(t, r);
  },
  Hw = function (e, t) {
    for (
      var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Hc), i = [], o = 0, l = r.length;
      o < l;
      o++
    ) {
      var a = r[o].trim();
      if (a) {
        var s = a.match(Uw);
        if (s) {
          var u = 0 | parseInt(s[1], 10),
            c = s[2];
          u !== 0 && ($w(c, u), Bw(e, c, s[3]), e.getTag().insertRules(u, i)), (i.length = 0);
        } else i.push(a);
      }
    }
  };
function Ww() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var o0 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (a) {
        var s = Array.from(a.querySelectorAll("style[".concat(_i, "]")));
        return s[s.length - 1];
      })(n),
      o = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(_i, qm), r.setAttribute(Xm, Ia);
    var l = Ww();
    return l && r.setAttribute("nonce", l), n.insertBefore(r, o), r;
  },
  bw = (function () {
    function e(t) {
      (this.element = o0(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
            var l = r[i];
            if (l.ownerNode === n) return l;
          }
          throw Go(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  Vw = (function () {
    function e(t) {
      (this.element = o0(t)), (this.nodes = this.element.childNodes), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  Qw = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  bf = Wc,
  Kw = { isServer: !Wc, useCSSOMInjection: !kw },
  l0 = (function () {
    function e(t, n, r) {
      t === void 0 && (t = ji), n === void 0 && (n = {});
      var i = this;
      (this.options = it(it({}, Kw), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Wc &&
          bf &&
          ((bf = !1),
          (function (o) {
            for (var l = document.querySelectorAll(Aw), a = 0, s = l.length; a < s; a++) {
              var u = l[a];
              u && u.getAttribute(_i) !== qm && (Hw(o, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        Vc(this, function () {
          return (function (o) {
            for (
              var l = o.getTag(),
                a = l.length,
                s = "",
                u = function (m) {
                  var h = (function (d) {
                    return ha.get(d);
                  })(m);
                  if (h === void 0) return "continue";
                  var g = o.names.get(h),
                    w = l.getGroup(m);
                  if (g === void 0 || w.length === 0) return "continue";
                  var S = "".concat(_i, ".g").concat(m, '[id="').concat(h, '"]'),
                    k = "";
                  g !== void 0 &&
                    g.forEach(function (d) {
                      d.length > 0 && (k += "".concat(d, ","));
                    }),
                    (s += "".concat(w).concat(S, '{content:"').concat(k, '"}').concat(Hc));
                },
                c = 0;
              c < a;
              c++
            )
              u(c);
            return s;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return yl(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return n === void 0 && (n = !0), new e(it(it({}, this.options), t), this.gs, (n && this.names) || void 0);
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new Qw(i) : r ? new bw(i) : new Vw(i);
            })(this.options)),
            new Iw(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((yl(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(yl(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(yl(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  Gw = /&/g,
  Yw = /^\s*\/\/.*$/gm;
function a0(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = a0(n.children, t)),
      n
    );
  });
}
function qw(e) {
  var t,
    n,
    r,
    i = e === void 0 ? ji : e,
    o = i.options,
    l = o === void 0 ? ji : o,
    a = i.plugins,
    s = a === void 0 ? $a : a,
    u = function (h, g, w) {
      return w.startsWith(n) && w.endsWith(n) && w.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
    },
    c = s.slice();
  c.push(function (h) {
    h.type === Oa && h.value.includes("&") && (h.props[0] = h.props[0].replace(Gw, n).replace(r, u));
  }),
    l.prefix && c.push(xw),
    c.push(gw);
  var m = function (h, g, w, S) {
    g === void 0 && (g = ""),
      w === void 0 && (w = ""),
      S === void 0 && (S = "&"),
      (t = S),
      (n = g),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var k = h.replace(Yw, ""),
      d = mw(w || g ? "".concat(w, " ").concat(g, " { ").concat(k, " }") : k);
    l.namespace && (d = a0(d, l.namespace));
    var f = [];
    return (
      fa(
        d,
        yw(
          c.concat(
            ww(function (p) {
              return f.push(p);
            })
          )
        )
      ),
      f
    );
  };
  return (
    (m.hash = s.length
      ? s
          .reduce(function (h, g) {
            return g.name || Go(15), Zr(h, g.name);
          }, Jm)
          .toString()
      : ""),
    m
  );
}
var Xw = new l0(),
  Fu = qw(),
  s0 = ot.createContext({ shouldForwardProp: void 0, styleSheet: Xw, stylis: Fu });
s0.Consumer;
ot.createContext(void 0);
function Vf() {
  return z.useContext(s0);
}
var Zw = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, o) {
        o === void 0 && (o = Fu);
        var l = r.name + o.hash;
        i.hasNameForId(r.id, l) || i.insertRules(r.id, l, o(r.rules, l, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Vc(this, function () {
          throw Go(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Fu), this.name + t.hash;
      }),
      e
    );
  })(),
  Jw = function (e) {
    return e >= "A" && e <= "Z";
  };
function Qf(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Jw(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var u0 = function (e) {
    return e == null || e === !1 || e === "";
  },
  c0 = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var o = e[i];
      e.hasOwnProperty(i) &&
        !u0(o) &&
        ((Array.isArray(o) && o.isCss) || zi(o)
          ? r.push("".concat(Qf(i), ":"), o, ";")
          : Do(o)
          ? r.push.apply(r, da(da(["".concat(i, " {")], c0(o), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Qf(i), ": ")
                .concat(
                  ((t = i),
                  (n = o) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" || n === 0 || t in Sw || t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Sr(e, t, n, r) {
  if (u0(e)) return [];
  if (bc(e)) return [".".concat(e.styledComponentId)];
  if (zi(e)) {
    if (!zi((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t) return [e];
    var i = e(t);
    return Sr(i, t, n, r);
  }
  var o;
  return e instanceof Zw
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Do(e)
    ? c0(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        $a,
        e.map(function (l) {
          return Sr(l, t, n, r);
        })
      )
    : [e.toString()];
}
function e2(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (zi(n) && !bc(n)) return !1;
  }
  return !0;
}
var t2 = e0(Ia),
  n2 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && e2(t)),
        (this.componentId = n),
        (this.baseHash = Zr(t2, n)),
        (this.baseStyle = r),
        l0.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
        if (this.isStatic && !r.hash)
          if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) i = hr(i, this.staticRulesId);
          else {
            var o = Wf(Sr(this.rules, t, n, r)),
              l = Du(Zr(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, l)) {
              var a = r(o, ".".concat(l), void 0, this.componentId);
              n.insertRules(this.componentId, l, a);
            }
            (i = hr(i, l)), (this.staticRulesId = l);
          }
        else {
          for (var s = Zr(this.baseHash, r.hash), u = "", c = 0; c < this.rules.length; c++) {
            var m = this.rules[c];
            if (typeof m == "string") u += m;
            else if (m) {
              var h = Wf(Sr(m, t, n, r));
              (s = Zr(s, h + c)), (u += h);
            }
          }
          if (u) {
            var g = Du(s >>> 0);
            n.hasNameForId(this.componentId, g) ||
              n.insertRules(this.componentId, g, r(u, ".".concat(g), void 0, this.componentId)),
              (i = hr(i, g));
          }
        }
        return i;
      }),
      e
    );
  })(),
  d0 = ot.createContext(void 0);
d0.Consumer;
var Rs = {};
function r2(e, t, n) {
  var r = bc(e),
    i = e,
    o = !Ps(e),
    l = t.attrs,
    a = l === void 0 ? $a : l,
    s = t.componentId,
    u =
      s === void 0
        ? (function (E, _) {
            var v = typeof E != "string" ? "sc" : $f(E);
            Rs[v] = (Rs[v] || 0) + 1;
            var C = "".concat(v, "-").concat(_w(Ia + v + Rs[v]));
            return _ ? "".concat(_, "-").concat(C) : C;
          })(t.displayName, t.parentComponentId)
        : s,
    c = t.displayName,
    m =
      c === void 0
        ? (function (E) {
            return Ps(E) ? "styled.".concat(E) : "Styled(".concat(jw(E), ")");
          })(e)
        : c,
    h = t.displayName && t.componentId ? "".concat($f(t.displayName), "-").concat(t.componentId) : t.componentId || u,
    g = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    w = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var S = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var k = t.shouldForwardProp;
      w = function (E, _) {
        return S(E, _) && k(E, _);
      };
    } else w = S;
  }
  var d = new n2(n, h, r ? i.componentStyle : void 0);
  function f(E, _) {
    return (function (v, C, N) {
      var T = v.attrs,
        $ = v.componentStyle,
        Z = v.defaultProps,
        Se = v.foldedComponentIds,
        ge = v.styledComponentId,
        et = v.target,
        yn = ot.useContext(d0),
        Wt = Vf(),
        ie = v.shouldForwardProp || Wt.shouldForwardProp,
        D = Ew(C, yn, Z) || ji,
        I = (function (be, Ee, ct) {
          for (var nr, en = it(it({}, Ee), { className: void 0, theme: ct }), Mi = 0; Mi < be.length; Mi += 1) {
            var Le = zi((nr = be[Mi])) ? nr(en) : nr;
            for (var tt in Le)
              en[tt] = tt === "className" ? hr(en[tt], Le[tt]) : tt === "style" ? it(it({}, en[tt]), Le[tt]) : Le[tt];
          }
          return Ee.className && (en.className = hr(en.className, Ee.className)), en;
        })(T, C, D),
        B = I.as || et,
        Y = {};
      for (var J in I)
        I[J] === void 0 ||
          J[0] === "$" ||
          J === "as" ||
          (J === "theme" && I.theme === D) ||
          (J === "forwardedAs" ? (Y.as = I.forwardedAs) : (ie && !ie(J, B)) || (Y[J] = I[J]));
      var ut = (function (be, Ee) {
          var ct = Vf(),
            nr = be.generateAndInjectStyles(Ee, ct.styleSheet, ct.stylis);
          return nr;
        })($, I),
        ke = hr(Se, ge);
      return (
        ut && (ke += " " + ut),
        I.className && (ke += " " + I.className),
        (Y[Ps(B) && !Zm.has(B) ? "class" : "className"] = ke),
        (Y.ref = N),
        z.createElement(B, Y)
      );
    })(p, E, _);
  }
  f.displayName = m;
  var p = ot.forwardRef(f);
  return (
    (p.attrs = g),
    (p.componentStyle = d),
    (p.displayName = m),
    (p.shouldForwardProp = w),
    (p.foldedComponentIds = r ? hr(i.foldedComponentIds, i.styledComponentId) : ""),
    (p.styledComponentId = h),
    (p.target = r ? i.target : e),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (E) {
        this._foldedDefaultProps = r
          ? (function (_) {
              for (var v = [], C = 1; C < arguments.length; C++) v[C - 1] = arguments[C];
              for (var N = 0, T = v; N < T.length; N++) Mu(_, T[N], !0);
              return _;
            })({}, i.defaultProps, E)
          : E;
      },
    }),
    Vc(p, function () {
      return ".".concat(p.styledComponentId);
    }),
    o &&
      i0(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    p
  );
}
function Kf(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Gf = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function i2(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (zi(e) || Do(e)) return Gf(Sr(Kf($a, da([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Sr(r) : Gf(Sr(Kf(r, t)));
}
function Iu(e, t, n) {
  if ((n === void 0 && (n = ji), !t)) throw Go(1, t);
  var r = function (i) {
    for (var o = [], l = 1; l < arguments.length; l++) o[l - 1] = arguments[l];
    return e(t, n, i2.apply(void 0, da([i], o, !1)));
  };
  return (
    (r.attrs = function (i) {
      return Iu(e, t, it(it({}, n), { attrs: Array.prototype.concat(n.attrs, i).filter(Boolean) }));
    }),
    (r.withConfig = function (i) {
      return Iu(e, t, it(it({}, n), i));
    }),
    r
  );
}
var f0 = function (e) {
    return Iu(r2, e);
  },
  We = f0;
Zm.forEach(function (e) {
  We[e] = f0(e);
});
const o2 = ({ fill: e = "none", stroke: t = "none" }) =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: e,
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: t,
      children: y.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
      }),
    }),
  l2 = ({ fill: e = "none", stroke: t = "none" }) =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: e,
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: t,
      className: "w-6 h-6",
      children: y.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
      }),
    }),
  a2 = ({ fill: e, stroke: t }) =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: e,
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: t,
      children: y.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
      }),
    }),
  h0 = ({ fill: e, stroke: t }) =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      stroke: t,
      fill: e,
      children: y.jsx("path", {
        fillRule: "evenodd",
        d: "M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z",
        clipRule: "evenodd",
      }),
    }),
  s2 = We.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 97;

  background-color: var(--color-white);
  color: var(--color-primary);

  height: 10rem;

  padding: 0 2rem;
  border-bottom: 1px solid var(--color-border);

  .layout-top-nav--logo {
    position: relative;

    display: flex;
    flex-direction: column;

    color: var(--color-primary);

    width: 22rem;

    font-family: "Rubik Glitch", system-ui;
    font-size: 3.8rem;
  }

  .layout-top-nav--category-links {
    display: none;
  }

  .layout-top-nav--user-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.8rem;
  }

  .layout-top-nav--user-links a {
    display: none;
  }

  .layout-top-nav--user-links button {
    display: grid;
    place-items: center;
  }

  .layout-top-nav--user-links svg {
    width: 3rem;
  }

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);
  }

  @media (min-width: 530px) {
    .layout-top-nav--logo {
      font-size: var(--font-text-8);
    }

    .layout-top-nav--link {
      font-size: 1.6rem;
      font-weight: 500;
    }

    .layout-top-nav--user-links {
      width: 22rem;
    }

    .layout-top-nav--user-links a {
      display: grid;
      place-items: center;
    }
  }

  @media (min-width: 1000px) {
    .layout-top-nav--category-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .layout-top-nav--category-links a:hover,
    .layout-top-nav--category-links a.active {
      text-decoration: underline;
    }

    .layout-top-nav--user-links button {
      display: none;
    }
  }
`,
  u2 = () => {
    const [e, t] = z.useState(!1),
      n = [
        { name: "Casual", linkName: "casual" },
        { name: "Streetwear", linkName: "streetwear" },
        { name: "Comfy", linkName: "comfy" },
        { name: "Community Picks", linkName: "community-picks" },
        { name: "Profile", linkName: "Profile" },
        { name: "Cart", linkName: "cart" },
      ];
    return y.jsxs(s2, {
      children: [
        y.jsx(zr, { to: "/", className: "layout-top-nav--logo", children: "Shoe Szn" }),
        y.jsxs("div", {
          className: "layout-top-nav--category-links",
          children: [
            y.jsx(ar, { to: "/casual", className: "layout-top-nav--link", children: "Casual" }),
            y.jsx(ar, { to: "/streetwear", className: "layout-top-nav--link", children: "Streetwear" }),
            y.jsx(ar, { to: "/comfy", className: "layout-top-nav--link", children: "Comfy" }),
            y.jsx(ar, { to: "/community-picks", className: "layout-top-nav--link", children: "Community Picks" }),
          ],
        }),
        y.jsxs("div", {
          className: "layout-top-nav--user-links",
          children: [
            y.jsx(ar, { to: "/profile", children: y.jsx(o2, { stroke: "var(--color-primary)" }) }),
            y.jsx(ar, { to: "/cart", children: y.jsx(l2, { stroke: "var(--color-primary)" }) }),
            y.jsx("button", {
              onClick: () => {
                t(!e);
              },
              children: y.jsx(a2, { stroke: "var(--color-primary)" }),
            }),
          ],
        }),
        y.jsx(d2, { linksInfo: n, isSidebarVisible: e, setIsSidebarVisible: t }),
      ],
    });
  },
  c2 = We.div`
  & {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;

    background-color: var(--color-sidebar-overlay);

    opacity: 0;
  }

  &.visible {
    right: 0;
    bottom: 0;

    opacity: 1;
  }

  nav {
    display: ${(e) => (e.isSidebarVisible ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;

    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;

    background-color: var(--color-white);

    height: 100vh;

    font-size: 1.8rem;

    padding: 4rem 2rem 2rem 15rem;
  }

  nav button {
    display: grid;
    place-items: center;

    position: relative;
    left: 4.5%;
  }

  nav svg {
    width: 3rem;

    margin-bottom: 3rem;
  }

  nav a:hover {
    text-decoration: underline;
  }

  nav a.active {
    text-decoration: underline;
  }

  @media (min-width: 530px) {
    a:nth-child(5),
    a:nth-child(6) {
      display: none;
    }
  }
`,
  d2 = ({ linksInfo: e, isSidebarVisible: t, setIsSidebarVisible: n }) => (
    t ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll"),
    y.jsx(c2, {
      className: t ? "visible" : "",
      isSidebarVisible: t,
      children: y.jsxs("nav", {
        children: [
          y.jsx("button", {
            onClick: () => {
              n(!t);
            },
            children: y.jsx(h0, { fill: "var(--color-primary)" }),
          }),
          e.map((r) => y.jsx(ar, { to: r.linkName, onClick: () => n(!t), children: r.name }, "sidebar-" + r.name)),
        ],
      }),
    })
  ),
  f2 = We.section`
  .layout--announcement {
    display: grid;
    place-items: center;

    background-color: var(--color-primary);
    color: var(--color-white);

    height: 5rem;

    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.5px;

    padding: 0 4rem;
  }

  .layout--subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: var(--color-gray-layout-text00);
    color: var(--color-primary);

    height: 40rem;

    padding: 0 2rem;
  }

  .layout--subscribe header {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    line-height: 40px;
  }

  .layout--subscribe p {
    max-width: 100rem;

    color: var(--color-gray-500);

    font-size: 1.6rem;
    text-align: center;

    margin-bottom: 1rem;
  }

  .layout--subscribe input,
  .layout--subscribe button {
    height: 3.5rem;

    font-size: 1.4rem;

    padding: 0 2rem;
  }

  .layout--subscribe input {
    width: 20rem;
    border: 1px solid var(--color-primary);
  }

  .layout--subscribe button {
    background-color: var(--color-primary);
    color: var(--color-white);

    width: 11rem;
  }

  .layout--footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: var(--color-primary);
    color: var(--color-white);

    height: 15rem;

    padding: 0 2rem;
  }

  .layout--footer p {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }

  .layout--footer > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--color-gray-400);
  }

  .layout--footer a {
    color: var(--color-gray-400);

    font-size: 1.3rem;
  }

  .layout--footer a:hover {
    text-decoration: underline;
  }

  @media (min-width: 426px) {
    .layout--subscribe {
      padding: 0 4rem;
    }

    .layout--subscribe input {
      width: fit-content;
    }

    .layout--footer {
      padding: 0 4rem;
    }
  }

  @media (min-width: 530px) {
    .layout--announcement {
      font-size: 1.4rem;
    }

    .layout--subscribe header {
      font-size: 3.5rem;
      line-height: 50px;
    }

    .layout-subscribe p {
      font-size: 2rem;
    }

    .layout--subscribe input,
    .layout--subscribe button {
      height: 4rem;

      font-size: 1.6rem;
    }

    .layout--subscribe button {
      width: 13rem;
    }

    .layout--footer p {
      font-size: 1.8rem;
    }

    .layout--footer a {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 860px) {
    .layout--subscribe header {
      font-size: 4rem;
    }

    .layout--subscribe p {
      font-size: 2.2rem;
    }

    .layout--footer p {
      font-size: 2rem;
    }
  }
`,
  h2 = () =>
    y.jsxs(f2, {
      children: [
        y.jsx("section", {
          className: "layout--announcement",
          children: "Free shipping for first-time buyers. That's right, free.",
        }),
        y.jsx(u2, {}),
        y.jsx(uy, {}),
        y.jsxs("section", {
          className: "layout--subscribe",
          children: [
            y.jsx("header", { children: "Let's stay in touch" }),
            y.jsx("p", {
              children:
                "Subscribe to our newsletter. Get 50% off your first purchase, exclusive offers, and a sneak peak into future releases.",
            }),
            y.jsxs("div", {
              children: [
                y.jsx("input", { type: "text", placeholder: "Enter email" }),
                y.jsx("button", { children: "Subscribe" }),
              ],
            }),
          ],
        }),
        y.jsxs("footer", {
          className: "layout--footer",
          children: [
            y.jsx("p", { children: "Check me out" }),
            y.jsxs("div", {
              children: [
                y.jsx("a", {
                  href: "https://www.linkedin.com/in/elias-iv-roman/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "LinkedIn",
                }),
                y.jsx("div", { children: "·" }),
                y.jsx("a", {
                  href: "https://github.com/sailecodes",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "GitHub",
                }),
                y.jsx("div", { children: "·" }),
                y.jsx("a", {
                  href: "https://eliasiv-portfolio.netlify.app/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Portfolio",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ee = "/assets/gray-bg-DxT7xWmq.jpg",
  p2 = We.section`
  .home-hero--main {
    position: relative;

    background-image: url(${ee});
    background-size: cover;

    height: 50rem;
  }

  .home-hero--main div {
    display: none;
  }

  .home-hero--solo-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--color-gray-layout-text00);
    color: var(--color-primary);

    padding: 4rem 2rem 5rem 2rem;
    margin-bottom: 10rem;
  }

  p:nth-child(1) {
    font-size: 3.4rem;
    font-weight: 600;
    text-align: center;
    line-height: 40px;

    margin-bottom: 1rem;
  }

  p:nth-child(2) {
    font-size: 2rem;
    text-align: center;

    margin-bottom: 1.7rem;
  }

  a {
    display: grid;
    place-items: center;

    background-color: var(--color-primary);
    color: var(--color-white);

    font-size: 1.4rem;

    height: 4rem;
    width: 22rem;
  }

  @media (min-width: 426px) {
    .home-hero--solo-text {
      padding: 4rem var(--padding-side) 5rem var(--padding-side);
    }
  }

  @media (min-width: 530px) {
    p:nth-child(1) {
      font-size: 4rem;
      line-height: 50px;
    }

    p:nth-child(2) {
      font-size: 2.2rem;
    }

    a {
      width: 25rem;

      font-size: 1.6rem;
    }
  }

  @media (min-width: 860px) {
    .home-hero--main {
      display: grid;
      place-content: center;

      color: var(--color-primary);

      height: 72rem;

      padding: 0 var(--padding-side);
      margin-bottom: 10rem;
    }

    .home-hero--main div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      max-width: 110rem;
    }

    .home-hero--solo-text {
      display: none;
    }

    p:nth-child(1) {
      font-size: 5rem;
    }

    p:nth-child(2) {
      font-size: 2.5rem;

      margin-bottom: 1.7rem;
    }

    a {
      width: 26rem;
    }
  }
`,
  m2 = () =>
    y.jsxs(p2, {
      children: [
        y.jsx("div", {
          className: "home-hero--main",
          children: y.jsxs("div", {
            children: [
              y.jsx("p", { children: "Shoes by the community, for the community" }),
              y.jsx("p", {
                children:
                  "Every pair is chosen by a community of individuals who love and are passionate about shoes. Not a big shoe lover? No worries. You've still come to the right place.",
              }),
              y.jsx(zr, { to: "/community-picks", children: "See our community picks" }),
            ],
          }),
        }),
        y.jsxs("div", {
          className: "home-hero--solo-text",
          children: [
            y.jsx("p", { children: "Shoes by the community, for the community" }),
            y.jsx("p", {
              children:
                "Every pair is chosen by a community of individuals who love and are passionate about shoes. Not a big shoe lover? No worries. You've still come to the right place.",
            }),
            y.jsx(zr, { to: "/community-picks", children: "See our community picks" }),
          ],
        }),
      ],
    });
var p0 = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  Yf = ot.createContext && ot.createContext(p0),
  Kn = function () {
    return (
      (Kn =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      Kn.apply(this, arguments)
    );
  },
  v2 = function (e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  };
function m0(e) {
  return (
    e &&
    e.map(function (t, n) {
      return ot.createElement(t.tag, Kn({ key: n }, t.attr), m0(t.child));
    })
  );
}
function Di(e) {
  return function (t) {
    return ot.createElement(g2, Kn({ attr: Kn({}, e.attr) }, t), m0(e.child));
  };
}
function g2(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      l = v2(e, ["attr", "size", "title"]),
      a = i || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      ot.createElement(
        "svg",
        Kn({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, n.attr, r, l, {
          className: s,
          style: Kn(Kn({ color: e.color || n.color }, n.style), e.style),
          height: a,
          width: a,
          xmlns: "http://www.w3.org/2000/svg",
        }),
        o && ot.createElement("title", null, o),
        e.children
      )
    );
  };
  return Yf !== void 0
    ? ot.createElement(Yf.Consumer, null, function (n) {
        return t(n);
      })
    : t(p0);
}
function y2(e) {
  return Di({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z",
        },
      },
    ],
  })(e);
}
function w2(e) {
  return Di({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M0 5.2645l2.0221 4.5892 2.0217-4.5892zm2.0221 7.601c.6982 0 1.2656-.5655 1.2656-1.2606 0-.6985-.5674-1.2618-1.2656-1.2618-.7003 0-1.2661.5633-1.2661 1.2618 0 .6951.5658 1.2607 1.2661 1.2607zm-1.0937 3.361c0 .9572.862 2.509 3.3142 2.509 2.4529 0 3.3154-1.1872 3.3154-2.509V5.2645H5.3693l.0011 11.3428c0 .6196-.5037 1.1392-1.1261 1.1392-.6231 0-1.1279-.5045-1.1279-1.124l-.0016-2.3108H.9284zm8.2885 2.3119V5.2645h4.3745c.8441 0 2.187.693 2.187 2.1628v2.2611c0 .6612-.5798 1.8328-1.4412 1.8328.8614 0 1.4412.7422 1.4412 1.3045v3.9788c0 .6767-.5463 1.7339-2.187 1.7339zm3.3802-7.559c.7955 0 .9944-.134.9944-2.2147 0-2.0801-.199-2.246-.9944-2.246h-1.1948v4.4575zm.9944 3.8108c0-2.0812 0-2.6906-.8636-2.6906h-1.3256v5.3482l1.3255.0027c.8636 0 .8636-.5807.8636-2.6603zm3.779 3.7482H24v-4.2267h-2.1886l.0016 2.3107c0 .6196-.5047 1.1241-1.1273 1.1241-.622 0-1.1273-.5045-1.1273-1.124V5.2644h-2.188Z",
        },
      },
    ],
  })(e);
}
function x2(e) {
  return Di({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M11.482 16.752c-.01.688-.56 1.242-1.238 1.242-.689 0-1.23-.541-1.244-1.23h-.016v-6.243H9v-.029c0-.693.556-1.256 1.237-1.256s1.236.563 1.236 1.258v.045h.016v6.225h-.016l.009-.012zm11.137-4.889c.75 0 1.381.618 1.381 1.377 0 .76-.631 1.375-1.381 1.375-.766 0-1.395-.615-1.395-1.379 0-.766.615-1.381 1.379-1.381l.016.008zm-2.084 4.186c.121.195.193.432.193.686 0 .703-.553 1.26-1.244 1.26-.463 0-.869-.256-1.08-.631l-2.053-2.746-.631.586v1.635h-.014c-.039.652-.57 1.168-1.225 1.168-.674 0-1.221-.553-1.221-1.238v-.025h-.016v-9.45h.027v-.047c0-.69.551-1.253 1.23-1.253.674 0 1.225.562 1.225 1.253v.07h.016l.01 4.597 2.311-2.261c.229-.255.559-.405.928-.405.689 0 1.248.57 1.248 1.26 0 .346-.133.646-.344.871l.012.015-1.621 1.605 2.281 3.061-.016.016-.016-.027zm-13.246 0c.12.195.195.432.195.686 0 .703-.555 1.26-1.244 1.26-.466 0-.871-.256-1.081-.631l-2.054-2.746-.63.586v1.631H2.46c-.036.654-.57 1.17-1.221 1.17-.676 0-1.225-.555-1.225-1.238v-.027H0V7.29h.031c-.004-.015-.004-.029-.004-.044 0-.69.551-1.252 1.23-1.252.675 0 1.225.559 1.225 1.25v.07h.016l.01 4.6 2.311-2.261c.23-.255.562-.405.931-.405.687 0 1.245.57 1.245 1.26 0 .33-.131.646-.346.871l.016.015-1.627 1.605 2.271 3.061-.016.016-.004-.027z",
        },
      },
    ],
  })(e);
}
function S2(e) {
  return Di({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M21.272,14.815h-0.098c-0.747,2.049-2.335,3.681-4.363,4.483v-4.483l2.444-2.182l-2.444-2.182V7.397 c2.138,0.006,3.885-1.703,3.927-3.84c0-2.629-2.509-3.556-3.927-3.556c-0.367-0.007-0.734,0.033-1.091,0.12v0.131h0.556 c0.801-0.141,1.565,0.394,1.706,1.195C17.99,1.491,17.996,1.537,18,1.583c-0.033,0.789-0.7,1.401-1.488,1.367 c-0.02-0.001-0.041-0.002-0.061-0.004c-2.444,0-5.323-1.985-8.454-1.985C5.547,0.83,3.448,2.692,3.284,5.139 C3.208,6.671,4.258,8.031,5.76,8.346v-0.12C5.301,7.931,5.041,7.407,5.084,6.862c0.074-1.015,0.957-1.779,1.973-1.705 C7.068,5.159,7.08,5.16,7.091,5.161c2.629,0,6.872,2.182,9.501,2.182h0.098v3.142l-2.444,2.182l2.444,2.182v4.549 c-0.978,0.322-2.003,0.481-3.033,0.469c-1.673,0.084-3.318-0.456-4.614-1.516l4.429-1.985V7.451l-6.196,2.727 c0.592-1.75,1.895-3.168,3.589-3.905V6.175c-4.516,1.004-8.138,4.243-8.138,8.705c0,5.193,4.025,9.12,9.818,9.12 c6.011,0,8.727-4.363,8.727-8.814V14.815z M8.858,18.186c-1.363-1.362-2.091-3.235-2.007-5.16c-0.016-0.88,0.109-1.756,0.371-2.596 l2.051-0.938v8.476L8.858,18.186z",
        },
      },
    ],
  })(e);
}
function k2(e) {
  return Di({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z",
        },
      },
    ],
  })(e);
}
function E2(e) {
  return Di({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M8.5505 9.8881c.921 0 1.6574.2303 2.2209.7423.3848.3485.5999.8454.5939 1.3665a1.9081 1.9081 0 0 1-.5939 1.3726c-.5272.4848-1.3483.7423-2.221.7423-.8725 0-1.6785-.2575-2.2148-.7423-.3908-.3485-.609-.8484-.603-1.3726 0-.518.2182-1.015.603-1.3665.5-.4545 1.3847-.7423 2.2149-.7423zm.003 3.6692c.4606 0 .8878-.1606 1.1878-.4575.2999-.2999.4332-.6605.4332-1.1029 0-.4242-.1484-.821-.4333-1.1029-.2938-.2908-.7332-.4545-1.1877-.4545s-.8938.1637-1.1907.4545c-.2848.2818-.4333.6787-.4333 1.103-.006.409.1485.806.4333 1.1029.2969.2939.7332.4575 1.1907.4575zm-4.8418-1.9665c.1605.0424.315.094.4666.1636a1.352 1.352 0 0 1 .3787.2576c.197.206.309.4817.306.7665a.9643.9643 0 0 1-.3787.7788 2.0662 2.0662 0 0 1-.709.3485 3.7231 3.7231 0 0 1-1.1938.1697c-.352 0-.5467-.0406-.8138-.0962l-.077-.016c-.294-.0666-.5817-.1575-.8575-.2787a.0695.0695 0 0 0-.0424-.0121c-.0454 0-.0818.0394-.0818.0848v.203H.1212v-1.4786h.5242a.7559.7559 0 0 0 .1363.418c.2121.2607.4394.3607.6575.4395.3666.1212.7514.1848 1.1362.1969.5526 0 .8756-.134.9455-.163l.009-.0037.0062-.0023c.0616-.0226.3119-.1143.3119-.3916 0-.2743-.2338-.334-.387-.373l-.022-.0058c-.1708-.046-.562-.0872-.9897-.1323l-.1526-.016c-.4848-.0515-.9696-.1273-1.1968-.1758-.4977-.1097-.6942-.2917-.816-.4045l-.0082-.0076A1.0192 1.0192 0 0 1 0 11.1608c0-.497.3394-.797.7575-.9817.4454-.2.9756-.288 1.4392-.288.8211.0031 1.4877.2697 1.727.394.097.0515.1455-.0121.1455-.0606v-.1484h.5272v1.2876h-.4727a.9056.9056 0 0 0-.2939-.4909 1.289 1.289 0 0 0-.297-.1787c-.3968-.1667-.821-.2515-1.2513-.2455-.4423 0-.8665.085-1.0786.2153-.1333.0818-.2.1848-.2.306 0 .1727.1454.2424.2182.2636.1967.0597.6328.103.972.1369.0736.0073.1426.0142.2036.0206.3272.0334 1.012.1243 1.315.2zm18.1673-.9966v-.4787H24v.4696h-.4757c-.1727 0-.2424.0334-.3727.1788l-1.4271 1.63a.098.098 0 0 0-.0182.0698v.7423a1.106 1.106 0 0 0 .0121.103.1496.1496 0 0 0 .1.0909.9368.9368 0 0 0 .1303.009h.4848v.4698h-2.5724v-.4697h.4606a.9343.9343 0 0 0 .1302-.0091.1627.1627 0 0 0 .1031-.091.5626.5626 0 0 0 .009-.1v-.7422c0-.0242 0-.0242-.0333-.0636a606.7592 606.7592 0 0 0-1.4119-1.6028c-.0758-.0788-.2061-.2061-.406-.2061h-.4576v-.4696h2.5876v.4696h-.3121c-.0697 0-.1182.0697-.0576.1455 0 0 .8696 1.0392.8787 1.0513.0091.0122.0152.0122.0273.003.0121-.009.8938-1.0453.8999-1.0543a.0912.0912 0 0 0-.0182-.1273.1095.1095 0 0 0-.0606-.0182zm-6.284-.0031h.4848c.2212 0 .2606.0848.2636.2909l.0273 1.5664-2.5815-2.324H11.944v.4697h.412c.297 0 .3182.1636.3182.309v2.2138c.0004.1285.0009.295-.1818.295h-.506v.4667h2.1634v-.4697h-.5273c-.212 0-.2211-.097-.2242-.303v-1.8816l2.9724 2.6511h.7575l-.0394-2.9966c.003-.218.0182-.2908.2424-.2908h.4726v-.4697H15.595Z",
        },
      },
    ],
  })(e);
}
const C2 = We.section`
  color: var(--color-primary);

  margin-bottom: 10rem;

  p {
    font-size: var(--font-size-7);
    font-weight: 500;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }
`,
  P2 = ({ color: e }) =>
    y.jsx(C2, {
      children: y.jsxs("div", {
        children: [
          y.jsx(y2, { size: 100, color: e }),
          y.jsx(x2, { size: 140, color: e }),
          y.jsx(w2, { size: 130, color: e }),
          y.jsx(E2, { size: 180, color: e }),
          y.jsx(S2, { size: 100, color: e }),
          y.jsx(k2, { size: 100, color: e }),
        ],
      }),
    }),
  R2 = We.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    color: var(--color-primary);

    font-size: 1.5rem;
  }

  p:nth-child(1) {
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  form .item-card--btns {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a,
  form button {
    display: grid;
    place-items: center;

    color: var(--color-primary);

    height: 3.6rem;
    width: 100%;

    font-size: 1.4rem;
    font-weight: 500;

    border: 1px solid var(--color-primary);

    transition: color 0.3s, background-color 0.3s;
  }

  form button {
    line-height: 1;
  }

  a:hover,
  form button:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  form select {
    color: var(--color-primary);

    font-family: inherit;
    font-size: 1.4rem;

    height: 3.6rem;

    border: 1px solid var(--color-primary);
  }

  @media (min-width: 530px) {
    p,
    a,
    form button {
      font-size: 1.6rem;
    }

    form select {
      font-size: 1.6rem;
    }
  }
`,
  v0 = ({ isHomeCard: e, name: t, price: n, img: r, options: i }) => {
    const { mutate: o, isPending: l } = tw({
        mutationFn: (s) => {
          console.log(s);
        },
        onSuccess: (s) => {},
      }),
      a = (s) => {
        s.preventDefault();
        const u = new FormData(s.target),
          c = Object.fromEntries(u);
        c.size !== "Size" && o({ name: t, price: n, size: c.size });
      };
    return y.jsxs(R2, {
      children: [
        y.jsx("img", { src: r, alt: "" }),
        y.jsxs("div", { children: [y.jsx("p", { children: t }), y.jsxs("p", { children: [n, " USD"] })] }),
        !e &&
          y.jsxs("form", {
            onSubmit: a,
            children: [
              y.jsxs("select", {
                id: "size",
                name: "size",
                children: [
                  y.jsx("option", { selected: "selected", children: "Size" }),
                  i.map((s) => y.jsx("option", { value: s, children: s }, "option" + t)),
                ],
              }),
              y.jsxs("div", {
                className: "item-card--btns",
                children: [
                  y.jsx(zr, { to: "/item", children: "See item" }),
                  y.jsx("button", { children: "Add to cart" }),
                ],
              }),
            ],
          }),
        e && y.jsx(zr, { to: "/item", children: "See item" }),
      ],
    });
  },
  Ke = {
    home: {
      showcase: {
        sectionOne: {
          header: "Popular Community Picks",
          shoes: [
            { name: "Bee", price: "$99.99", img: ee },
            { name: "Rainfall V", price: "$67.99", img: ee },
            { name: "Frieza", price: "$199.99", img: ee },
            { name: "Magi Form", price: "$89.99", img: ee },
          ],
        },
        sectionTwo: {
          header: "Best Streetwear",
          shoes: [
            { name: "Optimus", price: "$99.99", img: ee },
            { name: "Yizis", price: "$67.99", img: ee },
            { name: "Mamba", price: "$199.99", img: ee },
            { name: "Alibaba 3s", price: "$89.99", img: ee },
          ],
        },
      },
      categories: {
        casual: { title: "Casual", img: ee },
        streetwear: { title: "Streetwear", img: ee },
        comfy: { title: "Comfy", img: ee },
        communityPicks: { title: "Community Picks", img: ee },
      },
    },
    categories: {
      casual: {
        heroTitle: "Casual.",
        heroImg: ee,
        shoes: [
          { name: "D", price: "$35.99", img: ee, options: [8, 9, 10, 11, 12] },
          { name: "C", price: "$9.99", img: ee, options: [8, 9, 11, 12] },
          { name: "B", price: "$45.99", img: ee, options: [10, 11, 12] },
          { name: "A", price: "$99.99", img: ee, options: [8, 9, 10, 11, 12] },
        ],
      },
      streetwear: {
        heroTitle: "Streetwear.",
        heroImg: ee,
        shoes: [
          { name: "E", price: "$1.00", img: ee, options: [8, 9, 10, 11, 12] },
          { name: "F", price: "$2.00", img: ee, options: [8, 9, 11, 12] },
          { name: "G", price: "$3.00", img: ee, options: [10, 11, 12] },
          { name: "H", price: "$4.00", img: ee, options: [8, 9, 10, 11, 12] },
        ],
      },
      comfy: {
        heroTitle: "Comfy.",
        heroImg: ee,
        shoes: [
          { name: "I", price: "$1.00", img: ee, options: [8, 9, 10, 11, 12] },
          { name: "J", price: "$2.00", img: ee, options: [8, 9, 11, 12] },
          { name: "K", price: "$3.00", img: ee, options: [10, 11, 12] },
          { name: "L", price: "$4.00", img: ee, options: [8, 9, 10, 11, 12] },
        ],
      },
      communityPicks: {
        heroTitle: "Community Picks.",
        heroImg: ee,
        shoes: [
          { name: "M", price: "$1.00", img: ee, options: [8, 9, 10, 11, 12] },
          { name: "N", price: "$2.00", img: ee, options: [8, 9, 11, 12] },
          { name: "O", price: "$3.00", img: ee, options: [10, 11, 12] },
          { name: "P", price: "$4.00", img: ee, options: [8, 9, 10, 11, 12] },
        ],
      },
    },
  },
  _2 = We.section`
  color: var(--color-primary);

  max-width: 150rem;

  padding: 0 2rem;
  margin: 0 auto;
  margin-bottom: 10rem;

  > section:first-child {
    margin-bottom: 8rem;
  }

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);
  }
`,
  j2 = () =>
    y.jsxs(_2, {
      children: [
        y.jsx(qf, { header: Ke.home.showcase.sectionOne.header, shoes: Ke.home.showcase.sectionOne.shoes }),
        y.jsx(qf, { header: Ke.home.showcase.sectionTwo.header, shoes: Ke.home.showcase.sectionTwo.shoes }),
      ],
    }),
  z2 = We.section`
  header {
    font-size: 1.9rem;
    font-weight: 500;

    margin-bottom: 2rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem 0.5rem;
  }

  @media (min-width: 530px) {
    header {
      font-size: var(--font-text-6);
    }
  }

  @media (min-width: 860px) {
    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`,
  qf = ({ header: e, shoes: t }) =>
    y.jsxs(z2, {
      children: [
        y.jsx("header", { children: e }),
        y.jsx("div", {
          children: t.map((n) => y.jsx(v0, { isHomeCard: !0, name: n.name, price: n.price, img: n.img }, n.name)),
        }),
      ],
    }),
  N2 = We.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: var(--color-white);
  background-color: var(--color-primary);

  height: 45rem;

  padding: 0 2rem;
  margin-bottom: 10rem;

  header {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    line-height: 40px;
  }

  p {
    color: var(--color-gray-layout-text00);

    max-width: 100rem;

    font-size: 1.6rem;
    text-align: center;
  }

  p span {
    text-decoration: underline;
  }

  p span:hover {
    cursor: pointer;
  }

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);
  }

  @media (min-width: 530px) {
    header {
      font-size: 3.5rem;
      line-height: 50px;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 860px) {
    header {
      font-size: var(--font-text-7);
    }

    p {
      font-size: var(--font-text-5);
    }
  }
`,
  L2 = () =>
    y.jsxs(N2, {
      children: [
        y.jsx("header", { children: "Want to be a part of our team?" }),
        y.jsx("p", {
          children:
            "We have members from all over the world bringing their unique, individual insights and appreciation of shoes into the mix. Get in contact with us and be a part of our collaborative experience.",
        }),
        y.jsxs("p", { children: ["Email us at ", y.jsx("span", { children: "team@shoeszn.com" }), "."] }),
      ],
    }),
  T2 = ({ fill: e, stroke: t }) =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      stroke: t,
      fill: e,
      children: y.jsx("path", {
        fillRule: "evenodd",
        d: "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
        clipRule: "evenodd",
      }),
    }),
  O2 = We.section`
  position: relative;

  margin-bottom: 10rem;

  overflow: hidden;

  .home-slider--slider {
    display: flex;

    transition: transform 0.6s;
  }

  .home-slider--nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    height: 3.5rem;

    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }

  .home-slider--nav svg {
    width: 1.2rem;
  }

  .home-slider--nav > div {
    width: 1rem;
    height: 1rem;

    border: 1px solid var(--color-gray-400);
    border-radius: 100%;
  }

  .home-slider--nav-marker.active {
    background-color: var(--color-primary);
  }

  .home-slider--nav > div:hover {
    cursor: pointer;
    border: 1px solid var(--color-primary);
  }

  .home-slider--nav > button:nth-child(1) {
    margin-right: 1rem;
  }

  .home-slider--nav > button:last-child {
    margin-left: 1rem;
  }

  .home-slider--nav button {
    display: grid;
    place-items: center;
  }

  .home-slider--nav button:hover svg {
    fill: var(--color-primary);
  }

  @media (min-width: 860px) {
    .home-slider--nav {
      height: 4rem;
    }

    .home-slider--nav svg {
      width: 1.5rem;
    }

    .home-slider--nav > div {
      width: 1.2rem;
      height: 1.2rem;

      border: 1px solid var(--color-gray-400);
      border-radius: 100%;
    }

    .home-slider--nav > button:nth-child(1) {
      margin-right: 1.2rem;
    }

    .home-slider--nav > button:last-child {
      margin-left: 1.2rem;
    }
  }
`,
  D2 = () => {
    const [e, t] = z.useState(0),
      n = (r) => {
        r < 0 ? (r = 0) : r >= 3 && (r = 2), t(r);
      };
    return y.jsxs(O2, {
      children: [
        y.jsxs("div", {
          className: "home-slider--slider",
          style: { transform: `translate(-${e * 100}%)` },
          children: [y.jsx(_s, { dummy: "1" }), y.jsx(_s, { dummy: "2" }), y.jsx(_s, { dummy: "3" })],
        }),
        y.jsxs("nav", {
          className: "home-slider--nav",
          children: [
            y.jsx("button", { onClick: () => n(e - 1), children: y.jsx(h0, { fill: "var(--color-gray-500)" }) }),
            y.jsx("div", { onClick: () => n(0), className: `home-slider--nav-marker ${e == 0 ? "active" : ""}` }),
            y.jsx("div", { onClick: () => n(1), className: `home-slider--nav-marker ${e == 1 ? "active" : ""}` }),
            y.jsx("div", { onClick: () => n(2), className: `home-slider--nav-marker ${e == 2 ? "active" : ""}` }),
            y.jsx("button", { onClick: () => n(e + 1), children: y.jsx(T2, { fill: "var(--color-gray-500)" }) }),
          ],
        }),
      ],
    });
  },
  M2 = We.div`
  flex-shrink: 0;

  display: flex;
  flex-direction: column;

  width: 100%;

  .home-slider-item--main {
    background-image: url(${ee});
    background-size: cover;

    height: 39rem;
  }

  .home-slider-item--main div {
    display: none;
  }

  .home-slider-item--solo-text {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-gray-layout-text00);
    color: var(--color-primary);

    padding: 4rem 2rem 5rem 2rem;
  }

  p:nth-child(1) {
    font-size: 3.4rem;
    font-weight: 600;
    text-align: center;
    line-height: 40px;

    margin-bottom: 1rem;
  }

  p:nth-child(2) {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.7rem;
  }

  .home-slider-item--solo-text button {
    background-color: var(--color-primary);
    color: var(--color-white);

    font-size: 1.4rem;

    height: 4rem;
    width: 11rem;
  }

  @media (min-width: 426px) {
    .home-slider-item--solo-text {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  @media (min-width: 530px) {
    .home-slider-item--main {
      height: 45rem;
    }

    p:nth-child(1) {
      font-size: 4rem;
      line-height: 50px;
    }

    p:nth-child(2) {
      font-size: 2.2rem;
    }

    .home-slider-item--solo-text button {
      width: 13rem;

      font-size: 1.6rem;
    }
  }

  @media (min-width: 860px) {
    .home-slider-item--main {
      display: grid;
      place-items: center;

      height: 72rem;

      padding: 0 var(--padding-side);
    }

    .home-slider-item--main > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      color: var(--color-primary);
    }

    .home-slider-item--main p:nth-child(1) {
      font-size: 5rem;
    }

    .home-slider-item--main p:nth-child(2) {
      font-size: 2.5rem;
    }

    .home-slider-item--main button {
      background-color: var(--color-primary);
      color: var(--color-white);

      height: 4rem;
      width: 13rem;

      font-size: 1.6rem;
    }

    .home-slider-item--solo-text {
      display: none;
    }
  }
`,
  _s = ({ dummy: e }) =>
    y.jsxs(M2, {
      children: [
        y.jsx("div", {
          className: "home-slider-item--main",
          children: y.jsxs("div", {
            children: [
              y.jsx("p", { children: "Lowkey. Low maintenance. Low price." }),
              y.jsx("p", { children: "Be comfortable in style." }),
              y.jsx("button", { children: "Shop now" }),
            ],
          }),
        }),
        y.jsxs("div", {
          className: "home-slider-item--solo-text",
          children: [
            y.jsx("p", { children: "Lowkey. Low maintenance. Low price." }),
            y.jsx("p", { children: "Be comfortable in style." }),
            y.jsx("button", { children: "Shop now" }),
          ],
        }),
      ],
    }),
  F2 = We.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem 0.5rem;

  max-width: 150rem;

  padding: 0 2rem;
  margin: 0 auto;
  margin-bottom: 10rem;

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);
  }

  @media (min-width: 860px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`,
  I2 = () =>
    y.jsxs(F2, {
      children: [
        y.jsx(wl, { img: Ke.home.categories.casual.img, title: Ke.home.categories.casual.title }),
        y.jsx(wl, { img: Ke.home.categories.streetwear.img, title: Ke.home.categories.streetwear.title }),
        y.jsx(wl, { img: Ke.home.categories.comfy.img, title: Ke.home.categories.comfy.title }),
        y.jsx(wl, { img: Ke.home.categories.communityPicks.img, title: Ke.home.categories.communityPicks.title }),
      ],
    }),
  $2 = We.div`
  img {
    max-width: 100%;
    height: auto;
  }

  a {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    font-size: 1.5rem;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 530px) {
    a {
      font-size: 2rem;
    }
  }
`,
  wl = ({ img: e, title: t }) =>
    y.jsx($2, {
      children: y.jsxs(zr, {
        to: "/" + (t === "Community Picks" ? "community-picks" : t),
        children: [y.jsx("img", { src: e, alt: "Category image" }), t],
      }),
    }),
  A2 = We.main`
  .home--testimony {
    padding: 0 2rem;
    margin-bottom: 10rem;
  }

  .home--testimony > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .home--testimony img {
    max-width: 100%;
    width: 80rem;
    height: auto;

    object-fit: cover;
  }

  .home--testimony-text p {
    max-width: 60rem;

    font-size: 1.5rem;
    font-style: italic;
    text-align: center;

    margin: 0 3rem;
  }

  .home--testimony-text p:nth-child(1) {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 426px) {
    .home--testimony {
      padding: 0 var(--padding-side);
    }
  }

  @media (min-width: 530px) {
    .home--testimony > div {
      gap: 5rem;
    }

    .home--testimony-text p {
      max-width: 60rem;

      font-size: 1.8rem;

      margin: 0 5rem;
    }

    .home--testimony-text p:nth-child(1) {
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 860px) {
    .home--testimony-text p {
      font-size: 2rem;

      margin: 0 8rem;
    }

    .home--testimony-text p:nth-child(1) {
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 1025px) {
    .home--testimony > div {
      flex-direction: row;
      gap: 4rem;
    }
  }
`,
  U2 = () =>
    y.jsxs(A2, {
      children: [
        y.jsx(m2, {}),
        y.jsx(j2, {}),
        y.jsx(L2, {}),
        y.jsx(I2, {}),
        y.jsx(D2, {}),
        y.jsx(P2, { color: "var(--color-gray-400)" }),
      ],
    }),
  B2 = We.main`
  .category--hero {
    display: grid;
    place-items: center;

    background-size: cover;

    height: 30rem;
  }

  .category--hero p {
    color: var(--color-primary);

    font-size: 3.4rem;
    font-weight: 600;
  }

  .category--filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;

    max-width: 150rem;

    padding: 4rem 2rem;
    margin: 0 auto;
  }

  .category--filter p {
    color: var(--color-gray-500);

    font-size: 1.3rem;
  }

  .category--filter select {
    color: var(--color-gray-500);

    border-color: var(--color-gray-400);
  }

  .category--content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem 0.5rem;

    max-width: 150rem;

    padding: 0 2rem;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  @media (min-width: 425px) {
    .category--filter {
      padding: 4rem 4rem;
    }

    .category--content {
      padding: 0 4rem;
    }
  }

  @media (min-width: 530px) {
    .category--hero {
      height: 40rem;
    }

    .category--hero p {
      font-size: 4rem;
    }

    .category--filter p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 860px) {
    .category--hero p {
      font-size: 5rem;
    }

    .category--content {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`,
  Aa = ({ heroImg: e, heroTitle: t, shoes: n }) => {
    const [r, i] = z.useState("");
    return (
      console.log(r),
      r === "name-asc"
        ? (n = Object.entries(n)
            .sort((o, l) => o[1].name.localeCompare(l[1].name))
            .map((o) => o[1]))
        : r === "name-desc"
        ? (n = Object.entries(n)
            .sort((o, l) => l[1].name.localeCompare(o[1].name))
            .map((o) => o[1]))
        : r === "price-asc"
        ? (n = Object.entries(n)
            .sort((o, l) => Number(o[1].price.substring(1)) - Number(l[1].price.substring(1)))
            .map((o) => o[1]))
        : r === "price-desc" &&
          (n = Object.entries(n)
            .sort((o, l) => Number(l[1].price.substring(1)) - Number(o[1].price.substring(1)))
            .map((o) => o[1])),
      y.jsxs(B2, {
        children: [
          y.jsx("div", {
            className: "category--hero",
            style: { backgroundImage: `url(${e})` },
            children: y.jsx("p", { children: t }),
          }),
          y.jsxs("nav", {
            className: "category--filter",
            children: [
              y.jsxs("p", { children: [Object.keys(n).length, " products"] }),
              y.jsxs("select", {
                name: "sort",
                id: "sort",
                value: r,
                onChange: (o) => i(o.target.value === "Sort by" ? r : o.target.value),
                children: [
                  y.jsx("option", { selected: "selected", children: "Sort by" }),
                  y.jsx("option", { value: "name-asc", children: "A-Z" }),
                  y.jsx("option", { value: "name-desc", children: "Z-A" }),
                  y.jsx("option", { value: "price-asc", children: "Price: Low-High" }),
                  y.jsx("option", { value: "price-desc", children: "Price: High-Low" }),
                ],
              }),
            ],
          }),
          y.jsx("div", {
            className: "category--content",
            children: n.map((o) =>
              y.jsx(
                v0,
                { isHomeCard: !1, name: o.name, price: o.price, img: o.img, options: o.options },
                "category--content" + o.name
              )
            ),
          }),
        ],
      })
    );
  },
  H2 = () => y.jsx(Aa, { ...Ke.categories.casual }),
  W2 = () => y.jsx(Aa, { ...Ke.categories.streetwear }),
  b2 = () => y.jsx(Aa, { ...Ke.categories.comfy }),
  V2 = () => y.jsx(Aa, { ...Ke.categories.communityPicks }),
  Q2 = () => y.jsx("div", { children: "Profile" }),
  K2 = () => y.jsx("div", { children: "Cart" }),
  js = ({ fill: e, stroke: t }) =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: e,
      stroke: t,
      children: y.jsx("path", {
        fillRule: "evenodd",
        d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
        clipRule: "evenodd",
      }),
    }),
  G2 = "/assets/VU-Banana-1000x1000-89URl4fZ.png",
  Y2 = We.section`
  display: grid;
  place-items: center;

  padding: 4rem 2rem 0 2rem;
  margin-bottom: 4rem;

  .item--container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: 150rem;
  }

  .item--images img {
    max-width: 100%;
    height: auto;
  }

  .item--name {
    color: var(--color-primary);

    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.2;

    margin-bottom: 1rem;
  }

  .item--reviews {
    margin-bottom: 0.5rem;
  }

  .item--reviews svg {
    width: 1.6rem;
  }

  .item--price {
    color: var(--color-primary);

    font-size: 2rem;

    margin-bottom: 1rem;
  }

  .item--description {
    color: var(--color-primary);

    font-size: 1.5rem;

    margin-bottom: 2rem;
  }

  .item--btn-container {
    display: flex;
    gap: 1rem;
  }

  select {
    color: var(--color-primary);
    background-color: var(--color-white);

    width: 8rem;
    height: 3.6rem;

    font-size: 1.4rem;

    border: 1px solid var(--color-primary);
  }

  button {
    color: var(--color-primary);

    height: 3.6rem;
    width: 100%;

    font-size: 1.4rem;

    border: 1px solid var(--color-primary);
    margin-left: auto;

    transition: color 0.3s, background-color 0.3s;
  }

  button:hover {
    color: var(--color-white);
    background-color: var(--color-primary);
  }

  @media (min-width: 426px) {
    padding: 4rem 4rem 0 4rem;
  }

  @media (min-width: 530px) {
    .item--name {
      font-size: 3.5rem;
    }

    .item--reviews svg {
      width: 1.8rem;
    }

    .item--price {
      font-size: 2.2rem;
    }

    .item--description {
      font-size: var(--font-text-3);
    }

    select {
      font-size: var(--font-text-3);
    }

    button {
      font-size: var(--font-text-3);
    }
  }

  @media (min-width: 670px) {
    .item--container {
      display: grid;
      grid-template-columns: 40% 1fr;
      column-gap: 3rem;
    }
  }

  @media (min-width: 860px) {
    .item--container {
      grid-template-columns: 60% 1fr;

      padding: 0 4rem;
    }

    .item--name {
      font-size: var(--font-text-7);

      margin-bottom: 0.8rem;
    }

    .item--reviews {
      margin-bottom: 0.4rem;
    }

    .item--reviews svg {
      width: 2rem;
    }

    .item--price {
      font-size: var(--font-text-6);
    }

    .item--description {
      font-size: var(--font-text-3);
    }
  }
`,
  q2 = () => {
    const e = [8, 9, 12, 15];
    return y.jsx(Y2, {
      children: y.jsxs("div", {
        className: "item--container",
        children: [
          y.jsx("div", { className: "item--images", children: y.jsx("img", { src: G2, alt: "" }) }),
          y.jsxs("div", {
            className: "item--information",
            children: [
              y.jsx("p", { className: "item--name", children: "Nike Earths" }),
              y.jsxs("div", { className: "item--reviews", children: [y.jsx(js, {}), y.jsx(js, {}), y.jsx(js, {})] }),
              y.jsx("p", { className: "item--price", children: "$99.99" }),
              y.jsx("p", {
                className: "item--description",
                children:
                  "It’s our bestselling boot - but upgraded. Be anywhere and do anything, in a boot that does it all. The Z is made with a water resistant upper, extra warm lining and grippy rubber sole. Featuring an inside zip that makes it easy to slip them on-and-off for life on the go. And the best part - each pair is 100% vegan and made with 95% natural and recycled materials.",
              }),
              y.jsxs("div", {
                className: "item--btn-container",
                children: [
                  y.jsx("div", {
                    className: "item--sizes",
                    children: y.jsxs("select", {
                      children: [
                        y.jsx("option", { selected: "selected", children: "Size" }),
                        e.map((t) =>
                          y.jsx("option", { className: "item--size", children: t }, "item--sizes-" + t + "-Nike Earths")
                        ),
                      ],
                    }),
                  }),
                  y.jsx("button", { children: "Add to cart" }),
                ],
              }),
              y.jsx("div", { className: "item--features" }),
            ],
          }),
        ],
      }),
    });
  },
  X2 = new qy(),
  Z2 = vy([
    {
      path: "/",
      element: y.jsx(h2, {}),
      children: [
        { index: !0, element: y.jsx(U2, {}) },
        { path: "/casual", element: y.jsx(H2, {}) },
        { path: "/streetwear", element: y.jsx(W2, {}) },
        { path: "/comfy", element: y.jsx(b2, {}) },
        { path: "/community-picks", element: y.jsx(V2, {}) },
        { path: "/profile", element: y.jsx(Q2, {}) },
        { path: "/cart", element: y.jsx(K2, {}) },
        { path: "/item", element: y.jsx(q2, {}) },
      ],
    },
  ]),
  J2 = () => y.jsx(Jy, { client: X2, children: y.jsx(Cy, { router: Z2 }) });
zs.createRoot(document.getElementById("root")).render(y.jsx(ot.StrictMode, { children: y.jsx(J2, {}) }));