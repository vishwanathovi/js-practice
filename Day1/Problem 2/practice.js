// Log message in console saying "I'm Learning Javascript"

// alert("I'm Learning Javascript");



// var name = "Mark";  "Mark" is a string.  What is name?

//ANSWER:  name is a variable 


// Declare two variables: admin and name.

var admin, name;

// Assign the value "John" to name.

name = "John";
// Copy the value from name to admin.

admin = name;

// Show the value of admin using alert (must output “John”).

// alert(admin);

// Use alert function to to show a message saying “Hello World”  https://javascript.info/alert-prompt-confirm

// alert("Hello World!");

// Write a function which uses prompt to take the name of person and greets them. i.e "Welcome Arun"

// var userName = prompt("Please enter your name") || "Master";

// alert(`Welcome ${userName}`);

// Modify the previous program such that only the users Alice and Bob are greeted with their names.


var userName = prompt("Please enter your name") || "Master";

if (userName=="Alice" || userName=="Bob"){alert(`Welcome ${userName}`)}


// Find the error if any (var product cost = 3.45;)

// Answer: the variables should be comma seperated for one to many mapping

// Write a function that takes 'user' as an argument and log a message in console
// saying "Hello Sam, How are you doing?" if name of the user passed is "Sam"

var user = "Sam";

greetUser(user);

function greetUser(user){
	alert(`Hello ${user}, How are you doing?`);
};


// Right or Wrong
//   "Hello World" - Right
//   'Hello World" - Wrong 
//   "Hello World' - Wrong 
//   'Hello World' - Right


// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.

var sampleString = prompt("Please enter a string");

alert(sampleString.length);

// Age of the owner
var age = 26;

// Calculate the age of the dog if owner's age is 7 times of dog

var dogAge = Math.round(age/7);

// Use console.log() function to log the age of the dog 

console.log(dogAge)

// Marks and max marks of the student
var studentScore = 41
var maxScore = 100

// Calculate the percentage of marks the student got

var studentPercentage = (studentScore/maxScore) * 100;

// log the percentage in console using console.log()

console.log(`${studentPercentage} %`)

var city = 'Dharamshala'
var country = 'India'
// Make a function which can alert the message "Dharamshala, India"

function cityDisplay(city, country){
	alert(`${city}, ${country}`);
}

cityDisplay(city, country);