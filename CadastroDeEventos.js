let inscrito = 'Alberto'
let dataAtual = 16/10/2021
let dataEvento = 20/10/2021
let idade = 20
let listaDeParticipantes = ['Joao', 'Francisco', 'Beatriz']

if (dataEvento > dataAtual) {
    console.log('Evento permitido.')
} else {
    console.log('Cadastro não permitido, pois a data é inválida.')
}
if (idade >= 18){
    console.log('Cadastro permitido.')
} else {
    console.log('Cadastro não permitido para essa idade.')
}

if (listaDeParticipantes.length < 100){
    listaDeParticipantes.push('Alberto')
}else{
    console.log('Cadastro não permitido nessa palestra por excesso de participantes. Escolha outra.')
}
console.log(listaDeParticipantes)