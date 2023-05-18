import Container from "react-bootstrap/Container";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState } from "react";
import uniqid from "uniqid"

function Reports() {

    const reports = [{opponent: "TeamA", report: "W"}, {opponent: "TeamB", report: "L"}, {opponent: "TeamC", report: "W"}];

    const [selected, setSelected] = useState()

    const handleChange = (event) => {
        setSelected(event.target.value)
    }

    

    return(
        <div className="App">
            <Header />
            <div className="content">
                <Container>
                    <h1>Reports Page</h1>
                    <select value={selected} defaultChecked defaultValue={"Choose a Team"} onChange={handleChange}>
                        <option>Choose a Team</option>
                        {/* populate options based on reports arr */}
                        {reports.map((x) => {
                            return(
                                <option key={uniqid()}>{x.opponent}</option>
                            )
                        })}
                    </select>
                    {/* populate report outcome based on selection */}
                    {reports.map((i) => {
                        return(
                            selected === i.opponent && <div key={uniqid()} id="showThisDiv">
                                {i.report}
                            </div>
                        )
                    })}
                    {}
                </Container>
                
            </div>
            <Footer />
        </div>
    )
}

export default Reports;