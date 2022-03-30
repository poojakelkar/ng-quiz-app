import React from "react";
import Footer from "../Footer/Footer";
import FrontPage from "../FrontPage/FrontPage";
import Navbar from "../Navbar/Navbar";
import "./styles.css";

const Home = () => {
    return (
        <div>
            <Navbar />
            <FrontPage />
            <Footer />
        </div>
    );
};

export default Home;
