// Initializing an empty array for tasks

var itemArray = [];

// Adding item add listener

document.getElementById("item-submit").addEventListener('click',addItemFunction);

// Adding delete listener to all current delete buttons

var iList = document.getElementsByClassName("fa-times")

for (item of iList){
	item.addEventListener('click',removeItemFunction);
}

// Adding strike out listener to all current done buttons

var iList = document.getElementsByClassName("fa-circle")

for (item of iList){
	item.addEventListener('click',checkItemFunction);
}

function addItemFunction(){

	if (document.getElementById("item-input").value==""){return;}

	// Read text from input

	var currentItem = document.getElementById("item-input").value;

	// Clear the input field

	document.getElementById("item-input").value = "";

	// Create the item object

	var timeKey = "key" + getTimeKey()

	var currentItemObj = { id:timeKey, itemText:currentItem }

	// Append object to array of tasks

	itemArray.push(currentItemObj)

	// Append item text to the html list

	document.querySelector(".item-list").insertAdjacentHTML('afterbegin', `<div id="${timeKey}" class="item"><i class="far fa-circle"></i><div  class="item-text">${currentItem}</div><i class="fas fa-times"></i></div>` )

	// Assign delete event listner to the i


	var iList = document.getElementsByClassName("fa-times")

	for (item of iList){
		item.addEventListener('click',removeItemFunction);
	}

	// Assign strike through event listner to the i

	var iList = document.getElementsByClassName("fa-circle")

	for (item of iList){
		item.addEventListener('click',checkItemFunction);
	}
	
}

// Remove items function

function removeItemFunction(){
	// alert("Good Click!")

	var currentItem = this.parentNode;
	var itemList = this.parentNode.parentNode;

	itemList.removeChild(currentItem)

	console.log(this.parentNode);
	console.log(itemList);

}

// Strike out items function


function checkItemFunction(){
	// alert("Good Click!")

	var currentItem = this.parentNode;

	currentItem.classList.toggle("strike-out")

	// console.log(currentItem);

}




// key generator using timestamp

function getTimeKey(){
	var date = new Date;
	return date.getTime();
}

