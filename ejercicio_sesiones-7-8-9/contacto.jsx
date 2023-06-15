import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

const ContactoComponent = ({ contacto, index, cambiarEstado, eliminar }) => {
  /**
   * Función que cambia el renderizado del estado segun su valor
   */
  function estadoContacto() {
    if (contacto.conectado === false) {
      // Si esta desconectado el icono estara en gris
      return <i className="bi bi-circle-fill text-secondary"> Desconectado</i>;
    } else {
      // Si esta en linea, el icono estara en verde
      return <i className="bi bi-circle-fill text-success"> En linea </i>;
    }
  }

  function botonesEstado() {
    if (contacto.conectado === true) {
      // Si esta desconectado el icono estara en gris
      return (
        <>
          <i
            onClick={() => cambiarEstado(contacto)}
            className="bi bi-box-arrow-in-left actions-contacto text-secondary"
          >
            {" "}
            Logout
          </i>
        </>
      );
    } else {
      // Si esta en linea, el icono estara en verde
      return (
        <>
          <i
            onClick={() => cambiarEstado(contacto)}
            className="bi bi-box-arrow-in-right actions-contacto text-success"
          >
            {" "}
            Login
          </i>
        </>
      );
    }
  }

  return (
    <tr>
      {/* Este lo utilizaremos como si fueran los registros de una lista en cierto orden */}
      <td> {index + 1} </td>
      <td> {contacto.nombre} </td>
      <td> {contacto.apellido} </td>
      <td> {contacto.email} </td>
      <td> {estadoContacto()}</td>
      <td> {botonesEstado()}</td>
      <td>
        <i
          onClick={() => eliminar(contacto)}
          class="bi bi-trash3 text-danger actions-contacto"
        ></i>
      </td>
    </tr>
  );
};

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
  index: PropTypes.number.isRequired,
  cambiarEstado: PropTypes.func.isRequired,
  eliminar: PropTypes.func.isRequired,
};

export default ContactoComponent;
