const botaoEngrenagem = document.getElementById('inputMostraFormulario');
var formulario = document.querySelector('form');
botaoEngrenagem.addEventListener('click', function(){
  if(botaoEngrenagem.checked){
    formulario.style.visibility = "visible";
  }else{
    formulario.style.visibility = "hidden";
  }

})

const inputBordas = document.getElementById('inputRangeBordas');
const bordas = document.querySelectorAll('table#periodica tr td');
const botaoBordas = document.getElementById('enviar');

botaoBordas.addEventListener('click', function(){
  for(let i in bordas){
    bordas[i].style.borderRadius = inputBordas.value + "%";
  }
})