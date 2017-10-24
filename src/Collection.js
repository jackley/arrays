class Collection {

  constructor(guest) {
    // this.guest = guest;
    // this.data = guest.data;
    // Object.assign(this, guest);
    this.keyBy = this._keyBy;
    this.weirdSortNameTest = this._weirdSortNameTest;
    this.sortBy = this._sortBy;
    this.toUpperCase = this._toUpperCase;
    this.toLowerCase = this._toLowerCase;
  }

  _keyBy(index) {
    this.data.forEach((d, n) => {
      console.log(n + 30, d);
    });
  }

  _sortBy() {

  }

  _toLowerCase(only = false) { // string or array
    let key;
    this.forEach((x, n) => {
      this.signature.forEach((key) => {

        if (only) {
          if (Array.isArray(only) ) {
            only.forEach((a) => {
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

  _toUpperCase(only = false) { // string or array
    let key;
    this.forEach((x, n) => {
      this.signature.forEach((key) => {

        if (only) {
          if (Array.isArray(only) ) {
            only.forEach((a) => {
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

}

export default Collection;
