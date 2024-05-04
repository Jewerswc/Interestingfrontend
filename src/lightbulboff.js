import React, { useState } from 'react';

function Lightbulboff() {
  const [hover, setHover] = useState(false);
  const [imageToggle, setImageToggle] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleClick = () => {
    // Start flash sequence
    setImageToggle(true);
    setTimeout(() => setImageToggle(false), 100); // Toggle off quickly
    setTimeout(() => setImageToggle(true), 200);  // Toggle on again
    setTimeout(() => setImageToggle(false), 300); // Toggle off
    setTimeout(() => setImageToggle(true), 400);  // Finally, toggle on and stay

    // Keep the image toggled on after the flashes
    setTimeout(() => {
      setImageToggle(true);
    }, 1000); // Change SVG back after 1 second from the last toggle
  };

  const boxStyle = {
    paddingLeft: 6.25, paddingRight: 6.25, paddingTop: 5, paddingBottom: 5,
    backgroundColor: hover ? 'rgba(64.66, 175.97, 231.63, 0.30)' : 'rgba(64.66, 175.97, 231.63, 0.10)', // Light blue to blue
    borderBottomLeftRadius: 5, 
    borderTopLeftRadius: 5, 
    transition: 'background-color 0.1s ease', // Smooth transition for color change
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {imageToggle ? (
        <svg width="16" height="20" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00002 6C1.00002 5.428 1.08002 4.875 1.23002 4.35L9.78802 12.909C9.7037 12.9683 9.60311 13.0001 9.50002 13H4.50002C4.40221 13.0002 4.3065 12.9716 4.22474 12.918C4.14298 12.8643 4.07875 12.7878 4.04002 12.698L3.27902 10.928C3.16926 10.6947 3.01544 10.4849 2.82602 10.31C2.24746 9.7513 1.78755 9.08164 1.4738 8.34108C1.16005 7.60052 0.998907 6.80428 1.00002 6ZM11.303 10.181L2.81802 1.697C3.94963 0.604048 5.46525 -0.000717869 7.03843 0.0129526C8.61161 0.0266232 10.1165 0.657637 11.2289 1.77009C12.3414 2.88253 12.9724 4.38741 12.9861 5.96059C12.9997 7.53377 12.395 9.04938 11.302 10.181H11.303ZM4.00002 14.5C4.00002 14.3674 4.0527 14.2402 4.14647 14.1464C4.24024 14.0527 4.36741 14 4.50002 14H9.50002C9.63263 14 9.75981 14.0527 9.85357 14.1464C9.94734 14.2402 10 14.3674 10 14.5C10 14.6326 9.94734 14.7598 9.85357 14.8536C9.75981 14.9473 9.63263 15 9.50002 15L9.27602 15.447C9.19303 15.6131 9.06544 15.7528 8.90755 15.8504C8.74965 15.9481 8.56768 15.9999 8.38202 16H5.61802C5.43236 15.9999 5.25039 15.9481 5.09249 15.8504C4.9346 15.7528 4.80701 15.6131 4.72402 15.447L4.50002 15C4.36741 15 4.24024 14.9473 4.14647 14.8536C4.0527 14.7598 4.00002 14.6326 4.00002 14.5ZM1.35402 1.646C1.30753 1.59951 1.25234 1.56263 1.1916 1.53747C1.13087 1.51231 1.06577 1.49937 1.00002 1.49937C0.934277 1.49937 0.869177 1.51231 0.808438 1.53747C0.747698 1.56263 0.692509 1.59951 0.646021 1.646C0.599533 1.69248 0.562657 1.74767 0.537498 1.80841C0.512339 1.86915 0.49939 1.93425 0.49939 2C0.49939 2.06574 0.512339 2.13084 0.537498 2.19158C0.562657 2.25232 0.599533 2.30751 0.646021 2.354L12.646 14.354C12.7399 14.4479 12.8672 14.5006 13 14.5006C13.1328 14.5006 13.2601 14.4479 13.354 14.354C13.4479 14.2601 13.5007 14.1328 13.5007 14C13.5007 13.8672 13.4479 13.7399 13.354 13.646L1.35402 1.646Z" fill="#F20505"/>
        </svg>

      ) : (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-lightbulb-off" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.23 4.35A6 6 0 0 0 2 6c0 1.691.7 3.22 1.826 4.31.203.196.359.4.453.619l.762 1.769A.5.5 0 0 0 5.5 13a.5.5 0 0 0 0 1 .5.5 0 0 0 0 1l.224.447a1 1 0 0 0 .894.553h2.764a1 1 0 0 0 .894-.553L10.5 15a.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .288-.091L9.878 12H5.83l-.632-1.467a3 3 0 0 0-.676-.941 4.98 4.98 0 0 1-1.455-4.405zm1.588-2.653.708.707a5 5 0 0 1 7.07 7.07l.707.707a6 6 0 0 0-8.484-8.484zm-2.172-.051a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708"/>
</svg>

      )}
    </div>
  );
}
export default Lightbulboff;
