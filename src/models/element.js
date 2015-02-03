import Elements from '../data/elements.js';

export class Element {

  /**
   * Constructor of element
   */
  constructor() {
    this.atomicNumber = 0;
    this.name = '';
    this.symbol = '';
    this.color = 0xffffff;
  }

  /**
   * @static
   * @method createFromData
   * @param {Object} data
   * @returns {Element}
   */
  static createFromData(data) {
    var element = new Element();
    element.atomicNumber = data.atomicNumber;
    element.atomicRadius = data.atomicRadius;
    element.color = data.color;
    element.name = data.name;
    element.symbol = data.symbol;

    return element;
  }

  /**
   * @static
   * @method findByAtomicNumber
   * @param {Number} atomicNumber
   * @returns {Element|boolean}
   */
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