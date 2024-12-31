
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TariffMonitor from './pages/TariffMonitor';
import SolarForm from './pages/SolarForm';
import Performance from './pages/Performance';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import Optimizer from './pages/Optimizer';
import CCUSTechnology from './pages/CCUS_technology';
import Hydrogen from './pages/Hydrogen';
import BiofuelDevelopment from './pages/Biofuels_development';
import SyntheticFuels from './pages/Synthetic_fuels';
import CNGInfrastructure from './pages/Cng_infrastructure';
import Targetlocations from './pages/Target_locations';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ccus-technology" element={<CCUSTechnology />} />
        <Route path="/hydrogen-production" element={<Hydrogen />} />
        <Route path="/biofuels-development" element={<BiofuelDevelopment />} />
        <Route path="/synthetic-fuels" element={<SyntheticFuels />} />
        <Route path="/target-locations" element={<Targetlocations />} />
        <Route path="/cng-infrastructure" element={<CNGInfrastructure />} />
      </Routes>
    </Router>
  );
}

export default App;                              