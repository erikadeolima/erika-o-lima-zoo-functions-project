const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((gerente) =>
    gerente.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((obj) =>
      obj.managers.includes(managerId)).map((arr) => `${arr.firstName} ${arr.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
