
// ej transformar todos los numeros mayores a 3 en false
// tenemos que buscar en el arreglo los numeros mayores a 3, por lo que hay que recorrer el erreglo
//mayorQueTres es el nombre que le damos al metodo
/* Array.prototype.mayoresQueTres = function() {
  var arregloModificado = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] > 3) {
      arregloModificado.push(false);
    } else {
      arregloModificado.push(this[i]);
    }
  }
  return arregloModificado;
}

var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var nuevoArreglo = arreglo.mayoresQueTres();

console.log(nuevoArreglo); */

// creamos una clase con un arreglo de paises

class Continente {
  constructor() {
    this.paises = [];
  }
}

// metodo que va agregar los paises
Continente.prototype.agregarPaises = function (pais) {
  this.paises.push(pais);
}

// nueva instancia de la clase Continente

var america = new Continente();

// usamos el nuevo metodo, que pushea el valor 'Venezuela' a la propiedad paises, que se creo en la clase, a tarvez del metodo .agregarPaises que creamos a la instancia america
america.agregarPaises('Venezuela')

// imprimios el valor de la propiedad de la instancia america.
console.log(america.paises);


