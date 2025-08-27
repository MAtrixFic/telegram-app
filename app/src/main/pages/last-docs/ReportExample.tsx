import { YellowButton } from "../../attributes/Buttons"
import { DropListWithTitle } from "../../attributes/DropList"

const ReportExample = () => {
    return (
        <div className="about-doc">
            <div className="top">
                <DropListWithTitle values={['Валюта отправителя']} type="yellow" dropListName="Выберите валюту" />
                <DropListWithTitle values={['Валюта получателя']} type="yellow" dropListName="Выберите валюту" />

            </div>
            <div className="bottom">
                <YellowButton name=" Получить пример расчета" />
            </div>
        </div>
    )
}

export default ReportExample