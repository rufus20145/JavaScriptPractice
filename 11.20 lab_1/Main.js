const horizontalCells = 22,
    verticalCells = 11,
    cellWidth = 40,
    gameFieldId = 'gameField',
    mainDivId = 'sokobanGame',
    wallColor = 'black',
    storekeeperColor = 'blue',
    containerColor = 'red',
    placeColor = 'yellow';

var store = new Store(horizontalCells, verticalCells, 2);
store.loadMap();
var storekeeper = new Storekeeper(12, 8, store);
c(storekeeper);
c(store);

function load() {
    var fieldWidth = horizontalCells * cellWidth,
        fieldHeight = verticalCells * cellWidth;

    document.getElementById(mainDivId).innerHTML = `
        <canvas id="${gameFieldId}" class="gameField"></canvas>
        <p>
            <button id='up' onclick = storekeeper.moveUp()>Вверх</button>
        </p>
        <p>
            <button id='left'>Влево</button>
            <button id='right'>Вправо</button>
        </p>
        <p>
            <button id='down'>Вниз</button>
        </p>`;

    document.getElementById(gameFieldId).width = fieldWidth;
    document.getElementById(gameFieldId).height = fieldHeight;


    canvas = document.getElementById(gameFieldId);
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

    // document.getElementById("left").onclick = function () {
    //     storekeeper.moveLeft();
    // };

    document.getElementById("right").onclick = function () {
        storekeeper.moveRight();
    };
    document.getElementById("down").onclick = function () {
        storekeeper.moveDown();
    };

    document.getElementById("up").onclick = function () {
        storekeeper.moveUp();
    };
}


store.drawMap();