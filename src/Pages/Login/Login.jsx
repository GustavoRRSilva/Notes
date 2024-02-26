import React from "react";
import "./Login.css";
import ButtonInfo from "../../Componentes/ButtonInfo/ButtonInfo";
import InputText from "../../Componentes/InputText/InputText";
const Login = ({ name, img, src, alt,inputType}) => {
  return (
    <div className="Background">
      <div className="infosLogin">
        <h2>Welcome back!</h2>
        <ButtonInfo
          name="Entre com o google"
          src="https://cdn.iconscout.com/icon/free/png-512/free-google-160-189824.png?f=webp&w=256"
          alt="Icone do google"
        />
        <div className="or">
          <span className="line"></span>
          <h3>or</h3>
          <span className="line"></span>
        </div>
        <InputText type = "Text" placeholder = "Seu email"/>
        <InputText type = "password" placeholder = "Sua senha"/>
      </div>
    </div>
  );
};
export default Login;
