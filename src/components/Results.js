import React from "react";
import Ship from "./Ship";
import PropTypes from 'prop-types';

class Results extends React.Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        ships: PropTypes.array.isRequired
    }

    render() {


        return (
            <div className="results">
                <div className="beers">
                    {this.props.ships.map((details, i) => <Ship details={details} key={details.id} />)}


                </div>
            </div>
        );
    }
};

export default Results;
