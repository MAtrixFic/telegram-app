import React from 'react';
import { Link } from 'react-router-dom';

interface INavElementProps {
    children: React.ReactNode,
    title: string,
    link: string,
    text: string,
    withPages?: boolean,
}

const NavElement = ({ children, title, link, text, withPages = true }: INavElementProps) => {
    return (
        <ul className="nav-element">
            <Link className='nav-element__link' to={withPages ? `/pages/${link}` : link}>
                <div className="nav-element__logo-containet">
                    {children}
                </div>
                <div className="nav-element__title-containet">
                    <h1 className="nav-element__title">
                        {title}
                    </h1>
                    <p className='nav-element__text'>
                        {text}
                    </p>
                </div>
            </Link>
        </ul >
    );
};

export default NavElement;