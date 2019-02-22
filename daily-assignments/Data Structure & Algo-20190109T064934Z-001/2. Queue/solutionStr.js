class Queue {
  constructor(maxLength) {
    this._storage = ""; // String Implementation
    this.maxLength = maxLength;
  }
  isEmpty() {
    return !!!this.count();
  }
  enqueue(value) {
    if (this._full()){console.log('Max capacity already reached');return;}
    this._storage +=  value + "\\";
    return this.count();
  }
  dequeue() {
    let a = this.peek();
    this._storage = this._storage.replace(/(^[^\\]*)\\/gi, "")
    return a;
  }
  peek() {
    return this._storage.match(/(^[^\\]*)\\/gi)[0].slice(0,-1);
  }
  count() {
    return this._storage.match(/\\/gi)? this._storage.match(/\\/gi).length:0;
  }
  _full(){
    return this.count()==this.maxLength;
  }
  contains(value){
    return this._storage.includes(value)
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
// console.log(myQueue._storage, myQueue._head);
// console.log(myQueue.until('b'), 'should be 1');
// console.log(myQueue.until('c'), 'should be 2');
// console.log(myQueue.until('d'), 'should be null');
