/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/sound-cloud-react-mobx";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Root.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__("./app/components/App.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Explore__ = __webpack_require__("./app/pages/Explore.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Search__ = __webpack_require__("./app/pages/Search.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_User_index__ = __webpack_require__("./app/pages/User/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_User_UserCategory__ = __webpack_require__("./app/pages/User/UserCategory.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_User_UserAbout__ = __webpack_require__("./app/pages/User/UserAbout.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Track__ = __webpack_require__("./app/pages/Track.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Playlist__ = __webpack_require__("./app/pages/Playlist.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Stream__ = __webpack_require__("./app/pages/Stream.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Callback__ = __webpack_require__("./app/pages/Callback.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__("./app/config.js");















var baseUrl = __WEBPACK_IMPORTED_MODULE_12__config__["a" /* isDev */] ? '/' : https://sbutnko.github.io/sound-cloud-react-mobx;

var Root = function Root(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Router"],
    { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
      { path: baseUrl, component: __WEBPACK_IMPORTED_MODULE_2__components_App__["a" /* default */], test: 'test' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRedirect"], { to: 'explore' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_11__pages_Callback__["a" /* default */] }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'stream', component: __WEBPACK_IMPORTED_MODULE_10__pages_Stream__["a" /* default */] }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'explore(/:genre)', component: __WEBPACK_IMPORTED_MODULE_3__pages_Explore__["a" /* default */] }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'search/:cat', component: __WEBPACK_IMPORTED_MODULE_4__pages_Search__["a" /* default */] }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
        { path: ':user', component: __WEBPACK_IMPORTED_MODULE_5__pages_User_index__["a" /* default */] },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRedirect"], { to: 'tracks' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__pages_User_UserAbout__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: ':cat', component: __WEBPACK_IMPORTED_MODULE_6__pages_User_UserCategory__["a" /* default */] })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: ':user/tracks/:track', component: __WEBPACK_IMPORTED_MODULE_8__pages_Track__["a" /* default */] }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: ':user/playlists/:playlist', component: __WEBPACK_IMPORTED_MODULE_9__pages_Playlist__["a" /* default */] })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = Root;

/***/ }),

/***/ "./app/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_soundcloud__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_soundcloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_soundcloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./app/config.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getNextHref; });
/* unused harmony export formatNextHref */
/* harmony export (immutable) */ __webpack_exports__["j"] = formatStreamUrl;
/* harmony export (immutable) */ __webpack_exports__["c"] = loadData;
/* harmony export (immutable) */ __webpack_exports__["d"] = loadMore;
/* harmony export (immutable) */ __webpack_exports__["g"] = loadUser;
/* harmony export (immutable) */ __webpack_exports__["h"] = loadUserWebProfiles;
/* harmony export (immutable) */ __webpack_exports__["a"] = loadPlaylist;
/* harmony export (immutable) */ __webpack_exports__["b"] = loadTrack;
/* harmony export (immutable) */ __webpack_exports__["p"] = followUser;
/* harmony export (immutable) */ __webpack_exports__["o"] = unfollowUser;
/* harmony export (immutable) */ __webpack_exports__["n"] = addLike;
/* harmony export (immutable) */ __webpack_exports__["m"] = removeLike;
/* harmony export (immutable) */ __webpack_exports__["f"] = addComment;
/* harmony export (immutable) */ __webpack_exports__["e"] = removeComment;
/* harmony export (immutable) */ __webpack_exports__["k"] = getMeLikesIds;
/* harmony export (immutable) */ __webpack_exports__["l"] = getMeFollowingsIds;
/* harmony export (immutable) */ __webpack_exports__["i"] = loadUserVisuals;





var TOKEN = function TOKEN() {
  return __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.get(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* COOKIE_PATH */]);
};
var BASE_URL = '//api.soundcloud.com/';
var RESOLVE_URL = BASE_URL + 'resolve?url=http://soundcloud.com/';
var params = { client_id: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* CLIENT_ID */] };
var PAGE_SIZE = 50;
var handleError = function handleError(err) {
  return console.error(err);
};
var nextHref = null;

__WEBPACK_IMPORTED_MODULE_0_soundcloud___default.a.initialize({
  client_id: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* CLIENT_ID */],
  redirect_uri: __WEBPACK_IMPORTED_MODULE_3__config__["d" /* REDIRECT_URI */],
  oauth_token: TOKEN()
});

var getNextHref = function getNextHref() {
  return nextHref;
};

function formatNextHref(href) {
  if (!href.includes('client_id') && !href.includes('oauth_token')) return href += TOKEN() ? '&oauth_token=' + TOKEN() : '&client_id=' + __WEBPACK_IMPORTED_MODULE_3__config__["c" /* CLIENT_ID */];else return href;
}

function formatStreamUrl(url) {
  return url + '?client_id=' + __WEBPACK_IMPORTED_MODULE_3__config__["c" /* CLIENT_ID */];
}

function loadData(href, opts) {
  return __WEBPACK_IMPORTED_MODULE_0_soundcloud___default.a.get(href, Object.assign({ limit: PAGE_SIZE, linked_partitioning: 1 }, opts)).then(function (data) {
    nextHref = data.next_href;
    return data;
  }).catch(handleError);
}

function loadMore(nextHref) {
  return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(formatNextHref(nextHref)).then(function (_ref) {
    var data = _ref.data;

    nextHref = data.next_href;
    return data;
  }).catch(handleError);
}

function loadUser(permalink) {
  return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + RESOLVE_URL + permalink, { params: params }).then(function (_ref2) {
    var data = _ref2.data;
    return data;
  }).catch(handleError);
}

function loadUserWebProfiles(userId) {
  return __WEBPACK_IMPORTED_MODULE_0_soundcloud___default.a.get('/users/' + userId + '/web-profiles').catch(handleError);
}

function loadPlaylist(user, playlist) {
  return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + RESOLVE_URL + user + '/sets/' + playlist, { params: params }).then(function (_ref3) {
    var data = _ref3.data;
    return data;
  }).catch(handleError);
}

function loadTrack(user, track) {
  return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('' + RESOLVE_URL + user + '/' + track, { params: params }).then(function (_ref4) {
    var data = _ref4.data;
    return data;
  }).catch(handleError);
}

function followUser(userId) {
  return __WEBPACK_IMPORTED_MODULE_0_soundcloud___default.a.put('/me/followings/' + userId).catch(handleError);
}

function unfollowUser(userId) {
  return __WEBPACK_IMPORTED_MODULE_0_soundcloud___default.a.delete('/me/followings/' + userId).catch(handleError);
}

function addLike(trackId) {
  return __WEBPACK_IMPORTED_MODULE_0_soundcloud___default.a.put('/me/favorites/' + trackId).catch(handleError);
}

function removeLike(trackId) {
  return __WEBPACK_IMPORTED_MODULE_0_soundcloud___default.a.delete('/me/favorites/' + trackId).catch(handleError);
}

function addComment(trackId, body, timestamp) {
  return __WEBPACK_IMPORTED_MODULE_0_soundcloud___default.a.post('/tracks/' + trackId + '/comments', {
    comment: { body: body, timestamp: timestamp }
  }).catch(handleError);
}

function removeComment(trackId, commentId) {
  return __WEBPACK_IMPORTED_MODULE_0_soundcloud___default.a.delete('/tracks/' + trackId + '/comments/' + commentId).catch(handleError);
}

function getMeLikesIds() {
  return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(BASE_URL + 'e1/me/track_likes/ids', {
    params: { limit: 5000, linked_partitioning: 1, oauth_token: TOKEN() }
  }).then(function (_ref5) {
    var data = _ref5.data;
    return data.collection;
  }).catch(handleError);
}

function getMeFollowingsIds() {
  return __WEBPACK_IMPORTED_MODULE_0_soundcloud___default.a.get('me/followings', { limit: 5000, linked_partitioning: 1 }).then(function (data) {
    return data.collection.map(function (el) {
      return el.id;
    });
  }).catch(handleError);
}

function loadUserVisuals(userId) {
  return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('//visuals.soundcloud.com/visuals', {
    params: { urn: 'soundcloud:users:' + userId, client_id: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* CLIENT_ID */] }
  }).then(function (_ref6) {
    var data = _ref6.data;
    return data;
  }).catch(handleError);
}

/***/ }),

