import { YellowBorderButton } from "../../attributes/Buttons"
import { TextListWithDodsAndNumbers } from "../../attributes/TextList"
import { DoubleArrowTop, DoubleArrowBottom } from "../../svg/Attributes"

const UseSections = () => {
    return (
        <div className="use-sections">
            <div className="top">
                <TextListWithDodsAndNumbers
                    title="В стране отправителя"
                    content={[
                        { text: <p>Компания-покупатель <span id='bold'>{'(импортер)'}</span> - юридическое лицо, сторона договора поставки товаров или услуг</p> },
                        { text: <p >Компания-участник GOLDAO - юридическое лицо, резидент страны регистрации импортера, <span id='bold'>{'предоставляющее возможность получения опциона'}</span> на заключение договора купли-продажи монет в обмен на деньги в национальной валюте импортера</p> }
                    ]}
                    icon={<DoubleArrowTop />}
                />
                <TextListWithDodsAndNumbers
                    title="В стране полуучателя"
                    content={[
                        { text: <p>Компания-продавец <span id='bold'>{'(экспортер)'}</span> - юридическое лицо, сторона договора поставки товаров или услуг</p> },
                        { text: <p ><span id='bold'>{'Компания-участник GOLDAO'}</span> - юридическое лицо, резидент страны регистрации экспортера, <span id='bold'>{'гарантирующее получение денег'}</span> в национальной валюте экспортера в случае отказа от исполнения опциона</p> }
                    ]}
                    icon={<DoubleArrowBottom />}
                />
            </div>
            <div className="bottom">
                <YellowBorderButton name="Процедура проведения расчетов" />
            </div>
        </div>
    )
}

export default UseSections