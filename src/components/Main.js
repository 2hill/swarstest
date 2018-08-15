import React from 'react';
import Header from './Header.js';
import Item from './Item.js';
import List from './List.js';
import Loader from './Loader.js';
import Results from './Results.js';
import Search from './Search.js';


class Main extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <Header siteName ="Stars Wiki"/>
                <Item />
                <List />
                <Loader />
                <Results />
                <Search />
            </div>
        )
    }
}

export default Main;