import React, { useState } from 'react';
import { MdArrowBackIosNew } from "react-icons/md";

const OpenAcc = () => {
    const [selected, setSelected] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(false)
    const [selected4, setSelected4] = useState(false)

    return (
        <div>
            <div className="item--div"></div>
            <div onClick={() => {
                setSelected(!selected)
                setSelected2(false)
                setSelected3(false)
                setSelected4(false)
            }}
                style={{
                    height: selected ? "200px" : "",
                    transition: ".6s"
                }} className="item">
                <div className="item--title">
                    <div>
                        <h4>Сколько всего насчитывается материала всего</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi eius enim
                            fuga, id laboriosam laudantium magni quidem sed voluptates?</p>
                    </div>
                    <MdArrowBackIosNew style={{
                        transform: selected ? "rotate(90deg)" : ""
                    }} className="item--icon" />
                </div>
            </div>
            <div className="item--div"></div>
            <div onClick={() => {
                setSelected2(!selected2)
                setSelected(false)
                setSelected3(false)
                setSelected4(false)
            }}
                style={{
                    height: selected2 ? "200px" : "",
                    transition: ".6s"
                }} className="item">
                <div className="item--title">
                    <div>
                        <h4>Потеряю ли я оставшесея время если перейду на другой до окончания этого?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi eius enim
                            fuga, id laboriosam laudantium magni quidem sed voluptates?</p>
                    </div>

                    <MdArrowBackIosNew style={{
                        transform: selected2 ? "rotate(90deg)" : ""
                    }} className="item--icon" />
                </div>
            </div>
            <div className="item--div"></div>

            <div onClick={() => {
                setSelected3(!selected3)
                setSelected(false)
                setSelected2(false)
                setSelected4(false)
            }}
                style={{
                    height: selected3 ? "200px" : "",
                    transition: ".6s"
                }} className="item">
                <div className="item--title">

                    <div>
                        <h4>Могу ли я отказаться от автопродления подписки?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi eius enim
                            fuga, id laboriosam laudantium magni quidem sed voluptates?</p>
                    </div>
                    <MdArrowBackIosNew style={{
                        transform: selected3 ? "rotate(90deg)" : ""
                    }} className="item--icon" />
                </div>
            </div>       
                 <div className="item--div"></div>

            <div onClick={() => {
                setSelected4(!selected3)
                setSelected(false)
                setSelected2(false)
                setSelected3 (false)
            }}
                style={{
                    height: selected4 ? "200px" : "",
                    transition: ".6s"
                }} className="item">
                <div className="item--title">

                    <div>
                        <h4>Могу ли я отказаться от автопродления подписки?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi eius enim
                            fuga, id laboriosam laudantium magni quidem sed voluptates?</p>
                    </div>
                    <MdArrowBackIosNew style={{
                        transform: selected4 ? "rotate(90deg)" : ""
                    }} className="item--icon" />
                </div>
            </div>
        
          
            <div className="item--div"></div>

        </div>
    );
};

export default OpenAcc;