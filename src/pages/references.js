import React from 'react'
import{Container, Table} from 'react-bootstrap'
import Heading from '../components/heading'

export default function references() {
    return (
        <Container className="App pb-5">
            <Heading title="References"/>
            <div className="mb-3 px-2 bg-info text-white" >
                <h3 >References used for this course</h3>
            </div>

            <Table bordered responsive>
                <thead align="center">
                    <tr>
                        <th>Sl.No</th>
                        <th>Book</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><a href="http://www.w3schools.com/" target="blank">W3schools tutorials</a></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Eric T. Freeman, Elisabeth Robson, “Head First JavaScript Programming”, O’Reilly Media</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>L. Beighley, Michael Morrison, “Head First PHP & MySQL”, O-Reilly Media</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>B. Basham, Kathy Sierra, Bert Bates, “Head First Servlets and JSP”, O'Reilly publication</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>R. M. Riordan, “Head First Ajax”, O’Reilly Media.</td>
                    </tr>
                </tbody>
            </Table>
            
        </Container>
    )
}
