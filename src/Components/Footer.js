import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import facebookImg from "../images/facebook.svg";
import instagramImg from "../images/instagram.svg";
import twitterImg from "../images/twitter.svg";

function Footer() {
    return(
        <Navbar bg="dark">
            <Container className="text-white socials">
                <h3>Copyright &#169; AFC</h3>
                <img alt="Facebook" src={facebookImg}></img>
                <img alt="Instagram" src={instagramImg}></img>
                <img alt="Twitter" src={twitterImg}></img>
            </Container>
        </Navbar>
    )
}

export default Footer;