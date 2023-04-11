


import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./../../assets/img/logo.svg"
import {CiUser} from "react-icons/ci"
import {useDispatch, useSelector} from 'react-redux';


const Header = () => {

    const [menu, setMenu] = useState(false)

    const modal = useSelector(state => state.login)

    const dispatch = useDispatch()
    const {payment} = useSelector(state => state)


    const local = () => {
        let log = JSON.parse(localStorage.getItem("login")) || []
        dispatch({type: "OPEN_LOGIN", payload: log})
        localStorage.setItem("login", JSON.stringify(true))
    }

    return (
        <div style={{
            display: !payment && !modal ? 'block' : 'none'
        }} hidden={payment} id='header'>
            <div className='container'>
                <div className="header--child">
                    <div className='header'>
                        <div className='header--logo'>
                            <img src={Logo} alt='logo' style={{

                                width: menu ? "30%" : "25%"


                            }}/>
                            <span style={{
                                display: menu ? "none" : "block"
                            }}>SELF DEVELOPING SCHOOL</span>
                        </div>
                        <nav className='header--navbar'>
                            <NavLink to={"/"}>Главная</NavLink>
                            <NavLink to={"/our-course"}>Наши курсы</NavLink>
                            <NavLink to={"/about-us"}>О нас</NavLink>
                        </nav>
                        <NavLink to={"/login"}>
                            <div onClick={local} className='header--login'>
                                <button className='header--login__btn'>
                                    <CiUser className='header--login__btn--icon'/>Войти
                                </button>
                            </div>
                        </NavLink>
                        <div onClick={() => setMenu(!menu)} className='header--menu'>
                            <div className='header--menu__parentMenu'>
                                <div className={menu ? "header--menu__parentMenu--one" : ""}/>
                                <div className={menu ? "header--menu__parentMenu--tow" : ""}/>
                                <div className={menu ? "header--menu__parentMenu--three" : ""}/>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: menu ? "block" : "none",
                    }}>
                        <div className="header--nav">
                            <NavLink to={"/"}>Главная</NavLink>
                            <NavLink to={"/our-course"}>Наши курсы</NavLink>
                            <NavLink to={"/about-us"}>О нас</NavLink>
                            <button className='header--towBtn'><CiUser className='header--towBtn__icon'/>Войти</button>
                        </div>
                    </div>
                    <div className='header--menu'>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;