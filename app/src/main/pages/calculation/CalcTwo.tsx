import { useNavigate } from "react-router-dom";
import { YellowButton } from "../../attributes/Buttons"
import InputLabel from "../../attributes/InputLabel";
import { YellowLink } from "../../attributes/Text";
import { Protect, Calculate, Time } from "../../svg/Links";

const CalcTwo = () => {
    const navigate = useNavigate();

    return (
        <div className="calc">
            <div className="top">
                <InputLabel type='bold' label='Сумма и валюта отправки' message={null} mode={'yellow'} value='2000 TRY' />
                <InputLabel type='bold' label='Сумма и валюта получения' message={null} mode={'yellow'} value='2000 RUB' />
                <InputLabel type='bold' label='Курс валют с учетом комиссий и дисконта' message={null} mode={'yellow'} value='98,1234 RUB / 1USD' />
                <InputLabel type='bold' label='Официальный курс валют' message={null} mode={'yellow'} value='82,1234 RUB / 1USD' />
                <div className="top__links">
                    <YellowLink text='Как происходит расчет?' link='#'>
                        <Calculate />
                    </YellowLink>
                    <YellowLink text='Обеспечение безопасности' link='#' >
                        <Protect />
                    </YellowLink>
                    <YellowLink text='Скорость проведения расчета' link='#' >
                        <Time />
                    </YellowLink>
                </div>
            </div >
            <div className="bottom">
                <YellowButton name="Скачать предложение" onClick={() => navigate('/pages/calc/two')} />
            </div>
        </div >
    );
};

export default CalcTwo;