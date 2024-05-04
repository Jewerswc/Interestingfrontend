import React, { useState, useEffect, useRef } from 'react';
import NewsCard from './NewsCard';
import Header from './Header';
import Accordion from './Accordion';
import Leaderboard from './Leaderboard';
import Mode from './Mode';
import Datesort from './Datesort';
import Follow from './Follow'
import stylesheet from './Feedpagestyle.css'

const Feedpage = () => {
    const [news, setNews] = useState([]);
    const [visibleNews, setVisibleNews] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedPublishers, setSelectedPublishers] = useState([]);
    const [selectedHeuristics, setSelectedHeuristics] = useState([]);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/Articles/')
            .then(response => response.json())
            .then(data => {
                const sortedData = data.map(item => ({
                    id: item.id,
                    title: item.title,
                    link: item.link,
                    date: new Date(item.published_at).toISOString().split('T')[0], // Store date as ISO string
                    content_snippet: item.content_snippet,
                    media_url: item.media_url,
                    interesting_score: parseFloat(item.interesting_score.toFixed(3)),
                    publication_name: item.publication_name,
                    heuristics: item.heuristics,
                })).sort((a, b) => b.interesting_score - a.interesting_score);
                setNews(sortedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        setVisibleNews(news.slice(0, 10));
    }, [news]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleNews(prevNews => {
                        const nextItems = news.slice(prevNews.length, prevNews.length + 10);
                        return [...prevNews, ...nextItems];
                    });
                }
            });
        }, { threshold: 0.10 });

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [news]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Adjust this method based on how you want to compare dates
    const handleDateChange = (date) => {
        setSelectedDate(date); // Update the selected date
    };

    const filteredNews = visibleNews.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!selectedDate || item.date === selectedDate) && // Filter based on selected date
        (selectedPublishers.length === 0 || selectedPublishers.includes(item.publication_name)) &&
        (selectedHeuristics.length === 0 || selectedHeuristics.every(heuristic => item.heuristics.includes(heuristic)))
    );

    return (
        <div>
            <Header searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px', backgroundColor: 'rgba(252, 254, 255)', }}>
                <Leaderboard />
                <div style={{ flex: '1', padding: '0vh 1vh', display: 'flex', flexDirection: 'column' }}>
                    
                    <div className="hide-scrollbar" style={{ overflowY: 'scroll', maxHeight: '92vh', marginTop: 0, right: '50%',  }}>
                    <Mode />  {/* Mode component placed right above the scrolling news card container */}

                        {filteredNews.map(({ id, title, publication_name, content_snippet, media_url, date, interesting_score }) => (
                            <NewsCard
                                key={id}
                                title={title}
                                summary={content_snippet}
                                media_url={media_url}
                                date={date}
                                IONscore={interesting_score}
                                publication_name={publication_name}
                            />
                        ))}
                        <div ref={loadMoreRef} style={{ height: '10px', background: 'transparent' }}></div>
                    </div>
                    </div>
                <div style={{ padding: '0vh 1vh', display: 'flex', flexDirection: 'column', marginRight: '18vh',  }}>
                <Datesort onSelectDate={handleDateChange} />
                <Follow />
            </div>
        </div>
        </div>
    );
};

export default Feedpage;
