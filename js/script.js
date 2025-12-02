document.getElementById("calcular").addEventListener("click", function () {
  // Capturar os valores dos inputs.
  const pesoCarretel = parseFloat(
    document.getElementById("pesoCarretel").value
  );

  const valorCarretel = parseFloat(
    document.getElementById("valorCarretel").value
  );

  const pesoPeca = parseFloat(document.getElementById("pesoPeca").value);

  //Verifica se os valores são validos.
  if (
    isNaN(pesoCarretel) ||
    isNaN(valorCarretel) ||
    isNaN(pesoPeca) ||
    pesoCarretel === 0
  ) {
    alert("Preencha todos os valores corretamente.");
    return;
  }

  //Calcula o valor por grama.
  const valorPorGrama = valorCarretel / pesoCarretel;

  //Calcula o custo da peça.
  const custoPeca = valorPorGrama * pesoPeca;

  //Exibe o resultado
  document.getElementById("resultado").value = custoPeca.toFixed(2);
});
