import React from 'react';


class Anim extends React.Component {
    render () {
        return (
    <div className="starwars-demo">
                <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star"/>
                    <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars"/>
                        <h2 className="byline" id="byline">Pocket Wiki</h2>
    </div>
        );
    }
}

export default Anim;