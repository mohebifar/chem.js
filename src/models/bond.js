var bondIndex = 0;

export class Bond {

  constructor(begin, end, order = 1, index = bondIndex++) {
    this.index = index;
    this._begin = begin;
    this._end = end;
    this._order = order;
    this._data = {};
  }

  set begin(begin) {
    this._begin = begin;
  }

  get begin() {
    return this._begin;
  }

  set end(end) {
    this._end = end;
  }

  get end() {
    return this._end;
  }

  set order(order) {
    this._order = order;
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

  toJSON() {
    return {
      begin: this.begin.index,
      end: this.end.index,
      order: this.order
    };
  }

}