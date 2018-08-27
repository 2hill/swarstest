import React from "react";


class Ship extends React.Component {
    render() {


        const { name, labels, id } = this.props.details;
        const image = labels ? labels.medium : 'null.jpg'

        return (
            <div className="beer">
               
                    <h2>{name}</h2>
                    <img src={image} alt={name} />
            
            </div>
        );
    }
}

export default Ship;