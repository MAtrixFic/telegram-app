import { useNavigate } from "react-router-dom";
import { YellowButton } from "../../attributes/Buttons"
import { DropListWithTitle } from "../../attributes/DropList";
import InputLabel from "../../attributes/InputLabel";

const CalcOne = () => {
    const navigate = useNavigate();

    return (
        <div className="calc">
            <div className="top">
                <DropListWithTitle
                    label="Валюта отправки"
                    values="TRY"
                    choiceLink="#"
                    message="Валюта отправки - это валюта отправителя платежа" />
                <DropListWithTitle
                    label="Валюта получения"
                    values="RUB"
                    choiceLink="#"
                    message="Валюта отправки - это валюта отправителя платежа" />
                <DropListWithTitle
                    label="Направление расчета"
                    values="Хочу получить"
                    choiceLink="#"
                    message="При выборе “Хочу отправить” расчет будет произведен по сумме получения платежа" />
                <InputLabel type='none' label="Сумма" value="2000" mode="white" />
            </div>
            <div className="bottom">
                <YellowButton name="Рассчитать" onClick={()=> navigate('/pages/calc/two')}/>
            </div>
        </div>
    );
};

export default CalcOne;