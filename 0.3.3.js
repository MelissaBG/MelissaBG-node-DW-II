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
  
  const porGenero = (medicos) => medicos.genero

  const resultadoPorGenero = medicos 
  .filter(medicos => medico.porGenero)