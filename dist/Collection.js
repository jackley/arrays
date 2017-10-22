'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Collection = function _Collection() {
  _classCallCheck(this, _Collection);

  this.data = null;
};

var Collection = new Proxy(new _Collection(), {
  get: function get(target, name, receiver) {
    console.log('Proxy!');
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

exports.default = Collection;