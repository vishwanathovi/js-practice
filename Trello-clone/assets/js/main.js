class List {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

}

class Card {
  constructor(text) {
    this.text = text;
  }
}

var board1 = {
  name: 'board1',
  lists: [{
    name: 'list1',
    cards: [{
      text: "Hello World! L1C1"
    }, {
      text: "Hello World! L1C2"
    }, {
      text: "Hello World! L1C3"
    }, {
      text: "Hello World! L1C4"
    }]
  }, {
    name: 'list2',
    cards: [{
      text: "Hello World! L1C1"
    }]
  }]
}


function renderApp(boardToRender) {
  var boardHTML = "";
  boardHTML += `<div id="${boardToRender.name}" class="board"> 
                  ${renderList(boardToRender)} 
                  <div id="list-placeholder" class="list"><div class = "add-list"> + Add a List<div>
                </div></div>`;
  document.querySelector('main').innerHTML = boardHTML;
}

function renderList(boardToRender) {
  var listHTML = "";
  for (listObj of boardToRender.lists) {
    listHTML += `<div id="${listObj.name}" data-index="${boardToRender.lists.indexOf(listObj)}"  class="list">
                    <div class="list-header">
                      <h2>${listObj.name}</h2>
                  </div>`;
    for (cardObj of listObj.cards) {
      listHTML += `<div class="card" dataset-index= "${listObj.cards.indexOf(cardObj)}" >${cardObj.text}</div>`;
    }
    listHTML += `<div class="add-item"> + Add a item</div></div>`;
  }
  return listHTML;
}

renderApp(board1)

function showInput(listId) {
  var listNode = document.querySelector(`#${listId}`);
  var addItemPlaceHolderNode = listNode.querySelector(`.add-item`);
  var inputField = document.createElement("input");
  inputField.placeholder = "Add a task 2";
  inputField.id = "add-input";
  listNode.replaceChild(inputField, addItemPlaceHolderNode);
  inputField.focus();
}

function showListInput(listId) {
  var listNode = document.querySelector(`#${listId}`);
  var addItemPlaceHolderNode = listNode.querySelector(`.add-list`);
  var inputField = document.createElement("input");
  inputField.placeholder = "List name";
  inputField.id = "add-list-input";
  listNode.replaceChild(inputField, addItemPlaceHolderNode);
  inputField.focus();
}

function assignSpecificFunction(e) {
  if (e.target.classList.contains('add-item')) {
    showInput(e.target.parentNode.id);

  }
  if (e.target.classList.contains('add-list')) {
    showListInput(e.target.parentNode.id);
  }
}

function assignKeyup(e) {
  console.log(e.target.id)
  if (e.target.id == 'add-input') {
    addAItem(e);
  }
  if (e.target.id == 'add-list-input') {
    addAListItem(e);
  }
}


function addAItem(e) {
  if (e.keyCode !== 13) {
    return;
  };

  var ele = e.target;
  var newText = ele.value;
  if (ele.value == "") {
    renderApp(board1);
    return;
  }
  var listId = ele.parentNode.id;
  var listIndex = ele.parentNode.dataset.index;
  var newCard = new Card(newText);
  board1.lists[listIndex].cards.push(newCard);
  renderApp(board1);
}

function addAListItem(e) {
  if (e.keyCode !== 13) {
    return;
  };
  console.log(e.keyCode)
  var ele = document.getElementById('add-list-input')
  var newText = ele.value;
  if (ele.value == "") {
    renderApp(board1);
    return;
  }
  var boardId = ele.parentNode.parentNode.id;
  var newList = new List(newText);
  board1.lists.push(newList);
  renderApp(board1);
}

document.addEventListener('click', assignSpecificFunction)
document.addEventListener('keyup', assignKeyup);