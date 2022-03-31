import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const CorrectAnswer = () => {
    return (
        <div className='question-container'>
            <p className='title-text'>I don't play the odds, I play the man</p>
            <div className='question-header'>
                <p className='question1-point'>
                    <span className='question-number'>Question:</span> 4 / 5
                </p>
                <p className='score'>
                    <span className='question-score'>Score:</span> -20
                </p>
            </div>
            <p className='question'>
                Jessica Pearson and Daniel Hardman outsted three named partner
                in order to create pearson hardman. what was the firm called
                before the outstating
            </p>

            <div className='options-btn'>
                <button className='selected1 correct-options'>Michael</button>
                <button className='selected2 correct-options'>Reginald</button>
                <button className='selected3 correct-options'>Brandon</button>
            </div>
            <Link className='link' to='/result'>
                <button className='question-submit'>Submit</button>
            </Link>
        </div>
    );
};

export default CorrectAnswer;
