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