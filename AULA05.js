//Assicrono
function buscarInformacoes(){
  let resultado =[];
  setTimeout(()=>{ //EXCUÇÃO ASSINCRONA
    resultado = ['Mathis', 'melissa'];
    callback(resultado);
  }, 2000);
  return resultado;
}
const resultado = buascarInformacoes();

buascarInformacoes((resultado) => {
  console.log(resultado);
});
/** Promises -Promessa de quando finalizar uma excecução vai retorna, gerenciamento de callbacks assincrnos. Diferenciar o que é um callback sincrono de um assincrono. 
 * Uma promise sempre retorna outra promise. Uma cadeia de promessas.
*/
function buscarInformacoes2(){
  let resultado =[];
 return new Promise((resolve, reject) => {
  setTimeout(()=>{ //EXCUÇÃO ASSINCRONA
    resultado = ['Mathis', 'melissa'];
    callback(resultado);
  }, 2000);
 });
}
buscarInformacoes2()
  .then((resultado) => { //quando minha promessa for resolvida
    console.log(1, resultado);
    return Promise.reject('Erro na linha 22');   //negar umma promisse return promise.reject(); Então ele pula para o catch.
    //buscarInformacoes2(); //Usando return permite usar outro then.
  })
  .then((resultado) => {
    console.log(2, resultado);
  })
    .catch((erro)=> { //falha erro
      console.log(erro);
    }) 
  .finally(() => { //ambos finalizados
    console.log('finally')
  });
  
  //async/ Await
  async function main(){
    try{
      const resultado = await buscarInformacoes2();
      console.log(resultado);
      const resultado2 = await buscarInformacoes2();
      console.log(resultado2); //outra consulta assincrona
    }
    catch(erro){
      console.log(erro);
    }
    finally{
      console.log('Finalizado');
    }
  }
  const resultado = await buscarInformacoes2();
  main(); //excecução da função

