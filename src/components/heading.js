import React from 'react'
import Logo from '../assets/LOGO.png'
import{Jumbotron, Row, Col,} from 'react-bootstrap'

// This funtion receives props {any} and then renders the passed information

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
                        <li><b>Instructor:</b> <a href="http://nitmeghalaya.in/nitmeghalaya/department/computer-science-engineering/faculty-1/dr-alok-chakrabarty-1" target="blank">Dr. Alok Chakraborty</a></li>

                    </ul>
                </Col>
                
                <Col className="" sm={12} md={6}>
                    <a href="http://nitmeghalaya.in/nitmeghalaya/" target="blank" >
                        <img src={Logo} alt="NIT meghalaya" style={{width:"100px",height:"auto"}}/>
                    </a>
                    <div className="pt-3"> 
                        <p><a href="http://nitmeghalaya.in/nitmeghalaya/" target="blank">NIT Meghalaya</a></p>
                        <p><a href="http://nitmeghalaya.in/nitmeghalaya/department/computer-science-engineering" target="blank">Computer Science &amp; Engineering Department</a></p>
                    </div>
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default heading
