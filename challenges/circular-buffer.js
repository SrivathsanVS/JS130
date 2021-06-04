class CircularBuffer {
  constructor(bufferSize = 0) {
    this.size = bufferSize;
    this._initializeElements();
  }
  _initializeElements() {
    this.elements = Array(this.size).fill('');
    this.availableSpace = this.size;
    this.readIndex = 0;
    this.writeIndex = 0;
  }
  _isBufferEmpty() {
    return (this.availableSpace === this.size);
  }
  _isBufferFull() {
    return (this.availableSpace === 0);
  }
  _throwBufferEmptyError() {
    throw new Error("Buffer is empty");
  }
  _throwBufferFullError() {
    throw new Error("Buffer is full");
  }
  _decrementAvailableSpace() {
    if (!this._isBufferFull()) this.availableSpace -= 1;
  }
  _incrementIndex(index) {
    if (index === this.size - 1) return 0;
    return index + 1;
  }
  _updateReadIndex() {
    this.readIndex = this._incrementIndex(this.readIndex);
  }
  _updateWriteIndex() {
    let tempIndex = this._incrementIndex(this.writeIndex);
    if (!this._isBufferFull()) {
      while (this.elements[tempIndex]) {
        tempIndex = this._incrementIndex(tempIndex);
        console.log(tempIndex);
      }
    }
    this.writeIndex = tempIndex;
  }
  forceWrite(elem) {
    if (elem) {
      this.elements[this.writeIndex] = elem;
      if (this._isBufferFull()) this._updateReadIndex();
      this._decrementAvailableSpace();
      this._updateWriteIndex();
    }
  }
  write(elem) {
    if (this._isBufferFull()) this._throwBufferFullError();
    this.forceWrite(elem);
  }
  read() {
    if (this._isBufferEmpty()) this._throwBufferEmptyError();
    let returnElem = this.elements[this.readIndex];
    this.elements[this.readIndex] = '';
    this.availableSpace += 1;
    this._updateReadIndex();
    return returnElem;
  }
  clear() {
    this._initializeElements();
  }
}
module.exports = CircularBuffer;
