import  Container from "react-bootstrap/Container";
import HomeCard from "../Components/HomeCard";

import squadPic from "../images/squadPic.jpg";
import reportImg from "../images/report.svg";
import pinImg from "../images/pin.svg";
import squadImg from '../images/squad.svg';


function Home() {
    return(
        <div className="App">
            <Container id="squadPicContainer">
                <img id="squadPic" alt="Squad" src={squadPic}></img>
            </Container>
            <Container className="d-flex mt-2" id="cardContainer">
                <a href="/reports">
                    <HomeCard img={reportImg} text="Reports" /> 
                </a>
                <a href="/contact">
                    <HomeCard img={pinImg} text="Find Us" />
                </a>
                <a href="/squad">
                    <HomeCard img={squadImg} text="Squad" />
                </a>               
            </Container>
        </div>       
    )
}

export default Home;