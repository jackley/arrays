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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arrayz = __webpack_require__(2);
	
	var _arrayz2 = _interopRequireDefault(_arrayz);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//console.log(arrayz.regions);
	console.log(_arrayz2.default.regions.states.forEach(function (n) {
	  return console.log(n);
	}));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Collection = function Collection() {
	  _classCallCheck(this, Collection);
	
	  this.data = null;
	};
	
	// let Collection = new Proxy(new _Collection, {
	
	//   get: function (target, name, receiver) {
	//     console.log(target, name, receiver);
	//     if (name in target.__proto__) { // assume methods live on the prototype
	//       return function (...args) {
	//         var methodName = name;
	//         // we now have access to both methodName and arguments
	//       };
	//     } else { // assume instance vars like on the target
	//       return Reflect.get(target, name, receiver);
	//     }
	//   }
	// });
	
	exports.default = Collection;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _regions = __webpack_require__(3);
	
	var _regions2 = _interopRequireDefault(_regions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.regions = _regions2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _states = __webpack_require__(4);
	
	var _states2 = _interopRequireDefault(_states);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { states: _states2.default };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Collection = __webpack_require__(1);
	
	var _Collection2 = _interopRequireDefault(_Collection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _States = function () {
	  function _States() {
	    _classCallCheck(this, _States);
	
	    this.data = this.defaults();
	  }
	
	  _createClass(_States, [{
	    key: 'defaults',
	    value: function defaults() {
	      return [{
	        code: 'AL',
	        name: 'ALABAMA'
	      }, {
	        code: 'AK',
	        name: 'ALASKA'
	      }, {
	        code: 'AS',
	        name: 'AMERICAN SAMOA'
	      }, {
	        code: 'AZ',
	        name: 'ARIZONA'
	      }, {
	        code: 'AR',
	        name: 'ARKANSAS'
	      }, {
	        code: 'CA',
	        name: 'CALIFORNIA'
	      }, {
	        code: 'CO',
	        name: 'COLORADO'
	      }, {
	        code: 'CT',
	        name: 'CONNECTICUT'
	      }, {
	        code: 'DE',
	        name: 'DELAWARE'
	      }, {
	        code: 'DC',
	        name: 'DISTRICT OF COLUMBIA'
	      }, {
	        code: 'FM',
	        name: 'FEDERATED STATES OF MICRONESIA'
	      }, {
	        code: 'FL',
	        name: 'FLORIDA'
	      }, {
	        code: 'GA',
	        name: 'GEORGIA'
	      }, {
	        code: 'GU',
	        name: 'GUAM GU'
	      }, {
	        code: 'HI',
	        name: 'HAWAII'
	      }, {
	        code: 'ID',
	        name: 'IDAHO'
	      }, {
	        code: 'IL',
	        name: 'ILLINOIS'
	      }, {
	        code: 'IN',
	        name: 'INDIANA'
	      }, {
	        code: 'IA',
	        name: 'IOWA'
	      }, {
	        code: 'KS',
	        name: 'KANSAS'
	      }, {
	        code: 'KY',
	        name: 'KENTUCKY'
	      }, {
	        code: 'LA',
	        name: 'LOUISIANA'
	      }, {
	        code: 'ME',
	        name: 'MAINE'
	      }, {
	        code: 'MH',
	        name: 'MARSHALL ISLANDS'
	      }, {
	        code: 'MD',
	        name: 'MARYLAND'
	      }, {
	        code: 'MA',
	        name: 'MASSACHUSETTS'
	      }, {
	        code: 'MI',
	        name: 'MICHIGAN'
	      }, {
	        code: 'MN',
	        name: 'MINNESOTA'
	      }, {
	        code: 'MS',
	        name: 'MISSISSIPPI'
	      }, {
	        code: 'MO',
	        name: 'MISSOURI'
	      }, {
	        code: 'MT',
	        name: 'MONTANA'
	      }, {
	        code: 'NE',
	        name: 'NEBRASKA'
	      }, {
	        code: 'NV',
	        name: 'NEVADA'
	      }, {
	        code: 'NH',
	        name: 'NEW HAMPSHIRE'
	      }, {
	        code: 'NJ',
	        name: 'NEW JERSEY'
	      }, {
	        code: 'NM',
	        name: 'NEW MEXICO'
	      }, {
	        code: 'NY',
	        name: 'NEW YORK'
	      }, {
	        code: 'NC',
	        name: 'NORTH CAROLINA'
	      }, {
	        code: 'ND',
	        name: 'NORTH DAKOTA'
	      }, {
	        code: 'MP',
	        name: 'NORTHERN MARIANA ISLANDS'
	      }, {
	        code: 'OH',
	        name: 'OHIO'
	      }, {
	        code: 'OK',
	        name: 'OKLAHOMA'
	      }, {
	        code: 'OR',
	        name: 'OREGON'
	      }, {
	        code: 'PW',
	        name: 'PALAU'
	      }, {
	        code: 'PA',
	        name: 'PENNSYLVANIA'
	      }, {
	        code: 'PR',
	        name: 'PUERTO RICO'
	      }, {
	        code: 'RI',
	        name: 'RHODE ISLAND'
	      }, {
	        code: 'SC',
	        name: 'SOUTH CAROLINA'
	      }, {
	        code: 'SD',
	        name: 'SOUTH DAKOTA'
	      }, {
	        code: 'TN',
	        name: 'TENNESSEE'
	      }, {
	        code: 'TX',
	        name: 'TEXAS'
	      }, {
	        code: 'UT',
	        name: 'UTAH'
	      }, {
	        code: 'VT',
	        name: 'VERMONT'
	      }, {
	        code: 'VI',
	        name: 'VIRGIN ISLANDS'
	      }, {
	        code: 'VA',
	        name: 'VIRGINIA'
	      }, {
	        code: 'WA',
	        name: 'WASHINGTON'
	      }, {
	        code: 'WV',
	        name: 'WEST VIRGINIA'
	      }, {
	        code: 'WI',
	        name: 'WISCONSIN'
	      }, {
	        code: 'WY',
	        name: 'WYOMING'
	      }, {
	        code: 'AE',
	        name: 'ARMED FORCES AFRICA \ CANADA \ EUROPE \ MIDDLE EAST'
	      }, {
	        code: 'AA',
	        name: 'ARMED FORCES AMERICA (EXCEPT CANADA)'
	      }, {
	        code: 'AP',
	        name: 'ARMED FORCES PACIFIC'
	      }];
	    }
	  }]);
	
	  return _States;
	}();
	
	var States = new Proxy([new _Collection2.default(), new _States()], {
	
	  get: function get(target, name, receiver) {
	    console.log('target', target);
	    console.log('name', name);
	    console.log('receiver', receiver);
	
	    if (name in target.__proto__) {
	      // assume methods live on the prototype
	      return function () {
	        var methodName = name;
	        // we now have access to both methodName and arguments
	      };
	    } else {
	      // assume instance vars like on the target
	      return Reflect.get(target, name, receiver);
	    }
	  }
	});
	
	exports.default = States;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGM4MTVlMjZkN2Q4MjQzODk2NGIiLCJ3ZWJwYWNrOi8vLy4vcGxheWdyb3VuZC9tYWluLmpzIiwid2VicGFjazovLy8uL34vYXJyYXl6L2Rpc3QvQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5ei9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXJyYXl6L2Rpc3QvcmVnaW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5ei9kaXN0L3JlZ2lvbnMvc3RhdGVzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJyZWdpb25zIiwic3RhdGVzIiwiZm9yRWFjaCIsIm4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBO0FBQ0FBLFNBQVFDLEdBQVIsQ0FBWSxpQkFBT0MsT0FBUCxDQUFlQyxNQUFmLENBQXNCQyxPQUF0QixDQUE4QixVQUFDQyxDQUFEO0FBQUEsVUFBT0wsUUFBUUMsR0FBUixDQUFZSSxDQUFaLENBQVA7QUFBQSxFQUE5QixDQUFaLEU7Ozs7OztBQ0hBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUSxPQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSiw4Qjs7Ozs7O0FDN0JBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JB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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YzgxNWUyNmQ3ZDgyNDM4OTY0YiIsImltcG9ydCBhcnJheXogZnJvbSAnYXJyYXl6JztcclxuXHJcbi8vY29uc29sZS5sb2coYXJyYXl6LnJlZ2lvbnMpO1xyXG5jb25zb2xlLmxvZyhhcnJheXoucmVnaW9ucy5zdGF0ZXMuZm9yRWFjaCgobikgPT4gY29uc29sZS5sb2cobikpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wbGF5Z3JvdW5kL21haW4uanMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENvbGxlY3Rpb24gPSBmdW5jdGlvbiBDb2xsZWN0aW9uKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sbGVjdGlvbik7XG5cbiAgdGhpcy5kYXRhID0gbnVsbDtcbn07XG5cbi8vIGxldCBDb2xsZWN0aW9uID0gbmV3IFByb3h5KG5ldyBfQ29sbGVjdGlvbiwge1xuXG4vLyAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgcmVjZWl2ZXIpIHtcbi8vICAgICBjb25zb2xlLmxvZyh0YXJnZXQsIG5hbWUsIHJlY2VpdmVyKTtcbi8vICAgICBpZiAobmFtZSBpbiB0YXJnZXQuX19wcm90b19fKSB7IC8vIGFzc3VtZSBtZXRob2RzIGxpdmUgb24gdGhlIHByb3RvdHlwZVxuLy8gICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4vLyAgICAgICAgIHZhciBtZXRob2ROYW1lID0gbmFtZTtcbi8vICAgICAgICAgLy8gd2Ugbm93IGhhdmUgYWNjZXNzIHRvIGJvdGggbWV0aG9kTmFtZSBhbmQgYXJndW1lbnRzXG4vLyAgICAgICB9O1xuLy8gICAgIH0gZWxzZSB7IC8vIGFzc3VtZSBpbnN0YW5jZSB2YXJzIGxpa2Ugb24gdGhlIHRhcmdldFxuLy8gICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSwgcmVjZWl2ZXIpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxlY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5ei9kaXN0L0NvbGxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlZ2lvbnMgPSByZXF1aXJlKCcuL3JlZ2lvbnMnKTtcblxudmFyIF9yZWdpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2lvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLnJlZ2lvbnMgPSBfcmVnaW9uczIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXl6L2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3N0YXRlcyA9IHJlcXVpcmUoJy4vc3RhdGVzJyk7XG5cbnZhciBfc3RhdGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHsgc3RhdGVzOiBfc3RhdGVzMi5kZWZhdWx0IH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5ei9kaXN0L3JlZ2lvbnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0NvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9Db2xsZWN0aW9uJyk7XG5cbnZhciBfQ29sbGVjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsZWN0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9TdGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9TdGF0ZXMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9TdGF0ZXMpO1xuXG4gICAgdGhpcy5kYXRhID0gdGhpcy5kZWZhdWx0cygpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9TdGF0ZXMsIFt7XG4gICAga2V5OiAnZGVmYXVsdHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0cygpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBjb2RlOiAnQUwnLFxuICAgICAgICBuYW1lOiAnQUxBQkFNQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0FLJyxcbiAgICAgICAgbmFtZTogJ0FMQVNLQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0FTJyxcbiAgICAgICAgbmFtZTogJ0FNRVJJQ0FOIFNBTU9BJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnQVonLFxuICAgICAgICBuYW1lOiAnQVJJWk9OQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0FSJyxcbiAgICAgICAgbmFtZTogJ0FSS0FOU0FTJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnQ0EnLFxuICAgICAgICBuYW1lOiAnQ0FMSUZPUk5JQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0NPJyxcbiAgICAgICAgbmFtZTogJ0NPTE9SQURPJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnQ1QnLFxuICAgICAgICBuYW1lOiAnQ09OTkVDVElDVVQnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdERScsXG4gICAgICAgIG5hbWU6ICdERUxBV0FSRSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0RDJyxcbiAgICAgICAgbmFtZTogJ0RJU1RSSUNUIE9GIENPTFVNQklBJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnRk0nLFxuICAgICAgICBuYW1lOiAnRkVERVJBVEVEIFNUQVRFUyBPRiBNSUNST05FU0lBJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnRkwnLFxuICAgICAgICBuYW1lOiAnRkxPUklEQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0dBJyxcbiAgICAgICAgbmFtZTogJ0dFT1JHSUEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdHVScsXG4gICAgICAgIG5hbWU6ICdHVUFNIEdVJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnSEknLFxuICAgICAgICBuYW1lOiAnSEFXQUlJJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnSUQnLFxuICAgICAgICBuYW1lOiAnSURBSE8nXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdJTCcsXG4gICAgICAgIG5hbWU6ICdJTExJTk9JUydcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0lOJyxcbiAgICAgICAgbmFtZTogJ0lORElBTkEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdJQScsXG4gICAgICAgIG5hbWU6ICdJT1dBJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnS1MnLFxuICAgICAgICBuYW1lOiAnS0FOU0FTJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnS1knLFxuICAgICAgICBuYW1lOiAnS0VOVFVDS1knXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdMQScsXG4gICAgICAgIG5hbWU6ICdMT1VJU0lBTkEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdNRScsXG4gICAgICAgIG5hbWU6ICdNQUlORSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ01IJyxcbiAgICAgICAgbmFtZTogJ01BUlNIQUxMIElTTEFORFMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdNRCcsXG4gICAgICAgIG5hbWU6ICdNQVJZTEFORCdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ01BJyxcbiAgICAgICAgbmFtZTogJ01BU1NBQ0hVU0VUVFMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdNSScsXG4gICAgICAgIG5hbWU6ICdNSUNISUdBTidcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ01OJyxcbiAgICAgICAgbmFtZTogJ01JTk5FU09UQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ01TJyxcbiAgICAgICAgbmFtZTogJ01JU1NJU1NJUFBJJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnTU8nLFxuICAgICAgICBuYW1lOiAnTUlTU09VUkknXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdNVCcsXG4gICAgICAgIG5hbWU6ICdNT05UQU5BJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnTkUnLFxuICAgICAgICBuYW1lOiAnTkVCUkFTS0EnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdOVicsXG4gICAgICAgIG5hbWU6ICdORVZBREEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdOSCcsXG4gICAgICAgIG5hbWU6ICdORVcgSEFNUFNISVJFJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnTkonLFxuICAgICAgICBuYW1lOiAnTkVXIEpFUlNFWSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ05NJyxcbiAgICAgICAgbmFtZTogJ05FVyBNRVhJQ08nXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdOWScsXG4gICAgICAgIG5hbWU6ICdORVcgWU9SSydcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ05DJyxcbiAgICAgICAgbmFtZTogJ05PUlRIIENBUk9MSU5BJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnTkQnLFxuICAgICAgICBuYW1lOiAnTk9SVEggREFLT1RBJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnTVAnLFxuICAgICAgICBuYW1lOiAnTk9SVEhFUk4gTUFSSUFOQSBJU0xBTkRTJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnT0gnLFxuICAgICAgICBuYW1lOiAnT0hJTydcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ09LJyxcbiAgICAgICAgbmFtZTogJ09LTEFIT01BJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnT1InLFxuICAgICAgICBuYW1lOiAnT1JFR09OJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnUFcnLFxuICAgICAgICBuYW1lOiAnUEFMQVUnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdQQScsXG4gICAgICAgIG5hbWU6ICdQRU5OU1lMVkFOSUEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdQUicsXG4gICAgICAgIG5hbWU6ICdQVUVSVE8gUklDTydcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ1JJJyxcbiAgICAgICAgbmFtZTogJ1JIT0RFIElTTEFORCdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ1NDJyxcbiAgICAgICAgbmFtZTogJ1NPVVRIIENBUk9MSU5BJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnU0QnLFxuICAgICAgICBuYW1lOiAnU09VVEggREFLT1RBJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnVE4nLFxuICAgICAgICBuYW1lOiAnVEVOTkVTU0VFJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnVFgnLFxuICAgICAgICBuYW1lOiAnVEVYQVMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdVVCcsXG4gICAgICAgIG5hbWU6ICdVVEFIJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnVlQnLFxuICAgICAgICBuYW1lOiAnVkVSTU9OVCdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ1ZJJyxcbiAgICAgICAgbmFtZTogJ1ZJUkdJTiBJU0xBTkRTJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnVkEnLFxuICAgICAgICBuYW1lOiAnVklSR0lOSUEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdXQScsXG4gICAgICAgIG5hbWU6ICdXQVNISU5HVE9OJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnV1YnLFxuICAgICAgICBuYW1lOiAnV0VTVCBWSVJHSU5JQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ1dJJyxcbiAgICAgICAgbmFtZTogJ1dJU0NPTlNJTidcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ1dZJyxcbiAgICAgICAgbmFtZTogJ1dZT01JTkcnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdBRScsXG4gICAgICAgIG5hbWU6ICdBUk1FRCBGT1JDRVMgQUZSSUNBIFxcIENBTkFEQSBcXCBFVVJPUEUgXFwgTUlERExFIEVBU1QnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdBQScsXG4gICAgICAgIG5hbWU6ICdBUk1FRCBGT1JDRVMgQU1FUklDQSAoRVhDRVBUIENBTkFEQSknXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdBUCcsXG4gICAgICAgIG5hbWU6ICdBUk1FRCBGT1JDRVMgUEFDSUZJQydcbiAgICAgIH1dO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfU3RhdGVzO1xufSgpO1xuXG52YXIgU3RhdGVzID0gbmV3IFByb3h5KFtuZXcgX0NvbGxlY3Rpb24yLmRlZmF1bHQoKSwgbmV3IF9TdGF0ZXMoKV0sIHtcblxuICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUsIHJlY2VpdmVyKSB7XG4gICAgY29uc29sZS5sb2coJ3RhcmdldCcsIHRhcmdldCk7XG4gICAgY29uc29sZS5sb2coJ25hbWUnLCBuYW1lKTtcbiAgICBjb25zb2xlLmxvZygncmVjZWl2ZXInLCByZWNlaXZlcik7XG5cbiAgICBpZiAobmFtZSBpbiB0YXJnZXQuX19wcm90b19fKSB7XG4gICAgICAvLyBhc3N1bWUgbWV0aG9kcyBsaXZlIG9uIHRoZSBwcm90b3R5cGVcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZXRob2ROYW1lID0gbmFtZTtcbiAgICAgICAgLy8gd2Ugbm93IGhhdmUgYWNjZXNzIHRvIGJvdGggbWV0aG9kTmFtZSBhbmQgYXJndW1lbnRzXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhc3N1bWUgaW5zdGFuY2UgdmFycyBsaWtlIG9uIHRoZSB0YXJnZXRcbiAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIG5hbWUsIHJlY2VpdmVyKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTdGF0ZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5ei9kaXN0L3JlZ2lvbnMvc3RhdGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=