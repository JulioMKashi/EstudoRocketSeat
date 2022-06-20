/* 
Faca um programa que tenha um menu e apresente a seguinte mendagem: 

ola usuario! Digite o numero da opcao desejada 

1. cadastro de item
2. mostrar itens cadastrados 
3. Sair do programa 

---
O programa devera capturar o numero digitado pelo usuario e mostrar o seguintes cenarios: 

Caso o usuario digite 1, ele podera cadastrar um item em uma lista 
Caso o usuario digite 2, ele podera ver os itens cadastrados
  Se nao houver nenhum item cadastrado, mostrar mensagem: 
    "Nao existem itens cadastrados"
Caso o usuario digite 3, a aplicacao devera ser encerrada. 

*/

let option = ""
let items = []

while(option != 3){
option = Number(prompt(`
Ola usuario! Digite o numero da opcao desejada 

1. cadastro de itens
2. mostrar itens cadastrados 
3. Sair do programa 
`))

switch(option){
  case 1:
    let item = prompt("Digite o nome do item: ")
    items.push(item) 
    break;
  case 2: 
  if(items.length == 0){
    alert("Nao existem itens cadastrados")
  }else{
    alert(items)
  }
  break;
  case 3:
    alert("Good bye")
    break;
  default:
    alert("Opção inválida. Tente novamente!")
}
}
  