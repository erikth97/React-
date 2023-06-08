En primer lugar, vamos a pasar datos entre un componente padre y un componente hijo.

Primero, tendrás que crear dos componentes, uno padre y otro hijo.

jsx
Copy code
import React from 'react'

export default function Padre() {
  return (
    <div>
      
    </div>
  )
}
Parent.js

jsx
Copy code
import React from 'react'

export default function Hijo() {
    return (
        <div>
            
        </div>
    )
}
Child.js

A continuación, importarás el componente hijo en el componente padre y lo devolverás.

jsx
Copy code
import React from 'react'
import Hijo from './Hijo';

export default function Padre() {
  return (
    <div>
      <Hijo/>
    </div>
  )
}
Call the Child Component in the Parent Component

Luego crearás una función y un botón para activar esa función. Además, crearás un estado utilizando el gancho (hook) useState para gestionar los datos.

jsx
Copy code
import React from 'react'
import Hijo from './Hijo';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import './App.css';

export default function Padre() {
  const [datos, estableceDatos] = useState('');
  
  const padreAHijo = () => {
    estableceDatos("Esta es la data del componente Padre al componente Hijo.");
  }
  return (
    <div className="App">
      <Hijo/>
      
      <div>
        <Button primary onClick={() => padreAHijo()}>Clic Padre</Button>
      </div>
    </div>
  )
}
Como puedes ver aquí, estamos llamando a la función padreAHijo al hacer clic en el botón "Clic Padre". Cuando se hace clic en el botón Padre, se guarda la información, "Estos son los datos del componente Padre al componente Hijo", en la variable datos.

Ahora, vamos a pasar ese estado de datos a nuestros componentes hijos. Puedes hacer esto usando props (propiedades).

Pasa los datos como props cuando llames al componente hijo de la siguiente manera:

jsx
Copy code
<Hijo padreAHijo={datos}/>
Parent.js

Aquí, estamos pasando los datos en el componente hijo como datos.

datos es los datos que debemos pasar, y padreAHijo es el nombre del prop.

A continuación, es el momento de capturar los datos en el componente hijo. Y es muy sencillo.

Aquí puede haber dos casos.

Caso 1: Si estás usando un componente funcional, simplemente captura el padreAHijo en los parámetros.

jsx
Copy code
import React from 'react'

export default function Hijo({padreAHijo}) {
    return (
        <div>
            {padreAHijo}
        </div>
    )
}
React Functional Component

Caso 2: Si tienes un componente clase, entonces puedes usar this.props.padreAHijo.

jsx
Copy code
import React, { Component } from 'react'

export default class Hijo extends Component {
    render() {
        return (
            <div>
                {this.props.padreAHijo}
            </div>
        )
    }
}
React Class Component

De cualquier manera, vas a obtener los mismos resultados:
