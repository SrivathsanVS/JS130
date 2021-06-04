const PROTEIN_DICT = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
};

function decodeProteinSequence(string) {
  let sequence = [];
  for (let index = 0; index < string.length - 2; index += 3) {
    sequence.push(string.slice(index, index + 3));
  }
  return sequence;
}

function translate(string = '') {
  let proteinSequence = decodeProteinSequence(string).
    map(elem => {
      if (elem in PROTEIN_DICT) return PROTEIN_DICT[elem];
      throw new Error("Invalid codon");
    });
  if (proteinSequence.includes("STOP")) {
    return proteinSequence.slice(0, proteinSequence.indexOf('STOP'));
  }
  return proteinSequence;
}

module.exports = translate;