/***/ "./app/components/App.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react_devtools__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react_devtools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react_devtools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_keymaster__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_keymaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_keymaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBar__ = __webpack_require__("./app/components/AppBar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Player__ = __webpack_require__("./app/components/Player.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ScrollToTopBtn__ = __webpack_require__("./app/components/ScrollToTopBtn.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stores_view_store__ = __webpack_require__("./app/stores/view-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stores_player_store__ = __webpack_require__("./app/stores/player-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stores_session_store__ = __webpack_require__("./app/stores/session-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__("./app/config.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin___default()();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('space', function (e) {
        e.preventDefault();__WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].playTrack();
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('right', function () {
        return __WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].stepForward();
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('left', function () {
        return __WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].stepBackward();
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('shift+right', function () {
        return __WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].playNext();
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('shift+left', function () {
        return __WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].playPrev();
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('shift+up', function () {
        __WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].increaseVolume();_this2.showVolumeControl();
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('shift+down', function () {
        __WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].decreaseVolume();_this2.showVolumeControl();
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('shift+l', function () {
        return __WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].toggleLoop();
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('m', function () {
        __WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].toggleMuted();_this2.showVolumeControl();
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('s', function () {
        return __WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].toggleShuffle();
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('l', function () {
        return __WEBPACK_IMPORTED_MODULE_11__stores_session_store__["a" /* default */].toggleLike(__WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */].track);
      });
      __WEBPACK_IMPORTED_MODULE_3_keymaster___default()('p', function () {
        return __WEBPACK_IMPORTED_MODULE_9__stores_view_store__["a" /* default */].togglePlaylist();
      });
    }
  }, {
    key: 'showVolumeControl',
    value: function showVolumeControl() {
      __WEBPACK_IMPORTED_MODULE_9__stores_view_store__["a" /* default */].volumeControlOpen = true;
      clearTimeout(this._timerId);
      this._timerId = setTimeout(function () {
        return __WEBPACK_IMPORTED_MODULE_9__stores_view_store__["a" /* default */].volumeControlOpen = false;
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_styles_MuiThemeProvider___default.a,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_mobx_react__["Provider"],
          { playerStore: __WEBPACK_IMPORTED_MODULE_10__stores_player_store__["a" /* default */], viewStore: __WEBPACK_IMPORTED_MODULE_9__stores_view_store__["a" /* default */], sessionStore: __WEBPACK_IMPORTED_MODULE_11__stores_session_store__["a" /* default */] },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__AppBar__["a" /* default */], { router: this.props.router }),
            this.props.children,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Player__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ScrollToTopBtn__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_12__config__["a" /* isDev */] ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_mobx_react_devtools___default.a, null) : null
          )
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(App);

/***/ }),

/***/ "./app/components/AppBar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Button__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Menu__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AppBar_less__ = __webpack_require__("./app/components/AppBar.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AppBar_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__AppBar_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SearchWidget__ = __webpack_require__("./app/components/SearchWidget.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config__ = __webpack_require__("./app/config.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAppBar; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var MyAppBar = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('sessionStore', 'viewStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = function (_React$Component) {
  _inherits(MyAppBar, _React$Component);

  function MyAppBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyAppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyAppBar.__proto__ || Object.getPrototypeOf(MyAppBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: undefined,
      open: false
    }, _this.handleRequestOpen = function (event) {
      return _this.setState({ open: true, anchorEl: event.currentTarget });
    }, _this.handleRequestClose = function () {
      return _this.setState({ open: false });
    }, _this.handleLoginClick = function (e) {
      _this.props.sessionStore.login().then(function () {
        return _this.props.router.push('/stream');
      });
    }, _this.handleLogoutClick = function (e) {
      _this.handleRequestClose();
      _this.props.sessionStore.logout();
    }, _this.handleProfileClick = function (e) {
      var _this$props = _this.props,
          router = _this$props.router,
          sessionStore = _this$props.sessionStore;

      _this.handleRequestClose();
      router.push('/' + sessionStore.user.permalink);
    }, _this.handleLikesClick = function (e) {
      var _this$props2 = _this.props,
          router = _this$props2.router,
          sessionStore = _this$props2.sessionStore;

      _this.handleRequestClose();
      router.push('/' + sessionStore.user.permalink + '/likes');
    }, _this.handleStreamClick = function (e) {
      _this.handleRequestClose();
      _this.props.router.push('/stream');
    }, _this.handleSearch = function (q) {
      _this.props.router.push({ pathname: '/search/tracks', query: { q: q } });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyAppBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          sessionStore = _props.sessionStore,
          viewStore = _props.viewStore;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default.a,
        { className: 'app-header' + (viewStore.appbarTransparent ? ' transparent' : '') },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Toolbar___default.a,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_material_ui_Text___default.a,
            { type: 'title', colorInherit: true, className: 'header-title' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
              { to: '/', className: 'link' },
              __WEBPACK_IMPORTED_MODULE_11__config__["e" /* APP_TITLE */]
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'title-separator' },
              '-'
            ),
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              viewStore.title
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__SearchWidget__["a" /* default */], { handleSearch: this.handleSearch }),
          sessionStore.isLoggedIn ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_material_ui_IconButton___default.a,
              { contrast: true, 'aria-owns': 'simple-menu', 'aria-haspopup': 'true',
                onClick: this.handleRequestOpen },
              'more_vert_icon'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_material_ui_Menu__["Menu"],
              {
                id: 'simple-menu',
                anchorEl: this.state.anchorEl,
                open: this.state.open,
                onRequestClose: this.handleRequestClose
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_material_ui_Menu__["MenuItem"],
                { onClick: this.handleProfileClick },
                'Profile'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_material_ui_Menu__["MenuItem"],
                { onClick: this.handleStreamClick },
                'Stream'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_material_ui_Menu__["MenuItem"],
                { onClick: this.handleLikesClick },
                'Likes'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_material_ui_Menu__["MenuItem"],
                { onClick: this.handleLogoutClick },
                'Logout'
              )
            )
          ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_material_ui_Button___default.a,
            { contrast: true, onTouchTap: this.handleLoginClick },
            'Login'
          )
        )
      );
    }
  }]);

  return MyAppBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class) || _class);


/***/ }),

/***/ "./app/components/AppBar.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/components/Comments.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_TextField__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Progress__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SingleComment__ = __webpack_require__("./app/components/SingleComment.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hoc_InfiniteScrollify__ = __webpack_require__("./app/hoc/InfiniteScrollify.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api__ = __webpack_require__("./app/api.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Comments = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('sessionStore', 'playerStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = function (_Component) {
  _inherits(Comments, _Component);

  function Comments() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Comments);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comments.__proto__ || Object.getPrototypeOf(Comments)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      commentBody: ''
    }, _this.removeComment = function (comment) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__api__["e" /* removeComment */])(comment.track_id, comment.id).then(function (res) {
        return _this.props.comments.remove(comment);
      });
    }, _this.handleFormSubmit = function (e) {
      e.preventDefault();
      var sessionStore = _this.props.sessionStore;


      if (!_this.state.commentBody) return;

      if (sessionStore.isLoggedIn) _this.addComment();else sessionStore.login().then(function () {
        return _this.addComment();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Comments, [{
    key: 'addComment',
    value: function addComment() {
      var _this2 = this;

      var playerStore = this.props.playerStore;

      var trackId = this.props.comments[0].track_id;
      var timestamp = playerStore.track && playerStore.track.id === trackId ? playerStore.progress * 1000 : null;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__api__["f" /* addComment */])(trackId, this.state.commentBody, timestamp).then(function (res) {
        return _this2.props.comments.unshift(res);
      });

      this.setState({ commentBody: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          comments = _props.comments,
          isLoading = _props.isLoading;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { action: '', onSubmit: this.handleFormSubmit },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_TextField___default.a, {
            label: 'Write a comment',
            value: this.state.commentBody,
            onChange: function onChange(e) {
              return _this3.setState({ commentBody: e.target.value });
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_material_ui_List__["List"],
          { subheader: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListSubheader"],
              null,
              'Comments'
            ) },
          comments.map(function (comment, i) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__SingleComment__["a" /* default */], { key: comment.id, comment: comment, removeComment: _this3.removeComment });
          })
        ),
        isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'loader-wrap' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Progress__["CircularProgress"], null)
        )
      );
    }
  }]);

  return Comments;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__hoc_InfiniteScrollify__["a" /* default */])(Comments);

/***/ }),

/***/ "./app/components/DataGrid.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Layout__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Progress__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_virtualized__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_virtualized_styles_css__ = __webpack_require__("./node_modules/react-virtualized/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_virtualized_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_virtualized_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__defaultOverscanIndicesGetter_js__ = __webpack_require__("./app/defaultOverscanIndicesGetter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DataGrid_less__ = __webpack_require__("./app/components/DataGrid.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DataGrid_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__DataGrid_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TrackCard__ = __webpack_require__("./app/components/TrackCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__PlaylistCard__ = __webpack_require__("./app/components/PlaylistCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__UserCard__ = __webpack_require__("./app/components/UserCard.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };















var COLUMN_COUNT = 5;
var CELL_HEIGHT = 300;
var CELL_WIDTH = 200;

var DataGrid = function DataGrid(_ref) {
  var data = _ref.data,
      isLoading = _ref.isLoading,
      isLastPage = _ref.isLastPage,
      loadMore = _ref.loadMore;

  if (!data.length && isLoading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'loader-wrap' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Progress__["CircularProgress"], null)
  );

  if (!data.length && isLastPage) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default.a,
    { type: 'display2', align: 'center' },
    'Nothing to show :('
  );

  var initialRowCount = Math.ceil(data.length / COLUMN_COUNT);
  var rowCount = isLastPage ? initialRowCount : initialRowCount + 1;
  var width = CELL_WIDTH * COLUMN_COUNT;
  var rowHeight = CELL_HEIGHT;

  function isRowLoaded(_ref2) {
    var index = _ref2.index;

    return initialRowCount > index;
  }

  function rowRenderer(_ref3) {
    var key = _ref3.key,
        index = _ref3.index,
        isScrolling = _ref3.isScrolling,
        isVisible = _ref3.isVisible,
        style = _ref3.style;

    var from = index * COLUMN_COUNT;
    var to = from + COLUMN_COUNT;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: key, style: _extends({}, style, { display: 'flex' }) },
      data.slice(from, to).map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: i, className: 'layout-item animated fadeIn' },
          item.kind === 'user' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__UserCard__["a" /* default */], { user: item }) : item.kind === 'playlist' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__PlaylistCard__["a" /* default */], { playlist: item }) : item.kind === 'track' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__TrackCard__["a" /* default */], { track: item, tracks: data }) : null
        );
      })
    );
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5_react_virtualized__["WindowScroller"],
    null,
    function (_ref4) {
      var height = _ref4.height,
          isScrolling = _ref4.isScrolling,
          scrollTop = _ref4.scrollTop;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_react_virtualized__["InfiniteLoader"],
        {
          isRowLoaded: isRowLoaded,
          loadMoreRows: function loadMoreRows() {
            return loadMore();
          },
          rowCount: rowCount
        },
        function (_ref5) {
          var onRowsRendered = _ref5.onRowsRendered,
              registerChild = _ref5.registerChild;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_virtualized__["List"], {
            ref: registerChild,
            onRowsRendered: onRowsRendered,
            autoHeight: true,
            height: height,
            rowCount: rowCount,
            rowHeight: rowHeight,
            rowRenderer: rowRenderer,
            scrollTop: scrollTop,
            width: width,
            overscanRowCount: 5,
            overscanIndicesGetter: __WEBPACK_IMPORTED_MODULE_7__defaultOverscanIndicesGetter_js__["a" /* default */]
          });
        }
      );
    }
  );
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(DataGrid);

/***/ }),

