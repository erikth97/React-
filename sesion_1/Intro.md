     // INTRODUCCION A REACT JS 
//Que es un SPA
Una web SPA (Single Page Aplication) es una forma de desarrollo web en la que la pagina web esta contenida en un unico archivo HTML.
Mientras navegamos por la web s iran solicitando los contenidso al servidor.
De esta forma se mejoran los tiempos de respuesta y por tanto la expericiencia del usuario.

//Que es REACT
Es una libreria de JS para crear interfaces de usuario. Utiliza funciones llamadas "HOOCKS".

//Ventajas
Es de codigo abierto. tiene las siguientes caracterisiticas: Mayor velocidad, Arquitectura basada en COMPONENTES los cuales son reutilizables, Desarrollo declarativo, Anida componentes lo que permite el intercambio de informacion de componentes superioires a inferioires y vicevercsa, Isomorfismo (es universal ya que podemos usarlo tanto en un navegador (cliente) como en Node.js (servidor) podemos entonces compartirla entre ambos entornos de ejecución.), Agilidad desarrollo

//Velocidad
Uno de los aspectos que mas destacan de React es su velocidad de renderizado.
Lo consigue trabajando sobre un DOM Virtual sobre en el que se aplican los cambios que sufra la aplicacion y luefo actualiza unicamente los elementos que se hayan modificado.

//Componentes 
Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.
Al utulizar componentes estamos forzando nuestro desarrollo a ser mas mantenible.
React nos proporciona varios tipos de componentes como los puros, de contenedor, de clase, de funcion etc. con los que facilita su reutilizacion en todos nuestros proyectos, tanto dentro como entre ellos.
Permite que pueda ser moduralizable ya que implementamos componentes los cuales podemos cambiar con mayor facilidad.

// Anidacion
Los compoenentes pueden ser anidados, de forma que los componenetes de orden superioir propadan los datos a los de orden inferioir. La comunicacion entre ellos es UNIDIRECCIONAL y se usan los eventos para que los compoenentes inferioires sean reconocidos por los de orden superioir. Cuando la comunicacion es de arriba hacia abajo se le llama PROMPt y cuando es de abajo hacia arriba se le llama EVENTOS.
Como resultado de la anidacion podemos tener una aplicacion web mejor estructurada y reutilizar un componente entero para otro proyecto o incluso solo un parte del componente. 
Todo esto nos permite que la aplicacion sea mas MODULAR, es decir, que no se componga de un solo bloque de codigo sino de fragmentos que la formen.

// Declarativa
React sigue el paradigma del desarrollo declarativo. 
Las aplicaciones que creemos estaran formadas por componentes. tanto la aplicacion global como cada componente tiene un estado propio y es por este motivo que react es declarativo. Esto quiere decir que nuestro componentes son clases o funciones que deben de devolver un HTML.
Con JS puro (vanilla) trabajamos creando scripts que informan al DOM de que debe realizar o como hacerlo; Se esta siguiendo un paradigma imperativo..
Esta libreria trabaja sobre el estado global de la aplicacion y responde a los cambios de cada componente en su estado por separado, actualizando unicamente lo necesario.

// Isoformismo
React permite el isoformismo tambien conocido como JS universal, capacidad con la que podemos renderizar tanto en el servidor como en el cliente.
Esto hace que solucione problemas y mejore el posicionamiento.

// Agilidad
Con react disponemos de todas las funcionalidades que ofrece JQuery ambas tecnologias pueden convivir auqnue no es necesario tener JQ en nuestros proyectos. 44min
