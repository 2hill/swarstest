import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import DetailsShips from './components/DetailsShips';
import DetailsPlanets from './components/DetailsPlanets';
import DetailsCharacters from './components/DetailsCharacters';


const Root = function () {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/ships" component={DetailsShips} />
                <Route path="/planets" component={DetailsPlanets} />
                <Route path="/characters" component={DetailsCharacters} />

            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'))
