import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Header extends React.Component {

    static propTypes = {
        siteName: PropTypes.string
    }

    render() {
        return (
            <h3 className="title">
                <Link to="/" style={{ textDecoration: 'none' }}>{this.props.siteName} </Link>
            </h3>
        );
    }
};

export default Header;