import React, {useEffect, useState} from 'react';
import Book from "./../../../assets/img/logo.svg"
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {Link} from "react-router-dom";


const FirstLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [info, setInfo] = useState(false)
    const [emailGo, setEmailGo] = useState(false)
    const [passwordGo, setPasswordGo] = useState(false)
    const [emailError, setEmailError] = useState('Емайл не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)


    useEffect(() => {
        if (emailError || passwordError){
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    },[emailError, passwordError])


    const EmailHandler = (e) => {
        setEmail(e.target.value)
        const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('некорректный емайл')
        }else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length > 3 || e.target.value.length > 8){
            setPasswordError('')
            if (!e.target.value){
                setPasswordError('')
            }
       }else {
            setPasswordError('Пароль не может быть пустым')
        }
    }

    const start = (e) => {
            switch (e.target.name){
                case 'Email':
                    setEmailGo(true)
                    break
                case 'Password':
                    setPasswordGo(true)
                    break
        }
    }
    return (
        <div id="firstLogin">
            <div className="container">
                <div className="firstLogin">
                    <div className="firstLogin--block">
                        <img src={Book} alt="" />
                        <h1>SELF DEVELOPING SCHOOL</h1>
                        <div className="firstLogin--block__login">
                            <h2>Войти в аккаунт</h2>
                           <div className="firstLogin--block__login--div">
                               {(emailGo && emailError) && <p>{emailError}</p>}
                               <input onChange={e => EmailHandler(e)} value={email} onBlur={(e => start(e))} type="text" name="Email" placeholder='Email' id="" />
                           </div>
                           <div className="firstLogin--block__login--input">
                               {(passwordGo && passwordError) && <p style={{color: 'red'}}>{passwordError}</p>}
                               <input onChange={e => passwordHandler(e)} value={password} onBlur={(e => start(e))} type="password" name="Password" placeholder='Password' id=""/>
                               <AiOutlineEyeInvisible onClick={() => setInfo(!info)} className="firstLogin--block__login--input__icon"/>
                           </div>
                            <button>Войти</button>
                            <Link to={'/password-url'}>
                                <h3>Забыли пароль?</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstLogin;