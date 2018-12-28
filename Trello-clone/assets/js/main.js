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


var array = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40]
]

function snail(array) {
  var arrayNew = [];
  var rowStart = 0;
  var colStart = 0;
  var maxRow = array.length;
  var maxCol = array[0].length;
  var directions = [
    [colStart, rowStart, 1, 0],
    [maxCol - 1, rowStart, 0, 1],
    [maxCol - 1, maxRow - 1, -1, 0],
    [colStart, maxRow - 1, 0, -1]
  ]

  while (rowStart <= maxRow) {
    if (rowStart == maxRow) break;
    if (rowStart - maxRow == -1) {
      directions.splice(1, 3)
    }
    console.log(directions)

    for (item of directions) {
      for (let col = item[0], row = item[1]; col < maxCol && row < maxRow && col >= colStart && row >= rowStart; col += item[2], row += item[3]) {
        arrayNew.push(array[row][col])
      }
      if (rowStart - maxRow != -1) {
        arrayNew.pop()
      }

    }
    console.log(arrayNew)
    colStart++;
    rowStart++;
    maxCol--;
    maxRow--;
    directions = [
      [colStart, rowStart, 1, 0],
      [maxCol - 1, rowStart, 0, 1],
      [maxCol - 1, maxRow - 1, -1, 0],
      [colStart, maxRow - 1, 0, -1]
    ]
    console.log("After", rowStart, maxRow)
    console.log("After", colStart, maxCol)
  }


  return arrayNew
}

snail(array)