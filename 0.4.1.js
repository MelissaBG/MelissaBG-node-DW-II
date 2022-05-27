/**Para cada aluno, gere a média geral obtida de todas as notas. Você pode salvar esse valor numa propriedade chamada mediaGeral. Você pode usar o map ou o forEach para esse exercício. */
const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  }
]
alunos.forEach((aluno) => {
  const somaNotas = aluno.notas.reduce((acumulador, nota) =>  nota.nota + acumulador, 0);
  aluno.mediaGeral = somaNotas / aluno.notas.length;
});
/*** Correção
 * reduce - reduzir
 */
//Com Map 
//Fazendo iteração para cada objeto
const alunoComMediaGeral = alunos.map(aluno => {
  const mediaGeral = gerarMediaGeral(aluno.notas);
  aluno.mediaGeral = mediaGeral;
  return aluno;
});

function gerarMediaGeral(notas){
  let mediaGeral =0;
  for(let nota of notas){
    mediaGeral = mediaGeral + aluno.nota;
  }
  return mediaGeral / nota.length;
}
//Com forEach
function gerarMediaGeral2(notas){
  notas.forEach((notas) => {
    mediaGeral = mediaGeral + nota.nota;
  });
  return mediaGeral / nota.length;
}
//Com reduce
function gerarMediaGeral3(notas){
  const mediaGeral = notas.reduce((acumulador , proximoValor) => acumulador + proximoValor.nota, 0);
  return aluno.notas.mediaGeral = somaNotas / aluno.notas.length;
}
//const mediaGeral = gerarMediaGeral (alunos[1].notas);


//console.log(mediaComGeral);