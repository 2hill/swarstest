import React from 'react';
import Header from './Header.js';
import Results from './Results.js';
import Search from './Search.js';


class Main extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <Header siteName ="Stars Wiki"/>
                <Search />
                <Results />
            </div>
        )
    }
}

export default Main;