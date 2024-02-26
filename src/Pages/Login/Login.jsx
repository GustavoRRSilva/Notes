import React from "react";
import './Login.css'
import ButtonInfo from "../../Componentes/ButtonInfo/ButtonInfo";
const Login = ({name,img,src,alt})=>{
    return(
        <div className="Background">
            <div className="infosLogin">
            <h2>Welcome back!</h2>
            <ButtonInfo name = 'Entre com o google' src="src\assets\iconGoogle.svg" alt = 'Icone do google'/>
            <div className="or">
                <span className="line"></span>
                <h3>or</h3>
                <span className="line"></span>
            </div>
            </div>
        </div>
    )
}
export default Login;