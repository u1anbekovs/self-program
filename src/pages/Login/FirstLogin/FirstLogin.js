import React from 'react';
import Book from "./../../../assets/img/logo.svg"


const FirstLogin = () => {
    return (
        <div id="firstLogin">
            <div className="container">
                <div className="firstLogin">
                    <div className="firstLogin--block">
                        <img src={Book} alt="" />
                        <h1>SELF DEVELOPING SCHOOL</h1>
                        <div className="firstLogin--block__login">
                            <h2>Войти в аккаунт</h2>
                            <input type="text" name="" placeholder='Email' id="" />
                            <input type="password" name="" placeholder='Password' id="" />
                            <button>Войти</button>
                            <h3>Забыли пароль?</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstLogin;