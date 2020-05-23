import React from 'react'
import {Accordion,Container,Card, Button, Jumbotron} from 'react-bootstrap'
import Heading from '../components/heading'

export default function syllabusUnits() {
    return (
        <Container>

            <Heading title="Syllabus Units"/>


            <div className="mb-3 bg-info px-2 text-white">
                <h2>This course covers the following units:</h2>
            </div>
            

            <Accordion defaultActiveKey="0">

                <Card>
                    <Card.Header>

                        <Accordion.Toggle as={Card.Header} variant="" eventKey="0">
                            Introduction to web technologies and architectures.
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Recent Web technologies: A case study on WWW, web 2.0 etc., Client/Server Computing: C/S Computing, Middleware, Fat client VS Fat Servers, N-tiered Software Architecture.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="1">
                            Mark Language
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Markup Languages and their grammers: SGML, DTD Resources, HTML, CSS, XML, XSL, Query Languages for XML.</Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="2">
                            
                        Browser and Apache web server architecture
                  
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <p>Web Browser: Browser Architecture, Configuration of Netscape and IE </p>
                            <p>Web Server Apache Architecture: Web Server Architecture, Server Features, Configuration of Apache Tomcat.</p>
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="3">
                            Commonly used protocols
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Protocols: HTTP, FTP, SMTP, POP etc.</Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="4">
                            
                      Basics of web-programming
                    
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <p>Programming: Client side scripting: JAVASCRIPT, AJAX. </p>
                            <p>Server side programming in PHP/JSP/Servlet. </p>
                            <p>Overview of Java, JAVA Applet</p>
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="5">
                        Distributed Object Models
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="5">
                        <Card.Body>CORBA, DCOM, EJB</Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="6">E-commerce applications</Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="6">
                        <Card.Body>E-business models, E-commerce and WWW, secure electronic payment protocols, e-commerce payment systems, web based marketing, search engine and directory registration, e-commerce site designing tools etc.</Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="7">Web 3.0</Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="7">
                        <Card.Body>Semantic web and supporting technologies</Card.Body>
                    </Accordion.Collapse>

                </Card>

            </Accordion>

        </Container>
    )
}
