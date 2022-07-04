import React, {useState} from 'react';

const registerForm = () => {
  const [data, setData] = useState(initialdata);

  const initialdata = [
    {
      user: '',
      name: '',
      email: '',
      password: '',
    },
  ];
  return <div>registerForm</div>;
};

export default registerForm;
