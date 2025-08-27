import { YellowBorderButton } from "../../attributes/Buttons"
import { TextListWithDodsAndNumbers } from "../../attributes/TextList"

const ContractsAndAgreements = () => {
    return (
        <div className="about-doc">
            <div className="top">
                <TextListWithDodsAndNumbers
                    title="Отправка денег и получение опциона"
                    icon={1}
                    content={[
                        { text: <p>Компания-покупатель <span id="bold">{'(импортер)'}</span> и компания-продавец <span id="bold">{'(экспортер)'}</span> и GOLDAO в стране импортера подписывают  <span id="bold">{'опцион на заключение договора купли-продажи монет'}</span></p> },
                        { text: <p>Компания-покупатель <span id="bold">{'(импортер)'}</span> и компания-продавец <span id="bold">{'(экспортер)'}</span> и GOLDAO в стране экспортера подпишут <span id="bold">{'договор мены'}</span> опционов на заключение догоров купли-продажи монет</p> },
                    ]}
                />
                <TextListWithDodsAndNumbers
                    title="Расчет по договору и применение опциона"
                    icon={2}
                    content={[
                        { text: <p>Компания-покупатель <span id="bold">{'(импортер)'}</span> и компания продавец подпишут <span id="bold">{'договор уступки прав и обязанностей'}</span> по опциону на заключение договора купли продажи монет (договор цессии)</p> },

                    ]}
                />
                <TextListWithDodsAndNumbers
                    title="Получение денег и возврат опциона"
                    icon={3}
                    content={[
                        { text: <p>Компания-продавец <span id="bold">{'(экспортер)'}</span> и компания участник GOLDAO в стране экспортера подпишут <span id="bold">{'соглашение об отказе от исполнения опциона'}</span></p> },
                    ]}
                />
            </div>
            <div className="bottom">
                <YellowBorderButton name="Бухгалтерский учет" />
            </div>
        </div>
    )
}

export default ContractsAndAgreements