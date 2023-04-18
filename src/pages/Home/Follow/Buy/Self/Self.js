import React from 'react';
import "./Self.scss"
import selfImg from "../../../../../assets/img/auto.svg"

const Self = () => {

    return (
        <section id="self">
            <div className="container">

                <div className="self">
                    <img src={selfImg} alt=""/>
                    <h1>SELF DEVELOPING SCHOOL</h1>

                    <p>Ожидание оплаты</p>
                </div>
            </div>
        </section>
    );
};

export default Self;