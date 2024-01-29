function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let sumaNumeros = 1
  for(let i = 1; i < n; i++ ){
    sumaNumeros += i
  }
  return sumaNumeros
}

module.exports = sumarHastaN;
