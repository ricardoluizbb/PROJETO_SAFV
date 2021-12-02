var veiculo = document.querySelector('#veiculo')
var usuario = document.querySelector('#usuario')
var motorista = document.querySelector('#motorista')
var linha = document.getElementsByClassName('li')

function entrou(a) {
    switch (a) {
        case 1:
            veiculo.style.visibility = 'visible'
            break
        case 2:
            usuario.style.visibility = 'visible'
            break
        case 3:
            motorista.style.visibility = 'visible'
            break
    }
}


function saiu(a) {
    switch (a) {
        case 1:
            usuario.style.visibility = 'hidden'
            motorista.style.visibility = 'hidden'
            break
        case 2:
            veiculo.style.visibility = 'hidden'
            motorista.style.visibility = 'hidden'
            break
        case 3:
            veiculo.style.visibility = 'hidden'
            usuario.style.visibility = 'hidden'
            break
        default:
            veiculo.style.visibility = 'hidden'
            usuario.style.visibility = 'hidden'
            motorista.style.visibility = 'hidden'
    }

}


