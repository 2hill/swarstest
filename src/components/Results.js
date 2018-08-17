import React from 'react';
import Loader from './Loader';
import Ship from './Ship';
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
                    { <Ship />}
                </div>

                

            </div>
        );
    }
};

export default Results;