/***/ "./app/components/DataGrid.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/components/Player.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Icon__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Progress__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Player_less__ = __webpack_require__("./app/components/Player.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Player_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Player_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__PlayerQueue__ = __webpack_require__("./app/components/PlayerQueue.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__VolumeControl__ = __webpack_require__("./app/components/VolumeControl.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants__ = __webpack_require__("./app/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils__ = __webpack_require__("./app/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__api__ = __webpack_require__("./app/api.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










// import Slider from 'material-ui/Slider';








var Player = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('sessionStore', 'viewStore', 'playerStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = function (_React$Component) {
  _inherits(Player, _React$Component);

  function Player() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Player.__proto__ || Object.getPrototypeOf(Player)).call.apply(_ref, [this].concat(args))), _this), _this.onQueueClick = function (e) {
      e.stopPropagation();
      _this.props.viewStore.togglePlaylist(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Player, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var store = this.props.playerStore;

      this.audio = document.createElement('audio');
      this.audio.addEventListener('loadstart', function (e) {
        return store.setIsLoading(true);
      });
      this.audio.addEventListener('canplaythrough', function (e) {
        return store.setIsLoading(false);
      });
      this.audio.addEventListener('timeupdate', function (e) {
        return store.setProgress(Math.round(e.target.currentTime));
      });
      // this.audio.addEventListener('progress',
      // e => store.setBuffered(Math.round(e.target.buffered.end(e.target.buffered.length - 1))));
      this.audio.addEventListener('ended', function (e) {
        return store.playNext();
      });
      this.audio.addEventListener('error', this.handeMediaError.bind(this));

      this.dispose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["autorun"])(function () {
        if (!store.track) return;

        // update src if needed
        var src = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__api__["j" /* formatStreamUrl */])(store.track.stream_url);
        if (_this2.audio.currentSrc !== src) _this2.audio.src = src;

        // update progress if difference more then 1s
        if (Math.abs(Math.round(_this2.audio.currentTime) - store.progress) > 1) _this2.audio.currentTime = store.progress;

        // update pause/play
        var playPromise = store.isPlaying ? _this2.audio.play() : _this2.audio.pause();
        if (playPromise !== undefined && typeof playPromise.then === 'function') {
          playPromise.then(null, function (e) {});
        }

        _this2.audio.muted = store.muted;
        _this2.audio.loop = store.loop;
        _this2.audio.volume = store.volume;
      });
    }
  }, {
    key: 'handeMediaError',
    value: function handeMediaError(e) {
      this.props.playerStore.isLoading = false;

      switch (e.target.error.code) {
        case e.target.error.MEDIA_ERR_ABORTED:
          console.error('You aborted the video playback.');
          break;
        case e.target.error.MEDIA_ERR_NETWORK:
          console.error('A network error caused the audio download to fail.');
          break;
        case e.target.error.MEDIA_ERR_DECODE:
          console.error('The audio playback was aborted due to a corruption problem or because the video used features your browser did not support.');
          break;
        case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          console.error('The video audio not be loaded, either because the server or network failed or because the format is not supported.');
          break;
        default:
          console.error('An unknown error occurred.');
          break;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dispose();
      this.audio.pause();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          viewStore = _props.viewStore,
          sessionStore = _props.sessionStore,
          store = _props.playerStore,
          track = _props.playerStore.track;

      var color = 'blue';

      if (!track) return null;

      var progressPercent = Math.round(store.progress / (track.duration / 1000) * 100);
      var bufferedPercent = Math.round(store.buffered / (track.duration / 1000) * 100);
      var bgGradient = 'linear-gradient(to right, transparent 0%, ' + color + ' ' + progressPercent + '%, transparent ' + progressPercent + '%)';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'player' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Progress__["LinearProgress"], { mode: 'determinate', value: progressPercent, className: 'player__progress-bar' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'player__preloader' + (store.isLoading ? ' visible' : '') },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Progress__["CircularProgress"], null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'player__inner' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'player__group player__group--left' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'player__track-artwork', src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils__["a" /* getImageUrl */])(track.artwork_url), width: 64, height: 64 }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'player__track-details' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_material_ui_Text___default.a,
                { type: 'subheading', noWrap: true },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_react_router__["Link"],
                  { to: '/' + track.user.permalink + '/tracks/' + track.permalink,
                    title: track.title, className: 'link' },
                  track.title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8_material_ui_Text___default.a,
                { type: 'body1', noWrap: true, secondary: true },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_react_router__["Link"],
                  { to: '/' + track.user.permalink, className: 'link' },
                  track.user.username
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'player__group player__group--center' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
              { accent: sessionStore.isLiked(track),
                onTouchTap: function onTouchTap() {
                  return sessionStore.toggleLike(track);
                } },
              'favorite'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
              { accent: store.loop, onTouchTap: function onTouchTap() {
                  return store.toggleLoop();
                } },
              'repeat'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
              { disabled: !store.queue.prevTrack, onTouchTap: function onTouchTap() {
                  return store.playPrev();
                } },
              'skip_previous'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
              { fab: true, primary: true, onTouchTap: function onTouchTap() {
                  return store.playTrack();
                }, className: 'player__play-btn' },
              store.isPlaying ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_material_ui_Icon___default.a,
                null,
                'pause'
              ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_material_ui_Icon___default.a,
                null,
                'play_arrow'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
              { disabled: !store.queue.nextTrack, onTouchTap: function onTouchTap() {
                  return store.playNext();
                } },
              'skip_next'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
              { accent: store.shuffle, onTouchTap: function onTouchTap() {
                  return store.toggleShuffle();
                } },
              'shuffle'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'player__group player__group--right' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__VolumeControl__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
              { accent: viewStore.playlistOpen, onClick: this.onQueueClick },
              'queue_music'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__PlayerQueue__["a" /* default */], null)
          )
        )
      );
    }
  }]);

  return Player;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class) || _class);


/***/ }),

/***/ "./app/components/Player.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/components/PlayerQueue.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Icon__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Switch__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PlayerQueue_less__ = __webpack_require__("./app/components/PlayerQueue.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__PlayerQueue_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__PlayerQueue_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TrackCard__ = __webpack_require__("./app/components/TrackCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__("./app/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var PER_PAGE = 30;

var PlayerQueue = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('viewStore', 'playerStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = function (_React$Component) {
  _inherits(PlayerQueue, _React$Component);

  function PlayerQueue() {
    _classCallCheck(this, PlayerQueue);

    return _possibleConstructorReturn(this, (PlayerQueue.__proto__ || Object.getPrototypeOf(PlayerQueue)).apply(this, arguments));
  }

  _createClass(PlayerQueue, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var style = document.body.style;


      if (!prevProps.viewStore.playlistOpen) {
        style.overflow = null;
        style.paddingRight = null;
        return;
      }

      style.overflow = 'hidden';
      style.paddingRight = '17px';
      var el = document.querySelector('.player-queue [data-id=\'' + this.props.playerStore.track.id + '\']');
      el && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils__["h" /* isElementInViewport */])(el) && el.scrollIntoView();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          playerStore = _props.playerStore,
          viewStore = _props.viewStore;


      if (!viewStore.playlistOpen) return null;

      var _playerStore$queue = playerStore.queue,
          items = _playerStore$queue.items,
          trackIndex = _playerStore$queue.trackIndex;

      var from = Math.max(0, trackIndex - PER_PAGE / 2);
      var to = Math.min(from + PER_PAGE, items.length);
      var loading = playerStore.queue.isLoading ? 'loading...' : '';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'player-queue', onClick: function onClick(e) {
            return e.stopPropagation();
          } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["Card"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["CardHeader"], { title: 'Queue (' + (trackIndex + 1) + '/' + items.length + ') ' + loading }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_Divider___default.a, null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'player-queue__inner' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["List"],
              null,
              items.slice(from, to).map(function (track, i) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
                  { key: track.permalink + i, button: true, divider: true, dense: true, 'data-id': track.id,
                    onTouchTap: function onTouchTap() {
                      return playerStore.playTrack(track);
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Avatar___default.a, { src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils__["a" /* getImageUrl */])(track.artwork_url), className: 'list-avatar' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { primary: track.title, secondary: track.user.username,
                    title: track.title, className: 'list-item-text-nowrap' }),
                  playerStore.isSelected(track) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemIcon"],
                    { className: 'list-icon' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_material_ui_Icon___default.a,
                      null,
                      'volume_up'
                    )
                  ) : null
                );
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["CardActions"],
            { style: { justifyContent: 'center' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Switch__["LabelSwitch"], {
              checked: playerStore.skipPreviews,
              onChange: function onChange(event, checked) {
                return playerStore.toggleSkipPreviews();
              },
              label: 'Skip Previews'
            })
          )
        )
      );
    }
  }]);

  return PlayerQueue;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = PlayerQueue;

/***/ }),

/***/ "./app/components/PlayerQueue.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/components/PlaylistCard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Icon__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PlaylistCard_less__ = __webpack_require__("./app/components/PlaylistCard.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PlaylistCard_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__PlaylistCard_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__("./app/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__("./app/constants.js");










var PlaylistCard = function PlaylistCard(_ref) {
  var playlist = _ref.playlist;

  var link = '/' + playlist.user.permalink + '/playlists/' + playlist.permalink;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["Card"],
    { className: 'playlist-card' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardMedia"],
      { className: 'playlist-card__media' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
        { to: link },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* getImageUrl */])(playlist.artwork_url, __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* IMAGE_SIZES */].t200x200), alt: playlist.title, width: '200', height: '200' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'playlist-card__overlay' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_material_ui_Text___default.a,
            { type: 'subheading', colorInherit: true, style: { marginRight: 4 } },
            playlist.track_count
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_Icon___default.a,
            null,
            'playlist_play'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardContent"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_material_ui_Text___default.a,
        { type: 'subheading', noWrap: true, title: playlist.title },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
          { to: link, className: 'link' },
          playlist.title
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = PlaylistCard;

/***/ }),

