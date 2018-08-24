import React from "react";
import PropTypes from 'prop-types';

class Results extends React.Component {
    static propTypes = {
        ships: PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="results">
                <div className="beers">
                    {/*this.props.ships.map((details, i) => <Ship details={details} key={details.id} />)*/}

                    ships={this.state.ships} planets={this.state.planets} characters={this.state.characters} 
                </div>
            </div>
        );
    }
};

export default Results;
