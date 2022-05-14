const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costa',
    genero: 'feminino',
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
  },
];
/**Faça uma função que irá retornar um array de strings. Essa função deve formatar o
nome do médico conforme o genero . */
const porGenero = (medicos) => medicos.genero;

const resultadoPorGenero = medicos.filter((medicos) => medico.porGenero);

// com for
let arraysDrs = [];
for (let filme of medicos) {
  if (medico.genero === 'masculino') {
    const cordial = 'Dr. ' + medico.nome + ' ' + medico.sobrenome;
    arrayDrs.push(cordial);
  }
  if (medico.genero === 'feminino') {
    const cordial = 'Dra. ' + medico.nome + ' ' + medico.sobrenome;
    arrayDrs.push(cordial);
  }
  if (medico.genero === 'nao-binario') {
    const cordial = 'Dr(e). ' + medico.nome + ' ' + medico.sobrenome;
    arrayDrs.push(cordial);
  }
}
//Com Map()
const novoArrayDrs = medicos.map((medico) => {});
console.log(arraysDrs);
