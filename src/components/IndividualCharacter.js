import React from "react";

class IndividualCharacter extends React.Component {
    render() {

        const { name, height, mass } = this.props.details;

        return (
            <div className="individual">
                <h2>Name:{name}</h2>
                <h2>Height:{height}</h2>
                <h2>Weight:{ mass}</h2>
            </div>
        );
    }
}

export default IndividualCharacter;