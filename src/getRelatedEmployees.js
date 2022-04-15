const data = require('../data/zoo_data');

function isManager(cod) {
  return data.employees.some((gerenciados) => gerenciados.managers.includes(cod));
}

function getRelatedEmployees(isManager, managerId) {
  if (isManager === true) {
    
    return haba;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
