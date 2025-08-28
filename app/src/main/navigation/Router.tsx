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
import CalculateSteps from '../pages/about/CalculateSteps';
import MakeCalculate from '../pages/about/MakeCalculate';
import ContractsAndAgreements from '../pages/about/ContractsAndAgreements';
import Documentation from '../pages/last-docs/Documentation';
import ReportExample from '../pages/last-docs/ReportExample';
import ReportExampleTwo from '../pages/last-docs/ReportExampleTwo';
import TemplateReport from '../pages/last-docs/TemplateReport';
import GolderCulc from '../pages/calculation/GolderCalculator.tsx/GolderCalc';
import GoldenCalcTwo from '../pages/calculation/GolderCalculator.tsx/GolderCalcTwo';
import UploadingOffer from '../pages/last-docs/UploadingOffer';
import UploadingOfferTwo from '../pages/last-docs/UploadingOfferTwo';
import YellowReg from '../pages/auth/YellowReg';

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

                            {/* неопределено */}
                            <Route path='calc/one' element={<CalcOne />} />
                            <Route path='calc/two' element={<CalcTwo />} />
                            <Route path='reg/yellow' element={<YellowReg />} />
                            <Route path='calc/aboutprotection' element={<AboutProtection />} />
                            <Route path='calc/aboutreportwithcompany' element={<AboutReportWithCompany />} />
                            <Route path='calc/stepreport' element={<StepReport />} />
                            {/* неопределено */}

                            <Route path='golden-calc/one' element={<GolderCulc />} />
                            <Route path='golden-calc/two' element={<GoldenCalcTwo />} />
                            <Route path='last-docs/uploadoffer/one' element={<UploadingOffer />} />
                            <Route path='last-docs/uploadoffer/two' element={<UploadingOfferTwo />} />

                            {/* неопределено */}
                            <Route path='calc/contractsagreementsapplication' element={<ContractsAgreementsApplication />} />
                            {/* неопределено */}
                            
                            <Route path='settings' element={<Settings />} />

                            <Route path='about' element={<About />} />
                            <Route path='about/calculatesteps' element={<CalculateSteps />} />
                            <Route path='about/makecalculate' element={<MakeCalculate />} />
                            <Route path='calc/usesections' element={<UseSections />} />
                            <Route path='calc/calculationprocedure' element={<CalculationProcedure />} />
                            <Route path='about/contractsandagreements' element={<ContractsAndAgreements />} />
                            <Route path='calc/accountant' element={<Accountant />} />
                            <Route path='calc/closeddocument' element={<ClosedDocument />} />

                            <Route path='last-docs' element={<Documentation />} />
                            <Route path='last-docs/reportexample/one' element={<ReportExample />} />
                            <Route path='last-docs/reportexample/two' element={<ReportExampleTwo />} />
                            <Route path='last-docs/templatereport/two' element={<TemplateReport />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;