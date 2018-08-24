import React from 'react';
import { Link } from 'react-router-dom';
import Title from "react-titles/Title4";
class Header extends React.Component {
    render() {
        return(
            
            <Title size="200" text1="WIKI" text2="STAR" open={true} />
        
        );
    }
};

export default Header;