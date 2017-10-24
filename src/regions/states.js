import Collection from '../Collection';

class _States {

  constructor() {

    // Apply our signature
    this.data.__proto__.signature = [
      'code', 'name'
    ];

    // Get our default Data
    this.data = this.defaults();

    // New up a collection
    const collection = new Collection;

    // Add shared collection stuff
    Object.assign(this.data.__proto__, collection);

    // Assign any custom collection methods, or override collections
    // this.data.other = this.other; ? How does this even work
    this.data.__proto__.withArmedForces = this._withArmedForces;
    this.data.__proto__.withMicronesia = this._withMicronesia;
    this.data.__proto__.withMn = this._withMicronesia;
    this.data.__proto__.withDistrictOfColumbia = this._withDistrictOfColumbia;
    this.data.__proto__.withDC = this._withDistrictOfColumbia;
    this.data.__proto__.withMarshallIslands = this._withMarshallIslands;
    this.data.__proto__.withMh = this._withMarshallIslands;
    this.data.__proto__.withGuam = this._withGuam;
    this.data.__proto__.withGU = this._withGuam;
    this.data.__proto__.withMarianaIslands = this._withMarianaIslands;
    this.data.__proto__.withMI = this._withMarianaIslands;
    this.data.__proto__.withMarianaIslands = this._withMarianaIslands;
    this.data.__proto__.withMI = this._withMarianaIslands;
    this.data.__proto__.withPalau = this._withPalau;
    this.data.__proto__.withPW = this._withPalau;
    this.data.__proto__.withPuertoRico = this._withPuertoRico;
    this.data.__proto__.withPR = this._withPuertoRico;
    this.data.__proto__.withAmericanSamoa = this._withAmericanSamoa;
    this.data.__proto__.withAS = this._withAmericanSamoa;
    this.data.__proto__.withVirginIslands = this._withVirginIslands;
    this.data.__proto__.withVI = this._withVirginIslands;

    // return the raw array
    return this.data;
  }

  _withArmedForces() {
    this.push({
        code: 'AE',
        name: 'ARMED FORCES AFRICA \ CANADA \ EUROPE \ MIDDLE EAST',
      });
    this.push({
        code: 'AA',
        name: 'ARMED FORCES AMERICA (EXCEPT CANADA)',
      });
    this.push({
        code: 'AP',
        name: 'ARMED FORCES PACIFIC'
      });
    return this;
  }

  _withMicronesia() { // or withMn
    this.push({
      code: 'FM',
      name: 'FEDERATED STATES OF MICRONESIA',
    });
    return this;
  }

  _withDistrictOfColumbia() { // or withDC
    this.push({
      code: 'DC',
      name: 'DISTRICT OF COLUMBIA',
    });
    return this;
  }

  _withMarshallIslands() { // or withMh
    this.push({
      code: 'MH',
      name: 'MARSHALL ISLANDS',
    });
    return this;
  }

  _withGuam() { // or withGU
    this.push({
      code: 'GU',
      name: 'GUAM GU',
    });
    return this;
  }

  _withMarianaIslands() { // or withMI
    this.push({
      code: 'MP',
      name: 'NORTHERN MARIANA ISLANDS',
    });
    return this;
  }

  _withPalau() { // or withPW
    this.push({
      code: 'PW',
      name: 'PALAU',
    });
    return this;
  }

  _withPuertoRico() { // or withPR
    this.push({
      code: 'PR',
      name: 'PUERTO RICO',
    });
    return this;
  }

  _withAmericanSamoa() { // or withAS
    this.push({
      code: 'AS',
      name: 'AMERICAN SAMOA',
    });
    return this;
  }

  _withVirginIslands() { // or withVI
    this.push({
      code: 'VI',
      name: 'VIRGIN ISLANDS',
    });
    return this;
  }

  defaults() {
    return [
      {
        code: 'AL',
        name: 'ALABAMA',
      },
      {
        code: 'AK',
        name: 'ALASKA',
      },
      {
        code: 'AZ',
        name: 'ARIZONA',
      },
      {
        code: 'AR',
        name: 'ARKANSAS',
      },
      {
        code: 'CA',
        name: 'CALIFORNIA',
      },
      {
        code: 'CO',
        name: 'COLORADO',
      },
      {
        code: 'CT',
        name: 'CONNECTICUT',
      },
      {
        code: 'DE',
        name: 'DELAWARE',
      },
      {
        code: 'FL',
        name: 'FLORIDA',
      },
      {
        code: 'GA',
        name: 'GEORGIA',
      },
      {
        code: 'HI',
        name: 'HAWAII',
      },
      {
        code: 'ID',
        name: 'IDAHO',
      },
      {
        code: 'IL',
        name: 'ILLINOIS',
      },
      {
        code: 'IN',
        name: 'INDIANA',
      },
      {
        code: 'IA',
        name: 'IOWA',
      },
      {
        code: 'KS',
        name: 'KANSAS',
      },
      {
        code: 'KY',
        name: 'KENTUCKY',
      },
      {
        code: 'LA',
        name: 'LOUISIANA',
      },
      {
        code: 'ME',
        name: 'MAINE',
      },
      {
        code: 'MD',
        name: 'MARYLAND',
      },
      {
        code: 'MA',
        name: 'MASSACHUSETTS',
      },
      {
        code: 'MI',
        name: 'MICHIGAN',
      },
      {
        code: 'MN',
        name: 'MINNESOTA',
      },
      {
        code: 'MS',
        name: 'MISSISSIPPI',
      },
      {
        code: 'MO',
        name: 'MISSOURI',
      },
      {
        code: 'MT',
        name: 'MONTANA',
      },
      {
        code: 'NE',
        name: 'NEBRASKA',
      },
      {
        code: 'NV',
        name: 'NEVADA',
      },
      {
        code: 'NH',
        name: 'NEW HAMPSHIRE',
      },
      {
        code: 'NJ',
        name: 'NEW JERSEY',
      },
      {
        code: 'NM',
        name: 'NEW MEXICO',
      },
      {
        code: 'NY',
        name: 'NEW YORK',
      },
      {
        code: 'NC',
        name: 'NORTH CAROLINA',
      },
      {
        code: 'ND',
        name: 'NORTH DAKOTA',
      },
      {
        code: 'OH',
        name: 'OHIO',
      },
      {
        code: 'OK',
        name: 'OKLAHOMA',
      },
      {
        code: 'OR',
        name: 'OREGON',
      },
      {
        code: 'PA',
        name: 'PENNSYLVANIA',
      },
      {
        code: 'RI',
        name: 'RHODE ISLAND',
      },
      {
        code: 'SC',
        name: 'SOUTH CAROLINA',
      },
      {
        code: 'SD',
        name: 'SOUTH DAKOTA',
      },
      {
        code: 'TN',
        name: 'TENNESSEE',
      },
      {
        code: 'TX',
        name: 'TEXAS',
      },
      {
        code: 'UT',
        name: 'UTAH',
      },
      {
        code: 'VT',
        name: 'VERMONT',
      },
      {
        code: 'VA',
        name: 'VIRGINIA',
      },
      {
        code: 'WA',
        name: 'WASHINGTON',
      },
      {
        code: 'WV',
        name: 'WEST VIRGINIA',
      },
      {
        code: 'WI',
        name: 'WISCONSIN',
      },
      {
        code: 'WY',
        name: 'WYOMING',
      },

    ];
  }
}

let States = new _States;

export default States;
