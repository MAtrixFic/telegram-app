import { YellowLink } from "../../attributes/Buttons"
import { DropListWithTitle } from "../../attributes/DropList"
import { ButtonWithIconAndTitle } from "../../attributes/Buttons"
import { File1 } from "../../svg/Attributes"
// import { PagesInfo } from "../../others/PagesInfo"

const ReportExampleTwo = () => {
    return (
        <div className="about-doc">
            <div className="top big-rift">
                <div className="top__lists">
                    <DropListWithTitle values={['Валюта отправителя']} type="yellow" dropListName="Выберите валюту" />
                    <DropListWithTitle values={['Валюта получателя']} type="yellow" dropListName="Выберите валюту" />
                </div>
                <div className="top__links">
                    <ButtonWithIconAndTitle
                        icon={<File1 />}
                        name="Пример расчета с применением GOLDAO"
                        title="Для загрузки примера расчета нажмите здесь" />
                </div>
            </div>
            <div className="bottom">
                <YellowLink name="На главную" link={'/'} additioanlStype="link__yellow-border" />
                <YellowLink name="Калькулятор расччетов" link="/" additioanlStype="link__yellow" />
            </div>
        </div>
    )
}

export default ReportExampleTwo