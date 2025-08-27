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
import StepReport from '../pages/calculation/StepReport';
import UseSections from '../pages/calculation/UseSections';
import Accountant from '../pages/calculation/Accountant';
import ContractsAgreementsApplication from '../pages/calculation/ContractsAgreementsApplication';
import CalculationProcedure from '../pages/calculation/CalculationProcedure';
import ClosedDocument from '../pages/calculation/ClosedDocument';
import Settings from '../pages/settings/Settings';
import About from '../pages/about/About';

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
                            <Route path='calc/stepreport' element={<StepReport />} />
                            <Route path='calc/usesections' element={<UseSections />} />
                            <Route path='calc/accountant' element={<Accountant />} />
                            <Route path='calc/contractsagreementsapplication' element={<ContractsAgreementsApplication />} />
                            <Route path='calc/calculationprocedure' element={<CalculationProcedure />} />
                            <Route path='calc/closeddocument' element={<ClosedDocument />} />
                            <Route path='settings' element={<Settings />} />
                            <Route path='about' element={<About />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;