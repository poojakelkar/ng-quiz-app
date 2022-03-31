import React from "react";
import "./styles.css";

const Result = () => {
    return (
        <div>
            <div className='question-container'>
                <p className='title-text'>Final Score: -10 / 50</p>
                <p className='question'>
                    Harvey Specture is considered one of New York's most
                    brilliant corporate litigation lawyers, but whats his
                    unusual middle name?
                </p>

                <div className='options-btn'>
                    <button className='option-one select'>Michael</button>
                    <button className='option-two select'>Reginald</button>
                    <button className='option-three select'>Brandon</button>
                </div>
            </div>

            <div className='question-container'>
                <p className='question'>
                    Which partner loves muddling and had a cat bruno?
                </p>
                <div className='options-btn'>
                    <button className='selected1 correct-options'>
                        Michael
                    </button>
                    <button className='selected2 correct-options'>
                        Reginald
                    </button>
                    <button className='selected3 correct-options'>
                        Brandon
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Result;
