function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  let sumaTotal = 0;
  let sumaParcial = 0;
  let numeroFaltante = null;

  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
  }

  for (let i = 1; i <= numeros.length + 1; i++) {
    sumaParcial += i;
  }

  numeroFaltante = sumaParcial - sumaTotal;

  if (numeroFaltante === 0) {
    return null;
  } else {
    return numeroFaltante;
  }
  

  
}

module.exports = encontrarNumeroFaltante;