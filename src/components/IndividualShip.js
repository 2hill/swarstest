import React from "react";

class IndividualShip extends React.Component {
    render() {

        const { name, passengers, max_atmosphering_speed } = this.props.details;               

        return (
            <div className="individual">
                <h2>Name:{name}</h2>
                <h2>Max Speed:{max_atmosphering_speed}</h2>
                <h2>Max capacity:{passengers}</h2>
            </div>
        );
    }
}

export default IndividualShip;