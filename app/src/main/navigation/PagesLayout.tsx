import { Outlet } from 'react-router-dom';
import '../../styles/docs.scss'

const PagesLayout = () => {
    return (
        <>
            <div className='main-page__page-name-container'>
                <h2 className='main-page__page-name'>Page Name</h2>
            </div>
            <div className="main-page__content-container">
                <Outlet />
            </div>
        </>
    );
};

export default PagesLayout;