import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import LoaderSpinner from "../LoaderSpinner";

import {header1} from "../../images";

import "./styles.scss";

function MainHeader({element}) {
  let image = new Image();

  image.src = header1;

  const [loading, setLoading] = useState(!image.complete);

  image.onload = () => setLoading(false);

  return (
    <header className="main-header">
      <LoaderSpinner show={loading}/>
      <div className={loading ? "background" : "background animate"} 
      style={{backgroundImage: `url(${header1})`}}>
      </div>
      <div className="content">
        <h1 className={loading ? "" : "animate"}>
          A sua marina especialista <br className="hide-phone"/> em Jet Ski em Ubatuba-SP
        </h1>
        <div className={loading ? "button-box" : "button-box animate"}>
          <div className={loading? "button" : "button animate"}>
            <span onClick={() => element.current.scrollIntoView()}>
              <p>Ver Mais</p>
              <h3><FontAwesomeIcon icon={faAngleDown}/></h3>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default MainHeader;