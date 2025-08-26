import { YellowButton } from "../../../attributes/Buttons";

const CalcExampleTwo = () => {
    return (
        <div className='docs__calc-example'>
            <div className="docs__top-calc">
                <div className="docs__text-container">
                    <p className="text">
                        Пример расчета по внешнеэкономическому контракту с прменением валют
                    </p>
                </div>
                <div className="docs__money-list-container">
                    <ul className="doted-list">
                        <li className="list-dot-element">
                            <p className="text">
                                валюта компании-покупателя (импортера): <span id='bold'>{'<RUB>'}</span>
                            </p>
                        </li>
                        <li className="list-dot-element">
                            <p className="text">
                                валюта компании-продавца (экспортера): <span id='bold'>{'<EUR>'}</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="docs__money-memo">
                    <ul className="docs__money-memo-list">
                        <li className="docs__money-memo-element">
                            <p className="text text__yellow">
                                <span id='bold'>GOLDAO memo:</span> 10.000.000,00 RUB -10.000.000,00 RUB (rus)
                            </p>
                        </li>
                        <li className="docs__money-memo-element">
                            <p className="text text__yellow">
                                <span id='bold'>GOLDAO memo:</span> 10.000.000,00 RUB -10.000.000,00 RUB (eng)
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="docs__bottom-calc">
                <YellowButton name='Узнать больше'/>
            </div>

        </div>
    )
}

export default CalcExampleTwo