/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  const otroGato = {
    nombre: nombre,
    edad: edad,
    meow: (maullido) => {
      return "Meow!";
    },
  };
  return otroGato;
}
console.log(crearGato("Tom", 1).nombre);

function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retornar el objeto.
  const otroUsuario = {
    nombre: nombre,
    email: email,
    password: password,
  };
  return otroUsuario;
}
console.log(
  nuevoUsuario("Sebastian", "sebas2000@email.com", "sebas159").password
);

function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  objeto[propiedad] = null; 
  return objeto;
}
const miObjeto = {};
console.log(agregarPropiedad(miObjeto, 'propiedad'))
// console.log(miObjeto);

function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // [NOTA]: no necesitar retornar nada.
  objeto[metodo]();
}
const newObject = {
  metodo : function () {}
}
invocarMetodo(newObject, 'metodo');
console.log(newObject)

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  return objetoMisterioso.numeroMisterioso * 5;
}
const objetoMisterioso = {numeroMisterioso : 4}
console.log(multiplicarNumeroDesconocidoPorCinco(objetoMisterioso));

function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  delete objeto[propiedad];
  return objeto;
}
const nuevoObjeto= {
  "x" : 1,
  "y" : 2,
  "z" : null 
}
eliminarPropiedad(nuevoObjeto, 'z');
console.log(nuevoObjeto);

function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso retornar true. Caso contrario, false.
  if(objetoUsuario.email === null || objetoUsuario.email === undefined || parseInt(objetoUsuario.email)){
    return false;
  } else {
    return true;
  }
}
const objetoUsuarioEmail = {id : 1, email : 'john@email.com'}
console.log(tieneEmail(objetoUsuarioEmail));

function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso retornar true. Caso contrario, false.
  return propiedad in objeto;
}
const objetoRecibido = {nombre : 'string'};
console.log(tienePropiedad(objetoRecibido, 'nombre')); //el argumento 'nombre' representa el nombre de la propiedad del objeto

function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso retornar true. Caso contrario, false.
  if(password === objetoUsuario.password ){
    return true;
  } else {
    return false;
  }
}
const usuario = {password : 123};
console.log(verificarPassword(usuario, 123))

function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
}
const objetoUsuario = {password: 'clave'};
console.log(actualizarPassword(objetoUsuario, 'nueva clave'))

function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
objetoUsuario.amigos = [...objetoUsuario['amigos'], nuevoAmigo]; //{ amigos: [ 'pepe', 'pedro', 'marlon' ] }
return objetoUsuario;
}
const nombresDeAmigos = {amigos : ["pepe","pedro"]};
console.log(agregarAmigo(nombresDeAmigos, 'marlon'))

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.                               
  for(i=0; i<objetoMuchosUsuarios.length; i++){
    objetoMuchosUsuarios[i].esPremium = true
  }
  return objetoMuchosUsuarios;
} 
let objetoMuchosUsuarios = [{'esPremium':false},{'esPremium':false},{'esPremium':true}];
console.log(pasarUsuarioAPremium(objetoMuchosUsuarios));

function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  let totalLikes = 0;
  for(valores in objetoUsuario.posts){
    totalLikes = totalLikes + objetoUsuario.posts[valores].likes;
  }
    return totalLikes;
}
const objetoLikesDeUsuario = {
  posts : [{likes:10},{likes:11},{likes:12}]
}
console.log(sumarLikesDeUsuario(objetoLikesDeUsuario))


function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  objetoProducto.calcularPrecioDescuento = function(){ 
    const preciofinal = objetoProducto.precioDelProducto - (objetoProducto.precioDelProducto * objetoProducto.porcentanjeDeDescuento);
    return preciofinal;
  }
}
producto = {
  precioDelProducto : 100,
  porcentanjeDeDescuento : 0.50,
}
agregarMetodoCalculoDescuento(producto),
console.log(producto.calcularPrecioDescuento())

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearGato,
  nuevoUsuario,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};
