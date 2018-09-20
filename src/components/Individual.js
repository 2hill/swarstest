import React from "react";
import { withRouter } from 'react-router';

class Individual extends React.Component {
    
    render() {    
        const current_page = this.props.location.pathname;
        let shipTitle = [];
        let characterTitle = [];
        let planetTitle = [];

        if (current_page === "/ships") {
            shipTitle = ["Max Speed", "Max Capacity"];
        } else if (current_page === "/characters") {
            characterTitle = ["Height", "Weight"];
        } else if (current_page === "/planets") {
            planetTitle = ["Climate", "Terrain"];
        };
    
        const { name, passengers, max_atmosphering_speed, height, mass, climate, terrain } = this.props.details;  
                   

        return (
            <div className="individual">
                <h2>Name: {name}</h2>  
               
                
                <h2> { shipTitle[0]|| characterTitle[0] || planetTitle[0] } : { max_atmosphering_speed || height || climate }</h2>
                <h2>{ shipTitle[1] || characterTitle[1] || planetTitle[1] } : { passengers || mass ||terrain }</h2>
            </div>
        );
    }
}

export default withRouter(Individual);