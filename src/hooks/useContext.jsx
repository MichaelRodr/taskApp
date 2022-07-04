/**
 * Ejemplo 3 de hooks
 * - useState
 * - useContext
 *  Se usa para manejar datos y pasarlos a componentes de orden inferior
 *
 */

import React from 'react';

/**
 *
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
export const Componente1 = () => {
  return <div>Componente1</div>;
};

import React from 'react';

export const Componente2 = () => {
  return <div>Componente2</div>;
};
