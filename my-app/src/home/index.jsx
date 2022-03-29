import React from "react";
import "./styles.css";

const index = () => {
    return (
        <div class='container'>
            <img
                class='image'
                src='https://cdn0.iconfinder.com/data/icons/online-education-butterscotch-vol-2/512/Questions_And_Answers-512.png'
                alt=''></img>
            <button class='start-quiz'>
                <a class='start' href='/quiz-finsight-page/index.html'>
                    Start Quiz
                </a>
            </button>
        </div>
    );
};

export default index;
