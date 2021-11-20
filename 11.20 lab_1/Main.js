(function () {
  const horizontalCells = 6,
    verticalCells = 8,
    cellWidth = 40,
    elemID = "sokobanGame";

  var store = new Store(horizontalCells, verticalCells, 2);
  var storekeeper = new Storekeeper(1, 1, store);
  c(storekeeper);
  c(store);

  var fieldWidth = horizontalCells * cellWidth,
    fieldHeight = verticalCells * cellWidth;
  document.getElementById(elemID).innerHTML = `
    <canvas style='width:${fieldWidth}px; height:${fieldHeight}px' id='cnvs' width='${fieldWidth}' height='${fieldHeight}'></canvas>
    <p>
      <button id='up'>Вверх</button>
    </p>
    <p>
      <button id='left'>Влево</button>
      <button id='right'>Вправо</button>
    </p>
    <p>
      <button id='down'>Вниз</button>
    </p>

    `;
  canvas = document.getElementById("cnvs");
  context = canvas.getContext("2d");
  for (var y = 0; y <= verticalCells; y++) {
    context.beginPath();
    context.moveTo(0, y * cellWidth);
    context.lineTo(fieldWidth, y * cellWidth);
    context.stroke();
    context.strokeStyle = "black";
    context.fill();
  }
  for (var x = 0; x <= horizontalCells; x++) {
    context.beginPath();
    context.moveTo(x * cellWidth, 0);
    context.lineTo(x * cellWidth, fieldHeight);
    context.stroke();
    context.strokeStyle = "black";
    context.fill();
  }

  //обработчики нажатий кнопок
  document.getElementById("left").onclick = function () {
    storekeeper.moveLeft();
  };

  document.getElementById("right").onclick = function () {
    storekeeper.moveRight();
  };
  document.getElementById("down").onclick = function () {
    storekeeper.moveDown();
  };

  document.getElementById("up").onclick = function () {
    storekeeper.moveUp();
  };

  store.drawMap();

  //ОТРИСОВКА ИГРОВОГО ПОЛЯ
  function initGameField(width, height, cellWidth, cellColor) {
    canvas, context;

    console.log(matrix);

    // context.beginPath();
    // context.moveTo(fieldWidth / 2, 0);
    // context.lineTo(fieldWidth / 2, fieldHeight);
    // context.stroke();
    // context.strokeStyle = "black";
    // context.fill();

    // context.beginPath();
    // context.moveTo(0, fieldHeight / 2);
    // context.lineTo(fieldWidth, fieldHeight / 2);
    // context.stroke();
    // context.strokeStyle = "black";
    // context.fill();

    return canvas;
  }

  //ВЫВОД В КОНСОЛЬ
  function c(val, ...valList) {
    console.log(val, ...valList);
    return val;
  }
})();
