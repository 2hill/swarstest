import React from 'react';
import Results from './Results';
import Search from './Search';
import Header from './Header';

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            ships: [],
            loading: true
        };

        this.loadShips = this.loadShips.bind(this);
    }


    componentDidMount() {
        console.log(`mounting`);
        console.log(this);
        //this.loadShips();
let initialStarships = [];
        fetch(`https://swapi.co/api/starships/`)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                initialStarships = data.results.map((ship) => {return ship});
                console.log(initialStarships);
                this.setState({ ships: initialStarships, loading: false });
            })
            .catch(err => console.error(err));
        console.log(this.state.ships);


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
        this.setState ({loading: true});

        // Check for ships in local storage
        const localStorageShips = localStorage.getItem(`search-${searchTerm}`);

        if (localStorageShips) {
            const localShips = JSON.parse(localStorageShips);
            this.setState({ ships: localShips, loading: false });
            return; // stop before fetch happens!
        }

        


    };

    render() {
        return(
            <div className="wrapper">
                <Header siteName ="Stars Wiki"/>
                <Search />
                <Results ships={this.state.ships} loading={this.state.loading} />
            
            </div>
        )
    }
}

export default Main;