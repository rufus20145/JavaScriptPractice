class Storekeeper {
  x;
  y;
  store;

  constructor(startX, startY, store) {
    this.x = startX;
    this.y = startY;
    this.store = store;
  }

  moveDown() {
    var tmp;
    if ((tmp = this.store.getCellContent(this.x, this.y - 1)) == 0) {
      this.y--;
      c("Moved down. Now coordinates are " + this.x + " and " + this.y);
    } else if (tmp == 3 && this.store.getCellContent(this.x, this.y - 2) == 0) {
      c("Container in front! Move it!");
      this.store.getContainer(this.x, this.y - 1).moveDown();
      this.y--;
    } else {
      c("Can`t move because of wall");
    }
  }

  moveUp() {
    var tmp;
    if ((tmp = this.store.getCellContent(this.x, this.y + 1)) == 0) {
      this.y++;
      c("Moved up. Now coordinates are " + this.x + " and " + this.y);
    } else if (tmp == 3 && this.store.getCellContent(this.x, this.y + 2) == 0) {
      c("Container in front! Move it!");
      this.store.getContainer(this.x, this.y + 1).moveUp();
      this.y++;
    } else {
      c("Can`t move because of wall");
    }
  }

  moveLeft(matrix) {
    var tmp;
    if ((tmp = this.store.getCellContent(this.x - 1, this.y)) == 0) {
      this.x--;
      c("Moved left. Now coordinates are " + this.x + " and " + this.y);
    } else if (tmp == 3 && this.store.getCellContent(this.x - 2, this.y) == 0) {
      c("Container in front! Move it!");
      this.store.getContainer(this.x - 1, this.y).moveLeft();
      this.x--;
    } else {
      c("Can`t move because of wall");
    }
  }

  moveRight(matrix) {
    var tmp;
    if ((tmp = this.store.getCellContent(this.x + 1, this.y)) == 0) {
      this.x++;
      c("Moved right. Now coordinates are " + this.x + " and " + this.y);
    } else if (tmp == 3 && this.store.getCellContent(this.x + 2, this.y) == 0) {
      c("Container in front! Move it!");
      this.store.getContainer(this.x + 1, this.y).moveLeft();
      this.y++;
    } else {
      c("Can`t move because of wall");
    }
  }

  #removeOldDisplay() {}

  #makeNewDisplay() {}
}
