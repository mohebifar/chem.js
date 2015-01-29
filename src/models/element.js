import Elements from '../data/elements.js';

export class Element {

  constructor() {
    this.atomicNumber = 0;
    this.name = '';
    this.symbol = '';
    this.color = 0xffffff;
  }

  static createFromData(data) {
    var element = new Element();
    element.atomicNumber = data.atomicNumber;
    element.name = data.name;
    element.symbol = data.symbol;
    element.color = data.color;

    return element;
  }

  static findByAtomicNumber(atomicNumber) {
    for (var i in Elements) {
      var element = Elements[i];

      if (element.atomicNumber === atomicNumber) {
        return Element.createFromData(element);
      }
    }

    return false;
  }

}