/***/ "./app/components/PlaylistCard.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/components/ScrollToTopBtn.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Button__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Icon__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Icon__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ScrollToTopBtn = function (_Component) {
  _inherits(ScrollToTopBtn, _Component);

  function ScrollToTopBtn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScrollToTopBtn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollToTopBtn.__proto__ || Object.getPrototypeOf(ScrollToTopBtn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      scrollToTopVisible: false
    }, _this.handleScroll = function () {
      if (window.pageYOffset > 1000) _this.setState({ scrollToTopVisible: true });else _this.setState({ scrollToTopVisible: false });
    }, _this.handleScrollToTopClick = function () {
      window.scrollTo(0, 0);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ScrollToTopBtn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.scrollToTopVisible) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_material_ui_Button___default.a,
        { fab: true, accent: true, onTouchTap: this.handleScrollToTopClick, className: 'scroll-to-top-btn' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_material_ui_Icon___default.a,
          null,
          'keyboard_arrow_up'
        )
      );

      return null;
    }
  }]);

  return ScrollToTopBtn;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = ScrollToTopBtn;

/***/ }),

/***/ "./app/components/SearchWidget.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Input_Input__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Input_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Input_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SearchWidget_less__ = __webpack_require__("./app/components/SearchWidget.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SearchWidget_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SearchWidget_less__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SearchWidget = function (_Component) {
  _inherits(SearchWidget, _Component);

  function SearchWidget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchWidget.__proto__ || Object.getPrototypeOf(SearchWidget)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.handleSearchClick = function (e) {
      if (_this.state.focused) {
        return _this.handleSubmit(e);
      }

      _this.setState({ focused: true });
      _this.textInput.input.focus();
    }, _this.handleCloseClick = function (e) {
      return _this.setState({ focused: false });
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      var q = _this.textInput.input.value;
      if (q !== '') {
        _this.props.handleSearch(q);
        _this.clearSearch();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchWidget, [{
    key: 'clearSearch',
    value: function clearSearch() {
      this.setState({ focused: false });
      this.textInput.input.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { className: 'search-widget' + (this.state.focused ? ' focused' : ''), onSubmit: this.handleSubmit },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton___default.a,
          { className: 'search-btn', ripple: false, onTouchTap: this.handleSearchClick },
          'search'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_material_ui_IconButton___default.a,
          { className: 'search-close-btn', ripple: false, onTouchTap: this.handleCloseClick },
          'close'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Input_Input___default.a, { className: 'search-input', placeholder: 'Search', ref: function ref(input) {
            return _this2.textInput = input;
          } })
      );
    }
  }]);

  return SearchWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = SearchWidget;

/***/ }),

/***/ "./app/components/SearchWidget.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/components/SingleComment.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Avatar__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__("./app/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__("./app/constants.js");










var Comment = function Comment(_ref) {
  var comment = _ref.comment,
      removeComment = _ref.removeComment,
      sessionStore = _ref.sessionStore;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_List__["ListItem"],
    { divider: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Avatar___default.a, {
      src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* getImageUrl */])(comment.user.avatar_url, __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* IMAGE_SIZES */].badge),
      alt: comment.user.username,
      className: 'list-avatar' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_List__["ListItemText"], {
      primary: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
          { to: '/' + comment.user.permalink, className: 'link link--blue' },
          comment.user.username
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'bullet' },
          '\u2022'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'small',
          null,
          ' at ',
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* formatDuration */])(comment.timestamp)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'bullet' },
          '\u2022'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'small',
          null,
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* fromNow */])(comment.created_at)
        )
      ),
      secondary: comment.body,
      className: 'list-item-text'
    }),
    sessionStore.isLoggedIn && sessionStore.user.id === comment.user.id && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_material_ui_List__["ListItemSecondaryAction"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
        { onClick: function onClick() {
            return removeComment(comment);
          } },
        'close'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('sessionStore')(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(Comment));

/***/ }),

/***/ "./app/components/TrackCard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__("./app/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__("./app/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TrackCard_less__ = __webpack_require__("./app/components/TrackCard.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TrackCard_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__TrackCard_less__);












var TrackCard = function TrackCard(_ref) {
  var track = _ref.track,
      compact = _ref.compact,
      playerStore = _ref.playerStore,
      tracks = _ref.tracks;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["Card"],
    { className: 'track-card' + (!compact && playerStore.isSelected(track) ? ' active' : '') },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["CardMedia"],
      { className: 'track-card__media' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* getImageUrl */])(track.artwork_url, __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* IMAGE_SIZES */].t200x200), alt: track.title }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'track-card__overlay' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_IconButton___default.a,
          { iconClassName: 'track-card__play',
            onTouchTap: function onTouchTap() {
              return playerStore.playTrack(track, tracks.slice());
            } },
          playerStore.isSelected(track) === 'isPlaying' ? 'pause' : 'play_arrow'
        )
      ),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* isPreview */])(track) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'track-card__overlay2' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default.a,
          { colorInherit: true },
          'Preview'
        )
      ) : null
    ),
    compact ? null : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["CardContent"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default.a,
        { type: 'subheading', noWrap: true, title: track.title },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
          { to: '/' + track.user.permalink + '/tracks/' + track.permalink, className: 'link' },
          track.title
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default.a,
        { type: 'body1', secondary: true, noWrap: true, gutterBottom: true },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
          { to: '/' + track.user.permalink, className: 'link' },
          track.user.username
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default.a,
        { type: 'caption' },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["e" /* formatNumber */])(track.likes_count || track.favoritings_count) + ' likes',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'bullet' },
          '\u2022'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* fromNow */])(track.created_at)
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('playerStore')(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(TrackCard));

/***/ }),

/***/ "./app/components/TrackCard.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/components/UserCard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Avatar__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UserCard_less__ = __webpack_require__("./app/components/UserCard.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UserCard_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__UserCard_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__("./app/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__("./app/constants.js");










var UserCard = function UserCard(_ref) {
  var user = _ref.user;

  var link = '/' + user.permalink;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'user-card' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
      { to: link, className: 'link' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Avatar___default.a, {
        alt: user.username,
        src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* getImageUrl */])(user.avatar_url, __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* IMAGE_SIZES */].t200x200),
        className: 'user-card__avatar'
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'user-card__content' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default.a,
        { type: 'subheading', align: 'center' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
          { to: link, className: 'link' },
          user.username
        )
      ),
      user.followers_count && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default.a,
        { type: 'caption', align: 'center' },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["e" /* formatNumber */])(user.followers_count),
        ' followers'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(UserCard);

/***/ }),

/***/ "./app/components/UserCard.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/components/VolumeControl.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VolumeControl_less__ = __webpack_require__("./app/components/VolumeControl.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VolumeControl_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__VolumeControl_less__);







var VolumeContol = function VolumeContol(_ref) {
  var store = _ref.playerStore,
      viewStore = _ref.viewStore;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'volume-slider-wrap',
      onMouseOver: function onMouseOver() {
        return viewStore.volumeControlOpen = true;
      },
      onMouseOut: function onMouseOut() {
        return viewStore.volumeControlOpen = false;
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["Card"],
      { className: 'volume-slider ' + (viewStore.volumeControlOpen ? 'visible' : '') },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["CardContent"],
        null,
        store.volume
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_material_ui_IconButton___default.a,
      { onTouchTap: function onTouchTap() {
          return store.toggleMuted();
        } },
      store.muted ? 'volume_off' : store.volume === 1 ? 'volume_up' : store.volume === 0 ? 'volume_mute' : 'volume_down'
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('playerStore', 'viewStore')(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(VolumeContol));

/***/ }),

/***/ "./app/components/VolumeControl.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REDIRECT_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COOKIE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return APP_TITLE; });
var isDev = "production" !== 'production';

var REDIRECT_URI = isDev ? window.location.protocol + '//' + window.location.host + '/callback' : 'http://serjp.github.io/callback';

var CLIENT_ID = isDev ? 'IrPMGeU7yK6uFyuptLxVtWE2tiuphX8t' : 'BqVqkdpqbop0oQLZJ4OyaW7U0UpyytJS';

var COOKIE_PATH = 'accessToken';

var APP_TITLE = 'SoundConnect';

/***/ }),

/***/ "./app/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMAGE_SIZES; });
var IMAGE_SIZES = {
  t500x500: 't500x500', // 500×500,
  crop: 'crop', // 400×400,
  t300x300: 't300x300', // 300×300,
  t200x200: 't200x200', // 200x200,
  large: 'large', // 100×100, (default)
  t67x67: 't67xt67', // 67×67, (only on artworks)
  badge: 'badge', // 47×47,
  small: 'small', // 32×32,
  tiny: 'tiny', // 20×20, (on artworks) | 18×18, (on avatars)
  mini: 'mini' // 16×16,
};

/***/ }),

/***/ "./app/defaultOverscanIndicesGetter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SCROLL_DIRECTION_BACKWARD */
/* unused harmony export SCROLL_DIRECTION_FORWARD */
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultOverscanIndicesGetter;
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;

/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 *
 * @param cellCount Number of rows or columns in the current axis
 * @param scrollDirection One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
 * @param overscanCellsCount Maximum number of cells to over-render in either direction
 * @param startIndex Begin of range of visible cells
 * @param stopIndex End of range of visible cells
 */
function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  var overscanStartIndex = void 0;
  var overscanStopIndex = void 0;

  // switch (scrollDirection) {
  //   case SCROLL_DIRECTION_FORWARD:
  //     overscanStartIndex = startIndex
  //     overscanStopIndex = stopIndex + overscanCellsCount
  //     break
  //   case SCROLL_DIRECTION_BACKWARD:
  //     overscanStartIndex = startIndex - overscanCellsCount
  //     overscanStopIndex = stopIndex
  //     break
  // }

  overscanStartIndex = startIndex - overscanCellsCount;
  overscanStopIndex = stopIndex + overscanCellsCount;

  return {
    overscanStartIndex: Math.max(0, overscanStartIndex),
    overscanStopIndex: Math.min(cellCount - 1, overscanStopIndex)
  };
}

/***/ }),

/***/ "./app/hoc/DataLoader.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__("./app/api.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}







