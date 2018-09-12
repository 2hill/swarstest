import React from "react";
import IndividualCharacter from "./IndividualCharacter";
import { withRouter } from 'react-router';

class Characters extends React.Component {

    render() {
        return (
            <div className="results">
                {this.props.characters.map((details, i) => <IndividualCharacter details={details} key={details.name} />)} 
            </div>
        );
    }
};

export default withRouter(Characters);
