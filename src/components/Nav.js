import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (    
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar10">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbar10">
                        <ul className="navbar-nav nav-fill w-100">
                            <li className="nav-item"><Link to="/ships">Starships</Link></li>
                            <li className="nav-item"><Link to="/planets">Planets</Link></li>
                            <li className="nav-item"><Link to="/characters">Characters</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Nav;
