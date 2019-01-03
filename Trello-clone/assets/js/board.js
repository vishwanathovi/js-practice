class Board {
  constructor(title) {
    this.title = title;
    this.lists = [];

    this.node = document.createElement('div')
    this.node.className = 'board';

    this.titleNode = document.createElement('h2')
    this.titleNode.textContent = this.title;

    this.listsNode = document.createElement("div");
    this.listsNode.className = "lists"

    this.listPlaceholder = document.createElement('div')
    this.listPlaceholder.className = "list";
    this.listPlaceholderText = document.createElement('h5')
    this.listPlaceholderText.textContent = 'Add a List';
    this.listPlaceholder.appendChild(this.listPlaceholderText)
    this.listsNode.appendChild(this.listPlaceholder)
    this.listForm = generateListForm();
    this.listPlaceholder.appendChild(this.listForm)
  }
  render() {
    var mainDom = document.querySelector('main');
    mainDom.innerHTML = '';
    this.node.appendChild(this.titleNode)
    this.node.appendChild    var newBoard = new Board(boardInput.value);
  (this.listsNode);
    mainDom.appendChild(this.node);
    this.listPlaceholderText.addEventListener('click', () => {
      handleListAdd(this)
    });
    this.listsNode.innerHTML = '';
    this.lists.forEach(item => this.listsNode.appendChild(item.node))
    this.listsNode.appendChild(this.listPlaceholder);
  } 
}