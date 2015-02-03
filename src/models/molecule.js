import Emitter from '../core/emitter.js';

export class Molecule extends Emitter {

  /**
   * Constructor of molecule
   *
   * @constructor
   */
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

  /**
   * Invokes the given callback for each atom
   *
   * @method forEachAtom
   * @param callback
   */
  forEachAtom(callback) {
    var atoms = this.atoms;
    for (var i in atoms) {
      callback.apply(atoms[i], [this]);
    }
  }


  /**
   * Invokes the given callback for each bond
   *
   * @method forEachBond
   * @param callback
   */
  forEachBond(callback) {
    var bonds = this.bonds;
    for (var i in bonds) {
      callback.apply(bonds[i], [this]);
    }
  }

  /**
   * Inject some data
   *
   * @method setData
   * @param key
   * @param value
   * @returns {Bond}
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
   * Returns the molecule JSON representation.
   *
   * @returns {{atoms: *, bonds: *}}
   */
  toJSON() {
    return {
      atoms: this.atoms,
      bonds: this.bonds
    };
  }

  static readJSON(json) {
    var molecule = new Molecule(),
      atoms = [],
      i;

    for (i in json.atoms) {
      let data = json.atoms[i];
      let atom = new Chem.Atom();

      atom.atomicNumber = data.atomicNumber;

      if (typeof LiThree !== 'undefined') {
        atom.position = new LiThree.Math.Vector3(data.position.x, data.position.y, data.position.z);
      } else {
        atom.position = data.position;
      }

      atoms[i] = atom;
      molecule.addAtom(atom);
    }

    for (i in json.bonds) {
      let data = json.bonds[i];
      let bond = new Chem.Bond(atoms[data.begin], atoms[data.end]);

      bond.order = data.order;

      molecule.addBond(bond);
    }

    return molecule;
  }

}