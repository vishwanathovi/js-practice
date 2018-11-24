/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

const numTostring = (a) =>  String(a);

console.log(numTostring(10))

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

const addOne = (a) => a+1;

console.log(addOne(10))

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 const subOne = function(a){ return a-1 }

 console.log(subOne(14))

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function sumTwo(a,b){
	return a+b;
}

console.log(sumTwo(10,33))

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subTwo(a,b){
	return a-b;
}

console.log(subTwo(10,33))

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function mulTwo(a,b){
	return a*b;
}

console.log(mulTwo(10,33))


/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divTwo(a,b){
	return Math.floor(a/b);
}

console.log(divTwo(437,10))


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

const squared = (a) => a*a;

console.log(squared(20))



/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function basicOperations(op,a,b){
	var finalVal=0;
	var opSym="";
	if (op=="add"){
		finalVal=a+b;
		opSym="+";
	} else if (op=="subtract"){
		finalVal=a-b;
		opSym="-";
	} else if(op=="multiply"){
		finalVal=a*b;
		opSym="*";
	} else {
		finalVal=a/b;
		opSym="/";
	}
	printValue(opSym,a,b,finalVal)
}

function printValue(op,a,b,finalVal){
	console.log(`${a} ${op} ${b} = ${finalVal}`)
}

basicOperations("add",29,10)
basicOperations("subtract",29,10)
basicOperations("multiply",29,10)
basicOperations("divide",29,10)

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

const greater = (a,b) => a>b;

console.log(greater(10,20))
console.log(greater(50,20))

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

const smaller = (a,b) => a<b;

console.log(smaller(10,20))
console.log(smaller(50,20))


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

const equal = (a,b) => a==b;

console.log(equal(10,20))
console.log(equal(50,20))


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

const smallest = (a,b) => a<b? a:b;

console.log(smallest(10,20))
console.log(smallest(50,20))



/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

const largest = (a,b) => a>b? a:b;

console.log(largest(10,20))
console.log(largest(50,20))


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

const evenCheck = (a) => a%2? false:true; //brooo.... not readable,,,,, (a) => a%2 == 0? true:false;

console.log(evenCheck(10))
console.log(evenCheck(51))


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

const oddCheck = (a) => a%2? true:false; //same here

console.log(oddCheck(10))
console.log(oddCheck(51))


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

const scoreToGrade = function(score,maxScore){
	var perc = Math.floor((score*10)/maxScore);
	switch(perc){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5: return "F";
		case 6: return "D";
		case 7: return "C";
		case 8: return "B";
		case 9: return "A";
	}
}

console.log(scoreToGrade(89,100))
console.log(scoreToGrade(89,120))

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

function increaseReview(obj){
	if ('reviews' in obj){
		obj["reviews"]+=1
	} else {
		obj.reviews = 1
	}
};

var obj1 = {reviews:3, lastName:"Doe", age:50, eyeColor:"blue"};
var obj2 = { lastName:"Doe", age:50, eyeColor:"blue"};

increaseReview(obj1);
increaseReview(obj2);


console.log(obj1);
console.log(obj2);


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

const combine = (a,b) => a + " " + b;

console.log(combine("Hello", "World!"))                                                                          


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

const circleObj = function(radius){
	var obj = {};
	obj.circumference = radius*2*Math.PI;
	obj.area= Math.PI*radius*radius;
	return obj;
}

console.log(circleObj(10))
