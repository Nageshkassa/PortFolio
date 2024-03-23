import React from 'react'
import { useEffect } from 'react';
function Preloader() {
  useEffect(() => {
    const addLoadedClass = () => {
      document.querySelector('.wrapper').classList.add('loaded');
    };

    const timeoutId = setTimeout(addLoadedClass, 2500);

    return () => clearTimeout(timeoutId); // Cleanup on unmount

  }, []); 
  return (
    <div className="wrapper">
      <div id="loader-wrapper">
        <div id="loader">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em"  textAnchor="middle">
              Olivia
            </text>
          </svg>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  )
}

export default Preloader
