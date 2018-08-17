import React from 'react';
import PropTypes from 'prop-types';
class Nav extends React.Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = this.q.value;
        this.context.router.history.push(`/?search/${searchTerm}`);
    }
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#">Starships</a></li>
                    <li><a href="#">Planets</a></li>
                    <li><a href="#">Characters</a></li>
                </ul>
            </nav>
        );
    }
};


export default Nav;
