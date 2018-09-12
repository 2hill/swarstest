import React from "react";
import Individual from "./Individual";
import { withRouter } from 'react-router';



class Results extends React.Component {

     
    render() {

        const current_page = this.props.location.pathname;

        return (
            <div className="results">            
                if ({current_page} === {"/ships"} ) 
                         {this.props.ships.map((details, i) => <Individual details={details} key={details.name} />)}                  
                else if ({current_page} === {"/planets"})  
                         {this.props.planets.map((details, i) => <Individual details={details} key={details.name} />)}                     
                else if ({current_page} === {"/characters"}) 
                        {this.props.characters.map((details, i) => <Individual details={details} key={details.name} />)} 
        
            </div>
        );
    }
};

export default withRouter(Results);
