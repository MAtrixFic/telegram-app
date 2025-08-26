import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import PagesLayout from './PagesLayout';
import Layout from './Layout';
import DocsMain from '../pages/documentation/DocsMain';
import Presentation from '../pages/documentation/Presentation';
import CalcExample from '../pages/documentation/calcExample/CalcExample';
import CalcExampleTwo from '../pages/documentation/calcExample/CalcExampleTwo';
import ExchangeRates from '../pages/documentation/exchangeRates/ExchangeRates';
import ExchangeRatesTwo from '../pages/documentation/exchangeRates/ExchangeRatesTwo';

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
                            <Route path='exchange-rates/one' element={<ExchangeRates />} />
                            <Route path='exchange-rates/two' element={<ExchangeRatesTwo />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;