import Emitter from '../core/emitter.js';

var bondIndex = 0;

export class Bond extends Emitter {

  /**
   * Constructor of Bond
   *
   * @constructor
   * @param begin
   * @param end
   * @param order
   * @param index
   */
    constructor(begin, end, order = 1, index = bondIndex++) {
    super();

    this.index = index;
    this.begin = begin;
    this.end = end;
    this._order = order;
    this._data = {};

    this.on('delete', () => {
      this.begin.removeBond(this);
      this.end.removeBond(this);
    });
  }

  /**
   * The first atom of bond
   *
   * @property {Atom} begin
   */
  set begin(begin) {
    this._begin = begin;

    begin.addBond(this);
    begin.emit('bond', this);
    this.emit('atomset', 'begin', begin);
  }

  get begin() {
    return this._begin;
  }

  /**
   * The second atom of bond
   *
   * @property {Atom} end
   */
  set end(end) {
    this._end = end;

    end.addBond(this);
    end.emit('bond', this);
    this.emit('atomset', 'end', end);
  }

  get end() {
    return this._end;
  }

  /**
   * Order of bond
   *
   * @property {Number} order
   */
  set order(order) {
    this._order = order;
    this.emit('order', order);
  }

  get order() {
    return this._order;
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
   * Returns the atom which is not equal to given atom.
   *
   * @method getPartner
   * @param atom
   * @returns {*}
   */
    getPartner(atom) {
    if (this._begin === atom) {
      return this._end;
    } else if (this._end === atom) {
      return this._begin;
    } else {
      throw 'The given atom is not a part of this bond';
    }
  }

  /**
   * Returns the position of atom whether it's begin or end
   *
   * @throws error if the given atom is not part of this bond
   * @method getPositionOfAtom
   * @param atom
   * @returns {string}
   */
    getPositionOfAtom(atom) {
    if (this._begin === atom) {
      return 'begin';
    } else if (this._end === atom) {
      return 'end';
    } else {
      throw 'The given atom is not a part of this bond';
    }
  }

  delete() {
    this.emit('delete');
  }

  /**
   * Returns the bond JSON representation.
   *
   * @method toJSON
   * @returns {{begin: (Atom.toJSON.index|*|.toJSON.value.index|Number|number|Atom.index), end: (Atom.toJSON.index|*|.toJSON.value.index|Number|number|Atom.index), order: *}}
   */
    toJSON() {
    return {
      begin: this.begin.index,
      end: this.end.index,
      order: this.order
    };
  }

}