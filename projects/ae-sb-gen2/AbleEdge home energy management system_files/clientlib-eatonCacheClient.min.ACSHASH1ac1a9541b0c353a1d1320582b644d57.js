/******/ (function() { // webpackBootstrap
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Eaton Cache Client Library
 * A standalone JavaScript caching utility for HTTP requests
 * Works independently of Angular and other frameworks
 *
 * Features:
 * - SessionStorage persistence with TTL
 * - Smart cache key generation
 * - Support for .nocache URLs
 * - Simple Promise-based API
 * - Automatic storage limit fallback (clears expired/oldest entries when 5MB limit is reached)
 *
 * @version 1.0.0
 * @date 2026-01-29
 */

(function (window) {
  /**
   * Cache configuration
   */
  var CONFIG = {
    CACHE_PREFIX: 'etn-cache-',
    DEFAULT_TTL: 5 * 60 * 1000,
    // 5 minutes in milliseconds
    ENABLED: true
  };

  /**
   * TTL (Time-To-Live) Constants
   * Predefined cache durations for common use cases
   */
  var TTL = {
    ONE_MINUTE: 1 * 60 * 1000,
    TWO_MINUTES: 2 * 60 * 1000,
    FIVE_MINUTES: 5 * 60 * 1000,
    TEN_MINUTES: 10 * 60 * 1000,
    FIFTEEN_MINUTES: 15 * 60 * 1000,
    THIRTY_MINUTES: 30 * 60 * 1000,
    ONE_HOUR: 60 * 60 * 1000,
    NO_EXPIRATION: null
  };

  /**
   * Cache Entry Structure
   * @typedef {Object} CacheEntry
   * @property {*} data - The cached data
   * @property {number} timestamp - When the data was cached
   * @property {string} url - The URL that was cached
   * @property {number|null} ttl - Time-to-live in milliseconds (null for no expiration)
   */

  /**
   * EatonCacheClient - Main cache manager
   */
  var EatonCacheClient = /*#__PURE__*/function () {
    function EatonCacheClient() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, EatonCacheClient);
      this.config = _objectSpread(_objectSpread({}, CONFIG), options);
    }

    /**
     * Get cache key for a URL
     * @private
     */
    return _createClass(EatonCacheClient, [{
      key: "_getCacheKey",
      value: function _getCacheKey(url) {
        return this.config.CACHE_PREFIX + url;
      }

      /**
       * Check if URL should bypass cache
       * Note: .nocache. in URL is for bypassing dispatcher/CDN, not client cache
       * @private
       */
    }, {
      key: "_shouldBypassCache",
      value: function _shouldBypassCache(url) {
        return url.includes('nocache=true');
      }

      /**
       * Create a cache entry object
       * @private
       * @param {string} url - The URL being cached
       * @param {*} data - The data to cache
       * @param {number|null} ttl - Time-to-live in milliseconds
       * @returns {Object} Cache entry object
       */
    }, {
      key: "_createCacheEntry",
      value: function _createCacheEntry(url, data, ttl) {
        return {
          data: data,
          timestamp: Date.now(),
          url: url,
          ttl: ttl
        };
      }

      /**
       * Get data from cache
       * @private
       */
    }, {
      key: "_getFromCache",
      value: function _getFromCache(url, ttl) {
        try {
          var cacheKey = this._getCacheKey(url);
          var cached = sessionStorage.getItem(cacheKey);
          if (!cached) {
            return null;
          }
          var entry = JSON.parse(cached);

          // Check if cache is still valid
          var age = Date.now() - entry.timestamp;
          if (ttl && age > ttl) {
            this._removeFromCache(url);
            return null;
          }
          console.log("[EatonCache] Cache hit: ".concat(url, " (age: ").concat(Math.round(age / 1000), "s)"));
          return entry.data;
        } catch (error) {
          console.error('[EatonCache] Error reading from cache:', error);
          return null;
        }
      }

      /**
       * Clear expired cache entries
       * @private
       * @returns {number} Number of entries cleared
       */
    }, {
      key: "_clearExpiredEntries",
      value: function _clearExpiredEntries() {
        var _this = this;
        try {
          var keys = Object.keys(sessionStorage);
          var cacheKeys = keys.filter(function (key) {
            return key.startsWith(_this.config.CACHE_PREFIX);
          });
          var clearedCount = 0;
          cacheKeys.forEach(function (key) {
            try {
              var entry = JSON.parse(sessionStorage.getItem(key));
              var age = Date.now() - entry.timestamp;

              // Remove if expired based on entry's TTL (or DEFAULT_TTL if not set)
              // Skip entries with NO_EXPIRATION (ttl = null)
              var entryTTL = entry.ttl !== undefined ? entry.ttl : _this.config.DEFAULT_TTL;
              if (entryTTL !== null && age > entryTTL) {
                sessionStorage.removeItem(key);
                clearedCount++;
              }
            } catch (error) {
              // If we can't parse the entry, remove it
              sessionStorage.removeItem(key);
              clearedCount++;
            }
          });
          console.log("[EatonCache] Cleared ".concat(clearedCount, " expired entries"));
          return clearedCount;
        } catch (error) {
          console.error('[EatonCache] Error clearing expired entries:', error);
          return 0;
        }
      }

      /**
       * Clear oldest cache entries to free up space
       * @private
       * @param {number} count - Number of entries to clear (default: 5)
       * @returns {number} Number of entries cleared
       */
    }, {
      key: "_clearOldestEntries",
      value: function _clearOldestEntries() {
        var _this2 = this;
        var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
        try {
          var keys = Object.keys(sessionStorage);
          var cacheKeys = keys.filter(function (key) {
            return key.startsWith(_this2.config.CACHE_PREFIX);
          });

          // Get all entries with their timestamps
          var entries = cacheKeys.map(function (key) {
            try {
              var entry = JSON.parse(sessionStorage.getItem(key));
              return {
                key: key,
                timestamp: entry.timestamp
              };
            } catch (_unused) {
              return {
                key: key,
                timestamp: 0
              };
            }
          });

          // Sort by timestamp (oldest first)
          entries.sort(function (a, b) {
            return a.timestamp - b.timestamp;
          });

          // Remove the oldest entries
          var toRemove = entries.slice(0, Math.min(count, entries.length));
          toRemove.forEach(function (item) {
            sessionStorage.removeItem(item.key);
          });
          console.log("[EatonCache] Cleared ".concat(toRemove.length, " oldest entries"));
          return toRemove.length;
        } catch (error) {
          console.error('[EatonCache] Error clearing oldest entries:', error);
          return 0;
        }
      }

      /**
       * Save data to cache with storage limit fallback
       * @private
       * @param {string} url - The URL to cache
       * @param {*} data - The data to cache
       * @param {number|null} ttl - Time-to-live in milliseconds (null for no expiration)
       */
    }, {
      key: "_saveToCache",
      value: function _saveToCache(url, data) {
        var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.config.DEFAULT_TTL;
        var cacheKey = this._getCacheKey(url);
        var entry = this._createCacheEntry(url, data, ttl);
        try {
          sessionStorage.setItem(cacheKey, JSON.stringify(entry));
          console.log("[EatonCache] Cached: ".concat(url));
        } catch (error) {
          // Check if it's a quota exceeded error
          if (error.name === 'QuotaExceededError' || error.code === 22 || error.code === 1014) {
            console.warn('[EatonCache] Storage limit reached. Attempting to free up space...');

            // First, try to clear expired entries
            var expiredCleared = this._clearExpiredEntries();

            // If no expired entries were cleared, remove oldest entries
            if (expiredCleared === 0) {
              this._clearOldestEntries(5);
            }

            // Retry the save operation
            try {
              sessionStorage.setItem(cacheKey, JSON.stringify(entry));
              console.log("[EatonCache] Cached after cleanup: ".concat(url));
            } catch (retryError) {
              console.error('[EatonCache] Failed to cache even after cleanup:', retryError);
            }
          } else {
            console.error('[EatonCache] Error writing to cache:', error);
          }
        }
      }

      /**
       * Remove data from cache
       * @private
       */
    }, {
      key: "_removeFromCache",
      value: function _removeFromCache(url) {
        try {
          var cacheKey = this._getCacheKey(url);
          sessionStorage.removeItem(cacheKey);
        } catch (error) {
          console.error('[EatonCache] Error removing from cache:', error);
        }
      }

      /**
       * Fetch data with caching
       * @param {string} url - The URL to fetch
       * @param {Object} options - Fetch options
       * @param {number} options.ttl - Time-to-live in milliseconds (default: 5 minutes)
       * @param {boolean} options.cache - Whether to use cache (default: true)
       * @param {string} options.cacheKey - Custom cache key (default: uses URL)
       * @param {Object} options.fetchOptions - Additional fetch options (headers, method, etc.)
       * @returns {Promise<any>} The fetched data
       */
    }, {
      key: "fetch",
      value: (function () {
        var _fetch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url) {
          var options,
            _options$ttl,
            ttl,
            _options$cache,
            cache,
            _options$cacheKey,
            cacheKey,
            _options$fetchOptions,
            fetchOptions,
            useCache,
            cached,
            response,
            data,
            _args = arguments,
            _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.p = _context.n) {
              case 0:
                options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                _options$ttl = options.ttl, ttl = _options$ttl === void 0 ? this.config.DEFAULT_TTL : _options$ttl, _options$cache = options.cache, cache = _options$cache === void 0 ? true : _options$cache, _options$cacheKey = options.cacheKey, cacheKey = _options$cacheKey === void 0 ? url : _options$cacheKey, _options$fetchOptions = options.fetchOptions, fetchOptions = _options$fetchOptions === void 0 ? {} : _options$fetchOptions; // Check if caching is enabled and should be used
                useCache = this.config.ENABLED && cache && !this._shouldBypassCache(url); // Try to get from cache first (use custom cache key if provided)
                if (!useCache) {
                  _context.n = 1;
                  break;
                }
                cached = this._getFromCache(cacheKey, ttl);
                if (!(cached !== null)) {
                  _context.n = 1;
                  break;
                }
                return _context.a(2, Promise.resolve(cached));
              case 1:
                _context.p = 1;
                console.log("[EatonCache] Fetching from server: ".concat(url));
                _context.n = 2;
                return window.fetch(url, fetchOptions);
              case 2:
                response = _context.v;
                if (response.ok) {
                  _context.n = 3;
                  break;
                }
                throw new Error("HTTP ".concat(response.status, ": ").concat(response.statusText));
              case 3:
                _context.n = 4;
                return response.json();
              case 4:
                data = _context.v;
                // Cache the result if caching is enabled (use custom cache key if provided)
                if (useCache) {
                  this._saveToCache(cacheKey, data, ttl);
                }
                return _context.a(2, data);
              case 5:
                _context.p = 5;
                _t = _context.v;
                console.error("[EatonCache] Fetch error for ".concat(url, ":"), _t);
                throw _t;
              case 6:
                return _context.a(2);
            }
          }, _callee, this, [[1, 5]]);
        }));
        function fetch(_x) {
          return _fetch.apply(this, arguments);
        }
        return fetch;
      }()
      /**
       * Fetch data as text with caching
       * @param {string} url - The URL to fetch
       * @param {Object} options - Fetch options (same as fetch method)
       * @returns {Promise<string>} The fetched text
       */
      )
    }, {
      key: "fetchText",
      value: (function () {
        var _fetchText = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(url) {
          var options,
            _options$ttl2,
            ttl,
            _options$cache2,
            cache,
            _options$fetchOptions2,
            fetchOptions,
            useCache,
            cached,
            response,
            data,
            _args2 = arguments,
            _t2;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.p = _context2.n) {
              case 0:
                options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                _options$ttl2 = options.ttl, ttl = _options$ttl2 === void 0 ? this.config.DEFAULT_TTL : _options$ttl2, _options$cache2 = options.cache, cache = _options$cache2 === void 0 ? true : _options$cache2, _options$fetchOptions2 = options.fetchOptions, fetchOptions = _options$fetchOptions2 === void 0 ? {} : _options$fetchOptions2;
                useCache = this.config.ENABLED && cache && !this._shouldBypassCache(url);
                if (!useCache) {
                  _context2.n = 1;
                  break;
                }
                cached = this._getFromCache(url, ttl);
                if (!(cached !== null)) {
                  _context2.n = 1;
                  break;
                }
                return _context2.a(2, Promise.resolve(cached));
              case 1:
                _context2.p = 1;
                console.log("[EatonCache] Fetching text from server: ".concat(url));
                _context2.n = 2;
                return window.fetch(url, fetchOptions);
              case 2:
                response = _context2.v;
                if (response.ok) {
                  _context2.n = 3;
                  break;
                }
                throw new Error("HTTP ".concat(response.status, ": ").concat(response.statusText));
              case 3:
                _context2.n = 4;
                return response.text();
              case 4:
                data = _context2.v;
                if (useCache) {
                  this._saveToCache(url, data, ttl);
                }
                return _context2.a(2, data);
              case 5:
                _context2.p = 5;
                _t2 = _context2.v;
                console.error("[EatonCache] Fetch text error for ".concat(url, ":"), _t2);
                throw _t2;
              case 6:
                return _context2.a(2);
            }
          }, _callee2, this, [[1, 5]]);
        }));
        function fetchText(_x2) {
          return _fetchText.apply(this, arguments);
        }
        return fetchText;
      }()
      /**
       * Check if data is cached
       * @param {string} url - The URL to check
       * @param {number} ttl - Optional TTL to check validity
       * @returns {boolean} True if cached and valid
       */
      )
    }, {
      key: "hasCached",
      value: function hasCached(url) {
        var ttl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var cached = this._getFromCache(url, ttl);
        return cached !== null;
      }

      /**
       * Clear specific cache entry
       * @param {string} url - The URL to clear
       */
    }, {
      key: "clearCache",
      value: function clearCache(url) {
        this._removeFromCache(url);
        console.log("[EatonCache] Cleared cache for: ".concat(url));
      }

      /**
       * Manually set cache data
       * @param {string} url - The URL to use as cache key
       * @param {*} data - The data to cache
       * @param {number|null} ttl - Time-to-live in milliseconds (default: DEFAULT_TTL, null for no expiration)
       */
    }, {
      key: "setCache",
      value: function setCache(url, data) {
        var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.config.DEFAULT_TTL;
        this._saveToCache(url, data, ttl);
      }

      /**
       * Clear all cache entries
       */
    }, {
      key: "clearAllCache",
      value: function clearAllCache() {
        var _this3 = this;
        try {
          var keys = Object.keys(sessionStorage);
          var cacheKeys = keys.filter(function (key) {
            return key.startsWith(_this3.config.CACHE_PREFIX);
          });
          cacheKeys.forEach(function (key) {
            sessionStorage.removeItem(key);
          });
          console.log("[EatonCache] Cleared ".concat(cacheKeys.length, " cache entries"));
        } catch (error) {
          console.error('[EatonCache] Error clearing all cache:', error);
        }
      }

      /**
       * Clear all nocache cache entries (useful for logout)
       */
    }, {
      key: "clearAllNocacheEntries",
      value: function clearAllNocacheEntries() {
        var _this4 = this;
        try {
          var stats = this.getCacheStats();
          var nocacheKeys = stats.entries.filter(function (entry) {
            return entry.url.includes('.nocache');
          }).map(function (entry) {
            return entry.url;
          });
          nocacheKeys.forEach(function (key) {
            _this4.clearCache(key);
          });
          console.log("[EatonCache] Cleared ".concat(nocacheKeys.length, " nocache entries:"), nocacheKeys);
          return nocacheKeys.length;
        } catch (error) {
          console.error('[EatonCache] Error clearing nocache entries:', error);
          return 0;
        }
      }

      /**
       * Get cache statistics
       * @returns {Object} Cache stats
       */
    }, {
      key: "getCacheStats",
      value: function getCacheStats() {
        var _this5 = this;
        try {
          var keys = Object.keys(sessionStorage);
          var cacheKeys = keys.filter(function (key) {
            return key.startsWith(_this5.config.CACHE_PREFIX);
          });
          var entries = cacheKeys.map(function (key) {
            try {
              var entry = JSON.parse(sessionStorage.getItem(key));
              return {
                url: entry.url,
                age: Date.now() - entry.timestamp,
                size: sessionStorage.getItem(key).length
              };
            } catch (_unused2) {
              return null;
            }
          }).filter(Boolean);
          return {
            count: entries.length,
            entries: entries,
            totalSize: entries.reduce(function (sum, e) {
              return sum + e.size;
            }, 0)
          };
        } catch (error) {
          console.error('[EatonCache] Error getting cache stats:', error);
          return {
            count: 0,
            entries: [],
            totalSize: 0
          };
        }
      }

      /**
       * Enable caching
       */
    }, {
      key: "enable",
      value: function enable() {
        this.config.ENABLED = true;
        console.log('[EatonCache] Cache enabled');
      }

      /**
       * Disable caching
       */
    }, {
      key: "disable",
      value: function disable() {
        this.config.ENABLED = false;
        console.log('[EatonCache] Cache disabled');
      }
    }]);
  }(); // Create global instance
  var eatonCache = new EatonCacheClient();

  // Expose to window
  window.EatonCache = eatonCache;

  // Expose TTL constants
  window.EatonCache.TTL = TTL;

  /**
   * Utility: Add .nocache to URL if dt-id cookie is present
   * @param {string} url - The URL to modify
   * @returns {string} URL with .nocache added if needed
   */
  window.EatonCache.addNoCacheIfNeeded = function (url) {
    var hasEatonAuthCookie = document.cookie.indexOf('etn-auth') > -1;
    if (hasEatonAuthCookie && url.indexOf('.nocache') === -1) {
      // Insert .nocache before the file extension
      // e.g., /path/file.json -> /path/file.nocache.json
      return url.replace(/(\.[^.]+)$/, '.nocache$1');
    }
    return url;
  };

  // Also expose the class for custom instances
  window.EatonCacheClient = EatonCacheClient;
  console.log('[EatonCache] Library loaded and ready');
})(window);
/******/ })()
;