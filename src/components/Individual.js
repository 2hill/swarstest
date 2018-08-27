import React from "react";

class Individual extends React.Component {
    render() {

        const { name, passengers, max_atmosphering_speed, height, mass, climate, terrain } = this.props.details;               

        return (
            <div className="individual">
                <h2>Name:{name}</h2>
                <h2>Max Speed:{max_atmosphering_speed || height || climate}</h2>
                <h2>Max capacity:{passengers || mass ||terrain }</h2>
            </div>
        );
    }
}

export default Individual;