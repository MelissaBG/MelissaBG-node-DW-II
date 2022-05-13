/**
 * Enunciado I: Cria um novo array com apenas o título e o ano de lançamento dos
 * filmes.
 * Enunciado II: Cria um novo array e adicione um atributo chamado id que é gerado
 * de forma incremental.
 * 
 */
 const filmes =[{
  Titulo: " O Poderoso Chefão",
  anoLançamento: 1972,
  genero = ['policial', 'drama'],
  avaliacao:9,
  direçao: "Francis Ford Coppola"
  
  },
  {
  Titulo: "A Lista de Schindler",
  anoLançamento: 1993,
  genero = ['biografia', 'drama', 'historia'],
  avaliacao:8,
  direçao: "Steven Spielberg"},
  {
    Titulo: "O Senhor dos Aneis ",
     anoLançamento: 2003,
     genero = ['Ação', 'Aventura', 'drama'],
     avaliacao:8,
     direçao: "Peter Jackson"
  },
  {
    Titulo: "Mad Max: Estrada de Fúria ",
    anoLançamento: 2015,
    genero = ['Ação', 'Aventura', 'Ficção Cientifica'],
    avaliacao:8,
    direçao: "George Miller"
  },
  {
    id:8,
    Titulo: "A Viagem de Chihiro ",
    anoLançamento: 2001,
    genero = ['Aventura', 'Familia', 'Aventura'],
    avaliacao:8,
    direçao: "Hayao Miyazaki"
  }, 
  ]

  const ano2000 = (filme) =>  {
   const porTituloEAno = {
     Titulo:filme.Titulo,
     anoLançamento: filme.anoLançamento
   }
   return porTituloEAno;
  }
  const filmesPorTitulo = filmes.map(ano2000);
 console.log(filmesPorTitulo);
  /**Função gerar numeros aleatórios.
  * [...Array(10)] gera um array com 10 undefineds
  * .map() vai preencher todos os elementos do array de acordo com uma função
  * ()=>Math.random()*18-9  é a função que retorna um número aleatório entre -9 e 9
  */
  let array = [...Array(5)].map(() => Math.random()*18-9);

console.log(array);

 
