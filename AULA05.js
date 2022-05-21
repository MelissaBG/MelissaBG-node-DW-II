/** sort()
 * Caracteristicas: 
 * Assinatura elemto A e elemento B que variam. Se for 1 vai decrementar o elemento A se for -1 vai decrementar o B.Usar quando quiser ordenar 
 * Macete: 
*/
let numeros = [10, 20, 87];
numeros = numeros.sort((A, B) => {
  console.log(A);
  console.log(B);
  if(A > B) {
    return -1;
  }
  if(A < B) { 
    return 1;
  }
  return 0;
});

console.log(numeros);

let numeros = [10, 20, 87];
numeros = numeros.sort((A, B) =>  A - B);

console.log(numeros);

//com objetos
let numeros = [
  {
    nome: 'Mathias',
    valor: 20,
    idade: 26
  },
  {
    nome: 'Luiz',
    valor: 10,
    idade: 17
  },
  {
    valor: 2,
  },
]
//numeros = numeros.sort((A, B) => {
  const valorComparacaoA = (A.valor + A.idade)/2;
  const valorComparacaoB = (B.valor + B.idade)/2;
  return valorComparacaoB - valorComparacaoA;
//}


//Exemplo macete com objetos
numeros = numeros.sort((A, B) => B.valor - A.valor);
console.log(numero);

let novosNumeros = [10, 20, 30]
//.reduce() Usado para tudo:
const r = novosNumeros.reduce((acumulador, proximoValor) => acumulador + proximoValor, 0);
console.log(r); 