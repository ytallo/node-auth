# Questões

## O Node é multithreaded?
- Não, o javascript é uma linguagem que foi criada com o conceito de single-thread e, por decorrência, o Node.js também. Porém, desde a versão 10.5.0 está em desenvolvimento um módulo de worker_threads, mas o mesmo ainda é uma feature experimental.

## Arrow functions e functions são a mesma coisa?
- Arrow function é uma abreviação da sintaxe de uma functions, porém, ambas possuem diferenças de escopo. Arrow function são funções anônimas e possuem um **this** próprio.
## Como evitar dependência cíclica no Node?
- Elaborando bem a arquitetura do projeto e, principalmente, o design de componentes que terá em cada projeto. Pois, além de dependência ciclica externa (módulos), podemos ocasionar dependências ciclicas nos componentes. Ex: A -> B e B -> A;
## Cite uma complexidade na arquitetura de microsserviços que não aparece em um sistema monolítico;
- Uma dificuldade proveniente de arquiteturas de MS é o rollback de operações que envolvem inserção em banco de dados em mais de um serviço, como não temos controle de transação em outros serviços, muitas vezes precisamos fazer remoção física dos registros inseridos em outros MS.
## Como você centralizaria verticalmente uma <div> na tela?
```
<div style="display: flex; justify-content: center;"></div>
```
## Em um stack comum que inclui React, por que podemos usar as mais novas features do javascript sem se preocupar com compatibilidade de navegador?
- Pois, comumente é utilizado o babel para fazer a conversão do ECMAScript para o javascript nativo. Com isso, diminui a preocupação de navegadores terem suporte a versão do ES utilizado.
## Cite e exemplifique 2 efeitos colaterais comuns no javascript;
- Alteração de variável de escopo global
```
let message = 'Olá';

function showMessage() {
    message = 'Olá Mundo!';
    console.log(message);
}

showMessage(); //Olá Mundo
console.log(message); //Olá Mundo
```
- Criação de variáveis que continuarão disponíveis em todo o escopo sem que haja mais utilização para as mesmas.
```
let myArray = [1, 2, 3];

for(let x=0, length = myArray.length; x < length; x++) {
	// ...
}
``` 
> "Preventing Side Effects in JavaScript", https://davidwalsh.name/preventing-sideeffects-javascript