/* harmony default export */ __webpack_exports__["a"] = function (InnerComponent) {
  var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var DataLoader = (_dec = __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"].shallow, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = (_class2 = function (_Component) {
    _inherits(DataLoader, _Component);

    function DataLoader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, DataLoader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataLoader.__proto__ || Object.getPrototypeOf(DataLoader)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'data', _descriptor, _this), _initDefineProp(_this, 'isLoading', _descriptor2, _this), _initDefineProp(_this, 'nextHref', _descriptor3, _this), _this.loadData = function (href, opts) {
        _this.isLoading = true;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api__["c" /* loadData */])(href, opts).then(function (data) {
          return _this.callback(data, true);
        });
      }, _this.loadMore = function () {
        if (_this.isLoading || _this.isLastPage) return;

        var nextHref = _this.nextHref;
        _this.isLoading = true;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__api__["d" /* loadMore */])(nextHref).then(function (data) {
          if (nextHref === _this.nextHref) _this.callback(data);
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DataLoader, [{
      key: 'callback',
      value: function callback(data, replace) {
        var _this2 = this;

        if (!data.collection.length) {
          this.nextHref = null;
          this.isLoading = false;
          return;
        }

        if (replace) this.data = data.collection;else data.collection.forEach(function (i) {
          return _this2.data.push(i);
        });
        this.nextHref = data.next_href;
        this.isLoading = false;
      }
    }, {
      key: 'clearData',
      value: function clearData() {
        this.data = [];
        this.nextHref = null;
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InnerComponent, _extends({}, this.props, {
          data: this.data,
          isLoading: this.isLoading,
          isLastPage: this.isLastPage,

          loadData: this.loadData,
          loadMore: this.loadMore,
          clearData: this.clearData.bind(this) }));
      }
    }, {
      key: 'isLastPage',
      get: function get() {
        return !this.nextHref;
      }
    }]);

    return DataLoader;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'data', [_dec], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'isLoading', [__WEBPACK_IMPORTED_MODULE_1_mobx__["observable"]], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'nextHref', [__WEBPACK_IMPORTED_MODULE_1_mobx__["observable"]], {
    enumerable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class2.prototype, 'isLastPage', [__WEBPACK_IMPORTED_MODULE_1_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'isLastPage'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'callback', [__WEBPACK_IMPORTED_MODULE_1_mobx__["action"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'callback'), _class2.prototype)), _class2)) || _class);


  return DataLoader;
};

/***/ }),

/***/ "./app/hoc/InfiniteScrollify.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/* harmony default export */ __webpack_exports__["a"] = function (InnerComponent) {
  var InfiniteScrollComponent = function (_Component) {
    _inherits(InfiniteScrollComponent, _Component);

    function InfiniteScrollComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, InfiniteScrollComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfiniteScrollComponent.__proto__ || Object.getPrototypeOf(InfiniteScrollComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onScroll = function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
          _this.props.loadMore();
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InfiniteScrollComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InnerComponent, this.props);
      }
    }]);

    return InfiniteScrollComponent;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  return InfiniteScrollComponent;
};

/***/ }),

/***/ "./app/hoc/RequireAuth.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/* harmony default export */ __webpack_exports__["a"] = function (InnerComponent) {
  var _dec, _class;

  var RequireAuth = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('sessionStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (!this.props.sessionStore.isLoggedIn) this.props.router.replace('/');
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        if (!nextProps.sessionStore.isLoggedIn) this.props.router.replace('/');
      }
    }, {
      key: 'render',
      value: function render() {
        this.props.sessionStore.isLoggedIn;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InnerComponent, this.props);
      }
    }]);

    return RequireAuth;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);


  return RequireAuth;
};

/***/ }),

/***/ "./app/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hot_loader__ = __webpack_require__("./node_modules/react-hot-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__("./app/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Root__ = __webpack_require__("./app/Root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_index_less__ = __webpack_require__("./app/styles/index.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__styles_index_less__);








var renderApp = function renderApp() {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_hot_loader__["AppContainer"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Root__["a" /* default */], null)
  ), document.getElementById('root'));
};

renderApp();

// Hot Module Replacement API
if (false) {
  module.hot.accept('./Root', function () {
    renderApp();
  });
}

/***/ }),

/***/ "./app/pages/Callback.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Callback; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Callback = function (_React$Component) {
  _inherits(Callback, _React$Component);

  function Callback() {
    _classCallCheck(this, Callback);

    return _possibleConstructorReturn(this, (Callback.__proto__ || Object.getPrototypeOf(Callback)).apply(this, arguments));
  }

  _createClass(Callback, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.setTimeout(opener.SC.connectCallback, 1);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'This page should close soon.'
        )
      );
    }
  }]);

  return Callback;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./app/pages/Explore.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tabs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tabs_Tab__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Tabs_Tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Tabs_Tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_DataGrid__ = __webpack_require__("./app/components/DataGrid.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hoc_DataLoader__ = __webpack_require__("./app/hoc/DataLoader.jsx");
/* unused harmony export GENRES_MAP */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var GENRES_MAP = {
  ambient: 'Ambient',
  deephouse: 'Deep House',
  electronic: 'Electronic',
  house: 'House',
  techno: 'Techno',
  trap: 'Trap'
};

var GENRES_LIST = [];
for (var key in GENRES_MAP) {
  GENRES_LIST.push(key);
};

var Explore = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('viewStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = function (_Component) {
  _inherits(Explore, _Component);

  function Explore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Explore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Explore.__proto__ || Object.getPrototypeOf(Explore)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, i) {
      _this.props.router.push('/explore/' + GENRES_LIST[i]);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Explore, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.viewStore.title = 'Explore';
      this.load(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.params.genre !== this.props.params.genre) this.load(nextProps);
    }
  }, {
    key: 'load',
    value: function load(_ref2) {
      var params = _ref2.params,
          router = _ref2.router;

      if (!params.genre) router.replace('/explore/' + GENRES_LIST[0]);else {
        this.props.clearData();
        this.props.loadData('/tracks', { tags: params.genre });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          params = _props.params,
          data = _props.data,
          isLoading = _props.isLoading,
          isLastPage = _props.isLastPage,
          loadMore = _props.loadMore;

      var index = GENRES_LIST.indexOf(params.genre);
      index = index === -1 ? 0 : index;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'app-toolbar' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_Tabs___default.a,
            { textColor: 'accent', index: index, onChange: this.handleChange },
            GENRES_LIST.map(function (el, i) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Tabs_Tab___default.a, { key: i, label: GENRES_MAP[el] });
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', style: { paddingTop: 48 + 48 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_DataGrid__["a" /* default */], { data: data, isLoading: isLoading, isLastPage: isLastPage, loadMore: loadMore })
        )
      );
    }
  }]);

  return Explore;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__hoc_DataLoader__["a" /* default */])(Explore);

/***/ }),

/***/ "./app/pages/Playlist.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Progress__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Playlist_less__ = __webpack_require__("./app/pages/Playlist.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Playlist_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Playlist_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_UserCard__ = __webpack_require__("./app/components/UserCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_DataGrid__ = __webpack_require__("./app/components/DataGrid.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api__ = __webpack_require__("./app/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__("./app/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants__ = __webpack_require__("./app/constants.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Playlist; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}














var Playlist = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('sessionStore', 'viewStore', 'playerStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = (_class2 = function (_Component) {
  _inherits(Playlist, _Component);

  function Playlist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Playlist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Playlist.__proto__ || Object.getPrototypeOf(Playlist)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'playlist', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Playlist, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.loadData(nextProps);
    }
  }, {
    key: 'loadData',
    value: function loadData(_ref2) {
      var _this2 = this;

      var _ref2$params = _ref2.params,
          user = _ref2$params.user,
          playlist = _ref2$params.playlist,
          viewStore = _ref2.viewStore;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__api__["a" /* loadPlaylist */])(user, playlist).then(function (playlist) {
        _this2.playlist = playlist;
        viewStore.title = playlist.title;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var playlist = this.playlist;


      if (!playlist) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'loader-wrap' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Progress__["CircularProgress"], null)
        );
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'playlist-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container playlist-header__row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils__["a" /* getImageUrl */])(playlist.artwork_url, __WEBPACK_IMPORTED_MODULE_10__constants__["a" /* IMAGE_SIZES */].t200x200),
              alt: 'playlsit.title', width: '184', height: '184' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'playlist-header__details' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default.a,
                { type: 'display1' },
                playlist.title
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default.a,
                { type: 'subheading', gutterBottom: true },
                playlist.track_count,
                ' tracks ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'bullet' },
                  '\u2022'
                ),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils__["b" /* formatDuration */])(playlist.duration),
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'bullet' },
                  '\u2022'
                ),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils__["c" /* fromNow */])(playlist.created_at),
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'bullet' },
                  '\u2022'
                ),
                playlist.genre
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'playlist-user' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_UserCard__["a" /* default */], { user: playlist.user })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_DataGrid__["a" /* default */], { data: playlist.tracks, isLastPage: true })
        )
      );
    }
  }]);

  return Playlist;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'playlist', [__WEBPACK_IMPORTED_MODULE_1_mobx__["observable"]], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);


/***/ }),

/***/ "./app/pages/Playlist.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/pages/Search.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_DataGrid__ = __webpack_require__("./app/components/DataGrid.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hoc_DataLoader__ = __webpack_require__("./app/hoc/DataLoader.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Search = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('viewStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          viewStore = _props.viewStore,
          location = _props.location,
          params = _props.params;

      viewStore.title = 'Search';
      this.loadData(location.query.q, params.cat);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref, nextState) {
      var cat = _ref.params.cat,
          q = _ref.location.query.q;

      if (this.props.params.cat !== cat || this.props.location.query.q !== q) this.loadData(q, cat);
    }
  }, {
    key: 'loadData',
    value: function loadData(q, cat) {
      if (q.charAt(0) === '#') return this.props.loadData('/tracks', { tags: q.slice(1) });
      if (cat === 'tracks') return this.props.loadData('/tracks', { q: q });
      if (cat === 'people') return this.props.loadData('/users', { q: q });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          cat = _props2.params.cat,
          q = _props2.location.query.q,
          data = _props2.data,
          isLoading = _props2.isLoading,
          isLastPage = _props2.isLastPage,
          loadMore = _props2.loadMore;

      var hash = q.charAt(0) === '#';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_Text___default.a,
          { type: 'display2', style: { padding: '70px 0' } },
          'Results for ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { style: { color: '#3f51b5' } },
            q
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_DataGrid__["a" /* default */], { data: data, isLoading: isLoading, isLastPage: isLastPage, loadMore: loadMore })
      );
    }
  }]);

  return Search;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__hoc_DataLoader__["a" /* default */])(Search);

