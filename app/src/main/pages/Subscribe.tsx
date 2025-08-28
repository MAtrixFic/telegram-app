import { YellowLink } from '../attributes/Buttons';
import { Logo } from '../svg/Main';
import { ICoonBig } from '../svg/Attributes';


const Subscribe = () => {
    return (
        <div className="main-page">
            <section className="main-page__top">
                <div className="main-page__logo-container">
                    <Logo />
                </div>
                <div className="main-page__subscribe-block">
                    <div className="main-page__message">
                        <div className="main-page__icon">
                            <ICoonBig />
                        </div>
                        <p className="text">
                            Для доступа к приложению необходимо подписаться на канал GOLDAO
                        </p>
                    </div>
                    <div className="main-page__continue">
                        <YellowLink additioanlStype='link__yellow' name='Подписаться на канал' link='/' />
                    </div>
                </div>
            </section>
            <section className="main-page__bottom">
                <ul className="main-page__contacts-list">
                    <li className="main-page__contact">
                        web: www.goldao.org
                    </li>
                    <li className="main-page__contact">
                        Почта: info@goldao.org
                    </li>
                    <li className="main-page__contact">
                        telegramm: @goldao_club.ru
                    </li>
                    <li className="main-page__contact">
                        Copyright (c) 2020-2025 GOLDAO. All right reserved
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Subscribe;