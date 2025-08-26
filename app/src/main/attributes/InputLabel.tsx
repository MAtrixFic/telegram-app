import { IIcon } from '../svg/Attributes';

interface IInputLabelProps {
    label: string
    message?: string | null,
    mode: 'yellow' | 'white' | 'grey',
    value: string,
    type: 'bold' | 'none'
}

const InputLabel = ({ label, message, mode, value, type }: IInputLabelProps) => {
    return (
        <div className="label-input">
            <div className="label-input__label">
                <label htmlFor="#one">
                    {label}
                </label>
            </div>
            <div className={`label-input__input ${mode} ${type}`}>
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