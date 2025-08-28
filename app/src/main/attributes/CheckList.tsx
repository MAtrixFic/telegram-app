import { type ReactNode } from 'react';
import { YellowChecker } from '../svg/Attributes';
interface ICheckListProps {
    text: ReactNode,
    title: string
}

const CheckList = ({ title, text }: ICheckListProps) => {
    return (
        <div className="check-list">
            <div className="check-list__title-block">
                <h4 className="check-list__title">
                    <YellowChecker />
                    {title}
                </h4>
            </div>
            <div className="check-list__text-block">
                {text}
            </div>
        </div>
    );
};

export default CheckList;