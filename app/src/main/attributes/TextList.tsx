import React, { type ReactNode } from 'react';
import { IIcon } from '../svg/Attributes';


interface ITextListProps {
    title: string,
    content: string[],
}
interface ITextListWithIconsProps extends ITextListProps {
    icon?: ReactNode
}

interface ITextListWithNumbersProps extends ITextListProps {
    index: number,
}

interface ITextListWithDodsAndNumbersProps {
    content: { text: ReactNode, flag?: ReactNode }[];
    title: string,
    icon?: ReactNode | number,
    message?: ReactNode;
}

const TextList = ({ title, content, icon }: ITextListWithIconsProps) => {
    return (
        <div className="list">
            <div className="list__title-container">
                <div className="list__title-icon">
                    {icon}
                </div>
                <h3 className="list__title">{title}</h3>
            </div>
            <div className="list__list-container">
                <ul className="list__list">
                    <li className="list__element">
                        <p className="list__text">
                            {content}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const TextListWithNumbers = ({ index, title, content }: ITextListWithNumbersProps) => {
    <div className="list">
        <div className="list__title-container">
            <div className="list__title-number">
                {index}
            </div>
            <h3 className="list__title">{title}</h3>
        </div>
        <div className="list__list-container">
            <ul className="list__list">
                {
                    content.map((v, i) =>
                        <li key={v + i} className="list__element">
                            <p className="list__text">
                                {v}
                            </p>
                        </li>
                    )
                }
            </ul>
        </div>
    </div>
}

const TextListWithDods = ({ title, content }: ITextListProps) => {
    return (
        <div className="list">
            <div className="list__title-container">
                <h3 className="list__title">{title}</h3>
            </div>
            <div className="list__list-container">
                <ul className="list__list">
                    {
                        content.map((v, i) =>
                            <li key={v + i} className="list-dot-element">
                                <p className="text">
                                    {v}
                                </p>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

const TextListWithDodsAndNumbers = ({ title, content, icon, message }: ITextListWithDodsAndNumbersProps) => {
    return (
        <div className="list">
            <div className="list__title-container">
                {icon && typeof icon == 'number' ? <div className="list__title-number">
                    {icon}
                </div> :
                    <div className="list__title-icon">
                        {icon}
                    </div>
                }
                <h3 className="list__title">{title}</h3>
            </div>
            {message && <div className="list__message">
                <div className="list__message-icon">
                    <IIcon />
                </div>
                <div className="list__message-text">
                    {message}
                </div>
            </div>}
            <div className="list__list-container">
                <ul className="list__list">
                    {
                        content.map((v, i) =>
                            <li key={i} className={`list-dot-element ${v.flag ? 'flag' : 'dots'}`}>
                                <p className="text">
                                    {v.text}
                                </p>
                                {v.flag &&
                                    <div className="list__flag">
                                        {v.flag}
                                    </div>
                                }
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default TextList;
export { TextListWithNumbers, TextListWithDods, TextListWithDodsAndNumbers }