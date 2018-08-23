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


        return (
            <div className="results">
             
            </div>
        );
    }
};

export default Results;

