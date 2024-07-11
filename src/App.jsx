import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import LeftBorderImage from './Component/Border/LeftBorderImage'
import RightBorderImage from './Component/Border/RightBorderImage'
import LandingPage from './Component/LandingPage/LandingPage'
import './App.css'
import Footer from './Component/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Journey from './Pages/Journey'
import WhereWeAre from './Component/WhereWeAre/WhereWeAre'
import WeDo from './Component/WeDo/WeDo'
import OneHome from './Component/OneHome/OneHome'
import ChairmansMessage from './Pages/ChairmansMessage'
import CEOMessage from './Pages/CEOMessage'
import FinancialHigh from './Component/FinancialHigh/FinancialHigh'
import FavourableEnv from './Pages/FavourableEnv'
import BuildingStrength from './Pages/BuildingStrength'
import ValueCreation from './Pages/ValueCreation'
import DigitalTechnology from './Pages/DigitalTechnology'
import EsgCommitments from './Pages/EsgCommitments'
import Empowered from './Component/Empowered/Empowered'
import Championingfuture from './Downwardpages/Championingfuture'
import Fostering from './Component/Fostering/Fostering'
import RobustGov from './Component/RobustGov/RobustGov'
import RiskManagement from './Pages/RiskManagement'
import BOD from './Pages/BOD'
import Awards from './Pages/Awards'
import WhoWeAre from './Component/WhoWeAre/WhoWeAre';


const App = ({ children }) => {
    return (
        <>
         <BrowserRouter>
         <Navbar />
        <div >
           
              
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/WhoWe' element={<WhoWeAre/>}/>
                    <Route path='/journey' element={<Journey/>} />
                    <Route path='/where' element={<WhereWeAre/>} />
                    <Route path='/wedo' element={<WeDo />} />
                    <Route path='/onehome' element={<OneHome />} />
                    <Route path='/chairman-msg' element={<ChairmansMessage/>} />
                    <Route path='/ceo-msg' element={<CEOMessage/>} />
                    <Route path='/financial-highlights' element={<FinancialHigh/>} />
                    <Route path='/favourable' element={<FavourableEnv/>} />
                    <Route path='/building-strength' element={<BuildingStrength/>} />
                    <Route path='/value-creation' element={<ValueCreation/>} />
                    <Route path='/digital-tech' element={<DigitalTechnology/>} />
                    <Route path='/esg-commitments' element={<EsgCommitments/>} />
                    <Route path='/empowered' element={<Empowered/>} />
                    <Route path='/championing' element={<Championingfuture/>} />
                    <Route path='/fostering' element={<Fostering/>} />
                    <Route path='/robust' element={<RobustGov/>} />
                    <Route path='/risk-management' element={<RiskManagement/>} />
                    <Route path='/bod' element={<BOD/>} />
                    <Route path='/awards' element={<Awards/>} />
                    <Route path='/who-we-are' element={<WhoWeAre/>} />
                    {children}
                </Routes>
                <Footer />
            
        </div>
        </BrowserRouter>
        </>
    );
};

export default App