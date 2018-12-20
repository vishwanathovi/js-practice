class Card {
  constructor(board, list, title) {
    this.board = board;
    this.list = list;
    this.title = title;

    this.node = document.createElement('div');
    this.node.className = 'card';
    this.node.textContent = this.title;
  }
}