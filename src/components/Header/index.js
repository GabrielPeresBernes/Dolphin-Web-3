import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import "./styles.scss";

function MainHeader({element, title, background, scrollTarget=true}) {
  return (
    <header className="header">
      <div className="background" style={{backgroundImage: `url(${background})`}}></div>
      <div className="content">
        <h1>{title}</h1>
        <div className="button-box">
          <div className="button">
            <a onClick={() => element.current.scrollIntoView(scrollTarget)}>
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