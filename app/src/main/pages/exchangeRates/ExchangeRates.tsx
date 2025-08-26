import DropList from "../../attributes/DropList";
import { YellowButton } from "../../attributes/Buttons";

import '../../../styles/exchange-rates.scss'
import { useNavigate } from "react-router-dom";

const ExchangeRates = () => {
    const navigate = useNavigate();

    return (
        <div className='exchange-rates'>
            <div className="top">
                <ul className="exchange-rates__money-list">
                    <DropList name="Валюта отправителя" choiceLink="#" />
                    <DropList name="Валюта получателя" choiceLink="#" />
                </ul>
            </div>
            <div className="bottom">
                <YellowButton name="Далее" onClick={() => navigate('/pages/money/two')} />
            </div>
        </div>
    );
};

export default ExchangeRates;