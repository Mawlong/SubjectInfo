import React from 'react'
import {Container} from 'react-bootstrap'

function footer() {
    return (
        <div className="footer bg-dark p-4 text-white-50" align="center">
            
            <Container className= "mt-3" >
                <p>Designed by <a href="https://www.linkedin.com/in/leonmawlong/" target="blank">Leon Patrick Mawlong</a></p>
                <p>Made using React.js and hosted on Vercel</p>
                <p><a href="http://nitmeghalaya.in/nitmeghalaya/department/computer-science-engineering" target="blank">Computer Science &amp; Engineering Department</a></p>
                <p><a href="http://nitmeghalaya.in/nitmeghalaya/" target="blank">NIT Meghalaya</a></p>

            </Container>

        </div>
    )
}

export default footer
