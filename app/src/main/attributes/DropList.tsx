import { AngleArrow, IIcon } from "../svg/Attributes";
import { useNavigate } from "react-router-dom";

interface IDropListProps {
    name: string,
    choiceLink: string,
}

const DropList = ({ name, choiceLink }: IDropListProps) => {
    const naavigate = useNavigate();

    function NavigateToChoice() {
        naavigate(choiceLink);
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

interface IDropListWithTitleProps {
    label: string,
    message: string
}

const DropListWithTitle = ({ label, message }: IDropListWithTitleProps) => {
    return (
        <div className="drop-list__with-title">
            <div className="drop-list__label">
                <label htmlFor="#one">
                    {label}
                </label>
            </div>
            <DropList name='gfsg' choiceLink="#"/>
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