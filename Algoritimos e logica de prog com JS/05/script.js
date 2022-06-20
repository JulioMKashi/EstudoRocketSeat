/* 
Capture 10 itens para commpor a lista de um supermercado. 
Apos  capturar os itens, imprima-os, separando por virgula.
*/

let items = [];

for(let item = 0; item < 10; item++) {
  let itemName = prompt ("Digite o item " + (item + 1))

  items[item] = itemName
}

alert(items)
alert(items[0])