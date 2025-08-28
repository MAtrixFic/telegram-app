import { TextListWithDodsAndNumbers } from "../../attributes/TextList"

const ContractsAgreementsApplication = () => {
    return (
        <div className="about-doc">
            <div className="top">
                <div className="top__lists">
                    <TextListWithDodsAndNumbers
                        title="Отправка денег (получение опциона)"
                        icon={1}
                        content={[
                            { text: <p>Компания-покупатель <span id='bold'>{'(импортер)'}</span> и компания-участник GOLDAO в стране импортера подпишут <span id='bold'>{'опцион на заключение договора купли-продажи монет'}</span></p> },
                            { text: <p>Компания-покупатель <span id='bold'>{'(импортер)'}</span> и компания-участник GOLDAO в стране экспортера подпишут <span id='bold'>{'договор мены'}</span> опционов на заключение договоров купли-продажи</p> }
                        ]}
                    />
                    <TextListWithDodsAndNumbers
                        title="Расчет по договору (применение опциона)"
                        icon={2}
                        content={[
                            { text: <p>Компания-покупатель <span id='bold'>{'(импортер)'}</span> и компания-продавец подпишут <span id='bold'>{'договор уступки прав и обязанностей'}</span> по опциону на заключение договора купли продажи монет (договор цессии)</p> },
                        ]}
                    />
                    <TextListWithDodsAndNumbers
                        title="Получение денег (возврат опциона)"
                        icon={3}
                        content={[
                            { text: <p> Компания-продавец <span id='bold'>{'(экспортер)'}</span> и компания-участник GOLDAO в стране экспортера подапишут <span id='bold'>{'соглашение об отказе от исполнения опциона'}</span></p> },
                        ]}
                    />
                </div>
            </div >
        </div >
    )
}

export default ContractsAgreementsApplication