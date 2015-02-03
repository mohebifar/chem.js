import Emitter from '../core/emitter.js';

export class Molecule extends Emitter {

  constructor() {
    super();

    this.id = 0;
    this._atoms = [];
    this._bonds = [];
    this._data = {};
  }

  /**
   * Add an atom to the molecule
   *
   * @method addAtom
   * @param atom
   */
  addAtom(atom) {
    this._atoms.push(atom);
  }

  /**
   * Add a bond to the molecule
   *
   * @method addBond
   * @param bond
   */
  addBond(bond) {
    this._bonds.push(bond);
  }

  /**
   * Remove a bond from molecule
   *
   * @method deleteAtom
   * @param {Atom} atom
   */
  deleteAtom(atom) {
    this._atoms.splice(atom, 0, 1);
  }

  /**
   * Remove a bond from molecule
   *
   * @method deleteBond
   * @param {Bond} bond
   */
  deleteBond(bond) {
    this._bonds.splice(bond, 0, 1);
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
   * Get list of atoms
   *
   * @readonly
   * @property {Atom[]} atoms
   */
  get atoms() {
    return this._atoms;
  }

  forEachAtom(callback) {
    var atoms = this.atoms;
    for (var i in atoms) {
      callback.apply(atoms[i], [this]);
    }
  }

  forEachBond(callback) {
    var bonds = this.bonds;
    for (var i in bonds) {
      callback.apply(bonds[i], [this]);
    }
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
      atoms: this.atoms,
      bonds: this.bonds
    };
  }

}