class Main {
  constructor(title) {
    this.title = title;
    this.boards = [];

    this.node = document.createElement('div')
    this.node.className = 'board board-selector';

    this.titleNode = document.createElement('h2')
    this.titleNode.textContent = this.title;
    this.node.appendChild(this.titleNode)

    this.listsNode = document.createElement("div");
    this.listsNode.className = "lists"
    this.node.appendChild(this.listsNode);

    this.listPlaceholder = document.createElement('div')
    this.listPlaceholder.className = "list";
    this.listPlaceholderText = document.createElement('h5')
    this.listPlaceholderText.textContent = 'Add a Board';
    this.listPlaceholder.appendChild(this.listPlaceholderText)
    this.listsNode.appendChild(this.listPlaceholder)
    this.listForm = generateBoardForm();
    this.listPlaceholder.appendChild(this.listForm)
    this.listPlaceholderText.addEventListener('click', () => {
      handleBoardAdd(this)
    });
  }
  render() {
    var mainDom = document.querySelector('main');
    mainDom.appendChild(this.node);
    this.listsNode.innerHTML = '';
    this.boards.forEach(item => {
      this.boardName = document.createElement('div');
      this.boardName.className = 'list board-name';
      this.boardName.appendChild(item.titleNode)
      this.listsNode.appendChild(this.boardName)
      item.titleNode.addEventListener('click', () => {
        item.render();
      })
    })
    this.listsNode.appendChild(this.listPlaceholder)
  }
}

var newMain = new Main('Boards');
newMain.render();

document.querySelector('.boards-button').addEventListener('click', () => {
  newMain.render();
})

