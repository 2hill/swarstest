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
 
        /* Mega Fetch */

        let initialCharacters = [];
        let initialStarships = [];
        let initialPlanets = [];
        fetch(`https://swapi.co/api/people/` && `https://swapi.co/api/starships/` && `https://swapi.co/api/planets/`)
            .then(response => response.json())
            .then(data => {
                initialCharacters = data.results.map((character) => {
                    return character
                });
                initialPlanets = data.results.map((planet) => {
                    return planet
                });
                initialStarships = data.results.map((ship) => {
                    return ship
                });
                console.log(initialStarships);

                this.setState({
                    characters: initialCharacters,
                    planets: initialPlanets,
                    ships: initialStarships,
                    
                });
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

