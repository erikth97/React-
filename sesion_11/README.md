# Estructuracion de Proyectos, mejores practicas para mantener un proyecto limpio.
## MVC is a way of thinking to structure your web application. It’s popular because it’s used by many frameworks that implement that structure (rails, cakephp, django etc.).
The architecture stems from the traditional flow of a web application.

## View — Client
Displays visualization of the data to the user. Only connected to the controller.

## Controller — Server
Processes server-side logic and acts as a middleware between View and Model, i.e. controlling the flow of data.

## Model — Database
Processing data from or to

## Controller: Interactua entre el Modelo (datos) y la vista.
En el MVCV tenemos un controller para las vistas de cada componente.
Modell: El cntrolador recibe datos del modelo y a su ves actualiza el modelo.
Los archivos JSX estan compuestos de controller (que es la clase o la funcion), la vista es el el JSX (return)
El Modell (el estado de los datos que puede ser una clase o la informacion). es el estado del compontente o de la aplicacion.
El controller envia los datos a la vista atraves de Hooks, funciones , etc. Es el JS puro que tenemos dentro de la funcion. 
