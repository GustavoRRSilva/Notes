import React from "react";
import "./Login.css";
import ButtonInfo from "../../Componentes/ButtonInfo/ButtonInfo";
import InputText from "../../Componentes/InputText/InputText";

const Login = ({ name, img, src, alt, inputType }) => {
  return (
    <div className="Background">
     <div className="logoNotes">
     <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logoNotes"
      >
        <rect width="42" height="42" rx="5" fill="#E4C5C4" />
        <path
          d="M28.46 37H22.646L12.922 22.278V37H7.108V13.132H12.922L22.646 27.922V13.132H28.46V37Z"
          fill="#6F7357"
        />
        <path
          d="M34.8844 13.132V17.79H28.5604V37H22.7464V17.79H16.4224V13.132H34.8844Z"
          fill="#C8AD8D"
        />
      </svg>
     </div>

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
        <InputText type="Text" placeholder="Seu email" />
        <InputText type="password" placeholder="Sua senha" />
        <section className="saveAndForget">
          <div className="save">
            <input type="checkbox" name="" id="" />
            <p>Salve minha conta</p>
          </div>
          <a href="#">
            <p>Esqueci a senha</p>
          </a>
        </section>
      </div>
    </div>
  );
};
export default Login;
