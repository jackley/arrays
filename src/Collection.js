class Collection {

  constructor(guest) {
    // this.guest = guest;
    // this.data = guest.data;
    // Object.assign(this, guest);
    this.keyBy = this._keyBy;
    this.weirdSortNameTest = this._weirdSortNameTest;
    this.sortBy = this._sortBy;
  }

  _keyBy(index) {
    this.data.forEach((d, n) => {
      console.log(n + 30, d);
    });
  }

  _sortBy() {

  }

  _toLowerCase() {
    const key;
    this.forEach((x, n) => {
      this.signature.forEach((key) => {
        this[n][key] = x.toLowerCase();
      });
    });

    return this;
  }

  // forEach(x, n) {
  //   return this.guest.data.forEach;
  // }

}

export default Collection;
