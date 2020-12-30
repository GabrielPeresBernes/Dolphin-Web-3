import React, {useRef, useState} from 'react';
import {Row, Col, Card} from "reactstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

import MainHeader from "../../components/MainHeader";
import Roundicon from "../../components/Roundicon";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import LoaderSpinner from "../../components/LoaderSpinner";

import {courses, jetmarina, documents, clock, calendar, jetski} from "../../images";
import "./styles.scss";

function Main() {
  const [loading, setLoading] = useState(true);
  const WelcomeSectionEl = useRef(null);
  const ServicesSectionEl = useRef(null);

  return (
    <div className="App-content">
      <LoaderSpinner show={loading}/>
      <MainHeader element={WelcomeSectionEl}/>
      <section ref={WelcomeSectionEl}>
        <Intro
          title="Bem-Vindo a Dolphin"
          text={["Estamos localizados na praia da enseada,"
          +" uma das melhores de Ubatuba para esportes náuticos,"
          +" um ponto estratégico para quem pretende ir ao Parque Ecológico da Ilha Anchieta,"
          +" Praia 7 Fontes ou mesmo seguir para a Ilha Bela.", <br/>,
          " Em nosso sistema de lift cada jet ski é disposto em berços individuais,"
          +" em prateleiras cobertas."
          +" Nossa carreta própria para o transporte de jet skis proporciona não somente segurança,"
          +" mas também praticidade e conforto aos nossos clientes."]}
          buttonText="Nossa Estrutura"
          buttonEl={ServicesSectionEl}
          media={<div className="responsive-iframe-container">
            <iframe 
              title="vídeo apresentação da Marina Dolphin"
              className="responsive-iframe"
              src="https://www.youtube.com/embed/RgBeAuvW-Yc"
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              onLoad={() => setLoading(false)}
            >
            </iframe>
          </div>}
        /> 
      </section>
      <section className="services-section bg-grey half-padding" ref={ServicesSectionEl}>
        <Row className="services-title">
          <Col>
            <h2 className="title"> Nossos Serviços </h2>
            <hr/>
          </Col>
        </Row>
        <Row className="services-content">
          <Col className="col" xs="12" md="4">
            <Card>
              <Roundicon image={jetmarina} width="180"/>
                <h2> Jet Marina </h2>
                <p>Contamos com uma moderna estrutura de lift, garantia de praticidade e segurança.</p>
                <Link to={"/structure"} className="btn-more"> Nossa estrutura <FontAwesomeIcon icon={faArrowRight}/> </Link>
            </Card>
          </Col>
          <Col className="col" xs="12" md="4">
            <Card>
              <Roundicon image={courses} width="180"/>
              <h2> Motonauta </h2>
              <p>Oferecemos curso completo de Motonauta, com curso prático e exame teórico.</p>
              <Link to="/courses" className="btn-more"> Nossos cursos <FontAwesomeIcon icon={faArrowRight}/> </Link>
            </Card>
          </Col>
          <Col className="col" xs="12" md="4">
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
        <Row style={{margin: 0}} className="bg-white">
          <Col className="opening bg-black" xs="12" md="7">
            <div>
              <img src={clock} width="70"alt="ícone de um relógio"/>
              <p>Horário de funcionamento: das 8:00h às 18:00h</p>
            </div>
            <div>
              <img src={calendar} width="70" alt="ícone de um calendário"/>
              <p>Folgas ás quartas-feiras <br/> *Exceto em feriados e alta temporada</p>
            </div>
          </Col>
          <Col className="warning bg-white" xs="12" md="5">
            <div style={{position: "relative", margin: 0}}>
              <img src={jetski} alt="jet skis parados na mar"/>
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