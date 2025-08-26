
import DocsLink from "./DocsLink";

const DocsMain = () => {
    return (
        <div className="docs__main-list-container">
            <div className="docs__main-list-title">
                <span>Выберите раздел:</span>
            </div>
            <div className="docs__main-list-block">
                <ul className="docs__main-list">
                    <DocsLink name='Презентация' link="./presentation" />
                    <DocsLink name='Предложение для участников' link="/docs/usersuggest" />
                    <DocsLink name='Примеры расчетов с GOLDAO' link="/docs/calcexamples" />
                    <DocsLink name='Шаблоны договоров' link="/docs/templatecontract" />
                    <DocsLink name='Шаблоны отчетов' link="/docs/templatereports" />
                </ul>
            </div>
            <div className="docs__notify-block">
                <span>Для зарегистрированных пользователей</span>
            </div>
        </div>
    );
};

export default DocsMain;