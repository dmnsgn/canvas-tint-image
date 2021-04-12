function e(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}

function t(e, t) {
  var r = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), r.push.apply(r, n);
  }

  return r;
}

function r(r) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    n % 2 ? t(Object(o), !0).forEach(function (t) {
      e(r, t, o[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
    });
  }

  return r;
}

var n = ["2d", "webgl", "experimental-webgl", "webgl2", "webgl2-compute", "bitmaprenderer", "gpupresent"];
function canvasContext_esm () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "2d",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      o = r({}, t),
      c = o.width,
      i = o.height,
      a = o.offscreen,
      l = void 0 !== a && a,
      u = o.contextAttributes,
      f = void 0 === u ? {} : u,
      b = o.worker,
      p = void 0 !== b && b;
  if (!p && !n.includes(e)) throw new TypeError('Unknown contextType: "'.concat(e, '"'));
  if ("undefined" == typeof window && !t.canvas) return null;
  var s,
      g = t.canvas || document.createElement("canvas"),
      w = (l || p) && "OffscreenCanvas" in window ? g.transferControlToOffscreen() : g;
  if (Number.isInteger(c) && c >= 0 && (w.width = c), Number.isInteger(i) && i >= 0 && (w.height = i), p) return {
    canvas: w
  };

  try {
    s = w.getContext(e, f) || ("webgl" === e ? w.getContext("experimental-webgl", f) : null);
  } catch (e) {
    s = null;
  }

  return {
    canvas: w,
    context: s
  };
}

export default canvasContext_esm;
