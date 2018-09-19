import React from "react";
import Individual from "./Individual";
import { withRouter } from 'react-router';


class Results extends React.Component {


    render() {


        const current_page = this.props.location.pathname;
        let data;

        if (current_page === "/ships") {
             data = this.props.ships;
        } else if (current_page === "/characters") {
            data = this.props.characters;
        } else if (current_page === "/planets") {
            data = this.props.planets;
        };

        return (
            <div className="results">     
                  
         {data.map((details, i) => <Individual details={details} key={details.name} />)}                  
                
        
            </div>
        );
    }
};

export default withRouter(Results);
