import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {

    static propTypes = {
        siteName: PropTypes.string.isRequired
    }

    render() {
        return (
            <h3 className="title"> {this.props.siteName} </h3>

        )
    }
};

export default Header;