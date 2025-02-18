import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CCUSTechnology from './pages/CCUS_technology';
import Hydrogen from './pages/Hydrogen';
import BiofuelDevelopment from './pages/Biofuels_development';
import SyntheticFuels from './pages/Synthetic_fuels';
import CNGInfrastructure from './pages/Cng_infrastructure';
import Targetlocations from './pages/Target_locations';
import PetrochemicalExpansion from './pages/PetrochemicalExpansion'; // Import the new components
import DigitalTransformation from './pages/DigitalTransformation';
import GreenHydrogenInitiatives from './pages/GreenHydrogenInitiatives';

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

        {/* New Routes */}
        <Route path="/petrochemical-expansion" element={<PetrochemicalExpansion />} />
        <Route path="/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/green-hydrogen-initiatives" element={<GreenHydrogenInitiatives />} />
      </Routes>
    </Router>
  );
}

export default App;