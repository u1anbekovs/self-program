import React, {useState} from 'react';
import Book from "../../../../../assets/img/logo.svg";
import {useNavigate} from "react-router-dom";

const TwoLogin = () => {
    const [forget, setForget] = useState("")
    const [forgetOne, setForgetOne] = useState("")
    const [forgotError, setForgotError] = useState(false)
    const navigate = useNavigate()

    function handleConfirmPassword() {
        if (forget === forgetOne && forget.length !== 0 && forgetOne.length !== 0) {
            navigate('/')
        } else {
            setForgotError(true)
        }
    }

    return (
        <div id='twoLogin'>
            <div className="container">
                <div className="twoLogin">
                    <div className="twoLogin--text">
                        <img src={Book} alt=""/>
                        <h2>SELF DEVELOPING SCHOOL</h2>
                        <div className="twoLogin--text__block">
                            <h3>Востановить пароль</h3>
                            <input type="password" placeholder={'Новый пароль'}
                                   onChange={(e) => setForget(e.target.value)}
                                   style={{
                                       border: forgotError ? '1px solid red' : ""
                                   }}
                            />
                            <input type="password" placeholder={'Повторите'}
                                   onChange={(e) => setForgetOne(e.target.value)}
                                   style={{
                                       border: forgotError ? '1px solid red' : ""
                                   }}
                            />
                            <button onClick={handleConfirmPassword}>Востановить пароль</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoLogin;