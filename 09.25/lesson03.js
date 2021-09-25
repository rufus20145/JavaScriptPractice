// factorial(3, console.log);

//обёртка для console.log()
function cl(value, ...str) {
  //str - массив всех аргументов, которые не поместились куда-либо до
  console.log(value, ...str);
}

// cl(123);
// cl(123, 321, 5412, 5123);

// factorial(100, cl);

// var a1 = [1, 2, 3];
// var a2 = a1;
// cl(a1, a2);
// a2[0] = 7;
// cl(a1, a2);

// var a3 = [...a1];
// a1[1] = 544;
// cl(a1, a3);

// var w = { ...window };
// cl(w);

// factorial(1000, cl);

// var o = { value: 5, f: factorial };

// o.f(undefined, cl);

// var oo = { value: 7 };
// o.f.call(oo, undefined, cl);

// o.f.apply(oo, [undefined, cl]);

// f10 = factorial.bind(window, 10);
// f10(cl);

// var f = (x, y) => x + y; // стрелочная функция
// cl("1 + 2 =", f(1, 2));

// var g = () => {
//   var a = prompt();
//   return "Вы ввели:" + a;
// };

// alert(g());

// var x = () => {
//   cl(this);
// };
// x();

// var o = { f: x };
// o.f();
// x.call(o);

// явное и неявное преобразование типов
// cl(5 + "5");
// cl("5" + 5);
// cl(5 + Number("5"));
// cl(5 + "5" * 1);
// cl(Boolean(5));
// cl(!!5);
// cl(Boolean(0));
// cl(!![]);
// cl(!!""); // false: null, undefined, 0, ""

// cl(String(cl));
// cl(String(o));
// o.toString = () => "Hello world";
// cl(String(o));

// cl([] + {});
// cl({} + []);
// cl(String([1, 2, 3, 6, 7, 8, 7, , 7]));
// cl(String([]));
// cl(Number([]));
// cl(Number([1, 2, 3, 4]));
// cl(Number({}));
// cl(Number());
// cl("" + {});
// cl(1 / 2);

function r(min, max) {
  var result;

  if (typeof min != "number") {
    result = undefined;
    cl("Первое не число");
  } else if (typeof max != "number") {
    result = undefined;
    cl("Второе не число");
  } else if (max < min) {
    cl("Второе меньше первого");
    result = undefined;
  } else {
    var tmp = max - min;
    tmp = Math.round(tmp * Math.random());
    result = min + tmp;
  }
  return "" + result;
}

// cl(r(1, 5237894986342638264691286421831263));
// cl(r(9, 9));
// cl(r(7, 99));
// cl(r(17, "ыфв"));
// cl(r("adgakwda", 123));
// cl(r(44, 3));

// function str(value) {}
// str.prototype = new String();

// var s = new String("Hello world");
// cl(s.constructor);
// cl(s.__proto__);
// cl(String.prototype);
// cl(s.__proto__ == String.prototype);
// cl(s.constructor == String);
// cl(s.__proto__ == s.constructor.prototype);

// factorial(3, cl);
// factorial(4, cl);
// factorial(3, cl);

// var s = new String("ChecCKED");
// cl(s instanceof String);
// cl(s.__proto__);
// cl(s.toLowerCase());
// cl(s.length);
// s.__proto__ = Number.prototype;
// cl(s instanceof String);
// cl(s.__proto__);
// cl(s.toLowerCase());
// cl(s.length);
// cl(s instanceof Number);

function Person(name, age) {
  // создали принтер
  this.name = name;
  this.age = age;
}
var _person = {
  //создали прототип
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
};

//сделали связь между ними
Person.prototype = _person;
_person.constructor = Person;

function Student(name, age, university, currCourse) {
  Person.call(this, name, age);
  this.university = university;
  this.currCourse = currCourse;
}
var _student = {
  getUniversity: function () {
    return this.university;
  },
  getCurrCourse: function () {
    return this.currCourse;
  },
};
Student.prototype = _student;
_student.constructor = Student;
Student.prototype.__proto__ = Person.prototype; // лучше обращаться к прототипам через функции,
//т.к. названия прототипов могут меняться или вообще не существовать

// var Vasya = new Person("Vasya", 14);
// cl(Vasya);
// cl(Vasya.getName() + " " + Vasya.getAge());
// cl(Vasya instanceof Person);
// cl(Vasya instanceof Object);

// var Vasilij = new Student("Vasilij", 14, "MAI", 2);
// cl(Vasilij.getUniversity());
// cl(Vasilij.getName());
// cl(Vasilij.getAge());
// cl(Vasilij instanceof Person);

// console.log("Факториал 2 = " + factorial(2));
// console.log("Факториал 2 = " + factorial(2));
// console.log("Факториал 3 = " + factorial(3));
// console.log("Факториал 4 = " + factorial(4));
// console.log("Факториал 10 = " + factorial(10));
// console.log("Факториал 7 = " + factorial(7));
// console.log("Факториал 6 = " + factorial(6));
// console.log("Факториал 100 = " + factorial(100));
// console.log("Факториал 133 = " + factorial(133));
// console.log("Факториал 170 = " + factorial(170));
// console.log("Факториал 250 = " + factorial(250));
// console.log("Факториал 100000 = " + factorial(100000));
// console.log("Факториал 1000000 = " + factorial(1000000));

a(b(c(1)));

a(c(1));

