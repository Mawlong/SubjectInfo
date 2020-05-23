import React from 'react'
import {Navbar, Nav,Container} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import Overview from'../pages/overview';
import References from'../pages/references';
import Syllabus from'../pages/syllabusUnits';


export default function navbar() {
    return (     

        <Router>
            <Container className = 'p-0' fluid = {true} >

                <Navbar className="sticky-top px-2" bg="primary" variant="dark" collapseOnSelect expand='lg'>
                    <Navbar.Brand align="center" className="justify-content-center">Web Technology</Navbar.Brand>

                    <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

                    <Navbar.Collapse id="navbar-toggle">

                        <Nav>
                            <Nav.Item>
                                <Nav.Link active eventKey = '1' as={Link} to = '/'>Overview</Nav.Link>
                            </Nav.Item>

                            <Nav.Item> 
                                <Nav.Link eventKey = '1' as={Link} to = '/syllabusUnits'>Syllabus</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey = '1' as={Link} to = '/references'>References</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Navbar.Collapse>

                
                </Navbar>

                <Route path = '/' exact render = {() => <Overview/> }/>

                <Route path = '/syllabusUnits' render = {() => <Syllabus /> }/>

                <Route path = '/references' render = {() => <References /> }/>

            </Container>

        </Router>       
            
        
    )
}
