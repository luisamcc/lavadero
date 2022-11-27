import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-scroll";

const Login = () => {
  return (
    <>
    <form className="card-login">
      <div>Login</div>
      <div className="login">
        <center>
        <div className="col-12 md:col-4" style={{ paddingLeft: "20px" }}>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
          </div>
          <div className="p-inputgroup" style={{ paddingTop: "20px" }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-sign-in"></i>
            </span>
            <InputText
              type="password"
              name="password"
              placeholder="Password"
              value={""}
            />
          </div>
        </div>
        <div className="col-2 md:col-12" style={{ paddingTop: "20px" }}>
            <Button type="submit" label="Submit" icon="pi pi-check" />
        </div>
        <div className="col-6">
            <p>¿Aun no tienes una cuenta? <Link to='/registrarse'>Crear nueva cuenta</Link> </p>
          </div>
        </center>
      </div>
      </form>
      
    </>
    //ToDo: inputs
  );
};

export default Login;