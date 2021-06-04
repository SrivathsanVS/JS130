let functions = {
  encodeHelper(charCount, char) {
    if (charCount === 1) return char;
    return `${charCount}${char}`;
  },
  encode(string) {
    if (string.length < 2) return string;
    let outputString = '';
    let activeChar = string[0];
    let activeCharCount = 1;
    for (let index = 1; index < string.length; index++) {
      if (string[index] === activeChar) {
        activeCharCount++;
        continue;
      }
      if (string[index] !== activeChar) {
        outputString += this.encodeHelper(activeCharCount, activeChar);
        activeChar = string[index];
        activeCharCount = 1;
      }
    }
    outputString += this.encodeHelper(activeCharCount, activeChar);
    return outputString;
  },
  decodeHelper(numberString, char) {
    if (numberString !== '') return char.repeat(numberString);
    return char;
  },
  decode(string) {
    if (string.length < 2) return string;
    let originalString = '';
    let numberString = '';
    for (let index = 0; index < string.length; index++) {
      if (string[index].match(/\d/)) {
        numberString += string[index];
        continue;
      }
      originalString += this.decodeHelper(numberString, string[index]);
      numberString = '';
    }
    return originalString;
  }
};

module.exports = functions;
