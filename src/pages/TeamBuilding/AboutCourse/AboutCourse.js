import React from 'react';
import "./AboutCourse.scss"
import imgAbout from "../../../assets/img/book1.png"
import imgAbout2 from "../../../assets/img/Kaif 5.svg"
import imgAbout3 from "../../../assets/img/book6.png"
import imgAbout5 from "../../../assets/img/book6.png"
import imgAbout4 from "../../../assets/img/Kaif 7.svg"
import imgAbout6 from "../../../assets/img/book3.png"

const AboutCourse = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                    <h1 className="about--title">О КУРСЕ</h1>
                    <img className="about--image" src={imgAbout} alt=""/>
                    <p className="about--description">Как правильно строить команду и эффективно ею управлять, чтобы достигать все поставленные цели.</p>
                    <p className="about--description">И если вы хотите достичь успеха в карьере, бизнесе, своих проектах, значит, время переходить от <br/> прокачивания личной эффективности к изучению организации и работы эффективной команды.</p>
                    <p className="about--description">Курс “Командообразование” поможет вам освоить и внедрить методы создания и работы таких <br/>
                        команд, которые приносят результат, потому что достижение успеха - это командный вид спорта.</p>
                    <p className="about--description">И в работе, и в жизни выдающихся результатов достигает только тот, кто умеет окружать себя <br/>
                        выдающимися людьми. Ваши достижения будут настолько же выдающимися, <br/>
                        <img className="about--image2" src={imgAbout2} alt=""/>

                        насколько выдающейся будет ваша команда. А команда будет настолько же выдающейся, насколько выдающимся будет её <br/> лидер.</p>
                    <p className="about--description">Команда - это самая эффективная форма организации коллективного труда. Не бывает команды без <br/>
                        эффективности. Если то, что вы называете командой, неэффективна, то скорее всего, это не команда, а <br/>
                        группа людей, которым чего-то не хватает для того, чтобы стать командой. Сама природа создания и <br/> функционирования команды, подразумевает ее эффективность.</p>
                    <div className="about--block">
                        <div className="about--line"></div>
                        <h1 className="about--title2">Этот курс будет особо актуален для тех, кто хочет:</h1>
                    </div>

                    <div className="about--description2">
                <ul>
                    <li className="about--desc">
                        освоить навык создания эффективных команд
                    </li>
                    <li className="about--desc">
                        освоить принципы построения эффективных взаимоотношений в любой команде или группе.
                    </li>
                    <li className="about--desc">
                        сделать работу с командой плодотворной и легкой
                    </li>
                    <li className="about--desc">
                        значительно повысить эффективность своего бизнеса/проекта/отдела и улучшить  взаимоотношения в коллективе
                    </li>
                    <li className="about--desc">
                        освоить специальные способы и приемы чтобы проявить свои лидерские качества
                    </li>
                    <li className="about--desc">
                        получать стабильный качественный результат от работы с командой
                    </li>
                    <li className="about--desc">
                        получать стабильный качественный результат от работы с командой
                    </li>

                    <li className="about--desc">
                        оценить состояние дел в своем потенциальном или уже существующем бизнесе или проекте более конструктивно и прагматично
                    </li>

                    <li className="about--desc">
                        значительно сократить количество ошибок в работе с командой.
                    </li>
                </ul>
                    </div>
                    <img className="about--image" src={imgAbout5} alt=""/>

                    <img className="about--image3" src={imgAbout3} alt=""/>
                    <img className="about--image4" src={imgAbout4} alt=""/>

                    <div className="about--block">
                        <div className="about--line"></div>
                        <h1 className="about--title2">В этом курсе мы рассмотрим:</h1>
                    </div>

                    <div className="about--description2">
                        <ul>
                            <li className="about--desc">
                                Что такое команда, какие бывают виды команд, для чего и как они создаются, что объединяет людей и держит в команде.
                            </li>
                            <li className="about--desc">
                                Лидерство - это врожденное качество или его можно приобрести?
                            </li>
                            <li className="about--desc">
                                Какие есть методы повышения эффективности команды.
                            </li>
                            <li className="about--desc">
                                Почему именно работа в команде в разы увеличивает результат.
                            </li>
                            <li className="about--desc">
                                Как подбирать правильных людей в команду
                            </li>
                            <li className="about--desc">
                                Как их обучать и продвигать по карьерной лестнице.
                            </li>
                            <li className="about--desc">
                                Почему люди порой не хотят меняться и причины невыполнения подчиненными ваших поручений.
                            </li>

                            <li className="about--desc">
                                Как правильно и своевременно увольнять подчиненных
                            </li>
                        </ul>

                    </div>

                    <div className="about--block">
                        <div className="about--line2"></div>
                        <h1 className="about--title2">Регистрируйтесь на курс, стройте эффективные команды и <br/> пусть удача сопутствует вам на этом пути!</h1>
                    </div>

                    <div className="about--description2">
                        <ul>
                            <li className="about--desc">
                                * - материалы включают уроки и задания. И в конце чтобы получить сертификат вам потребуется <br/>
                                список заданий которые вы выполнили и тест с коуч-тренером который вы пройдете в зуме для <br/>
                                получения сертификата. Получить к ним доступ можно только при обучении с коуч-тренером.
                            </li>
                        </ul>
                        <img className="about--image5" src={imgAbout5} alt=""/>
                        <img className="about--image6" src={imgAbout6} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutCourse;