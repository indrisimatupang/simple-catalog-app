import React from 'react';
import './App.css';

const Cards = (props) => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='card'>
                <img 
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" 
                alt="Front End Engineer" />
                <h2>Front End Engineer</h2>
                <p>That is a cool job!</p>
            </div>
            <div className='card'>
                <img 
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" 
                alt="Back End Engineer" />
                <h2>Back End Engineer</h2>
                <p>That is a cool job!</p>
            </div>
            <div className='card'>
                <img 
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" 
                alt="Quality Assurance" />
                <h2>Quality Assurance</h2>
                <p>That is a cool job!</p>
            </div>
        </div>
        <div className='buttonContainer'>
            <button><b>Previous</b></button>
            <button><b>Next</b></button>
        </div>
    </div>
  );
};

export default Cards;