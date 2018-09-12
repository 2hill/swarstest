import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Search from './Search';
import Characters from './Characters';


class DetailsCharacters extends React.Component {



    constructor() {
        super();
        this.state = {
            ships: [],
            planets: [],
            characters: [],
            loading: true
        };
        this.loadShips = this.loadShips.bind(this);
        this.loadPlanets = this.loadPlanets.bind(this);
        this.loadCharacters = this.loadCharacters.bind(this);
    }


    componentDidMount() {
        console.log(`mounting`);
        console.log(this);
        //this.loadShips();

        /* fetch starships*/
        let initialStarships = [];
        fetch(`https://swapi.co/api/starships/`)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                initialStarships = data.results.map((ship) => {
                    return ship
                });
                console.log(initialStarships);
                this.setState({
                    ships: initialStarships,

                });
            })
            .catch(err => console.error(err));
        console.log(this.state.ships);

        /* fetch planets*/
        let initialPlanets = [];
        fetch(`https://swapi.co/api/planets/`)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                initialPlanets = data.results.map((planet) => {
                    return planet
                });
                console.log(initialPlanets);
                this.setState({
                    planets: initialPlanets,
                    loading: false
                });
            })
            .catch(err => console.error(err));
        console.log(this.state.planets);

        /* fetch characters */
        let initialCharacters = [];
        fetch(`https://swapi.co/api/people/`)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                initialCharacters = data.results.map((character) => {
                    return character
                });
                console.log(initialCharacters);
                this.setState({
                    characters: initialCharacters,
                    loading: false
                });
            })
            .catch(err => console.error(err));
        console.log(this.state.characters);
    }

    componentDidUpdate(prevProps) {
        console.log('did update');
        const currentSearchTerm = this.props.match.params.searchTerm;
        const oldSearchTerm = prevProps.match.params.searchTerm;
        if (currentSearchTerm !== oldSearchTerm) {
            this.loadShips(currentSearchTerm);
        }
    }


    loadShips = (searchTerm = "ship") => {
        this.setState({
            loading: true
        });
        // Check for ships in local storage
        const localStorageShips = localStorage.getItem(`search-${searchTerm}`);
        if (localStorageShips) {
            const localShips = JSON.parse(localStorageShips);
            this.setState({
                ships: localShips,
                loading: false
            });
            return; // stop before fetch happens!
        }
    };

    loadPlanets = (searchTerm = "planet") => {
        this.setState({
            loading: true
        });
        // Check for planets in local storage
        const localStoragePlanets = localStorage.getItem(`search-${searchTerm}`);
        if (localStoragePlanets) {
            const localPlanets = JSON.parse(localStoragePlanets);
            this.setState({
                planets: localPlanets,
                loading: false
            });
            return;
        }
    };

    loadCharacters = (searchTerm = "character") => {
        this.setState({
            loading: true
        });
        // Check for ships in local storage
        const localStorageCharacters = localStorage.getItem(`search-${searchTerm}`);
        if (localStorageCharacters) {
            const localCharacters = JSON.parse(localStorageCharacters);
            this.setState({
                characters: localCharacters,
                loading: false
            });
            return;
        }
    };




    render() {
        return (
            <div className="wrapper">
                <Header />
                <Nav />
                <Search />
                <Characters characters={this.state.characters} />
            </div>
        )
    }
}

export default DetailsCharacters;

