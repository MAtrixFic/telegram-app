import { useNavigate } from 'react-router-dom';
import { BackArrow, Dots } from '../svg/Main';

const Header = () => {
    const navigate = useNavigate();
    return (
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
    );
};

export default Header;