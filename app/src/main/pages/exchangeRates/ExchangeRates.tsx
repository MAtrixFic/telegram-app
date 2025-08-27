import { DropListWithTitle } from "../../attributes/DropList";
import { YellowButton } from "../../attributes/Buttons";

import '../../../styles/exchange-rates.scss'
import { useNavigate } from "react-router-dom";

const ExchangeRates = () => {
    const navigate = useNavigate();

    return (
        <div className='exchange-rates'>
            <div className="top">
                <ul className="exchange-rates__money-list">
                    <DropListWithTitle values={['v1', 'v2']} dropListName="rates" />
                    <DropListWithTitle values={['v1', 'v2']} dropListName="rates" />
                </ul>
            </div>
            <div className="bottom">
                <YellowButton name="Далее" onClick={() => navigate('/pages/money/two')} />
            </div>
        </div>
    );
};

export default ExchangeRates;