import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex align-items-center pointer ">
             <div className="sidebar-items d-flex align-items-center active">
        <svg
          viewBox="0 0 24 25"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{ width: "20px", height: "20px", margin: "0px 20px" }}
        >
          <g class="style-scope yt-icon">
            <path
              d="M4,10V21h6V15h4v6h6V10L12,3Z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Home</span>
      </div>

      
        </div>
    );
};

export default Sidebar;