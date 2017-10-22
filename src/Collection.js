class Collection {

  constructor(guest) {
    this.guest = guest;
    // this.data = guest.data;
    Object.assign(this, guest);
    Object.assign(this.__proto__, guest.__proto__);
  }

  keyBy(index) {
    this.data.forEach((d, n) => {
      console.log(n + 30, d);
    });
  }

  weirdSortNameTest() {

  }

  sortBy() {

  }

}

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

export default Collection;