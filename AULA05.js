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
 return new Promise((resolve) => {
  setTimeout(()=>{ //EXCUÇÃO ASSINCRONA
    resultado = ['Mathis', 'melissa'];
    callback(resultado);
  }, 2000);
 });
}
buscarInformacoes2()
  .then((resultado) => { //quando minha promessa for resolvida
    console.log(1, resultado);
    return buscarInformacoes2(); //Usando return permite usar outro then.
  })
  .then((resultado) => {
    console.log(2, resultado);
  })
    .catch(()=> { //falha erro

    }) 
  .finally(() => {
    console.log('finally')
  });