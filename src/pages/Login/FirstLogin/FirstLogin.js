import React, { useState } from "react";
import Book from "./../../../assets/img/logo.svg";
import {Link, NavLink, useNavigate} from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useDispatch } from "react-redux";

const FirstLogin = () => {
    const dispatch = useDispatch();

    const local = () => {
        let { uname, pass } = document.forms[0];
        database.find((user) => {
            if (user.username === uname.value && user.password === pass.value) {
                nav("/");
                window.scroll(0, 0);
                dispatch({ type: "OPEN_LOGIN", payload: false });
                localStorage.setItem("login", JSON.stringify(false));
            }
            return "";
        });
    };

    const navbar = () => {
        nav("/");
        window.scroll(0, 0);
        dispatch({ type: "OPEN_LOGIN", payload: false });
        localStorage.setItem("login", JSON.stringify(false));
    };

    //////////////////////////////////////

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [eye, setEye] = useState(false);
    const [errors, setErrors] = useState(false);

    const nav = useNavigate();

    const database = [
        {
            username: "1",
            password: "1",
        },
        {
            username: "satimbaevasan@gmail.com",
            password: "1234567",
        },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();

        let { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrors(true);
            } else {
                setErrors(false);
            }
        } else {
            setErrors(true);
        }
    };

    const getPage = (
        <form
            action=""
            onSubmit={handleSubmit}
            className="firstLogin--block__login"
        >
            <h2>Войти в аккаунт</h2>
            <input
                style={{
                    border: errors ? "1px solid red" : "",
                }}
                className="IWillForgetYou"
                type="text"
                name="uname"
                id="email"
                placeholder="Email"
                onChange={() => setErrors(false)}
            />
            <div>
                <input
                    style={{
                        border: errors ? "1px solid red" : "",
                    }}
                    className="forgetMe"
                    type={!eye ? "password" : "rf"}
                    name="pass"
                    id="passw"
                    placeholder="Password"
                    onChange={() => setErrors(false)}
                />
                {eye ? (
                    <BsEyeSlash
                        className="firstLogin--block__login--icon"
                        onClick={() => setEye(false)}
                    />
                ) : (
                    <BsEye
                        className="firstLogin--block__login--icon"
                        onClick={() => setEye(true)}
                    />
                )}
            </div>
            <button onClick={local}>Войти</button>
           <Link to={'/password-url'}>
               <h3>Забыли пароль?</h3>
           </Link>
        </form>
    );

    return (
        <div id="firstLogin">
            <div className="container">
                <div className="firstLogin">
                    <div className="firstLogin--block">
                        <img onClick={navbar} src={Book} alt="" />
                        <h1>SELF DEVELOPING SCHOOL</h1>
                        {isSubmitted ? "greate" : getPage}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstLogin;