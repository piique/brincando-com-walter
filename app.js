import { mockedData } from "./mock-data.js";
import CRUD from "./crud.js";

function loadMockedData() {
  CRUD.addMultipleData(mockedData);
}

function getDataFromForm() {
  const desc = document.getElementsByClassName("descrição")[0].value;
  const valor = document.getElementsByClassName("valor")[0].value;
  const data = document.getElementsByClassName("data")[0].value;
  const conta = document.getElementsByClassName("conta")[0].value;
  const categoria = document.getElementsByClassName("categoria")[0].value;
  const despesa = {
    desc: desc,
    valor: valor,
    data: data,
    conta: conta,
    categoria: categoria,
  };
  return despesa;
}

function salvarDados() {
  const despesa = getDataFromForm();
  CRUD.add(despesa);
  exibirRegistros();
}

function exibirRegistros() {
  const dados = CRUD.readAllData();
  var tabela = document.getElementById("table-body");
  var linhas = "";
  for (var i = 0; i < dados.length; i++) {
    linhas +=
      "<tr><td>" +
      dados[i].desc +
      "</td><td>" +
      dados[i].valor +
      "</td><td>" +
      dados[i].data +
      "</td><td>" +
      dados[i].conta +
      "</td><td>" +
      dados[i].categoria +
      "</td></tr>";
  }
  tabela.innerHTML = linhas;
}

window.onload = function () {
  if (CRUD.readAllData().length === 0) loadMockedData();
  exibirRegistros();
  window.salvarDados = salvarDados;
};

// document.body.innerHTML = sayHi("John");

// window.salvarDados = salvarDados;
