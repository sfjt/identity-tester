(() => {
  // node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js
  function e(e2, t2) {
    var i2 = {};
    for (var o2 in e2)
      Object.prototype.hasOwnProperty.call(e2, o2) && t2.indexOf(o2) < 0 && (i2[o2] = e2[o2]);
    if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
      var n2 = 0;
      for (o2 = Object.getOwnPropertySymbols(e2); n2 < o2.length; n2++)
        t2.indexOf(o2[n2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, o2[n2]) && (i2[o2[n2]] = e2[o2[n2]]);
    }
    return i2;
  }
  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function i(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function o(e2, t2) {
    return e2(t2 = { exports: {} }, t2.exports), t2.exports;
  }
  var n = o(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    var i2 = function() {
      function e3() {
        var e4 = this;
        this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(t3, i3) {
          var o2 = e4.locked.get(t3);
          void 0 === o2 ? void 0 === i3 ? e4.locked.set(t3, []) : e4.locked.set(t3, [i3]) : void 0 !== i3 && (o2.unshift(i3), e4.locked.set(t3, o2));
        }, this.isLocked = function(t3) {
          return e4.locked.has(t3);
        }, this.lock = function(t3) {
          return new Promise(function(i3, o2) {
            e4.isLocked(t3) ? e4.addToLocked(t3, i3) : (e4.addToLocked(t3), i3());
          });
        }, this.unlock = function(t3) {
          var i3 = e4.locked.get(t3);
          if (void 0 !== i3 && 0 !== i3.length) {
            var o2 = i3.pop();
            e4.locked.set(t3, i3), void 0 !== o2 && setTimeout(o2, 0);
          } else
            e4.locked.delete(t3);
        };
      }
      return e3.getInstance = function() {
        return void 0 === e3.instance && (e3.instance = new e3()), e3.instance;
      }, e3;
    }();
    t2.default = function() {
      return i2.getInstance();
    };
  });
  i(n);
  var a = i(o(function(e2, i2) {
    var o2 = t && t.__awaiter || function(e3, t2, i3, o3) {
      return new (i3 || (i3 = Promise))(function(n2, a3) {
        function s3(e4) {
          try {
            c3(o3.next(e4));
          } catch (e5) {
            a3(e5);
          }
        }
        function r3(e4) {
          try {
            c3(o3.throw(e4));
          } catch (e5) {
            a3(e5);
          }
        }
        function c3(e4) {
          e4.done ? n2(e4.value) : new i3(function(t3) {
            t3(e4.value);
          }).then(s3, r3);
        }
        c3((o3 = o3.apply(e3, t2 || [])).next());
      });
    }, a2 = t && t.__generator || function(e3, t2) {
      var i3, o3, n2, a3, s3 = { label: 0, sent: function() {
        if (1 & n2[0])
          throw n2[1];
        return n2[1];
      }, trys: [], ops: [] };
      return a3 = { next: r3(0), throw: r3(1), return: r3(2) }, "function" == typeof Symbol && (a3[Symbol.iterator] = function() {
        return this;
      }), a3;
      function r3(a4) {
        return function(r4) {
          return function(a5) {
            if (i3)
              throw new TypeError("Generator is already executing.");
            for (; s3; )
              try {
                if (i3 = 1, o3 && (n2 = 2 & a5[0] ? o3.return : a5[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, a5[1])).done)
                  return n2;
                switch (o3 = 0, n2 && (a5 = [2 & a5[0], n2.value]), a5[0]) {
                  case 0:
                  case 1:
                    n2 = a5;
                    break;
                  case 4:
                    return s3.label++, { value: a5[1], done: false };
                  case 5:
                    s3.label++, o3 = a5[1], a5 = [0];
                    continue;
                  case 7:
                    a5 = s3.ops.pop(), s3.trys.pop();
                    continue;
                  default:
                    if (!(n2 = s3.trys, (n2 = n2.length > 0 && n2[n2.length - 1]) || 6 !== a5[0] && 2 !== a5[0])) {
                      s3 = 0;
                      continue;
                    }
                    if (3 === a5[0] && (!n2 || a5[1] > n2[0] && a5[1] < n2[3])) {
                      s3.label = a5[1];
                      break;
                    }
                    if (6 === a5[0] && s3.label < n2[1]) {
                      s3.label = n2[1], n2 = a5;
                      break;
                    }
                    if (n2 && s3.label < n2[2]) {
                      s3.label = n2[2], s3.ops.push(a5);
                      break;
                    }
                    n2[2] && s3.ops.pop(), s3.trys.pop();
                    continue;
                }
                a5 = t2.call(e3, s3);
              } catch (e4) {
                a5 = [6, e4], o3 = 0;
              } finally {
                i3 = n2 = 0;
              }
            if (5 & a5[0])
              throw a5[1];
            return { value: a5[0] ? a5[1] : void 0, done: true };
          }([a4, r4]);
        };
      }
    };
    Object.defineProperty(i2, "__esModule", { value: true });
    var s2 = "browser-tabs-lock-key";
    function r2(e3) {
      return new Promise(function(t2) {
        return setTimeout(t2, e3);
      });
    }
    function c2(e3) {
      for (var t2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", i3 = "", o3 = 0; o3 < e3; o3++) {
        i3 += t2[Math.floor(Math.random() * t2.length)];
      }
      return i3;
    }
    var d2 = function() {
      function e3() {
        this.acquiredIatSet = /* @__PURE__ */ new Set(), this.id = Date.now().toString() + c2(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), void 0 === e3.waiters && (e3.waiters = []);
      }
      return e3.prototype.acquireLock = function(t2, i3) {
        return void 0 === i3 && (i3 = 5e3), o2(this, void 0, void 0, function() {
          var o3, n2, d3, u2, l2, h2;
          return a2(this, function(a3) {
            switch (a3.label) {
              case 0:
                o3 = Date.now() + c2(4), n2 = Date.now() + i3, d3 = s2 + "-" + t2, u2 = window.localStorage, a3.label = 1;
              case 1:
                return Date.now() < n2 ? [4, r2(30)] : [3, 8];
              case 2:
                return a3.sent(), null !== u2.getItem(d3) ? [3, 5] : (l2 = this.id + "-" + t2 + "-" + o3, [4, r2(Math.floor(25 * Math.random()))]);
              case 3:
                return a3.sent(), u2.setItem(d3, JSON.stringify({ id: this.id, iat: o3, timeoutKey: l2, timeAcquired: Date.now(), timeRefreshed: Date.now() })), [4, r2(30)];
              case 4:
                return a3.sent(), null !== (h2 = u2.getItem(d3)) && (h2 = JSON.parse(h2)).id === this.id && h2.iat === o3 ? (this.acquiredIatSet.add(o3), this.refreshLockWhileAcquired(d3, o3), [2, true]) : [3, 7];
              case 5:
                return e3.lockCorrector(), [4, this.waitForSomethingToChange(n2)];
              case 6:
                a3.sent(), a3.label = 7;
              case 7:
                return o3 = Date.now() + c2(4), [3, 1];
              case 8:
                return [2, false];
            }
          });
        });
      }, e3.prototype.refreshLockWhileAcquired = function(e4, t2) {
        return o2(this, void 0, void 0, function() {
          var i3 = this;
          return a2(this, function(s3) {
            return setTimeout(function() {
              return o2(i3, void 0, void 0, function() {
                var i4, o3;
                return a2(this, function(a3) {
                  switch (a3.label) {
                    case 0:
                      return [4, n.default().lock(t2)];
                    case 1:
                      return a3.sent(), this.acquiredIatSet.has(t2) ? (i4 = window.localStorage, null === (o3 = i4.getItem(e4)) ? (n.default().unlock(t2), [2]) : ((o3 = JSON.parse(o3)).timeRefreshed = Date.now(), i4.setItem(e4, JSON.stringify(o3)), n.default().unlock(t2), this.refreshLockWhileAcquired(e4, t2), [2])) : (n.default().unlock(t2), [2]);
                  }
                });
              });
            }, 1e3), [2];
          });
        });
      }, e3.prototype.waitForSomethingToChange = function(t2) {
        return o2(this, void 0, void 0, function() {
          return a2(this, function(i3) {
            switch (i3.label) {
              case 0:
                return [4, new Promise(function(i4) {
                  var o3 = false, n2 = Date.now(), a3 = false;
                  function s3() {
                    if (a3 || (window.removeEventListener("storage", s3), e3.removeFromWaiting(s3), clearTimeout(r3), a3 = true), !o3) {
                      o3 = true;
                      var t3 = 50 - (Date.now() - n2);
                      t3 > 0 ? setTimeout(i4, t3) : i4();
                    }
                  }
                  window.addEventListener("storage", s3), e3.addToWaiting(s3);
                  var r3 = setTimeout(s3, Math.max(0, t2 - Date.now()));
                })];
              case 1:
                return i3.sent(), [2];
            }
          });
        });
      }, e3.addToWaiting = function(t2) {
        this.removeFromWaiting(t2), void 0 !== e3.waiters && e3.waiters.push(t2);
      }, e3.removeFromWaiting = function(t2) {
        void 0 !== e3.waiters && (e3.waiters = e3.waiters.filter(function(e4) {
          return e4 !== t2;
        }));
      }, e3.notifyWaiters = function() {
        void 0 !== e3.waiters && e3.waiters.slice().forEach(function(e4) {
          return e4();
        });
      }, e3.prototype.releaseLock = function(e4) {
        return o2(this, void 0, void 0, function() {
          return a2(this, function(t2) {
            switch (t2.label) {
              case 0:
                return [4, this.releaseLock__private__(e4)];
              case 1:
                return [2, t2.sent()];
            }
          });
        });
      }, e3.prototype.releaseLock__private__ = function(t2) {
        return o2(this, void 0, void 0, function() {
          var i3, o3, r3;
          return a2(this, function(a3) {
            switch (a3.label) {
              case 0:
                return i3 = window.localStorage, o3 = s2 + "-" + t2, null === (r3 = i3.getItem(o3)) ? [2] : (r3 = JSON.parse(r3)).id !== this.id ? [3, 2] : [4, n.default().lock(r3.iat)];
              case 1:
                a3.sent(), this.acquiredIatSet.delete(r3.iat), i3.removeItem(o3), n.default().unlock(r3.iat), e3.notifyWaiters(), a3.label = 2;
              case 2:
                return [2];
            }
          });
        });
      }, e3.lockCorrector = function() {
        for (var t2 = Date.now() - 5e3, i3 = window.localStorage, o3 = Object.keys(i3), n2 = false, a3 = 0; a3 < o3.length; a3++) {
          var r3 = o3[a3];
          if (r3.includes(s2)) {
            var c3 = i3.getItem(r3);
            null !== c3 && (void 0 === (c3 = JSON.parse(c3)).timeRefreshed && c3.timeAcquired < t2 || void 0 !== c3.timeRefreshed && c3.timeRefreshed < t2) && (i3.removeItem(r3), n2 = true);
          }
        }
        n2 && e3.notifyWaiters();
      }, e3.waiters = void 0, e3;
    }();
    i2.default = d2;
  }));
  var s = { timeoutInSeconds: 60 };
  var r = { name: "auth0-spa-js", version: "2.1.2" };
  var c = () => Date.now();
  var d = class _d extends Error {
    constructor(e2, t2) {
      super(t2), this.error = e2, this.error_description = t2, Object.setPrototypeOf(this, _d.prototype);
    }
    static fromPayload({ error: e2, error_description: t2 }) {
      return new _d(e2, t2);
    }
  };
  var u = class _u extends d {
    constructor(e2, t2, i2, o2 = null) {
      super(e2, t2), this.state = i2, this.appState = o2, Object.setPrototypeOf(this, _u.prototype);
    }
  };
  var l = class _l extends d {
    constructor() {
      super("timeout", "Timeout"), Object.setPrototypeOf(this, _l.prototype);
    }
  };
  var h = class _h extends l {
    constructor(e2) {
      super(), this.popup = e2, Object.setPrototypeOf(this, _h.prototype);
    }
  };
  var p = class _p extends d {
    constructor(e2) {
      super("cancelled", "Popup closed"), this.popup = e2, Object.setPrototypeOf(this, _p.prototype);
    }
  };
  var m = class _m extends d {
    constructor(e2, t2, i2) {
      super(e2, t2), this.mfa_token = i2, Object.setPrototypeOf(this, _m.prototype);
    }
  };
  var f = class _f extends d {
    constructor(e2, t2) {
      super("missing_refresh_token", `Missing Refresh Token (audience: '${g(e2, ["default"])}', scope: '${g(t2)}')`), this.audience = e2, this.scope = t2, Object.setPrototypeOf(this, _f.prototype);
    }
  };
  function g(e2, t2 = []) {
    return e2 && !t2.includes(e2) ? e2 : "";
  }
  var w = () => window.crypto;
  var y = () => {
    const e2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
    let t2 = "";
    return Array.from(w().getRandomValues(new Uint8Array(43))).forEach((i2) => t2 += e2[i2 % e2.length]), t2;
  };
  var k = (e2) => btoa(e2);
  var b = (t2) => {
    var { clientId: i2 } = t2, o2 = e(t2, ["clientId"]);
    return new URLSearchParams(((e2) => Object.keys(e2).filter((t3) => void 0 !== e2[t3]).reduce((t3, i3) => Object.assign(Object.assign({}, t3), { [i3]: e2[i3] }), {}))(Object.assign({ client_id: i2 }, o2))).toString();
  };
  var v = (e2) => ((e3) => decodeURIComponent(atob(e3).split("").map((e4) => "%" + ("00" + e4.charCodeAt(0).toString(16)).slice(-2)).join("")))(e2.replace(/_/g, "/").replace(/-/g, "+"));
  var _ = async (e2, t2) => {
    const i2 = await fetch(e2, t2);
    return { ok: i2.ok, json: await i2.json() };
  };
  var I = async (e2, t2, i2) => {
    const o2 = new AbortController();
    let n2;
    return t2.signal = o2.signal, Promise.race([_(e2, t2), new Promise((e3, t3) => {
      n2 = setTimeout(() => {
        o2.abort(), t3(new Error("Timeout when executing 'fetch'"));
      }, i2);
    })]).finally(() => {
      clearTimeout(n2);
    });
  };
  var S = async (e2, t2, i2, o2, n2, a2, s2) => {
    return r2 = { auth: { audience: t2, scope: i2 }, timeout: n2, fetchUrl: e2, fetchOptions: o2, useFormData: s2 }, c2 = a2, new Promise(function(e3, t3) {
      const i3 = new MessageChannel();
      i3.port1.onmessage = function(o3) {
        o3.data.error ? t3(new Error(o3.data.error)) : e3(o3.data), i3.port1.close();
      }, c2.postMessage(r2, [i3.port2]);
    });
    var r2, c2;
  };
  var T = async (e2, t2, i2, o2, n2, a2, s2 = 1e4) => n2 ? S(e2, t2, i2, o2, s2, n2, a2) : I(e2, o2, s2);
  async function O(t2, i2) {
    var { baseUrl: o2, timeout: n2, audience: a2, scope: s2, auth0Client: c2, useFormData: u2 } = t2, l2 = e(t2, ["baseUrl", "timeout", "audience", "scope", "auth0Client", "useFormData"]);
    const h2 = u2 ? b(l2) : JSON.stringify(l2);
    return await async function(t3, i3, o3, n3, a3, s3, r2) {
      let c3, u3 = null;
      for (let e2 = 0; e2 < 3; e2++)
        try {
          c3 = await T(t3, o3, n3, a3, s3, r2, i3), u3 = null;
          break;
        } catch (e3) {
          u3 = e3;
        }
      if (u3)
        throw u3;
      const l3 = c3.json, { error: h3, error_description: p2 } = l3, g2 = e(l3, ["error", "error_description"]), { ok: w2 } = c3;
      if (!w2) {
        const e2 = p2 || `HTTP error. Unable to fetch ${t3}`;
        if ("mfa_required" === h3)
          throw new m(h3, e2, g2.mfa_token);
        if ("missing_refresh_token" === h3)
          throw new f(o3, n3);
        throw new d(h3 || "request_error", e2);
      }
      return g2;
    }(`${o2}/oauth/token`, n2, a2 || "default", s2, { method: "POST", body: h2, headers: { "Content-Type": u2 ? "application/x-www-form-urlencoded" : "application/json", "Auth0-Client": btoa(JSON.stringify(c2 || r)) } }, i2, u2);
  }
  var j = (...e2) => {
    return (t2 = e2.filter(Boolean).join(" ").trim().split(/\s+/), Array.from(new Set(t2))).join(" ");
    var t2;
  };
  var C = class _C {
    constructor(e2, t2 = "@@auth0spajs@@", i2) {
      this.prefix = t2, this.suffix = i2, this.clientId = e2.clientId, this.scope = e2.scope, this.audience = e2.audience;
    }
    toKey() {
      return [this.prefix, this.clientId, this.audience, this.scope, this.suffix].filter(Boolean).join("::");
    }
    static fromKey(e2) {
      const [t2, i2, o2, n2] = e2.split("::");
      return new _C({ clientId: i2, scope: n2, audience: o2 }, t2);
    }
    static fromCacheEntry(e2) {
      const { scope: t2, audience: i2, client_id: o2 } = e2;
      return new _C({ scope: t2, audience: i2, clientId: o2 });
    }
  };
  var z = class {
    set(e2, t2) {
      localStorage.setItem(e2, JSON.stringify(t2));
    }
    get(e2) {
      const t2 = window.localStorage.getItem(e2);
      if (t2)
        try {
          return JSON.parse(t2);
        } catch (e3) {
          return;
        }
    }
    remove(e2) {
      localStorage.removeItem(e2);
    }
    allKeys() {
      return Object.keys(window.localStorage).filter((e2) => e2.startsWith("@@auth0spajs@@"));
    }
  };
  var x = class {
    constructor() {
      this.enclosedCache = function() {
        let e2 = {};
        return { set(t2, i2) {
          e2[t2] = i2;
        }, get(t2) {
          const i2 = e2[t2];
          if (i2)
            return i2;
        }, remove(t2) {
          delete e2[t2];
        }, allKeys: () => Object.keys(e2) };
      }();
    }
  };
  var P = class {
    constructor(e2, t2, i2) {
      this.cache = e2, this.keyManifest = t2, this.nowProvider = i2 || c;
    }
    async setIdToken(e2, t2, i2) {
      var o2;
      const n2 = this.getIdTokenCacheKey(e2);
      await this.cache.set(n2, { id_token: t2, decodedToken: i2 }), await (null === (o2 = this.keyManifest) || void 0 === o2 ? void 0 : o2.add(n2));
    }
    async getIdToken(e2) {
      const t2 = await this.cache.get(this.getIdTokenCacheKey(e2.clientId));
      if (!t2 && e2.scope && e2.audience) {
        const t3 = await this.get(e2);
        if (!t3)
          return;
        if (!t3.id_token || !t3.decodedToken)
          return;
        return { id_token: t3.id_token, decodedToken: t3.decodedToken };
      }
      if (t2)
        return { id_token: t2.id_token, decodedToken: t2.decodedToken };
    }
    async get(e2, t2 = 0) {
      var i2;
      let o2 = await this.cache.get(e2.toKey());
      if (!o2) {
        const t3 = await this.getCacheKeys();
        if (!t3)
          return;
        const i3 = this.matchExistingCacheKey(e2, t3);
        i3 && (o2 = await this.cache.get(i3));
      }
      if (!o2)
        return;
      const n2 = await this.nowProvider(), a2 = Math.floor(n2 / 1e3);
      return o2.expiresAt - t2 < a2 ? o2.body.refresh_token ? (o2.body = { refresh_token: o2.body.refresh_token }, await this.cache.set(e2.toKey(), o2), o2.body) : (await this.cache.remove(e2.toKey()), void await (null === (i2 = this.keyManifest) || void 0 === i2 ? void 0 : i2.remove(e2.toKey()))) : o2.body;
    }
    async set(e2) {
      var t2;
      const i2 = new C({ clientId: e2.client_id, scope: e2.scope, audience: e2.audience }), o2 = await this.wrapCacheEntry(e2);
      await this.cache.set(i2.toKey(), o2), await (null === (t2 = this.keyManifest) || void 0 === t2 ? void 0 : t2.add(i2.toKey()));
    }
    async clear(e2) {
      var t2;
      const i2 = await this.getCacheKeys();
      i2 && (await i2.filter((t3) => !e2 || t3.includes(e2)).reduce(async (e3, t3) => {
        await e3, await this.cache.remove(t3);
      }, Promise.resolve()), await (null === (t2 = this.keyManifest) || void 0 === t2 ? void 0 : t2.clear()));
    }
    async wrapCacheEntry(e2) {
      const t2 = await this.nowProvider();
      return { body: e2, expiresAt: Math.floor(t2 / 1e3) + e2.expires_in };
    }
    async getCacheKeys() {
      var e2;
      return this.keyManifest ? null === (e2 = await this.keyManifest.get()) || void 0 === e2 ? void 0 : e2.keys : this.cache.allKeys ? this.cache.allKeys() : void 0;
    }
    getIdTokenCacheKey(e2) {
      return new C({ clientId: e2 }, "@@auth0spajs@@", "@@user@@").toKey();
    }
    matchExistingCacheKey(e2, t2) {
      return t2.filter((t3) => {
        var i2;
        const o2 = C.fromKey(t3), n2 = new Set(o2.scope && o2.scope.split(" ")), a2 = (null === (i2 = e2.scope) || void 0 === i2 ? void 0 : i2.split(" ")) || [], s2 = o2.scope && a2.reduce((e3, t4) => e3 && n2.has(t4), true);
        return "@@auth0spajs@@" === o2.prefix && o2.clientId === e2.clientId && o2.audience === e2.audience && s2;
      })[0];
    }
  };
  var Z = class {
    constructor(e2, t2, i2) {
      this.storage = e2, this.clientId = t2, this.cookieDomain = i2, this.storageKey = `a0.spajs.txs.${this.clientId}`;
    }
    create(e2) {
      this.storage.save(this.storageKey, e2, { daysUntilExpire: 1, cookieDomain: this.cookieDomain });
    }
    get() {
      return this.storage.get(this.storageKey);
    }
    remove() {
      this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
    }
  };
  var K = (e2) => "number" == typeof e2;
  var L = ["iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr", "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch", "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm"];
  var E = (e2) => {
    if (!e2.id_token)
      throw new Error("ID token is required but missing");
    const t2 = ((e3) => {
      const t3 = e3.split("."), [i3, o3, n3] = t3;
      if (3 !== t3.length || !i3 || !o3 || !n3)
        throw new Error("ID token could not be decoded");
      const a2 = JSON.parse(v(o3)), s2 = { __raw: e3 }, r2 = {};
      return Object.keys(a2).forEach((e4) => {
        s2[e4] = a2[e4], L.includes(e4) || (r2[e4] = a2[e4]);
      }), { encoded: { header: i3, payload: o3, signature: n3 }, header: JSON.parse(v(i3)), claims: s2, user: r2 };
    })(e2.id_token);
    if (!t2.claims.iss)
      throw new Error("Issuer (iss) claim must be a string present in the ID token");
    if (t2.claims.iss !== e2.iss)
      throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${e2.iss}", found "${t2.claims.iss}"`);
    if (!t2.user.sub)
      throw new Error("Subject (sub) claim must be a string present in the ID token");
    if ("RS256" !== t2.header.alg)
      throw new Error(`Signature algorithm of "${t2.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);
    if (!t2.claims.aud || "string" != typeof t2.claims.aud && !Array.isArray(t2.claims.aud))
      throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
    if (Array.isArray(t2.claims.aud)) {
      if (!t2.claims.aud.includes(e2.aud))
        throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e2.aud}" but was not one of "${t2.claims.aud.join(", ")}"`);
      if (t2.claims.aud.length > 1) {
        if (!t2.claims.azp)
          throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
        if (t2.claims.azp !== e2.aud)
          throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${e2.aud}", found "${t2.claims.azp}"`);
      }
    } else if (t2.claims.aud !== e2.aud)
      throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e2.aud}" but found "${t2.claims.aud}"`);
    if (e2.nonce) {
      if (!t2.claims.nonce)
        throw new Error("Nonce (nonce) claim must be a string present in the ID token");
      if (t2.claims.nonce !== e2.nonce)
        throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${e2.nonce}", found "${t2.claims.nonce}"`);
    }
    if (e2.max_age && !K(t2.claims.auth_time))
      throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
    if (null == t2.claims.exp || !K(t2.claims.exp))
      throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
    if (!K(t2.claims.iat))
      throw new Error("Issued At (iat) claim must be a number present in the ID token");
    const i2 = e2.leeway || 60, o2 = new Date(e2.now || Date.now()), n2 = /* @__PURE__ */ new Date(0);
    if (n2.setUTCSeconds(t2.claims.exp + i2), o2 > n2)
      throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${o2}) is after expiration time (${n2})`);
    if (null != t2.claims.nbf && K(t2.claims.nbf)) {
      const e3 = /* @__PURE__ */ new Date(0);
      if (e3.setUTCSeconds(t2.claims.nbf - i2), o2 < e3)
        throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${o2}) is before ${e3}`);
    }
    if (null != t2.claims.auth_time && K(t2.claims.auth_time)) {
      const n3 = /* @__PURE__ */ new Date(0);
      if (n3.setUTCSeconds(parseInt(t2.claims.auth_time) + e2.max_age + i2), o2 > n3)
        throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${o2}) is after last auth at ${n3}`);
    }
    if (e2.organization) {
      const i3 = e2.organization.trim();
      if (i3.startsWith("org_")) {
        const e3 = i3;
        if (!t2.claims.org_id)
          throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
        if (e3 !== t2.claims.org_id)
          throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${e3}", found "${t2.claims.org_id}"`);
      } else {
        const e3 = i3.toLowerCase();
        if (!t2.claims.org_name)
          throw new Error("Organization Name (org_name) claim must be a string present in the ID token");
        if (e3 !== t2.claims.org_name)
          throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${e3}", found "${t2.claims.org_name}"`);
      }
    }
    return t2;
  };
  var U = o(function(e2, i2) {
    var o2 = t && t.__assign || function() {
      return o2 = Object.assign || function(e3) {
        for (var t2, i3 = 1, o3 = arguments.length; i3 < o3; i3++)
          for (var n3 in t2 = arguments[i3])
            Object.prototype.hasOwnProperty.call(t2, n3) && (e3[n3] = t2[n3]);
        return e3;
      }, o2.apply(this, arguments);
    };
    function n2(e3, t2) {
      if (!t2)
        return "";
      var i3 = "; " + e3;
      return true === t2 ? i3 : i3 + "=" + t2;
    }
    function a2(e3, t2, i3) {
      return encodeURIComponent(e3).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(t2).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function(e4) {
        if ("number" == typeof e4.expires) {
          var t3 = /* @__PURE__ */ new Date();
          t3.setMilliseconds(t3.getMilliseconds() + 864e5 * e4.expires), e4.expires = t3;
        }
        return n2("Expires", e4.expires ? e4.expires.toUTCString() : "") + n2("Domain", e4.domain) + n2("Path", e4.path) + n2("Secure", e4.secure) + n2("SameSite", e4.sameSite);
      }(i3);
    }
    function s2(e3) {
      for (var t2 = {}, i3 = e3 ? e3.split("; ") : [], o3 = /(%[\dA-F]{2})+/gi, n3 = 0; n3 < i3.length; n3++) {
        var a3 = i3[n3].split("="), s3 = a3.slice(1).join("=");
        '"' === s3.charAt(0) && (s3 = s3.slice(1, -1));
        try {
          t2[a3[0].replace(o3, decodeURIComponent)] = s3.replace(o3, decodeURIComponent);
        } catch (e4) {
        }
      }
      return t2;
    }
    function r2() {
      return s2(document.cookie);
    }
    function c2(e3, t2, i3) {
      document.cookie = a2(e3, t2, o2({ path: "/" }, i3));
    }
    i2.__esModule = true, i2.encode = a2, i2.parse = s2, i2.getAll = r2, i2.get = function(e3) {
      return r2()[e3];
    }, i2.set = c2, i2.remove = function(e3, t2) {
      c2(e3, "", o2(o2({}, t2), { expires: -1 }));
    };
  });
  i(U), U.encode, U.parse, U.getAll;
  var W = U.get;
  var D = U.set;
  var N = U.remove;
  var X = { get(e2) {
    const t2 = W(e2);
    if (void 0 !== t2)
      return JSON.parse(t2);
  }, save(e2, t2, i2) {
    let o2 = {};
    "https:" === window.location.protocol && (o2 = { secure: true, sameSite: "none" }), (null == i2 ? void 0 : i2.daysUntilExpire) && (o2.expires = i2.daysUntilExpire), (null == i2 ? void 0 : i2.cookieDomain) && (o2.domain = i2.cookieDomain), D(e2, JSON.stringify(t2), o2);
  }, remove(e2, t2) {
    let i2 = {};
    (null == t2 ? void 0 : t2.cookieDomain) && (i2.domain = t2.cookieDomain), N(e2, i2);
  } };
  var R = { get(e2) {
    const t2 = X.get(e2);
    return t2 || X.get(`_legacy_${e2}`);
  }, save(e2, t2, i2) {
    let o2 = {};
    "https:" === window.location.protocol && (o2 = { secure: true }), (null == i2 ? void 0 : i2.daysUntilExpire) && (o2.expires = i2.daysUntilExpire), (null == i2 ? void 0 : i2.cookieDomain) && (o2.domain = i2.cookieDomain), D(`_legacy_${e2}`, JSON.stringify(t2), o2), X.save(e2, t2, i2);
  }, remove(e2, t2) {
    let i2 = {};
    (null == t2 ? void 0 : t2.cookieDomain) && (i2.domain = t2.cookieDomain), N(e2, i2), X.remove(e2, t2), X.remove(`_legacy_${e2}`, t2);
  } };
  var V = { get(e2) {
    if ("undefined" == typeof sessionStorage)
      return;
    const t2 = sessionStorage.getItem(e2);
    return null != t2 ? JSON.parse(t2) : void 0;
  }, save(e2, t2) {
    sessionStorage.setItem(e2, JSON.stringify(t2));
  }, remove(e2) {
    sessionStorage.removeItem(e2);
  } };
  function J(e2, t2, i2) {
    var o2 = void 0 === t2 ? null : t2, n2 = function(e3, t3) {
      var i3 = atob(e3);
      if (t3) {
        for (var o3 = new Uint8Array(i3.length), n3 = 0, a3 = i3.length; n3 < a3; ++n3)
          o3[n3] = i3.charCodeAt(n3);
        return String.fromCharCode.apply(null, new Uint16Array(o3.buffer));
      }
      return i3;
    }(e2, void 0 !== i2 && i2), a2 = n2.indexOf("\n", 10) + 1, s2 = n2.substring(a2) + (o2 ? "//# sourceMappingURL=" + o2 : ""), r2 = new Blob([s2], { type: "application/javascript" });
    return URL.createObjectURL(r2);
  }
  var F;
  var H;
  var G;
  var M;
  var A = (F = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9Y29uc3Qgcz1lPT57dmFye2NsaWVudElkOnR9PWUscj1mdW5jdGlvbihlLHQpe3ZhciByPXt9O2Zvcih2YXIgcyBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpJiZ0LmluZGV4T2Yocyk8MCYmKHJbc109ZVtzXSk7aWYobnVsbCE9ZSYmImZ1bmN0aW9uIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPHMubGVuZ3RoO28rKyl0LmluZGV4T2Yoc1tvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsc1tvXSkmJihyW3Nbb11dPWVbc1tvXV0pfXJldHVybiByfShlLFsiY2xpZW50SWQiXSk7cmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoKGU9Pk9iamVjdC5rZXlzKGUpLmZpbHRlcigodD0+dm9pZCAwIT09ZVt0XSkpLnJlZHVjZSgoKHQscik9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7W3JdOmVbcl19KSkse30pKShPYmplY3QuYXNzaWduKHtjbGllbnRfaWQ6dH0scikpKS50b1N0cmluZygpfTtsZXQgbz17fTtjb25zdCBuPShlLHQpPT5gJHtlfXwke3R9YDthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoYXN5bmMoe2RhdGE6e3RpbWVvdXQ6ZSxhdXRoOnIsZmV0Y2hVcmw6aSxmZXRjaE9wdGlvbnM6Yyx1c2VGb3JtRGF0YTphfSxwb3J0czpbZl19KT0+e2xldCBwO2NvbnN0e2F1ZGllbmNlOmwsc2NvcGU6dX09cnx8e307dHJ5e2NvbnN0IHI9YT8oZT0+e2NvbnN0IHQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhlKSxyPXt9O3JldHVybiB0LmZvckVhY2goKChlLHQpPT57clt0XT1lfSkpLHJ9KShjLmJvZHkpOkpTT04ucGFyc2UoYy5ib2R5KTtpZighci5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1yLmdyYW50X3R5cGUpe2NvbnN0IGU9KChlLHQpPT5vW24oZSx0KV0pKGwsdSk7aWYoIWUpdGhyb3cgbmV3IHQobCx1KTtjLmJvZHk9YT9zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpOkpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpfWxldCBkLGc7ImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixjLnNpZ25hbD1kLnNpZ25hbCk7dHJ5e2c9YXdhaXQgUHJvbWlzZS5yYWNlKFsoaD1lLG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsaCkpKSksZmV0Y2goaSxPYmplY3QuYXNzaWduKHt9LGMpKV0pfWNhdGNoKGUpe3JldHVybiB2b2lkIGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZX0pfWlmKCFnKXJldHVybiBkJiZkLmFib3J0KCksdm9pZCBmLnBvc3RNZXNzYWdlKHtlcnJvcjoiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIn0pO3A9YXdhaXQgZy5qc29uKCkscC5yZWZyZXNoX3Rva2VuPygoKGUsdCxyKT0+e29bbih0LHIpXT1lfSkocC5yZWZyZXNoX3Rva2VuLGwsdSksZGVsZXRlIHAucmVmcmVzaF90b2tlbik6KChlLHQpPT57ZGVsZXRlIG9bbihlLHQpXX0pKGwsdSksZi5wb3N0TWVzc2FnZSh7b2s6Zy5vayxqc29uOnB9KX1jYXRjaChlKXtmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcjplLmVycm9yLGVycm9yX2Rlc2NyaXB0aW9uOmUubWVzc2FnZX19KX12YXIgaH0pKX0oKTsKCg==", H = null, G = false, function(e2) {
    return M = M || J(F, H, G), new Worker(M, e2);
  });
  var Y = {};
  var $ = class {
    constructor(e2, t2) {
      this.cache = e2, this.clientId = t2, this.manifestKey = this.createManifestKeyFrom(this.clientId);
    }
    async add(e2) {
      var t2;
      const i2 = new Set((null === (t2 = await this.cache.get(this.manifestKey)) || void 0 === t2 ? void 0 : t2.keys) || []);
      i2.add(e2), await this.cache.set(this.manifestKey, { keys: [...i2] });
    }
    async remove(e2) {
      const t2 = await this.cache.get(this.manifestKey);
      if (t2) {
        const i2 = new Set(t2.keys);
        return i2.delete(e2), i2.size > 0 ? await this.cache.set(this.manifestKey, { keys: [...i2] }) : await this.cache.remove(this.manifestKey);
      }
    }
    get() {
      return this.cache.get(this.manifestKey);
    }
    clear() {
      return this.cache.remove(this.manifestKey);
    }
    createManifestKeyFrom(e2) {
      return `@@auth0spajs@@::${e2}`;
    }
  };
  var B = { memory: () => new x().enclosedCache, localstorage: () => new z() };
  var q = (e2) => B[e2];
  var Q = (t2) => {
    const { openUrl: i2, onRedirect: o2 } = t2, n2 = e(t2, ["openUrl", "onRedirect"]);
    return Object.assign(Object.assign({}, n2), { openUrl: false === i2 || i2 ? i2 : o2 });
  };
  var ee = new a();
  var te = class {
    constructor(e2) {
      let t2, i2;
      if (this.userCache = new x().enclosedCache, this.defaultOptions = { authorizationParams: { scope: "openid profile email" }, useRefreshTokensFallback: false, useFormData: true }, this._releaseLockOnPageHide = async () => {
        await ee.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }, this.options = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), e2), { authorizationParams: Object.assign(Object.assign({}, this.defaultOptions.authorizationParams), e2.authorizationParams) }), "undefined" != typeof window && (() => {
        if (!w())
          throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
        if (void 0 === w().subtle)
          throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
      })(), e2.cache && e2.cacheLocation && console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."), e2.cache)
        i2 = e2.cache;
      else {
        if (t2 = e2.cacheLocation || "memory", !q(t2))
          throw new Error(`Invalid cache location "${t2}"`);
        i2 = q(t2)();
      }
      this.httpTimeoutMs = e2.httpTimeoutInSeconds ? 1e3 * e2.httpTimeoutInSeconds : 1e4, this.cookieStorage = false === e2.legacySameSiteCookie ? X : R, this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`, this.isAuthenticatedCookieName = ((e3) => `auth0.${e3}.is.authenticated`)(this.options.clientId), this.sessionCheckExpiryDays = e2.sessionCheckExpiryDays || 1;
      const o2 = e2.useCookiesForTransactions ? this.cookieStorage : V;
      var n2;
      this.scope = j("openid", this.options.authorizationParams.scope, this.options.useRefreshTokens ? "offline_access" : ""), this.transactionManager = new Z(o2, this.options.clientId, this.options.cookieDomain), this.nowProvider = this.options.nowProvider || c, this.cacheManager = new P(i2, i2.allKeys ? void 0 : new $(i2, this.options.clientId), this.nowProvider), this.domainUrl = (n2 = this.options.domain, /^https?:\/\//.test(n2) ? n2 : `https://${n2}`), this.tokenIssuer = ((e3, t3) => e3 ? e3.startsWith("https://") ? e3 : `https://${e3}/` : `${t3}/`)(this.options.issuer, this.domainUrl), "undefined" != typeof window && window.Worker && this.options.useRefreshTokens && "memory" === t2 && (this.worker = new A());
    }
    _url(e2) {
      const t2 = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || r)));
      return `${this.domainUrl}${e2}&auth0Client=${t2}`;
    }
    _authorizeUrl(e2) {
      return this._url(`/authorize?${b(e2)}`);
    }
    async _verifyIdToken(e2, t2, i2) {
      const o2 = await this.nowProvider();
      return E({ iss: this.tokenIssuer, aud: this.options.clientId, id_token: e2, nonce: t2, organization: i2, leeway: this.options.leeway, max_age: (n2 = this.options.authorizationParams.max_age, "string" != typeof n2 ? n2 : parseInt(n2, 10) || void 0), now: o2 });
      var n2;
    }
    _processOrgHint(e2) {
      e2 ? this.cookieStorage.save(this.orgHintCookieName, e2, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }) : this.cookieStorage.remove(this.orgHintCookieName, { cookieDomain: this.options.cookieDomain });
    }
    async _prepareAuthorizeUrl(e2, t2, i2) {
      const o2 = k(y()), n2 = k(y()), a2 = y(), s2 = ((e3) => {
        const t3 = new Uint8Array(e3);
        return ((e4) => {
          const t4 = { "+": "-", "/": "_", "=": "" };
          return e4.replace(/[+/=]/g, (e5) => t4[e5]);
        })(window.btoa(String.fromCharCode(...Array.from(t3))));
      })(await (async (e3) => {
        const t3 = w().subtle.digest({ name: "SHA-256" }, new TextEncoder().encode(e3));
        return await t3;
      })(a2)), r2 = ((e3, t3, i3, o3, n3, a3, s3, r3) => Object.assign(Object.assign(Object.assign({ client_id: e3.clientId }, e3.authorizationParams), i3), { scope: j(t3, i3.scope), response_type: "code", response_mode: r3 || "query", state: o3, nonce: n3, redirect_uri: s3 || e3.authorizationParams.redirect_uri, code_challenge: a3, code_challenge_method: "S256" }))(this.options, this.scope, e2, o2, n2, s2, e2.redirect_uri || this.options.authorizationParams.redirect_uri || i2, null == t2 ? void 0 : t2.response_mode), c2 = this._authorizeUrl(r2);
      return { nonce: n2, code_verifier: a2, scope: r2.scope, audience: r2.audience || "default", redirect_uri: r2.redirect_uri, state: o2, url: c2 };
    }
    async loginWithPopup(e2, t2) {
      var i2;
      if (e2 = e2 || {}, !(t2 = t2 || {}).popup && (t2.popup = ((e3) => {
        const t3 = window.screenX + (window.innerWidth - 400) / 2, i3 = window.screenY + (window.innerHeight - 600) / 2;
        return window.open(e3, "auth0:authorize:popup", `left=${t3},top=${i3},width=400,height=600,resizable,scrollbars=yes,status=1`);
      })(""), !t2.popup))
        throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
      const o2 = await this._prepareAuthorizeUrl(e2.authorizationParams || {}, { response_mode: "web_message" }, window.location.origin);
      t2.popup.location.href = o2.url;
      const n2 = await ((e3) => new Promise((t3, i3) => {
        let o3;
        const n3 = setInterval(() => {
          e3.popup && e3.popup.closed && (clearInterval(n3), clearTimeout(a3), window.removeEventListener("message", o3, false), i3(new p(e3.popup)));
        }, 1e3), a3 = setTimeout(() => {
          clearInterval(n3), i3(new h(e3.popup)), window.removeEventListener("message", o3, false);
        }, 1e3 * (e3.timeoutInSeconds || 60));
        o3 = function(s2) {
          if (s2.data && "authorization_response" === s2.data.type) {
            if (clearTimeout(a3), clearInterval(n3), window.removeEventListener("message", o3, false), e3.popup.close(), s2.data.response.error)
              return i3(d.fromPayload(s2.data.response));
            t3(s2.data.response);
          }
        }, window.addEventListener("message", o3);
      }))(Object.assign(Object.assign({}, t2), { timeoutInSeconds: t2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60 }));
      if (o2.state !== n2.state)
        throw new d("state_mismatch", "Invalid state");
      const a2 = (null === (i2 = e2.authorizationParams) || void 0 === i2 ? void 0 : i2.organization) || this.options.authorizationParams.organization;
      await this._requestToken({ audience: o2.audience, scope: o2.scope, code_verifier: o2.code_verifier, grant_type: "authorization_code", code: n2.code, redirect_uri: o2.redirect_uri }, { nonceIn: o2.nonce, organization: a2 });
    }
    async getUser() {
      var e2;
      const t2 = await this._getIdTokenFromCache();
      return null === (e2 = null == t2 ? void 0 : t2.decodedToken) || void 0 === e2 ? void 0 : e2.user;
    }
    async getIdTokenClaims() {
      var e2;
      const t2 = await this._getIdTokenFromCache();
      return null === (e2 = null == t2 ? void 0 : t2.decodedToken) || void 0 === e2 ? void 0 : e2.claims;
    }
    async loginWithRedirect(t2 = {}) {
      var i2;
      const o2 = Q(t2), { openUrl: n2, fragment: a2, appState: s2 } = o2, r2 = e(o2, ["openUrl", "fragment", "appState"]), c2 = (null === (i2 = r2.authorizationParams) || void 0 === i2 ? void 0 : i2.organization) || this.options.authorizationParams.organization, d2 = await this._prepareAuthorizeUrl(r2.authorizationParams || {}), { url: u2 } = d2, l2 = e(d2, ["url"]);
      this.transactionManager.create(Object.assign(Object.assign(Object.assign({}, l2), { appState: s2 }), c2 && { organization: c2 }));
      const h2 = a2 ? `${u2}#${a2}` : u2;
      n2 ? await n2(h2) : window.location.assign(h2);
    }
    async handleRedirectCallback(e2 = window.location.href) {
      const t2 = e2.split("?").slice(1);
      if (0 === t2.length)
        throw new Error("There are no query params available for parsing.");
      const { state: i2, code: o2, error: n2, error_description: a2 } = ((e3) => {
        e3.indexOf("#") > -1 && (e3 = e3.substring(0, e3.indexOf("#")));
        const t3 = new URLSearchParams(e3);
        return { state: t3.get("state"), code: t3.get("code") || void 0, error: t3.get("error") || void 0, error_description: t3.get("error_description") || void 0 };
      })(t2.join("")), s2 = this.transactionManager.get();
      if (!s2)
        throw new d("missing_transaction", "Invalid state");
      if (this.transactionManager.remove(), n2)
        throw new u(n2, a2 || n2, i2, s2.appState);
      if (!s2.code_verifier || s2.state && s2.state !== i2)
        throw new d("state_mismatch", "Invalid state");
      const r2 = s2.organization, c2 = s2.nonce, l2 = s2.redirect_uri;
      return await this._requestToken(Object.assign({ audience: s2.audience, scope: s2.scope, code_verifier: s2.code_verifier, grant_type: "authorization_code", code: o2 }, l2 ? { redirect_uri: l2 } : {}), { nonceIn: c2, organization: r2 }), { appState: s2.appState };
    }
    async checkSession(e2) {
      if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
        if (!this.cookieStorage.get("auth0.is.authenticated"))
          return;
        this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove("auth0.is.authenticated");
      }
      try {
        await this.getTokenSilently(e2);
      } catch (e3) {
      }
    }
    async getTokenSilently(e2 = {}) {
      var t2;
      const i2 = Object.assign(Object.assign({ cacheMode: "on" }, e2), { authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e2.authorizationParams), { scope: j(this.scope, null === (t2 = e2.authorizationParams) || void 0 === t2 ? void 0 : t2.scope) }) }), o2 = await ((e3, t3) => {
        let i3 = Y[t3];
        return i3 || (i3 = e3().finally(() => {
          delete Y[t3], i3 = null;
        }), Y[t3] = i3), i3;
      })(() => this._getTokenSilently(i2), `${this.options.clientId}::${i2.authorizationParams.audience}::${i2.authorizationParams.scope}`);
      return e2.detailedResponse ? o2 : null == o2 ? void 0 : o2.access_token;
    }
    async _getTokenSilently(t2) {
      const { cacheMode: i2 } = t2, o2 = e(t2, ["cacheMode"]);
      if ("off" !== i2) {
        const e2 = await this._getEntryFromCache({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId });
        if (e2)
          return e2;
      }
      if ("cache-only" !== i2) {
        if (!await (async (e2, t3 = 3) => {
          for (let i3 = 0; i3 < t3; i3++)
            if (await e2())
              return true;
          return false;
        })(() => ee.acquireLock("auth0.lock.getTokenSilently", 5e3), 10))
          throw new l();
        try {
          if (window.addEventListener("pagehide", this._releaseLockOnPageHide), "off" !== i2) {
            const e3 = await this._getEntryFromCache({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId });
            if (e3)
              return e3;
          }
          const e2 = this.options.useRefreshTokens ? await this._getTokenUsingRefreshToken(o2) : await this._getTokenFromIFrame(o2), { id_token: t3, access_token: n2, oauthTokenScope: a2, expires_in: s2 } = e2;
          return Object.assign(Object.assign({ id_token: t3, access_token: n2 }, a2 ? { scope: a2 } : null), { expires_in: s2 });
        } finally {
          await ee.releaseLock("auth0.lock.getTokenSilently"), window.removeEventListener("pagehide", this._releaseLockOnPageHide);
        }
      }
    }
    async getTokenWithPopup(e2 = {}, t2 = {}) {
      var i2;
      const o2 = Object.assign(Object.assign({}, e2), { authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), e2.authorizationParams), { scope: j(this.scope, null === (i2 = e2.authorizationParams) || void 0 === i2 ? void 0 : i2.scope) }) });
      t2 = Object.assign(Object.assign({}, s), t2), await this.loginWithPopup(o2, t2);
      return (await this.cacheManager.get(new C({ scope: o2.authorizationParams.scope, audience: o2.authorizationParams.audience || "default", clientId: this.options.clientId }))).access_token;
    }
    async isAuthenticated() {
      return !!await this.getUser();
    }
    _buildLogoutUrl(t2) {
      null !== t2.clientId ? t2.clientId = t2.clientId || this.options.clientId : delete t2.clientId;
      const i2 = t2.logoutParams || {}, { federated: o2 } = i2, n2 = e(i2, ["federated"]), a2 = o2 ? "&federated" : "";
      return this._url(`/v2/logout?${b(Object.assign({ clientId: t2.clientId }, n2))}`) + a2;
    }
    async logout(t2 = {}) {
      const i2 = Q(t2), { openUrl: o2 } = i2, n2 = e(i2, ["openUrl"]);
      null === t2.clientId ? await this.cacheManager.clear() : await this.cacheManager.clear(t2.clientId || this.options.clientId), this.cookieStorage.remove(this.orgHintCookieName, { cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove(this.isAuthenticatedCookieName, { cookieDomain: this.options.cookieDomain }), this.userCache.remove("@@user@@");
      const a2 = this._buildLogoutUrl(n2);
      o2 ? await o2(a2) : false !== o2 && window.location.assign(a2);
    }
    async _getTokenFromIFrame(e2) {
      const t2 = Object.assign(Object.assign({}, e2.authorizationParams), { prompt: "none" }), i2 = this.cookieStorage.get(this.orgHintCookieName);
      i2 && !t2.organization && (t2.organization = i2);
      const { url: o2, state: n2, nonce: a2, code_verifier: s2, redirect_uri: r2, scope: c2, audience: u2 } = await this._prepareAuthorizeUrl(t2, { response_mode: "web_message" }, window.location.origin);
      try {
        if (window.crossOriginIsolated)
          throw new d("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
        const i3 = e2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds, h2 = await ((e3, t3, i4 = 60) => new Promise((o3, n3) => {
          const a3 = window.document.createElement("iframe");
          a3.setAttribute("width", "0"), a3.setAttribute("height", "0"), a3.style.display = "none";
          const s3 = () => {
            window.document.body.contains(a3) && (window.document.body.removeChild(a3), window.removeEventListener("message", r3, false));
          };
          let r3;
          const c3 = setTimeout(() => {
            n3(new l()), s3();
          }, 1e3 * i4);
          r3 = function(e4) {
            if (e4.origin != t3)
              return;
            if (!e4.data || "authorization_response" !== e4.data.type)
              return;
            const i5 = e4.source;
            i5 && i5.close(), e4.data.response.error ? n3(d.fromPayload(e4.data.response)) : o3(e4.data.response), clearTimeout(c3), window.removeEventListener("message", r3, false), setTimeout(s3, 2e3);
          }, window.addEventListener("message", r3, false), window.document.body.appendChild(a3), a3.setAttribute("src", e3);
        }))(o2, this.domainUrl, i3);
        if (n2 !== h2.state)
          throw new d("state_mismatch", "Invalid state");
        const p2 = await this._requestToken(Object.assign(Object.assign({}, e2.authorizationParams), { code_verifier: s2, code: h2.code, grant_type: "authorization_code", redirect_uri: r2, timeout: e2.authorizationParams.timeout || this.httpTimeoutMs }), { nonceIn: a2, organization: t2.organization });
        return Object.assign(Object.assign({}, p2), { scope: c2, oauthTokenScope: p2.scope, audience: u2 });
      } catch (e3) {
        throw "login_required" === e3.error && this.logout({ openUrl: false }), e3;
      }
    }
    async _getTokenUsingRefreshToken(e2) {
      const t2 = await this.cacheManager.get(new C({ scope: e2.authorizationParams.scope, audience: e2.authorizationParams.audience || "default", clientId: this.options.clientId }));
      if (!(t2 && t2.refresh_token || this.worker)) {
        if (this.options.useRefreshTokensFallback)
          return await this._getTokenFromIFrame(e2);
        throw new f(e2.authorizationParams.audience || "default", e2.authorizationParams.scope);
      }
      const i2 = e2.authorizationParams.redirect_uri || this.options.authorizationParams.redirect_uri || window.location.origin, o2 = "number" == typeof e2.timeoutInSeconds ? 1e3 * e2.timeoutInSeconds : null;
      try {
        const n2 = await this._requestToken(Object.assign(Object.assign(Object.assign({}, e2.authorizationParams), { grant_type: "refresh_token", refresh_token: t2 && t2.refresh_token, redirect_uri: i2 }), o2 && { timeout: o2 }));
        return Object.assign(Object.assign({}, n2), { scope: e2.authorizationParams.scope, oauthTokenScope: n2.scope, audience: e2.authorizationParams.audience || "default" });
      } catch (t3) {
        if ((t3.message.indexOf("Missing Refresh Token") > -1 || t3.message && t3.message.indexOf("invalid refresh token") > -1) && this.options.useRefreshTokensFallback)
          return await this._getTokenFromIFrame(e2);
        throw t3;
      }
    }
    async _saveEntryInCache(t2) {
      const { id_token: i2, decodedToken: o2 } = t2, n2 = e(t2, ["id_token", "decodedToken"]);
      this.userCache.set("@@user@@", { id_token: i2, decodedToken: o2 }), await this.cacheManager.setIdToken(this.options.clientId, t2.id_token, t2.decodedToken), await this.cacheManager.set(n2);
    }
    async _getIdTokenFromCache() {
      const e2 = this.options.authorizationParams.audience || "default", t2 = await this.cacheManager.getIdToken(new C({ clientId: this.options.clientId, audience: e2, scope: this.scope })), i2 = this.userCache.get("@@user@@");
      return t2 && t2.id_token === (null == i2 ? void 0 : i2.id_token) ? i2 : (this.userCache.set("@@user@@", t2), t2);
    }
    async _getEntryFromCache({ scope: e2, audience: t2, clientId: i2 }) {
      const o2 = await this.cacheManager.get(new C({ scope: e2, audience: t2, clientId: i2 }), 60);
      if (o2 && o2.access_token) {
        const { access_token: e3, oauthTokenScope: t3, expires_in: i3 } = o2, n2 = await this._getIdTokenFromCache();
        return n2 && Object.assign(Object.assign({ id_token: n2.id_token, access_token: e3 }, t3 ? { scope: t3 } : null), { expires_in: i3 });
      }
    }
    async _requestToken(e2, t2) {
      const { nonceIn: i2, organization: o2 } = t2 || {}, n2 = await O(Object.assign({ baseUrl: this.domainUrl, client_id: this.options.clientId, auth0Client: this.options.auth0Client, useFormData: this.options.useFormData, timeout: this.httpTimeoutMs }, e2), this.worker), a2 = await this._verifyIdToken(n2.id_token, i2, o2);
      return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({}, n2), { decodedToken: a2, scope: e2.scope, audience: e2.audience || "default" }), n2.scope ? { oauthTokenScope: n2.scope } : null), { client_id: this.options.clientId })), this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this._processOrgHint(o2 || a2.claims.org_id), Object.assign(Object.assign({}, n2), { decodedToken: a2 });
    }
  };
  async function oe(e2) {
    const t2 = new te(e2);
    return await t2.checkSession(), t2;
  }

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // node_modules/axios/lib/utils.js
  var { toString } = Object.prototype;
  var { getPrototypeOf } = Object;
  var kindOf = ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  var isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i2;
    let l2;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i2 = 0, l2 = obj.length; i2 < l2; i2++) {
        fn.call(null, obj[i2], i2, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i2 = 0; i2 < len; i2++) {
        key = keys[i2];
        fn.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i2 = keys.length;
    let _key;
    while (i2-- > 0) {
      _key = keys[i2];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = (() => {
    if (typeof globalThis !== "undefined")
      return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
      arguments[i2] && forEach(arguments[i2], assignValue);
    }
    return result;
  }
  var extend = (a2, b2, thisArg, { allOwnKeys } = {}) => {
    forEach(b2, (val, key) => {
      if (thisArg && isFunction(val)) {
        a2[key] = bind(val, thisArg);
      } else {
        a2[key] = val;
      }
    }, { allOwnKeys });
    return a2;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i2;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i2 = props.length;
      while (i2-- > 0) {
        prop = props[i2];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing)
      return null;
    if (isArray(thing))
      return thing;
    let i2 = thing.length;
    if (!isNumber(i2))
      return null;
    const arr = new Array(i2);
    while (i2-- > 0) {
      arr[i2] = thing[i2];
    }
    return arr;
  };
  var isTypedArray = ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m2, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  var ALPHA = "abcdefghijklmnopqrstuvwxyz";
  var DIGIT = "0123456789";
  var ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i2) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i2] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i2 + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i2] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils_default.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // node_modules/axios/lib/helpers/null.js
  var null_default = null;

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i2) {
      token = removeBrackets(token);
      return !dots && i2 ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype2.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils_default.forEach(this.handlers, function forEachHandler(h2) {
        if (h2 !== null) {
          fn(h2);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // node_modules/axios/lib/defaults/transitional.js
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // node_modules/axios/lib/platform/browser/index.js
  var isStandardBrowserEnv = (() => {
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  })();
  var isStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new browser_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (browser_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  // node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i2;
    const len = keys.length;
    let key;
    for (i2 = 0; i2 < len; i2++) {
      key = keys[i2];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e2) {
        if (e2.name !== "SyntaxError") {
          throw e2;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: browser_default.isNode ? "http" : "xhr",
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e2) {
          if (strictJSONParsing) {
            if (e2.name === "SyntaxError") {
              throw AxiosError_default.from(e2, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e2;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: browser_default.classes.FormData,
      Blob: browser_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  var defaults_default = defaults;

  // node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i2;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i2 = line.indexOf(":");
      key = line.substring(0, i2).trim().toLowerCase();
      val = line.substring(i2 + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value))
      return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i2 = keys.length;
      let deleted = false;
      while (i2--) {
        const key = keys[i2];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  // node_modules/axios/lib/helpers/cookies.js
  var cookies_default = browser_default.isStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          const cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils_default.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils_default.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils_default.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }()
  );

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default = browser_default.isStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv2() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function nonStandardBrowserEnv2() {
      return function isURLSameOrigin() {
        return true;
      };
    }()
  );

  // node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i2 = tail;
      let bytesCount = 0;
      while (i2 !== head) {
        bytesCount += bytes[i2++];
        i2 = i2 % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // node_modules/axios/lib/adapters/xhr.js
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return (e2) => {
      const loaded = e2.loaded;
      const total = e2.lengthComputable ? e2.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e2
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
      const responseType = config.responseType;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils_default.isFormData(requestData)) {
        if (browser_default.isStandardBrowserEnv || browser_default.isStandardBrowserWebWorkerEnv) {
          requestHeaders.setContentType(false);
        } else {
          requestHeaders.setContentType("multipart/form-data;", false);
        }
      }
      let request = new XMLHttpRequest();
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = config.transitional || transitional_default;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      if (browser_default.isStandardBrowserEnv) {
        const xsrfValue = (config.withCredentials || isURLSameOrigin_default(fullPath)) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && browser_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };

  // node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default
  };
  utils_default.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, "name", { value });
      } catch (e2) {
      }
      Object.defineProperty(fn, "adapterName", { value });
    }
  });
  var adapters_default = {
    getAdapter: (adapters) => {
      adapters = utils_default.isArray(adapters) ? adapters : [adapters];
      const { length } = adapters;
      let nameOrAdapter;
      let adapter;
      for (let i2 = 0; i2 < length; i2++) {
        nameOrAdapter = adapters[i2];
        if (adapter = utils_default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
          break;
        }
      }
      if (!adapter) {
        if (adapter === false) {
          throw new AxiosError_default(
            `Adapter ${nameOrAdapter} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          );
        }
        throw new Error(
          utils_default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
        );
      }
      if (!utils_default.isFunction(adapter)) {
        throw new TypeError("adapter is not a function");
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // node_modules/axios/lib/core/mergeConfig.js
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a2, b2, caseless) {
      if (!utils_default.isUndefined(b2)) {
        return getMergedValue(a2, b2, caseless);
      } else if (!utils_default.isUndefined(a2)) {
        return getMergedValue(void 0, a2, caseless);
      }
    }
    function valueFromConfig2(a2, b2) {
      if (!utils_default.isUndefined(b2)) {
        return getMergedValue(void 0, b2);
      }
    }
    function defaultToConfig2(a2, b2) {
      if (!utils_default.isUndefined(b2)) {
        return getMergedValue(void 0, b2);
      } else if (!utils_default.isUndefined(a2)) {
        return getMergedValue(void 0, a2);
      }
    }
    function mergeDirectKeys(a2, b2, prop) {
      if (prop in config2) {
        return getMergedValue(a2, b2);
      } else if (prop in config1) {
        return getMergedValue(void 0, a2);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a2, b2) => mergeDeepProperties(headersToObject(a2), headersToObject(b2), true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  // node_modules/axios/lib/env/data.js
  var VERSION = "1.5.0";

  // node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i2) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i2 = keys.length;
    while (i2-- > 0) {
      const opt = keys[i2];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional: transitional2, paramsSerializer, headers } = config;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(paramsSerializer, {
            encode: validators2.function,
            serialize: validators2.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils_default.merge(
        headers.common,
        headers[config.method]
      );
      headers && utils_default.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i2 = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i2 < len) {
          promise = promise.then(chain[i2++], chain[i2++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i2 = 0;
      while (i2 < len) {
        const onFulfilled = requestInterceptorChain[i2++];
        const onRejected = requestInterceptorChain[i2++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i2 = 0;
      len = responseInterceptorChain.length;
      while (i2 < len) {
        promise = promise.then(responseInterceptorChain[i2++], responseInterceptorChain[i2++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken = class _CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners)
          return;
        let i2 = token._listeners.length;
        while (i2-- > 0) {
          token._listeners[i2](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new _CancelToken(function executor(c2) {
        cancel = c2;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode_default = HttpStatusCode;

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters_default.getAdapter;
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION2,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    getAdapter,
    mergeConfig: mergeConfig2
  } = axios_default;

  // src/client/commom.ts
  async function getConfig() {
    console.log("[getConfig] Getting client config.");
    const { data } = await axios_default.get("/spa/config");
    console.log("[getConfig]", data);
    return data;
  }
  function toggleButtonsVisibility(loggedIn) {
    const displayWhenLoggetIn = document.getElementById("authorized");
    const displayWhenLoggedOut = document.getElementById("unauthorized");
    if (loggedIn) {
      displayWhenLoggetIn?.classList.remove("hide");
      displayWhenLoggedOut?.classList.add("hide");
    }
    if (!loggedIn) {
      displayWhenLoggetIn?.classList.add("hide");
      displayWhenLoggedOut?.classList.remove("hide");
    }
  }
  function show(elementId, data) {
    const elem = document.getElementById(elementId);
    if (!elem) {
      return;
    }
    elem.textContent = data;
  }
  async function addAPIAuthTestEventListener(store) {
    async function test() {
      console.log("[apiAuthTest] Requesting.");
      try {
        const resp = await axios_default.get("/api/authtest", {
          headers: {
            Authorization: `Bearer ${store.accessToken}`
          }
        });
        show("externalAPIResponse", JSON.stringify(resp.data));
      } catch (err) {
        console.error("[apiAuthTest]", err);
        show(
          "externalAPIResponse",
          `${err.response.status} ${err.response.statusText}`
        );
      }
    }
    const testExternalAPIButton = document.getElementById("testExternalAPIButton");
    testExternalAPIButton?.addEventListener("click", test);
  }
  function parseCustomParams() {
    const customParamsTextarea = document.getElementById("customParams");
    if (!customParamsTextarea) {
      return;
    }
    const txt = customParamsTextarea.value;
    let params = {};
    try {
      params = JSON.parse(txt);
      customParamsTextarea.style.borderColor = "green";
      return params;
    } catch (err) {
      console.log("[parseCustomParams]", err);
      customParamsTextarea.style.borderColor = "red";
      throw err;
    }
  }

  // src/client/auth0spajs.ts
  (async function() {
    const config = await getConfig();
    const { AUTH0_DOMAIN, CLIENT_ID, SCOPE, API_IDENTIFIER } = config;
    const client = await oe({
      domain: AUTH0_DOMAIN,
      clientId: CLIENT_ID,
      authorizationParams: {
        redirect_uri: window.location.href,
        audience: API_IDENTIFIER,
        scope: SCOPE
      }
    });
    window["__auth0Client"] = client;
    const tokenStore = {
      accessToken: "",
      idToken: ""
    };
    window["__tokenStore"] = tokenStore;
    async function login() {
      await client.loginWithRedirect();
    }
    async function loginWithCustomParams() {
      let params = {};
      try {
        params = parseCustomParams();
      } catch (err) {
        console.log("[loginWithCustomParams] Invalid JSON string.");
        return;
      }
      console.log(
        "[loginWithCustomParams] Logging in with custom parans.",
        params
      );
      await client.loginWithRedirect(params);
    }
    async function logout() {
      await client.logout();
      toggleButtonsVisibility(false);
    }
    async function silentAuth() {
      try {
        console.log("[getTokenSilently] Requesting an access token.");
        const accessToken = await client.getTokenSilently();
        show("accessToken", accessToken ? accessToken : "N/A");
        if (accessToken) {
          toggleButtonsVisibility(true);
          tokenStore.accessToken = accessToken;
        }
      } catch (err) {
        console.log("[getTokenSilently]", err);
        show("accessToken", "N/A");
      }
      try {
        console.log("[getIdTokenClaims] Requesting an id token.");
        const idToken = await client.getIdTokenClaims();
        show("idToken", idToken ? idToken.__raw : "N/A");
        if (idToken?.__raw) {
          tokenStore.idToken = idToken.__raw;
        }
      } catch (err) {
        console.log("[getIdTokenClaims]", err);
        show("idToken", "N/A");
      }
    }
    const loginButton = document.getElementById("loginButton");
    loginButton?.addEventListener("click", login);
    const logoutButton = document.getElementById("logoutButton");
    logoutButton?.addEventListener("click", logout);
    const loginWithCustomParamsButton = document.getElementById(
      "loginWithCustomParamsButton"
    );
    loginWithCustomParamsButton?.addEventListener("click", loginWithCustomParams);
    const testSilentAuthButton = document.getElementById("testSilentAuthButton");
    testSilentAuthButton?.addEventListener("click", silentAuth);
    addAPIAuthTestEventListener(tokenStore);
    try {
      console.log("[handleRedirectCallback] Handling callback.");
      await client.handleRedirectCallback();
    } catch (err) {
      console.log("[handleRedirectCallback]", err);
    }
    await silentAuth();
  })();
})();
//# sourceMappingURL=auth0spajs.bundle.js.map
