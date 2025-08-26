import { useNavigate } from 'react-router-dom';
import { YellowBorderButton, YellowButton } from '../../attributes/Buttons';
import InputLabel from '../../attributes/InputLabel';

const ExchangeRatesTwo = () => {
    const navigate = useNavigate();

    return (
        <div className='exchange-rates'>
            <div className="top">
                <div className="exchange-rates__pre">
                    <InputLabel type='none' label='Валюта отправки' message={null} mode={'grey'} value='' />
                    <InputLabel type='none' label='Валюта получения' message={null} mode={'grey'} value='' />
                </div>
                <div className="exchange-rates__finally">
                    <InputLabel type='bold' label='98,1234 RUB / 1USD' message={'Курс валют в GOLDAO с учетом комиссий ифнраструтуры и дисконта к официальному курсу'} mode={'yellow'} value='' />
                    <InputLabel type='bold' label='82,1234 RUB / 1USD' message={'Официальный курс валют рассчитывается по цене золота на LBME'} mode={'grey'} value='' />
                </div>
            </div>
            <div className="bottom">
                <YellowBorderButton name="Главное меню" onClick={() => navigate('/')} />
                <YellowButton name="Калькулятор" onClick={() => navigate('/pages/calc/one')} />
            </div>
        </div>
    );
};

export default ExchangeRatesTwo;