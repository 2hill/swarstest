import React from 'react';
import { Link } from 'react-router-dom';
import Title from "react-titles/Title4";
class Header extends React.Component {
    render() {
        return(
        <Link to="/">
            <Title size="200" text1="WKI" text2="STAR" fontFamily="" open={true} />
        </Link>
        );
    }
};

export default Header;