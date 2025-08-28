
interface ICheckBoxProps {
    text: string
}

const CheckBox = ({ text }: ICheckBoxProps) => {
    return (
        <div className="check-box">
            <label className="check-box__label">
                <input type="checkbox" className="check-box__input" />
                <span className="check-box__text">
                    {text}
                </span>
            </label>
        </div>
    );
};

export default CheckBox;