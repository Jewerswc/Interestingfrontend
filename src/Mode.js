import React, { useState } from 'react';

function Mode() {
    // State to track which tab is active
    const [activeTab, setActiveTab] = useState('explore'); // 'explore' is the only active option initially

    // Function to handle clicking the "Explore" tab
    const handleTabClick = () => {
        setActiveTab('explore');
    };

    // Styles for active and inactive tabs
    const activeStyle = {
        color: 'black',
        borderBottom: '2px solid rgba(65, 176, 232, 1)', // Solid blue underline
        cursor: 'pointer'
    };
    const inactiveStyle = {
        color: 'grey',
        borderBottom: 'none',
        cursor: 'default'
    };
    const disabledStyle = {
        color: 'lightgrey',
        borderBottom: 'none',
        cursor: 'not-allowed' // Indicates the tab is not clickable
    };

    return (
        <div style={{width: '400px', position: 'relative', marginLeft: 90, marginTop: 3.5, marginBottom: 53.5}}>
            <div style={{width: 'auto', height: 21, left: 106, top: 12, position: 'absolute', fontSize: 14, fontFamily: 'Cabin', fontWeight: '400', ...activeStyle}} onClick={handleTabClick}>
                Explore
            </div>
            <div style={{width: 'auto', height: 21, left: 250, top: 12, position: 'absolute', fontSize: 14, fontFamily: 'Cabin', fontWeight: '400', ...disabledStyle}}>
                Following
            </div>
        </div>
    );
}

export default Mode;
