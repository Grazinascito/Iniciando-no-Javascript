//VETORES/ARRAY
// Os vetores sempre começam da posição 0
//É UMA LISTA 
//****EX:**** *
// Geralmente listas de dados, numeros que acessamos pela posição

//exemplo pratico

const ListaDeInscritos = ['jose', 'joão','Maria'];
console.log(ListaDeInscritos[ListaDeInscritos.length-3]);
const ListaDeIdade = [2,3,5,15,39,25]
console.log(ListaDeIdade.length);
console.log(ListaDeIdade[5]); 


//GUARDANDO OBJETO DENTRO DOS VETORES//

const listaDeConvidados = [
    {
       nome: 'Maria Antonieta',
       idade: 18,
       cor: 'vermelho',
    },

    {
        nome: 'joão Henrique',
        idade: 'Paulo Roberto',
        cor: 'azul',
    },

    
        {
            nome: 'Pedro João',
            idade: 59,
            cor: 'azul',
        },
    


]

console.log(listaDeConvidados)
console.log(listaDeConvidados[0])
console.log(listaDeConvidados[0].nome)




