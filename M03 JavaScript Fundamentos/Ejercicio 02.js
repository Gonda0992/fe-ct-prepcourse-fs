/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   return string;
}
devolverString("Lucas")

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   let resultado = x + y;
   return resultado;
}
suma(4,5);

function resta(x, y) {
   // Retorna el resultado de la resta.
   return x - y;
}
resta(5,2);

function divide(x, y) {
   // Retorna el resultado de su división.
   return x / y;
}
divide(10,2);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   return x * y;
}
multiplica(4,4);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   let resultado = x % y;
   return resultado;
}
obtenerResto(25,4);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
