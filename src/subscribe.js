import React, { useState } from 'react';
import './Subscribe.css';  // Assuming you have extracted styles into this CSS file

function Subscribe() {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="subscribe">
            <div className="header">
                <div className="title">INTERESTING <br/>//OR NOT</div>
                <div className="image-placeholder"></div>
            </div>
            <div className="content">
                <div className="main-message">Subscribe once today;<br/>Get lifetime access<br/></div>
                <div className="secondary-message">More is coming.</div>
            </div>
            <div className="footer">
                <div className="news">News ranked for you<br/>Get important AI generated metrics about the news you read</div>
                <div className="metrics">Vital metrics for fractious times<br/>Be the first to know what’s happening today - and tomorrow</div>
            </div>
        </div>
    );
}

export default Subscribe;
