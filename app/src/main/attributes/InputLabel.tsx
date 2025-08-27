import type { ReactNode } from 'react';
import { IIcon } from '../svg/Attributes';

interface IInputLabelProps {
    label?: string
    message?: string | null,
    mode: 'yellow' | 'white' | 'grey' | 'yellow-white',
    value: string,
    type: 'bold' | 'none',
    icon?: ReactNode
}

const InputLabel = ({ label, message, mode, value, type, icon }: IInputLabelProps) => {
    return (
        <div className="label-input">
            <div className="label-input__label">
                {icon && <div className="label-input__icon-container">
                    {icon}
                </div>}
                {label && <label htmlFor="#one">
                    {label}
                </label>}
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