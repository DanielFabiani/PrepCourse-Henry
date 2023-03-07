class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log('Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años');
  }
}

class Programador extends Persona {
  constructor(nombre, edad, añosDeExperiencia) {
    super(nombre, edad, añosDeExperiencia)
    this.añosDeExperiencia = añosDeExperiencia;
  }
  codear() {
    console.log('Mi nombre es ' + this.nombre + ' y tengo ' + this.añosDeExperiencia + ' años de experiencia');
  }
}

var daniel = new Persona ('Daniel', 37);
var programador = new Programador ('Martin', 29, 4);
daniel.saludar();
programador.codear();
programador.saludar();

