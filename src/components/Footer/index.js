import React from "react";
import {Row, Col} from "reactstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

import {logo, instagram} from "./../../images";
import paths from "../../config/paths";

import "./styles.scss";

function Footer() {
  return (
    <footer>
      <Row>
        <Col>
          <img src={logo} width="120"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
            &nbsp; Siga nosso instagram: &nbsp;
            <a href="https://www.instagram.com/marinadolphinubatuba" target="_blank">
              <strong>@marinadolphinubatuba</strong>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p><strong> Endereço </strong></p>
          <p>Rua Eduardo Graça - 167, Praia Enseada,<br/>Ubatuba-SP, Cep: 11680-000</p>
        </Col>
        <Col>
          <p><strong> Contato </strong></p>
          <p><strong> WhatsApp: </strong> (12) 3842-2654 </p>
          <p><strong> Telefone: </strong> (12) 3842-2654 </p>
          <p><strong> Email: </strong> marinadolphin@uol.com.br </p>
        </Col>
        <Col>
          <p><strong> Links </strong></p>
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