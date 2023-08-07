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
            <h2>{props.headerText}</h2>
            <p>{props.subtitleText}</p>
        </div>
    )
}

export default Header;