import React, {useRef, useState} from "react";
import {Row, Col, Tooltip} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoaderSpinner from "../../components/LoaderSpinner";

import {header5, instagram, whatsappSVG} from "../../images";
import "./styles.scss";

function Contact() {
  const [loading, setLoading] = useState(true);
  const ContactSectionEl = useRef(null);

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  const [whatsappShow, setWhatsappShow] = useState(false);

  window.addEventListener("scroll", function (event) {
    let scrollY = this.scrollY;
    scrollY >= 10 ? setWhatsappShow(true) : setWhatsappShow(false);
  });

  return (
    <div className="App-content">
      <a
        href="https://wa.me/551238422654" 
        className={whatsappShow ? "whatsapp-button show" : "whatsapp-button"} 
        id="Tooltip" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappSVG} alt="logo do whatsapp"/>
        <Tooltip placement="right" isOpen={tooltipOpen} target="Tooltip" toggle={toggle}>
          Contate-nos <br/>por WhatsApp
        </Tooltip>
      </a>
      <LoaderSpinner show={loading}/>
      <Header
        element={ContactSectionEl}
        title="Estamos prontos para te receber"
        background={header5}
      />
      <section ref={ContactSectionEl} className="bg-black contact-section padding-less">
        <Row>
          <Col className="info" sm="12" md="5">
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
                <div>
                  <img src={instagram} width="60" alt="logo do instagram"/> 
                  Siga nosso instagram: &nbsp;
                </div>
                <div>
                  <a href="https://www.instagram.com/marinadolphinubatuba" target="_blank" rel="noopener noreferrer">
                    <strong>@marinadolphinubatuba</strong>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col className="map" sm="12" md="7">
            <div className="responsive-iframe-container">
              <iframe 
                title="mapa com a localização da Marina Dolphin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.1109335997353!2d-45.08672528538568!3d-23.49251346493763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd56b2730e72bd%3A0xa1c9ef7a6c1d40e2!2sMarina%20Dolphin%20-%20Jet%20Ski%20Marine%20-%20Despachante%20-%20Cursos!5e0!3m2!1spt-BR!2sbr!4v1597280375637!5m2!1spt-BR!2sbr"
                className="responsive-iframe"
                frameBorder="0"
                style={{border: 0}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                onLoad={() => setLoading(false)}
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