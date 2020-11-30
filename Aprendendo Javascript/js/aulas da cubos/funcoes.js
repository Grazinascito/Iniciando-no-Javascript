// funções são blocos de codigos já prontos
// exercicio
// function ehPar(x){
//     const resto = x % 2;

//     if(resto === 0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(ehPar(33354464548972))

// function temPar(numeros){
//     if(numeros*2){
//         return true
//     }else{
//         return false
//     }
// }
// const numeros = [0,1,2,5,7]

//EXERCICIO FUNÇÃO - FESTA PARA MAIORES

 const lista = [
     {
         nome: 'Gab',
         idade: 15
     }, 
     {
         nome: 'marco',
         idade: 25
     },

     {
         nome: 'Gabriela',
         idade: 18
     }
 ];

 function filtraMaioresDeidade(lista){
     const maiores = []

     for(let i = 0; i<lista.length; i++){
         if(lista[i].idade > 18){
             maiores.push(lista[i])
         }
     }
     return maiores;
 }

 console.log(filtraMaioresDeidade(lista))