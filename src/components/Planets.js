import React from "react";
import IndividualPlanet from "./IndividualPlanet";
import { withRouter } from 'react-router';



class Planets extends React.Component {

    render() {
        return (
            <div className="results">            
                
                {this.props.planets.map((details, i) => <IndividualPlanet details={details} key={details.name} />)}                  
            
            </div>
        );
    }
};

export default withRouter(Planets);
