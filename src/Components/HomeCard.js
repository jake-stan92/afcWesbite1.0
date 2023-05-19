import Card from "react-bootstrap/Card";

function HomeCard(props) {
    const {img, text} = props;
    return(
        <Card>
            <a href={"/"+text}><Card.Img className="cardImg" variant="top" src={img} /></a>
                <Card.Body>
                    <Card.Text>
                        <a href={"/"+text}>{text}</a>
                    </Card.Text>
                </Card.Body>
        </Card>
    )
}

export default HomeCard;