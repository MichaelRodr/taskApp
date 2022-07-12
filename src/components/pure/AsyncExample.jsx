import {Alert} from 'bootstrap';
import {useState} from 'react';

const randomUser = async () => {
  try {
    let response = await fetch('https://randomuser.me/api/');
    let data = response.json();
  } catch (error) {
    alert('Error inesperado', error);
  }
};
const AsyncExample = () => {
  const [user, setUser] = useState(randomUser);
  console.log(user);
  return (
    <div>
      <h1>Random User</h1>
      <p></p>
      <button onClick={() => alert(JSON.stringify(user))}>user</button>
    </div>
  );
};

export default AsyncExample;
