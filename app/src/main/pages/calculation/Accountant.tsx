import { TextListWithDodsAndNumbers } from "../../attributes/TextList"
import { DoubleArrowTop, DoubleArrowBottom } from "../../svg/Attributes"
import { YellowLink } from "../../attributes/Text"
import { File } from "../../svg/Links"
import { Minus, Plus } from "../../svg/Attributes"

const Accountant = () => {
    return (
        <div className="accountant">
            <div className="top">
                <div className="top__lists">
                    <TextListWithDodsAndNumbers
                        title="На стороне импортера"
                        icon={<DoubleArrowBottom />}
                        message={<p><span id='bold'>{'Баланс импортера'}</span> при исполнении обязательств по оплате товаров или услуг в соответствии с догвором поставки</p>}
                        content={[
                            { text: <p>Деньги в национальной валюте импортера</p>, flag: <Plus /> },
                            { text: <p>Опцион на заключение договора купли продажи</p>, flag: <Minus /> },
                            { text: <p>Опцион на заключение договора купли продажи монет страны экспортера</p>, flag: <Plus /> },
                            { text: <p>Товары или услуги по договору поставки</p>, flag: <Minus /> }
                        ]}
                    />
                    <TextListWithDodsAndNumbers
                        title="На стороне экспортера"
                        icon={<DoubleArrowTop />}
                        message={<p><span id='bold'>{'Баланс экспортера'}</span> при исполнении обязательств по поставке товаров или услуг в соответсвии с договором поставки</p>}
                        content={[
                            { text: <p>Товары или услуги по договору поставки</p>, flag: <Plus /> },
                            { text: <p>Опцион на заключение договора купли продажи</p>, flag: <Minus /> },
                            { text: <p>Опцион на заключение договора купли продажи монет страны экспортера</p>, flag: <Plus /> },
                            { text: <p>Деньги в национальной валюте экспортера</p>, flag: <Minus /> }
                        ]}
                    />
                </div>
                <div className="top__links">
                    <YellowLink text="Закрывающие документы" link="#">
                        <File />
                    </YellowLink>
                </div>
            </div>
        </div>
    )
}

export default Accountant