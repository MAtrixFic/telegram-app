import { DropListWithTitle } from "../../../attributes/DropList"
import InputLabel from "../../../attributes/InputLabel"
import { DoubleArrowBottom } from "../../../svg/Attributes"
import { YellowLink } from "../../../attributes/Buttons"
import { PagesInfo } from "../../../others/PagesInfo"

const GolderCulc = () => {
    return (
        <div className="calc">
            <div className="top">
                <div className="top__lists">
                    <DropListWithTitle values={['one']} type="yellow" dropListName="name" label="Укажите валюту страны отправителя платежа (импортера)" />
                    <DropListWithTitle values={['one']} type="yellow" dropListName="name" label="Укажите валюту страны получателя платежа (экспортера)" />
                    <DropListWithTitle values={['one']} type="yellow" dropListName="name" label="Выберите тип расчета, что бы рассчитать сумму получения" />
                    <InputLabel icon={<DoubleArrowBottom />} mode="yellow-white" label="Укажите сумму" value="" type={"none"} />
                </div>
            </div>
            <div className="bottom">
                <YellowLink name="Рассчитать" link={PagesInfo.goldcalctwo.link} additioanlStype="link__yellow" />
            </div>
        </div >
    )
}

export default GolderCulc