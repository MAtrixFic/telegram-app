import type { ReactNode } from "react";
import { DoubleArrowBottom } from "../svg/Attributes";
import { Link } from "react-router-dom";

interface IButtonProps {
    name: string,
    onClick?: (<T>(params?: T) => void);
}

interface IButtonWithIcon extends IButtonProps {
    icon: ReactNode
}

interface IButtonWithIconAndTitle extends IButtonWithIcon {
    title: ReactNode
}

interface IYellowLinkProps {
    name: string,
    link: string,
    additioanlStype?: string
}


const YellowButton = ({ name, onClick }: IButtonProps) => {
    return (
        <button className="btn btn__yellow" onClick={() => onClick ? onClick() : ''}>
            {name}
        </button>
    )
}

const YellowLink = ({ name, link, additioanlStype }: IYellowLinkProps) => {
    return (
        <Link to={link} className={`link ${additioanlStype}`}>
            {name}
        </Link>
    )
}


const YellowBorderButton = ({ name, onClick }: IButtonProps) => {
    return (
        <button className="btn btn__yellow-border" onClick={() => onClick ? onClick() : ''}>
            {name}
        </button>
    )
}

const ButtonWithIcon = ({ name, onClick, icon }: IButtonWithIcon) => {
    return (
        <button className="btn btn__with-icon" onClick={() => onClick ? onClick() : ''}>
            <div className="btn__icon-container">
                {icon}
            </div>
            <div className="btn__text-container">
                {name}
            </div>
        </button >

    )
}

const ButtonWithIconAndTitle = ({ name, onClick, icon, title }: IButtonWithIconAndTitle) => {
    return (
        <div className="button">
            <div className="button__title-container">
                <div className="button__icon-block">
                    <DoubleArrowBottom />
                </div>
                <div className="button__title-block">
                    <h3 className="button__title">{title}</h3>
                </div>
            </div>
            <button className="btn btn__with-icon" onClick={() => onClick ? onClick() : ''}>
                <div className="btn__icon-container">
                    {icon}
                </div>
                <div className="btn__text-container">
                    {name}
                </div>
            </button >
        </div>

    )
}

export { YellowButton, YellowBorderButton, ButtonWithIcon, ButtonWithIconAndTitle, YellowLink }