import React from 'react';
import Header from './Header';
import Results from './Results';
import Nav from './Nav';
import Search from './Search';

class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            ships: [],
            planets: [],
            characters: []
        };
    }

    componentDidMount() {
 
        /* Fetch all */
        let initialCharacters = [];
        let initialStarships = [];
        let initialPlanets = [];

        const urls = [  `https://swapi.co/api/people/`,
                        `https://swapi.co/api/starships/`,
                        `https://swapi.co/api/planets/`
                    ];

        
        let requests = urls.map(url => fetch(url));
        console.log(requests);

        Promise.all(requests)
            .then(response => response.json())
            .then(data => {
                initialCharacters = data.requests.map((character) => {
                    return character
                })})
            .then(  data => {
                initialPlanets = data.results.map((planet) => {
                    return planet
                })})
            .then(  data => {
                initialStarships = data.results.map((ship) => {
                    return ship
                })});

                this.setState({
                    characters: initialCharacters,
                    planets: initialPlanets,
                    ships: initialStarships,
                    
                })
            
            .catch(err => console.error(err));
    }

    render (){
        return (
        <div className="wrapper">
            <Header/>
            <Nav/>
            <Search/>
            <Results ships={this.state.ships} characters={this.state.characters} planets={this.state.planets} />
        </div>
                )
    }
}

export default Details;

