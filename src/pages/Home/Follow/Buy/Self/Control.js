import React from 'react';
import selfImg from "../../../../../assets/img/book.png"


const Self = () => {

    return (
        <section id="self">
            <div className="container">

                <div className="self">
                    <img src={selfImg} alt=""/>
                    <h1>SELF DEVELOPING SCHOOL</h1>

                    <p>Спасибо за оплату. <br/>
                        Чек был выслан на вашу электронную почту</p>

                </div>
            </div>
        </section>
    );
};

export default Self;