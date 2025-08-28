import { Outlet } from 'react-router-dom';
import { useGetPageTitle, useSetPageTitle } from '../attributes/PageTitle/usePageTitle';
import { PagesInfo } from '../others/PagesInfo';
import { useLocation } from 'react-router-dom';
import '../../styles/docs.scss'
import '../../styles/calc.scss'
import { type ReactNode } from 'react';

const PagesLayout = () => {
    const location = useLocation();
    const { title } = useGetPageTitle();
    useSetPageTitle(PagesInfo[findKeyByValue(PagesInfo, 'link', location.pathname) as keyof typeof PagesInfo].title)

    function findKeyByValue(obj: any, property: string, value: ReactNode) {
        for (const key in obj) {
            if (obj[key][property] == value) {
                return key;
            }
        }
        return null;
    }

    return (
        <>
            <div className='main-page__page-name-container'>
                <h2 className='main-page__page-name'>{title}</h2>
            </div>
            <div className="main-page__content-container">
                <Outlet />
            </div>
        </>
    );
};

export default PagesLayout;