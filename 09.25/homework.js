//изменить класс String так, чтобы на вход можно было подать массив строк,
//и при вызове valueOf получать случайную строку из массива

function MagicString(...array) {
  this.array = array;
  this.numberOfStrings = array.length;
}

var _str = {
  valueOf() {
    var stringToPrintNumber =
      Math.round(this.numberOfStrings * Math.random()) % 10;
    c(stringToPrintNumber);
    return this.array[stringToPrintNumber];
  },
  toString() {
    var stringToPrintNumber =
      Math.round(this.numberOfStrings * Math.random()) % 10;
    c(stringToPrintNumber);
    return this.array[stringToPrintNumber];
  },
};

MagicString.prototype = _str;
_str.constructor = MagicString;
MagicString.prototype.__proto__ = String;

var s = new MagicString(
  "Hello",
  "World",
  "AAAA",
  "BBBBB",
  "CCCCCC",
  "DDDDDD",
  "EEEEEE",
  "FFFFFFFF",
  "GGGGGGGGG",
  "HHHHHHHHHHH"
);
a(s);
b(s.valueOf());
c(s);
