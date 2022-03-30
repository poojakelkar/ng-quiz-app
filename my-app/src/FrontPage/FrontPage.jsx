import React from "react";
import "./styles.css";

const FrontPage = () => {
    return (
        <div className='wrapper'>
            <div className='heading'>
                <h1 className='head'>Welcome to Quiz QnA</h1>
                <p className='quizText'>Play a quiz for differnt categories!</p>
                <button className='quizbtn'>Start Quiz</button>
            </div>
        </div>
    );
};

export default FrontPage;
