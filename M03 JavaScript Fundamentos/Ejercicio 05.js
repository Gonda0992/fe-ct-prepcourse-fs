/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   if(num > 0){
      return `Es positivo`;
   } else if (num < 0) {
      return `Es negativo`;
   } else {
      return false
   }
}
esPositivo(1);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   let simbolo = "!";
   return `${str}!`;
}
agregarSimboloExclamacion("hello world");

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   nombre;
   apellido;
   return `El alumno se llama ${nombre} ${apellido}`
}
combinarNombres("Sebastian","Montesinos")

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   return `Hola ${nombre}!`
}
obtenerSaludo("Miguel Angelo")

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   let area = alto * ancho;
   return `El area de un rectangulo es ${area}`;

}
obtenerAreaRectangulo(5,10);

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   let perimetro = lado * 4;
   return `El perimetro del cuadrado es ${perimetro}`;
}
retornarPerimetro(4);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   let areaTriangulo = ((base * altura) / 2);
   return `El area del triangulo es ${areaTriangulo}`;
}
areaDelTriangulo(10,5);

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   let tipoDeCambio = 1.2;
   let operacion = euro * tipoDeCambio;
   return `${euro} euro(s) que ingresaste equivale a ${operacion} dolares`;
}
deEuroAdolar(10);

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   if(letra.length > 1){
      console.log(`ingreso una palabra ó mas de 1 letra`);
   } else if (letra !== "a" && letra !== "e" && letra !== "i" && letra !== "o" && letra !== "u"){
      console.log(`ingreso una letra del abecedario`);
   } else {
      console.log(`Es vocal`)
   }
}
esVocal("a");

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
