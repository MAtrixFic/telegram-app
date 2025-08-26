import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ITextProps {
    children?: ReactNode,
    text: string,

}

const YellowText = ({ children, text }: ITextProps) => {
    return (
        <div>
            <div className="yellow-text">
                <div className="yellow-text__icon">
                    {children}
                </div>
                <div className="yellow-text__text">
                    <p className="text text__yellow">{text}</p>
                </div>
            </div>
        </div>
    );
};

interface IYellowLinkProps extends ITextProps {
    link: string;
}

const YellowLink = ({ children, text, link }: IYellowLinkProps) => {
    return (
        <Link to={link}>
            <div className="yellow-text">
                <div className="yellow-text__icon">
                    {children}
                </div>
                <div className="yellow-text__text">
                    <p className="text text__yellow">{text}</p>
                </div>
            </div>
        </Link>
    );
};

export { YellowText, YellowLink };