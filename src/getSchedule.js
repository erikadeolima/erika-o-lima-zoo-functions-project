const data = require('../data/zoo_data');
// criei essa função auxiliar para diminuir a complexidade do meu cód. Ela cria a estrutura da minha agenda,
// comparando o meu parametro com minha data, e personalizando minha agenda para a segunda feira.
function construtorAgenda(scheduleTarget) {
  const mySchedule = data.hours[scheduleTarget];
  const estaFechado = mySchedule.open === 0 && mySchedule.close === 0;
  const officeHour = estaFechado ? 'CLOSED'
    : `Open from ${mySchedule.open}am until ${mySchedule.close}pm`;
  const animaisEmExibição = data.species.filter((animal) =>
    animal.availability.includes(scheduleTarget));
  const exhibition = estaFechado ? 'The zoo will be closed!' : animaisEmExibição.map((especies) =>
    especies.name);
  return {
    officeHour,
    exhibition,
  };
}
// minha função principal compara meu parametro, se for um animal retorna um resultado (os dados que o animal esta em exibicao)
// se for um dia, ela chama minha funcao anterior para criar a estrutura da agenda.
// se n tiver parametro ou for algo que n seja um dia ou uma especie, ele me retorna a funcao anterior, mas de forma que o meu forEach leia cada
// item do meu objeto ( com o auxilo do obj keys) e crie uma agenda completa para todos os dias da semana.
function getSchedule(scheduleTarget) {
  if (data.species.filter((especie) => especie.name.includes(scheduleTarget)).length > 0) {
    const diasExibicao = data.species.find((animal) => animal.name === scheduleTarget).availability;
    return diasExibicao;
  }
  if (data.hours[scheduleTarget]) {
    const resultado = {};
    resultado[`${scheduleTarget}`] = construtorAgenda(scheduleTarget);
    return resultado;
  }
  const resultado = {};
  Object.keys(data.hours).forEach((obj) => {
    resultado[obj] = construtorAgenda(obj);
  });
  return resultado;
}

module.exports = getSchedule;
