import React, {useState} from "react";
import {AiFillStar} from "react-icons/ai";
import "./Reviews.scss"
// import take from "../../../assets/img/take.png"
// import scroll from "../../../assets/img/scrol-book.png"
// import small from "../../../assets/img/small-book.png"
import person from "../../../assets/img/Ellipse 51.svg"


const Reviews = () => {
    const [fly, setFly] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


    const [well, setWell] = useState(false)
    const [well2, setWell2] = useState(false)
    const [well3, setWell3] = useState(false)

    return (
        <div id="reviewCourse">
            <div className="container">
                <h1 className="reviewCourse--title">Отзывы</h1>
                <div className="reviewCourse">

                    <div onClick={() => {
                        setWell(!well)
                    }} className="reviewCourse--block">
                        <div className="reviewCourse--block__about">
                            <div className="reviewCourse--block__about--user">B</div>
                            <div className="reviewCourse--block__about--name">
                                <h2>Muslim Bolot</h2>
                                <h4>09.09.22</h4>
                                <div className="reviewCourse--block__about--name__fly">
                                    {fly.map((el) => (
                                        <div
                                            className="reviewCourse--block__about--name__fly--item"
                                            key={el}
                                        >
                                            <AiFillStar className="reviewCourse--block__about--name__fly__item--icon"/>
                                        </div>
                                    ))}
                                    <span>10/10</span>
                                </div>
                            </div>
                        </div>
                        <p>
                            Oрганизованность сайта направление и навигация по материалам. А
                            так же актуальность материалов
                        </p>
                    </div>
                    <div onClick={() => {
                        setWell2(!well2)
                    }} className="reviewCourse--block">
                        <div className="reviewCourse--block__about">
                            <div className="reviewCourse--block__about--user"><img src={person} alt="img"/></div>
                            <div className="reviewCourse--block__about--name">
                                <h2>Muslim Bolot</h2>
                                <h4>09.09.22</h4>
                                <div className="reviewCourse--block__about--name__fly">
                                    {fly.map((el) => (
                                        <div
                                            className="reviewCourse--block__about--name__fly__item"
                                            key={el}
                                        >

                                            <AiFillStar className="reviewCourse--block__about--name__fly__item--icon"/>
                                        </div>
                                    ))}
                                    <span>10/10</span>
                                </div>
                            </div>
                        </div>
                        <p>
                            Oрганизованность сайта направление и навигация по материалам.А
                            так же актуальность материалов
                        </p>
                    </div>

                    <div onClick={() => {
                        setWell3(!well3)
                    }} className="reviewCourse--block">
                        <div className="reviewCourse--block__about">
                            <div className="reviewCourse--block__about--user">C</div>
                            <div className="reviewCourse--block__about--name">
                                <h2>Muslim Bolot</h2>
                                <h4>09.09.22</h4>
                                <div className="reviewCourse--block__about--name__fly">
                                    {fly.map((el) => (
                                        <div
                                            className="reviewCourse--block__about--name__fly--item"
                                            key={el}
                                        >
                                            <AiFillStar className="reviewCourse--block__about--name__fly__item--icon"/>
                                        </div>
                                    ))}
                                    <span>10/10</span>
                                </div>
                            </div>
                        </div>
                        <p>
                            Oрганизованность сайта направление и навигация по материалам. А
                            так же актуальность материалов
                        </p>
                    </div>
                    <div className="reviewCourse--block1">
                        <div className="reviewCourse--block__about">
                            <div className="reviewCourse--block__about--user">C</div>
                            <div className="reviewCourse--block__about--name">
                                <h2>Muslim Bolot</h2>
                                <h4>09.09.22</h4>
                                <div className="reviewCourse--block__about--name__fly">
                                    {fly.map((el) => (
                                        <div
                                            className="reviewCourse--block__about--name__fly__item"
                                            key={el}
                                        >

                                            <AiFillStar className="reviewCourse--block__about--name__fly__item--icon"/>
                                        </div>
                                    ))}
                                    <span>10/10</span>
                                </div>
                            </div>
                        </div>
                        <p>
                            Oрганизованность сайта направление и навигация по материалам.А
                            так же актуальность материалов
                        </p>
                    </div>
                    <div className="reviewCourse--block1">
                        <div className="reviewCourse--block__about">
                            <div className="reviewCourse--block__about--user">M</div>
                            <div className="reviewCourse--block__about--name">
                                <h2>Muslim Bolot</h2>
                                <h4>09.09.22</h4>
                                <div className="reviewCourse--block__about--name__fly">
                                    {fly.map((el) => (
                                        <div
                                            className="reviewCourse--block__about--name__fly__item" key={el}>

                                            <AiFillStar className="reviewCourse--block__about--name__fly__item--icon"/>
                                        </div>
                                    ))}
                                    <span>10/10</span>
                                </div>
                            </div>
                        </div>
                        <p>
                            Oрганизованность сайта направление и
                            навигация по материалам. А
                            так же актуальность материалов
                        </p>
                    </div>
                    <div className="reviewCourse--block1">
                        <div className="reviewCourse--block__about">
                            <div className="reviewCourse--block__about--user">M</div>
                            <div className="reviewCourse--block__about--name">
                                <h2>Muslim Bolot</h2>
                                <h4>09.09.22</h4>
                                <div className="reviewCourse--block__about--name__fly">
                                    {fly.map((el) => (
                                        <div
                                            className="reviewCourse--block__about--name__fly__item" key={el}>

                                            <AiFillStar className="reviewCourse--block__about--name__fly__item--icon"/>
                                        </div>
                                    ))}
                                    <span>10/10</span>
                                </div>
                            </div>
                        </div>
                        <p>
                            Oрганизованность сайта направление и
                            навигация по материалам. А
                            так же актуальность материалов
                        </p>
                    </div>

                </div>
                <div className="bloc">
                    <div style={{background: well !== true ? "gray" : "wheat"}} className=" bloc--blocs"></div>
                    <div style={{background: well2 !== true ? "wheat" : "gray"}} className=" bloc--blocs3"></div>
                    <div style={{background: well3 !== true ? "gray" : "wheat"}} className=" bloc--blocs2"></div>
                </div>
                {/*<div className="image">*/}
                {/*    <img src={take} className="image--take" alt="img"/>*/}
                {/*    <img src={scroll} className="image--scroll" alt="img"/>*/}
                {/*    <img src={small} className="image--small" alt="img"/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Reviews;