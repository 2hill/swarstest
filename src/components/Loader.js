import React from 'react';

class Loader extends React.Component {


    render() {
        return (

            <div className="loader">
                <img src="/images/logo.svg" alt="Loading..." />
                <h2>Your Message from props goes here</h2>
            </div>
        )
    }
};

export default Loader;

