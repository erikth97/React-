export class Contacto {
    id = "";
    nombre = "";
    apellido = "";
    email = "";
    conectado = false;
  
    constructor(id, nombre, apellido, email, conectado) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.conectado = conectado;
    }
  }
