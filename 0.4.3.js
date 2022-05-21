/**Faça uma função que irá inverter o valor da propriedade excluido para cada um dos itens do array. Você deve usar o forEach para isso.  */
const arquivos = [
  {
    id: 1,
    nome: 'Meu Trabalho v1',
    excluido: false,
  },
  {
    id: 2,
    nome: 'Meu Trabalho v2',
    excluido: false,
  },
  {
    id: 3,
    nome: 'Meu Trabalho v3',
    excluido: false,
  },
  {
    id: 4,
    nome: 'Meu Trabalho v4',
    excluido: true,
  },
];

function inverter(arquivo) {
  if (arquivo.excluido === true) {
    arquivo.excluido = false;
  } else if (arquivo.excluido === false) {
    arquivo.excluido = true;
  }
}
arquivos.forEach(inverter);
console.log(arquivos);

//Correção
arquivos.forEach((arquivo) => {
  arquivo.excluido = !arquivo.excluido;
});
console.log(arquivos);
//USANDO MAP
const novoArray = arquivos.map((arquivo) => {
  arquivo.excluido = !arquivo > excluido;
  return arquivo;
});
console.log(novoArray);

//Outra maneira de fazer o forEach
function callback(arquivo) {
  if (arquivo.excluido === true) {
    return (arquivo.excluido = false);
  }
  return (arquivo.excluido = true);
}
arquivos.forEach(callback);
console.log(arquivos);
