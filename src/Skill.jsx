import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Skill() {
  return (
    <>
    <section id='skill'>
       <Container>

        <Row>
            <Col lg={12}> 
            <div className="skill_heading">
                <h2>Tools and Skills</h2>
            </div>
            </Col>
        </Row>
       <Row className='skillflex'>
            <Col lg={2}> 
            <div className="skill_item">
                <img src="./photos/Photoshop.png" alt="" />
                
            </div>
            </Col>
        
            <Col lg={2}> 
            <div className="skill_item">
                <img src="./photos/HTML.png" alt="" />
                
            </div>
            </Col>
            <Col lg={2}> 
            <div className="skill_item">
                <img src="./photos/css.png" alt="" />
                
            </div>
            </Col>
            <Col lg={2}> 
            <div className="skill_item">
                <img src="./photos/Group 15.png" alt="" />
                
            </div>
            </Col>
            <Col lg={2}> 
            <div className="skill_itemo">
                <img src="./photos/Figma.png" alt="" />
                
            </div>
            </Col>
        </Row>
       </Container>
    </section>
      
    </>
  )
}

export default Skill
