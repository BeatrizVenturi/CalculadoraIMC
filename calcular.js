function calculo() {
  let nome = document.getElementById("Nome").value;
  let peso = document.getElementById("Peso").value;
  let altura = document.getElementById("Altura").value;

  const valor = peso / (altura * altura);

  if (valor < 15.99) {
    document.getElementById("resultado").innerHTML = `Magreza Grave, ${nome} vá ao médico`;
    document.getElementById("resultado").className = `magreza_grave`;
  } else if (valor <= 16.99) {
    document.getElementById("resultado").innerHTML =`Magreza Moderada, ${nome} vá ao médico`;
    document.getElementById("resultado").className = "magreza_moderada";
  } else if (valor <= 18.5) {
    document.getElementById("resultado").innerHTML = `Magreza Leve, ${nome} vá ao médico`;
    document.getElementById("resultado").className = `magreza_leve`;
  } else if (valor <= 24.9) {
    document.getElementById("resultado").innerHTML = `Saudável, ${nome} está saudável`;
    document.getElementById("resultado").className = `saudavel`;
  } else if (valor <= 29.9) {
    document.getElementById("resultado").innerHTML = `Sobrepeso, ${nome} nada mal`;
    document.getElementById("resultado").className = `sobrepeso`;
  } else if (valor <= 34.9) {
    document.getElementById("resultado").innerHTML = `Obesidade Grau 1, ${nome} vá ao médico`;
    document.getElementById("resultado").className = `obesidade_grau_1`;
  } else if (valor <= 39.9) {
    document.getElementById("resultado").innerHTML = `Obesidade Grau 2(Severa), ${nome} vá ao médico`;
    document.getElementById("resultado").className = `obesidade_grau_2`;
  } else if (valor >= 40) {
    document.getElementById("resultado").innerHTML = `Obesidade Grau 3(Mórbida), ${nome} vá ao médico`;
    document.getElementById("resultado").className = `obesidade_grau_3`;
  }
}
