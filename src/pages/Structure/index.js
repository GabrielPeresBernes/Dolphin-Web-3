import React, {useRef} from "react";
import {Row, Col, Button} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faCheckCircle, faThumbsUp, faImage} from '@fortawesome/free-regular-svg-icons'

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";

import "./styles.scss";
import {header2, intro, structure1, structure2, structure3, hot, shower} from "../../images";
import {structureFull1, structureFull2, structureFull3, structureFull4, structureFull5, structureFull6} from "../../images/gallery/full";
import {structureThumb1, structureThumb2, structureThumb3, structureThumb4, structureThumb5, structureThumb6} from "../../images/gallery/thumb";

const gallery = [
  {
    original: structureFull1,
    thumbnail: structureThumb1,
    description: "Empilhadeira retirando Jet-ski da pratileira",
  },
  {
    original: structureFull2,
    thumbnail: structureThumb2,
    description: "Trator levando Jet-skis para a praia"
  },
  {
    original: structureFull3,
    thumbnail: structureThumb3,
    description: "Tratores da Marina Dolphin"
  },
  {
    original: structureFull4,
    thumbnail: structureThumb4,
    description: "Empilhadeira carregando Jet-ski"
  },
  {
    original: structureFull5,
    thumbnail: structureThumb5,
    description: "Empilhadeira encarretando Jet-ski"
  },
  {
    original: structureFull6,
    thumbnail: structureThumb6,
    description: "Lojinha da Marina Dolphin"
  },
]

function Structure() {
  const IntroSectionEl = useRef(null);
  const WorkingSectionEl = useRef(null);
  const GallerySectionEl = useRef(null);

  return (
    <div className="App-content">
      <Header
        element={IntroSectionEl}
        title="A estrutura ideal para o seu Jet-Ski"
        background={header2}
      />
      <section className="intro-section" ref={IntroSectionEl}>
        <Row>
          <Col className="text-col">
            <div>
              <h2 className="title">Praticidade, conforto e segurança</h2>
              <p className="text">
              A Marina Dolphin conta com um sistema moderno de lift, onde cada jet-ski é acondicionado em prateleiras cobertas,
              o que garante proteção contra a ação da chuva e sol. <br/>
              Utilizamos carreta própria, o que proporciona praticidade e segurança na descida e subida de Jet Skis,
              além de evitar o uso e desgaste da carreta rodoviária do cliente.
              </p>
              <a className="btn-more" onClick={() => WorkingSectionEl.current.scrollIntoView()}>
                Veja o que oferecemos <FontAwesomeIcon icon={faArrowDown}/>
              </a>
            </div>
          </Col>
          <Col className="data-col">
            <img src={intro}/>
          </Col>
        </Row> 
      </section>
      <section className="working-section bg-grey" ref={WorkingSectionEl}>
        <div className="working-title">
          <h2 className="title"> Nosso Funcionamento </h2>
          <hr/>
        </div>
        <Row className="service-box">
          <Col className="service">
            <img src={structure1}/>
            <div className="description">Lavagem após retirada do mar</div>
          </Col>
          <p className="icon"><FontAwesomeIcon icon={faCheckCircle}/></p>
          <Col className="service">
            <img src={structure2}/>
            <div className="description">Adoçamento do motor</div>
          </Col>
          <p className="icon"><FontAwesomeIcon icon={faThumbsUp}/></p>
          <Col className="service">
            <img src={structure3}/>
            <div className="description">Aplicação de silicone protetivo</div>
          </Col>
          <hr/>
        </Row>
        <Row>
          <Col className="align-center">
            <Button color="secondary" size="lg" className="gallery-button" onClick={() => GallerySectionEl.current.scrollIntoView(false)}> 
              <FontAwesomeIcon icon={faAngleDown} style={{marginRight: 10}}/> 
                Galeria
              <FontAwesomeIcon icon={faImage} style={{marginLeft: 10}}/> 
            </Button>
          </Col>
        </Row>
      </section>
      <section className="half-padding-vertical bg-black" ref={GallerySectionEl}>
        <Gallery gallery={gallery}/>
      </section>
      <Footer/>
    </div>
  )
}

export default Structure;