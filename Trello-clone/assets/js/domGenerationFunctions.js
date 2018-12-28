function generateBoardForm() {
  var formContent = document.createElement('form');
  formContent.id = 'board-add-form'
  formContent.innerHTML = `<input id="board-add-input" type="text" />
                  <input type="submit"/>`;
  formContent.style.display = 'none';
  return formContent;
}

function handleBoardAdd(main) {
  var boardInputForm = document.getElementById('board-add-form');
  var boardInput = boardInputForm.querySelector('#board-add-input');
  boardInputForm.style.display = 'block';
  boardInput.focus();
  boardInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (boardInput.value !== "") {
      var newBoard = new Board(boardInput.value);
      main.boards.push(newBoard)
    }
    boardInput.value = '';
    main.render();
  })
}


function generateListForm() {
  var formContent = document.createElement('form');
  formContent.id = 'list-add-form'
  formContent.innerHTML = `<input id="list-add-input" type="text" />
  								<input type="submit"/>`;
  formContent.style.display = 'none';
  return formContent;
}

function handleListAdd(board) {
  var listInputForm = document.getElementById('list-add-form');
  var listInput = listInputForm.querySelector('#list-add-input');
  listInputForm.style.display = 'block';
  listInput.focus();
  listInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (listInput.value !== "") {
      var newList = new List(board, listInput.value);
      board.lists.push(newList)
    }
    listInput.value = '';
    board.render();
  })
}

function generateCardForm() {
  var formContent = document.createElement('form');
  formContent.id = 'card-add-form'
  formContent.innerHTML = `<input id="card-add-input" type="text" />
  								<input type="submit"/>`;
  formContent.style.display = 'none';
  return formContent;
}

function handleCardAdd(boardName, listName) {
  var listInputForm = document.querySelector(`.${listName.title} > #card-add-form`);
  var input = listInputForm.querySelector(`.${listName.title} > #card-add-form > #card-add-input`);
  listInputForm.style.display = 'block';
  input.focus();
  listInputForm.addEventListener('submit', (e) => {
    var input = listInputForm.querySelector(`.${listName.title} > #card-add-form > #card-add-input`);
    var inputValue = input.value;
    e.preventDefault();
    if (inputValue !== "") {
      var newCard = new Card(boardName, listName, inputValue);
      boardName.lists.forEach((item) => {
        if (item.title == listName.title) {
          item.cards.push(newCard)
        }
      })
      input.value = '';
    }
    listName.render();
  })
}