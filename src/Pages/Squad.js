import Header from "../Components/Header";
import Container from "react-bootstrap/Container";
import PlayerCard from "../Components/PlayerCard";
import headshot from "../images/head.svg"
import uniqid from "uniqid"

function Squad() {

    const squadStats = [
        {image: headshot, name: 'Jake', pace: 99, dribbling: 76, shooting: 89, defending: 99, passing: 78, physical: 99},
        {image: headshot, name: 'John', pace: 90, dribbling: 87, shooting: 54, defending: 78, passing: 78, physical: 99},
        {image: headshot, name: 'Mike', pace: 56, dribbling: 34, shooting: 78, defending: 78, passing: 78, physical: 99},
        {image: headshot, name: 'Josh', pace: 67, dribbling: 67, shooting: 89, defending: 90, passing: 78, physical: 99},
    ]

    return(
        <div className="App">
            <Header />
            <h1 className="text-center">Squad Page</h1>
            <Container id="squadCardContainer">
                {squadStats.map((x) => {
                    return(                        
                        <PlayerCard 
                        key={uniqid()}
                        image={x.image}
                        name={x.name}
                        pace={x.pace}
                        dribbling={x.dribbling}
                        shooting={x.shooting}
                        defending={x.defending}
                        passing={x.passing}
                        physical={x.physical}
                        />  
                    )
                })}
            </Container>
        </div>
    )
}

export default Squad;