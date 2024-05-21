import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Footer() {
    return (
        <>
            <section id='footer'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="footer_left">
                                <h2>Get in Touch</h2>
                                <p>For business and partnership inquiry please contact me below!</p>
                                <div className="footer_conatct">
                                <ul>
                                <i><i class="fa-solid fa-phone"></i></i>
                                </ul>
                                    <p>Phone</p>
                                    <a href="#">0899-3415-875</a>
                                </div>
                                <div className="footer_conatct">
                                <ul>
                                <i class="fa-solid fa-envelope"></i>
                                </ul>
                                    <p>Email</p>
                                    <a href="#">dimasarsmith@gmail.com</a>
                                </div>
                                <div className="footer_conatct">
                                <ul>
                                <i class="fa-solid fa-location-dot"></i>
                                </ul>
                                    <p>Address</p>
                                    <a href="#">Griya Japan Raya Tahap 4 B2/01, Sooko, Mojokerto</a>
                                </div>
                           
                        

                            </div>
                        </Col>
                        <Col lg={6}>
                           <div className="footer_img">
                            <img src="./photos/Group 14.png" alt="footer img" />
                           </div>
                        </Col>
                    </Row>

                </Container>
            </section>

        </>
    )
}

export default Footer
