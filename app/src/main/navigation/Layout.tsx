import '../../styles/layout.scss'
import '../../styles/reg.scss'
import { Outlet } from 'react-router-dom';
import { Dots, BackArrow } from '../svg/Main';
import { useNavigate } from 'react-router-dom';


const Layout = () => {
    const navigate = useNavigate();

    return (
        <>
            <header className="header">
                <div className="header__left">
                    <div className="header__nav-back-container">
                        <button className='header__btn header__btn-back' onClick={() => navigate(-1)}>
                            <BackArrow />
                        </button>

                    </div>
                    <div className="header__name-container">
                        gd_club
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__three-dots-container">
                        <Dots />
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;