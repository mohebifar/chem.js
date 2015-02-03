var
  elements = require('./src/data/elements.json'),
  fs = require('fs');

var data = {};

for (var i in elements) {

  var element = elements[i];

  data[element.atomic_number] = {
    name: i,
    color: parseInt(element.color, 16),
    atomicNumber: element.atomic_number,
    atomicWeight: element.atomic_weight,
    symbol: element.symbol,
    atomicRadius: element['atomic_radius pm']
  };

}

var json = JSON.stringify(data);

fs.writeFileSync('src/data/elements.js', 'export var Elements = ' + json + ';');