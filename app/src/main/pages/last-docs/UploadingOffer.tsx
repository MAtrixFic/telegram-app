import { YellowLink } from "../../attributes/Buttons"
import InputLabel from "../../attributes/InputLabel"
import { DropListWithTitle } from "../../attributes/DropList"
import { DoubleArrowBottom } from "../../svg/Attributes"
import { PagesInfo } from "../../others/PagesInfo"

const UploadingOffer = () => {
    return (
        <div className="about-doc">
            <div className="top grey">
                <div className="top__grey-block">
                    <InputLabel mode="yellow" label={<p className="text">Сумма и валюта отправки</p>} value="230 000 EUR" type={"none"} />
                    <InputLabel mode="yellow" label={<p className="text">Сумма и валюта получения</p>} value="230 000 EUR" type={"none"} />
                </div>
                <div className="top__inputs">
                    <InputLabel icon={<DoubleArrowBottom />} mode="yellow-white" label={<p className="text">Введите название компании-отправителя <span id='bold'>(импортера)</span></p>} value="" type={"none"} />
                    <InputLabel icon={<DoubleArrowBottom />} mode="yellow-white" label={<p className="text">Введите название компании-получателя <span id='bold'>{'(экспортера)'}</span></p>} value="" type={"none"} />
                    <DropListWithTitle icon={<DoubleArrowBottom />} dropListName="Выбери" type="yellow" values={['one']} label={<p className="text">Укажите основания для проведения расчета</p>} />
                </div>
            </div>
            <div className="bottom">
                <YellowLink name="Рассчитать" additioanlStype="link__yellow" link={PagesInfo.uploadoffertwo.link} />
            </div>
        </div>
    )
}

export default UploadingOffer