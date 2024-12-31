import React from "react";
import UpperBox from "../components/InsideCard/Box1.jsx/UpperBox";
import { upperBoxConfig, lowerBoxConfig } from "../config/boxConfig";

const Hydrogen = () => {
  return (
    <div className="min-h-screen bg-[#163a94] p-8">
      <div className="text-center">
        <h1 className="text-5xl text-white font-extrabold">
          Hydrogen Production Dashboard
        </h1>
        <p className="text-gray-300 text-xl mt-4 max-w-3xl mx-auto">
          Real-time monitoring of energy consumption, tariff rates, and
          hydrogen production metrics.
        </p>
      </div>

      {/* Upper Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-8">
        {upperBoxConfig.map((config) => (
          <UpperBox key={config.id} config={config} />
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-[#2f4899] bg-opacity-90 rounded-xl shadow-xl mt-16">
        <h2 className="text-gray-300 text-3xl font-bold p-6">
          Energy Usage vs. Generation
        </h2>
        <div className="p-10 flex justify-center">
          <img
            src="images/chart.png"
            alt="Tariff Monitor"
            className="bg-white rounded-lg shadow-lg border border-gray-200"
          />
        </div>
      </div>

      {/* Additional Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        <div className="bg-[#2f4899] bg-opacity-80 rounded-lg p-8 shadow-lg">
          <h3 className="text-white text-2xl font-semibold mb-4">Efficiency Chart</h3>
          <img
            src="images/efficiency.png"
            alt="Efficiency Chart"
            className="w-full rounded-lg border border-gray-300"
          />
        </div>
        <div className="bg-[#2f4899] bg-opacity-80 rounded-lg p-8 shadow-lg">
          <h3 className="text-white text-2xl font-semibold mb-4">Hydrogen Production</h3>
          <img
            src="images/production.png"
            alt="Hydrogen Production Chart"
            className="w-full rounded-lg border border-gray-300"
          />
        </div>
        <div className="bg-[#2f4899] bg-opacity-80 rounded-lg p-8 shadow-lg">
          <h3 className="text-white text-2xl font-semibold mb-4">CO2 Emissions</h3>
          <img
            src="images/emissions.png"
            alt="CO2 Emissions Chart"
            className="w-full rounded-lg border border-gray-300"
          />
        </div>
      </div>

      {/* Tariff Schedule Section */}
      <div className="bg-[#2f4899] bg-opacity-90 rounded-xl shadow-xl mt-16">
        <h2 className="text-gray-300 text-3xl font-bold p-6">
          Today&apos;s Tariff Schedule
        </h2>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lowerBoxConfig.map((config) => (
            <UpperBox key={config.id} config={config} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hydrogen;