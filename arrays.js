
/* var listaDeCompras = [];

listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'lechuga';
// console.log(listaDeCompras);

var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// como saber cuantos elementos tiene un array, su longitud

console.log(listaDeCompras.length);

// metodo length

let nombres = ['Daniel', 'Matias', 'Maria', 'David'].length;

console.log(nombres); */

// metodo .push

/* var colores = ['azul', 'amarillo'];
colores.push('rojo');
colores.unshift('verde');
colores.pop();
colores.shift();
console.log(colores); */

/* let nombres = ['Daniel', 'Matias', 'Maria', 'David']
let incluyeNombre = nombres.includes('Daniel');
console.log(incluyeNombre);
 */
/* 
let numeros = [1, 6, 8, 9];
// el array y su metodo se coloca dentro de una variable para asi llamar solo la variable
let mayorQueCinco = numeros.every((num) => {
  return num > 5
})
console.log(mayorQueCinco);
// retorna false, ya que no cumple la funcion de que todo los elementos sean mayor a 5
 */
/* 
var palabra = 'Henri';
console.log(palabra);
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);

var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);
 */

var numeros = [1, 2, 3, 4, 5];
/* 
numeros.forEach((num) => {
  console.log(num);
})

numeros.forEach((num) => {
  if (num === 3) {
    console.log(num);
  }
})
 */

var numerosMasUno = numeros.map((num) => {
  return num + 1;
});
console.log(numerosMasUno);









var array = ['Marzo', 'Diciembre', 'Julio', 'Noviembre'];

var meses = [];

  for (let i = 0; i < array.length; i++) {
      if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre' ) {
        console.log('No se encontraron los meses pedidos');
      } else if (array[i] === 'Enero') {
        meses.push('Enero');
    } else if (array[i] === 'Marzo') {
        meses.push('Marzo');
    } else if (array[i] === 'Noviembre') {
        meses.push('Noviembre');
    }
    console.log(meses);
  }

// ************

