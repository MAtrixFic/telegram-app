import { Logo, Document, Calculate, Money, About } from "../svg/Main";
import NavElement from "../navigation/navigation-menu/NavElement";
import '../../styles/main.scss'
import '../../styles/attributes.scss'
import { YellowLink } from "../attributes/Buttons";

const Main = () => {

    return (
        <div className="main-page">
            <section className="main-page__top">
                <div className="main-page__logo-container">
                    <Logo />
                </div>
                <div className="main-page__nav-container">
                    <nav className="main-page__nav">
                        <NavElement
                            title="Калькулятор"
                            link="golden-calc/one"
                            text="Стоимость проведения расчета по договору поставки с применением GOLDAO"
                        >
                            <Calculate />
                        </NavElement>
                        <NavElement
                            title="Курсы валют"
                            link="money/one"
                            text="Курсы национальных валют, применяемых в GOLDAO для проведения расчетов "
                        >
                            <Money />
                        </NavElement>
                        <NavElement
                            title="Документация"
                            link="docs"
                            text="Презентационные материалы, шаблоны договоров и примеры расчетов"
                        >
                            <Document />
                        </NavElement>
                        <NavElement
                            title="О GOLDAO"
                            withPages={false}
                            link="about"
                            text="Информация о провледении расчетов с применением GOLDAO и национальных валют"
                        >
                            <About />
                        </NavElement>
                    </nav>
                    <div className="main-page__bottom-nav">
                        <YellowLink link="" name="Связаться с GOLDAO" additioanlStype="link__black-border" />
                        <YellowLink link="/subscribe" name="Перейти в Личный кабинет" additioanlStype="link__yellow" />
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

export default Main;