import Home from "./Home";
import QuizFinsightPage from "./QuizFinsightPage";
import Questions from "./Questions";
import Answers from "./Answers";
import CorrectAnswers from "./CorrectAnswers";
import Result from "./Result";
import Navbar from "./Navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./FrontPage/FrontPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/navbar' element={<Navbar />} />
                <Route path='/front-page' element={<FrontPage />} />
                <Route path='/' element={<Home />} />
                <Route path='/finsight-page' element={<QuizFinsightPage />} />
                <Route path='/questions' element={<Questions />} />
                <Route path='/answer' element={<Answers />} />
                <Route path='/correct-answer' element={<CorrectAnswers />} />
                <Route path='/result' element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
