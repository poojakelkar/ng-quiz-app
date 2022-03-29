import React from "react";
import "./styles.css";

const index = () => {
    return (
        <div class='question-container'>
            <p class='title-text'>I don't play the odds, I play the man</p>
            <div class='question-header'>
                <p class='question1-point'>
                    <span class='question-number'>Question:</span> 4 / 5
                </p>
                <p class='score'>
                    <span class='question-score'>Score:</span> -20
                </p>
            </div>
            <p class='question'>
                Jessica Pearson and Daniel Hardman outsted three named partner
                in order to create pearson hardman. what was the firm called
                before the outstating
            </p>

            <button class='option option1'>Specture Zane Litt</button>
            <button class='option option2'>
                <a class='answer' href='/result/index.html'>
                    Gordan Schmidt Van dyke
                </a>
            </button>
            <button class='option option3'>Pearson Hardman</button>
        </div>
    );
};

export default index;
