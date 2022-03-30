import { Favorite, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import "./styles.css";

const Footer = () => {
    return (
        <div className='footer'>
            <p>
                Made with <Favorite /> by Pooja Kelkar
            </p>
            <span>
                <GitHub />
                <Twitter />
                <LinkedIn />
            </span>
        </div>
    );
};

export default Footer;
