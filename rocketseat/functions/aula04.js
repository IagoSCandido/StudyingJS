//function scope
let subject = 'create video' // quando se cria um declara uma variavel sem valor, essa variavel automaticamente tem o valor de undefined

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))



