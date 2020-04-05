function CalculadoraService(){

const SOMA = '+';
const SUBTRACAO = '-';
const DIVISAO= '/';
const MULTIPLICACAO= '*';

  function calcular(numero1, numero2, operacao){
    let resultado;

switch (operacao) {
  case SOMA:
    resultado = numero1 + numero2;
    break;
  case SUBTRACAO:
    resultado = numero1 - numero2;
    break;
  case DIVISAO:
    resultado = numero1 / numero2;
    break;
  case MULTIPLICACAO:
    resultado = numero1 * numero2;
    break;
    default:
    resultado=0;
}

    return resultado;
  }

  return [
    calcular,
    SOMA,
    SUBTRACAO,
    DIVISAO,
    MULTIPLICACAO
  ];

}

export default CalculadoraService;
