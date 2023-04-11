import React from 'react';
import "./Reviews.scss"
import imgView from "../../../assets/img/Group 803.png"
import {AiOutlineStar} from "react-icons/ai"
import imgView2 from "../../../assets/img/book2.png"
import imgView3 from "../../../assets/img/Ellipse 51.png"

const Reviews = () => {
    return (
        <div id="view">
            <div className="container">
                <div className="view">
                    <h1 className="view--title">Отзывы</h1>

                    <div className="view--box">
                        <div className="view--block">
                            <div className="view--box2">
                                <div>
                                    <img className="view--image1" src={imgView} alt=""/>
                                </div>
                                <div className="view--titles">
                                    <h2 className="view--title2">Muslim Bolot</h2>
                                    <p className="view--desc">09.09.22</p>
                                    <div className="view--icons">
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--desc2">10 / 10</p>
                                    </div>
                            </div>
                                <p className="view--desc2">Oрганизованность сайта направление и навигация по материалам. А так же актуальность материалов </p>
                            </div>

                        </div>
                        <div className="view--block">
                            <div className="view--box2">
                                <div>
                                    <img className="view--image1" src={imgView3} alt=""/>
                                </div>
                                <div className="view--titles">
                                    <h2 className="view--title2">Muslim Bolot</h2>
                                    <p className="view--desc">09.09.22</p>
                                    <div className="view--icons">
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--desc2">10 / 10</p>
                                    </div>
                            </div>
                                <p className="view--desc2">Oрганизованность сайта направление и навигация по материалам. А так же актуальность материалов </p>
                            </div>

                        </div>
                        <div className="view--block">
                            <div className="view--box2">
                                <div>
                                    <img className="view--image1" src={imgView} alt=""/>
                                </div>
                                <div className="view--titles">
                                    <h2 className="view--title2">Muslim Bolot</h2>
                                    <p className="view--desc">09.09.22</p>
                                    <div className="view--icons">
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--icon"><AiOutlineStar/> </p>
                                        <p className="view--desc2">10 / 10</p>
                                    </div>
                            </div>
                                <p className="view--desc2">Oрганизованность сайта направление и навигация по материалам. А так же актуальность материалов </p>
                            </div>

                        </div>
                    </div>
                    <img className="view--image2" src={imgView2} alt=""/>

                </div>
            </div>
        </div>
    );
};

export default Reviews;