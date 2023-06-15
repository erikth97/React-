import React, { useId, useState } from "react";
import { Contacto } from "../../models/contacto.class";
import ContactoComponent from "../pure/contacto";
import ContactoForm from "../pure/forms/contactoForm";

const ContactoContainer = () => {
  // Instanceamos un contacto con algunos datos por defecto
  const defaultContacto = new Contacto(
    useId(),
    "Erik",
    "Tamayo",
    "e.fabianth@gmail.com",
    true
  );
  // Creamos una lista de contactos
  const [contactos, setContactos] = useState([defaultContacto]);

  /**
   * Funcion para agregar nuevos contactos
   * @param {*} contacto : Parametro de tipo contacto que se recibe desde el componente hijo del formulario
   */
  function agregarContacto(nuevoContacto) {
    // Generamos una lista temporal en la que guardaremos el contacto
    const tempContactos = [...contactos];
    // Agregamos el contacto enviado desde el formulario
    tempContactos.push(nuevoContacto);
    // Actualizamos la lista de contactos pasando la lista temporal que habiamos creado
    setContactos(tempContactos);
  }

  function cambiarEstadoContacto(contacto) {
    // Encontraremos el indice del contacto recibido
    const index = contactos.indexOf(contacto);
    // Generamos una lista de contactos temporal
    const tempContactos = [...contactos];
    // Actualizamos el estado del contaco segun la posición que nos indico el indice
    tempContactos[index].conectado = !tempContactos[index].conectado;
    // Le pasamos al setContactos la nueva lista de contactos con el estado actualizado
    setContactos(tempContactos);
  }

  function eliminarContacto(contacto) {
    // Encontraremos el indice del contacto recibido
    const index = contactos.indexOf(contacto);
    // Generamos una lista de contactos temporal
    const tempContactos = [...contactos];
    // Utilizamos el metodo splice para eliminar el contacto de la lista temporal
    tempContactos.splice(index, 1);
    setContactos(tempContactos);
  }

  return (
    <div>
      {/* <ContactoComponent key={defaultContacto.id} contacto={defaultContacto} /> */}
      <table className="table text-light">
        <caption className="text-light fw-bold">Datos Contacto</caption>
        <thead>
          <tr>
            <th className="col">#</th>
            <th className="col">Nombre</th>
            <th className="col">Apellido</th>
            <th className="col">Correo</th>
            <th className="col">Estado</th>
            <th className="col" colSpan={2}>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => {
            return (
              <ContactoComponent
                key={contacto.id}
                contacto={contacto}
                index={index}
                cambiarEstado={cambiarEstadoContacto}
                eliminar={eliminarContacto}
              />
            );
          })}
        </tbody>
      </table>
      <div className="form-container">
        <ContactoForm agregar={agregarContacto} />
      </div>
    </div>
  );
};

export default ContactoContainer;
