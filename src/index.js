import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import Details from './components/Details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.css';
import NotFound from './components/NotFound';


const Root = function () {
    return (
        <BrowserRouter>
            <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/ships"  render={(ships) => <Details {...ships}/>}/>
                <Route path="/planets" render={(planets) => <Details {...planets} />} />
                <Route path="/characters" render={(characters) => <Details {...characters} />} />
                <Route component={NotFound} />
</Switch>
            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'))
