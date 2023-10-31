/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   if(array.length > 0){
      return(array[0]);
   }
}
let array = ["Perú","Argentina","Chile"];
let primerElemento = devolverPrimerElemento(array);
console.log(primerElemento);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   if (array.length > 0) {
      return (array[array.length - 1]);
    } else {
      return (null); 
    }
}
let array1 = [1,3,45,5,76];
let ultimoElemento = devolverUltimoElemento(array1);
console.log(ultimoElemento);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   return(array.length);
}
let array2 = ["perro","gato","raton",28,4,31];
var longitudDelArray = obtenerLargoDelArray(array2);
console.log(longitudDelArray);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   return array.map(function (e) {
      return e + 1;
   })
 }
let arrayOriginal = [1,2,3,4,5];
let resultadoFinal = incrementarPorUno(arrayOriginal);
console.log(resultadoFinal);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   array.push(elemento);
   return array;
}
let array4 = [1,2,3,4];
let resultado = agregarItemAlFinalDelArray(array4,5);
console.log(resultado);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   array.unshift(elemento);
   return array;
}
let array5 = [20,30,40,50];
let agregarElemento = agregarItemAlComienzoDelArray(array5, 10);
console.log(agregarElemento);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   return palabras.join(" ");
}
palabras = ["HELLO WORLD"];
let conversion = dePalabrasAFrase(palabras);
console.log(conversion);
console.log(typeof(conversion));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   return array.includes(elemento);
}
let frutas = ["pera","manzana","frejol"];
let buscar = arrayContiene(frutas,'pera');
console.log(buscar);

/*
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   let suma = 0;
   for(i = 0; i < arrayOfNums.length; i++){
      suma = suma + arrayOfNums[i];
   }
   return(suma)
}
let arrayOfNums = [1,2,3,4];
let sumarValores = agregarNumeros(arrayOfNums);
console.log(sumarValores);*/

/*otra manera de resolver el ejercicio de arriba seria usando el metodo .reduce()*/
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   let resultado = arrayOfNums.reduce((acumulador,elemento)=> acumulador + elemento,0);
   return resultado;
}
arrayOfNums = [1,2,3,4,5];
let result = agregarNumeros(arrayOfNums);
console.log(result);   

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   let suma = 0;
   for(i=0; i<resultadosTest.length; i++ ){
      suma = suma + resultadosTest[i];
   }
   let promedio = suma / resultadosTest.length;
   return promedio;
}
resultadosTest = [10,15,12,18,20];
let resultadoPromedio = promedioResultadosTest(resultadosTest);
console.log(resultadoPromedio);


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
      return Math.max(...arrayOfNums)
}
arrayOfNums = [12,43,2,54,6,76];
console.log(numeroMasGrande(arrayOfNums));


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   //arguments.length***
   let multiplicados = 1;
   if(arguments.length === 0){
      return 0
   } if (arguments.length == 1){
      return arguments[0];
   }
      for(i=0;i<arguments.length;i++){
      multiplicados = multiplicados * arguments[i]
     }
     return multiplicados;
}
console.log(multiplicarArgumentos());


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   let mayorA18 = array.filter(extraerNumeros => extraerNumeros > 18);
   return mayorA18.length;
}
array = [2,4,6,20,22,24,26,8,10,12,14];
console.log(cuentoElementos(array));


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   if (numeroDeDia === 2) {
      return `Es dia laboral`;
  } else if (numeroDeDia === 3) {
      return "Es dia laboral";
  }else if (numeroDeDia === 4) {
      return "Es dia laboral";
  }else if (numeroDeDia === 5) {
      return "Es dia laboral";
  }else if (numeroDeDia === 6) {
      return "Es dia laboral";
  } else {
      return "Es fin de semana";
  }
}
console.log(diaDeLaSemana(1));


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   num ;
   let aString = num.toString();
   if(aString.startsWith("9")){
      return true
   } else {
      return false
   }

}
console.log(empiezaConNueve(999898))


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   let numerosIguales = array.every(function(valores,indice,array){
      return valores === array[0];
   })
   return numerosIguales;
}
array = [2,2,2,2];
console.log(todosIguales(array));

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   let mesesEncontrados = [];

   for (i=0; i<array.length; i++) {
       if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
           mesesEncontrados.push(array[i]);
       }
   }
   if(mesesEncontrados.length === 3){
       return mesesEncontrados;
   } else {
       return "No se encontraron los meses pedidos"
   }
}
console.log(mesesDelAño(["Marzo","Noviembre","Enero"]))


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   let resultadoDeLaMultiplicacion = [];
   let multiplicador = 6;
   for(i=0; i<=10; i++){
      let result = multiplicador * i;
      resultadoDeLaMultiplicacion.push(result)
   }
   return resultadoDeLaMultiplicacion;
}
console.log(tablaDelSeis());

/*otra manera de resolverlo
function tablaDelSeis(numero) {
   let resultadoDeLaMultiplicacionDe6 = [];
   for(i=0; i<=10; i++){
       let resultado = numero * i;
       resultadoDeLaMultiplicacionDe6.push(resultado);
   }
   return resultadoDeLaMultiplicacionDe6;
}
numeros = 6;
let rspta = tablaDelSeis(numeros);
console.log(rspta); */

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
      var mayoresACien = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i] > 100) {
          mayoresACien.push(array[i]);
        }
      }
      return mayoresACien;
    }
    var arregloOriginal = [50, 120, 80, 150, 200, 90, 110];
    var resultadofinal = mayorACien(arregloOriginal);
    console.log(resultadofinal);

//OTRA MANERA DE RESOLVER EL EJERCICIO
/*function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  let mayoresDeCien = [];
  for(elemento of array){
      if(elemento > 100){
          mayoresDeCien.push(elemento);
      }
  }
  return mayoresDeCien;
}
array = [0,1,101,50,200,150,10,155,160,190];
let result = mayorACien(array);
console.log(result);*/
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   let arrayAcumulador = [];
   for(i=0; i<10; i++){
      num = num + 2;
      if(num === 10){
         return "Se interrumpió la ejecución";
      } else{
         arrayAcumulador.push(num)
      }
   }
   return arrayAcumulador;
}
console.log(breakStatement(10)); 


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   let arrayAcumulador = [];
   for(i=0; i<10; i++){
      num = num + 2;
      if(i === 4){
         continue;
      }
      arrayAcumulador.push(num);
   }
   return arrayAcumulador;
}
console.log(continueStatement(50));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
