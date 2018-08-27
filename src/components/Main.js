import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Anim from './Anim';


class Main extends React.Component {

    render() {
        return ( 
        <div className = "wrapper">
            <Header/>
            <Nav/>
            <Anim/>
        </div>
        )
    }
}

export default Main;