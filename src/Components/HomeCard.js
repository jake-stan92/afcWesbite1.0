import Card from "react-bootstrap/Card";

function HomeCard(props) {
    const {img, text} = props;
    return(
        <Card className="card">
            <Card.Img className="cardImg" variant="top" src={img} />
                <Card.Body>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
        </Card>
    )
}

export default HomeCard;