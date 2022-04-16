const data = require('../data/zoo_data');

function getAnimalsOlderThan(especie, idade) {
  const minhaEspecie = data.species.find((animal) => (animal.name === especie)).residents;
  return minhaEspecie.every((resident) => resident.age > idade);
}

module.exports = getAnimalsOlderThan;
