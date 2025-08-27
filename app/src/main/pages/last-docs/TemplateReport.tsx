import { ButtonWithIconAndTitle, YellowButton, ButtonWithIcon, YellowBorderButton } from "../../attributes/Buttons"
import { File5, File1 } from "../../svg/Attributes"

const TemplateReport = () => {
    return (
        <div className="about-doc">
            <div className="top">
                <div className="top__links">
                    <ButtonWithIcon icon={<File1 />} name="Договор цессии" />
                    <ButtonWithIcon icon={<File1 />} name="Опцион на заключение договора купли-продажи монет" />
                    <ButtonWithIcon icon={<File1 />} name="Договор мены опционов на заключение договоров купли-продажи монет" />
                    <ButtonWithIcon icon={<File1 />} name="Уведомление об отказе от исполнения опциона" />
                    <ButtonWithIcon icon={<File1 />} name="Выписка из информационно-финансовой системы GOLDAO" />
                </div>
                <div className="top__links">
                    <ButtonWithIconAndTitle
                        icon={<File5 />}
                        name="Архив дшаблонов договоров и соглашений "
                        title="Загрузка всех договров и соглашений" />
                </div>
            </div>
            <div className="bottom">
                <YellowBorderButton name="На главную" />
                <YellowBorderButton name="Получить консультацию" />
                <YellowButton name="Калькулятор" />
            </div>
        </div>
    )
}

export default TemplateReport