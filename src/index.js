import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.css';
import Details from './components/Details';
import NotFound from './components/NotFound';


const Root = function () {
    return (
        <BrowserRouter>
            <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/ships" component={Details} />
                <Route path="/planets" component={Details} />
                <Route path="/characters" component={Details}/>
                <Route component={NotFound} />
             </Switch>
            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'))
