import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import facebookImg from "../images/facebook.svg";
import instagramImg from "../images/instagram.svg";
import twitterImg from "../images/twitter.svg";

function Footer() {
    return(
        <Navbar bg="dark">
            <Container className="text-white socials">
                <div>
                    <h5>Copyright &#169; AFC</h5>
                </div>
                <div className="socialIcons">
                    <img alt="Facebook" src={facebookImg}></img>
                    <img alt="Instagram" src={instagramImg}></img>
                    <img alt="Twitter" src={twitterImg}></img>
                </div>
            </Container>
        </Navbar>
    )
}

export default Footer;