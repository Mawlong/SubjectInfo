import React from 'react'
import{Jumbotron,Container,Row,Col, Table} from 'react-bootstrap'
import Logo from '../assets/LOGO.png'

export default function overview() {
    return (
        <Container>

            <Jumbotron className=" bg-transparent" align="center">
                <Row>
                    <Col className="" sm={12} md={6} align="left">
                        <h2 className="pb-2 font-weight-bolder">Syllabus Overview</h2>
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

            <div className="mb-3 px-2 bg-info text-white" >
                <h3 >Course Evaluation Plan</h3>
            </div>

            <Table bordered responsive>
                <thead align="center">
                    <tr>
                        <th>Evaluation Type</th>
                        <th>Marks</th>
                    </tr>
                </thead>

                <tbody align="center">
                    <tr>
                        <td>End-Semester Exams</td>
                        <td>100 marks</td>
                    </tr>

                    <tr>
                        <td>Mid-Semester Exams</td>
                        <td>50 marks</td>
                    </tr>

                    <tr>
                        <td>Class Tests</td>
                        <td>30 marks</td>
                    </tr>

                    <tr>
                        <td>Assignments</td>
                        <td>20 marks</td>
                    </tr>
                </tbody>
            </Table>

            <div className="mb-3 bg-info px-2 text-white">
                <h3 >Course Outcomes</h3>
            </div>

            <Table bordered responsive>
                <tbody>
                    <tr>
                        <td>
                            <h3>C01</h3>
                            <p>Able to acquire knowledge about fundamental concepts of web technology - web hardware and software architectures, WWW, Web 2.0, Web 3.0, CLient Server Computing, Tiered Software Architecture and markup languages and their grammars.</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h3>C02</h3>
                            <p>Able to design styled HTML web pages with various HTML elements and CSS.</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h3>C03</h3>
                            <p>Able to use XML, XSL, XQuery, JavaScript and AJAX.</p>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <h3>C04</h3>
                            <p>Able to acquire knowledge about web technology protocols, web browser architecture,web server configuration and do basic client side web programming and basic server side programming using PHP, JSP and Servlets.</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h3>C05</h3>
                            <p>Able to acquire knowledge about distributed object models, E-Commerce and semantic web and supporting technologies.</p>
                        </td>
                    </tr>

                </tbody>

            </Table>



            
        </Container>
    )
}
