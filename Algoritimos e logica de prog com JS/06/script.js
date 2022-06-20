/* 
  ** Jogo da advinhacao **

  Apresente ao usuario: 
  Adivinhe o numero que estou pensando? Esta entre 0 e 10 

  Crie uma logica para gerar um numero aleatorio e verifique se o numero digitado eh o mesmo que o aleatorio gerado pelo sistema. 

  Enquanto o usuario no adivinhar o numero, mostrar a mensagem: 

  Erro, tente novamente: 

  Caso o usuario acerte o numero, apresentar a mensagem: 
  Parabens! voce advinhou o numero em x tentativas 

  substitua o x da mensagem, pelo numero de tentativas 
  */

 
 let result = prompt("Adivinhe o numero que estou pensando! Esta entre 0 e 10")
 const randomNumber = Math.round(Math.random() * 10)
 let xAttempts = 1;
 
 while(Number(result) != randomNumber){
   result = prompt("Erro, tente novamente: ")
    xAttempts++ 
  }

  if(xAttempts > 1){
    alert(`Parabens! O numero que pensei foi ${randomNumber} e voce advinhou o numero em ${xAttempts} tentativas`)
  }else{
    alert(`Parabens! O numero que pensei foi ${randomNumber} e voce advinhou o numero em ${xAttempts} tentativa`)
  }