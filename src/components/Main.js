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
    }


    componentDidMount() {
        console.log(`mounting`);
        console.log(this);
       /* const params = this.props.match.params || {};
        const searchTerm = params.searchTerm || undefined;
        this.loadShips(searchTerm); */
        this.loadShips();
    }

    /*componentWillReceiveProps(nextProps) {
        console.log("Will receive props!");
        console.log(nextProps);
        this.loadShips(nextProps.match.params.searchTerm);
    }
    */

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

        

        fetch(`https://swapi.co/api/starships/?search=${searchTerm}`)
            .then(data => data.json())
            .then(data => {
                //console.log(data);
                // filter for ships with images
                const ships = data.data || [];
                //const filteredShips = ships.filter(ship => !!ship.pilots);
                //this.setState({ ships: filteredShips, loading: false });  
                this.setState({ships: ships, loading: false})    ;      
            })
            .catch(err => console.error(err));
        console.log(this.state.ships);
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