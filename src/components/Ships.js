import React from "react";
import IndividualShip from "./IndividualShip";
import { withRouter } from 'react-router';



class Ships extends React.Component {

     
    render() {


        return (
            <div className="results">    
            {console.log(this.props)}       
              {this.props.ships.map((details, i) => <IndividualShip details={details} key={details.name} />)}                   
            </div>
        );
    }
};

export default withRouter(Ships);
