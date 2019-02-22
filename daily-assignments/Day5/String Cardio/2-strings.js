// Write a JavaScript function to chop a string into chunks of a given length.
// Input ( String, Number) -> ('Hello World!', 2)
// Output ['He', 'll', 'o ', 'Wo', 'rl', 'd!']

function chop(str,len){
	var strArray = [];
	for (var i = 0;i<str.length/len;i++){
		strArray.push(str.slice(i*len,(i*len)+len))
	}
	return strArray;
}

console.log(chop("Hello World!",2));
console.log(chop("Hello good World!",4));


//Write a JavaScript function to count the occurrence of a substring in a string.
// Input (String, String) -> ('The world of the dogs', 'the')
// Output (Number) -> 2

function countSubStr(str,subStr){
	var occCount = 0;

	var re = new RegExp(subStr, "gi");

	str.replace(re,function(){occCount++})
	return occCount;
}

console.log(countSubStr("a a a a a","a"))
console.log(countSubStr("The world of the dogs","the"))


//  Write a JavaScript function to strip leading and trailing spaces from a string.
// Input (String) -> ('Hello World   ')
// Output String -> "Hello World"

function	trimStr(str){
	return str.trim();
}

console.log(trimStr("    Hello World       "))
console.log(trimStr(" Vishwa       "))


// Write a JavaScript function to truncate a string to a certain number of words.
// Input (String, Number) -> ('The quick brown fox jumps over the lazy dog', 4)
// Output ( String ) -> "The quick brown fox"

// function truncateStr(str,len){
// 	var indexNext = 0;
// 	for (i=0;i<len;i++){
// 		if (str.indexOf(" ",indexNext)>0){ indexNext = str.indexOf(" ",indexNext)+1 }
// 	}
// 	return str.slice(0,indexNext);
// }

function truncateStr(str,len){
	var strArray =  str.split(" ").slice(0,len);
	// return strArray[0,len].join(" ");
	return strArray.join(" ");
}	

console.log(truncateStr("The quick brown fox jumps over the lazy dog",4))
console.log(truncateStr("What did you say? i am not here?",5))
console.log(truncateStr("The quick ",4))


// Write a JavaScript function to alphabetize a given string.(A -z)
// Input (String) -> 'United States'
// Output 'SUadeeinsttt'

function alphabetize(str){
	return str.split("").sort().join("");
}

console.log(alphabetize("Hello World!"))

// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
// Input ( String String) -> ('abcd', 'AbcD')
// Output Boolean -> true
// ('ABCD', 'Abce') -> false

function insensitiveComp(str1,str2){
	return str1.toLowerCase()==str2.toLowerCase();
}

console.log(insensitiveComp("asdf","ASdf"));
console.log(insensitiveComp("aaaDDD","AAAddd"));
console.log(insensitiveComp("aaaDDE","AAAded"));
