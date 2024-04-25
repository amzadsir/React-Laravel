import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import mob from '../../assets/images/mob.png';
import './RecentProject.css'
class RecentProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                  <br/><br/><br/>
                    <h1 className='Component-Title' >RECENT PROJECTS</h1>
                    <br/><br/><br/>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='Project-Card' >
                            <img src={mob} alt="" /> 
                                <Card.Body>
                                <Card.Title className='Project-Card-Title'>Card Title</Card.Title>
                                    <Card.Text className='Project-Card-Description'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='Project-Card' >
                            <img src={mob} alt=""  />
                                <Card.Body>
                                <Card.Title className='Project-Card-Title'>Card Title</Card.Title>
                                    <Card.Text className='Project-Card-Description'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='Project-Card' >
                            <img src={mob} alt="" />
                                <Card.Body>
                                    <Card.Title className='Project-Card-Title'>Card Title</Card.Title>
                                    <Card.Text className='Project-Card-Description'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='Project-Card' >
                            <img src={mob} alt="" />
                                <Card.Body>
                                    <Card.Title className='Project-Card-Title'>Card Title</Card.Title>
                                    <Card.Text className='Project-Card-Description'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>





                </Container>

            </Fragment>
        );
    }
}

export default RecentProject;