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
  }];
  /**Faça uma função que irá retornar um array de strings. Essa função deve formatar o
nome do médico conforme o genero . */
  const porGenero = (medicos) => medicos.genero

  const resultadoPorGenero = medicos 
  .filter(medicos => medico.porGenero)

  let arraysDrs = [];
  for (let filme of medicos){
    if(medico.genero === 'masculino'){
    const cordial = medico.nome  + medico.sobrenome;
    arrayDrs.push(cordial);
    }

  }