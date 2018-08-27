import React from "react";
import Individual from "./Individual";
import { Route } from 'react-router-dom';


class Results extends React.Component {

              


    render() {
        return (
            <div className="results">
              
                if (<Route exact path="/ships" />) 
                         {this.props.ships.map((details, i) => <Individual details={details} key={details.name} />)}    
                
                else if (<Route exact path="/planets"/>)  
                         {this.props.planets.map((details, i) => <Individual details={details} key={details.name} />)}      
                
                else if (<Route exact path="/characters" />) 
                        {this.props.characters.map((details, i) => <Individual details={details} key={details.name} />)} 
            </div>
        );
    }
};

export default Results;
