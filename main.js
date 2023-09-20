function tocaSomPom (seletorAudio) {
  document.querySelector(idElementoAudio).play();
}

if (elemento && elemento.localName== 'audio'{
elemento.play();
}
else {
 //alert('elemento não encontrado');
console.log('elemento não encontrado ou seletor inválido');
}

}
  const listaDeTeclas = document.querySelectorAll(seletorAudio);

//para
  for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#Som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom (idAudio0;
    }

    {
