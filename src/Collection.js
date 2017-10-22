class _Collection {

  constructor() {
    this.data = null;
  }



}

let Collection = new Proxy(new _Collection, {
  
  get: function (target, name, receiver) {
    console.log('Proxy!');
    if (name in target.__proto__) { // assume methods live on the prototype
      return function (...args) {
        var methodName = name;
        // we now have access to both methodName and arguments
      };
    } else { // assume instance vars like on the target
      return Reflect.get(target, name, receiver);
    }
  }
});

export default Collection;