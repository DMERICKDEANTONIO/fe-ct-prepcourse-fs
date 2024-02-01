function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

 let numerosRepetidos = [];

 for (let i = 0; i < numeros.length; i++) {
   if (numeros.indexOf(numeros[i]) !== i && !numerosRepetidos.includes(numeros[i])) {
     numerosRepetidos.push(numeros[i]);{
      break;
     }
   }
 }
   return numerosRepetidos[0];
}

module.exports = encontrarElementoRepetido;