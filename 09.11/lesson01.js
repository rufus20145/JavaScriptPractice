// работа с консолью
// console.log("Hello world");
// console.error("my first error");
// console.group("First group");
// console.log(1);
// console.log(2);
// console.log(3);
// console.groupEnd();
// console.groupCollapsed("Second group");
// console.log(1);
// console.log(2);
// console.log(3);
// console.groupEnd();

//первая работа с переменными
// i = 5;
// console.log("i =", i);
// console.log(window.i);
// function test() {
//   var i = 7;
//   console.log(i, window.i);
// }
// test();

// if (i >= 5) {
//   console.log("i > 5");
// }

//вторая работа с переменными
// i = 1;
// var j = 2;
// let k = 3;
// const c = 7;

// c = 28;// присвоение значения константе

// function test2() {
//   var i, j;
//   (i = 10), (j = 20);
//   window.console.log(i, j);
// }

// test2();

// {
//   let k = 5;
//   console.log("k = ", k);
//   var j = 7;
//   console.log("j = ", j);
// }

// console.log("k = ", k);
// console.log("j = ", j);

// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

// i = 0;

// while (i < 11) {
//   console.log(i++);
// }

// condition = false;

// do {
//   console.log(true);
// } while (condition);

//работа с конструкторами
var i = new Number(5);
console.log(i.toExponential());
console.log(i + 10);
console.log(i.toString() + 10);

i.toString = function () {
  return "1412412fields";
};

console.log(i + 10);
console.log(i.toString() + 10);

var s = new String("1235sda");

console.log(s.length);

var b = new Boolean(true);
console.log(b.valueOf());

var d = new Date();
console.log(
  d.getTime(),
  d.getMonth(),
  d.getDate(),
  d.getFullYear(),
  d.getTimezoneOffset()
);

var a = new Array(10);
console.log(a.toString());
console.log(a[0]);

a.length = 1000;

console.log(a.toString());
console.log(a[0]);

var o = new Object();
console.log(o);
console.log(o.__proto__);
console.log(o.__proto__.__proto__);

o.qqq = 10;
console.log(o);

var b = new Object();
b.__proto__ = o;
console.log(b.qqq);
b.qqq = 27;
console.log(b.qqq, b.__proto__.qqq);

var o = { qqq: 5 };
console.log(o);

var man = {
  name: "Иван",
  lastName: "Муравьев",
  age: "19",
  fullName: function () {
    return this.name + " " + this.lastName;
  },
};
console.log(man.fullName());

var m = {
  fullName: function () {
    return this.name + " " + this.lastName;
  },
};

function Man(name, lastName, age) {
  var man = {};
  man.name = name;
  man.lastName = lastName;
  man.age = age;
  man.__proto__ = Man.prototype;
  return man;
}
Man.prototype = m;

console.log(new Man("Muravev", "Ivan", 19).fullName());
