import { YellowButton } from "../../../attributes/Buttons"
import { DropListWithTitle } from "../../../attributes/DropList"
import InputLabel from "../../../attributes/InputLabel"
import { DoubleArrowBottom } from "../../../svg/Attributes"

const GolderCulc = () => {
    return (
        <div className="calc">
            <div className="top">
                <DropListWithTitle values={['one']} type="yellow" dropListName="name" label="Укажите валюту страны отправителя платежа (импортера)" />
                <DropListWithTitle values={['one']} type="yellow" dropListName="name" label="Укажите валюту страны получателя платежа (экспортера)" />
                <DropListWithTitle values={['one']} type="yellow" dropListName="name" label="Выберите тип расчета, что бы рассчитать сумму получения" />
                <InputLabel icon={<DoubleArrowBottom />} mode="yellow-white" label="Укажите сумму" value="" type={"none"} />
            </div>
            <div className="bottom">
                <YellowButton name="Рассчитать" />
            </div>
        </div >
    )
}

export default GolderCulc