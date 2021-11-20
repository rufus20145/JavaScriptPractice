class Store {
  #map;
  #containers;
  constructor(width, height, numOfContainers) {
    this.width = width;
    this.height = height;
    this.numOfContainers = numOfContainers;
    this.#map = this.#initMapWithBorders(width, height);
    if (numOfContainers > 0) {
      this.addContainers();
    }
  }

  #initMapWithBorders(width, height) {
    var array = new Array(height)
      .fill(undefined)
      .map(() => new Array(width).fill(0));
    array[0].fill(1);
    array[height - 1].fill(1);

    for (var i = 1; i < height - 1; i++) {
      array[i][0] = 1;
      array[i][width - 1] = 1;
    }

    return array;

    // ! генерация пустого поля
    // return new Array(height)
    //   .fill(undefined)
    //   .map(() => new Array(width).fill(0));
  }

  addContainers() {
    this.#map[1][2] = 3;
    this.#map[3][4] = 3;
  }

  getCellContent(x, y) {
    return this.#map[x][y];
  }

  getContainer(x, y) {
    if (this.getCellContent(x, y) == 3) return this.#map[x][y];
    else {
      c("There is no container");
      return undefined;
    }
  }

  drawMap() {
    return undefined;
  }
}
