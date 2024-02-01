function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var max = Math.max.apply(null, array);
  return array.indexOf(max);
  
}

module.exports = encontrarIndiceMayor;
