var cep = document.getElementById("CEP")

cep.addEventListener("change", function (event) {
  let valor = verificarTraco(cep)
  if (valor.length == 8) {
    cep.style.border = "1px solid green"
    requisicao(valor)
  } else {
    cep.style.border = "1px solid red"
  }

});

function requisicao(cep) {
  // nome = document.getElementById("pk-name").value
  $.ajax({
    url: `https://viacep.com.br/ws/${cep}/json/`,
    method: "GET",
    dataType: "json",
    success: function (result) {
      preencherCampos(result);
    }
  });
}

function verificarTraco(cep) {
  if (cep.value.indexOf("-") == -1) {
    return cep.value
  } else {
    cep.value = cep.value.replace("-", "")
    return cep.value
  }
}

function preencherCampos(obj) {
  document.getElementById("endereco").value = obj.logradouro
  document.getElementById("bairro").value = obj.bairro
  document.getElementById("cidade").value = obj.localidade
  document.getElementById("estado").value = obj.uf
}