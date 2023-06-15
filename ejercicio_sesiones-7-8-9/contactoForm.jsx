import React, { useId, useRef } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../../models/contacto.class";

const ContactoForm = ({agregar}) => {
  // Generamos un id unico utilizando el hook useId()
  const newId = useId();
  // Referenciamos los datos del formulario
  const refNombre = useRef("");
  const refApellido = useRef("");
  const refEmail = useRef("");

  /**
   *
   * @param {*} e
   */
  function submitContacto(e) {
    // Quitamos el comportamiento por defecto del submit de recargar la página
    e.preventDefault();
    const nuevoContacto = new Contacto(
      newId,
      refNombre.current.value,
      refApellido.current.value,
      refEmail.current.value,
      false
    );
    agregar(nuevoContacto);
  }

  return (
    <form onSubmit={submitContacto} className="d-flex flex-wrap mb3">
      <div className="p-2 w-100 text-primary">
        <h3>Agregar Contacto: </h3>
      </div>
      <div className="p-2 flex-grow-1">
        <label for="formInputNombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="formInputNombre"
          ref={refNombre}
          required
        />
      </div>
      <div className="p-2 flex-grow-1">
        <label for="formInputApellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="formInputApellido"
          ref={refApellido}
          required
        />
      </div>
      <div className="p-2 w-100">
        <label for="formInputEmail" className="form-label">
          Correo
        </label>
        <input
          type="email"
          className="form-control"
          id="formInputEmail"
          ref={refEmail}
          required
        />
      </div>
      <div className="form-container p-2">
        <button type="submit" className="btn btn-primary form-btn">
          Agregar
        </button>
      </div>
    </form>
  );
};

ContactoForm.propTypes = {
  agregar: PropTypes.func.isRequired,
};

export default ContactoForm;
