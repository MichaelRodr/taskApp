import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Greeting extends Component {
  /** constructor de la clase*/
  constructor(props){
    super(props);
    this.state ={
      age : 29
    }
  }
  //El metodo render genera la visualizacion del componente
  render() {
    return (
      <div>
        <h1>
          ¡Hola! {this.props.name}
        </h1>
        <h2>
          Tu edad es de: {this.state.age}
        </h2>
        <button onClick={this.birthey}>Cumplir años</button>
      </div>
    )
  }
  //Se crea una arrow function para no bindear el objeto this
  birthey =()=>{
    this.setState((prevState)=>(
      {
        age: prevState.age + 1
      }
    )
  )}
}

Greeting.propTypes = {
    name:PropTypes.string
}