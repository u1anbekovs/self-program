import React, {useState} from 'react';
import "./Team.scss"
import videoImg from "../../../assets/img/video.svg"
import play from "../../../assets/img/play-btn.svg"
import imgAbout5 from "../../../assets/img/book6.png";
import imgAbout4 from "../../../assets/img/Kaif 7.svg";
import imgAbout6 from "../../../assets/img/book3.png";

const Team = () => {
    const [video, setVideo] = useState(false)
    return (
        <section id="team">
            <img className="book" src={imgAbout5} alt=""/>

            <div className="container">
                <div className="team">
                    <div className="team--text">
                        <div className="team--text__logo">
                            <a href="#">Наши курсы / Курсы по созданию команды</a>
                            <img className="team--text__logo--image" src={imgAbout4} alt=""/>
                            <h1>Создание команды</h1>
                            <p>Как правильно строить команду и эффективно ею <br/> управлять, чтобы достигать все
                                поставленные цели.</p>
                            <button>Получить доступ за 500,00 $</button>
                        </div>
                        <div className="team--text__logo">
                            <h2>В курс входит</h2>
                            <p>43 материала</p>
                            <p>100% эксклюзив</p>
                        </div>
                    </div>
                    {
                        video ? "" :
                            <div className="team--video">
                                <img className="team--video__img2" src={imgAbout6} alt=""/>
                                <img className="team--video__img" src={videoImg} alt=""/>
                                <img onClick={() => setVideo(!video)} className="team--video__img1" src={play} alt=""/>
                            </div>
                    }
                    {
                        video ?
                            <iframe src="https://www.youtube.com/embed/-cSFPIwMEq4"></iframe> : ""
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;