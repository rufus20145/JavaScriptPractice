const defaultMap = Array("    XXXXX             ",
    "    X   X             ",
    "    X*  X             ",
    "  XXX  *XXX           ",
    "  X  *  * X           ",
    "XXX X XXX X     XXXXXX",
    "X   X XXX XXXXXXX  ..X",
    "X *  *             ..X",
    "XXXXX XXXX X@XXXX  ..X",
    "    X      XXX  XXXXXX",
    "    XXXXXXXX          "),
    defaultMapHeight = 11,
    defaultMapWidth = 22;



class Store {
    #map;

    constructor(width, height, numOfContainers) {
        this.width = width;
        this.height = height;
        this.numOfContainers = numOfContainers;
    }

    loadMap(rawMap = defaultMap, height = defaultMapHeight, width = defaultMapWidth) {

        var array = new Array(height);

        for (var i = 0; i < height; i++) {
            array[i] = new Array(width);
            for (var j = 0; j < width; j++) {
                array[i][j] = rawMap[i][j];
                c(rawMap[i][j]);
            }

        }
        this.#map = array;
    }

    getCellContent(x, y) {
        return this.#map[y][x];
    }

    getContainer(x, y) {
        if (this.getCellContent(x, y) == 3) return this.#map[x][y];
        else {
            c("There is no container");
            return undefined;
        }
    }

    drawMap(x,y, ) {
        return undefined;
    }
}
