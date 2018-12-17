// class Board {
//   constructor(name) {
//     this.Boardname = name;
//     this.creationDate = creationDate;
//   }
// }

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
                  <div class = "list"> + Add a List<div>
                </div>`;
  document.querySelector('main').innerHTML = boardHTML;
}

function renderList(boardToRender) {
  var listHTML = "";
  for (listObj of boardToRender.lists) {
    listHTML += `<div id="${listObj.name}" data-index="${boardToRender.lists.indexOf(listObj)}"  class="list">
                    <div class="list-header">
                      <h2>${listObj.name}</h2>
                      <div class="add-list"><i class="fas fa-plus"></i>
                    </div>
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
  listNode = document.querySelector(`#${listId}`);
  addItemPlaceHolderNode = listNode.querySelector(`.add-item`);
  var inputField = document.createElement("input");
  inputField.placeholder = "Add a task";
  inputField.id = "add-input";
  listNode.replaceChild(inputField, addItemPlaceHolderNode);
  inputField.focus();
}

function assignSpecificFunction(e) {
  if (e.target.classList.contains('add-item')) {
    showInput(e.target.parentNode.id);
  }
}

function addAItem(e) {
  if (e.keyCode !== 13) {
    return;
  };
  console.log(e.keyCode)
  var ele = document.getElementById('add-input')
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

document.addEventListener('click', assignSpecificFunction)
document.addEventListener('keyup', addAItem);