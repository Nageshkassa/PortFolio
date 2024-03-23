import React, { useEffect } from 'react';


function DarkLightMode() {
  // Dark/ Light Mode Toggle
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var sunIcon = document.getElementById("sunIcon");
    var moonIcon = document.getElementById("moonIcon");

    if (element.classList.contains("dark-mode")) {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
      localStorage.setItem("mode", "dark");
    } else {
      moonIcon.classList.add("hidden");
      sunIcon.classList.remove("hidden");
      localStorage.setItem("mode", "light");
    }
  }

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
      document.body.classList.add("dark-mode");
      var sunIcon = document.getElementById("sunIcon");
      var moonIcon = document.getElementById("moonIcon");
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    } else {
      // No need to hide icons here, they are already hidden by default with "hidden" class
    }
  }, []);

  // Dark/ Light Mode Toggle end
  return (
    <div>
      <div className="dark_toggle">
        <div className='ul-header' >
          <a href='#' className="mode" onClick={myFunction} title="Toggle Mode">
            <div className="icon-container">
            <i id="sunIcon" className="fa-solid fa-sun fa-spin icon"></i>
              <i id="moonIcon" className="fa-solid fa-moon icon hidden"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DarkLightMode;
