import Collection from '../Collection';

class _Colors {

  constructor() {


    // Get our default Data
    this.data = this.defaults();

    // New up a collection
    const collection = new Collection;

    // Apply our signature
    this.data.__proto__.signature = [
      'hex', 'shortHex', 'rgb', 'RGB', 'hsl', 'HSL', 'group', 'name',
    ];

    // Add shared collection stuff
    Object.assign(this.data.__proto__, collection);

    // Assign any custom collection methods, or override collections
    // this.data.other = this.other; ? How does this even work
    this.data.__proto__.withSpaces = this._withSpaces;
    this.data.__proto__.withHash = this._withHash;

    // return the raw array
    return this.data;
  }

  _withSpaces(which = 'RGB') {
    this.forEach((x, n) => {
      this.signature.forEach((key) => {
        if (which.toUpperCase() === 'RGB') {
          x.rgb = Object.keys(x.RGB).join(', ');

        } else if (which.toUpperCase() === 'HSL') {
          x.hsl = Object.keys(x.HSL).join(', ');
        }
      });
    });

    return this;
  }

  _withHash() {
    this.forEach((x, n) => {
      this.signature.forEach((key) => {
        if (key === 'hex' || key === 'shortHex') {
          x[key] = `#${x[key]}`;
        }
      });
    });

    return this;
  }

  defaults() {
    return [
      {
        hex: 'FF4500',
        shortHex: 'FF4500',
        rgb: '255,69,0',
        RGB: {
          R: 255,
          G: 69,
          B: 0,
        },
        hsl: '16,100%,50%',
        HSL: {
          H: 16,
          S: '100%',
          L: '50%',
        },
        group: 'orange',
        name: 'orangered',
      },
      {
        hex: 'FFFF00',
        shortHex: 'FF0',
        rgb: '255,255,0',
        RGB: {
          R: 255,
          G: 255,
          B: 0,
        },
        hsl: '60,100%,50%',
        HSL: {
          H: 60,
          S: '100%',
          L: '50%',
        },
        group: 'yellow',
        name: 'yellow',
      },
      {
        hex: 'FF1493',
        shortHex: 'FF1493',
        rgb: '255,20,147',
        RGB: {
          R: 255,
          G: 20,
          B: 147,
        },
        hsl: '328,100%,54%',
        HSL: {
          H: 328,
          S: '100%',
          L: '54%',
        },
        group: 'pink',
        name: 'deeppink',
      },
      {
        hex: '663399',
        shortHex: '639',
        rgb: '102,51,153',
        RGB: {
          R: 102,
          G: 51,
          B: 153,
        },
        hsl: '270,50%,40%',
        HSL: {
          H: 270,
          S: '50%',
          L: '40%',
        },
        group: 'purple',
        name: 'rebeccapurple',
      },


    ];
  }
}

let Colors = new _Colors;

export default Colors;
