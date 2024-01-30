function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

   var arr1 = str1.split("");
   var arr2 = str2.split("");
 
  
   arr1.sort();
   arr2.sort();
 

   var nuevaStr1 = arr1.join("");
   var nuevaStr2 = arr2.join("");
 
   if (nuevaStr1 === nuevaStr2) {
     return true;
   } else {
     return false;
   }
}

module.exports = esAnagrama;
