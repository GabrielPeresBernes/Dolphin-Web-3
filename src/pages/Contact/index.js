import React, {useRef} from "react";
import {Row, Col} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {header5, instagram} from "../../images";
import "./styles.scss";

function Contact() {
  const ContactSectionEl = useRef(null);

  return (
    <div className="App-content">
      <Header
        element={ContactSectionEl}
        title="Estamos prontos para te receber"
        background={header5}
      />
      <section ref={ContactSectionEl} className="bg-black contact-section padding-less">
        <Row>
          <Col className="info" md="5">
            <div className="info-container">
              <div className="contact">
                <h2 className="title">Contate-nos</h2>
                <hr/>
                <div>
                  <FontAwesomeIcon icon={faWhatsapp}/>
                  <p>(12) 3842-2654 </p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faPhoneAlt}/>
                  <p>(12) 3842-2654 </p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faEnvelope}/>
                  <p>marinadolphin@uol.com.br </p>
                </div>
              </div>
              <div className="instagram">
                <img src={instagram} width="60"/> 
                Siga nosso instagram: &nbsp;
                <a href="https://www.instagram.com/marinadolphinubatuba" target="_blank">
                  <strong>@marinadolphinubatuba</strong>
                </a>
              </div>
            </div>
          </Col>
          <Col className="map" md="7">
            <div className="responsive-iframe-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.1109335997353!2d-45.08672528538568!3d-23.49251346493763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd56b2730e72bd%3A0xa1c9ef7a6c1d40e2!2sMarina%20Dolphin%20-%20Jet%20Ski%20Marine%20-%20Despachante%20-%20Cursos!5e0!3m2!1spt-BR!2sbr!4v1597280375637!5m2!1spt-BR!2sbr"
                className="responsive-iframe"
                frameBorder="0"
                style={{border: 0}}
                allowFullScreen=""
                aria-hidden="false"
                tabindex="0"
              >            
              </iframe>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact;