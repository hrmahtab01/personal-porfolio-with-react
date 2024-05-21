import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner() {
    return (
        <>
            <section id='banner'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="banner_text_part">
                                <h3>Hello Buds</h3>
                                <h1>I am <span>Dimas Ardiansyah</span></h1>
                                <h4>UI / UX Design Enthusiast</h4>
                                <h5></h5>
                                <p>I'm a person who has a keen interest in the design layout.
                                     I think presenting an attractive design is a matter of concern in developing a branding of products. 
                                     To creates a good design,  I focus on proper composition and visual decoration details in order to make it more professional. 
                                     For the time being, I’m developing the skill for acquiring the UI/UX design for dynamic application and web development.</p>
                                     <div className="banner_btn">
                                        <button ><i class="fa-solid fa-bars-staggered icon"></i>Download CV</button>
                                        <button >More</button>

                                     
                                     </div>
                            </div>

                        </Col>


                        <Col lg={6}>
                            <div className="banner_img_part">
                                <img className='imgone' src="./photos/Rectangle 2.png" alt="rectangle 2" />
                                <img className='imgtwo' src="./photos/Group 13.png" alt="banner img" />
                            </div>
                        </Col>

                    </Row>

                </Container>
            </section>
        </>
    )
}

export default Banner
