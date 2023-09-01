import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from './navbar/Navbar';
import Routers from './routers/Routers';
function App() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  return (
    <div className="App">
      <div className="noise"></div>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} isMobile={isMobile} setIsMobile={setIsMobile} setIsTablet={setIsTablet} isTablet={isTablet}/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route path='/*' element={<Routers navOpen={navOpen} setNavOpen={setNavOpen} isMobile={isMobile} setIsMobile={setIsMobile} setIsTablet={setIsTablet} isTablet={isTablet} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
