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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Collection = function () {
	  function Collection() {
	    _classCallCheck(this, Collection);
	
	    this.data = null;
	  }
	
	  _createClass(Collection, [{
	    key: "keyBy",
	    value: function keyBy(index) {}
	  }]);
	
	  return Collection;
	}();
	
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
	
	  // get: function (target, name, receiver) {
	  //   console.log('target', target);
	  //   console.log('name', name);
	  //   console.log('receiver', receiver);
	
	  //   if (name in target.__proto__) { // assume methods live on the prototype
	  //     return function (...args) {
	  //       var methodName = name;
	  //       // we now have access to both methodName and arguments
	  //     };
	  //   } else { // assume instance vars like on the target
	  //     return Reflect.get(target, name, receiver);
	  //   }
	  // }
	
	  get: function get(proxyTarget, propertyKey) {
	    console.log('name', name);
	    console.log('proxyTarget', proxyTarget);
	    console.log('propertyKey', propertyKey);
	    console.log('parent', parent);
	    var foundParent = proxyTarget.find(function (parent) {
	      return parent[propertyKey] !== undefined;
	    });
	    console.log('foundparent', foundParent);
	    return foundParent && foundParent[propertyKey];
	  }
	});
	
	exports.default = States;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTdhYjQyNDNhZTRiMGYxYTdlNWUiLCJ3ZWJwYWNrOi8vLy4vcGxheWdyb3VuZC9tYWluLmpzIiwid2VicGFjazovLy8uL34vYXJyYXl6L2Rpc3QvQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5ei9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXJyYXl6L2Rpc3QvcmVnaW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5ei9kaXN0L3JlZ2lvbnMvc3RhdGVzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJyZWdpb25zIiwic3RhdGVzIiwiZm9yRWFjaCIsIm4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBO0FBQ0FBLFNBQVFDLEdBQVIsQ0FBWSxpQkFBT0MsT0FBUCxDQUFlQyxNQUFmLENBQXNCQyxPQUF0QixDQUE4QixVQUFDQyxDQUFEO0FBQUEsVUFBT0wsUUFBUUMsR0FBUixDQUFZSSxDQUFaLENBQVA7QUFBQSxFQUE5QixDQUFaLEU7Ozs7OztBQ0hBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGlDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUSxPQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSiw4Qjs7Ozs7O0FDeENBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixxQzs7Ozs7O0FDUkE7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLG9CQUFtQiw0Qjs7Ozs7O0FDWm5COztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGlDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRLE9BQU87QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsMEIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU3YWI0MjQzYWU0YjBmMWE3ZTVlIiwiaW1wb3J0IGFycmF5eiBmcm9tICdhcnJheXonO1xyXG5cclxuLy9jb25zb2xlLmxvZyhhcnJheXoucmVnaW9ucyk7XHJcbmNvbnNvbGUubG9nKGFycmF5ei5yZWdpb25zLnN0YXRlcy5mb3JFYWNoKChuKSA9PiBjb25zb2xlLmxvZyhuKSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BsYXlncm91bmQvbWFpbi5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ29sbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29sbGVjdGlvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sbGVjdGlvbik7XG5cbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbGxlY3Rpb24sIFt7XG4gICAga2V5OiBcImtleUJ5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGtleUJ5KGluZGV4KSB7fVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbGxlY3Rpb247XG59KCk7XG5cbi8vIGxldCBDb2xsZWN0aW9uID0gbmV3IFByb3h5KG5ldyBfQ29sbGVjdGlvbiwge1xuXG4vLyAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgcmVjZWl2ZXIpIHtcbi8vICAgICBjb25zb2xlLmxvZyh0YXJnZXQsIG5hbWUsIHJlY2VpdmVyKTtcbi8vICAgICBpZiAobmFtZSBpbiB0YXJnZXQuX19wcm90b19fKSB7IC8vIGFzc3VtZSBtZXRob2RzIGxpdmUgb24gdGhlIHByb3RvdHlwZVxuLy8gICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4vLyAgICAgICAgIHZhciBtZXRob2ROYW1lID0gbmFtZTtcbi8vICAgICAgICAgLy8gd2Ugbm93IGhhdmUgYWNjZXNzIHRvIGJvdGggbWV0aG9kTmFtZSBhbmQgYXJndW1lbnRzXG4vLyAgICAgICB9O1xuLy8gICAgIH0gZWxzZSB7IC8vIGFzc3VtZSBpbnN0YW5jZSB2YXJzIGxpa2Ugb24gdGhlIHRhcmdldFxuLy8gICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSwgcmVjZWl2ZXIpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbGxlY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5ei9kaXN0L0NvbGxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlZ2lvbnMgPSByZXF1aXJlKCcuL3JlZ2lvbnMnKTtcblxudmFyIF9yZWdpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlZ2lvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLnJlZ2lvbnMgPSBfcmVnaW9uczIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXl6L2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3N0YXRlcyA9IHJlcXVpcmUoJy4vc3RhdGVzJyk7XG5cbnZhciBfc3RhdGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHsgc3RhdGVzOiBfc3RhdGVzMi5kZWZhdWx0IH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5ei9kaXN0L3JlZ2lvbnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX0NvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9Db2xsZWN0aW9uJyk7XG5cbnZhciBfQ29sbGVjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsZWN0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9TdGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9TdGF0ZXMoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9TdGF0ZXMpO1xuXG4gICAgdGhpcy5kYXRhID0gdGhpcy5kZWZhdWx0cygpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9TdGF0ZXMsIFt7XG4gICAga2V5OiAnZGVmYXVsdHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0cygpIHtcbiAgICAgIHJldHVybiBbe1xuICAgICAgICBjb2RlOiAnQUwnLFxuICAgICAgICBuYW1lOiAnQUxBQkFNQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0FLJyxcbiAgICAgICAgbmFtZTogJ0FMQVNLQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0FTJyxcbiAgICAgICAgbmFtZTogJ0FNRVJJQ0FOIFNBTU9BJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnQVonLFxuICAgICAgICBuYW1lOiAnQVJJWk9OQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0FSJyxcbiAgICAgICAgbmFtZTogJ0FSS0FOU0FTJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnQ0EnLFxuICAgICAgICBuYW1lOiAnQ0FMSUZPUk5JQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0NPJyxcbiAgICAgICAgbmFtZTogJ0NPTE9SQURPJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnQ1QnLFxuICAgICAgICBuYW1lOiAnQ09OTkVDVElDVVQnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdERScsXG4gICAgICAgIG5hbWU6ICdERUxBV0FSRSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0RDJyxcbiAgICAgICAgbmFtZTogJ0RJU1RSSUNUIE9GIENPTFVNQklBJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnRk0nLFxuICAgICAgICBuYW1lOiAnRkVERVJBVEVEIFNUQVRFUyBPRiBNSUNST05FU0lBJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnRkwnLFxuICAgICAgICBuYW1lOiAnRkxPUklEQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0dBJyxcbiAgICAgICAgbmFtZTogJ0dFT1JHSUEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdHVScsXG4gICAgICAgIG5hbWU6ICdHVUFNIEdVJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnSEknLFxuICAgICAgICBuYW1lOiAnSEFXQUlJJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnSUQnLFxuICAgICAgICBuYW1lOiAnSURBSE8nXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdJTCcsXG4gICAgICAgIG5hbWU6ICdJTExJTk9JUydcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ0lOJyxcbiAgICAgICAgbmFtZTogJ0lORElBTkEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdJQScsXG4gICAgICAgIG5hbWU6ICdJT1dBJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnS1MnLFxuICAgICAgICBuYW1lOiAnS0FOU0FTJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnS1knLFxuICAgICAgICBuYW1lOiAnS0VOVFVDS1knXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdMQScsXG4gICAgICAgIG5hbWU6ICdMT1VJU0lBTkEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdNRScsXG4gICAgICAgIG5hbWU6ICdNQUlORSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ01IJyxcbiAgICAgICAgbmFtZTogJ01BUlNIQUxMIElTTEFORFMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdNRCcsXG4gICAgICAgIG5hbWU6ICdNQVJZTEFORCdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ01BJyxcbiAgICAgICAgbmFtZTogJ01BU1NBQ0hVU0VUVFMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdNSScsXG4gICAgICAgIG5hbWU6ICdNSUNISUdBTidcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ01OJyxcbiAgICAgICAgbmFtZTogJ01JTk5FU09UQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ01TJyxcbiAgICAgICAgbmFtZTogJ01JU1NJU1NJUFBJJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnTU8nLFxuICAgICAgICBuYW1lOiAnTUlTU09VUkknXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdNVCcsXG4gICAgICAgIG5hbWU6ICdNT05UQU5BJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnTkUnLFxuICAgICAgICBuYW1lOiAnTkVCUkFTS0EnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdOVicsXG4gICAgICAgIG5hbWU6ICdORVZBREEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdOSCcsXG4gICAgICAgIG5hbWU6ICdORVcgSEFNUFNISVJFJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnTkonLFxuICAgICAgICBuYW1lOiAnTkVXIEpFUlNFWSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ05NJyxcbiAgICAgICAgbmFtZTogJ05FVyBNRVhJQ08nXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdOWScsXG4gICAgICAgIG5hbWU6ICdORVcgWU9SSydcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ05DJyxcbiAgICAgICAgbmFtZTogJ05PUlRIIENBUk9MSU5BJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnTkQnLFxuICAgICAgICBuYW1lOiAnTk9SVEggREFLT1RBJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnTVAnLFxuICAgICAgICBuYW1lOiAnTk9SVEhFUk4gTUFSSUFOQSBJU0xBTkRTJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnT0gnLFxuICAgICAgICBuYW1lOiAnT0hJTydcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ09LJyxcbiAgICAgICAgbmFtZTogJ09LTEFIT01BJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnT1InLFxuICAgICAgICBuYW1lOiAnT1JFR09OJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnUFcnLFxuICAgICAgICBuYW1lOiAnUEFMQVUnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdQQScsXG4gICAgICAgIG5hbWU6ICdQRU5OU1lMVkFOSUEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdQUicsXG4gICAgICAgIG5hbWU6ICdQVUVSVE8gUklDTydcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ1JJJyxcbiAgICAgICAgbmFtZTogJ1JIT0RFIElTTEFORCdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ1NDJyxcbiAgICAgICAgbmFtZTogJ1NPVVRIIENBUk9MSU5BJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnU0QnLFxuICAgICAgICBuYW1lOiAnU09VVEggREFLT1RBJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnVE4nLFxuICAgICAgICBuYW1lOiAnVEVOTkVTU0VFJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnVFgnLFxuICAgICAgICBuYW1lOiAnVEVYQVMnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdVVCcsXG4gICAgICAgIG5hbWU6ICdVVEFIJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnVlQnLFxuICAgICAgICBuYW1lOiAnVkVSTU9OVCdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ1ZJJyxcbiAgICAgICAgbmFtZTogJ1ZJUkdJTiBJU0xBTkRTJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnVkEnLFxuICAgICAgICBuYW1lOiAnVklSR0lOSUEnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdXQScsXG4gICAgICAgIG5hbWU6ICdXQVNISU5HVE9OJ1xuICAgICAgfSwge1xuICAgICAgICBjb2RlOiAnV1YnLFxuICAgICAgICBuYW1lOiAnV0VTVCBWSVJHSU5JQSdcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ1dJJyxcbiAgICAgICAgbmFtZTogJ1dJU0NPTlNJTidcbiAgICAgIH0sIHtcbiAgICAgICAgY29kZTogJ1dZJyxcbiAgICAgICAgbmFtZTogJ1dZT01JTkcnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdBRScsXG4gICAgICAgIG5hbWU6ICdBUk1FRCBGT1JDRVMgQUZSSUNBIFxcIENBTkFEQSBcXCBFVVJPUEUgXFwgTUlERExFIEVBU1QnXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdBQScsXG4gICAgICAgIG5hbWU6ICdBUk1FRCBGT1JDRVMgQU1FUklDQSAoRVhDRVBUIENBTkFEQSknXG4gICAgICB9LCB7XG4gICAgICAgIGNvZGU6ICdBUCcsXG4gICAgICAgIG5hbWU6ICdBUk1FRCBGT1JDRVMgUEFDSUZJQydcbiAgICAgIH1dO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfU3RhdGVzO1xufSgpO1xuXG52YXIgU3RhdGVzID0gbmV3IFByb3h5KFtuZXcgX0NvbGxlY3Rpb24yLmRlZmF1bHQoKSwgbmV3IF9TdGF0ZXMoKV0sIHtcblxuICAvLyBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIHJlY2VpdmVyKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ3RhcmdldCcsIHRhcmdldCk7XG4gIC8vICAgY29uc29sZS5sb2coJ25hbWUnLCBuYW1lKTtcbiAgLy8gICBjb25zb2xlLmxvZygncmVjZWl2ZXInLCByZWNlaXZlcik7XG5cbiAgLy8gICBpZiAobmFtZSBpbiB0YXJnZXQuX19wcm90b19fKSB7IC8vIGFzc3VtZSBtZXRob2RzIGxpdmUgb24gdGhlIHByb3RvdHlwZVxuICAvLyAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gIC8vICAgICAgIHZhciBtZXRob2ROYW1lID0gbmFtZTtcbiAgLy8gICAgICAgLy8gd2Ugbm93IGhhdmUgYWNjZXNzIHRvIGJvdGggbWV0aG9kTmFtZSBhbmQgYXJndW1lbnRzXG4gIC8vICAgICB9O1xuICAvLyAgIH0gZWxzZSB7IC8vIGFzc3VtZSBpbnN0YW5jZSB2YXJzIGxpa2Ugb24gdGhlIHRhcmdldFxuICAvLyAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgbmFtZSwgcmVjZWl2ZXIpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGdldDogZnVuY3Rpb24gZ2V0KHByb3h5VGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgIGNvbnNvbGUubG9nKCd0YXJnZXQnLCB0YXJnZXQpO1xuICAgIGNvbnNvbGUubG9nKCduYW1lJywgbmFtZSk7XG4gICAgY29uc29sZS5sb2coJ3JlY2VpdmVyJywgcmVjZWl2ZXIpO1xuICAgIGNvbnNvbGUubG9nKCdwcm94eVRhcmdldCcsIHByb3h5VGFyZ2V0KTtcbiAgICBjb25zb2xlLmxvZygncHJvcGVydHlLZXknLCBwcm9wZXJ0eUtleSk7XG4gICAgY29uc29sZS5sb2coJ3BhcmVudCcsIHBhcmVudCk7XG4gICAgdmFyIGZvdW5kUGFyZW50ID0gcHJveHlUYXJnZXQuZmluZChmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICByZXR1cm4gcGFyZW50W3Byb3BlcnR5S2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdmb3VuZHBhcmVudCcsIGZvdW5kUGFyZW50KTtcbiAgICByZXR1cm4gZm91bmRQYXJlbnQgJiYgZm91bmRQYXJlbnRbcHJvcGVydHlLZXldO1xuICB9XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhdGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheXovZGlzdC9yZWdpb25zL3N0YXRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9