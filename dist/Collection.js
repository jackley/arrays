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
  }

  _createClass(Collection, [{
    key: "_keyBy",
    value: function _keyBy(index) {
      this.data.forEach(function (d, n) {
        console.log(n + 30, d);
      });
    }
  }, {
    key: "_weirdSortNameTest",
    value: function _weirdSortNameTest() {}
  }, {
    key: "_sortBy",
    value: function _sortBy() {}

    // forEach(x, n) {
    //   return this.guest.data.forEach;
    // }

  }]);

  return Collection;
}();

exports.default = Collection;