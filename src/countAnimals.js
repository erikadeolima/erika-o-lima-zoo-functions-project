const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return data.species.reduce((acc, especie) => {
      acc[especie.name] = especie.residents.length;
      return acc;
    }, {});
  }
  if (Object.keys(animal).length === 1) {
    const meuAnimal = data.species.find((obj) => obj.name === animal.specie);
    const quantosAnimais = meuAnimal.residents.length;
    return quantosAnimais;
  }
  if (Object.keys(animal).length === 2) {
    const meuAnimal2 = data.species.find((especie) => especie.name === animal.specie);
    return meuAnimal2.residents.filter((sexo) => sexo.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
