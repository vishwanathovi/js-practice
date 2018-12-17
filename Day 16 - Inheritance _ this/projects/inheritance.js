//////////////////////////////////////////////////
// ---------  Factory functions  -------------- //
//////////////////////////////////////////////////

// User Inheritence example

var userFunctions = {
  increaseScore: function increaseScore() {
    return this.score += 1;
  }
}

function userCreator(name, score) {
  var obj = Object.create(userFunctions);
  obj.name = name;
  obj.score = score;
  return obj;
}

//  Modetator - subset

var moderatorFunctions = {
  sharePublicMessage: function sharePublicMessage() {
    console.log("Hello, All of you have a good day!");
  }
}

function moderatorCreator(name, score) {
  var obj = userCreator(name, score);
  Object.setPrototypeOf(obj, moderatorFunctions)
  Object.setPrototypeOf(moderatorFunctions, userFunctions);
  return obj;
}

//  Paid user subset

var paidUserFunctions = {
  increaseBalance: function increaseBalance() {
    return this.accountBalance += 1;
  }
}

function paidUserCreator(name, score, accountBalance) {
  var obj = userCreator(name, score);
  obj.accountBalance = accountBalance;
  Object.setPrototypeOf(obj, paidUserFunctions)
  Object.setPrototypeOf(paidUserFunctions, userFunctions);
  return obj;
}


var will = userCreator('Will', 3);
var tim = userCreator('Tim', 5);
var eva = userCreator('Eva', 9);

var alyssa = paidUserCreator('Alyssa', 8, 25);

var sam = moderatorCreator('Sam', 0);


//////////////////////////////////////////////////
// ---------  Pseudo Classical   -------------- //
//////////////////////////////////////////////////

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increaseScore = function increaseScore() {
  return this.score += 1;
};

// Moderator 

function ModeratorCreator(name, score) {
  UserCreator.call(this, name, score)
}

ModeratorCreator.prototype.sharePublicMessage = function sharePublicMessage() {
  console.log("Hello, All of you have a good day!")
}

Object.setPrototypeOf(ModeratorCreator.prototype, UserCreator.prototype)

// Paid user 

function PaidUserCreator(name, score, accountBalance) {
  UserCreator.call(this, name, score)
  this.accountBalance = accountBalance;
}

PaidUserCreator.prototype.increaseBalance = function increaseBalance() {
  return this.accountBalance += 1;
}

Object.setPrototypeOf(PaidUserCreator.prototype, UserCreator.prototype)


var will = new UserCreator('Will', 3);
var tim = new UserCreator('Tim', 5);
var eva = new UserCreator('Eva', 9);

var alyssa = new PaidUserCreator('Alyssa', 8, 25);

var sam = new ModeratorCreator('Sam', 0);


//////////////////////////////////////////////////
// -------------  Using Classes  -------------- //
//////////////////////////////////////////////////

class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increaseScore() {
    return this.score += 1;
  }
}

class Moderator extends User {
  constructor(name, score) {
    super(name, score);
  }
  sharePublicMessage() {
    console.log("Hello, All of you have a good day!");
  }
}

class PaidUser extends User {
  constructor(name, score, accountBalance) {
    super(name, score);
    this.accountBalance = accountBalance;
  }
  increaseBalance() {
    return this.accountBalance += 1;
  }
}


var will = new User('Will', 3);
var tim = new User('Tim', 5);
var eva = new User('Eva', 9);

var alyssa = new PaidUser('Alyssa', 8, 25);

var sam = new Moderator('Sam', 0);