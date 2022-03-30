import React from "react";
import "./styles.css";

const SignUp = () => {
    return (
        <div className='loginUser'>
            <div className='topSide'>
                <div className='logoImg'>
                    <img
                        classname='logo'
                        src='https://cdn-icons-png.flaticon.com/512/2784/2784530.png'
                        alt='logo'></img>
                </div>
            </div>
            <div className='container'>
                <form>
                    <h1>Sign In</h1>
                    <input type='text' placeholder='First Name'></input>
                    <input type='email' placeholder='Email'></input>
                    <input type='password' placeholder='Password'></input>
                    <button className='signUpButton'>Sign In</button>
                    <span>
                        New User? <b>Sign Up</b>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
