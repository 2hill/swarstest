import React from 'react';
import Anim from './Anim';
import Header from './Header';
import Nav from './Nav';
import Search from './Search';


class Ship extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Nav />
                <Search/>
                <Anim />
            </div>       
        );
    }
}

export default Ship;