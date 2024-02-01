function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return array.map(function(num, index){
    return num * index;
  })
}

module.exports = multiplicarElementosPorIndice;
