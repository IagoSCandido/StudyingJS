## Aula 01
*Disclaimer: (``` javascript) Usado apenas para marcação*

Funções são tipos de dados estruturais, que são declarados dessa forma:
 ``` javascript
    function nomeFunção() { código à ser executado } 
```
e para executar a função, usa-se:
``` javascript
     nomeFunção(). //Uma função é importante para o agrupamento e reutilização de código.
```
===========================================================================================================================
## Aula 02 - Argumentos e parametros da função.
*Disclaimer: (``` javascript) Usado apenas para marcação*

Também é possível declarar funções dentro de variáveis, desta maneira:
``` javascript
    const variavelname= function() {} 
```
Uma parte importante de funções são os parâmetros, que são similares a variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses().
Ex: 
``` javascript
const sum = function(Number1, Number2){            //"Number1" e "Number2" são parameters(parametros)
     let sumResult = (Number1 + Number2)
     console.log(sumResult)
     return sumResult
}
    sum(20, 98) // "20" e "98" são arguments(argumentos)
```

===========================================================================================================================
## Aula 03 - Retornando valores dentro de uma função
*Disclaimer: (``` javascript) Usado apenas para marcação*

Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

===========================================================================================================================
## Aula 04 - Function Scope
*Disclaimer: (``` javascript) Usado apenas para marcação*

Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.
**Reminder**: quando se cria um declara uma variavel sem valor, essa variavel automaticamente tem o valor de undefined
Exemplo:
``` javascript
 let subject /*variavel sem valor, ou seja, o valor será undefined.
```

===========================================================================================================================
## Aula 09 - Funções construtoras
*Disclaimer: (``` javascript) Usado apenas para marcação*

são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado.
Por exemplo:
``` javascript
function Person(name) {
	this.name = name
	this.walk() = function() {
		return this.name + "está andando")
	}
}
const mayk = new Person("Mayk")
const joao = new Person("João")
```
