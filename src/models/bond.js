import Emitter from '../core/emitter.js';

var bondIndex = 0;

export class Bond extends Emitter {

  constructor(begin, end, order = 1, index = bondIndex++) {
    super();

    this.index = index;
    this._begin = begin;
    this._end = end;
    this._order = order;
    this._data = {};
  }

  set begin(begin) {
    this._begin = begin;
    this.emit('atomset', 'begin', begin);
    end.emit('bond', this);
  }

  get begin() {
    return this._begin;
  }

  set end(end) {
    this._end = end;
    this.emit('atomset', 'end', end);
    end.emit('bond', this);
  }

  get end() {
    return this._end;
  }

  set order(order) {
    this._order = order;
    this.emit('order', order);
  }

  get order() {
    return this._order;
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

  getPartner(atom) {
    if (this._begin === atom) {
      return this._end;
    } else if (this._end === atom) {
      return this._begin;
    } else {
      throw 'The given atom is not a part of this bond';
    }
  }

  getPositionOfAtom(atom) {
    if (this._begin === atom) {
      return 'begin';
    } else if (this._end === atom) {
      return 'end';
    } else {
      throw 'The given atom is not a part of this bond';
    }
  }

  toJSON() {
    return {
      begin: this.begin.index,
      end: this.end.index,
      order: this.order
    };
  }

}