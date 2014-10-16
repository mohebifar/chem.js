/**
 * Created by mohamad on 10/16/14.
 */

var _ = require('underscore');
var data = require('./elements.json');

exports.findBy = function(criteria) {
    return _.filter(data, _.matches(criteria));
};

exports.findBySymbol = function(symbol) {
    return exports.findBy({
        "symbol": symbol
    });
};

exports.findByAtomicNumber = function(atomicNumber) {
    return exports.findBy({
        "atomic_number": atomicNumber
    });
};

