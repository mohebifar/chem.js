import Element from 'element.js';
import Emitter from '../core/emitter.js';

var atomIndex = 0;

export class Atom extends Emitter {

  /**
   * @constructor
   * @param index
   */
    constructor(index = atomIndex++) {
    super();

    this.index = index;
    this.element = false;
    this._data = {};
    this.position = null;
    this._bonds = [];

    this.on('delete', () => {
      let bonds = this.bonds.slice(0, this.bonds.length);
      for (let bond of bonds) {
        bond.delete();
      }
    });
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

  /**
   * Get list of bonds
   *
   * @readonly
   * @property {Bond[]} bonds
   */
  get bonds() {
    return this._bonds;
  }


  /**
   * Inject some data
   *
   * @method setData
   * @param key
   * @param value
   * @returns {*}
   */
    setData(key, value) {
    this._data[key] = value;
    return this;
  }

  /**
   * Get injected data
   *
   * @method getData
   * @param key
   * @returns {*}
   */
    getData(key) {
    return this._data[key];
  }

  /**
   * Checks if data with given key exists
   *
   * @method hasData
   * @param key
   * @returns {boolean}
   */
    hasData(key) {
    return typeof this._data[key] !== 'undefined';
  }

  /**
   * Add a bond to atom
   *
   * @method addBond
   * @param bond
   */
    addBond(bond) {
    this._bonds.push(bond);
  }

  /**
   * Remove a bond from atom
   *
   * @method removeBond
   * @param bond
   */
    removeBond(bond) {
    let _bonds = this._bonds;

    _bonds.splice(_bonds.indexOf(bond), 1);
  }

  delete() {
    this.emit('delete');
  }


  /**
   * Checks if this atom is connected to given atom
   *
   * @method isConnected
   * @param {Atom} atom
   */
  isConnected(atom) {
    for (let bond in this.bonds) {
      if (bond.getPartner(this) === atom) {
        return true;
      }
    }

    return false;
  }

  /**
   * Returns the bond JSON representation.
   *
   * @returns {{index: (Atom.index|*), atomicNumber: *, symbol: (*|symbol|Elements.symbol|Atom.toJSON.symbol|.toJSON.value.symbol|c.symbol), position: (Atom.position|*)}}
   */
    toJSON() {
    return {
      index: this.index,
      atomicNumber: this.atomicNumber,
      symbol: this.element.symbol,
      position: this.position
    };
  }

}