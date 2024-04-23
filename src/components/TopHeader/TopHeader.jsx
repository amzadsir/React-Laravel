import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './TopHeader.css'
import Button from 'react-bootstrap/Button';


export default class TopHeader extends Component {
  render() {
    return (
      <section id='hero'>
        <Container fluid className='Top-Header p-0'> 
        <div className='Top-Overlay'> 
        <Container className='Top-Content'>
          <Row>
            <Col className='text-center'>
            <h1 className='Top-Title'>SOFTWARE ENGINEER</h1><br/>
            <h4 className='Top-Sub-Title'>Mobile & Web Application </h4>
            <br/>
            <Button variant="primary" size="lg">More Info</Button>{' '}
            
            
            </Col>
          </Row>
        </Container>


        </div>

        </Container>


      </section>
    )
  }
}
