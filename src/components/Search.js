import React from 'react';
import PropTypes from 'prop-types';
class Search extends React.Component {

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
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={(q) => this.q = q} placeholder="Ships, Planets, Characters.." />
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
};


export default Search;
