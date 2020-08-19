import React from "react";
import {Row, Col} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

import "./styles.scss";

function Intro({title, text, buttonText, buttonEl, media}) {
  return (
    <div className="intro-section">
      <Row>
        <Col className="text-col" xs="12" md="6">
          <div>
            <h2 className="title"> {title} </h2>
            <p className="text"> {text.map((value, index) => (
              <span key={index}>{value}</span>)
            )}</p>
            <span className="btn-more hide-tablet" onClick={() => buttonEl.current.scrollIntoView()}>
              {buttonText} <FontAwesomeIcon icon={faArrowDown}/>
            </span>
          </div>
        </Col>
        <Col className="data-col" xs="12" md="6">
          {media}
        </Col>
        <Col className="hide-desktop text-col" xs="12" md="6">
          <span className="btn-more" onClick={() => buttonEl.current.scrollIntoView()}>
            {buttonText} <FontAwesomeIcon icon={faArrowDown}/>
          </span>
        </Col>
      </Row>
    </div>
  )
}

export default Intro