import DropList from "../../../attributes/DropList";
import { YellowButton } from "../../../attributes/Buttons";

import '../../../../styles/exchange-rates.scss'
import { IIcon } from "../../../svg/Attributes";

import { DropListWithTitle } from "../../../attributes/DropList";

const ExchangeRates = () => {
    return (
        <div className='exchange-rates'>
            <div className="top">
                <ul className="exchange-rates__money-list">
                    <DropList name="Валюта отправителя" choiceLink="#" />
                    <DropList name="Валюта получателя" choiceLink="#" />
                </ul>
                <DropListWithTitle label="" message=""/>
                <div className="yellow-text">
                    <div className="yellow-text__icon">
                        <IIcon />
                    </div>
                    <div className="yellow-text__text">
                        <p className="text text__yellow">text</p>
                    </div>
                </div>

                <div className="list">
                    <div className="list__title-container">
                        <div className="list__title-icon">
                            <IIcon />
                        </div>
                        <h3 className="list__title">list title</h3>
                    </div>
                    <div className="list__list-container">
                        <ul className="list__list">
                            <li className="list__element">
                                <p className="list__text">
                                    list text text text text text text
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="list">
                    <div className="list__title-container">
                        <div className="list__title-number">
                            3
                        </div>
                        <h3 className="list__title">list title</h3>
                    </div>
                    <div className="list__list-container">
                        <ul className="list__list">
                            <li className="list__element">
                                <p className="list__text">
                                    list text text text text text text
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>



            </div>
            <div className="bottom">
                <YellowButton name="Далее" />
            </div>
        </div>
    );
};

export default ExchangeRates;