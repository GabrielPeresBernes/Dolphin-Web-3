import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import "./styles.scss";

function MainHeader({element}) {
  return (
    <header className="main-header">
      <div className="background"></div>
      <div className="content">
        <h1> A sua marina especialista <br/> em Jet Ski em Ubatuba-SP </h1>
        <div className="button-box">
          <div className="button">
            <a onClick={() => element.current.scrollIntoView()}>
              <p>Ver Mais</p>
              <h3><FontAwesomeIcon icon={faAngleDown}/></h3>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default MainHeader;