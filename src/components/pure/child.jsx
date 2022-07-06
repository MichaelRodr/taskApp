import React, {useRef, useState} from 'react';

const Child = ({name, send, update}) => {
  const messageRef = useRef(null);
  const nameRef = useRef(null);

  function pressedButton() {
    const text = messageRef.current.value;
    alert(`Text in input: ${text}`);
  }

  function pressedButtonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div>
      <p
        onMouseOver={() => {
          console.log('On Mouse Over');
        }}
      >
        Hello{name}
      </p>
      <button
        onClick={() => {
          console.log('pressed botton 1');
        }}
      >
        Button 1
      </button>
      <button onClick={() => pressedButton()}>Button 2</button>
      <button onClick={() => pressedButtonParams(`Hello: ${name}`)}>
        Button 3
      </button>
      <input
        type='text'
        onFocus={() => console.log('Input Focused')}
        onChange={(e) => console.log('Input Changed:', e.target.value)}
        onCopy={() => console.log('Input Focused')}
        placeholder='Send a text to your father'
        ref={messageRef}
      />
      <button onClick={() => alert(`Hola  ${messageRef}`)}>Send Mesaage</button>
      {/**acceder a metodos que estan en el padre desde el componente hijo */}
      <form action=''>
        <label for=''>Nombre</label>
        <input ref={nameRef} type='text' placeholder='Ingrese nombre' />
        <button onClick={submitName}>new Name</button>
      </form>
    </div>
  );
};

export default Child;
