import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const BiofuelDevelopment = () => {
  const [cropType, setCropType] = useState("Sugarcane");
  const [residueAvailability, setResidueAvailability] = useState(70);
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(60);
  const [waterAvailability, setWaterAvailability] = useState(800);

  // State variable to show prediction
  const [predictedYield, setPredictedYield] = useState(null);

  const predictBiofuelYield = (cropType, residueAvailability, temperature, humidity, waterAvailability) => {
    // These are simplified rules and constants for mock purposes only
    const baseYield = 500; // Arbitrary base yield
    const cropFactor = cropType === "Sugarcane" ? 1.2 : cropType === "Rice" ? 1.1 : 1.0; // Corn
    const residueFactor = 1 + (residueAvailability / 100); // Add ResidueAvailability with 1
    const waterFactor = waterAvailability > 1000 ? 1.1 : 0.9; // WaterAvailability
    const temperatureFactor = temperature > 30 ? 0.9 : 1.1; // Temperature
    const humidityFactor = humidity > 70 ? 0.8 : 1.0; // Humidity

    const predictedYield =
      baseYield *
      cropFactor *
      residueFactor *
      waterFactor *
      temperatureFactor *
      humidityFactor;
    return Math.max(0, predictedYield); // Ensure yield is non-negative
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const predictedYieldValue = predictBiofuelYield(
      cropType,
      parseFloat(residueAvailability),
      parseFloat(temperature),
      parseFloat(humidity),
      parseFloat(waterAvailability)
    );
    setPredictedYield(predictedYieldValue.toFixed(2));
  };

  const infoBoxes = [
    {
      id: 1,
      title: "Sustainability",
      description: "Harnessing waste and renewable feedstocks.",
      icon: "🌱",
    },
    {
      id: 2,
      title: "Efficiency",
      description: "Innovative methods to maximize energy output.",
      icon: "⚙️",
    },
    {
      id: 3,
      title: "Scalability",
      description: "Solutions for large-scale industrial use.",
      icon: "📈",
    },
    {
      id: 4,
      title: "Global Impact",
      description: "Reducing carbon footprint worldwide.",
      icon: "🌍",
    },
  ];
  const reasons = [
    "Mitigates climate change by reducing greenhouse gas emissions.",
    "Promotes energy security by reducing dependence on fossil fuels.",
    "Utilizes waste and renewable resources, reducing environmental pollution.",
    "Creates jobs and supports rural economies.",
    "Encourages innovation in sustainable technologies.",
  ];

  const hpclBenefits = [
    "Enhanced reputation as a leader in sustainable energy solutions.",
    "Expansion into global markets with innovative biofuel technologies.",
    "Increased revenue streams through diversified energy portfolios.",
    "Opportunities for strategic partnerships in renewable energy.",
    "Contributing to India's energy independence goals.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 via-yellow-200 to-white p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-green-800">Biofuels Development</h1>
        <p className="text-lg text-green-600">
          Advanced biofuel solutions from sustainable feedstock sources
        </p>
      </div>

      {/* Information Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoBoxes.map((box) => (
          <div
            key={box.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4">{box.icon}</div>
            <h2 className="text-xl font-bold text-green-800">{box.title}</h2>
            <p className="text-green-600">{box.description}</p>
          </div>
        ))}
      </div>

      {/* Locations & Opportunities Section */}
      <div className="mt-12 bg-green-100 rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Locations & Opportunities</h2>
        <p className="text-green-600 text-lg">
          Biofuels can be developed and supplied in regions with abundant agricultural waste, algae production facilities, and renewable feedstocks. Prime locations include rural agricultural areas, coastal regions with algae resources, and industrial hubs seeking alternative fuels. These regions offer scalable opportunities for sustainable energy transformation.
        </p>
        <div className="mt-6">
          <img
            src="/images/Biofuel.png"
            alt="Biofuel Opportunities Map"
            className="w-fit rounded-lg"
          />
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold text-green-800 mb-2">Additional Points:</h3>
          <ul className="list-disc list-inside text-green-600 text-lg">
            <li>Encourages rural and urban collaboration for feedstock supply chains.</li>
            <li>Supports governmental policies and global commitments to reduce emissions.</li>
            <li>Drives technological advancements in renewable energy sectors.</li>
            <li>Provides a sustainable alternative to conventional fossil fuels for industrial and transportation needs.</li>
          </ul>
        </div>
        {/* Why Biofuels Are Necessary */}
        <div className="mt-12 bg-yellow-100 rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-yellow-800 mb-4">Why Biofuel Production Is Necessary</h2>
          <ul className="list-disc list-inside text-yellow-700 text-lg">
            {reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
          <div className="relative top-6">
            <img
              src="/images/Biofuel car.png"
              alt="Why Biofuel Small"
              className="absolute bottom-0 right-0 w-1/3 rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* HPCL Benefits Section */}
        <div className="mt-12 bg-green-100 rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-4">How HPCL Will Grow and Benefit</h2>
          <ul className="list-disc list-inside text-green-700 text-lg">
            {hpclBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 md:ml-6 mt-6 md:mt-0 relative"></div>
      </div>

      {/* Biofuel Yield Prediction Model Section */}
      <motion.section
        className="mb-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Biofuel Yield Prediction Model</h2>

        {/* Biofuel model input form */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="cropType" className="block text-gray-700 text-sm font-bold mb-2">Crop Type:</label>
            <select
              id="cropType"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
            >
              <option value="Sugarcane">Sugarcane</option>
              <option value="Rice">Rice</option>
              <option value="Corn">Corn</option>
              <option value="Wheat">Wheat</option>
            </select>
          </div>
          <div>
            <label htmlFor="residueAvailability" className="block text-gray-700 text-sm font-bold mb-2">Residue Availability (%):</label>
            <input
              type="number"
              id="residueAvailability"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={residueAvailability}
              onChange={(e) => setResidueAvailability(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="temperature" className="block text-gray-700 text-sm font-bold mb-2">Temperature (°C):</label>
            <input
              type="number"
              id="temperature"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="humidity" className="block text-gray-700 text-sm font-bold mb-2">Humidity (%):</label>
            <input
              type="number"
              id="humidity"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="waterAvailability" className="block text-gray-700 text-sm font-bold mb-2">Water Availability (mm):</label>
            <input
              type="number"
              id="waterAvailability"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={waterAvailability}
              onChange={(e) => setWaterAvailability(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Predict Yield
          </button>
        </form>

        {/* Output if exist */}
        {predictedYield !== null && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Predicted Biofuel Yield:</h3>
            <p className="text-green-600 text-lg">
              Based on your input, the predicted yield is{" "}
              <strong>{predictedYield} units/acre</strong>
            </p>
          </div>
        )}
      </motion.section>
    </div>
  );
};

export default BiofuelDevelopment;