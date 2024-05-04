import React, { useState } from 'react';
import Header from './Header';
import Lightbulb from './Lightbulb'
import Lightbulboff from './lightbulboff'

const NewsCard = ({ title, summary, publication_name, media_url, date, IONscore }) => {
    const [isExpanded, setIsExpanded] = useState(false); // State to track expansion
    const [isHovered, setIsHovered] = useState(false); // State to track hover on the score section
    const [isHovered2, setIsHovered2] = useState(false); // State to track hover on the score section
    
    const truncateText = (text, charLimit) => {
        if (text.length <= charLimit) return text; // Return full text if under limit
        return text.slice(0, charLimit) + '...'; // Cut the text at the character limit and add ellipsis
    };
    
    // Character limit
    const charLimit = 200; // Change this to the number of characters you want to display initially
    const displaySummary = isExpanded ? summary : truncateText(summary, charLimit);
    

    
    
      // Default and hover styles
        const defaultStyle = {
            transform: 'rotate(-90deg)',
            padding: 5,
            background: 'rgba(64.66, 175.97, 231.63, 0.10)', // Default background color
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            overflow: 'hidden',
            borderLeft: '1px rgba(166.81, 155.69, 155.69, 0.21) solid',
            borderTop: '1px rgba(166.81, 155.69, 155.69, 0.21) solid',
            borderRight: '0.50px rgba(166.81, 155.69, 155.69, 0.21) solid',
            borderBottom: '1px rgba(166.81, 155.69, 155.69, 0.21) solid',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            display: 'flex',
        };

        const hoverStyle = {
            ...defaultStyle,
            background: 'rgba(64.66, 175.97, 231.63, 0.30)', // New background color on hover
            transform: 'rotate(90deg)',
            
        };



    // Toggle function for expanding/collapsing card
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'left',
            marginBottom: 30
        }}>
            <div style={{
                width: '100%', // Set width to 35%
                flexDirection: 'column',
                alignItems: 'center',
                display: 'flex',
            }}>
                
        <div style={{
            width: '61vh', 
            height: '100%', 
            paddingBottom: 20, 
            paddingLeft: 0, 
            paddingRight: 15, 
            marginBottom: '0px',
            background: 'white', 
            borderRadius: 4.5, 
            boxShadow: '0 2px 8px rgba(0,0,0,0.035)',
            flexDirection: 'column', 
            display: 'inline-flex'}}>
                       <div style={{
            width: 'auto', 
            height: 'auto', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 1, 
            display: 'inline-flex'}}>
                               <div style={{
                    width: 'auto', 
                    height: 'auto', 
                    color: 'black', 
                    fontSize: 16.5, 
                    fontFamily: 'Cabin', 
                    fontWeight: '700',
                    padding: 20,
                    wordWrap: 'break-word'}}>{title}</div>
            </div>
        <div style={{
            width: 405, 
            paddingTop: 5, 
            paddingBottom: 20, 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            display: 'inline-flex'}}>
            <div style={{
                background: 'white', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                display: 'flex'}}>
                <div style={{
                    color: 'black', 
                    fontSize: 15, 
                    fontFamily: 'Cabin', 
                    fontWeight: '400', 
                    paddingLeft: 30,
                    wordWrap: 'break-word'}}>{publication_name}</div>
            </div>
            <div style={{
                flex: '1 1 0', 
                height: 13.12, 
                justifyContent: 'center', 
                alignItems: 'flex-start', 
                gap: 0, 
                display: 'flex'}}>
          

            </div>
            <div style={{
                background: 'rgba(255, 255, 255, 0)', 
                justifyContent: 'right', 
                alignItems: 'right', 
                display: 'flex'}}>
                <div style={{
                    color: 'black',
                    fontSize: 12, 
                    fontFamily: 'Cabin', 
                    fontWeight: '400', 
                    wordWrap: 'break-word'}}>{date}</div>
            </div>
        </div>
 
            <div style={{
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                gap: 0, 
                display: 'flex'}}>
            <div style={{
                flex: '1 1 0', 
                height: 60, 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                gap: 0, 
                display: 'flex'}}>
                <div style={{
                    width: 'auto', 
                    paddingLeft: 40,
                    alignSelf: 'stretch', 
                    color: 'black', 
                    fontSize: 13, 
                    fontFamily: 'Cabin', 
                    fontWeight: '400', 
                    wordWrap: 'break-word'}}>Tl;DR: {displaySummary}</div>
            </div>
            <div style={{
            
               
                flexDirection: media_url ? 'row' : 'column',
                alignItems: 'flex-start'
            }}>
                {media_url && (
                    <div style={{
                        marginRight: '20px',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        display: 'flex'
                    }}>
                        <img src={media_url} style={{
                            objectFit: 'cover',
                            width: '146.05px',
                            height: '150px',
                        }} alt="Media" />
                    </div>
                )}
                </div>
                </div>
        <div style={{
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.05)', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 5, 
            display: 'flex'}}>
                                {isExpanded && (
                <div style={{ width: '91%', padding: '20px', aligntext:'center', fontFamily: 'Cabin',fontSize: 12.50, }}>
                    {/* More detailed content here */}
                    <p>{}</p>
                </div>
            )}
                       {/* Button or area to click for expanding/collapsing */}
            <div onClick={toggleExpansion} style={{
                cursor: 'pointer',
                color: 'black', // Make it obvious this is clickable
                margin: '10px 0',
                textAlign: 'center',
                fontFamily: 'Cabin',

            }}>
                {isExpanded ? '' : ''}
        
   
            <div style={{
                width: 0, 
                height: 0, 
                position: 'right'}}>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.04311 6.23061C2.08665 6.18696 2.13838 6.15232 2.19533 6.12869C2.25228 6.10506 2.31333 6.0929 2.37498 6.0929C2.43664 6.0929 2.49769 6.10506 2.55464 6.12869C2.61159 6.15232 2.66332 6.18696 2.70686 6.23061L7.99998 11.5247L13.2931 6.23061C13.3811 6.14259 13.5005 6.09314 13.625 6.09314C13.7495 6.09314 13.8688 6.14259 13.9569 6.23061C14.0449 6.31863 14.0943 6.43801 14.0943 6.56248C14.0943 6.68696 14.0449 6.80634 13.9569 6.89436L8.33186 12.5194C8.28832 12.563 8.23659 12.5976 8.17964 12.6213C8.12269 12.6449 8.06164 12.6571 7.99998 12.6571C7.93833 12.6571 7.87728 12.6449 7.82033 12.6213C7.76338 12.5976 7.71165 12.563 7.66811 12.5194L2.04311 6.89436C1.99946 6.85082 1.96482 6.79909 1.94119 6.74214C1.91756 6.68519 1.9054 6.62414 1.9054 6.56248C1.9054 6.50083 1.91756 6.43978 1.94119 6.38283C1.96482 6.32588 1.99946 6.27415 2.04311 6.23061Z" fill="#000507" fill-opacity="0.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.04311 2.48061C2.08665 2.43696 2.13838 2.40232 2.19533 2.37869C2.25228 2.35506 2.31333 2.3429 2.37498 2.3429C2.43664 2.3429 2.49769 2.35506 2.55464 2.37869C2.61159 2.40232 2.66332 2.43696 2.70686 2.48061L7.99998 7.77467L13.2931 2.48061C13.3367 2.43703 13.3884 2.40245 13.4454 2.37887C13.5023 2.35528 13.5633 2.34314 13.625 2.34314C13.6866 2.34314 13.7476 2.35528 13.8046 2.37887C13.8615 2.40245 13.9133 2.43703 13.9569 2.48061C14.0004 2.52419 14.035 2.57593 14.0586 2.63287C14.0822 2.68982 14.0943 2.75085 14.0943 2.81248C14.0943 2.87412 14.0822 2.93515 14.0586 2.99209C14.035 3.04904 14.0004 3.10078 13.9569 3.14436L8.33186 8.76936C8.28832 8.81301 8.23659 8.84764 8.17964 8.87128C8.12269 8.89491 8.06164 8.90707 7.99998 8.90707C7.93833 8.90707 7.87728 8.89491 7.82033 8.87128C7.76338 8.84764 7.71165 8.81301 7.66811 8.76936L2.04311 3.14436C1.99946 3.10082 1.96482 3.04909 1.94119 2.99214C1.91756 2.93519 1.9054 2.87414 1.9054 2.81248C1.9054 2.75083 1.91756 2.68978 1.94119 2.63283C1.96482 2.57588 1.99946 2.52415 2.04311 2.48061Z" fill="#000507" fill-opacity="0.5"/>
