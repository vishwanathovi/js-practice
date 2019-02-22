class Stack {
  constructor(maxLength) {
    this._storage = "";
    this.maxLength = maxLength;
  }
  isEmpty() {
  	return !!!this.size();
  }
  push(value) {
  	if (this._full()){console.log('Max capacity already reached');return;}
  	this._storage += "\\" + value;
  	return this.size();
  }
  pop() {
  	let a = this.peek();
  	this._storage = this._storage.replace(/(?:.(?!\\))+$/gi, "")
  	return a;
  }
  peek() {
  	return this._storage.match(/(?:.(?!\\))+$/gi)[0].slice(1);
  }
  size() {
  	return this._storage.match(/\\/gi)? this._storage.match(/\\/gi).length:0;
  }
  _full(){
  	return this.size()==this.maxLength;
  }
  contains(value){
  	return this._storage.includes(value)
  }
}

var myStack = new Stack(3);
console.log(myStack.isEmpty()) // true
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'Max capacity already reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.size(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.size(), 'should be 2');
console.log(myStack.contains('a'), 'should be true');
console.log(myStack.contains('z'), 'should be false');
console.log(myStack._storage)


