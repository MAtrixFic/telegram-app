import { IIcon } from '../svg/Attributes';

interface IInputLabelProps {
    label: string
    message: string | null,
    yellow: boolean;
    value: string,
}

const InputLabel = ({ label, message, yellow, value }: IInputLabelProps) => {
    return (
        <div className="label-input">
            <div className="label-input__label">
                <label htmlFor="#one">
                    {label}
                </label>
            </div>
            <div className={`label-input__input ${yellow ? 'label-input__yellow' : ''}`}>
                <input type="text" id='one' defaultValue={value} />
            </div>
            {message && <div className="label-input__message">
                <div className="label-input__message-icon">
                    <IIcon />
                </div>
                <div className="label-input__message-text">
                    {message}
                </div>
            </div>}
        </div>
    );
};

export default InputLabel;