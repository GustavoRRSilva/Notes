import React from "react";
import styles from './InputText.module.css'
const InputText = ({type,placeholder})=>{
    return(
        <>
        <input type = {type} name="" id="" className={styles.inputTextLogin} placeholder = {placeholder}/>
        </>
    )
}
export default InputText;