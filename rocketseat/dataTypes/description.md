## Aula 01 - Strings (Cadeia de caracteres ou texto)
*Disclaimer: (``` javascript) Usado apenas para marcação*

O tipo de dados String consiste em uma cadeia de caracteres, ou seja, textos. Para denotar string no JavaScript são usados aspas duplas ( " " ), aspas simples ( ' ' ).
Por exemplo: 
``` javascript
    console.log("Isso é um texto")
    console.log('Isso também um texto')
```
Template literals ou template strings (` `), template literals permitem textos multilinhas e expressões de linguagem com os caracteres ${ }. Para denotar uma Template strings são usados as crases (` `).
Por exemplo:
``` javascript
    console.log(`A soma de duas unidades é ${1+1}`)
```
=============================================================================================================================
## Aula 02 - Numbers (Numeros)
*Disclaimer: (``` javascript) Usado apenas para marcação*

No JavaScript temos 4 tipos de números:
***Inteiros/Integer, Decimais(Flutuantes)/Float, Not a Number (NaN) infinitoInfinity***

*Inteiros/integer* = 14,25, -123,... 
*Decimais/float* = 14.25, 01283.003123, -21.41982123  // Nota: no javascript, os numeros decimais sao representados por "."
*Not-a-Number(NaN):*
 ``` javascript
 console.log('texto' * 123) // irá retornar NaN, pois não é possível realizar uma operação matemática entre um texto e numero.
```


=============================================================================================================================
## Aula 03 - Boolean
*Disclaimer: (``` javascript) Usado apenas para marcação*

No JavaScript, um dado boolean pode ter apenas 2 valores, verdadeiro (true) e falso (false).

=============================================================================================================================

## Aula 06 - Objects (objetos)
*Disclaimer: (``` javascript) Usado apenas para marcação*


O tipo de dado Object é estrutural, contendo atributos/propriedades e métodos/funcionalidades.
Um objeto é denotado com os caracteres { }, atributos e métodos com <nome: valor>.
Por exemplo:
``` javascript  
    {name: "iago", age: 20}

    {
        name: "iago", // name é o atributo/propriedade e "iago" é o método/funcionalidade
        age: 20  //age é o atributo/propriedade e 20 é o método/funcionalidade
    }
```
