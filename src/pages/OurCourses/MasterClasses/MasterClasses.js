import React from "react";
import "./MasterClasses.scss";
import Book from "./../../../assets/img/ress.svg";
import {useNavigate} from "react-router-dom";
import {OurApi} from "../../../backand/coursBackand";

const MasterClasses = () => {
    const navigate = useNavigate()
    return (
        <div id="mk">
            <div className="container">
                <div className="mk">
                    <img src={Book} alt="" className="mk--book"/>
                    <h2>Мастер классы</h2>

                    <div className="mk--cards">
                        {OurApi.map((el) => (
                            <div onClick={() => navigate(`/button`)} className="mk--cards__cup">
                                <h3>{el.title}</h3>
                                <div className="mk--cards__cup--info">
                                    <h4>{el.learn}</h4>
                                    <div>
                                        {
                                            el.buttons.map(btn => (
                                                <button>{btn.title}</button>
                                            ))
                                        }
                                    </div>
                                </div>
                                <img src={el.image} alt=""/>
                                <a href="">{el.btnFinish}</a>
                            </div>
                        ))}
                    </div>
                    <center>
                        <button>Смотреть все мастер классы</button>
                    </center>
                </div>
            </div>
        </div>
    );
};

export default MasterClasses;