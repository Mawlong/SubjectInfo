import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'

function footer() {
    return (
        <div className="footer bg-dark text-white-50">
            
            <Container className= "mt-3" >
            
                <Row className="py-1 pt-4 mx-auto">
            
                    <Col className = "p-1" md = {2} sm ={12} align="left">
                        <p>
                            Email:
                        </p>
                    </Col>

                    <Col className = "" md = {2} sm ={12} align="left">
                        <p>
                            <a href="mailto:b16cs004@nitm.ac.in">b16cs004@nitm.ac.in</a>
                        </p>
                    </Col>
                </Row>

                <Row className="py-1 mx-auto">
                    <Col className = "p-1" md = {2} sm ={12} align="left">
                        <p>
                            Phone number:
                        </p>
                    </Col>

                    <Col className = "p-1" md = {2} sm ={12} align="left">
                        <p>
                            <a href="tel: +917308188239">+91 - 7308188239</a>
                        </p>
                    </Col>
                </Row>

                <Row className="py-1 mx-auto">
                    <Col className = "p-1" md = {2} sm ={12} align="left">
                        <p>Address</p>
                    </Col>

                    <Col className="p-1 " md = {6} sm ={12} align="left">
                        <p>
                            House no 68, Lower New Colony, Laitumkhrah, Shillong - 793003, Meghalaya, India.
                        </p>
                    
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default footer
