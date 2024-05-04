import React, { useState } from 'react';

function Follow() {
    const contents = [
        { main: 'Long-Term Score', score: 'Score One', interest: 'Interesting or Not' },
        { main: 'Short-Term Score', score: 'Score Two', interest: 'Interesting Now or Not' },
        { main: 'Marxist Score', score: 'Score Three', interest: 'Marxist or Not' },
        { main: 'The Robert Nozick Score', score: 'Score Four', interest: 'Nozick or Not' },
        { main: 'The Robert Nozick Score', score: 'Score Four', interest: 'Nozick or Not' },
        { main: 'The Robert Nozick Score', score: 'Score Four', interest: 'Nozick or Not' },

      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconColor, setIconColor] = useState('#41B0E8'); // Default blue color

  // Function to navigate right
  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  // Function to navigate left
  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contents.length) % contents.length);
  };

  // Function to toggle icon color
  const toggleIconColor = () => {
    setIconColor(prevColor => prevColor === '#41B0E8' ? '#16D841' : '#41B0E8'); // Toggle between blue and green
  };

  return (
    <div style={{
      width: '30vh',
      height: '150px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
      marginTop: 50, 
    }}>
      <div style={{
        alignSelf: 'stretch',
        paddingRight: '10px',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        width: '80%',
      }}>
        <div style={{
          flex: '1 1 0%',
          alignSelf: 'stretch',
          color: '#202020',
          fontSize: '16.43px',
          fontFamily: 'Cabin',
          fontWeight: '500',
          textTransform: 'capitalize'
        }}>
          Concept Lens
        </div>
        <div style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '1.07px',
          display: 'flex',
          paddingBottom: 5,
        }}>
          <button onClick={handleLeft} style={{
            padding: '0px',
            borderRadius: '0px',
            border: '0px #8792A2 solid',
            background: 'white'
          }}>
           <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.81005" y="0.544792" width="25.0604" height="25.0604" rx="12.5302" stroke="#9E9E9E" stroke-width="1.08958"/>
<path d="M14.9746 17.3898L11.4225 13.8377C11.003 13.4182 11.003 12.7318 11.4225 12.3123L14.9746 8.76025" stroke="#9E9E9E" stroke-width="1.63437" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
          <button onClick={handleRight} style={{
            padding: '0px',
            borderRadius: '0px',
            border: '0px #8792A2 solid',
            background: 'white'
          }}>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.03503" y="0.544792" width="25.0604" height="25.0604" rx="12.5302" stroke="#8792A2" stroke-width="1.08958"/>
