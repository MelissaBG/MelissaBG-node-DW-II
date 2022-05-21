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
  aluno.mediaGeral = somaNotas / aluno.notas;
});