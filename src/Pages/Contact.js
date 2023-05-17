import Header from "../Components/Header";
import Container from "react-bootstrap/Container";

function Contact() {
    return(
        <div className="App">
            <Header />
            <Container className="mt-2 text-center" id="mapContainer">
                <h1 className="mb-3 mt-3">How To Find Us</h1>
                <iframe id="googleMap" title="Google Maps Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.2443396201465!2d-2.2943499220144115!3d52.637498472092005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487083d4b68010c7%3A0x6cb6cb77a02afb09!2sAlbrighton%20Bowling%20and%20Football%20Clubs!5e0!3m2!1sen!2sth!4v1684297609016!5m2!1sen!2sth" width="350" height="300" style={{ border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy=""></iframe>
            </Container>
        </div>
    )
}

export default Contact;