<path d="M11.8818 17.3898L15.4338 13.8377C15.8533 13.4182 15.8533 12.7318 15.4338 12.3123L11.8818 8.76025" stroke="#8792A2" stroke-width="1.63437" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
        </div>
      </div>
      <div onClick={toggleIconColor} style={{
        alignSelf: 'stretch',
        overflow: 'hidden',
        position: 'relative',
        width: 'auto',
        height: '200px'
      }}>
        {contents.map((content, index) => (
          <div key={index} style={{
            transition: 'transform 0.2s ease',
            transform: `translateX(${(index - currentIndex) * 100}%)`,
            position: 'absolute',
            width: '300px',
            height: '100%',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'left',
            textAlign: 'center',
            paddingRight: '15vh'
          }}>
            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 19.61, display: 'inline-flex'}}>
              <div style={{height: 69.73, padding: 15.07, background: 'white', borderRadius: 4, boxShadow: '0 2px 4px rgba(0,0,0,0.05)', justifyContent: 'center', alignItems: 'center', gap: 18.52, display: 'flex'}}>
                <div style={{padding: 13.07, background: 'rgba(65, 176, 232, 0.20)', borderRadius: 54.48, justifyContent: 'center', alignItems: 'center', gap: 10.90, display: 'flex'}}>
                  <div style={{width: 17.43, height: 17.43, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <div style={{width: 17.43, height: 17.43, position: 'relative'}}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Eyeglasses" clip-path="url(#clip0_1_475)">
                          <path id="Vector" d="M4.89189 6.78583C5.46973 6.78583 6.02391 7.01537 6.4325 7.42397C6.8411 7.83256 7.07064 8.38674 7.07064 8.96458C7.07064 9.54242 6.8411 10.0966 6.4325 10.5052C6.02391 10.9138 5.46973 11.1433 4.89189 11.1433C4.31405 11.1433 3.75988 10.9138 3.35128 10.5052C2.94269 10.0966 2.71314 9.54242 2.71314 8.96458C2.71314 8.38674 2.94269 7.83256 3.35128 7.42397C3.75988 7.01537 4.31405 6.78583 4.89189 6.78583ZM7.7515 7.38172C7.42351 6.78828 6.91907 6.31155 6.30806 6.01759C5.69706 5.72363 5.00975 5.62699 4.34137 5.74106C3.67299 5.85513 3.05664 6.17426 2.57772 6.65423C2.0988 7.13421 1.78103 7.75126 1.66843 8.41989H1.07908C0.934621 8.41989 0.796077 8.47728 0.693929 8.57943C0.59178 8.68157 0.534393 8.82012 0.534393 8.96458C0.534393 9.10904 0.59178 9.24758 0.693929 9.34973C0.796077 9.45188 0.934621 9.50926 1.07908 9.50926H1.66843C1.80362 10.3186 2.2383 11.0475 2.88612 11.551C3.53394 12.0546 4.34749 12.2961 5.16516 12.2275C5.98282 12.1589 6.74476 11.7852 7.2996 11.1807C7.85445 10.5762 8.16159 9.78511 8.16002 8.96458C8.16002 8.67566 8.27479 8.39857 8.47909 8.19427C8.68339 7.98998 8.96047 7.8752 9.24939 7.8752C9.53831 7.8752 9.8154 7.98998 10.0197 8.19427C10.224 8.39857 10.3388 8.67566 10.3388 8.96458C10.3372 9.78511 10.6443 10.5762 11.1992 11.1807C11.754 11.7852 12.516 12.1589 13.3336 12.2275C14.1513 12.2961 14.9648 12.0546 15.6127 11.551C16.2605 11.0475 16.6952 10.3186 16.8304 9.50926H17.4197C17.5642 9.50926 17.7027 9.45188 17.8049 9.34973C17.907 9.24758 17.9644 9.10904 17.9644 8.96458C17.9644 8.82012 17.907 8.68157 17.8049 8.57943C17.7027 8.47728 17.5642 8.41989 17.4197 8.41989H16.8304C16.7178 7.75126 16.4 7.13421 15.9211 6.65423C15.4421 6.17426 14.8258 5.85513 14.1574 5.74106C13.489 5.62699 12.8017 5.72363 12.1907 6.01759C11.5797 6.31155 11.0753 6.78828 10.7473 7.38172C10.3425 6.99888 9.80651 6.78564 9.24939 6.78583C8.66985 6.78583 8.14259 7.01242 7.7515 7.38172ZM15.7856 8.96458C15.7856 9.54242 15.5561 10.0966 15.1475 10.5052C14.7389 10.9138 14.1847 11.1433 13.6069 11.1433C13.0291 11.1433 12.4749 10.9138 12.0663 10.5052C11.6577 10.0966 11.4281 9.54242 11.4281 8.96458C11.4281 8.38674 11.6577 7.83256 12.0663 7.42397C12.4749 7.01537 13.0291 6.78583 13.6069 6.78583C14.1847 6.78583 14.7389 7.01537 15.1475 7.42397C15.5561 7.83256 15.7856 8.38674 15.7856 8.96458Z" fill={iconColor}/>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_475">
                            <rect width="17.43" height="17.43" fill="white" transform="translate(0.534393 0.249573)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    
                  </div>
                </div>
              </div>
              <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8.72, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', color: '#5F5F5F', fontSize: 13.07, fontFamily: 'Cabin', fontWeight: '400', wordWrap: 'break-word'}}>{content.main}</div>
                <div style={{alignSelf: 'stretch', color: '#202020', fontSize: 13.07, fontFamily: 'Cabin', fontWeight: '600', wordWrap: 'break-word'}}>{content.interest}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Follow;
