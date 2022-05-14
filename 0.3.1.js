

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
  /**Enunciado I: Cria um novo array com apenas o título e o ano de lançamento dos
 * filmes. */
  const porNomeAno = (filme) =>  {
   const porTituloAno = {
     Titulo:filme.Titulo,
     anoLançamento: filme.anoLançamento
   }
   return porTituloAno;
  }
  console.log(porNomeAno);

  /**Enunciado II: Cria um novo array e adicione um atributo chamado id que é gerado
 * de forma incremental. */
  let aux =0;
  const porNomeAno2 = filme.map(({nome, anoLançamento}, index) =>{
    //Posição e soma +1
    aux++;
    return{
      nome, 
      anoLançamento,
      //Gera o id.
      id: aux,
    };
  });


 
