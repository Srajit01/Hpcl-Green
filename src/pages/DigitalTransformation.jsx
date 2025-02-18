import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const DigitalTransformation = () => {
  const mapRef = useRef(null);

  const refineryLocations = [
    { name: 'Mumbai Refinery', lat: 19.0760, lng: 72.8777, type: 'Refinery', capacity: '150,000 barrels/day' },
    { name: 'Visakh Refinery', lat: 17.6868, lng: 83.2185, type: 'Refinery', capacity: '8.33 MMTPA' },
    { name: 'Bathinda Refinery', lat: 30.2194, lng: 74.9243, type: 'Refinery', capacity: '11.3 MMTPA' },
    { name: 'R&D Center Bangalore', lat: 12.9716, lng: 77.5946, type: 'R&D', capacity: 'N/A' }
  ];

  const cbgPlantLocation = {
    name: 'CBG Plant Badaun',
    lat: 28.0470,
    lng: 79.0149,
    type: 'CBG Plant',
    capacity: '14.5 TPD'
  };

  const solarPlantLocations = [
    {
      name: 'Solar Plant Jhansi',
      lat: 25.4484,
      lng: 78.5783,
      type: 'Solar Plant',
      capacity: '5 MW (Setting Up)'
    },
    {
      name: 'Solar Plant Panipat',
      lat: 29.3908,
      lng: 76.9634,
      type: 'Solar Plant',
      capacity: '6 MW (Setting Up)'
    }
  ];

  const gujaratGreenHubs = [
    {
      name: 'Jamnagar Green Refinery Hub',
      lat: 22.4707,
      lng: 70.0577,
      type: 'Green Hub',
      description: 'Ideal for green hydrogen production with access to existing petrochemical infrastructure.',
      tag: 'Future Plans'
    },
    {
      name: 'Dahej Green Refinery Hub',
      lat: 21.6565,
      lng: 72.6369,
      type: 'Green Hub',
      description: 'Best suited for biofuel refinery, carbon capture projects, and green ammonia production.',
      tag: 'Future Plans'
    },
    {
      name: 'Dholera Green Refinery Hub',
      lat: 22.2987,
      lng: 72.2746,
      type: 'Green Hub',
      description: 'A perfect spot for a solar-powered hydrogen refinery, leveraging the Dholera Solar Park (5 GW capacity).',
      tag: 'Future Plans'
    }
  ];

  // Strategic benefits of Gujarat (for DigitalTransformation page)
  const gujaratStrategicBenefits = [
    'Existing Refinery Infrastructure → Near RIL, Nayara, & ONGC refineries for synergies',
    'Port Connectivity → Mundra, Kandla, Dahej enable hydrogen & biofuel exports',
    'Renewable Energy Access → Gujarat\'s solar & wind capacity (20+ GW) supports green refinery goals',
    'Government Incentives → Up to ₹50 lakh per MW subsidy for Green Hydrogen & SAF projects',
    'Industrial Ecosystem → SEZs like Dholera SIR & PCPIR (Petroleum, Chemicals & Petrochemicals Investment Region) offer tax benefits'
  ];

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([20.5937, 78.9629], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const allLocations = [...refineryLocations, cbgPlantLocation, ...solarPlantLocations, ...gujaratGreenHubs];

    allLocations.forEach(location => {
      const icon = location.type === 'Refinery'
        ? L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
        : location.type === 'R&D'
          ? L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })
          : location.type === 'CBG Plant'
            ? L.icon({
              iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
              shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })
            : location.type === 'Solar Plant'
              ? L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              })
              : L.icon({ // Green Hubs
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              });

      let popupContent = `<b>${location.name}</b><br>Type: ${location.type}`;
      if (location.capacity) {
        popupContent += `<br>Capacity: ${location.capacity}`;
      }
      if (location.description) {
        popupContent += `<br>${location.description}`;
      }
      if (location.tag === 'Future Plans') {
        popupContent += `<br><span style="color: purple;">${location.tag}</span>`;
      }

      L.marker([location.lat, location.lng], { icon })
        .addTo(map)
        .bindPopup(popupContent);
    });

    return () => {
      map.remove();
    };
  }, [refineryLocations]);

  // Investment Data
  const investmentData = [
    { component: 'Land Acquisition', cost: '500 - 800', details: '500-1000 acres near industrial hubs like Dahej, Jamnagar, or Dholera' },
    { component: 'Plant Infrastructure', cost: '4,000 - 6,000', details: 'Refinery units, green hydrogen electrolysis, storage' },
    { component: 'Renewable Energy Integration', cost: '1,500 - 2,500', details: 'Solar & wind power setup for green hydrogen production' },
    { component: 'Hydrogen Electrolysis Plant', cost: '2,500 - 4,000', details: 'Alkaline/PEM electrolyzer setup (5-10 GW capacity)' },
    { component: 'Biofuel Processing Units', cost: '2,000 - 3,500', details: 'For ethanol, SAF (Sustainable Aviation Fuel), & biodiesel production' },
    { component: 'R&D & Innovation Center', cost: '500 - 1,000', details: 'Advanced research for process optimization & CO2 capture' },
    { component: 'Pipeline & Logistics', cost: '1,000 - 2,000', details: 'Storage tanks, transportation, port connectivity' },
    { component: 'Miscellaneous & Contingency', cost: '1,000 - 1,500', details: 'Regulatory clearances, safety, ESG compliance' }
  ];

  // Expected Revenue & ROI Data
  const revenueData = [
    { revenueStream: 'Green Hydrogen Sales', annualRevenue: '3,000 - 5,000', growthPotential: 'Export to Japan, Europe, and Middle East' },
    { revenueStream: 'Biofuel (Ethanol & SAF) Sales', annualRevenue: '2,500 - 4,000', growthPotential: 'Aviation industry demand surging' },
    { revenueStream: 'Carbon Credits & ESG Investments', annualRevenue: '1,000 - 2,500', growthPotential: 'Trading carbon credits & ESG-linked financing' },
    { revenueStream: 'Petrochemical By-products', annualRevenue: '2,000 - 3,500', growthPotential: 'Acetic acid, bio-naphtha, and synthetic lubricants' },
    { revenueStream: 'Total Revenue Estimate', annualRevenue: '₹8,500 - ₹15,000 Cr', growthPotential: '' }
  ];

  const roiExpectations = [
    'Breakeven in 7-9 years',
    '15-20% IRR (Internal Rate of Return)',
    'High export potential due to India\'s strategic position in the biofuel & hydrogen supply chain'
  ];

  return (
    <div className="container mx-auto p-8 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Digital Transformation of Refinery Operations
        </h1>

        <motion.section
          className="mb-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Digital transformation can improve HPCL’s refinery performance through real-time monitoring and automated
            decision-making.
          </p>
        </motion.section>

        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold mr-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cloud-Based Real-Time Monitoring & KPI Tracking System
            </h2>
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full border border-indigo-200">
              Smart Refinery Model
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            <strong>Model:</strong> Cloud-Based Real-Time Monitoring & KPI Tracking System
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            This system enhances refinery efficiency and safety through real-time monitoring and automated alerts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Increased refinery efficiency and productivity',
              'Reduced manual errors and improved safety compliance',
              'Faster decision-making with data-driven insights'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ArrowRight className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-800">HPCL's Strategic Vision: Existing Infrastructure & Our Green Refinery Future</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Explore HPCL's existing infrastructure alongside our strategic plans for a sustainable future, featuring green refinery hubs in Gujarat.
          </p>
          <div
            ref={mapRef}
            className="map-container h-[500px] rounded-lg"
            style={{ minHeight: '400px' }}
          />
        </motion.section>

        {/* Strategic Benefits of Gujarat Section */}
        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Strategic Benefits of Gujarat for Green Initiatives</h2>
          <ul className="list-none pl-0 text-gray-700 leading-relaxed text-lg">
            {gujaratStrategicBenefits.map((benefit, index) => (
              <li key={index} className="flex items-center mb-2">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Investment Requirement Section */}
        <motion.section
          className="mb-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Estimated Investment Requirement</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Component
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Estimated Cost (₹ Cr)
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {investmentData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.component}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.cost}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-gray-700 font-semibold">
            💰 Total Estimated Investment: ₹13,000 - ₹20,000 Cr
          </p>
        </motion.section>

        {/* Expected Revenue & ROI Section */}
        <motion.section
          className="mb-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Expected Revenue & ROI</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Revenue Stream
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Annual Revenue (₹ Cr)
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Growth Potential
                  </th>
                </tr>
              </thead>
              <tbody>
                {revenueData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.revenueStream}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.annualRevenue}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.growthPotential}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">ROI Expectation:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {roiExpectations.map((expectation, index) => (
                <li key={index}>{expectation}</li>
              ))}
            </ul>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default DigitalTransformation;