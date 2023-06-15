import React from "react";
import ReactDOM from "react-dom/client";
// Importamos bootstrap al index para poder utilizarlo en todos los componentes del proyecto
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Los estilos personalizados van despues de los estilos de boostrap
import "./index.css";
import "./styles/contactoForm.css";
import "./styles/contacto.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
