'use strict';

var chemjs = require('../lib/chemjs.js');
var elements = require('../lib/data/elements/repository');
console.log(elements.findBy({
        symbol: "H"
    })
);
chemjs.awesome();
// => awesome