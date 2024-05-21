import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Client() {
    return (
        <>
            <section id='Client'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="client_header">
                                <h3>What Do I Offer</h3>
                                <h2>Creates Professional Design That’s
                                    Oriented Towards Client Needs</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className='wrapper'>
                        <Col lg={3}>
                            <div className="client_item">
                                <img src="./photos/Picsart_22-07-29_18-24-04-083 1.png" alt="connent design" />
                                <h3>Content Design</h3>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="client_item">
                                <img src="./photos/Picsart_22-07-29_18-07-06-194 1.png" alt="connent design" />
                                <h3>Mobile App Design</h3>

                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="client_item">
                                <img src="./photos/Picsart_22-07-29_18-18-20-134 1.png" alt="connent design" />
                                <h3>Web Design</h3>

                            </div>
                        </Col>
                    </Row>
                    <Row className='client_wrapper'>
                        <Col lg={3}>
                            <div className="client_sell">
                                <h3>05</h3>
                                <h5>Clients Order</h5>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="client_sell">
                                <h3>03</h3>
                                <h5>Completed</h5>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="client_sell">
                                <h3>4.5</h3>
                                <h5>Stars Rating</h5>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="client_sell">
                                <h3>06</h3>
                                <h5>Months Of Experience</h5>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>

        </>
    )
}

export default Client
