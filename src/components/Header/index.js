import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import LoaderSpinner from "../LoaderSpinner";

import "./styles.scss";

const Header = React.forwardRef(({element, title, background}, ref) => {
  let image = new Image();

  image.src = background;

  const [loading, setLoading] = useState(!image.complete);
  
  image.onload = () => setLoading(false);

  return (
    <header className="header" ref={ref}>
      <LoaderSpinner show={loading}/>
      <div className="background" style={{backgroundImage: `url(${background})`}}></div>
      <div className="content">
        <h1>{title}</h1>
        <div className="button-box">
          <div className="button">
            <span onClick={() => element.current.scrollIntoView()}>
              <p>Ver Mais</p>
              <h3><FontAwesomeIcon icon={faAngleDown}/></h3>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
})
 
export default Header;