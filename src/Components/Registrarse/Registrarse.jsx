import React from "react";
import { useState } from "react";
import InputRegister from "./InputRegister";

const Registrarse = () => {
  //Un usesState con las propiedades de los name de los input
  const[ inputs, setInputs ] = useState({
    firstname: "",
    lastname:"",
    email:"",
    password:"",
  } );

// funcion manejadora de los inputs de los inputs
const handleInputsForm = (e) => {
  setInputs({...inputs, [e.target.name]: e.target.value});
  console.log(inputs);
}
  // Inicio del manejo del handleDateRegister (Formulario de Registro)
  const handleOnSubmit = ( e ) => {
    e.preventDefault();
    alert(JSON.stringify(inputs));
  
    // ToDo: Queda pendiente el envio de datos hacia el server 
    
    // Limpiando el formulario
    setInputs({
      firstname:'',
      lastname:"",
      email:"",
      password:""
      
    })
  };
  return (
    <>
      <div className="card card-register">
        <h2>Registrate en EGDA Solutions</h2>

        {/* Inicio del formulario de Registro */}
        <form action="" onSubmit={ handleOnSubmit}>
          <InputRegister title='first Name' type= 'text' name= 'firstname' value={inputs.firstname} handle= {handleInputsForm}/>
          <InputRegister title='first Name' type= 'text' name= 'lastname' value={inputs.lastname} handle= {handleInputsForm}/>
          <InputRegister title='Email' type='email' name='email' value={inputs.email} handle= {handleInputsForm}/>
          <InputRegister title='password' type='password' name='password' value={inputs.password} handle= {handleInputsForm}/>              
          <button type='submit' className="btn btn-primary" >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Registrarse;