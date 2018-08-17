import React from 'react';
import Loader from "./Loader";
import Header from "./Header";



class Ship extends React.Component {
    constructor() {
        super();
        this.state = { ships: {}, loading: true };
    }

    render() {
        if (this.state.loading) {
            return <Loader message="ship search!" />;
        }

        const { ship } = this.state;

        return (
            <div>
                <Header siteName="Beer me!" />
                <div className="single-beer">
                    <div className="desc">
                        <h2>{ship.name}</h2>
                        <p>{ship.description}</p>
                    </div>

                    <img className="label" src={ship.labels.large} alt={ship.name} />

                    <div className="deets">
                        {this.renderGlass(ship)}
                        {this.renderAbv(ship)}
                    </div>

                    <div className="style">
                        <h3>More Info on {ship.style.name}</h3>
                        <p>{ship.style.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ship;