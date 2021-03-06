import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import ChurchGatheringsPage from './Pages/ChurchGatherings';
import ContactPage from './Pages/ContactPage';
import LeadershipAndStaffPage from './Pages/LeadershipAndStaff';
import OurMissionPage from './Pages/OurMission';
import WhatWeBelievePage from './Pages/WhatWeBelieve';
import WhyFormationChurchPage from './Pages/WhyFormationChurch';
import Events from './Pages/Events';



function App() {
  return (
    <div className="App">
        <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='whyformationchurch' element={<WhyFormationChurchPage />} />
                <Route path='leadershipandstaff' element={<LeadershipAndStaffPage />} />
                <Route path='whatwebelieve' element={<WhatWeBelievePage />} />
                <Route path='ourmission' element={<OurMissionPage />} />
                <Route path='churchgatherings' element={<ChurchGatheringsPage />} />
                <Route path='contactpage' element={<ContactPage />} />
                <Route path='events' element={<Events />} />
            </Routes>
        <Footer />
    </div>
  );
};

export default App;
