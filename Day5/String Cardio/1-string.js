// Write a JavaScript function to check whether an `input` is a string or not.

// Need to check if there is any string method that can be used here

function checkString(a){
	return typeof(a)=="string";
}

console.log(checkString("vishwa"));
console.log(checkString(10));


// Write a JavaScript function to check whether a string is blank or not.

// Need to check if there is any string function to do the same

const checkBlank = function(a){
	return a.length<1;
};

console.log(checkBlank("vishwa"));
console.log(checkBlank(""));


// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']

const splitWords = (a) => a.split(" ");

console.log(splitWords("Aliquip nisi. Dolor proident nulla amet sed."));


// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"

let leftStr = (str,count) => str.slice(0,count);

console.log(leftStr("lorem epsum olcevs ndleco",7));
console.log(leftStr("qmc. qmckfuel dd diel",12));

// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)

let nameCompress = function(str){
	return str.slice(0,str.indexOf(" ")+2)+".";
};

console.log(nameCompress("Hello World!"));

// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"

function hideMailDetails(emailId){
		var ampersAnd = emailId.indexOf("@");
		var startPoint = Math.round(emailId.indexOf("@")/2);
		var newSubStr = emailId.substring(startPoint,ampersAnd)
		var emailIdCorrected = emailId.replace(newSubStr,"*".repeat(ampersAnd-startPoint))
		console.log(emailIdCorrected)
}

//  Using string methods:

function hideMailDetails(emailId){
 		var arraySplit = emailId.split("@");
 		var Username = arraySplit[0];
 		var UsernameLen = Username.length;
 		var CorrectionLen = UsernameLen - Math.floor(UsernameLen/2);
 		var CorrectionStr = Username.slice(CorrectionLen-1);
		// console.log(arraySplit,CorrectionLen,CorrectionStr);
 		
 		return Username.replace(CorrectionStr,"*".repeat(CorrectionLen)).concat("@"+arraySplit[1]);
 }

console.log(hideMailDetails("vishwaovi@gmail.com"));
console.log(hideMailDetails("hello@gmail.com"));
console.log(hideMailDetails("kirankirankumar56@gmail.com"));

// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower

function parameterize(str){
	return str.toLowerCase().replace(/ /g,"-");
}

// Only using string functions

function parameterize(str){
	return str.toLowerCase().split(" ").join("-")
}

//  

console.log(parameterize('The Perks Of Being A Wallflower'))
console.log(parameterize('Everyone has a box'))

// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'

function capitalizeStr(str){
	console.log(str.replace(/\b\w/g,function(a){return a.toUpperCase()}));
}

// Only using string functions

function capitalizeStr(str){
	// steps: 1. split 2. iterate across the array 3. replace,touppercase and slice 4. join back
	return str.split(" ").map((a) => a.charAt(0).toUpperCase()+a.slice(1)).join(" ");
}

console.log(capitalizeStr("hello world!"))
console.log(capitalizeStr("Yesterday is history, tomorrow is a mystery, and today is a gift… that’s why they call it the present"))

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'

function switchCase(str){
	console.log(str.replace(/[a-z]/gi, function(a){if (/[a-z]/.test(a)){ return a.toUpperCase()} else {return a.toLowerCase()} }))
}

// Using only string and array functions

function switchCase(str){
	console.log(str.split("").map((a)=>{if (a<"a"){return toLowerCase(a)} return toUpperCase(a)}))
}

switchCase("AaBbCc")
switchCase("Vishwanath HM")


// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'

function camelStr(str){
	console.log(str.toLowerCase().replace(/\s\w/g,function(a){return a.trim().toUpperCase()}))
}

camelStr("Hello world")
camelStr("I lost my penquin the skipper")

// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'

function uncamelStr(str){
	console.log(str.replace(/[A-Z]/g,function(a){return (" " + a)}));
}

uncamelStr("helloWorld")
uncamelStr("lostInTransition")


// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'

function repeatN(str,n){
	return str.repeat(n)
}

console.log(repeatN("Hello!",4));
console.log(repeatN("Wait! ",10));


// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd

// 1st 2nd 3rd 4th 5th 6th 

function humanized(number){
	if (number%10==1 && Math.floor((number%100)/10)!=1){
		return number + "st";
	} else if(number%10==2 && Math.floor((number%100)/10)!=1){
		return number + "nd";
	} else if(number%10==3 && Math.floor((number%100)/10)!=1){
		return number + "rd";
	} else {
		return number + "th";
	}
};

console.log(humanized(12));
console.log(humanized(1));
console.log(humanized(2));
console.log(humanized(3));
console.log(humanized(10));
console.log(humanized(112));
console.log(humanized(152));

var fb = ["banana","cherry","banana","apple","apple","banana","apple","cherry","cherry"]

fb.reduce((acc,ele) => {
	if (ele in acc){
		acc[ele]+=1;
	} else {
		acc[ele]=1;
	}
	return acc;
},{}) 
