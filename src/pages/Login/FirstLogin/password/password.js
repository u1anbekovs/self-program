import React, {useState} from 'react';
import Book from "../../../../assets/img/logo.svg";
import {Link} from "react-router-dom";



const Password = () => {
    const [status, setStatus] = useState(false)
    const [info, setInfo] = useState(false)

    function getStatus (e) {
       return  setStatus(e.target.value)
    }






    return (
        <div id='password'>
            <div className="container">
                <div className="password">
                    <div className="password--text">
                        <img src={Book} alt="" />
                        <h1>SELF DEVELOPING SCHOOL</h1>
                        <div className="password--text__block">
                            <h1>Востановить пароль</h1>
                            <p>Введите адрес электронной почты, который вы использовали для регистрации. Вам будет отправлено письмо с инструкциями по сбросу пароля.</p>
                            <input style={{
                                border: info ? '2px solid red' : null

                            }} type="Email" placeholder='Email...' onChange={(e) => getStatus(e)}/>
                            <Link to={'/Two-url'}>
                                <button onClick={() => setInfo(!info)}>Отправить инструкцию</button>
                            </Link>
                            <Link to={'/login-url'}>
                                <h4 hidden={status}>Уже есть аккаунт.<span> Войти</span> </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Password;