import React from 'react'
import Logo from '../assets/LOGO.png'
import{Jumbotron, Row, Col,} from 'react-bootstrap'

function heading(props) {
    return (
        <Jumbotron className=" bg-transparent" align="center">
            <Row>
                <Col className="" sm={12} md={6} align="left">
                    <h1 className="pb-2 font-weight-bolder">{props.title}</h1>
                    
           
                    <ul>
                        <li><b>Name:</b> WebTechnology</li>
                        <li><b>Subject Code:</b> CS414</li>
                        <li><b>Credits:</b> 3-0-0 (3)</li>
                        <li><b>Instructor:</b> Dr. Alok Chakraborty</li>

                    </ul>
                </Col>
                
                <Col className="" sm={12} md={6}>
                    <a href="/" >
                        <img src={Logo} alt="NIT meghalaya" style={{width:"100px",height:"auto"}}/>
                    </a>
                        <p className="pt-2">NIT Meghalaya</p>
                        <p>Computer Science &amp; Engineering Department</p>
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default heading
