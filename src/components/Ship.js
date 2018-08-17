import React from 'react';
import Loader from "./Loader";
import Header from "./Header";
import PropTypes from 'prop-types';


class Ship extends React.Component {
    constructor() {
        super();
        this.state = { ships: {}, loading: true };
    }

    static propTypes = {
        params: PropTypes.object
    };


    loadShip = shipId => {
        console.log(`Loading ship ${shipId}`);
        this.setState({ loading: true });
        fetch(`https://swapi.co/api/starships/${shipId}`)
            .then(data => data.json())
            .then(res => {
                this.setState({ ship: res.data, loading: false });
            });
    };

    renderGlass = ship => {
        if (!ship.glass) return;
        return (
            <div className="glass">
                <img src={`/images/glass-${ship.glass.id}.jpg`} alt={ship.name} />
                <h3>{ship.glass.name} Glass</h3>
            </div>
        );
    };

    renderAbv = ship => {
        if (!ship.abv) return;
        return <div className="abv">ABV: {ship.abv}%</div>;
    };

    render() {
        if (this.state.loading) {
            return <Loader message="Pouring a cold one!" />;
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