const tarefas =[ {
  titulo = 'Passear com o cachorro',
  concluida = false,
},
{
  titulo = 'Comprar leite',
  concluida = false,
},
{
  titulo = 'Lavar a louça',
  concluida = true,
}
];
const buscarTarefasConcluidas = () => {
const tarefaRealizada = tarefas.filter(tarefa => {
  const concluida = tarefa.concluida;
   return concluida === true;
}); //Busca 
return tarefaRealizada; //retorna as tarefas.
};
//const buscarTarefasConcluidas = () => tarefas.filter(((concluida)) => concluida);
const buscarNaoTarefasConcluidas = () => {
  const tarefaRealizada = tarefas.filter(tarefa => {
    const concluida = tarefa.concluida;
     return concluida === false;
});
return tarefasRealizadas.length;
}

const buscarTarefasNaoConcluidas = () => {
  const tarefaNaoConcluida = tarefas.filter( tarefa => {
    const naoConcluida = tarefa.concluida;
    const naoConcluida === true;
    naoConcluida ++;
    return naoConcluida;
  })
}

 