/***/ }),

/***/ "./app/pages/Stream.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DataGrid__ = __webpack_require__("./app/components/DataGrid.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hoc_DataLoader__ = __webpack_require__("./app/hoc/DataLoader.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hoc_RequireAuth__ = __webpack_require__("./app/hoc/RequireAuth.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Stream = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('viewStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = function (_React$Component) {
  _inherits(Stream, _React$Component);

  function Stream() {
    _classCallCheck(this, Stream);

    return _possibleConstructorReturn(this, (Stream.__proto__ || Object.getPrototypeOf(Stream)).apply(this, arguments));
  }

  _createClass(Stream, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.viewStore.title = 'Your Stream';
      this.props.loadData('me/activities/tracks/affiliated');
    }
  }, {
    key: 'filterData',
    value: function filterData(data) {
      return data.filter(function (el) {
        return el.hasOwnProperty('origin') && el.origin;
      }).filter(function (el) {
        return el.type === 'track' || el.type === 'track-repost';
      }).map(function (el) {
        return el.origin;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          isLoading = _props.isLoading,
          isLastPage = _props.isLastPage,
          loadMore = _props.loadMore;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container', style: { paddingTop: 48 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_DataGrid__["a" /* default */], { data: this.filterData(data), isLoading: isLoading, isLastPage: isLastPage, loadMore: loadMore })
      );
    }
  }]);

  return Stream;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__hoc_RequireAuth__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__hoc_DataLoader__["a" /* default */])(Stream));

/***/ }),

/***/ "./app/pages/Track.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Chip__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Progress__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Track_less__ = __webpack_require__("./app/pages/Track.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Track_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Track_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Comments__ = __webpack_require__("./app/components/Comments.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_TrackCard__ = __webpack_require__("./app/components/TrackCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_UserCard__ = __webpack_require__("./app/components/UserCard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hoc_DataLoader__ = __webpack_require__("./app/hoc/DataLoader.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils__ = __webpack_require__("./app/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__api__ = __webpack_require__("./app/api.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



















// const URL = 'https://wis.sndcdn.com/';
// const NEW_URL = 'https://w1.sndcdn.com/';

// this.waveform_url = this.waveform_url
//       .replace(URL, NEW_URL)
//       .replace('.json', '.png');

var Track = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["inject"])('sessionStore', 'viewStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_mobx_react__["observer"])(_class = (_class2 = function (_React$Component) {
  _inherits(Track, _React$Component);

  function Track() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Track);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Track.__proto__ || Object.getPrototypeOf(Track)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'track', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Track, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadTrack(this.props);
    }
  }, {
    key: 'componentWillReceieveProps',
    value: function componentWillReceieveProps(nextProps, nextState) {
      this.loadTrack(nextProps);
    }
  }, {
    key: 'loadTrack',
    value: function loadTrack(_ref2) {
      var _this2 = this;

      var _ref2$params = _ref2.params,
          user = _ref2$params.user,
          track = _ref2$params.track,
          viewStore = _ref2.viewStore;

      __WEBPACK_IMPORTED_MODULE_15__api__["b" /* loadTrack */].call(this, user, track).then(function (track) {
        _this2.track = track;
        viewStore.title = track.title;
        _this2.props.loadData('tracks/' + _this2.track.id + '/comments');
      });
    }
  }, {
    key: 'handleTagClick',
    value: function handleTagClick(q) {
      this.props.router.push({ pathname: '/search/tracks', query: { q: q } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          sessionStore = _props.sessionStore,
          data = _props.data,
          isLoading = _props.isLoading,
          loadMore = _props.loadMore,
          isLastPage = _props.isLastPage;
      var track = this.track;


      if (!track) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'loader-wrap' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Progress__["CircularProgress"], null)
      );

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'track-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'track-header__row container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'track-header__artwork' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_TrackCard__["a" /* default */], { track: track, tracks: [track], compact: true })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'track-header__details' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_material_ui_Text___default.a,
                { type: 'display1' },
                track.title
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_material_ui_Text___default.a,
                { type: 'subheading', gutterBottom: true },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils__["b" /* formatDuration */])(track.duration),
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'bullet' },
                  '\u2022'
                ),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils__["c" /* fromNow */])(track.created_at),
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'bullet' },
                  '\u2022'
                ),
                track.genre
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_material_ui_Text___default.a,
                { type: 'subheading' },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils__["e" /* formatNumber */])(track.playback_count),
                ' plays ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'bullet' },
                  '\u2022'
                ),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils__["e" /* formatNumber */])(track.favoritings_count || track.likes_count),
                ' likes ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'bullet' },
                  '\u2022'
                ),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils__["e" /* formatNumber */])(track.reposts_count),
                ' reposts ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'bullet' },
                  '\u2022'
                ),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils__["e" /* formatNumber */])(track.comment_count),
                ' comments'
              )
            ),
            sessionStore.isLiked(track) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a,
              { raised: true, primary: true, onTouchTap: function onTouchTap() {
                  return sessionStore.toggleLike(track);
                } },
              'Liked'
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_material_ui_Button___default.a,
              { raised: true, accent: true, onTouchTap: function onTouchTap() {
                  return sessionStore.toggleLike(track);
                } },
              'Like'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', style: { display: 'flex' } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'track-user' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_UserCard__["a" /* default */], { user: track.user })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { flex: 1 } },
            track.description && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_material_ui_Text___default.a,
              { className: 'track-description' },
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'pre',
                null,
                ' ',
                track.description,
                ' '
              ),
              ' '
            ),
            track.tag_list && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'track-tags' },
              __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__utils__["f" /* getTags */])(track.tag_list).map(function (el, i) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Chip___default.a, { key: i, label: el, style: { margin: 4 }, onClick: function onClick(e) {
                    return _this3.handleTagClick(el);
                  } });
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Comments__["a" /* default */], { comments: data, loadMore: loadMore, isLoading: isLoading, isLastPage: isLastPage })
          )
        )
      );
    }
  }]);

  return Track;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'track', [__WEBPACK_IMPORTED_MODULE_2_mobx__["observable"]], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__hoc_DataLoader__["a" /* default */])(Track);

/***/ }),

/***/ "./app/pages/Track.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/pages/User/User.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/pages/User/UserAbout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Text__);



var UserAbout = function UserAbout(_ref) {
  var user = _ref.user,
      userWebProfiles = _ref.userWebProfiles;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_Text___default.a,
      { type: 'headline', gutterBottom: true },
      'Statistics'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_Text___default.a,
      { style: { marginBottom: 24 } },
      user.followings_count,
      ' followings ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'bullet' },
        '\u2022'
      ),
      user.playlist_count,
      ' playlists ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'bullet' },
        '\u2022'
      ),
      user.public_favorites_count,
      ' likes ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'bullet' },
        '\u2022'
      ),
      user.reposts_count,
      ' reposts ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'bullet' },
        '\u2022'
      ),
      user.track_count,
      ' tracks'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_Text___default.a,
      { type: 'headline', gutterBottom: true },
      'Description'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_Text___default.a,
      { style: { marginBottom: 24 } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'pre',
        null,
        user.description
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_material_ui_Text___default.a,
      { type: 'headline', gutterBottom: true },
      'Links'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: 'user-links' },
      userWebProfiles.map(function (el, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: i },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: el.url, target: '_blank', className: 'link link--blue' },
            el.title
          )
        );
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = UserAbout;

/***/ }),

/***/ "./app/pages/User/UserCategory.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DataGrid__ = __webpack_require__("./app/components/DataGrid.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hoc_DataLoader__ = __webpack_require__("./app/hoc/DataLoader.jsx");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var UserCategory = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["inject"])('sessionStore'), _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(_class = function (_Component) {
  _inherits(UserCategory, _Component);

  function UserCategory() {
    _classCallCheck(this, UserCategory);

    return _possibleConstructorReturn(this, (UserCategory.__proto__ || Object.getPrototypeOf(UserCategory)).apply(this, arguments));
  }

  _createClass(UserCategory, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.load(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.params.cat !== this.props.params.cat) this.load(nextProps);
    }
  }, {
    key: 'load',
    value: function load(_ref) {
      var cat = _ref.params.cat;

      var baseUrl = '/users/' + this.props.user.id;
      this.props.clearData();

      switch (cat) {
        case 'tracks':
          this.props.loadData(baseUrl + '/tracks');
          break;
        case 'playlists':
          this.props.loadData(baseUrl + '/playlists', { representation: 'compact' });
          break;
        case 'likes':
          this.props.loadData(baseUrl + '/favorites');
          break;
        case 'followings':
          this.props.loadData(baseUrl + '/followings');
        default:
          break;
      }
    }
  }, {
    key: 'filterData',
    value: function filterData(data) {
      var _props = this.props,
          params = _props.params,
          sessionStore = _props.sessionStore,
          user = _props.user;

      if (params.cat === 'likes' && sessionStore.isLoggedIn && user.id === sessionStore.user.id && sessionStore.userLikesIds.length) return data.filter(function (el) {
        return sessionStore.userLikesIds.includes(el.id);
      });else return data;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          data = _props2.data,
          isLoading = _props2.isLoading,
          isLastPage = _props2.isLastPage,
          loadMore = _props2.loadMore;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_DataGrid__["a" /* default */], { data: this.filterData(data), isLoading: isLoading, isLastPage: isLastPage, loadMore: loadMore });
    }
  }]);

  return UserCategory;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__hoc_DataLoader__["a" /* default */])(UserCategory);

/***/ }),

