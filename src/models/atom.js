import Element from 'element.js';
import Emitter from '../core/emitter.js';

var atomIndex = 0;

export class Atom extends Emitter {

  constructor(index = atomIndex++) {
    super();

    this.index = index;
    this.element = false;
    this._data = {};
    this.position = null;
    this._bonds = [];
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

  addBond(bond) {
    this._bonds.push(bond);
  }

  removeBond(bond) {
    this._bonds.splice(this._bonds.indexOf(bond), 1);
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