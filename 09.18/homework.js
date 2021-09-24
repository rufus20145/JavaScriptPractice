function factorial(num, callBackFunction) {
  // console.log("Мы сейчас в " + this);
  // console.time("factorial");

  // Объявляем переменную Результат
  var result;
  var preResult;
  var foundPreResult = false;
  var preResultIndex;

  //инициализируем кеш
  if (typeof factorial.resultList != "object") {
    factorial.resultList = {};
  }

  //инициализируем счётчик количества запусков
  if (typeof factorial.count != "number") {
    factorial.count = 0;
  }

  //увеличиваем счётчик
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
    for (var index = num; index > 0; index--) {
      if (typeof factorial.resultList[index] == "number") {
        console.log(
          "       Нашли в кеше значение факториала для " +
            index +
            ". Теперь досчитываем его до необходимого"
        );
        preResult = factorial.resultList[index];
        preResultIndex = index;
        foundPreResult = true;
        break;
      }
    }

    if (foundPreResult) {
      result = preResult;
      for (var i = preResultIndex + 1; i <= num; i++) {
        result *= i;
      }
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
    }

    // помещаем данные в кеш
    factorial.resultList[num] = result;
    console.log(factorial.resultList[num] + " записано в кеш");
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

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(10));
console.log(factorial(100));
console.log(factorial(133));
console.log(factorial(170));
