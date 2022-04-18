const data = require('../data/zoo_data');

// Essa funcao executa a verifcacao do meu funcionario, se ele e um funcionario existente, ou ainda se  n for passado nenhum valor, ele me retorna se
// uma lista com as parametros solicitados de todos os funcionarios
function construtoraDaCobertura(buscaFuncionario) {
  const dadosFuncionario = data.employees;
  const localizaDado = dadosFuncionario.filter((valor) => {
    const dados = [valor.firstName, valor.lastName, valor.id];
    return dados.filter((arrFuncionario) => arrFuncionario.includes(buscaFuncionario)).length > 0;
  });/* o localizaDado filtra todos os funcionarios que contem um id ou nome, e retorna o array dos dados desse funcionario. */
  if (localizaDado.length === 0) return undefined; /* quando o localizaDado nao encontrar meu funcionario, ou seja meu array tem um tamanho igual a 0, ele me retorna indefinido */
  const { id } = localizaDado[0];/* quando o localizaDado encontrar meu funcionario, ele retornara um array (portanto de tamanho 1, com os dados na posicao 0), dai acesso a chave id desse array  */
  const filtroEspeciesComID = localizaDado[0].responsibleFor.map((especieId) =>
    data.species.filter((especie) => especie.id === especieId)[0]);/* o filtroEspeciesComID, usa o id das especies, fornecidos pelo localizaDado, especies que estao sob responsabilidade do meu funcionario */
  const species = filtroEspeciesComID.map((especie) => especie.name);/* o resultado do filtroEspeciesComID é um array, e esse array eu uso um map, que me retorna um array, */
  const fullName = `${localizaDado[0].firstName} ${localizaDado[0].lastName}`;
  const locations = filtroEspeciesComID.map((especie) => especie.location);
  return {
    id,
    fullName,
    species,
    locations,
  };
}

function getEmployeesCoverage(dado) {
  const buscaFuncionario = dado ? dado.name || dado.id : dado;/* serve para verificar se meu dado possui uma key id ou uma key name, não for um dos dois, ele ira utilizar o dado tal qual, e a probabilidade de retornar o erro e alta */
  if (buscaFuncionario === undefined) {
    return data.employees.map((employee) => construtoraDaCobertura(employee.id));
  }/* se nao dar nenhum dado eu retorno os dados solicitdos de todos meus funcionarios */
  const employee = construtoraDaCobertura(buscaFuncionario);
  if (employee) {
    return employee;
  }/* se minha funcao construtoraDaCobertura me retornar um valor verdadeiro e maior que 0, significa que meu funcionario e real */
  throw new Error('Informações inválidas');/* caso nenhuma das minhas condicoes anteriores forem reais me retorna o erro */
}

module.exports = getEmployeesCoverage;
