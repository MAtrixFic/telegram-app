import { Outlet } from 'react-router-dom';
import { useGetPageTitle } from '../attributes/PageTitle/usePageTitle';
import '../../styles/docs.scss'
import '../../styles/calc.scss'

const PagesLayout = () => {
    const { title } = useGetPageTitle();
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