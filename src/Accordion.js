import React, { useState } from 'react';

function Accordion({ author, title, summary, sumadd, imageUrl, date, IONscore }) {
    const [expandedSection, setExpandedSection] = useState(null); // Control expanded sections
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedPublishers, setSelectedPublishers] = useState([]);
    const [selectedHeuristics, setSelectedHeuristics] = useState([]);

    const handlePublisherSelection = (event) => {
        // Mapping through selected options to create an array of values
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedPublishers(selectedOptions); // Updating the state with the selected values
    };

    const handleHeuristicsSelection = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedHeuristics(selectedOptions);
    };

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section); // Toggle visibility
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value); // Handle date selection
    };

    return (
        <div style={{ width: '35vh', height: '45vh', background: 'white', borderRadius: '7px', border: '2px solid rgba(162, 162, 162, 0.09)', display: 'flex', flexDirection: 'column', gap: '6px', marginRight: '20vh', marginTop: '5vh' }}>
            <div style= {{fontFamily: 'Cabin', left: '18px', position: 'relative'}}>
            <p>Refine feed</p> </div>
            <div onClick={() => toggleSection('date')} style={{ cursor: 'pointer', padding: '10px 20px', fontSize: '16px', fontFamily: 'Cabin', fontWeight: '700' }}>
                Date
            </div>
            {expandedSection === 'date' && (
                <input type="date" value={selectedDate} onChange={handleDateChange} style={{ width: '70%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', position: 'relative', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', }} />
            )}

            <div onClick={() => toggleSection('heuristics')} style={{ cursor: 'pointer', padding: '10px 20px', fontSize: '16px', fontFamily: 'Cabin', fontWeight: '700',}}>
                Heuristics
            </div>
            {expandedSection === 'heuristics' && (
                <select multiple value={selectedHeuristics} onChange={handleHeuristicsSelection} style={{ width: '60%', padding: '0px', border: '1px solid #ccc', borderRadius: '4px', position: 'relative', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', }}>
                    <option value="Heuristic A">ION Score Dsc</option>
                    <option value="Heuristic B">ION Score Asc</option>
                </select>
            )}

            <div onClick={() => toggleSection('publishers')} style={{ cursor: 'pointer', padding: '10px 20px', fontSize: '16px', fontFamily: 'Cabin', fontWeight: '700' }}>
                Publishers
            </div>
            {expandedSection === 'publishers' && (
                <select multiple value={selectedPublishers} onChange={handlePublisherSelection} style={{ width: '60%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                    <option value="Publisher B">BBC News</option>
                    <option value="Publisher A">The Guardian</option>
                    <option value="Publisher C">The Economist</option>
                </select>
            )}
        </div>
    );
}

export default Accordion;
