/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

// function crearUsuario() {
//    // Crea una Clase de ES6 o una función constructora llamada "Usuario".
//    // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
//    // El valor de cada propiedad la recibirá por parámetro.
//    // Además, esta clase debe tener un método llamado "saludar".
//    // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
//    // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
//    // Retornar la clase.
//    class Usuario {
//       constructor (usuario, nombre, email, password){
//          this.usuario = usuario;
//          this.nombre = nombre;
//          this.email = email;
//          this.password = password;
//       }

//       saludar (){
//          return 'Hola, mi nombre es ' + this.nombre
//       }
//    }
//    const Persona1 = new Usuario ('usuario1','Alessandro','aless24@email.com',280324);
//    console.log(Persona1.saludar ());
//    return Usuario;
// }
// crearUsuario();

// OTRA MANERA DE DESARROLLAR USANDO FUNCION CONSTRUCTORA
function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   function Usuario (usuario, nombre, email, password){
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
   }

   Usuario.prototype.saludar = function (){
      return `Hola, mi nombre es ${this.nombre}`
   }
   const Usuario1 = new Usuario ('usuario_01','Alessandro','aless24@email.com',28030407);
   console.log(Usuario1.saludar());
   return Usuario;
 }
 crearUsuario();

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".   
   // Tu código:
   Usuario.prototype.saludar = function () {
      return "Hello World!";
   }
}
agregarMetodoPrototype(Usuario);

function Usuario(usuario) {
   this.usuario = usuario;
}
const Saludo = new Usuario('Aless');
console.log(Saludo.saludar())



function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   String.prototype.reverse = function () {
      let stringInvertida = '';
      for (i= this.length -1; i>=0; i--){
         stringInvertida = stringInvertida + this[i];
      }
      return stringInvertida;
   }
   const Palabra = new String('PAPÁ');
   console.log(Palabra.reverse())
}
agregarStringInvertida();


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};


// Cuando accedes a una propiedad o método en una cadena primitiva, JavaScript envuelve automáticamente la cadena primitiva 
// en un objeto String temporal para poder realizar la operación. 