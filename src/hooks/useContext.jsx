/**
 * Ejemplo 3 de hooks
 * - useState
 * - useContext
 *  Se usa para manejar datos y pasarlos a componentes de orden inferior
 *
 */

import React, {useState, useContext} from 'react';

/**
 *
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const myContext = React.createContext(null);

const Componente1 = () => {
  //Inicializamos el estado vacio
  const state = useContext(myContext);
  return (
    <div>
      <h1>El Token es: {state.token}</h1>
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(myContext);
  return (
    <div>
      <h2>La sesion es: {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteContexto() {
  const estadoInicial = {
    token: '12345678',
    sesion: 1,
  };

  //Creamos el estado del componente
  const [sesionData, setSesionData] = useState(estadoInicial);

  function actualizaComponente() {
    setSesionData({
      token: 'jwt123456789',
      sesion: sesionData.sesion + 1,
    });
  }
  return (
    <div>
      <myContext.Provider value={sesionData}>
        {/*Todo los que este aqui adentro puede leer los datos de sesionData */}
        {/*Ademas, sis se actualiza, los componentes de aqui, tambien lo actualizan */}
        <h1>**Ejemplo </h1>
        <Componente1></Componente1>
        <button onClick={actualizaComponente}>Actualizar Sesion</button>
      </myContext.Provider>
    </div>
  );
}

/** Importante concepto con useContext se pasan datos a los componentes sin necesidad de props
 * desde el componente padre a sus hijos
 */
