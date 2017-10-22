import Collection from '../Collection';

class _States {
  
  constructor() {
    this.data = this.defaults();
  }

  other() {
    console.log('something weird');
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
        code: 'AS',
        name: 'AMERICAN SAMOA',
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
        code: 'DC',
        name: 'DISTRICT OF COLUMBIA',
      },
      {
        code: 'FM',
        name: 'FEDERATED STATES OF MICRONESIA',
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
        code: 'GU',
        name: 'GUAM GU',
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
        code: 'MH',
        name: 'MARSHALL ISLANDS',
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
        code: 'MP',
        name: 'NORTHERN MARIANA ISLANDS',
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
        code: 'PW',
        name: 'PALAU',
      },
      {
        code: 'PA',
        name: 'PENNSYLVANIA',
      },
      {
        code: 'PR',
        name: 'PUERTO RICO',
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
        code: 'VI',
        name: 'VIRGIN ISLANDS',
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
      {
        code: 'AE',
        name: 'ARMED FORCES AFRICA \ CANADA \ EUROPE \ MIDDLE EAST',
      },
      {
        code: 'AA',
        name: 'ARMED FORCES AMERICA (EXCEPT CANADA)',
      },
      {
        code: 'AP',
        name: 'ARMED FORCES PACIFIC'
      },
    ];
  }
}
/*
 Could do multiple inheritance
 let States = new Proxy({ self: new _States, collection: new Collection}, {
*/

/* 
 Maybe we'll just do Classception
 let States = new Proxy(new Collection(new _States)) {

*/
let States = new Proxy(new Collection(new _States), { 


  // get: function (target, name, receiver) {
  //   console.log('target', target);
  //   console.log('name', name);
  //   console.log('receiver', receiver);

  //   if (name in target.__proto__) { // assume methods live on the prototype
  //     return function (...args) {
  //       var methodName = name;
  //       // we now have access to both methodName and arguments
  //     };
  //   } else { // assume instance vars like on the target
  //     return Reflect.get(target, name, receiver);
  //   }
  // }
  
  get: function (collection, prop) {
    console.log('collection', collection);
    console.log('prop', prop);
      let klass = null;
      let method = null;
      if (name in collection.guest.__proto__) { // assume methods live on the prototype
        console.log('name', name);
        console.log('args', ...args);
        klass = collection.guest;
        method = klass[name];
        console.log('klass',klass);
        console.log('method', method);
        /* return function (...args) {
          var methodName = name;
          // we now have access to both methodName and arguments
        }; */
      } else { // assume instance vars like on the target
        klass =  Reflect.get(collection.guest, name, prop);
        return klass;
      }
  }
});

export default States;