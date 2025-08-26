import '../../styles/layout.scss'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header className="header">
                <div className="header__left">
                    <div className="header__nav-back-container">
                        -
                    </div>
                    <div className="header__name-container">
                        gd_club
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__three-dots-container">
                        . . .
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