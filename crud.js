/**
 * CRUD - Create, Read, Update, Delete
 * CRUD - Criar, Ler, Atualizar, Deletar
 *
 * @author Pedro Vilaça - piique <https://github.com/piique/>
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

function readByIndex(index) {
  const dados = localStorage.getItem("dados")
    ? JSON.parse(localStorage.getItem("dados"))
    : [];
  return dados[index];
}

function readAll() {
  return localStorage.getItem("dados")
    ? JSON.parse(localStorage.getItem("dados"))
    : [];
}

function update(index, { desc, valor, data, conta, categoria }) {
  const dados = localStorage.getItem("dados")
    ? JSON.parse(localStorage.getItem("dados"))
    : [];
  dados[index] = { desc, valor, data, conta, categoria };
  localStorage.setItem("dados", JSON.stringify(dados));
}

function deleteAll() {
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
  readByIndex, // read
  readAll, // read
  update, // update
  deleteByIndex, // delete
  deleteAll, // delete
};
