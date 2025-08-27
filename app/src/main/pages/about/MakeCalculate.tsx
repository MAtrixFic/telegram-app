import { YellowBorderButton, YellowButton } from "../../attributes/Buttons"
import { TextListWithDodsAndNumbers } from "../../attributes/TextList"

import { PaperMoney, Document, Calculator } from "../../svg/Attributes"

const MakeCalculate = () => {
    return (
        <div className="about-doc">
            <div className="top">
                <div className="top__lists gap">
                    <TextListWithDodsAndNumbers
                        title="Договор поставки"
                        icon={<Document />}
                        content={[
                            { text: <p>Компания-покупатель <span id="bold">{'(импортер)'}</span> и компания-продавец <span id="bold">{'(экспортер)'}</span> заключили импортно-экспортный договор <span id="bold">{'(договор поставки)'}</span></p> },
                        ]}
                    />
                    <TextListWithDodsAndNumbers
                        title="Расчет по договору поставки"
                        icon={<Calculator />}
                        content={[
                            { text: <p>Расчет по договору поставки между импортером и экспортером осущетвляется через механизм <span id="bold">{'уступки права требования'}</span> с оформлением соответствующего <span id="bold">{'договора цессии'}</span></p> },

                        ]}
                    />
                    <TextListWithDodsAndNumbers
                        title="Инструмент расчета по договору поставки"
                        icon={<PaperMoney />}
                        content={[
                            { text: <p>Правом требования, которое применяется для расчета по договору поставки, является опцион на <span id="bold">{'заключение договора купли-продажи монет'}</span></p> },
                        ]}
                    />
                </div>
            </div>
            <div className="bottom">
                <YellowBorderButton name="Участники проведения расчетов" />
                <YellowButton name="Получить предложение" />
            </div>
        </div>
    )
}

export default MakeCalculate