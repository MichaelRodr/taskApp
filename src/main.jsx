import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//añadimos bootstrap a nuestro proyecto
/* import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; */
//!Importante: los estilos propios, deben ir debajo del de bootstrap para que no lo pise
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
