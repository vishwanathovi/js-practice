// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Write methods that increase and decrease those properties.
// Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Make the functions take arguments that increase or decrease arbitrary amounts

var cat = {
  tiredness: 1,
  hunger: 4,
  loneliness: 5,
  happiness: 7
}

function increase(metric, value = 1) {
  return cat[metric] += value;
}

function decrease(metric, value = -1) {
  return cat[metric] -= value;
}

function currentStatus() {
  console.log(`CatPochi is ${cat.tiredness>6? "really": cat.tiredness>3? "somewhat":"not"} tired,
  						 CatPochi is ${cat.hunger>6? "really": cat.hunger>3? "somewhat":"not"} hungry,
  						 CatPochi is ${cat.loneliness>6? "really": cat.loneliness>3? "somewhat":"not"} lonely,
  						 CatPochi is ${cat.happiness>6? "really": cat.happiness>3? "somewhat":"not"} happy`)
}



// 2nd
// An object-oriented book-list!

// Create a class BookList
// Create another class called Book

// BookLists should have the following properties:
// 1. Number of books marked as read
// 2. Number of books marked not read yet
// 3. A reference to the next book to read (book object)
// 4. A reference to the current book being read (book object)
// 5. A reference to the last book read (book object)
// 6. An array of all the Books

// Each Book should have several properties:
// Title
// Genre
// Author
// Read (true or false)
// Read date, can be blank, otherwise needs to be a JS Date() object


// Every Booklist should have a few methods:
// .add(book)
// should add a book to the books list.

// .finishCurrentBook()
// should mark the book that is currently being read as "read"
// Give it a read date of new Date(Date.now())
// Change the last book read to be the book that just got finished
// Change the current book to be the next book to be read
// Change the next book to be read property to be the first unread book you find in the list of books