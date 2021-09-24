function factorial(num, callBackFunction) {
  // Объявляем переменную Результат, Предрезультат и индекс предрезультата
  var result;
  var preResult;
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
      num = this.value;
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
    console.log("Есть попадание в кеш! Считали значение для " + num);
    result = factorial.resultList[num];
  } else {
    for (var offset = 0; offset < num; offset++) {
      if (typeof factorial.resultList[num + offset] == "number") {
        console.log(
          "Нашли в кеше значение факториала для большего числа: " +
            (num + offset) +
            ". Теперь будем делить его до необходимого."
        );
        preResult = factorial.resultList[num + offset];
        preResultIndex = num + offset;
        break;
      }
      if (typeof factorial.resultList[num - offset] == "number") {
        console.log(
          "Нашли в кеше значение факториала для меньшего числа: " +
            (num - offset) +
            ". Теперь будем умножать его до необходимого."
        );
        preResult = factorial.resultList[num - offset];
        preResultIndex = num - offset;
        break;
      }
    }

    if (typeof preResult == "number") {
      result = preResult;
      if (preResultIndex > num) {
        // нашли предрезультат после искомого - надо делить до искомого
        for (var i = preResultIndex; i > num; i--) {
          result /= i;
        }
      } else {
        // нашли предрезультат перед искомым - надо домножать
        // до искомого включительно (по определению факториала)
        for (var i = ++preResultIndex; i <= num; i++) {
          result *= i;
        }
      }
    } else {
      //   инициализируем результат
      result = 1;

      // Цикл: от 1 до Число включительно
      for (var i = 1; i <= num; i++) {
        // Результат = Результат * переменная цикла
        result *= i;
      }
    }

    // помещаем посчитанное значение в кеш
    factorial.resultList[num] = result;
    console.error(factorial.resultList[num] + " записано в кеш");
  }

  // если вызвано как конструктор
  if (this.constructor == factorial) {
    this.value = num;
    this.factorial = result;
  } else {
    //вызываем функцию обратного вызова при её наличии
    if (typeof callBackFunction == "function") {
      callBackFunction(result);
    }
    return result;
    //   возвращаем Результат
  }
}

console.log("Факториал 2 = " + factorial(2));
console.log("Факториал 2 = " + factorial(2));
console.log("Факториал 3 = " + factorial(3));
console.log("Факториал 4 = " + factorial(4));
console.log("Факториал 10 = " + factorial(10));
console.log("Факториал 7 = " + factorial(7));
console.log("Факториал 6 = " + factorial(6));
console.log("Факториал 100 = " + factorial(100));
console.log("Факториал 133 = " + factorial(133));
console.log("Факториал 170 = " + factorial(170));

/*
for (var j = 0; j < 172; j++) {
  factorial(j, console.log);
}
*/

//проблема при делении
factorial(33, console.log);
factorial(17, console.log);
