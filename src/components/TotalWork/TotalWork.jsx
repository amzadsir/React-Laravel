import React, { Component } from 'react';
import { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FaCircleCheck } from "react-icons/fa6";
import './TotalWork.css'

class TotalWork extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='Total-Work p-0' >
                    <div className='Total-Work-Overlay '>
                        <Container className='text-center'>
                            <Row className='Count-Section'>
                                <Col lg={8} md={6} sm={12}>
                                    <Row>
                                        <Col>
                                            <h1 className='Project-Count'>
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <div>
                                                            <VisibilitySensor onChange={start}>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='Count-Title'>Total Project</h4>
                                        </Col>
                                        <Col>
                                            <h1 className='Project-Count'>
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <div>
                                                            <VisibilitySensor onChange={start}>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='Count-Title'>Total Project</h4>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}> 
                                <Card className='Card-Position' style={{ width: '18rem', height:'15rem' }}>
                                        <Card.Body>
                                            <Card.Title className='text-left'>How I Work</Card.Title><br/>
                                            <Card.Text className='Card-Text'>
                                                <p className='CircleCheck'><FaCircleCheck/> Requirement Gathering</p>
                                                <p className='CircleCheck'><FaCircleCheck/> System Analysis</p>
                                                <p className='CircleCheck'><FaCircleCheck/> Coding Testing</p>
                                                <p className='CircleCheck'><FaCircleCheck/> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TotalWork;