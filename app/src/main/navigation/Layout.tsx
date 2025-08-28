import '../../styles/layout.scss'
import '../../styles/reg.scss'
import  '../../styles/attributes.scss'


import { Outlet } from 'react-router-dom';
import PageTitleContext from '../attributes/PageTitle/TitleContext';
import Header from './Header';
const Layout = () => {
    return (
        <>
            <PageTitleContext >
                <Header />
                <main>
                    <Outlet />
                </main>
            </PageTitleContext>
        </>
    )
}

export default Layout;