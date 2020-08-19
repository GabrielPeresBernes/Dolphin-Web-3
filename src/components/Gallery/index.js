import React, {useState} from "react";
import {Row, Col, Modal, ModalHeader, ModalBody} from "reactstrap";
import ImageGallery from 'react-image-gallery';

import "./styles.scss";

function Gallery({gallery}) {
  const [galleryItem, setGalleryItem] = useState(0);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const openViewer = index => {
    setGalleryItem(index);
    toggle();
  }

  let mobile = window.matchMedia("(max-width: 768px)");

  return (
    <Row className="gallery">
      <Modal isOpen={modal} toggle={toggle} className="gallery-viewer" centered={true}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <ImageGallery 
            items={gallery}
            thumbnailPosition={mobile.matches ? "bottom" : "left"}
            showPlayButton={false}
            showIndex={true}
            startIndex={galleryItem}
          />
        </ModalBody>
      </Modal>
      {
        gallery.map((element, index) => (
          <Col key={index} className="item" xs="12" sm="6" md="4">
            <div className="portrait" onClick={() => openViewer(index)}>
              <img src={element.thumbnail} alt="thumbnail de uma foto da galeria"/>
              <div className="caption">
                <div className="inner">
                  {element.description}
                </div>
              </div>
            </div>
          </Col>
        ))
      }
    </Row>
  )
}

export default Gallery;