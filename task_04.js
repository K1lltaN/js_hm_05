class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value = this.value + str;
  }

  prepend(str) {
    this._value = str + this.value;
  }

  pad(str) {
    this._value = str + this.value + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.value);

builder.append("^");
console.log(builder.value); //
builder.prepend("^");
console.log(builder.value); //
builder.pad("=");
console.log(builder.value); //
