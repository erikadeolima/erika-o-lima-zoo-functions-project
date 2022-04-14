const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(especie, idade) {
  const minhaEspecie = species.find((animal) => (animal.name === especie)).residents;
  return minhaEspecie.every((resident) => resident.age > idade);
}

module.exports = getAnimalsOlderThan;
