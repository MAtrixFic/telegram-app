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
                    <DropListWithTitle values={['']} type="yellow" dropListName="name"
                        icon={<DoubleArrowBottom />}
                        label={<p className="text">Укажите <span id='bold'>{'валюту страны отправителя'}</span> платежа (импортера)</p>} />
                    <DropListWithTitle values={['']} type="yellow" dropListName="name"
                        icon={<DoubleArrowBottom />}
                        label={<p className="text">Укажите <span id='bold'>{'валюту страны получателя'}</span> платежа (экспортера)</p>} />
                    <DropListWithTitle values={['']} type="yellow" dropListName="name"
                        icon={<DoubleArrowBottom />}
                        label={<p className="text"> Выберите <span id='bold'>{'тип расчета'}</span>, что бы рассчитать сумму получения</p>} />
                    <InputLabel icon={<DoubleArrowBottom />} mode="yellow-white"
                        label={<p className="text">Укажите <span id='bold'>{'сумму'}</span></p>} value="" type={"none"} />
                </div>
            </div>
            <div className="bottom">
                <YellowLink name="Рассчитать" link={PagesInfo.goldcalctwo.link} additioanlStype="link__yellow" />
            </div>
        </div >
    )
}

export default GolderCulc