</svg>
                <div style={{width: 0, 
                    height: 0, 
                    left: 1.41, 
                    top: 2.34, 
                    position: 'center', 
                    background: 'rgba(0, 5, 7, 0.50)'}}></div>
            </div>
        </div>
        <div style={{
    alignSelf: 'stretch', 
    paddingTop: 10, 
    justifyContent: 'flex-end',  // Aligns children to the right
    alignItems: 'center', 
    display: 'flex'  // Ensures that the container is flex
}}>
    <div style={{
        flex: '1',  // Allows this div to expand and push the bulbs to the right
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',  // Center content vertically within the column
        alignItems: 'flex-end'  // Aligns text to the right within the column
    }}>
        <div style={{
            display: 'flex', // Ensures the spans are laid out horizontally
            alignItems: 'center', // Aligns the text vertically in the middle
            justifyContent: 'flex-end', // Right-aligns the spans within this div
        }}>
            <span style={{ 
                color: 'black', 
                fontSize: 15, 
                fontFamily: 'Cabin', 
                fontWeight: 700, 
                wordWrap: 'break-word' 
            }}>
                Interesting or not score:&nbsp;
            </span>
            <span style={{ 
                color: '#16D841', 
                fontSize: 15, 
                fontFamily: 'Cabin', 
                fontWeight: 400, 
                wordWrap: 'break-word', 
                paddingRight: 14 
            }}>
                {IONscore}
            </span>
        </div>
    </div>
    <div style={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        paddingLeft: 200  // Adds space between text and bulbs
    }}>
        <Lightbulboff />
        <Lightbulb />
    </div>
</div>
           
                    </div>
                </div>
                <div style={{ 
                        height: 9, 
                        flexDirection: 'column', 
                        justifyContent: 'flex-start', 
                        alignItems: 'flex-start', 
                        display: 'flex' 
                    }}>
             
                    </div>
            </div>
        </div>
  
           
     
    );
};

export default NewsCard;
