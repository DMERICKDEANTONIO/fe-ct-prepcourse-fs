function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
 let nuevoArray = []
 nuevoArray = arrayOfStrings.filter(function(ele){
  return ele[0] === "a" || ele [0] === "A"
 })
 return nuevoArray;
}
 

module.exports = filter;
