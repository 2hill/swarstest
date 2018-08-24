import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import Details from './components/Details';


const Root = function () {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/ships" component={Details} />
                <Route path="/planets" component={Details} />
                <Route path="/characters" component={Details}/>
            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'))
