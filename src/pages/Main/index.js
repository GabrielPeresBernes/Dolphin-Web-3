import React, {useRef} from 'react';
import {Row, Col, Card} from "reactstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowRight, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

import MainHeader from "../../components/MainHeader";
import Roundicon from "../../components/Roundicon";
import Footer from "../../components/Footer";

import {courses, jetmarina, documents, clock, calendar, jetski} from "../../images";
import "./styles.scss";

function Main() {
  const WelcomeSectionEl = useRef(null);
  const ServicesSectionEl = useRef(null);

  return (
    <div className="App-content">
      <MainHeader element={WelcomeSectionEl}/>
      <section className="intro-section" ref={WelcomeSectionEl}>
        <Row>
          <Col className="text-col">
            <div>
              <h2 className="title">Bem-Vindo a Dolphin</h2>
              <p className="text">
                A Marina Dolphin esta localizada na praia da enseada,
                uma das melhores de Ubatuba para esportes náuticos,
                um ponto estratégico para quem pretende ir até o Parque Ecológico da Ilha Anchieta,
                Praia 7 Fontes ou mesmo seguir viagem para Ilha Bela.
              </p>
              <a className="btn-more" onClick={() => ServicesSectionEl.current.scrollIntoView()}>
                Nossa Estrutura <FontAwesomeIcon icon={faArrowDown}/>
              </a>
            </div>
          </Col>
          <Col className="data-col">
            <div className="responsive-iframe-container">
              <iframe 
                className="responsive-iframe"
                src="https://www.youtube.com/embed/RgBeAuvW-Yc"
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              >
              </iframe>
            </div>
          </Col>
        </Row>  
      </section>
      <section className="services-section bg-grey" ref={ServicesSectionEl}>
        <Row className="services-title">
          <h2 className="title"> Nossos Serviços </h2>
          <hr/>
        </Row>
        <Row className="services-content">
          <Col>
            <Card>
              <Roundicon image={jetmarina} width="180"/>
                <h2> Jet Marina </h2>
                <p>Contamos com uma estrutura moderna de lift, garantia de praticidade e segurança.</p>
                <Link to={"/structure"} className="btn-more"> Nossa estrutura <FontAwesomeIcon icon={faArrowRight}/> </Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <Roundicon image={courses} width="180"/>
              <h2> Cursos </h2>
              <p>Oferecemos cursos completos de Arrais Amador e Motonauta Amador.</p>
              <Link to="/courses" className="btn-more"> Nossos cursos <FontAwesomeIcon icon={faArrowRight}/> </Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <Roundicon image={documents} width="180"/>
              <h2> Despachante </h2>
              <p>Realizamos transferências, renovações, inscrição de embarcações e regularização.</p>
              <Link to="/contact" className="btn-more"> Entrar em contato <FontAwesomeIcon icon={faArrowRight}/> </Link>
            </Card>
          </Col>
        </Row>
      </section>
      <section className="info-section padding-less bg-black">
        <Row style={{margin: 0}}>
          <Col className="opening bg-black" md="7">
            <div>
              <img src={clock} width="100"/>
              <p>Horário de funcionamento das 8:00h às 18:00h</p>
            </div>
            <div>
              <img src={calendar} width="100"/>
              <p>Folgas ás quartas-feiras <br/> *Exceto em feriados e alta temporada</p>
            </div>
          </Col>
          <Col className="warning bg-white">
            <div style={{position: "relative"}}>
              <img src={jetski}/>
              <FontAwesomeIcon className="icon" icon={faExclamationCircle} size="4x"/>
            </div>
            <div className="info">
              <h2 className="title"> Atenção! </h2>
              <div><p className="text"> A Marina Dolphin não oferece o serviço de locação de Jet-Skis. </p></div>
            </div>
          </Col>
        </Row>
      </section>
      <Footer/>
    </div>
  )
}
 
export default Main;