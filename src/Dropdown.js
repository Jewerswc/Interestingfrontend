import React from 'react';


const Dropdown = ({ items }) => {
    return (
        <div style={{
            position: 'absolute',
            width: '140px',
            backgroundColor: 'white',
            boxShadow: '0 0px 0px rgba(0,0,0,0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
            top: 55, // Adjust according to the height of the trigger element
            left: '0',
            zIndex: 1000,
            borderRight:  '1px solid rgba(166.81, 155.69, 155.69, 0.21)',
            borderLeft:  '1px solid rgba(166.81, 155.69, 155.69, 0.21)',
            borderBottom:  '2px solid rgba(65, 176, 232, 100',

        }}>
            {items.map((item, index) => (
                <a href={item.href} key={index} style={{
                    display: 'block',
                    padding: '15px 15px',
                    textDecoration: 'none',
                    color: 'black',
                    backgroundColor: 'white',
                    fontSize: '14.5px',
                    fontFamily: 'Cabin',
                    letterSpacing: '0.53px',

                    
                    borderTop: index === 0 ? 'none' : '0px solid #ccc'
                }}>
                    {item.label}
                </a>
                
            ))}
        </div>
    );
};

export default Dropdown;
