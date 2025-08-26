import { Logo, Document, Calculate } from "../svg/Main";
import NavElement from "../navigation/navigation-menu/NavElement";
import '../../styles/main.scss'
import '../../styles/attributes.scss'

const Main = () => {

    return (
        <div className="main-page">
            <section className="main-page__top">
                <div className="main-page__logo-container">
                    <Logo />
                </div>
                <div className="main-page__nav-container">
                    <nav className="main-page__nav">
                        <NavElement title="Документация" link="docs">
                            <Document />
                        </NavElement>
                        <NavElement title="Калькулятор" link="calc">
                            <Calculate />
                        </NavElement>
                    </nav>
                </div>
            </section>
            <section className="main-page__bottom">
                <ul className="main-page__contacts-list">
                    <li className="main-page__contact">
                        Телефон: +7 (499) 371 81 58
                    </li>
                    <li className="main-page__contact">
                        Почта: info@goldao.org
                    </li>
                    <li className="main-page__contact">
                        Адрес:119331 г.Москва, пр.Вернадского, 29, оф. 3/3
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Main;