function dnaStrand(dna){
    let complement = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
    return dna.split("").map(nucleotide => complement[nucleotide]).join("");
  }