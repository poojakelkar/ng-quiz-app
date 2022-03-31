import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Answers = () => {
    return (
        <div className='question-container'>
            <p className='title-text'>I don't play the odds, I play the man</p>
            <div className='question-header'>
                <p className='question1-point'>
                    <span className='question-number'>Question:</span> 1 / 5
                </p>
                <p className='score'>
                    <span className='question-score'>Score:</span> 0
                </p>
            </div>
            <p className='question'>
                Harvey Specture is considered one of New York's most brilliant
                corporate litigation lawyers, but whats his unusual middle name?
            </p>

            <div className='options-btn'>
                <button className='option-one select'>Michael</button>
                <button className='option-two select'>Reginald</button>
                <button className='option-three select'>Brandon</button>
            </div>
            <Link className='link' to='/correct-answer'>
                <button className='question-submit'>Submit</button>
            </Link>
        </div>
    );
};

export default Answers;
