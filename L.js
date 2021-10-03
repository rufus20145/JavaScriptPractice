//тут будут функции, которые используются в нескольких файлах, и мы выносим их в отдельный файл
/**
 * функция для подсчёта факториала с умным кешем
 * @param {*} num
 * @param {*} callBackFunction
 * @returns
 */
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
  if (typeof num != "number" && typeof num != "number") {
    result = undefined;
  }
  // Проверка: Число больше или равно 0
  else if (num < 0) {
    result = undefined;
  } else {
    if (typeof num == "number") {
      num = BigInt(num);
    }

    // проверяем на наличие в кеше
    if (typeof factorial.resultList[num] == "bigint") {
      console.log("Есть попадание в кеш! Считали значение для " + num);
      result = factorial.resultList[num];
    } else {
      for (var offset = 0n; offset < num; offset++) {
        if (typeof factorial.resultList[num + offset] == "bigint") {
          console.log(
            "Нашли в кеше значение факториала для большего числа: " +
              (num + offset) +
              ". Теперь будем делить его до необходимого."
          );
          preResult = factorial.resultList[num + offset];
          preResultIndex = num + offset;
          break;
        }
        if (typeof factorial.resultList[num - offset] == "bigint") {
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

      if (typeof preResult == "bigint") {
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
        result = 1n;

        // Цикл: от 1 до Число включительно
        for (var i = 1n; i <= num; i++) {
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
        // if (callBackFunction == console.log) {
        callBackFunction("Факториал " + num + " равен " + result);
        // }
        // callBackFunction(result);
      }
    }
    return result;
    //   возвращаем Результат
  }
}

function a(val) {
  alert(val);
  return val;
}

function b(val, isClear = false) {
  var body = document.getElementsByTagName("body")[0];
  if (isClear) {
    body.innerHTML = "";
  }
  body.innerHTML += val;
  return val;
}

function c(val, ...values) {
  console.log(val, ...values);
  return val;
}

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
  return result;
}

