import { YellowLink } from "../../attributes/Buttons"
import { DropListWithTitle } from "../../attributes/DropList"
import { PagesInfo } from "../../others/PagesInfo"

const ReportExample = () => {
    return (
        <div className="about-doc">
            <div className="top">
                <div className="top__lists">
                    <DropListWithTitle values={['Валюта отправителя']} type="yellow" dropListName="Выберите валюту" />
                    <DropListWithTitle values={['Валюта получателя']} type="yellow" dropListName="Выберите валюту" />
                </div>
            </div>
            <div className="bottom">
                <YellowLink name="Получить пример расчета" link={PagesInfo.reportexampletwo.link} additioanlStype="link__yellow" />
            </div>
        </div>
    )
}

export default ReportExample