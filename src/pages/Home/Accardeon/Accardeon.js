import React  from 'react';
import OpenAcc from "./openAcc";
import Accordion from "../../../assets/img/accordion.png"
import BookL from "../../../assets/img/Accortitle.svg"
import BookR from "../../../assets/img/accorimg.png"
import bg from "./../../../assets/img/logo.svg"

const Accardeon = () => {

    return (
        <div id="wrapper">
            <div className="container">
                <div className="wrapper">
                    <h1>Появились вопросы?</h1>
                    <div className="wrapper--accordion">
                        <img className="wrapper--accordion--bookR" src={BookR} alt="img" />
                        <img className='wrapper--accardion--bookT' src={Accordion} alt="img" />
                        <div className="wrapper--accordion__title">
                            <img className="wrapper--accordion__title--bookL" src={BookL} alt="img" />
                            <OpenAcc />
                        </div>
                    </div>
                    <img className='wrapper--img1' src={bg} alt='img' />
                </div>
            </div>
        </div>
    );
};


export default Accardeon;