/*
    CRUD - Create, Read, Update, Delete
    CRUD - Criar, Ler, Atualizar, Deletar

    @Author: piique - https://github.com/piique/
*/

function add({ desc, valor, data, conta, categoria }) {
  const dados = localStorage.getItem("dados")
    ? JSON.parse(localStorage.getItem("dados"))
    : [];
  dados.push({ desc, valor, data, conta, categoria });
  localStorage.setItem("dados", JSON.stringify(dados));
}

function addMultipleData(data) {
  data.forEach((despesa) => add(despesa));
}

function readDataByIndex(index) {
  const dados = localStorage.getItem("dados")
    ? JSON.parse(localStorage.getItem("dados"))
    : [];
  return dados[index];
}

function readAllData() {
  return localStorage.getItem("dados")
    ? JSON.parse(localStorage.getItem("dados"))
    : [];
}

function updateByIndex(index, { desc, valor, data, conta, categoria }) {
  const dados = localStorage.getItem("dados")
    ? JSON.parse(localStorage.getItem("dados"))
    : [];
  dados[index] = { desc, valor, data, conta, categoria };
  localStorage.setItem("dados", JSON.stringify(dados));
}

function deleteAllData() {
  localStorage.removeItem("dados");
}

function deleteByIndex(index) {
  const dados = localStorage.getItem("dados")
    ? JSON.parse(localStorage.getItem("dados"))
    : [];
  dados.splice(index, 1);
  localStorage.setItem("dados", JSON.stringify(dados));
}

export default {
  add, // create
  addMultipleData, // create
  readDataByIndex, // read
  readAllData, // read
  updateByIndex, // update
  deleteByIndex, // delete
  deleteAllData, // delete
};
