/**
 * @author Pedro Vilaça - piique <https://github.com/piique/>
 */

import { mockedData } from "./mock-data.js";
import CRUD from "./crud.js";

let atualItemId = 1;

function render() {
  const dados = CRUD.readAll();
  const tabela = document.getElementById("table-body");
  let linhas = "";
  for (let i = 0; i < dados.length; i++) {
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
      "</td><td>" +
      '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="setSelectedItemId(this)"> Atualizar </button>' +
      "<button class='btn btn-danger' style='margin-left: 13px' onclick='window.deletarRegistro(this)'>Deletar</button>" +
      "</td></tr>";
  }
  tabela.innerHTML = linhas;
}

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

function clearInputForm() {
  document.getElementsByClassName("descrição")[0].value = "";
  document.getElementsByClassName("valor")[0].value = "";
  document.getElementsByClassName("data")[0].value = "";
  document.getElementsByClassName("conta")[0].value = "";
  document.getElementsByClassName("categoria")[0].value = "";
}

function getDataFromUpdatedForm() {
  const desc = document.getElementsByClassName("descrição")[1].value;
  const valor = document.getElementsByClassName("valor")[1].value;
  const data = document.getElementsByClassName("data")[1].value;
  const conta = document.getElementsByClassName("conta")[1].value;
  const categoria = document.getElementsByClassName("categoria")[1].value;
  const despesa = {
    desc: desc,
    valor: valor,
    data: data,
    conta: conta,
    categoria: categoria,
  };
  return despesa;
}

function saveNewDespesa() {
  const despesa = getDataFromForm();
  CRUD.add(despesa);
  clearInputForm();
  render();
}

function deletarRegistro(evento) {
  const indexToDelete = evento.parentNode.parentNode.rowIndex - 1;

  CRUD.deleteByIndex(indexToDelete);
  render();
}

function setSelectedItemId(evento) {
  atualItemId = evento.parentNode.parentNode.rowIndex - 1;
  setModalFormInputs();
}

function setModalFormInputs() {
  const despesa = CRUD.readByIndex(atualItemId);
  document.getElementsByClassName("descrição")[1].value = despesa.desc;
  document.getElementsByClassName("valor")[1].value = despesa.valor;
  document.getElementsByClassName("data")[1].value = despesa.data;
  document.getElementsByClassName("conta")[1].value = despesa.conta;
  document.getElementsByClassName("categoria")[1].value = despesa.categoria;
}

function updateDespesa() {
  const data = getDataFromUpdatedForm();
  CRUD.update(atualItemId, data);
  render();
}

window.onload = function () {
  if (CRUD.readAll().length === 0) loadMockedData();
  render();
  window.saveNewDespesa = saveNewDespesa;
  window.deletarRegistro = deletarRegistro;
  window.setSelectedItemId = setSelectedItemId;
  window.updateDespesa = updateDespesa;
};
