import React, { useState } from 'react';

function Datesort({ onSelectDate }) {
    const [isActive, setIsActive] = useState(false); // State to control dropdown visibility
    const dates = ['2024-04-18',' Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days']; // Dropdown options

    // Function to handle date selection
    const selectDate = (date) => {
        setIsActive(false); // Close the dropdown
        onSelectDate(date); // Pass the selected date back to the parent component
    };

    return (
        <div style={{ position: 'relative', width: 'auto' }}>

            <button onClick={() => setIsActive(!isActive)} style={{ width: 'auto', padding: '11.5px', borderRadius: 4, backgroundColor: 'white',  marginTop: '40px', border: '1.5px solid rgba(162, 162, 162, 0.09)', fontFamily: 'Cabin' }}>
                Select Date
              
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 30, }}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.881286 1.14601C0.929667 1.09945 0.987141 1.0625 1.05042 1.0373C1.11369 1.01209 1.18153 0.999115 1.25004 0.999115C1.31854 0.999115 1.38638 1.01209 1.44965 1.0373C1.51293 1.0625 1.57041 1.09945 1.61879 1.14601L7.50004 6.79301L13.3813 1.14601C13.4297 1.09952 13.4872 1.06264 13.5505 1.03749C13.6137 1.01233 13.6816 0.999377 13.75 0.999377C13.8185 0.999377 13.8863 1.01233 13.9496 1.03749C14.0129 1.06264 14.0704 1.09952 14.1188 1.14601C14.1672 1.1925 14.2056 1.24769 14.2318 1.30842C14.258 1.36916 14.2715 1.43426 14.2715 1.50001C14.2715 1.56575 14.258 1.63085 14.2318 1.69159C14.2056 1.75233 14.1672 1.80752 14.1188 1.85401L7.86879 7.85401C7.8204 7.90057 7.76293 7.93751 7.69965 7.96272C7.63638 7.98793 7.56854 8.0009 7.50004 8.0009C7.43153 8.0009 7.36369 7.98793 7.30042 7.96272C7.23714 7.93751 7.17967 7.90057 7.13129 7.85401L0.881286 1.85401C0.832783 1.80756 0.7943 1.75239 0.768044 1.69164C0.741787 1.6309 0.728271 1.56578 0.728271 1.50001C0.728271 1.43424 0.741787 1.36912 0.768044 1.30837C0.7943 1.24763 0.832783 1.19245 0.881286 1.14601Z" fill="black"/>
</svg>

            </button>
            {isActive && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', width: '160px', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1000, fontFamily: 'Cabin', fontSize: 12 }}>
                    {dates.map((date, index) => (
                        <div key={index} onClick={() => selectDate(date)} style={{ padding: '10px', cursor: 'pointer', backgroundColor: 'white' }}>
                            {date}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Datesort;
