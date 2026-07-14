const nome = 'João Pedro';
const sobrenome = 'Apolinário';
const idade = 18;
const peso = 72;
const alturaEmM = 1.75;
let indiceMassaCorporal;
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2026 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);

// template strings -> ${}

console.log(`Tem ${alturaEmM} de altura e seu Índice de Massa Corporal (IMC) é de ${indiceMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
