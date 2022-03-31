import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Finsight = () => {
    return (
        <div className='grid-container'>
            <Link to='/questions' className='link'>
                <div className='card-1'>
                    <img
                        className='poster-1'
                        src='https://static0.srcdn.com/wordpress/wp-content/uploads/2019/09/Suits-Banner.jpg'
                        alt='postr-1'></img>
                    <p className='img-label'>
                        I don't play the odds, I play the man
                    </p>
                    <p className='subtext'>Take quiz to check yourself</p>
                    <p className='point'>5 Questions</p>
                </div>
            </Link>

            <Link to='/questions' className='link'>
                <div className='card-2'>
                    <img
                        className='poster-1'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtxaMARl8m3FpcWlncrsD3R0HdyyQag9hz0dnrV7hctAMsd2ZidyTBZ7sBlPJIVM5QX8&usqp=CAU'
                        alt='postr-2'></img>
                    <p className='img-label'>Make word a better place</p>
                    <p className='subtext'>Take quiz to check yourself</p>
                    <p className='point'>5 Questions</p>
                </div>
            </Link>
        </div>
    );
};

export default Finsight;
