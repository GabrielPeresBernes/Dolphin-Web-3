import React, {useRef} from "react";
import {Row, Col, Card, CardBody, Button} from "reactstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";

import {header3, courses2, certificate, documents2, receipt, jetPlans} from "../../images";
import "./styles.scss";

function Courses() {
  const IntroSectionEl = useRef(null);
  const PricingSectionEl = useRef(null);

  return (
    <div className="App-content">
      <Header
        element={IntroSectionEl}
        title="A sua Motonauta na Dolphin"
        background={header3}
      />
      <section className="intro-section" ref={IntroSectionEl}>
        <Intro
          title="Conheça nosso curso de Motonauta"
          text={["A Marina Dolphin é cadastrada junto a Captânia dos Portos de São Sebastião,"
          +" e autorizada a aplicar o curso de motonauta"
          +" e também emitir certidicado de embarque.", <br/>,
          "Ao término do curso prático, efetuamos incrição na capitânia,"
          +" para a realização do exame teórico escrito."]}
          buttonText="Confira nosso preço"
          buttonEl={PricingSectionEl}
          media={<img src={courses2} alt="imagem de cabeçalho da sessão de cursos"/>}
        />
      </section>
      <section className="pricing-section bg-blue half-padding" ref={PricingSectionEl}>
        <div className="pricing-title">
          <h2 className="title"> Nosso Preço </h2>
          <hr/>
        </div>
        <div className="plans">
          <img src={jetPlans} alt="jetski" className="hide-phone"/>
          <Card className="pricing-card main-card">
            <CardBody className="header">Curso Motonauta</CardBody>
            <CardBody>
              <div className="content-price">
                <span className="price"><sup>R$</sup>900<sup>00</sup></span>
                <span className="period">ou 4x 225,00</span>
              </div>
              <div className="content-text">
                <p>3 Horas Embarcado</p>
                <p>Apostila Digital Inclusa</p>
                <p>Inscrição para Exame Inclusa</p>
                <p>Taxas Inclusas</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
      <section className="documents-section bg-black half-padding">
        <Row>
          <Col className="documents-list" sm="12" md="6">
            <div className="documents-title">
              <h2 className="title"> Documentos Necessários </h2>
              <hr/>
            </div>
            <div className="document">
              <img src={documents2} alt="ícone de documentos"></img>
              <p>Cópia do RG, CPF ou CNH</p>
            </div>
            <div className="document">
              <img src={receipt} alt="ícone de um comprovante de endereço"></img>
              <p>Comprovante de endereço</p>
            </div>
            <div className="document">
              <img src={certificate} alt="ícone de um atestado médico"></img>
              <p>Atestado médico (caso não for apresentado CNH)</p>
            </div>
          </Col>
          <Col className="button-col" sm="12" md="6">
            <Button size="lg" tag={Link} to="/contact">
              Entrar em contato
              <FontAwesomeIcon icon={faPaperPlane} style={{marginLeft: 12}}/>
            </Button>
          </Col>
        </Row>
      </section>
      <Footer/>
    </div>  
  )
}

export default Courses;