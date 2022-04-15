const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return {
    senior: entrants.filter((idade3) => idade3.age >= 50).length,
    child: entrants.filter((idade2) => idade2.age < 18).length,
    adult: entrants.filter((idade1) => idade1.age >= 18 && idade1.age < 50).length };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const myFunction = countEntrants(entrants);
  const seniorEntrada = myFunction.senior * data.prices.senior;
  const adultEntrada = myFunction.adult * data.prices.adult;
  const childEntrada = myFunction.child * data.prices.child;
  const entradasSoma = adultEntrada + childEntrada + seniorEntrada;
  return entradasSoma;
}

module.exports = { calculateEntry, countEntrants };
