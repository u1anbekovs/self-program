import React from 'react';
import "./Footer.scss"
import bg from "./../../assets/img/logo.svg"
import {AiOutlineInstagram, AiOutlineMail, AiOutlineYoutube} from "react-icons/ai";
import {BsFacebook, BsTwitter, BsTelephone} from "react-icons/bs";
import {FaTelegram, FaTiktok} from "react-icons/fa";
import {SlSocialVkontakte} from "react-icons/sl";
import master from "./../../assets/img/mastercard.svg"

import {HiOutlineLocationMarker} from "react-icons/hi";
import {Tb123} from "react-icons/tb";
import {RiVisaLine} from "react-icons/ri";
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {useDispatch} from "react-redux";






const Footer = () => {

    const use = useSelector(state => state.login)



    const dispatch = useDispatch()
    const {payment} = useSelector(state => state)


    return (
        <div style={{
            display: !payment && !use ? "block" : "none"
        }} id="footer">
            <div className="container">
                <div className="footer">
                    <img className='footer--img2' src={bg} alt='img'/>
                    <div className="footer--footNav">
                        <div className="footer--footNav__selfBook">
                            <div className=" java flex flex-col items-center mt-3">
                                <img src={bg} alt=""/>
                                <h3 className="text">SELF DEVELOPING SCHOOL</h3>
                            </div>
                            <div className="dec mt-3">
                                <a className='mr-2' href="#">КГ</a>
                                <a href="#">РУ</a>
                            </div>
                        </div>
                        <div className="footer--footNav__fastLinks">
                            <h3>Быстрые ссылки</h3>
                            <div className="boot ml-2">
                                <div className="line"></div>
                                <NavLink to={"/"}><h4>Главная</h4></NavLink>
                                <NavLink to={"/our-course"}><h4>Школа</h4></NavLink>
                                <NavLink to={"/about-us"}><h4>О нас</h4></NavLink>
                            </div>
                        </div>
                        <div className="footer--footNav__socials">
                            <h3>Социальные сети</h3>
                            <div className="footer--footNav__socials--blockSoc ml-2">
                                <div className="line"></div>
                                <div className="footer--footNav__socials--blockSoc__logos">
                                    <a href=""><AiOutlineInstagram className={"socLogos"}/></a>
                                    <a href=""><AiOutlineYoutube className={"socLogos"}/></a>
                                    <a href=""><BsFacebook className={"socLogos"}/></a>
                                    <a href=""><BsTwitter className={"socLogos"}/></a>
                                    <a href=""><FaTiktok className={"socLogos"}/></a>
                                    <a href=""><SlSocialVkontakte className={"socLogos"}/></a>
                                    <a href=""><FaTelegram className={"socLogos"}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="footer--footNav__contacts">
                            <h3>Контакты</h3>
                            <div className="koko justify-between ml-3">
                                <div className="line"></div>
                                <div className="flex items-center ">
                                    <BsTelephone className={"socLogosS"}/>
                                    <h4>0500 500 550</h4>
                                </div>
                                <div className="flex items-center">
                                    <AiOutlineMail className={"socLogosS"}/>
                                    <h4>Self_dev_school@gmail.com</h4> <br/>
                                    <h4 className={"dis"}>@gmail.com</h4>
                                </div>
                            </div>
                        </div>
                        <div className="footer--footNav__address">
                            <h3>Адресс</h3>
                            <div className=" pq flex flex-col justify-between ml-3">
                                <div className="line"></div>
                                <div className="flex ">
                                    <HiOutlineLocationMarker className={"socLogosS"}/>
                                    <h4>ИП Сейсембай, г.Алматы, <br/>
                                        мкр. Нурлытау, ул. Мерген, <br/>
                                        93.</h4>
                                </div>
                                <div className="flex  ">
                                    <Tb123 className={"logoO"}/>
                                    <h4>Идентификационный код: <br/>
                                        661102300013</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer--cards">
                        <RiVisaLine className={"footer--cards__card"}/>
                        <img className={"footer--cards__mCard"} src={master} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;