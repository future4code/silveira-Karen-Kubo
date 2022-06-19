# Projeto Labebank

Projeto desenvolvido inteiramente com *Typescript* simulando um sistema bancário. Ele possui todas as funcionalidades básicas de um sistema bancário para validar os problemas diários da validação de dados e transações. 

## Funcionalidades:
### Criar conta
É possível criar uma conta no banco desde que se tenha uma idade igual ou maior a 18 anos, sendo necessário informar o <strong>nome, CPF e data de nascimento</strong>. Será gerado automaticamente com a finalização da inscrição o saldo e o extrato do usuário (com o valor, data e descrição das transações).

### Pegar saldo
O usuário consegue verificar o saldo da conta desde que informe o seu <strong>nome e CPF</strong> corretamente.

### Adicionar saldo
O usuário consegue adicionar o valor que desejar no saldo da conta desde que informe o seu <strong>nome e CPF</strong> corretamente.

### Pagar conta
O usuário pode pagar uma conta se passar o <strong>valor, descrição e data de pagamento</strong>. Caso o valor da data de pagamento não seja informada, o sistema irá considerar o pagamento para ser feito no mesmo dia. Além disso, o usuário não consegue pagar a conta se não tiver saldo suficiente no banco (ou se pagar uma conta atrasada), sendo necessário aumentar o seu saldo para efetuar a transação.

### Transferência interna
O usuário consegue também realizar pagamentos para outros clientes do banco, porém, deve ter saldo suficiente em sua conta para a realização da transferência.