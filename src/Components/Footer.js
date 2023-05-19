import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import SocialIconsFooter from "./SocialIconsFooter";

function Footer() {
    return(
        <Navbar bg="dark">
            <Container className="text-white">
                <div>
                    <h5>Copyright &#169; AFC</h5>
                </div>
                <SocialIconsFooter />
            </Container>
        </Navbar>
    )
}

export default Footer;