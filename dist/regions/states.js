'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Collection = require('../Collection');

var _Collection2 = _interopRequireDefault(_Collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _States = function () {
  function _States() {
    _classCallCheck(this, _States);

    this.data = this.defaults();
  }

  _createClass(_States, [{
    key: 'other',
    value: function other() {}
  }, {
    key: 'defaults',
    value: function defaults() {
      return [{
        code: 'AL',
        name: 'ALABAMA'
      }, {
        code: 'AK',
        name: 'ALASKA'
      }, {
        code: 'AS',
        name: 'AMERICAN SAMOA'
      }, {
        code: 'AZ',
        name: 'ARIZONA'
      }, {
        code: 'AR',
        name: 'ARKANSAS'
      }, {
        code: 'CA',
        name: 'CALIFORNIA'
      }, {
        code: 'CO',
        name: 'COLORADO'
      }, {
        code: 'CT',
        name: 'CONNECTICUT'
      }, {
        code: 'DE',
        name: 'DELAWARE'
      }, {
        code: 'DC',
        name: 'DISTRICT OF COLUMBIA'
      }, {
        code: 'FM',
        name: 'FEDERATED STATES OF MICRONESIA'
      }, {
        code: 'FL',
        name: 'FLORIDA'
      }, {
        code: 'GA',
        name: 'GEORGIA'
      }, {
        code: 'GU',
        name: 'GUAM GU'
      }, {
        code: 'HI',
        name: 'HAWAII'
      }, {
        code: 'ID',
        name: 'IDAHO'
      }, {
        code: 'IL',
        name: 'ILLINOIS'
      }, {
        code: 'IN',
        name: 'INDIANA'
      }, {
        code: 'IA',
        name: 'IOWA'
      }, {
        code: 'KS',
        name: 'KANSAS'
      }, {
        code: 'KY',
        name: 'KENTUCKY'
      }, {
        code: 'LA',
        name: 'LOUISIANA'
      }, {
        code: 'ME',
        name: 'MAINE'
      }, {
        code: 'MH',
        name: 'MARSHALL ISLANDS'
      }, {
        code: 'MD',
        name: 'MARYLAND'
      }, {
        code: 'MA',
        name: 'MASSACHUSETTS'
      }, {
        code: 'MI',
        name: 'MICHIGAN'
      }, {
        code: 'MN',
        name: 'MINNESOTA'
      }, {
        code: 'MS',
        name: 'MISSISSIPPI'
      }, {
        code: 'MO',
        name: 'MISSOURI'
      }, {
        code: 'MT',
        name: 'MONTANA'
      }, {
        code: 'NE',
        name: 'NEBRASKA'
      }, {
        code: 'NV',
        name: 'NEVADA'
      }, {
        code: 'NH',
        name: 'NEW HAMPSHIRE'
      }, {
        code: 'NJ',
        name: 'NEW JERSEY'
      }, {
        code: 'NM',
        name: 'NEW MEXICO'
      }, {
        code: 'NY',
        name: 'NEW YORK'
      }, {
        code: 'NC',
        name: 'NORTH CAROLINA'
      }, {
        code: 'ND',
        name: 'NORTH DAKOTA'
      }, {
        code: 'MP',
        name: 'NORTHERN MARIANA ISLANDS'
      }, {
        code: 'OH',
        name: 'OHIO'
      }, {
        code: 'OK',
        name: 'OKLAHOMA'
      }, {
        code: 'OR',
        name: 'OREGON'
      }, {
        code: 'PW',
        name: 'PALAU'
      }, {
        code: 'PA',
        name: 'PENNSYLVANIA'
      }, {
        code: 'PR',
        name: 'PUERTO RICO'
      }, {
        code: 'RI',
        name: 'RHODE ISLAND'
      }, {
        code: 'SC',
        name: 'SOUTH CAROLINA'
      }, {
        code: 'SD',
        name: 'SOUTH DAKOTA'
      }, {
        code: 'TN',
        name: 'TENNESSEE'
      }, {
        code: 'TX',
        name: 'TEXAS'
      }, {
        code: 'UT',
        name: 'UTAH'
      }, {
        code: 'VT',
        name: 'VERMONT'
      }, {
        code: 'VI',
        name: 'VIRGIN ISLANDS'
      }, {
        code: 'VA',
        name: 'VIRGINIA'
      }, {
        code: 'WA',
        name: 'WASHINGTON'
      }, {
        code: 'WV',
        name: 'WEST VIRGINIA'
      }, {
        code: 'WI',
        name: 'WISCONSIN'
      }, {
        code: 'WY',
        name: 'WYOMING'
      }, {
        code: 'AE',
        name: 'ARMED FORCES AFRICA \ CANADA \ EUROPE \ MIDDLE EAST'
      }, {
        code: 'AA',
        name: 'ARMED FORCES AMERICA (EXCEPT CANADA)'
      }, {
        code: 'AP',
        name: 'ARMED FORCES PACIFIC'
      }];
    }
  }]);

  return _States;
}();

var States = new Proxy({ self: new _States(), collection: new _Collection2.default(new _States()) }, {

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

  get: function get(targets, prop) {
    console.log('targets', targets);
    console.log('prop', prop);
    if (parent) {
      console.log('parent', parent);
    }
    var foundParent = targets.find(function (parent) {
      return parent[prop] !== undefined;
    });
    targets.forEach(function (t) {
      console.log(t);
      if (name in t.__proto__) {
        var _console;

        // assume methods live on the prototype
        console.log('name', name);
        (_console = console).log.apply(_console, ['args'].concat(_toConsumableArray(args)));

        /* return function (...args) {
          var methodName = name;
          // we now have access to both methodName and arguments
        }; */
      } else {
        // assume instance vars like on the target
        var reflection = Reflect.get(targets, name, receiver);
        console.log(reflection);
        return reflection;
      }
    });
    console.log('foundparent', foundParent);
    return foundParent && foundParent[prop];
  }
});

exports.default = States;