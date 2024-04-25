import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
          <Row>
            <Col lg={3} md={6} sm={12}>
              <h4>Follow Me</h4>
              <p className='FaceBook'><FaFacebook/> Facebook</p>
              <p className='YouTube'><IoLogoYoutube/> YouTube</p>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h4>Address</h4>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <h4>Information</h4>
              <p>About Me</p>
              <p>My Resume</p>
              <p>Contact Me</p>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <h4>Refund Policy</h4>
              <p>Terms And Condition</p>
              <p>Privacy Policy</p>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} className="Service-Card-Top"></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
