import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.css';
import NotFound from './components/NotFound';

import DetailsShips from './components/DetailsShips';
import DetailsPlanets from './components/DetailsPlanets';
import DetailsCharacters from './components/DetailsCharacters';


const Root = function () {
    return (
        <BrowserRouter>
            <div>
            <Switch>
                <Route exact path="/" component={Main} />
<<<<<<< HEAD
                <Route path="/ships" component={DetailsShips} />
                <Route path="/planets" component={DetailsPlanets} />
                <Route path="/characters" component={DetailsCharacters} />
=======

                <Route path="/ships"  render={(ships) => <Details {...ships}/>}/>
                <Route path="/planets" render={(planets) => <Details {...planets} />} />
                <Route path="/characters" render={(characters) => <Details {...characters} />} />
>>>>>>> betaBranch
                <Route component={NotFound} />
</Switch>
            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'))
