import React from "react";
import "./CoursBlock.scss";
import YouTube from "./../../../assets/img/youtube.svg";
import Gold from "./../../../assets/img/mdi_gold.svg";
import Time from "./../../../assets/img/time.svg";

const CourseBlock = () => {
    return (
        <div className="container">
            <div className="courseBlock">
                <div className="courseBlock--block">
                    <img src={YouTube} alt=""/>
                    <h2>43 материала</h2>
                    <p>
                        Только полезная информация, никакой воды. Применяйте эти знания
                        первыми!
                    </p>
                </div>
                <div className="courseBlock--block">
                    <img src={Gold} alt=""/>
                    <h2>100% эксклюзив</h2>
                    <p>Курс записан эксклюзивно для нашей платформы.</p>
                </div>
                <div className="courseBlock--block">
                    <img src={Time} alt=""/>
                    <h2>В любое время, в любом месте</h2>
                    <p>
                        Занимайтесь как вам удобно и где угодно, на своем мобильном или
                        компьютере.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default CourseBlock;