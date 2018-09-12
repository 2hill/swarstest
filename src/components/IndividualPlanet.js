import React from "react";

class IndividualPlanet extends React.Component {
    render() {

        const { name, climate, terrain } = this.props.details;               

        return (
            <div className="individual">
                <h2>Name:{name}</h2>
                <h2>Climate:{climate}</h2>
                <h2>Terrain:{terrain }</h2>
            </div>
        );
    }
}

export default IndividualPlanet;