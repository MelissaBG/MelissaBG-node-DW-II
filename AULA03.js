const tarefas =[ {
  titulo = 'Passear com o cachorro',
  concluida = false,
  pessoa = ['mathias']
},
{
  titulo = 'Comprar leite',
  concluida = false,
  pessoa = ['melissa']
},
{
  titulo = 'Lavar a louça',
  concluida = true,
  pessoa = ['mathias', 'melissa']
}
];
const tarefasConcluidas = (tarefas) => tarefas.concluida
const tarefasConcluidasPorMathias = (tarefas) => tarefas.pessoas
  .some((pessoa) => pessoa === 'mathias');

const resultado = tarefas // casteamento de metodos. Some retorna apenas um true or false, e nenhum outro tipo de retorno. Some é se ao menos uma é verdade.
  .filter(tarefas => tarefas.concluida)
  .filter(tarefas => tarefas.pessoas
      .some((pessoa) => pessoa === 'mathias'));

const todasConcluidas = tarefas.every((tarefas) => tarefa.concluida === true); //se ao menos uma é falsa retornando um true.
console.log(todasConcluidas);
console.log(resultado);