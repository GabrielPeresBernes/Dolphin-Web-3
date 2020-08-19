import React from "react";
import "./styles.scss";

function Roundicon({image, width}) {
  return (
    <img className="roundicon" src={image} width={width} alt="ícone circular"/>
  )
}

export default Roundicon;