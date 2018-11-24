"use strict"

// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”

// var passWord = prompt("Please enter your password:")
// var passWordConfirm = prompt("Re-enter the password:")

// alert(passWord==passWordConfirm? "Password matched":"Password does not match");

// Find the output of the following
// Logical AND operation
// true  && true; - true 
// true  && false; - false
// false && true; - false 
// false && false; - false 

// Logical OR operation
// true  || true; - true 
// true  || false; -  true 
// false || true;  - true 
// false || false; - false

// "foo" && "bar"; - "bar"
// "bar" && "foo"; - "foo"
// "foo" && ""; - ""
// ""    && "foo"; - ""

// "foo" || "bar"; - "foo"
// "bar" || "foo"; - "bar"
// "foo" || ""; - "foo"
// ""    || "foo"; "foo"



// Output of this alert( alert(1) || 2 || alert(3) );

// Output will be alert 1 and alert 2 // output is 2


// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.

function allBasicMath(a,b){
	console.log(a+b, a-b, a*b, a/b)
}

allBasicMath(10,30)


// Function to display a number if user enters negative number

function positiveNumber(a){
	var b = a>0? a: -a;
	return b;
}

console.log(positiveNumber(10))
console.log(positiveNumber(-130))

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var n = 1000;
var x = Math.floor((n-1)/3);
var x2 = Math.floor((n-1)/5);
var x3 = Math.floor((n-1)/15);
var sumX = ((x *( 3 + (x*3)))/2) + ((x2 *( 5 + (x2*5)))/2)- ((x3 *( 15 + (x3*15)))/2);
console.log(sumX)


// If user enters positive number, that number won't be displayed

function PositiveNoDisp(a){
	if (a>0) {return "";}
	return a;
}

console.log(PositiveNoDisp(-200))
console.log(PositiveNoDisp(100))

// Function to check whether an integer entered by the user is odd or even

function oddEven(a){
	return (a%2? "Odd":"Even");
	// return x;
}

console.log(oddEven(-200))
console.log(oddEven(301))


// Function to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12

function compare(a,b){
	 return (`${a} ${a==b? "=": a<b? "<":">"} ${b}`);
}

console.log(compare(10,20))
console.log(compare(10,10))
console.log(compare(30,20))


// Function to Check Whether a Character is Vowel or Consonant

function vowelOrNot(a){
	return ("aeiou".includes(a)? "Vowel":"Consonant")
}

console.log(vowelOrNot("e"))
console.log(vowelOrNot("x"))

// Function to Find the Largest Number Among Three Numbers

function bigOf3(a,b,c){
	return (a>b? a>c? a:c :b>c? b:c);
}

console.log(bigOf3(10,20,17))
console.log(bigOf3(99,45,33))


//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to .
// - TWO, if num is equal to .
// - THREE, if num is equal to .
// - FOUR, if num is equal to .
// - FIVE, if num is equal to .
// - SIX, if num is equal to .
// - SEVEN, if num is equal to .
// - EIGHT, if num is equal to .
// - NINE, if num is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.

function numberDisplay(a){
	switch(a){
		case 1: return "ONE"; break; // no need of break in each line
		case 2: return "TWO"; break;
		case 3: return "THREE"; break;
		case 4: return "FOUR"; break;
		case 5: return "FIVE"; break;
		case 6: return "SIX"; break;
		case 7: return "SEVEN"; break;
		case 8: return "EIGHT"; break;
		case 9: return "NINE"; break;
		default: return "PLEASE TRY AGAIN";
	}
}

console.log(numberDisplay(7));
console.log(numberDisplay(3));
console.log(numberDisplay(13));

// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30

function marksToGrade(a){
	switch(Math.ceil(a/10)){
		case 1: 
		case 2: 
		case 3: return "FF"; break;
		case 4: return "DD"; break;
		case 5: return "CD"; break;
		case 6: return "CC"; break;
		case 7: return "BC"; break;
		case 8: return "BB"; break;
		case 9: return "AB"; break;
		default: return "AA";
	}
}

console.log(marksToGrade(98));
console.log(marksToGrade(65));
console.log(marksToGrade(10));


// Function to generate Multiplication Table of a given number (use alert for number input)

// var a = prompt("Enter a number to get it's multiplication table");

// for (i=1;i<=10;i++){
// 	console.log(`${a} x ${i} = ${a*i}`)
// }

// Function to calculate the Factorial of a Number

function factorial(a){
	var fact = a;
	if (a>0) {return fact = fact*factorial(a-1)};
	return 1;
}

console.log(factorial(5))


// Output: var x = 10 + "1"; console.log(x); typeof x;

// 101 and string


//  Solve: 225 % 6 = ?

//  3

// Take two numbers and what to do with that number from user.
// Define an object with these function (add, sub, multiply, divide). Perform the operation

let simpleMath = { 
   add: function(a,b) {
      return a+b;                           //spaces before return reduced;
   },
   sub: function(a,b) {
      return a-b;
   },
   multiply: function(a,b) {
      return a*b;
   },
   divide: function(a,b) {
      return a/b;
   }
};

console.log(simpleMath.multiply(20,40));
console.log(simpleMath.add(20,40));

// var a = prompt("Enter 2 numbers and what should be done in the below format. \n\nEg: 43+53 , 48*3 \n\n supported functions are +,-,*,/","20/3")

function userSelectOperation(a){
	var aArray = a.split(/[\s,*-+/]+/);
	var aFunction = a.split(/[\s,0,1,2,3,4,5,6,7,8,9,""]+/);

	switch(aFunction[1]){
		case "+": return Number(aArray[0])+Number(aArray[1]);
		case "-": return Number(aArray[0])-Number(aArray[1]);
		case "*": return Number(aArray[0])*Number(aArray[1]);
		case "/": return Number(aArray[0])/Number(aArray[1]);
		default: return "Kill Yourself!"
	}
}

// alert(`The result is ${userSelectOperation(a)}`)


// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function fib(n){
	var fibSum = 0;
	var j =1
	var k = 0;
	for (var i=1;i<n;){
		if (i%2==0){fibSum+=i;}
		k = i;
		i = j;
		j = k+j;
		// console.log(i,j,fibSum)
	}
	return fibSum;
}

console.log(fib(50000))


