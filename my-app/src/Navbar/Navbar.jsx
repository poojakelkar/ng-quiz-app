import React from "react";
import "./styles.css";
import { AccountCircle, Search } from "@material-ui/icons";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <div className='left'>
                    <img
                        src='https://cdn-icons-png.flaticon.com/512/2784/2784530.png'
                        alt='logo'></img>
                </div>
                <div className='center'>
                    <input className='search' />
                    <Search />
                </div>
                <div className='right'>
                    <h5 className='login'>Login</h5>
                    <AccountCircle className='icon'></AccountCircle>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
