const tarefas =[ 
{
  titulo : 'Passear com o cachorro',
  concluida : false,
  dias: 10,
},
{
  titulo :'Comprar leite',
  concluida : false,
  dias: 5,
},
{
  titulo : 'Lavar a louça',
  concluida : true,
  dias: 60,
}
];

const buscarTarefasAbaixoDeTrintaDias = (tarefas) => tarefas
    .filter(tarefa=> tarefa.concluida === true)  
    .some((tarefa) => tarefa.dias <= 30);

console.log(buscarTarefasAbaixoDeTrintaDias(tarefas));



//const buscarTarefasConcluidas = () => {
//const tarefaRealizada = tarefas.filter(tarefa => {
//  const concluida = tarefa.concluida;
//   return concluida === true;
//}); //Busca 
//return tarefaRealizada; //retorna as tarefas.
//};
//const buscarTarefasConcluidas = () => tarefas.filter(((concluida)) => concluida);
//const buscarNaoTarefasConcluidas = () => {
  //const tarefaRealizada = tarefas.filter(tarefa => {
   // const concluida = tarefa.concluida;
    // return concluida === false;
//});
//return tarefasRealizadas.length;
//}


//onst buscarTarefasNaoConcluidas = () => {
//  const tarefaNaoConcluida = tarefas.filter( tarefa => {
//    const naoConcluida = tarefa.concluida;
//    const naoConcluida === true;
//    naoConcluida ++;
//    return naoConcluida;
//  })
//}
//console.log(buscarNaoTarefasConcluidas());
//console.log(buscarTarefasConcluidas());

 