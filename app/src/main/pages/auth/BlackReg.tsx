import { YellowButton } from '../../attributes/Buttons';
import CheckBox from '../../attributes/CheckBox';

const BlackReg = () => {
    return (
        <div className="reg">
            <div className="reg__top">
                <div className="reg__inputs-container">
                    <div className={`label-input__input`}>
                        <input disabled type="text" id='one' defaultValue={'TelegrammID'} />
                    </div>
                </div>
                <div className="reg__inputs-container">
                    <div className={`label-input__input none black`}>
                        <input type="text" id='one' placeholder="Имя*" />
                    </div>
                    <div className={`label-input__input none black`}>
                        <input type="text" id='one' placeholder="E-mail*" />
                    </div>
                    <div className={`label-input__input none black`}>
                        <input type="text" id='one' placeholder="Номер телефона*" />
                    </div>
                </div>
                <div className="reg__inputs-container">
                    <CheckBox text='Я принимаю Условия использования сервиса GOLDAO и даю согласие на обработку персональных данных' />
                </div>
            </div>
            <div className="reg__bottom">
                <YellowButton name="Регистрация" />
            </div>
        </div>
    );
};

export default BlackReg;