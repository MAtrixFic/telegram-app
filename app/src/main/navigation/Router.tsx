import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import PagesLayout from './PagesLayout';
import Layout from './Layout';
import DocsMain from '../pages/documentation/DocsMain';
import Presentation from '../pages/documentation/Presentation';
import CalcExample from '../pages/documentation/calcExample/CalcExample';
import CalcExampleTwo from '../pages/documentation/calcExample/CalcExampleTwo';
import ExchangeRates from '../pages/exchangeRates/ExchangeRates';
import ExchangeRatesTwo from '../pages/exchangeRates/ExchangeRatesTwo';
import CalcOne from '../pages/calculation/CalcOne';
import CalcTwo from '../pages/calculation/CalcTwo';
import AboutProtection from '../pages/calculation/AboutProtection';
import AboutReportWithCompany from '../pages/calculation/AboutReportWithCompany';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Main />} />
                        <Route path='/pages' element={<PagesLayout />}>
                            <Route path='docs' element={<DocsMain />} />
                            <Route path='docs/presentation' element={<Presentation />} />
                            <Route path='docs/presentation/calcexample' element={<CalcExample />} />
                            <Route path='docs/presentation/calcexampletwo' element={<CalcExampleTwo />} />
                            <Route path='money/one' element={<ExchangeRates />} />
                            <Route path='money/two' element={<ExchangeRatesTwo />} />
                            <Route path='calc/one' element={<CalcOne />} />
                            <Route path='calc/two' element={<CalcTwo />} />
                            <Route path='calc/aboutprotection' element={<AboutProtection />} />
                            <Route path='calc/aboutreportwithcompany' element={<AboutReportWithCompany />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;