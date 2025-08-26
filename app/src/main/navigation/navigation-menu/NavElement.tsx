import React from 'react';
import { Link } from 'react-router-dom';

interface INavElementProps {
    children: React.ReactNode,
    title: string,
    link: string,
}

const NavElement = ({ children, title, link }: INavElementProps) => {
    return (
        <ul className="nav-element">
            <Link className='nav-element__link' to={`/pages/${link}`}>
                <div className="nav-element__logo-containet">
                    {children}
                </div>
                <div className="nav-element__title-containet">
                    <h1 className="nav-element__title">
                        {title}
                    </h1>
                </div>
            </Link>
        </ul >
    );
};

export default NavElement;