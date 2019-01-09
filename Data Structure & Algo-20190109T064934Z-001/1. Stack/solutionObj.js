class Stack {
  constructor(maxLength) {
    this._storage = {};
    this.maxLength = maxLength;
    this.index = 0;
  }
  isEmpty() {
    return !!!Object.keys(this._storage).length;
  }
  push(value) {
    if (this._full()){console.log('Max capacity already reached');return}
    this._storage[this.index] = value;
    this.index++;
    return this.size();
    }
  pop() {
    var a = this._storage[this.index-1];
    delete this._storage[this.index-1];
    this.index--;
    return a;
  }
  peek() {
    return this._storage[this.index-1];
  }
  size() {
    return Object.keys(this._storage).length;
  }
  _full(){
    return Object.keys(this._storage).length==this.maxLength;
  }
  contains(value){
    return Object.values(this._storage).some(item=>item==value)
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