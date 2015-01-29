import Element from 'element.js';

export class Atom {

  constructor() {
    this.element = false;
    this._data = {};
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

}