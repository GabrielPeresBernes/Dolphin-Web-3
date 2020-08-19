import React from "react";
import {Row, Col} from "reactstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

import {logo, whatsapp} from "./../../images";
import paths from "../../config/paths";

import "./styles.scss";

function Footer() {
  return (
    <footer>
      <Row>
        <Col>
          <img src={logo} width="120" alt="logo da marina dolphin"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="instagram">
            <div>
              <FontAwesomeIcon icon={faInstagram} size="2x"/>
              &nbsp; Siga nosso instagram: &nbsp;
            </div>
            <div>
              <a href="https://www.instagram.com/marinadolphinubatuba" target="_blank" rel="noopener noreferrer">
                <strong>@marinadolphinubatuba</strong>
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="whatsapp">
            <a href="https://wa.me/551238422654" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="logo do whatsapp"/>
              &nbsp; Contate-nos por WhatsApp
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6" md="4">
          <p className="font-weight-600"><strong> Endereço </strong></p>
          <p>Rua Eduardo Graça - 167, Praia da Enseada,<br/>Ubatuba-SP, Cep: 11680-000</p>
        </Col>
        <Col xs="12" sm="6" md="4">
          <p className="font-weight-600"><strong> Contato </strong></p>
          <p><strong> WhatsApp: </strong> (12) 3842-2654 </p>
          <p><strong> Telefone: </strong> (12) 3842-2654 </p>
          <p><strong> Email: </strong> marinadolphin@uol.com.br </p>
        </Col>
        <Col className="hide-tablet" md="4">
          <p className="font-weight-600"><strong> Links </strong></p>
          {
            paths.map(value => (
            <div key={value.path}><Link to={value.path}>{value.name}</Link></div>
            ))
          }
        </Col>
      </Row>
    </footer>
  )
}

export default Footer;