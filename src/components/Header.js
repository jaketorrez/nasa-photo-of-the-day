import React from "react";

const Header = props => {
    const { date } = props;

    return (
        <>
        <div className="header-container">
            <h1>NASA: The Wonders of Space</h1>
            <h2>It's { date.toString() }.</h2>
        </div>
        <div className="daily-photo-container">

        </div>
        </>
    );
}

export default Header;