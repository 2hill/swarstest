import React from "react";
import Ship from "./Ships"


class Results extends React.Component {



    render() {
        return (
            <div className="results">
                <div className="beers">
        {this.props.ships.map((details, i) => <Ship details={details} key={details.name} />)}            
                </div>
            </div>
        );
    }
};

export default Results;
