import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Search from './Search';
import Anim from './Anim';
//import Results from './Results';

class Details extends React.Component {

    render (){
        return (
        <div className="wrapper">
            <Header/>
            <Nav/>
            <Search/>
            <Anim/>
        </div>
                )
    }
}

export default Details;

