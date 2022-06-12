
function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getUTCMinutes()
var seg = data.getSeconds()
msg.innerHTML = `Agora são ${hora}h:${min}m:${seg}s horas.`


if (hora > 0 && hora <= 12) {
  img.src = 'manha.png'
  document.body.style.background = '#C1B286'
}
  else if (hora > 12 && hora < 18) {
      img.src ='tarde.png'
      document.body.style.background = '#DB922A'
  }
  else {
      img.src = 'noite.png'
      document.body.style.background = '#1E2633'
  }
}