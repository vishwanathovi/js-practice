class Queue {
  constructor(maxLength) {
    this._storage = {}; // Object Implementation
    this.maxLength = maxLength;
    this.pushIndex = 0;
    this.popIndex = 0;
  }
  isEmpty() {
    return !!!Object.keys(this._storage).length;
  }
  enqueue(value) {
    if (this._full()){console.log('Max capacity already reached');return}
    this._storage[this.pushIndex] = value;
    this.pushIndex++;
    return this.count();
  }
  dequeue() {
  	var a = this._storage[this.popIndex];
  	delete this._storage[this.popIndex];
  	this.popIndex++;
  	return a;
  }
  peek() {
  	return this._storage[this.popIndex]
  }
  count() {
    return Object.keys(this._storage).length;
  }
  _full(){
    return Object.keys(this._storage).length==this.maxLength;
  }
  contains(value){
    return Object.values(this._storage).some(item=>item==value)
  }
}

var myQueue = new Queue(3);
console.log(myQueue.isEmpty(), 'should be true')
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.isEmpty(), 'should be false')
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.contains('b'), 'should be true');
console.log(myQueue.contains('d'), 'should be false');
// // console.log(myQueue._storage, myQueue._head);
// // console.log(myQueue.until('b'), 'should be 1');
// // console.log(myQueue.until('c'), 'should be 2');
// // console.log(myQueue.until('d'), 'should be null');
console.log(myQueue);