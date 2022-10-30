import React from 'react';
import './Filter.css'
const Filter = () => {
    return (
        <div className="filter d-flex align-items-center">
            <div className="single-filter">
        <span className="filter-items pointer active">All</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Mixes</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Music</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">live</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Simplilearn</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">computer</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">Programming</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">ReactJS</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer">VueJS</span>
      </div>
        </div>
    );
};

export default Filter;