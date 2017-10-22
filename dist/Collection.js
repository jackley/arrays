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