/***/ "./app/pages/User/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Button__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Progress__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Tabs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Tabs_Tab__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Tabs_Tab___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Tabs_Tab__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Avatar__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__User_less__ = __webpack_require__("./app/pages/User/User.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__User_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__User_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__("./app/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants__ = __webpack_require__("./app/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api__ = __webpack_require__("./app/api.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

















var CAT_LIST = ['tracks', 'playlists', 'likes', 'followings', 'about'];

var User = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('sessionStore', 'viewStore'), _dec2 = __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"].shallow, _dec(_class = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(_class = (_class2 = function (_React$Component) {
  _inherits(User, _React$Component);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'user', _descriptor, _this), _initDefineProp(_this, 'userWebProfiles', _descriptor2, _this), _initDefineProp(_this, 'profilesLoaded', _descriptor3, _this), _initDefineProp(_this, 'visuals', _descriptor4, _this), _this.onScroll = function () {
      var viewStore = _this.props.viewStore;


      if (scrollY > 20) viewStore.appbarTransparent = false;else viewStore.appbarTransparent = true;
    }, _this.handleChange = function (e, i) {
      _this.props.router.push('/' + _this.user.permalink + '/' + CAT_LIST[i]);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: 'componentDidMount',
    // sizes: original, t1240x260

    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
      this.props.viewStore.appbarTransparent = true;
      this.loadUser(this.props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
      this.props.viewStore.appbarTransparent = false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.params.user !== this.props.params.user) this.loadUser(nextProps);
    }
  }, {
    key: 'loadUser',
    value: function loadUser(_ref2) {
      var _this2 = this;

      var user = _ref2.params.user,
          viewStore = _ref2.viewStore;

      this.user = null;
      this.userWebProfiles = [];
      this.profilesLoaded = false;
      this.visuals = null;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__api__["g" /* loadUser */])(user).then(function (user) {
        _this2.user = user;
        viewStore.title = user.username;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__api__["h" /* loadUserWebProfiles */])(user.id).then(function (profiles) {
          _this2.userWebProfiles = profiles;
          _this2.profilesLoaded = true;
        });

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__api__["i" /* loadUserVisuals */])(user.id).then(function (visuals) {
          return _this2.visuals = visuals;
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          sessionStore = _props.sessionStore,
          params = _props.params;
      var user = this.user,
          userWebProfiles = this.userWebProfiles,
          profilesLoaded = this.profilesLoaded;

      var index = CAT_LIST.indexOf(params.cat);
      index = index === -1 ? 4 : index;

      if (!user || !profilesLoaded) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'loader-wrap' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Progress__["CircularProgress"], null)
      );

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'user-header' },
           false ? React.createElement('img', { src: this.visuals.visuals[0].visual_url, className: 'user-header__visual' }) : null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'user-header__row' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Avatar___default.a, { alt: user.username, src: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* getImageUrl */])(user.avatar_url, __WEBPACK_IMPORTED_MODULE_11__constants__["a" /* IMAGE_SIZES */].t200x200),
                style: { width: 184, height: 184 }
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'user-header__details' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_material_ui_Text___default.a,
                  { type: 'display1' },
                  user.username
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_material_ui_Text___default.a,
                  { type: 'headline' },
                  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils__["g" /* getUserLocation */])(user)
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_material_ui_Text___default.a,
                  { type: 'subheading' },
                  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* formatNumber */])(user.followers_count),
                  ' followers'
                )
              ),
              sessionStore.isAuthedUser(user) ? null : sessionStore.isFollowing(user) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_material_ui_Button___default.a,
                { raised: true, primary: true, onTouchTap: function onTouchTap() {
                    return sessionStore.toggleFollowing(user);
                  } },
                'Unfollow'
              ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_material_ui_Button___default.a,
                { raised: true, accent: true, onTouchTap: function onTouchTap() {
                    return sessionStore.toggleFollowing(user);
                  } },
                'Follow'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_material_ui_Tabs___default.a,
              { textColor: 'accent', index: index, onChange: this.handleChange },
              CAT_LIST.map(function (el, i) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Tabs_Tab___default.a, { key: i, label: el });
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          this.props.children && __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children, {
            user: this.user,
            userWebProfiles: this.userWebProfiles
          })
        )
      );
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'user', [__WEBPACK_IMPORTED_MODULE_1_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'userWebProfiles', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'profilesLoaded', [__WEBPACK_IMPORTED_MODULE_1_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'visuals', [__WEBPACK_IMPORTED_MODULE_1_mobx__["observable"]], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);


/* harmony default export */ __webpack_exports__["a"] = User;

/***/ }),

/***/ "./app/stores/player-store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__("./app/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__("./app/utils.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _desc2, _value2, _class3;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}





var TIME_STEP = 15;
var VOLUME_STEP = 0.25;

var filterData = function filterData(data) {
  return data.filter(function (el) {
    return el.hasOwnProperty('origin') && el.origin || true;
  }).filter(function (el) {
    return el.type === 'track' || el.type === 'track-repost';
  }).map(function (el) {
    return el.origin || el;
  });
};

var Queue = (_class = function () {
  function Queue(player) {
    _classCallCheck(this, Queue);

    _initDefineProp(this, 'originItems', _descriptor, this);

    _initDefineProp(this, 'isLoading', _descriptor2, this);

    this.player = player;
  }

  _createClass(Queue, [{
    key: 'loadMore',
    value: function loadMore() {
      var _this = this;

      if (this.isLoading || !this.nextHref) return;

      this.isLoading = true;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api__["d" /* loadMore */])(this.nextHref).then(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_mobx__["action"])(function (data) {
        filterData(data.collection).forEach(function (el) {
          return _this.originItems.push(el);
        });
        _this.nextHref = data.next_href;
        _this.isLoading = false;
      }));
    }
  }, {
    key: 'items',
    get: function get() {
      if (this.player.skipPreviews) return this.originItems.filter(function (el) {
        return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* isPreview */])(el);
      });else return this.originItems;
    }
  }, {
    key: 'trackIndex',
    get: function get() {
      var _this2 = this;

      return this.items.findIndex(function (i) {
        return i.id === _this2.player.track.id;
      });
    }
  }, {
    key: 'prevTrack',
    get: function get() {
      if (this.trackIndex !== 0) return this.items[this.trackIndex - 1];
    }
  }, {
    key: 'nextTrack',
    get: function get() {
      if (this.trackIndex !== this.items.length - 1) return this.items[this.trackIndex + 1];
    }
  }, {
    key: 'randomTrack',
    get: function get() {
      return this.items[Math.floor(Math.random() * this.items.length)];
    }
  }]);

  return Queue;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'originItems', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'isLoading', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'items', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'items'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'trackIndex', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'trackIndex'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'prevTrack', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'prevTrack'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'nextTrack', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'nextTrack'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'randomTrack', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'randomTrack'), _class.prototype)), _class);
var PlayerStore = (_class3 = function () {
  function PlayerStore(trackStore) {
    var _this3 = this;

    _classCallCheck(this, PlayerStore);

    this.isSelected = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_mobx__["createTransformer"])(function (track) {
      return _this3.track && _this3.track.id === track.id && (_this3.isPlaying ? 'isPlaying' : 'isPaused');
    });

    this.queue = new Queue(this);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_mobx__["extendObservable"])(this, {
      track: null,
      isLoading: false,
      isPlaying: false,
      progress: 0,
      buffered: 0,
      volume: 1,
      muted: false,
      loop: false,
      shuffle: false,
      skipPreviews: true
    });
  }

  _createClass(PlayerStore, [{
    key: 'playTrack',
    value: function playTrack() {
      var track = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.track;
      var queue = arguments[1];

      if (!track) return;

      if (this.track && this.track.id === track.id) {
        return this.isPlaying = !this.isPlaying;
      }

      this.track = track;
      this.progress = 0;
      this.isPlaying = true;

      if (queue) {
        this.queue.originItems = queue;
        this.queue.nextHref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api__["q" /* getNextHref */])();
      }

      if (this.queue.trackIndex + 5 >= this.queue.items.length) this.queue.loadMore();
    }
  }, {
    key: 'playPrev',
    value: function playPrev() {
      this.playTrack(this.queue.prevTrack);
    }
  }, {
    key: 'playNext',
    value: function playNext() {
      var nextTrack = this.shuffle ? this.queue.randomTrack : this.queue.nextTrack;
      this.playTrack(nextTrack);
    }
  }, {
    key: 'setIsLoading',
    value: function setIsLoading(value) {
      this.isLoading = value;
    }
  }, {
    key: 'setProgress',
    value: function setProgress(value) {
      this.progress = value;
    }
  }, {
    key: 'setBuffered',
    value: function setBuffered(value) {
      this.buffered = value;
    }
  }, {
    key: 'toggleMuted',
    value: function toggleMuted() {
      if (!this.muted) {
        this._volume = this.volume;
        this.volume = 0;
        this.muted = true;
        return;
      }

      this.volume = this._volume;
      this.muted = false;
    }
  }, {
    key: 'toggleShuffle',
    value: function toggleShuffle() {
      this.shuffle = !this.shuffle;
    }
  }, {
    key: 'toggleLoop',
    value: function toggleLoop() {
      this.loop = !this.loop;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(value) {
      this.muted = false;
      this.volume = value;
    }
  }, {
    key: 'stepForward',
    value: function stepForward() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TIME_STEP;

      var timeLeft = this.track.duration / 1000 - this.progress;

      if (!this.isPlaying) return;

      if (offset < timeLeft) this.progress += offset;else this.playNext();
    }
  }, {
    key: 'stepBackward',
    value: function stepBackward() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TIME_STEP;

      if (this.isPlaying) this.progress -= Math.min(offset, this.progress);
    }
  }, {
    key: 'increaseVolume',
    value: function increaseVolume() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VOLUME_STEP;

      if (this.muted) this.toggleMuted();
      this.setVolume(Math.min(this.volume + offset, 1));
    }
  }, {
    key: 'decreaseVolume',
    value: function decreaseVolume() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VOLUME_STEP;

      if (this.muted) this.toggleMuted();
      this.setVolume(Math.max(this.volume - offset, 0));
    }
  }, {
    key: 'toggleSkipPreviews',
    value: function toggleSkipPreviews() {
      this.skipPreviews = !this.skipPreviews;
    }
  }]);

  return PlayerStore;
}(), (_applyDecoratedDescriptor(_class3.prototype, 'playTrack', [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], Object.getOwnPropertyDescriptor(_class3.prototype, 'playTrack'), _class3.prototype)), _class3);


/* harmony default export */ __webpack_exports__["a"] = new PlayerStore();

/***/ }),

/***/ "./app/stores/session-store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_soundcloud__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_soundcloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_soundcloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_cookie__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./app/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__("./app/api.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}








