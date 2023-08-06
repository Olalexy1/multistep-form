import React from 'react';

interface HeaderProps {
    headerText: string;
    subtitleText: string;
}

const Header = (props:any) => {
    const {
        headerText,
        subtitleText
    } = props;

    return (
        <div className="app__header">
            <h1>{props.headerText}</h1>
            <p>{props.subtitleText}</p>
        </div>
    )
}

export default Header;