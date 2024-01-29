function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let product = 1;
  for (let i = a; i <= b; i++) {
    product *= i;
  }
  return product;
}

module.exports = productoEntreNúmeros;