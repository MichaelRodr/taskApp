/**
 * Ejemplo de uso de
 * - useState
 * - useRef
 * - useEfect
 */

import React, {useState, useEffect, useRef} from 'react';

const Ejemplo2 = () => {
  //Vamos a crear dos contadores distintos
  //Cada uno con estado diferente

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /**
   * Vamos a crear una referencia con useRef() para asociar una variable
   * con un elemento del DOM del componente (vista HTML)
   */

  const miRef = useRef();

  function incremetCounter1() {
    setCounter1(counter1 + 1);
  }

  function incremetCounter2() {
    setCounter2(counter2 + 1);
  }

  /**
   *  Trabajando con useEfect
   */

  /**
   * ? Case: 1 Ejecuta siempre un Snipet de codigo
   * cada vez que haya un cambio en el estado del componente
   * se ejecuta aquello que este dentro del useEfect()
   */

  /* useEffect(() => {
    console.log('Cambio del estado en el componente');
    console.log('Mostrando referencia aelementos del DOM');
    console.log(miRef);
  });*/

  /**
   * ? Case: 2 Ejecutar solo cuando cambie contador1 o contador2
   * Cada vez que haya un cambio en contador1 y counter2  se ejecuta lo que diga
   * el useEffect
   * En caso de que cambie contador2 no habra cambios
   */
  /*
  // 
   */
  useEffect(() => {
    console.log('Cambio del estado en el componente');
    console.log('Mostrando referencia aelementos del DOM');
    console.log(miRef);
  }, [counter1, counter2]);

  return (
    <div>
      <h1>Ejemplo de useState()</h1>
      <h2>Contador: {counter1}</h2>
      <h2>Contador: {counter2}</h2>
      {/*Elemento referenciado*/}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>

      <div>
        <button onClick={incremetCounter1}>Counter1 ++</button>
        <button onClick={incremetCounter2}>Counter2 ++</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
