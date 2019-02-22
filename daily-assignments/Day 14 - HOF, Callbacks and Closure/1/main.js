// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  var updatedArray = [];
  for (item of array) {
    updatedArray.push(callback(item))
  }
  return updatedArray;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for (item of array) {
    callback(item);
  }
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  var updatedArray = [];
  array.forEach(item => updatedArray.push(callback(item)))

  return updatedArray;
}

// console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
  var acc = initialValue;
  array.forEach(item => acc = callback(acc, item));
  return acc;
}

//Extension 3
function intersection(...arrays) {
  return arrays.reduce((acc, ele) => {
    acc = commonValues(acc, ele);
    return acc;
  })
}

function commonValues(array, ...args) {
  var updatedArray = [];
  var item;
  for (item of array) {
    for (elements of args)
      if (elements.some((ele) => item == ele)) {
        updatedArray.push(item);
      }
  }
  return updatedArray;
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  return arrays.reduce((acc, array) => {
    for (element of array) {
      if (acc.every(itm => itm != element)) acc.push(element)
    }
    return acc;
  })
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  return array1.reduce((acc, ele, index) => {
    if (callback(ele) == array2[index]) {
      acc[ele] = array2[index]
    }
    return acc;
  }, {})
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) {
  return str.toUpperCase();
}));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((acc, ele) => {
    if (!acc[ele]) acc[ele] = [];
    for (fn of arrCallbacks) {
      acc[ele].push(fn(ele));
    }
    return acc;
  }, {})
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) {
  return str.toUpperCase();
}, function(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}, function(str) {
  return str + str;
}]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }



function every(array, test) {
  // Your code here.
  return !array.some(item => !test(item))
}