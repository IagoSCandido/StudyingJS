## Aula 01 - Strings (Cadeia de caracteres ou texto)
*Disclaimer: (``` javascript) Usado apenas para marcação.*,<br>
*Disclaimer: (\\) Usado apenas para marcação.*

O tipo de dados String consiste em uma cadeia de caracteres, ou seja, textos. Para denotar string no JavaScript são usados aspas duplas ( " " ), aspas simples ( ' ' ).<br>
Por exemplo: 
``` javascript
    console.log("Isso é um texto")
    console.log('Isso também um texto')
```
Template literals ou template strings (\` \`), template literals permitem textos multilinhas e expressões de linguagem com os caracteres ${ }. <br>
Para denotar uma Template strings são usados as crases (\` \`).<br>
Por exemplo:
``` javascript
    console.log(`A soma de duas unidades é ${1+1}`)
```


## Aula 02 - Numbers (Numeros)
*Disclaimer: (``` javascript) Usado apenas para marcação*

No JavaScript temos 4 tipos de números:<br>
**Inteiros/integer** = 14,25, -123,... <br>
**Decimais/float** = 14.25, 01283.003123, -21.41982123 <br>*Nota:* no javascript, os numeros decimais sao representados por "."<br>
**Not-a-Number(NaN):**
 ``` javascript
 console.log('texto' * 123) // Irá retornar NaN, pois não é possível realizar uma operação matemática entre um texto e numero.
```


## Aula 03 - Boolean
*Disclaimer: (``` javascript) Usado apenas para marcação*

No JavaScript, um dado boolean pode ter apenas 2 valores, verdadeiro (true) e falso (false).
``` javascript
    let iAmAlive = true
    let iAmRich = false
```
## Aula 04 - Undefined vs Null
*Disclaimer: (``` javascript) Usado apenas para marcação*

No JavaScript temos o tipo de dados Undefined, que representa valores indefinidos, e o tipo de dados null, que são muitas vezes confundidos.<br>
A diferença dos dois é que null é considerado como um objeto vazio, ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum.<br>

## Aula 06 - Objects (objetos)
*Disclaimer: (``` javascript) Usado apenas para marcação*

O tipo de dado Object é estrutural, contendo atributos/propriedades e métodos/funcionalidades.
Um objeto é denotado com os caracteres { }, atributos e métodos com nome: valor.<br>
Por exemplo:
``` javascript  
    {name: "iago", age: 20}

    {
        name: "iago", // name é o atributo/propriedade e "iago" é o método/funcionalidade
        age: 20  //age é o atributo/propriedade e 20 é o método/funcionalidade
    }
```
Para buscar uma informação armazenada no object, é usado a seguinte sintaxe:
``` javascript
let author = {  //variavel "let" de nome "author" recebendo "=" objeto "{}".
    name: "iago",  //name sendo um atributo tendo "iago" uma string como funcionalidade.
    age: 22, // age sendo um atributo tendo 22 um numero como funcionalidade.
    height: 1.76, // height sendo um atributo tendo  1.76 um numero como funcionalidade
    programming: true // programing sendo um atributo tendo true um boolean como funcionalidade.
}
    console.log(author.name) // author a variavel criada e name o atributo buscado. Nesse caso, o log resultante será: "iago", pois é a funcionalidade atribuida ao name.

```



## Aula 07 - Array (Vetor)
*Disclaimer: (``` javascript) Usado apenas para marcação*

O tipo de dados Array(Vetor) também é estrutural e consiste em uma lista de dados agrupados.<br>
Um Array é denotado com os caracteres *[ ]*.<br>
Por exemplo:
``` javascript
    let fruits = ["apple","banana", 1, 2]
 
```
