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
                    <InputLabel mode="yellow" label="Сумма и валюта отправки" value="230 000 EUR" type={"none"} />
                    <InputLabel mode="yellow" label="Сумма и валюта получения" value="230 000 EUR" type={"none"} />
                </div>
                <div className="top__inputs">
                    <InputLabel mode="yellow-white" label="Сумма и валюта получения" value="230 000 EUR" type={"none"} />
                    <InputLabel mode="yellow-white" label="Сумма и валюта получения" value="230 000 EUR" type={"none"} />
                    <DropListWithTitle icon={<DoubleArrowBottom />} dropListName="Выбери" type="yellow" values={['one']} label={'Укажите основания для проведения расчета'} />
                </div>
            </div>
            <div className="bottom">
                <YellowLink name="Рассчитать" additioanlStype="link__yellow" link={PagesInfo.uploadoffertwo.link} />
            </div>
        </div>
    )
}

export default UploadingOffer