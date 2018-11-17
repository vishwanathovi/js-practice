// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

function tellFortune(children,partner,locationHouse,job){
  alert(`You will be a ${job} in ${locationHouse}, and married to ${partner} with ${children} kids`);
}

// tellFortune(5,"Ann","Sydney","Carpenter");
// tellFortune(7,"Thakur","Bangalore","Freelancer");


// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculateDogAge = function(a){
  alert(`Your doggies in ${a} years old in dog years`)
}

// calculateDogAge(6)

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.

calculateSupply = (age,amountPerDay) => { var maxAge=80; alert(`${Math.floor((maxAge-age)*365*amountPerDay)}`)}

// calculateSupply(24,0.2)

// Create a function called celsiusToFahrenheit :
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius :
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsius){
  alert (`${celsius} C is ${(celsius * (9/5))+32} F`)
}

// celsiusToFahrenheit(34)

//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?


// there is no difference. Both functions will perform the same action


// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

const checkAge2 = (age) =>{ return (age>18? true: confirm('Do you have your parents permission to access this page?'));}

// checkAge2(34);
// checkAge2(14);

const checkAge3 = function(age){
  return age>18 || confirm('Do you have your parents permission to access this page?') 
}

// checkAge3(34);
// checkAge3(14);


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.

function pow(){
  do {
    var x = prompt("Enter the value and power(comma separated)","4,6").split(",")
    if (!(Number.isInteger(Number(x[1]))&&Number(x[1])>0)){ alert("Enter correct power value(Positive and an integer)")}
  }
  while(!(Number.isInteger(Number(x[1]))&&Number(x[1])>0))

  return powCalc(x[0],x[1]);

}

function powCalc(x,n){
  if (n>1){return x*powCalc(x,n-1)}
  return 1;
}

// console.log(pow());


// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.

function countVowels(a){
  var finalCount = 0;
  for (var i = 0; i<"aeiou".length;i++){
    var vowelCount = 0;
    for (var j = 0; j<a.length;j++){
      if (a.charAt(j)=="aeiou"[i]){ vowelCount+=1 }
    }
    console.log(`Total ${"aeiou"[i]} in the entered text is ${vowelCount}`)
    finalCount+=vowelCount;
  }
  console.log(`Total Vowels in the entered text is ${finalCount}`)
}

countVowels("Hello World! uuuuu")


// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

const checkPalindrome = function(a){
  for (i=0;i<a.length/2;i++){
    if (a.charAt(i)!=a.charAt(a.length-i-1)){ return false}
  }
return true;
}

console.log(checkPalindrome("vishwa"));
console.log(checkPalindrome("racecar"));


// Counts the number of individual words in a string. 
// For added complexity read these strings in from a text file and generate a summary.

const countWords = (word) => { var wordCount=[]; wordCount = word.split(" ").length;return wordCount}

console.log(countWords("Hello world and Rishi too and vishwa also"))

const fileUrl = 'sample.txt' // provide file location

// fetch(fileUrl)
//    .then( r => r.text() )
//    .then( t => console.log(t))


// Show the following output using one loop.
    // 1, 2, 3, 4, 5
    // 6, 7, 8, 9, 10

var finalString = "";

for (var i=1;i<=10;i++){
  if (i==5){ 
    finalString+=`${i} \n` 
  } else if(i==10){
    finalString+=`${i}`
  } else {
    finalString+=`${i}, `
  }
}

console.log(finalString)


// Write a program that asks the user for a number n and gives them the 
// possibility to choose between computing the sum and computing the product of 1,…,n.

function userSelectAction(value,action){
  var sumValue=0;
  if (value==1){return 1} else
  if (action=="+"){ return sumValue+=userSelectAction(value-1,action) } else
     { return sumValue*=userSelectAction(value-1,action) }
}

var value = prompt(`To calculate sum or multiplication till "n", please enter n and action \n Eg: 5,+ will give you 1+2+3+4+5 = 15 `,"5,+");

var valueNum = value.split(/[1234567890,]/)[2];
var valueSym = value.split(/[,+*]/)[0];

console.log(valueNum)
console.log(valueSym)

console.log(userSelectAction(valueNum,valueSym));

// Write a function that returns the largest element in a list.

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

// Write a program that takes a number under (25) and prints the multiplication table for the number.





// Day 3 assignment
// Day 4 assignment
// Article on JS
// Day 4 content
