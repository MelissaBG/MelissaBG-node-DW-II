// run `node index.js` in the terminal
//Faça uma função que irá receber como parâmetro dois numeros. O primeiro parâmetro irá representar o valor de um boleto e o segundo parâmetro irá representar a quantidade de dias que essa conta está atrasada. Para cada dia atrasado deve ser cobrado uma taxa de 0,033%. A função deve retornar o novo valor do boleto. Considere o cálculo de juros simples. //
const valorBoleto = 336.00;
const diasAtrasados = 7;
const taxa = 0.03;


function calcularBoleto(valorBoleto, diasAtrasados,taxa) {

 const valorTaxa = valorBoleto * taxa /100;
 const valordiasAtrasados = diasAtrasados * valorTaxa;
 const valorBoleto = valordiasAtrasados + valorBoleto;
 return valorBoleto;
}
const resultado = calcularBoleto( valorBoleto, diasAtrasados, taxa);

console.log(resultado);

