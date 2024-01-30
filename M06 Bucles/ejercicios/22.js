function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  let days = 0;
  do {
    if (mes === 2) {
      days = 28;
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
      days = 30;
    } else {
      days = 31;
    }
  } while (false);
  return days;

}

module.exports = diasEnMes;
