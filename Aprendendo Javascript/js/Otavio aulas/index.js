// Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 
//de altura e seu IMC é de 25.92592592
// Luiz Otavio nasceu em 1980

const nome='Grazi';
const sobrenome='Nascimento';
const idade=21 ;
const peso=49;
const altura=1.60;
let imc;
let anoNascimento;

imc=peso/(altura*altura);
anoNascimento = 2020 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade,`);
console.log(`pesa ${peso}, tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);


