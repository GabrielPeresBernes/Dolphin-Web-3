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

  return (
    <Row className="gallery">
      <Modal isOpen={modal} toggle={toggle} className="gallery-viewer" centered={true}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <ImageGallery 
            items={gallery}
            thumbnailPosition="left"
            showPlayButton={false}
            showIndex={true}
            startIndex={galleryItem}
          />
        </ModalBody>
      </Modal>
      {
        gallery.map((element, index) => (
          <Col className="item" md="4">
            <div className="portrait" onClick={() => openViewer(index)}>
              <img src={element.thumbnail}/>
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