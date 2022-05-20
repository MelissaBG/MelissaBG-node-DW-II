function callback(medico){
  if (medico.genero === 'masculino') {
    medico.cordialidade = 'Dr. ' + medico.nome + ' ' + medico.sobrenome;
  }
  if (medico.genero === 'feminino') {
    medico.cordialidade = 'Dra. ' + medico.nome + ' ' + medico.sobrenome;
  }
  if (medico.genero === 'nao-binario') {
    medico.cordialidade = 'Dr(e). ' + medico.nome + ' ' + medico.sobrenome;
  }
}