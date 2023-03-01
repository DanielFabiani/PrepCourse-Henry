
var deportes = { 
  conBalon: ['Football', 'Basketball', 'Rugby'], 
  sinBalon: ['Boxeo', 'Surf', 'Trekking']
};

// deportes -> nombre del objeto
// entre las laves { } las Propiedades del objeto
// conBalon: -> clave o llave
// entre los corchetes ['Football', 'Basketball', 'Rugby'] un arreglo con el Valor
// sinBalon: ['Boxeo', 'Surf', 'Trekking']
//  clave:       Valor

//Ejemplo; vamos a reunir la informacion de una persona.

var persona = { 
  nombre: 'Daniel',
  edad: 37,
  estudios: {programador : true}
};

console.log(persona.edad); 

persona.nombre = 'Daniel Aaron';

console.log(persona.nombre);

// **************************

var autos = {};
autos.marcas = ['Ford', 'Chevrolet', 'Toyota'];

delete autos.marcas;

console.log(autos);

// *************************

var misFunciones = { 
  saludar: function() {
    console.log('Hola');
  }
};

misFunciones.saludar();

var otraFuncion = {
  saludo: () => {
    console.log('Holis');
  }
};

otraFuncion.saludo();

// *************************

var atuendos = {
  manos: ['Guantes', 'Anillos'],
  pies: ['Zapatos', 'Botas']
};

atuendos['piernas'] = ['Bermudas', 'Pantalones'];

console.log(atuendos);

// ********************************

var comidas = {};

var diferenciaDeNotaciones = function (propUno, propDos) {
  comidas.propUno = ['Frutas', 'Verduras'];
  comidas[propDos] = ['Hamburguesa', 'Papas fritas'];
};

diferenciaDeNotaciones('Saludables', 'NoSaludables');
console.log(comidas);


var comidas = {};

var diferenciaDeNotaciones = function (propUno, propDos) {
  comidas[propUno] = ['Frutas', 'Verduras'];
  comidas[propDos] = ['Hamburguesa', 'Papas fritas'];
};

diferenciaDeNotaciones('Saludables', 'NoSaludables');
console.log(comidas);

// Metodos pata el objeto global object

var libro = {
  autor: 'Borges',
  genero: 'policial',
  año: 1990
};

// queremos buscar si el objeto libro tiene la propiedad 'nombre'
var tienePropiedad = libro.hasOwnProperty('nombre');
console.log(tienePropiedad);
// false

var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

// metodo para recorrer un objeto
var mundo = {
  continentes: 7,
  paises: 195,
  ocseanos: 5
};

for (var prop in mundo) {
  console.log('Esta es la propiedad: ' + prop);
  console.log('Este es su valor: ' + mundo[prop]);
}
// En cada iteración, se almacena el nombre de la propiedad actual en la variable "prop".
// El uso de corchetes en la línea "mundo[prop]" permite acceder al valor de la propiedad actual a través del nombre de la variable "prop", que contiene el nombre de la propiedad actual en cada iteración del bucle.

// Objeto this

var mascota = {
  animal: 'Perro',
  raza: 'Pastor Aleman',
  amistoso: true,
  dueño: 'Daniel',
  info: function() {
    console.log('Mi perro es un ' + this.raza);
  },
}

mascota.info();







