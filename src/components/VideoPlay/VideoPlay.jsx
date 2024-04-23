import React, { useState } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import './VideoPlay.css';

function VideoPlay() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section id='contact'>
    <Container className='text-center'>
      <Row>
        <Col lg={12} md={12} sm={12} className='Video-Card'>
          <h3 className='servicetitle1 Title'>How I Do</h3>
          <p className='Paragraph'>
            First, I analyze the requirements of the project. According to the requirements, I make a proper technical analysis, then I build a software architecture. According to the planning, I start coding. Testing is also ongoing with coding. Final testing takes place after finishing the coding part. After successful implementation, I provide a 6-month free bug-fixing service for the corresponding project.
          </p>
          <FontAwesomeIcon icon={faCirclePlay} className="Play-Button" onClick={handleShow}/>

          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Welcome to ThemeZone YouTube Channel</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="embed-responsive embed-responsive-16by9">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/qi-cqWPn1-Y?si=r3cM-qIL9UaboeYb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default VideoPlay;
