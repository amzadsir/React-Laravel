import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import icon1 from '../../assets/images/img30.jpg';
import icon2 from '../../assets/images/img31.jpg';
import icon3 from '../../assets/images/img32.jpg';
import './OurService.css'

class Service extends Component {
    render() {
        return (
            <Fragment>
                <Container className='our_service'><br/><br/><br/>
                    <h1 className='servicetitle1 text-center '>MY SERVICES</h1><br/><br/>
                    <Row>
                    <Col  lg={4} md={6} sm={12}>
                            <div  className='srvcrd text-center'>
                            <img className='image-equal' src={icon1} alt="" style={{ width: 125, height: 125 }}  /> 
                                <Card.Body>
                                    <Card.Title className='servicetitlewg'>Web Development</Card.Title>
                                    <Card.Text  >
                                    <p className='oness'> I design and develop static and<br/> dynamic web sites as per your<br/> requirements as we believe<br/> "web is world's next home".</p>
                                    </Card.Text>                                    
                                </Card.Body>
                            </div>
                        </Col>
                        <Col  lg={4} md={6} sm={12}>
                            <div  className='srvcrd text-center'>
                            <img src={icon2} alt="" style={{ width: 250, height: 250 }} /> 
                                <Card.Body>
                                    <Card.Title className='mobile'>Mobile Development</Card.Title>
                                    <Card.Text>
                                    <p className='oness'>I build native and cross<br/> platform mobile app for your <br/>business and institutions as per<br/> as your requirements.</p>
                                    </Card.Text>                                 
                                </Card.Body>
                            </div>
                        </Col>
                        <Col  lg={4} md={6} sm={12}>
                            <div  className='srvcrd text-center'>
                            <img className='image-equal' src={icon3} alt="" style={{ width: 125, height: 125 }}  /> 
                                <Card.Body>
                                    <Card.Title className='servicetitlewg'>Graphics Design</Card.Title>
                                    <Card.Text  className='oness'>
                                    <p className='oness'>I design modern user interface<br/> and other graphical components for your business<br/> and institutions.</p>
                                    </Card.Text>                                    
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Service;