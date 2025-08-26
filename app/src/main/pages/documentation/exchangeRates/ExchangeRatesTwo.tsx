import { YellowBorderButton, YellowButton } from '../../../attributes/Buttons';
import InputLabel from '../../../attributes/InputLabel';

const ExchangeRatesTwo = () => {
    return (
        <div className='exchange-rates'>
            <div className="top">
                <div className="exchange-rates__pre">
                    <InputLabel label='Валюта отправки' message={null} yellow={false} value='' />
                    <InputLabel label='Валюта получения' message={null} yellow={false} value='' />
                </div>
                <div className="exchange-rates__finally">
                    <InputLabel label='98,1234 RUB / 1USD' message={'Курс валют в GOLDAO с учетом комиссий ифнраструтуры и дисконта к официальному курсу'} yellow={true} value='' />
                    <InputLabel label='82,1234 RUB / 1USD' message={'Официальный курс валют рассчитывается по цене золота на LBME'} yellow={false} value='' />
                </div>
            </div>
            <div className="bottom">
                <YellowBorderButton name="Главное меню" />
                <YellowButton name="Калькулятор" />
            </div>
        </div>
    );
};

export default ExchangeRatesTwo;