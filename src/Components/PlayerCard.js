import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PlayerCard(props) {
    const {image, name, pace, shooting, passing, dribbling, defending, physical} = props
    return(
        <Card className="playerCard text-center">
            <Card.Img className="playerCardImg" src={image}></Card.Img>
            <Card.Title>
                {name}
            </Card.Title>
            <Container id="playerStatsContainer">
                <Row>
                    <Col>{pace} PAC</Col>
                    <Col>{dribbling} DRI</Col>
                </Row>
                <Row>
                    <Col>{shooting} SHO</Col>
                    <Col>{defending} DEF</Col>
                </Row>
                <Row>
                    <Col>{passing} PAS</Col>
                    <Col>{physical} PHY</Col>
                </Row>
            </Container>
        </Card>
    )
}

export default PlayerCard;