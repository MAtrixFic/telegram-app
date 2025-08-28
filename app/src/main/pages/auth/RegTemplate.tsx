import Message from '../../attributes/Message';
import { Danger } from '../../svg/Attributes';
import { YellowButton } from '../../attributes/Buttons';

const RegTemplate = () => {
    return (
        <div className="reg">
            <div className="reg__top">
                <div className={`label-input__input none yellow-white`}>
                    <input type="text" id='one' placeholder="Имя*" />
                </div>
                <div className={`label-input__input none yellow-white`}>
                    <input type="text" id='one' placeholder="Фамилия*" />
                </div>
                <div className={`label-input__input none yellow-white`}>
                    <input type="text" id='one' placeholder="Номер телефона*" />
                </div>
                <div className={`label-input__input none yellow-white`}>
                    <input type="text" id='one' placeholder="E-mail*" />
                </div>
            </div>
            <div className="reg__bottom">
                <Message icon={<Danger />} message="Нажимая кнопку «продолжить», я подтверждаю свое согласие на обработку своих персональнрых данных" />
                <Message icon={<Danger />} message="GOLDAO обеспечивает конфиденциальность: передача персональных данных возможно только компаниям, входящим в инфраструктуру GOLDAO с соблюдением законодательствам и строгих стандартов безопасности" />
                <YellowButton name="Продолжить" />
            </div>
        </div>
    );
};

export default RegTemplate;