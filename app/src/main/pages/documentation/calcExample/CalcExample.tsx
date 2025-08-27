import DropList from "../../../attributes/DropList";
import { YellowButton } from "../../../attributes/Buttons";
import { useNavigate } from "react-router-dom";

const CalcExample = () => {
    const navigation = useNavigate();
    return (
        <div className='docs__calc-example'>
            <div className="docs__top-calc">
                <div className="docs__text-container">
                    <p className="docs__text">
                        Для получения примера рачета по импортно-экспортному контракту с применением национальных валют и GOLDAO укажите валюту отправителя (компании-импортера) и валюту получения (компании-экспортера)
                    </p>
                </div>
                <div className="docs__money-container">
                    <DropList values="Валюта отправителя" choiceLink="#" />
                    <DropList values="Валюта получателя" choiceLink="#" />
                </div>
            </div>
            <div className="docs__bottom-calc">
                <YellowButton name='Получить' onClick={()=> navigation('/pages/docs/presentation/calcexampletwo')} />
            </div>

        </div>
    );
};

export default CalcExample;