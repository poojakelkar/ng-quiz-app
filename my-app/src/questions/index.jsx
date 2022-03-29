import React from "react";
import "./styles.css";

const index = () => {
    return (
        <div class='question-container'>
            <p class='title-text'>I don't play the odds, I play the man</p>
            <div class='question-header'>
                <p class='question1-point'>
                    <span class='question-number'>Question:</span> 1 / 5
                </p>
                <p class='score'>
                    <span class='question-score'>Score:</span> 0
                </p>
            </div>
            <p class='question'>
                Harvey Specture is considered one of New York's most brilliant
                corporate litigation lawyers, but whats his unusual middle name?
            </p>

            <button class='option1'>
                <a class='answer' href='/answer/index.html'>
                    Michael
                </a>
            </button>
            <button class='option1'>
                <a class='answer' href='/answer/index.html'>
                    Reginald
                </a>
            </button>
            <button class='option1'>
                <a class='answer' href='/answer/index.html'>
                    Brandon
                </a>
            </button>
        </div>
    );
};

export default index;
