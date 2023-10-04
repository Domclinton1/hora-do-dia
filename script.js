function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var hello = window.document.getElementById('hello')
var data = new Date()
var minutos = data.getMinutes()
var hora =  data.getHours()


msg.innerHTML = `Agora são ${hora.toFixed()} horas e ${minutos.toFixed()} minutos.`
if (hora >= 0 && hora < 12) {
    img.src = 'fotodia.png'
    img.alt = 'Foto de um dia ensolarado nas montanhas'
    document.body.style.background = '#e2cd9f'
    hello.innerHTML = 'Bom dia pra quem é de bom dia!'
} else if (hora >+ 12 && hora < 18) {
    img.src= 'fototarde.png'
    img.alt = 'Foto de um por do sol'
    document.body.style.background = '#b9846f'
    hello.innerHTML = 'Boa tarde pra quem é de boa tarde!'
        
} else {
    img.src = 'fotonoite.png'
    img.alt = 'Foto de um belo céu estrelado.'
    document.body.style.background = '#515154'
    hello.innerHTML = 'Boa noite pra quem é de boa noite!'
    
}



}
function clicar() {
    var click = window.document.getElementById('div#author')
    window.location.assign("https://github.com/DomClinton1")    
 }