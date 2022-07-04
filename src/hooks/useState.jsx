/**
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y ademas poder modificarlo
 */

import React, {useState} from 'react';

const Ejemplo1 = () => {
  //VAlor inicial del contador
  const valorInicial = 0;

  //Valor inicial del ojeto persona
  const personaInicial = {
    nombre: 'Michael',
    email: 'cequea.mr@gmail.com',
  };

  /**
   * Queremos que el valorInicial y PersonaInicial sean
   * parte del estado del componente para asi poder gestionar su
   * cambio y que este se vea reflejado en la vida del componente
   *
   * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
   */

  const [counter, setCounter] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Metodo para incrementar el valor del contador
   */
  function incrementCounter() {
    setCounter(counter + 1);
  }

  /**
   * Metodo para cambiar el estado de persona
   */
  function changePersona() {
    setPersona({
      nombre: 'Jesus',
      email: 'Jesus@gmail.com',
    });
  }
  return (
    <div>
      <h1>Ejemplo de useState()</h1>
      <h2>Contador: {counter}</h2>
      <h2>Datos de la Persona</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      <div>
        <button onClick={incrementCounter}>Counter++</button>
        <button onClick={changePersona}>Cambiar Persona</button>
      </div>
    </div>
  );
};

export default Ejemplo1;
