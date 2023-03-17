const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
     let dateToday = new Date();
     let hr = dateToday.getHours();
     let min = dateToday.getMinutes();
     let s = dateToday.getSeconds();

     if (hr < 10) hr = '0' + hr;
     if (min < 10) min = '0' + min;
     if (s < 10) s = '0' + s;

     horas.textContent = hr;
     minutos.textContent = min;
     segundos.textContent = s;
})
window.alert('todas as fotos estao em processo de edicao desculpe pela qualidade das imagem atuais essas só são modelos.')