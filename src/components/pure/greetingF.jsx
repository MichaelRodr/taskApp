import React,{useState} from 'react'
import PropTypes   from "prop-types";
const nombre = 'Michael'
let year = 29

export const GreetingF = () => {
  
  const [edad, setEdad] = useState(year)
  
  const newBirthey = ()=> {
     setEdad(edad + 1)
    }
  
 
  return (
     
    <div>
        <h1>
          ¡Hola {nombre}
        </h1>
        <h2>
          Tu edad es:{edad}
        </h2>
        <button onClick={newBirthey}>Cumplir años</button>
    </div>
   
  )
}

GreetingF.prototype = {
  name: PropTypes.string
}
