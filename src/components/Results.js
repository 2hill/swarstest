import React from 'react';
import Ship from './Ship';
import Loader from './Loader';
import PropTypes from 'prop-types';

class Results extends React.Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        ships: PropTypes.array.isRequired
    }

    render() {

        if (this.props.loading) {
            return <Loader message="Starship searching" />;
        }


        return (
            <div className="results">
                <div className="beers">
                    {this.props.ships.map((details, i) => <Ship details={details} key={details.id} />)}
                </div>

                <pre>{JSON.stringify(this.props.ships, null, '  ')}</pre>

            </div>
        );
    }
};

export default Results;

