import React from "react";
import "../MasterClasses/MasterClasses.scss";
import Book from "../../../assets/img/book1.png";
import {useNavigate} from "react-router-dom";
import {OurApi} from "../../../backand/coursBackand";

const Courses = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div id="mk">
                <div className="container">
                    <div className="mk">
                        <h2>Курсы</h2>

                        <div className="mk--cards">
                            {OurApi.slice(0,3).map((el) => (
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
                        <img src={Book} alt="" className="mk--book1"/>


                        <center>
                            <button>Смотреть все курсы</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;