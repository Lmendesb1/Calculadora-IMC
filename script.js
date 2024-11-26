document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Pega os valores do formulário
  const peso = parseFloat(document.getElementById("peso").value);
  const alturaCm = parseFloat(document.getElementById("altura").value);
  const alturaM = alturaCm / 100; // Converte cm para metros

  // Calcula o IMC
  const imc = peso / (alturaM * alturaM);

  // Exibe o resultado
  alert(`Seu IMC é: ${imc.toFixed(2)}`);

  // Avaliação do IMC
  if (imc < 18.5) {
    alert("Você está abaixo do peso");
  } else if (imc >= 18.5 && imc <= 24.9) {
    alert("Você está com o peso normal");
  } else if (imc >= 25 && imc <= 29.9) {
    alert("Você está com excesso de peso");
  } else if (imc >= 30 && imc <= 34.9) {
    alert("Obesidade Grau I");
  } else if (imc >= 35 && imc <= 39.9) {
    alert("Obesidade Grau II");
  } else if (imc >= 40) {
    alert("Obesidade Mórbida");
  }
  document.getElementById("myForm").reset();
});
