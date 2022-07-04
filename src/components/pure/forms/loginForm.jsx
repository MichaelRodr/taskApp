/**
 * Componente que va a contener un formulario para
 * autenticación de ususarios
 */
import React from 'react';

const loginForm = () => {
  const [credentials, setCredentials] = useState(initialCredentials);

  const initialCredentials = [
    {
      user: '',
      name: '',
      email: '',
      password: '',
    },
  ];
  return <div></div>;
};

export default loginForm;
