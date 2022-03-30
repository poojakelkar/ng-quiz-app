import "./index.css";
import Home from "./Home";
import QuizFinsightPage from "./QuizFinsightPage";
import Questions from "./Questions";
import Answers from "./Answers";
import CorrectAnswers from "./CorrectAnswers";
import Result from "./Result";
import Navbar from "./Navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "./FrontPage/FrontPage";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import SignUp from "./SignUP/SignUp";

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
                <Route path='/footer' element={<Footer />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
