import { useNavigate } from "react-router-dom";
import { YellowButton } from "../../attributes/Buttons"
import { DropListWithTitle } from "../../attributes/DropList";
import InputLabel from "../../attributes/InputLabel";

const CalcOne = () => {
    const navigate = useNavigate();

    return (
        <div className="calc">
            <div className="top">
                <div className="top__inputs">
                    <DropListWithTitle
                        label="Валюта отправки"
                        values={["TRY"]}
                        message="Валюта отправки - это валюта отправителя платежа" dropListName={""} />
                    <DropListWithTitle
                        label="Валюта получения"
                        values={["RUB"]}
                        message="Валюта отправки - это валюта отправителя платежа" dropListName={""} />
                    <DropListWithTitle
                        label="Направление расчета"
                        values={["Хочу получить"]}
                        message="При выборе “Хочу отправить” расчет будет произведен по сумме получения платежа" dropListName={""} />
                    <InputLabel type='none' label="Сумма" value="2000" mode="white" />
                </div>
            </div>
            <div className="bottom">
                <YellowButton name="Рассчитать" onClick={() => navigate('/pages/calc/two')} />
            </div>
        </div>
    );
};

export default CalcOne;