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

        let initialStarships = [];
        let initialPlanets = [];
        let initialCharacters = [];
        
        Promise.all([
            fetch(`https://swapi.co/api/people/`),
            fetch(`https://swapi.co/api/starships/`),
            fetch(`https://swapi.co/api/planets/`)
            ])
            .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
            .then(([data1, data2, data3]) => { 
                initialStarships = data1.results.map((ship) => {
                    return ship
            });
                initialPlanets = data2.results.map((planet) => {
                    return planet
                });
                initialCharacters = data3.results.map((character) => {
                    return character
                });
                this.setState({
                    ships: initialStarships,
                    planets: initialPlanets,
                    characters: initialCharacters

                })
            })
            .catch(err => console.error(err));
        }

    render() {
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
