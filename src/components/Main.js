import React from 'react';
import Header from './Header';
import Results from './Results';
import Search from './Search';


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
        const params = this.props.match.params || {};
        const searchTerm = params.searchTerm || undefined;
        this.loadShips(searchTerm);
    }

    componentWillReceiveProps(nextProps) {
        console.log("Will receive props!");
        console.log(nextProps);
        this.loadShips(nextProps.match.params.searchTerm);
    }

    loadShips = (searchTerm = "ship") => {
        this.setState ({loading: true});

        fetch(`https://swapi.co/api/starships/`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                // filter for ships with images
                const ships = data.data || [];
                const filteredShips = ships.filter(ship => !!ship.labels);
                this.setState({ ships: filteredShips, loading: false });            
            })
            .catch(err => console.error(err));
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