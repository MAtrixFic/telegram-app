import { Logo } from "../../svg/Main";
import { YellowLink } from "../../attributes/Buttons";
import { PagesInfo } from "../../others/PagesInfo";

import { LocationPoint, TwoMoney } from "../../svg/Attributes";
import CheckList from "../../attributes/CheckList";

const AboutMain = () => {
    return (
        <div className='about'>
            <div className="about__top-container">
                <div className="main-page__logo-container">
                    <Logo />
                </div>
                <div className="about__info-block">
                    <div className="about__title-container">
                        <h3 className="about__title">О GOLDAO</h3>
                    </div>
                    <div className="about__info">
                        <p className="text">
                            <span id='bold'>GOLDAO</span> - международная мультивалютная система трансграничных расчетов для бизнеса по договорам поставки
                        </p>
                    </div>
                    <div className="about__dop-info">
                        <div className="about__icon-text-container">
                            <div className="about-icon">
                                <TwoMoney />
                            </div>
                            <p className="about__text">
                                <span id='bold'>50+</span> валют
                            </p>
                        </div>
                        <div className="about__icon-text-container">
                            <div className="about-icon">
                                <LocationPoint />
                            </div>
                            <p className="about__text">
                                <span id='bold'>100+</span> стран
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about__offers-block">
                    <CheckList title="Выгодно"
                        text={<p className="text">Проводите расчеты  <span id='bold'>{'с дисконтами до -5%'}</span> к официальным курсам валют</p>}
                    />
                    <CheckList title="Быстро"
                        text={<p className="text">Скорость проведения расчетов <span id='bold'>{'- от 4х часов'}</span></p>}
                    />
                    <CheckList title="Легально"
                        text={<p className="text">Полное соответствие законодательствам, правилам регуляторов финансовых рынков, налоговым и таможенным кодексам стран регистрации покупателей (импортеров) и продавцов (экспортеров) товаров услуг</p>}
                    />
                    <CheckList title="Безопасно"
                        text={<p className="text">Деньги защищены от блокировок и заморозок, расчеты обеспечены реальными драгоценными металлами, возможность применения покрытых аккредитивов</p>}
                    />
                </div>
            </div>
            <div className="about__bottom-container">
                <YellowLink additioanlStype="link__yellow" name="Узнать больше" link={PagesInfo.about.link} />
            </div>
        </div>
    );
};

export default AboutMain;