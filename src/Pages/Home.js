import Container from "react-bootstrap/Container";
import HomeCard from "../Components/HomeCard";

import squadPic from "../images/squadPic.jpg";
import reportImg from "../images/report.svg";
import pinImg from "../images/pin.svg";
import squadImg from '../images/squad.svg';
import { CardGroup } from "react-bootstrap";


function Home() {
    return(
        <div className="content">
            <Container id="squadPicContainer">
                <img id="squadPic" alt="Squad" src={squadPic}></img>
            </Container>
            {/* <Container className="d-flex" id="cardContainer">
                <a href="/reports">
                    <HomeCard img={reportImg} text="Reports" /> 
                </a>
                <a href="/contact">
                    <HomeCard img={pinImg} text="Find Us" />
                </a>
                <a href="/squad">
                    <HomeCard img={squadImg} text="Squad" />
                </a>               
            </Container> */}
            <Container>
            <CardGroup className="d-flex homeCardContainer">
                
                <HomeCard img={reportImg} text="Reports" /> 
            
            
                <HomeCard img={pinImg} text="Find Us" />
            
            
                <HomeCard img={squadImg} text="Squad" />
            
        </CardGroup>
            </Container>
            
        </div>       
    )
}

export default Home;