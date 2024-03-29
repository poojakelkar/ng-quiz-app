import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../../store/context";
import "./styles.css";

const Finsight = () => {
  const { state } = useContext(QuizContext);

  return (
    <div className="grid-container">
      {state?.quizzes?.map((quiz) => {
        return (
          <Link key={quiz?.uuid} to={`/quiz/${quiz?.uuid}`} className="link">
            <div className="card-1">
              <img
                className="poster-1"
                src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/09/Suits-Banner.jpg"
                alt="postr-1"
              ></img>
              <p className="img-label">{quiz.title}</p>
              <p className="subtext">Take quiz to check yourself</p>
              <p className="point">{quiz?.questions?.length} Questions</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Finsight;
