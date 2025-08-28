import { ButtonWithIconAndTitle, YellowButton, YellowBorderButton } from "../../attributes/Buttons"
import InputLabel from "../../attributes/InputLabel"

import { File1 } from "../../svg/Attributes"

const UploadingOfferTwo = () => {
    return (
        <div className="about-doc">
            <div className="top grey">
                <div className="top__grey-block">
                    <InputLabel mode="yellow" label={<p className="text">Сумма и валюта отправки</p>} value="230 000 EUR" type={"none"} />
                    <InputLabel mode="yellow" label={<p className="text">Сумма и валюта получения</p>} value="230 000 EUR" type={"none"} />
                </div>
                <div className="top__links">
                    <ButtonWithIconAndTitle title={<p className="text">Для загрузки примера расчета нажмите здесь</p>} name={'Пример расчета с применением GOLDAO'} icon={<File1 />} />
                </div>
            </div>
            <div className="bottom">
                <YellowBorderButton name="Связаться с GOLDAO" />
                <YellowButton name="На главную" />
            </div>
        </div>
    )
}

export default UploadingOfferTwo