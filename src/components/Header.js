import React from 'react';
import Title from "react-titles/Title4";




class Header extends React.Component {
    render() {
        return(
            <Title size="200" text1="STAR" text2="WIKI" open={true} />
        );
    }
};

export default Header;