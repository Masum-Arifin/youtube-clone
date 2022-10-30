import React from 'react';
import "./Sidebar.css";
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
              d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span className="sidebar-text">Explore</span>
      </div>

        </div>
    );
};

export default Sidebar;