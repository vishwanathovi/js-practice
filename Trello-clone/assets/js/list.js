class List {
  constructor(board, title) {
    this.board = board;
    this.title = title;
    this.cards = [];

    this.node = document.createElement('div');
    this.node.className = `list ${this.title}`;

    this.titleNode = document.createElement('h4');
    this.titleNode.textContent = this.title;
    this.node.appendChild(this.titleNode)

    this.cardsNode = document.createElement("div");
    this.cardsNode.className = "cards"
    this.node.appendChild(this.cardsNode);

    this.cardAddPlaceholder = document.createElement('p');
    this.cardAddPlaceholder.textContent = "Add a card";
    this.cardsNode.appendChild(this.cardAddPlaceholder)

    this.cardForm = generateCardForm();
    this.node.appendChild(this.cardForm);
    this.cardAddPlaceholder.addEventListener('click', () => {
      var newCard = handleCardAdd(this.board, this);
      newCard ? this.cards.push(newCard) : null;
    })
  }
  render() {
    var mainDom = document.querySelector(`.${this.title}`);
    this.cardAddPlaceholder.addEventListener('click', () => {
      // debugger;
      var newCard = handleCardAdd(this.board, this);
      newCard ? this.cards.push(newCard) : null;
    })
    this.cardsNode.innerHTML = '';
    this.cards.forEach(item => this.cardsNode.appendChild(item.node))
      // this.cardsNode.appendChild(this.cardAddPlaceholder)
  }
}