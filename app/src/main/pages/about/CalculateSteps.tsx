import { YellowBorderButton } from "../../attributes/Buttons"
import { TextListWithDodsAndNumbers } from "../../attributes/TextList"

import { useSetPageTitle } from "../../attributes/PageTitle/usePageTitle"
import { AboutInfo } from "../../others/PagesInfo"

const CalculateSteps = () => {
    useSetPageTitle(AboutInfo.calculatesteps.title)

    return (
        <div className="about-doc">
            <div className="top">
                <div className="top__lists gap">
                    <TextListWithDodsAndNumbers
                        title="До проведения расчета"
                        icon={1}
                        content={[
                            { text: <p>Компания-покупатель <span id='bold'>{'(импортер)'}</span>, компания-продавец <span id='bold'>{'(экспортер)'}</span> и GOLDAO подпишут договора и соглашения приложения к договору поставки</p> },
                        ]}
                    />
                    <TextListWithDodsAndNumbers
                        title="Проведение расчета"
                        icon={2}
                        content={[
                            { text: <p>Компания-покупатель (импортер) отправит <span id='bold'>{'<сумма и валюта отправки>'}</span></p> },
                            { text: <p>GOLDAO проведет оформление и учет расчета в информационно-финансовой системе</p> },
                            { text: <p>Компания-продавец (экспортер) получит <span id='bold'>{'<сумма и валюта получения>'}</span></p> },
                        ]}
                    />
                    <TextListWithDodsAndNumbers
                        title="После проведения расчета"
                        icon={3}
                        content={[
                            { text: <p>GOLDAO предоставит компании-покупателю (импортер), компании-продавцу (экспортер) закрывающие документы о проведенном расчете (выписки, акты и т.д.) для бухгалтерской отчетности</p> },
                        ]}
                    />
                </div>
            </div>
            <div className="bottom">
                <YellowBorderButton name="Принцип проведения расчетов" />
            </div>
        </div>
    )
}

export default CalculateSteps