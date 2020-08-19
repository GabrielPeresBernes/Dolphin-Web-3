import React from "react";

import "./styles.scss";

import global from "../../config/global";

import {spinner, animation} from "../../images";

function LoaderSpinner({show}){
  if(global.MODE === "dev") return <div></div>
  return (
    <div className={show? "loader-spinner show" : "loader-spinner"}>
      <div className="icon"> <img src={animation} alt="ícone animado circular indicando carregamento"/> </div>
      <div className="logo"> <img src={spinner} alt="ícone de um jet ski"/> </div>
    </div>
  )
}

export default LoaderSpinner;