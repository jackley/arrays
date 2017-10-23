class Collection {

  constructor(guest) {
    this.guest = guest;
    // this.data = guest.data;
    Object.assign(this, guest);
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

  forEach(x, n) {
    return this.guest.data.forEach;
  }

}

export default Collection;
