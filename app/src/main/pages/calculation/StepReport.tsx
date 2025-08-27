import { YellowButton } from "../../attributes/Buttons"
import { YellowLink } from "../../attributes/Text"
import { TextListWithDodsAndNumbers } from "../../attributes/TextList"
import { YellowBorderButton } from "../../attributes/Buttons"

import { Users, PaperMoney, Scales, File } from "../../svg/Links"

const StepReport = () => {
    return (
        <div className="step-report">
            <div className="top">
                <div className="top__lists">
                    <TextListWithDodsAndNumbers
                        title="До проведения расчета"
                        icon={1}
                        content={[{ text: <p>Компания-покупатель <span id='bold'>{'(импортер)'}</span> и компания-продавец <span id='bold'>{'(экспортер)'}</span> и GOLDAO подпишут договора и соглашения - приложения к договору поставки</p> }]}
                    />
                    <TextListWithDodsAndNumbers
                        title="Проведение расчета"
                        icon={2}
                        content={[
                            { text: <p>Компания-покупатель (импортер) отправит <span id='bold'>{'<сумма и валюта отправки>'}</span></p> },
                            { text: <p>GOLDAO проведет оформление и учет расчета в информационно-финансовой системе</p> },
                            { text: <p>Компания-продавец (экспортер) получит <span id='bold'>{'<сумма и валюта отправки>'}</span></p> }
                        ]}
                    />
                    <TextListWithDodsAndNumbers
                        title="После проведения расчета"
                        icon={3}
                        content={[{ text: 'GOLDAO предоставит компании-покупателю (Импортер), компании-продавцу (экспортер) закрывающие документы о проведенном расчете (выписки, акты и т.д.) для бухгалтерской отчетности' }]}
                    />
                </div>
                <div className="top__links">
                    <YellowLink text="Участники проведения расчета" link="">
                        <Users />
                    </YellowLink>
                    <YellowLink text="Процедура проведения расчета" link="">
                        <PaperMoney />
                    </YellowLink>
                    <YellowLink text="Договора и юридическое оформление" link="">
                        <Scales />
                    </YellowLink>
                    <YellowLink text="Бухгалтерская проводка и отчетнсоть" link="">
                        <File />
                    </YellowLink>
                </div>
            </div>
            <div className="bottom">
                <YellowBorderButton name="На главную" />
                <YellowButton name="Скачать предложение" />
            </div>
        </div>
    )
}

export default StepReport