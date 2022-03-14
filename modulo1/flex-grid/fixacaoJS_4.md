```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
    let quantidade = arrayDeNumeros.filter(numero => numero === numeroEscolhido).length;
    if (quantidade > 0) {
      return `O número ${numeroEscolhido} aparece ${quantidade}x`;
    } else {
      return `Número não encontrado`
    }
}  ```