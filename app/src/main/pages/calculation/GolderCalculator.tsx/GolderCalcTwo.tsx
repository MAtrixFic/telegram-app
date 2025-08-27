import InputLabel from "../../../attributes/InputLabel"
import { TextWithIcon } from "../../../attributes/Text"
import { Money } from "../../../svg/Links"
import { PaperMoney } from "../../../svg/Attributes"
import { YellowButton } from "../../../attributes/Buttons"

const GoldenCalcTwo = () => {
    return (
        <div className="calc">
            <div className="top">
                <div className="top__lists">
                    <InputLabel mode="yellow" label="Сумма и валюта отправки" value="" type={"none"} />
                    <InputLabel mode="yellow" label="Сумма и валюта получения" value="" type={"none"} />
                </div>
                <div className="top__lists">
                    <TextWithIcon icon={<PaperMoney />} text={
                        <>
                            <p className="text">Кросс-курс валют</p>
                            <p className="text"><span id="bold">140.00 EUR/RUB</span></p>
                        </>
                    }
                    />
                    <TextWithIcon icon={<Money />} text={
                        <>
                            <p className="text">Курс валют с учетом комиссий и дисконта:</p>
                            <p className="text"><span id="bold">140.00 EUR/RUB</span></p>
                        </>
                    } />
                </div>
            </div>
            <div className="bottom">
                <YellowButton name="Рассчитать" />
            </div>
        </div >
    )
}

export default GoldenCalcTwo