import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './TopHeader.css'


export default class TopHeaders extends Component {
    render() {
        const { subtitle } = this.props; // Destructure the subtitle from props
        return (
            <Fragment>
                <Container fluid className='Top-Headers p-0'>
                    <div className='Top-Overlays'>
                        <Container className='Top-Contents'>
                            <Row>
                                <Col className='text-center'>
                                    <h4 className='Top-Sub-Titles'>{subtitle}</h4>
                                    <br />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
