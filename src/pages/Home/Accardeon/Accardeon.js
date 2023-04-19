import React from "react";
import OpenAcc from "./openAcc";
import AccordionImg from "../../../assets/img/accordion.png";
import BookL from "../../../assets/img/Accortitle.svg";
import BookR from "../../../assets/img/accorimg.png";
import bg from "./../../../assets/img/book1.png";

const Accardeon = () => {
    return (
        <div id="wrapper">
            <img className="wrapper--bookR" src={BookR} alt="img"/>
            <div className="container">
                <div className="wrapper">
                    <div className="wrapper--title">
                        <h1>Появились вопросы?</h1>
                        <img src={AccordionImg} alt=""/>
                    </div>
                    <div className="wrapper--accordion">
                        <img
                            className="wrapper--accordion--bookT"
                            src={AccordionImg}
                            alt="img"
                        />
                        <div className="wrapper--accordion__title">
                            <img
                                className="wrapper--accordion__title--bookL"
                                src={BookL}
                                alt="img"
                            />
                            <OpenAcc/>
                        </div>
                    </div>
                    <img className="wrapper--img1" src={bg} alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default Accardeon;