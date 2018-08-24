import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import Ship from './components/Ship';
import Planet from './components/Planet';
import Character from './components/Character';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';


const Root = function () {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/ships" component={Ship} />
                <Route path="/planets" component={Planet} />
                <Route path="/characters" component={Character}/>
            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'))
