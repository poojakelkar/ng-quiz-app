import React from "react";
import "./styles.css";

const Result = () => {
    return (
        <div>
            <div class='question-container'>
                <p class='title-text'>Final Score: -10 / 50</p>
                <p class='question'>
                    Harvey Specture is considered one of New York's most
                    brilliant corporate litigation lawyers, but whats his
                    unusual middle name?
                </p>

                <button class='option option1'>Michael</button>
                <button class='option option2'>Reginald</button>
                <button class='option option3'>Brandon</button>
            </div>

            <div class='question-container'>
                <p class='question'>
                    Which partner loves muddling and had a cat bruno?
                </p>

                <button class='option3 option'>Michael</button>
                <button class='option1 option'>Reginald</button>
                <button class='option3 option'>Brandon</button>
            </div>
        </div>
    );
};

export default Result;
