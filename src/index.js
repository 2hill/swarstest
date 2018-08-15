import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import Item from './components/Item';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';


const Root = function () {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/search/:searchTerm" component={Main} />
                <Route path="/beer/:beerId/:beerSlug" component={Item} />
            </div>
        </BrowserRouter>
    );
};

render(<Root />, document.querySelector('#root'))
