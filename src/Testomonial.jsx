import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Testomonial() {
    return (
        <>

            <section id='Testimonials'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="testimonial_heading">
                                <h4>testimonial</h4>
                                <h2>What Do They Say About Me</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
                <div className="test_with">
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <div className="test_imgpart">
                                    <img src="./photos/Mask group.png" alt="test img" />
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="test_textpart">
                                    <p>SamCreative has been the best designer I have ever worked with. The UI designs he created are top-notch and the design system he
                                        integrated allows for straight forward fixes throughout every area of the app. I'm looking forward to partner up with him on upcoming projects. </p>
                                        <h3 >Iqbal Hafish</h3>
                                        <h5>Project Manager, DaurUang</h5>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </section>

        </>
    )
}

export default Testomonial
