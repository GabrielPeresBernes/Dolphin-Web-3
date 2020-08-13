import React, {useRef} from "react";

import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";

import {header4} from "../../images";
import {
  anchietaFull1,
  anchietaFull2,
  anchietaFull3,
  anchietaFull4,
  anchietaFull5,
  anchietaFull6,
  anchietaFull7,
  anchietaFull8,
  anchietaFull9,
  enseadaFull1,
  pontaDaFortalezaFull1,
  PraiaBravaDaFortalezaFull1,
  PraiaDaFortalezaFull1,
  PraiaDaFortalezaFull2,
  prainhaFull1,
  rioEscuroFull1,
  rioEscuroFull2,
  rioEscuroFull3,
  rioEscuroFull4,
  vermelhaDoSulFull1,
  vermelhaDoSulFull2
} from "../../images/gallery/full";

import {
  anchietaThumb1,
  anchietaThumb2,
  anchietaThumb3,
  anchietaThumb4,
  anchietaThumb5,
  anchietaThumb6,
  anchietaThumb7,
  anchietaThumb8,
  anchietaThumb9,
  enseadaThumb1,
  pontaDaFortalezaThumb1,
  PraiaBravaDaFortalezaThumb1,
  PraiaDaFortalezaThumb1,
  PraiaDaFortalezaThumb2,
  prainhaThumb1,
  rioEscuroThumb1,
  rioEscuroThumb2,
  rioEscuroThumb3,
  rioEscuroThumb4,
  vermelhaDoSulThumb1,
  vermelhaDoSulThumb2
} from "../../images/gallery/thumb";

const originals = [
  anchietaFull1,
  anchietaFull2,
  anchietaFull3,
  anchietaFull4,
  anchietaFull5,
  anchietaFull6,
  anchietaFull7,
  anchietaFull8,
  anchietaFull9,
  enseadaFull1,
  pontaDaFortalezaFull1,
  PraiaBravaDaFortalezaFull1,
  PraiaDaFortalezaFull1,
  PraiaDaFortalezaFull2,
  prainhaFull1,
  rioEscuroFull1,
  rioEscuroFull2,
  rioEscuroFull3,
  rioEscuroFull4,
  vermelhaDoSulFull1,
  vermelhaDoSulFull2
];

const thumbnails = [
  anchietaThumb1,
  anchietaThumb2,
  anchietaThumb3,
  anchietaThumb4,
  anchietaThumb5,
  anchietaThumb6,
  anchietaThumb7,
  anchietaThumb8,
  anchietaThumb9,
  enseadaThumb1,
  pontaDaFortalezaThumb1,
  PraiaBravaDaFortalezaThumb1,
  PraiaDaFortalezaThumb1,
  PraiaDaFortalezaThumb2,
  prainhaThumb1,
  rioEscuroThumb1,
  rioEscuroThumb2,
  rioEscuroThumb3,
  rioEscuroThumb4,
  vermelhaDoSulThumb1,
  vermelhaDoSulThumb2
];

const descriptions = [
  "Ilha Anchieta",
  "Ilha Anchieta",
  "Ilha Anchieta",
  "Ilha Anchieta",
  "Ilha Anchieta",
  "Ilha Anchieta",
  "Ilha Anchieta",
  "Ilha Anchieta",
  "Ilha Anchieta",
  "Praia da Enseada",
  "Ponta da Fortaleza",
  "Praia Brava da Fortaleza",
  "Praia da Fortaleza",
  "Praia da Fortaleza",
  "Prainha da Enseada",
  "Rio Escuro",
  "Rio Escuro",
  "Rio Escuro",
  "Rio Escuro",
  "Vermelha do Sul",
  "Vermelha do Sul"
];

const gallery = [];

for(let i=0; i < originals.length; i++)
  gallery.push({
    original: originals[i],
    thumbnail: thumbnails[i],
    description: descriptions[i],
  })

function Beaches() {
  const GallerySectionEl = useRef(null);

  return (
    <div className="App-content">
      <Header
        element={GallerySectionEl}
        title="Os melhores destinos perto de você"
        background={header4}
      />
      <section ref={GallerySectionEl} className='half-padding-vertical bg-black'>
        <Gallery gallery={gallery}/>
      </section>
      <Footer/>
    </div>
  )
}

export default Beaches;