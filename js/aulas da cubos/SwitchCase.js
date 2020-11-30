//Serve para criar case(caso)
// Switch, case, break, default

const pessoa = {
    nome: 'Junior',
    idade: '70',
    pais: 'Brasil'
}

switch(pessoa.pais){
    case 'Italia':
        console.log('Italiano');
        break;
    case 'Brasil':
        console.log('Brasileiro');
        break
        
    default:
        console.log('nem um nem outro')
}