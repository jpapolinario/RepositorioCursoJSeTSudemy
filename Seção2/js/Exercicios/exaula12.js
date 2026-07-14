let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let VARA = varA;
varA = varB;
varB = varC;
varC = VARA;
// OU [varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);