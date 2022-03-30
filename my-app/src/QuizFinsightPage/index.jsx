import React from "react";
import "./styles.css";

const Finsight = () => {
    return (
        <div class='grid-container'>
            <div class='card-1'>
                <a class='card' href='/questions/index.html'>
                    <img
                        class='poster-1'
                        src='https://static0.srcdn.com/wordpress/wp-content/uploads/2019/09/Suits-Banner.jpg'
                        alt='postr-1'></img>
                    <p class='img-label'>
                        I don't play the odds, I play the man
                    </p>
                    <p class='subtext'>Take quiz to check yourself</p>
                    <p class='point'>5 Questions</p>
                </a>
            </div>

            <div class='card-2'>
                <a class='card' href='/questions/index.html'>
                    <img
                        class='poster-1'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtxaMARl8m3FpcWlncrsD3R0HdyyQag9hz0dnrV7hctAMsd2ZidyTBZ7sBlPJIVM5QX8&usqp=CAU'
                        alt='postr-2'></img>
                    <p class='img-label'>Make word a better place</p>
                    <p class='subtext'>Take quiz to check yourself</p>
                    <p class='point'>5 Questions</p>
                </a>
            </div>
        </div>
    );
};

export default Finsight;
