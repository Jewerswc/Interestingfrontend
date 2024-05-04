import React, { useState, useEffect } from 'react';

function Leaderboard() {
    const [articles, setArticles] = useState([]);
    const [activeTab, setActiveTab] = useState('tab1');

    // Fetch articles when the component mounts
    useEffect(() => {
        fetch('http://localhost:8000/api/Articles/')
            .then(response => response.json())
            .then(data => {
                const sortedData = data.map(item => ({
                    title: item.title,
                    score: parseFloat(item.interesting_score).toFixed(3)
                })).sort((a, b) => b.score - a.score);
                setArticles(sortedData);
            })
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    const topFive = articles.slice(0, 5);
    const bottomFive = articles.slice(-5).reverse();

    return (
        <div style={{
            width: '35vh',
            height: 'auto',
            position: 'relative',
            marginBottom: '180px',  // Corrected from bottomMargin to marginBottom
            background: 'white',
            borderRadius: '4.5px',
            marginTop: '5vh',
            marginLeft: '18vh',
            border: '1.50px solid rgba(162, 162, 162, 0.09)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            wordWrap: 'break-word',
        }}>
            {/* Tab buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-evenly', position: 'absolute', width: '100%', height: 40,  top: '0', left: '0' }}>
                <button style={{ flex: 1, border: 'none', background: activeTab === 'tab1' ? 'transparent' : 'rgba(166.81, 155.69, 155.69, 0.21)' }} onClick={() => setActiveTab('tab1')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1413_701)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H1.25V18.75H20V20H0V0ZM12.5 4.375C12.5 4.20924 12.5658 4.05027 12.6831 3.93306C12.8003 3.81585 12.9592 3.75 13.125 3.75H18.125C18.2908 3.75 18.4497 3.81585 18.5669 3.93306C18.6842 4.05027 18.75 4.20924 18.75 4.375V9.375C18.75 9.54076 18.6842 9.69973 18.5669 9.81694C18.4497 9.93415 18.2908 10 18.125 10C17.9592 10 17.8003 9.93415 17.6831 9.81694C17.5658 9.69973 17.5 9.54076 17.5 9.375V6.125L12.9838 11.6463C12.9285 11.7137 12.8597 11.7689 12.7818 11.8082C12.7039 11.8475 12.6186 11.87 12.5315 11.8744C12.4444 11.8787 12.3573 11.8648 12.2759 11.8335C12.1945 11.8022 12.1205 11.7541 12.0588 11.6925L8.825 8.45875L4.255 14.7425C4.15503 14.8696 4.00967 14.953 3.84948 14.9752C3.68929 14.9974 3.52673 14.9567 3.39596 14.8615C3.2652 14.7663 3.17641 14.6242 3.14826 14.4649C3.12011 14.3057 3.15479 14.1417 3.245 14.0075L8.245 7.1325C8.29807 7.05939 8.36636 6.99866 8.44516 6.95448C8.52396 6.91031 8.61141 6.88374 8.70146 6.87661C8.79152 6.86948 8.88205 6.88196 8.96682 6.91319C9.05159 6.94442 9.12859 6.99365 9.1925 7.0575L12.4538 10.32L16.8062 5H13.125C12.9592 5 12.8003 4.93415 12.6831 4.81694C12.5658 4.69973 12.5 4.54076 12.5 4.375Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1413_701">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
                </button>
                <button style={{ flex: 1, border: 'none', background: activeTab === 'tab2' ? 'transparent' : 'rgba(166.81, 155.69, 155.69, 0.21)' }} onClick={() => setActiveTab('tab2')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1414_705)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H1.25V18.75H20V20H0V0ZM12.5 14.375C12.5 14.5408 12.5658 14.6997 12.6831 14.8169C12.8003 14.9342 12.9592 15 13.125 15H18.125C18.2908 15 18.4497 14.9342 18.5669 14.8169C18.6842 14.6997 18.75 14.5408 18.75 14.375V9.375C18.75 9.20924 18.6842 9.05027 18.5669 8.93306C18.4497 8.81585 18.2908 8.75 18.125 8.75C17.9592 8.75 17.8003 8.81585 17.6831 8.93306C17.5658 9.05027 17.5 9.20924 17.5 9.375V12.625L12.9838 7.10375C12.9285 7.03627 12.8597 6.98111 12.7818 6.94182C12.7039 6.90253 12.6186 6.87998 12.5315 6.87562C12.4444 6.87127 12.3573 6.8852 12.2759 6.91652C12.1945 6.94785 12.1205 6.99587 12.0588 7.0575L8.825 10.2913L4.255 4.0075C4.15503 3.88038 4.00967 3.79696 3.84948 3.77477C3.68929 3.75258 3.52673 3.79334 3.39596 3.8885C3.2652 3.98366 3.17641 4.1258 3.14826 4.28506C3.12011 4.44431 3.15479 4.60828 3.245 4.7425L8.245 11.6175C8.29807 11.6906 8.36636 11.7513 8.44516 11.7955C8.52396 11.8397 8.61141 11.8663 8.70146 11.8734C8.79152 11.8805 8.88205 11.868 8.96682 11.8368C9.05159 11.8056 9.12859 11.7563 9.1925 11.6925L12.4538 8.43L16.8062 13.75H13.125C12.9592 13.75 12.8003 13.8158 12.6831 13.9331C12.5658 14.0503 12.5 14.2092 12.5 14.375Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1414_705">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
                </button>
            </div>

            {/* Conditional rendering based on activeTab */}
            {activeTab === 'tab1' && (
                <div style={{
                    position: 'absolute',
                    top: '57px',
                    left: '18px',
                    width: '35vh',
                    color: 'black',
                    fontSize: '13.5px',
                    fontFamily: 'Cabin',
                    fontWeight: '400',
                    lineHeight: '23px',
                    wordWrap: 'break-word',
        
                }}>
                    {/* Tab 1 content */}
                    <div style={{ position: 'absolute', top: '5px', left: '1px', maxWidth: '31vh', color: 'black', fontSize: '13.5px', fontFamily: 'Cabin', fontWeight: '400', lineHeight: '23px', wordWrap: 'break-word' }}>
                    {topFive.map((article, index) => (
                        <p key={index}>{article.title} - score: {article.score}</p>
                    ))}
                </div>
                </div>
            )}

            {activeTab === 'tab2' && (
                <div style={{
                    position: 'absolute',
                    top: '57px',
                    left: '18px',
                    width: '35vh',
                    color: 'black',
                    fontSize: '15px',
                    fontFamily: 'Cabin',
                    fontWeight: 'bold',
                    lineHeight: '23px',
                    wordWrap: 'break-word',
                }}>
                    {/* Tab 2 content */}
                    <div style={{ position: 'absolute', top: '5px', left: '1px', maxWidth: '31vh', color: 'black', fontSize: '13.5px', fontFamily: 'Cabin', fontWeight: '400', lineHeight: '23px', wordWrap: 'break-word' }}>
                    {bottomFive.map((article, index) => (
                        <p key={index}>{article.title} - score: {article.score}</p>
                    ))}
                </div>
                </div>
            )}

            {/* Additional divs for layout if needed */}
            <div style={{padding: '10px', position: 'absolute', top: '208px', left: '10px'}} />
            <div style={{padding: '10px', position: 'absolute', top: '278px', left: '10px'}} />
        </div>
    );
}

export default Leaderboard;
