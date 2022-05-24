// - **Exercício 3**

//     Crie uma aplicação Node que receba uma string representando **uma tarefa.** O programa deve adicionar a **nova tarefa** em uma variável que represente uma **lista de tarefas.** A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

let tarefas = ["Escovar os dentes", "Tomar café da manhã", "Estudar", "Levar o cachorro para passear"];
tarefas.push(process.argv[2])
console.log(tarefas);





