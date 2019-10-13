var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");


var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
  var tdpeso = pacientes[i].querySelector(".info-peso");

  var tdimc = pacientes[i].querySelector(".info-imc");
  var tdaltura = pacientes[i].querySelector(".info-altura");
  var altura = tdaltura.textContent;
  var peso = tdpeso.textContent;

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if(!pesoEhValido){
    //alert("peso invalido");
    pesoEhValido = false;
    tdimc.textContent = "peso invalido!";
    pacientes[i].classList.add("paciente-invalido1");
    }
    //pacientes[i].style.backgroundColor = "red";

  if(!alturaEhValida){
      //alert("altura invalida");
      alturaEhValida = false;
      tdimc.textContent = "altura invalida";
      pacientes[i].classList.add("paciente-invalido");
  }


  if(pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso,altura);
    tdimc.textContent = imc;
  }


  console.log(imc);
}


titulo.addEventListener("click", function(){
  console.log("Ola fui clicado");
});

function mostraMensagem(){
  console.log("Ola fui clicado!");
}


function calculaImc(peso,altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso){
  if (peso >= 0 && peso < 200) {
    return true;
  }else{
    return false;
  }
}


function validaAltura(altura){
  if(altura >= 0 && altura <= 3.0){
    return true;
  }else{
    return false;
  }
}
