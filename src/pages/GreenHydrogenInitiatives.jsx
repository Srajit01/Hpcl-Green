import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Flame, Leaf, Lightbulb } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Helper function for random number generation
function uniform(min, max) {
  return Math.random() * (max - min) + min;
}

// HydrogenDispenserComponent
const HydrogenDispenserComponent = () => {
  const [dispensedHydrogenKg, setDispensedHydrogenKg] = useState(0);
  const [currentPressureBar, setCurrentPressureBar] = useState(0);
  const [isDispensing, setIsDispensing] = useState(false);
  const maxPressureBar = 700;
  const coolingTempC = -40;
  const flowRateKgPerMin = 1.0;
  const [targetHydrogenKg, setTargetHydrogenKg] = useState(5);
  const [error, setError] = useState("");
  const [animationTrigger, setAnimationTrigger] = useState(false); // Trigger for visual dispensing animation
  const [intervalId, setIntervalId] = useState(null);

  // Validation function
  const validateTarget = (value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || parsedValue <= 0) {
      return "Target must be a positive number.";
    }
    return "";
  };

  // Update dispensed amount and pressure
  useEffect(() => {
    if (isDispensing) {
      const id = setInterval(() => {
        setDispensedHydrogenKg((prevDispensed) => {
          let newDispensed = prevDispensed + flowRateKgPerMin / 60; // Dispensing per second
          if (newDispensed >= targetHydrogenKg) {
            newDispensed = targetHydrogenKg; //Cap the dispensed amount
            clearInterval(id);
            setIntervalId(null); // Clear the interval ID
            setIsDispensing(false);
            setAnimationTrigger(false); //stop animation
            console.log("Dispensing complete.");
            return newDispensed; //Ensure the last state is accurate
          }

          setCurrentPressureBar((prevPressure) => {
            let newPressure = prevPressure + uniform(5, 10) / 60;
            newPressure = Math.min(newPressure, maxPressureBar);
            return newPressure;
          });
          setAnimationTrigger(true); //start animation
          return newDispensed;
        });
      }, 1000);
      setIntervalId(id);
    } else if (intervalId) {
      //Clear the interval when dispensing stops
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => clearInterval(intervalId); //cleanup on unmount
  }, [isDispensing, targetHydrogenKg, flowRateKgPerMin, maxPressureBar]); //dependendencies for effect

  const startDispensing = () => {
    const validationMessage = validateTarget(targetHydrogenKg);
    if (validationMessage) {
      setError(validationMessage);
      return; // Stop if invalid target
    }
    setError(""); //clear previous error
    setIsDispensing(true);
    setDispensedHydrogenKg(0);
    setCurrentPressureBar(0);
  };

  const stopDispensing = () => {
    setIsDispensing(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setAnimationTrigger(false);
  };

  const handleTargetChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and one decimal point
    if (/^(\d*\.?\d*)$/.test(value)) {
      setTargetHydrogenKg(value);
    }
  };

  return (
    <div className="p-4 relative">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Hydrogen Dispenser Simulation
      </h3>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-4">
        <label
          htmlFor="targetHydrogen"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Target Hydrogen (Kg):
        </label>
        <input
          type="text" // changed to text for controlled input
          id="targetHydrogen"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={targetHydrogenKg}
          onChange={handleTargetChange}
        />
      </div>

      <div className="mb-4">
        <p className="text-gray-600">
          Dispensed: {dispensedHydrogenKg.toFixed(2)} Kg
        </p>
        <p className="text-gray-600">
          Pressure: {currentPressureBar.toFixed(2)} bar
        </p>
      </div>
      {/* Dispensing Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none"
        style={{ zIndex: 1 }} // Ensure it's above other content
      >
        <AnimatePresence>
          {animationTrigger && (
            <motion.div
              key="dispensingAnimation"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-blue-500 text-4xl font-bold"
            >
              Dispensing...
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {!isDispensing ? (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={startDispensing}
          disabled={isDispensing} //disable the button while dispensing
        >
          Start Dispensing
        </button>
      ) : (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={stopDispensing}
        >
          Stop Dispensing
        </button>
      )}
    </div>
  );
};

const GreenHydrogenInitiatives = () => {
  const potentialOutlets = [
    {
      location: "Mumbai-Pune Expressway",
      benefits: [
        "High traffic volume",
        "Industrial corridor",
        "Proximity to hydrogen consumers",
      ],
      image: "/images/H.jpg",
    },
    {
      location: "Delhi-Jaipur Highway",
      benefits: [
        "Dense population",
        "Growing EV market",
        "Strategic transport route",
      ],
      image: "/images/pump.jpg",
    },
    {
      location: "Kochi-Bangalore Highway",
      benefits: [
        "Renewable energy sources",
        "Port access",
        "Emerging industrial hub",
      ],
      image: "/images/car.jpeg",
    },
  ];

  const costReductionStrategies = [
    {
      strategy: "Electrolyzer Efficiency",
      description:
        "Invest in advanced, high-efficiency electrolyzer technologies.",
    },
    {
      strategy: "Renewable Energy Sourcing",
      description:
        "Secure low-cost renewable energy through PPAs (Power Purchase Agreements).",
    },
    {
      strategy: "Scale Economies",
      description:
        "Develop large-scale production facilities to reduce unit costs.",
    },
    {
      strategy: "Optimized Storage",
      description:
        "Implement efficient storage and transportation solutions to minimize losses.",
    },
  ];

  const greenHydrogenProcess = [
    {
      step: 1,
      title: "Renewable Energy Generation",
      description:
        "Solar, wind, or hydro power sources are used to generate electricity.",
      image: "/images/srajit.jpg",
      animatedElement: <SolarPanelAnimation />,
    },
    {
      step: 2,
      title: "Electrolysis",
      description:
        "Electricity splits water (H2O) into hydrogen (H2) and oxygen (O2) through electrolysis.",
      image: "/images/elec.png",
      animatedElement: <ElectrolyzerAnimation />,
    },
    {
      step: 3,
      title: "Hydrogen Purification & Compression",
      description:
        "Hydrogen is purified and compressed for storage and transportation.",
      image: "/images/storage.png",
      animatedElement: <CompressionAnimation />,
    },
    {
      step: 4,
      title: "Storage & Transportation",
      description:
        "Compressed hydrogen is stored in tanks and transported via pipelines or trucks.",
      image: "/images/support.jpg",
      animatedElement: <StorageAnimation />,
    },
    {
      step: 5,
      title: "Dispensing & Utilization",
      description:
        "Hydrogen is dispensed at refueling stations for use in fuel cell vehicles or industrial processes.",
      image: "/images/cooling.png",
      animatedElement: <FuelCellAnimation />,
    },
  ];

  return (
    <div className="container mx-auto p-8 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
          HPCL Green Hydrogen Revolution
        </h1>

        {/* Hydrogen Dispensing System Model - Placed at the top */}
        <motion.section
          className="mb-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
            Our Green Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            HPCL is committed to leading India's green energy transition through
            innovative hydrogen initiatives, driving a sustainable future for
            generations.
          </p>
        </motion.section>

        {/* Hydrogen Dispensing System Model - Placed at the top */}
        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Hydrogen Dispensing System Model
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Simulating the hydrogen dispensing process.
          </p>
          <HydrogenDispenserComponent />
        </motion.section>
        {/* Green Hydrogen Production Process */}
        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-800">
            Green Hydrogen Production Process
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Learn how HPCL produces green hydrogen using renewable energy
            sources.
          </p>

          {/* Flowchart Section */}
          <div className="flex flex-col md:flex-row items-center justify-around">
            {greenHydrogenProcess.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-1/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step {step.step}: {step.title}
                </h3>
                <div className="animated-element">{step.animatedElement}</div>{" "}
                {/* Show animated SVG */}
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg w-full h-32 object-cover"
                />
                {index < greenHydrogenProcess.length - 1 && (
                  <div className="absolute bottom-0 right-0 md:rotate-90 md:translate-y-[-50%]">
                    <Arrow className="h-6 w-6 text-green-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Outlet Locations */}
        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-green-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold mr-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Strategic Green Hydrogen Outlet Locations
            </h2>
            <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-4 py-1.5 rounded-full border border-emerald-200">
              Infrastructure Roadmap
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Identifying the best locations for HPCL's Green Hydrogen outlets is
            crucial for successful deployment and market penetration. Here are
            some key considerations and potential sites:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {potentialOutlets.map((outlet, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {outlet.location}
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  {outlet.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <img
                  src={outlet.image}
                  alt={outlet.location}
                  className="rounded-lg w-full h-48 object-cover mt-4"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-teal-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold mr-4 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Strategies for Cost Optimization
            </h2>
            <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1.5 rounded-full border border-teal-200">
              Efficiency & Affordability
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            Achieving cost competitiveness is essential for the widespread
            adoption of green hydrogen. HPCL is pursuing these key strategies:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costReductionStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {strategy.strategy}
                </h3>
                <p className="text-gray-600">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Impact & Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="flex items-center p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Leaf className="h-6 w-6 text-green-500 mr-3" />
              <span className="text-gray-700 font-medium">
                Reduces carbon footprint and promotes environmental
                sustainability.
              </span>
            </motion.div>
            <motion.div
              className="flex items-center p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
              <span className="text-gray-700 font-medium">
                Enhances energy independence and reduces reliance on fossil
                fuels.
              </span>
            </motion.div>
            <motion.div
              className="flex items-center p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TrendingUp className="h-6 w-6 text-blue-500 mr-3" />
              <span className="text-gray-700 font-medium">
                Creates new economic opportunities and stimulates local job
                growth.
              </span>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default GreenHydrogenInitiatives;

const SolarPanelAnimation = () => (
  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
  >
    <svg width="50" height="50" viewBox="0 0 50 50">
      <rect x="5" y="5" width="40" height="40" fill="#FFDA63" />
      <rect x="10" y="10" width="30" height="30" fill="#FF8C00" />
    </svg>
  </motion.div>
);

const ElectrolyzerAnimation = () => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    <svg width="50" height="50" viewBox="0 0 50 50">
      <rect x="5" y="15" width="40" height="20" fill="#ADD8E6" />
      <line x1="25" y1="15" x2="25" y2="5" stroke="#007BFF" strokeWidth="3" />
      <line x1="25" y1="35" x2="25" y2="45" stroke="#007BFF" strokeWidth="3" />
    </svg>
  </motion.div>
);

const CompressionAnimation = () => (
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
  >
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="#800080" />
    </svg>
  </motion.div>
);

const StorageAnimation = () => (
  <motion.div
    animate={{ x: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    <svg width="50" height="50" viewBox="0 0 50 50">
      <rect x="5" y="15" width="40" height="20" fill="#A0522D" />
    </svg>
  </motion.div>
);

const FuelCellAnimation = () => (
  <motion.div
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    <svg width="50" height="50" viewBox="0 0 50 50">
      <rect x="5" y="5" width="40" height="40" fill="#3CB371" />
    </svg>
  </motion.div>
);

const Arrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