var handleError = function handleError(err) {
  return console.error(err);
};

var SessionStore = (_class = function () {
  function SessionStore() {
    _classCallCheck(this, SessionStore);

    _initDefineProp(this, 'user', _descriptor, this);

    _initDefineProp(this, 'userLikesIds', _descriptor2, this);

    _initDefineProp(this, 'userFollowingsIds', _descriptor3, this);

    if (__WEBPACK_IMPORTED_MODULE_1_soundcloud___default.a.isConnected()) this.getMe();
  }

  _createClass(SessionStore, [{
    key: 'isAuthedUser',
    value: function isAuthedUser(user) {
      return this.user ? this.user.id === user.id : false;
    }
  }, {
    key: 'isLiked',
    value: function isLiked(track) {
      return this.userLikesIds.includes(track.id);
    }
  }, {
    key: 'isFollowing',
    value: function isFollowing(user) {
      return this.userFollowingsIds.includes(user.id);
    }
  }, {
    key: 'login',
    value: function login() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_soundcloud___default.a.connect().then(function (res) {
        __WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.set(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* COOKIE_PATH */], res.oauth_token);
        return _this.getMe();
      }).catch(handleError);
    }
  }, {
    key: 'logout',
    value: function logout() {
      __WEBPACK_IMPORTED_MODULE_2_js_cookie___default.a.remove(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* COOKIE_PATH */]);
      this.user = null;
    }
  }, {
    key: 'getMe',
    value: function getMe() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_soundcloud___default.a.get('/me').then(function (user) {
        _this2.user = user;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__api__["k" /* getMeLikesIds */])().then(function (data) {
          return _this2.userLikesIds = data;
        });

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__api__["l" /* getMeFollowingsIds */])().then(function (data) {
          return _this2.userFollowingsIds = data;
        });
      }).catch(handleError);
    }
  }, {
    key: 'toggleLike',
    value: function toggleLike(track) {
      var _this3 = this;

      if (!this.isLoggedIn) return this.login().then(function () {
        return _this3.toggleLike(track);
      });

      if (this.isLiked(track)) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__api__["m" /* removeLike */])(track.id).then(function () {
        return _this3.userLikesIds.remove(track.id);
      });else __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__api__["n" /* addLike */])(track.id).then(function () {
        return _this3.userLikesIds.unshift(track.id);
      });
    }
  }, {
    key: 'toggleFollowing',
    value: function toggleFollowing(user) {
      var _this4 = this;

      if (!this.isLoggedIn) return this.login().then(function () {
        return _this4.toggleFollowing(user);
      });

      if (this.isFollowing(user)) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__api__["o" /* unfollowUser */])(user.id).then(function () {
        return _this4.userFollowingsIds.remove(user.id);
      });else __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__api__["p" /* followUser */])(user.id).then(function () {
        return _this4.userFollowingsIds.unshift(user.id);
      });
    }
  }, {
    key: 'isLoggedIn',
    get: function get() {
      return !!this.user;
    }
  }]);

  return SessionStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'user', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'userLikesIds', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'userFollowingsIds', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, 'isLoggedIn', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'isLoggedIn'), _class.prototype)), _class);


/* harmony default export */ __webpack_exports__["a"] = new SessionStore();

/***/ }),

/***/ "./app/stores/view-store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ViewState = function () {
  function ViewState() {
    var _this = this;

    _classCallCheck(this, ViewState);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_mobx__["extendObservable"])(this, {
      title: '',
      playlistOpen: false,
      volumeControlOpen: false,
      drawerOpen: false,
      appbarTransparent: false
    });

    window.addEventListener('click', function () {
      return _this.playlistOpen = false;
    });
  }

  _createClass(ViewState, [{
    key: 'togglePlaylist',
    value: function togglePlaylist() {
      this.playlistOpen = !this.playlistOpen;
    }
  }, {
    key: 'toggleDrawer',
    value: function toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    }
  }]);

  return ViewState;
}();

/* harmony default export */ __webpack_exports__["a"] = new ViewState();

/***/ }),

/***/ "./app/styles/index.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./app/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony export (immutable) */ __webpack_exports__["h"] = isElementInViewport;
/* harmony export (immutable) */ __webpack_exports__["a"] = getImageUrl;
/* harmony export (immutable) */ __webpack_exports__["b"] = formatDuration;
/* harmony export (immutable) */ __webpack_exports__["e"] = formatNumber;
/* harmony export (immutable) */ __webpack_exports__["c"] = fromNow;
/* harmony export (immutable) */ __webpack_exports__["g"] = getUserLocation;
/* harmony export (immutable) */ __webpack_exports__["f"] = getTags;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isPreview; });
/* unused harmony export formatText */
/* unused harmony export linkifyText */

var BAD_URL = '//a1.sndcdn.com/images/';

function isElementInViewport(el) {
  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
  rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  ;
}

function getImageUrl(url) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'large';

  if (!url || url.includes(BAD_URL)) return '//placehold.it/300x300?text=no+image';

  return url.replace('large', size);
}

function formatDuration(ms) {
  var duration = __WEBPACK_IMPORTED_MODULE_0_moment___default.a.duration(ms);

  if (duration.asHours() > 1) return Math.floor(duration.asHours()) + __WEBPACK_IMPORTED_MODULE_0_moment___default.a.utc(duration.asMilliseconds()).format(":mm:ss");else return __WEBPACK_IMPORTED_MODULE_0_moment___default.a.utc(duration.asMilliseconds()).format("mm:ss");
}

function formatNumber(value) {
  if (!value) return '-';
  if (value / 1000 < 1) return value.toLocaleString();
  if (value / 1000000 < 1) return Math.round(value / 1000) + 'K';

  return Math.round(value / 1000000 * 10) / 10 + 'M';
}

function fromNow(createdAt) {
  return __WEBPACK_IMPORTED_MODULE_0_moment___default()(new Date(createdAt)).from(__WEBPACK_IMPORTED_MODULE_0_moment___default()());
}

function getUserLocation(user) {
  if (user.city && user.country) return user.city + ', ' + user.country;
  if (user.city) return user.city;
  if (user.country) return user.country;
}

function getTags(text) {
  if (!text) return [];

  return text.match(/\w+|"[^"]+"/g).map(function (tag) {
    return '#' + tag.replace(/"/g, '');
  });
}

var isPreview = function isPreview(track) {
  return track.duration === 30000;
};

// split by rows & remove extraneous new lines
function formatText(text) {
  if (text) return text.split('\n').filter(function (row, i, arr) {
    return row === '' && (arr[i - 1] === '' || i === arr.length - 1) ? false : true;
  });
}

// TODO:
// - find tags #tag
// - find users @user.permalink
// - find links http://link... or link.com... or www.link... or <a href="">...</a>
// - escape <b>...</b> tag, others ?
// - replace &gt; $lt;
function linkifyText(text) {
  return text.replace(URL_REGEXP, '<a href="$&" target="_blank">$&</a>');
}

/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/react-hot-loader/lib/index.js");


/***/ }),

/***/ "./node_modules/react-hot-loader/lib/AppContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable global-require */



if (true) {
  module.exports = __webpack_require__("./node_modules/react-hot-loader/lib/AppContainer.prod.js");
} else {
  module.exports = require('./AppContainer.dev');
}

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/AppContainer.prod.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(1);
var Component = React.Component;

var AppContainer = function (_Component) {
  _inherits(AppContainer, _Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
  }

  _createClass(AppContainer, [{
    key: 'render',
    value: function render() {
      if (this.props.component) {
        return React.createElement(this.props.component, this.props.props);
      }

      return React.Children.only(this.props.children);
    }
  }]);

  return AppContainer;
}(Component);

module.exports = AppContainer;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AppContainer = __webpack_require__("./node_modules/react-hot-loader/lib/AppContainer.js");

module.exports = function warnAboutIncorrectUsage(arg) {
  if (this && this.callback) {
    throw new Error('React Hot Loader: The Webpack loader is now exported separately. ' + 'If you use Babel, we recommend that you remove "react-hot-loader" ' + 'from the "loaders" section of your Webpack configuration altogether, ' + 'and instead add "react-hot-loader/babel" to the "plugins" section ' + 'of your .babelrc file. ' + 'If you prefer not to use Babel, replace "react-hot-loader" or ' + '"react-hot" with "react-hot-loader/webpack" in the "loaders" section ' + 'of your Webpack configuration.');
  } else if (arg && arg.types && arg.types.IfStatement) {
    throw new Error('React Hot Loader: The Babel plugin is exported separately. ' + 'Replace "react-hot-loader" with "react-hot-loader/babel" ' + 'in the "plugins" section of your .babelrc file. ' + 'While we recommend the above, if you prefer not to use Babel, ' + 'you may remove "react-hot-loader" from the "plugins" section of ' + 'your .babelrc file altogether, and instead add ' + '"react-hot-loader/webpack" to the "loaders" section of your Webpack ' + 'configuration.');
  } else {
    throw new Error('React Hot Loader does not have a default export. ' + 'If you use the import statement, make sure to include the ' + 'curly braces: import { AppContainer } from "react-hot-loader". ' + 'If you use CommonJS, make sure to read the named export: ' + 'require("react-hot-loader").AppContainer.');
  }
};

module.exports.AppContainer = AppContainer;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/patch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable global-require */



if (true) {
  module.exports = __webpack_require__("./node_modules/react-hot-loader/lib/patch.prod.js");
} else {
  module.exports = require('./patch.dev');
}

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/patch.prod.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* noop */


/***/ }),

/***/ "./node_modules/react-hot-loader/patch.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/react-hot-loader/lib/patch.js");


/***/ }),

/***/ "./node_modules/react-virtualized/styles.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = vendor;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1);

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(524);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(54);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(198);

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(369);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(377);

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(536);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(573);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(576);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(2);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(25);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(156);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(368);

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(370);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(372);

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(375);

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(376);

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(510);

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(528);

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(542);

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(545);

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(55);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(84);

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(553);

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(565);

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(580);

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(582);

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(587);

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/react-hot-loader/patch.js");
module.exports = __webpack_require__("./app/main.js");


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(93);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(374);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(195);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(557);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(519);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(512);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map