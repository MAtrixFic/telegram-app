import { AngleArrow, IIcon } from "../svg/Attributes";
import { useNavigate } from "react-router-dom";

interface IDropListProps {
    name: string,
    choiceLink: string,
}

const DropList = ({ name, choiceLink }: IDropListProps) => {
    const navigate = useNavigate();

    function NavigateToChoice() {
        navigate(choiceLink);
    }

    return (
        <button className="drop-list" onClick={NavigateToChoice}>
            <div className="drop-list__value-block">
                {name}
            </div>
            <div className="drop-list__arrow-block">
                <AngleArrow />
            </div>
        </button>
    );
};

interface IDropListWithTitleProps extends IDropListProps {
    label: string,
    message?: string
}

const DropListWithTitle = ({ label, message, name, choiceLink }: IDropListWithTitleProps) => {
    return (
        <div className="drop-list__with-title">
            <div className="drop-list__label">
                <label htmlFor="#one">
                    {label}
                </label>
            </div>
            <DropList name={name} choiceLink={choiceLink} />
            {message && <div className="drop-list__message">
                <div className="drop-list__message-icon">
                    <IIcon />
                </div>
                <div className="drop-list__message-text">
                    {message}
                </div>
            </div>}
        </div>
    )
}

export default DropList;
export { DropListWithTitle }