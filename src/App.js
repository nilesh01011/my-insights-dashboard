import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyInsights from './pages/MyInsights';
import NewInsights from './pages/NewInsights';
import InsightDetails from './pages/InsightDetails';
import InsightSubmit from './pages/InsightSubmit';
// import SuccessfulMyInsight from './pages/SuccessfulMyInsight';
import SummaryDetails from './pages/SummaryDetails';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/my-insights' element={<MyInsights />}></Route>
        <Route path='/interaction-details' element={<NewInsights />}></Route>
        <Route path='/insight-details' element={<InsightDetails />}></Route>
        <Route path='/insight-details-submit' element={<InsightSubmit />}></Route>
        {/* <Route path='/my-insights' element={<SuccessfulMyInsight />}></Route> */}
        <Route path='/summary-my-insights' element={<SummaryDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
