// var o1 = {};
// var o2 = {};

// console.log(o1 == o2);
// console.log(o1 < o2);
// console.log(o1 <= o2); // равносильно следующей строке
// console.log(!(o1 > o2));
console.log(factorial(10));

// функция для подсчёта факториала
// пишем в псевдокодах
// используем принцип оборонительного программирования
// без использования рекурсии

// обычная функция
// функция факториал (Число)
function factorial(num, callBackFunction) {
  // console.log("Мы сейчас в " + this);
  // console.time("factorial");

  // Объявляем переменную Результат
  var result;

  //инициализируем кеш
  if (typeof factorial.resultList != "object") {
    factorial.resultList = {};
  }

  //инициализируем счётчик количества запусков
  if (typeof factorial.count != "number") {
    factorial.count = 0;
  }
  factorial.count++;

  //Если не было передано ничего
  if (num == undefined) {
    //Если у объекта есть св-во value, то рассчитываем его факториал
    if (typeof this.value == "number") {
      // console.log("Сработало");
      num = this.value;
      // console.log("num = " + num);
    } else {
      result = undefined;
    }
  }

  // проверка: Тип число = число
  if (typeof num != "number") {
    result = undefined;
  }
  // Проверка: Число больше или равно 0
  else if (num < 0) {
    result = undefined;
  }
  // Проверка: Максимальное значение не выше допустимого
  else if (num > Number.MAX_SAFE_INTEGER) {
    result = undefined;
  }
  // Проверка: Число должно быть целым
  else if (Math.floor(num) != num) {
    result = undefined;
  }
  // проверяем на наличие в кеше
  else if (typeof factorial.resultList[num] == "number") {
    console.error("Считано значение из кеша");
    result = factorial.resultList[num];
  } else {
    //   инициализируем результат
    result = 1;

    // Цикл: от 1 до Число включительно
    for (var i = 1; i <= num; i++) {
      //     console.log("i = " + i);
      //     console.log("result = " + result);
      // Результат = Результат * переменная цикла
      result *= i;
    }

    // помещаем данные в кеш
    factorial.resultList[num] = result;
    console.error(factorial.resultList[num] + " записано в кеш");
  }

  // если вызвано как конструктор
  if (this.constructor == factorial) {
    this.value = num;
    this.factorial = result;
  } else {
    // console.timeEnd("factorial");
    if (typeof callBackFunction == "function") {
      callBackFunction(result);
    }
    return result;
  }
  //   возвращаем Результат
}

// функция как метод
var o = { f: factorial, value: 0 };
console.log(o.f(7));
console.log(o.f());

// var obj = {
//   f: function (x, y) {
//     return x + y;
//   },
// };
// console.log(obj.f(5, 7));
// var ffff = obj.f;
// console.log(ffff(5, 7));

// var num = new factorial(11);
// console.log(num);

// var n = new Number(5);
// console.log(n.constructor == Number);
// console.log(n);

// console.log("1" == 1);
// console.log("1" === 1);

// console.log(factorial.count);
// factorial.count = "qqq";
// console.log(factorial.count);
// factorial(1);
// console.log(factorial.count);

console.log(factorial(100));
console.log(factorial(100));
factorial(10, console.log);
// factorial(10, alert);
// msg("<div>TESTTEST</div>");
//логические операции
// console.log(1 && 2);
// console.log(1 && 0);
// console.log(0 && 1);

// console.log(1 || 2);
// console.log(1 || 0);
// console.log(0 || 1);

//своя функция вывода на экран
function msg(string) {
  var abc = document.getElementsByTagName("body");
  console.log(abc);
  console.log(abc.length);
  console.log(abc[0]);
  // abc.innerHTML = string;
  // console.log(abc);
}

function f(_delta = 1) {
  var _count = 0;

  return function (delta = _delta) {
    _count += delta;
    return _count;
  };
}

var medium = f();
console.log(medium());
console.log(medium());
console.log(medium());
console.log(medium());
console.log(medium(100));

var medium100 = f(100);
console.log(medium100());
console.log(medium100());
console.log(medium100());
console.log(medium100());

(function (x, y) {
  console.log(x + y);
})(1, 2);

var medium20 = (function (_delta = 1) {
  var _count = 0;

  return function (delta = _delta) {
    _count += delta;
    return _count;
  };
})(20);
console.log(medium20());
console.log(medium20());
console.log(medium20());

var add = (function () {
  var _count = 0;
  var f = function (x, y) {
    _count++;
    return x + y;
  };
  f.count = function () {
    return _count;
  };
  return f;
})();

console.log("QQQ");
console.log(add(1, 2));
console.log(add(3, 4));
console.log(add(5, 8));
console.log("Количество запусков: " + add.count());

var factorial = (function (_f) {
  var _count = 0;
  var f = function (n) {
    _count++;
    return _f(n);
  };
  f.getCount = function () {
    return _count;
  };
  return f;
})(factorial);

qqq = factorial;

console.log(factorial(7));
console.log(factorial(151));
console.log(factorial(57));
qqq(5);
qqq(65);
qqq(6);
console.log(factorial.getCount());

//перебиваем функцию факториала
var factorial = function (x) {
  return x;
};

console.log(factorial(10));


// ДЗ в функции факториала улучшить кеш так, чтобы при подсчете брался ближайший элемент в кеше