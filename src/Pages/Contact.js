import { Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Container from "react-bootstrap/Container";


function Contact() {
    return(
        <div className="App">
            <Header />
            <div className="content">
                <Container className="mt-2 text-center" id="mapContainer">
                    <h1>How To Find Us</h1>
                    <Container>
                        <iframe id="googleMap" title="Google Maps Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.2443396201465!2d-2.2943499220144115!3d52.637498472092005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487083d4b68010c7%3A0x6cb6cb77a02afb09!2sAlbrighton%20Bowling%20and%20Football%20Clubs!5e0!3m2!1sen!2sth!4v1684297609016!5m2!1sen!2sth" width="350" height="300" style={{ border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy=""></iframe>
                    </Container>
                </Container>
                <Container className="text-center" id="contactDetailsContainer">
                    <Row>
                        <Col md={4}>
                            <h2>Address:</h2>
                            <p>Loak Road <br></br>Albrighton<br></br>WV7 3LH</p>
                        </Col >
                        <Col md={4}>
                            <h2>Phone:</h2>
                            <p>01111111111</p>
                        </Col>
                        <Col md={4}>
                            <h2>Email:</h2>
                            <p>AFC@hotmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </div>            
            <Footer />
        </div>
    )
}

export default Contact;