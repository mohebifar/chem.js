import Element from 'element.js';

var atomIndex = 0;

export class Atom {

  constructor(index = atomIndex++) {
    this.index = index;
    this.element = false;
    this._data = {};
    this.position = null;
  }

  /**
   * Set element for the atom
   *
   * @param {Element} element
   */
  setElement(element) {
    this.element = element;
  }

  /**
   * Atomic Number
   *
   * @property {Number} atomicNumber
   */
  get atomicNumber() {
    return this.element.atomicNumber;
  }

  set atomicNumber(atomicNumber) {
    this.setElement(Element.findByAtomicNumber(atomicNumber));
  }

  setData(key, value) {
    this._data[key] = value;
    return this;
  }

  getData(key) {
    return this._data[key];
  }

  hasData(key) {
    return typeof this._data[key] !== 'undefined';
  }

  toJSON() {
    return {
      index: this.index,
      atomicNumber: this.atomicNumber,
      symbol: this.element.symbol,
      position: this.position
    };
  }

}