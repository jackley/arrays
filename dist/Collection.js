"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collection = function () {
  function Collection(guest) {
    _classCallCheck(this, Collection);

    // this.guest = guest;
    // this.data = guest.data;
    // Object.assign(this, guest);
    this.keyBy = this._keyBy;
    this.weirdSortNameTest = this._weirdSortNameTest;
    this.sortBy = this._sortBy;
    this.toUpperCase = this._toUpperCase;
    this.toLowerCase = this._toLowerCase;
  }

  _createClass(Collection, [{
    key: "_keyBy",
    value: function _keyBy(index) {
      this.data.forEach(function (d, n) {
        console.log(n + 30, d);
      });
    }
  }, {
    key: "_sortBy",
    value: function _sortBy() {}
  }, {
    key: "_toLowerCase",
    value: function _toLowerCase() {
      var _this = this;

      var only = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // string or array
      var key = void 0;
      this.forEach(function (x, n) {
        _this.signature.forEach(function (key) {

          if (only) {
            if (Array.isArray(only)) {
              only.forEach(function (a) {
                if (key === a) {
                  x[key] = x[key].toLowerCase();
                }
              });
            } else if (key === only) {
              x[key] = x[key].toLowerCase();
            }
          } else {
            x[key] = x[key].toLowerCase();
          }
        });
      });

      return this;
    }
  }, {
    key: "_toUpperCase",
    value: function _toUpperCase() {
      var _this2 = this;

      var only = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // string or array
      var key = void 0;
      this.forEach(function (x, n) {
        _this2.signature.forEach(function (key) {

          if (only) {
            if (Array.isArray(only)) {
              only.forEach(function (a) {
                if (key === a) {
                  x[key] = x[key].toUpperCase();
                }
              });
            } else if (key === only) {
              x[key] = x[key].toUpperCase();
            }
          } else {
            x[key] = x[key].toUpperCase();
          }
        });
      });

      return this;
    }

    // forEach(x, n) {
    //   return this.guest.data.forEach;
    // }

  }]);

  return Collection;
}();

exports.default = Collection;