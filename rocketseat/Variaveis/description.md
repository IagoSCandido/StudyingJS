## Aula 01 - Conhecendo as variaveis(Variable)

Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores.<br>
Uma variavel tem a seguinte sintaxe:
``` javascript
    let nomeDaVariavel = "Valor" // Sendo "let" o tipo de variavel, nomeDaVariavel o nome da variavel(meio obvio), "=" indica que a variavel está recebendo algo e "Valor" é o valor que a variavel está recebendo.
```
Para criar uma variável, podemos usar uma das palavras reservadas: *var, let* e *const*, exemplo:<br> 
``` javascript
    var altura = 1.76
    let idade = 22
    const nome = "Iago"
```
var, let e const representam o tipo de variável.<br>
"altura idade 
Variaveís declaradas com *var* e *let* podem ter seu valor alterado, por exemplo:
``` javascript
    let nome = "iago" //iniciamente recebendo "iago" como valor.
    let nome = "Matheus"// variavel nome sendo declarado novamente,  recebendo "matheus" como um novo valor, a partir desse ponto, a variavel nome sempre terá "matheus" como valor, até que seja declarada com outro valor.
```
Já a variavel *const* não pode ter seu valor alterado, sendo assim, uma constante, por exemplo:
``` javascript
    const nome = "Iago" // inicialmente recebendo "iago" como valor.
    const nome = "Matheus" // caso a variavel seja declarada novamente com outro valor, irá retornar um erro.
```
