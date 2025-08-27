import { TextListWithDodsAndNumbers } from "../../attributes/TextList"
import { YellowBorderButton } from "../../attributes/Buttons"

const CalculationProcedure = () => {
    return (
        <div className="about-doc">
            <div className="top">
                <TextListWithDodsAndNumbers
                    title="Отправка денег и получение опциона"
                    icon={1}
                    content={[
                        { text: <p>Компания-покупатель  <span id='bold'>{'(импортер)'}</span> оплатит компании-участнику GOLDAO в своей стране  <span id='bold'>{'<сумма и валюта отправки>'}</span></p> },
                        { text: <p>Компания-покупатель <span id='bold'>{'(импортер)'}</span> получит опцион на заключение договора купли-продажи монет</p> }
                    ]}
                />
                <TextListWithDodsAndNumbers
                    title="Расчет по договору и применение опциона"
                    icon={2}
                    content={[
                        { text: <p>Компания-покупатель <span id='bold'>{'(импортер)'}</span> передаст компании-продавцу <span id='bold'>{'(экспортер)'}</span> опцион на заключение договора купли продажи монет в счет оплаты по договору поставки</p> },
                    ]}
                />
                <TextListWithDodsAndNumbers
                    title="Получение денег и возврат опциона"
                    icon={3}
                    content={[
                        { text: <p>Компания-продавец <span id='bold'>{'(экспортер)'}</span> откажется от исполнения опциона и вернет его компании-участнику GOLDAO в своей стране</p> },
                        { text: <p>Компания-участник GOLDAO в стране экспортера вернет <span id='bold'>{'<сумма и валюта получения>'}</span></p> },
                    ]}
                />
            </div >
            <div className="bottom">
                <YellowBorderButton name="Бухгалтерский учет" />
                <YellowBorderButton name="Юридическое оформление" />
            </div>
        </div >
    )
}

export default CalculationProcedure