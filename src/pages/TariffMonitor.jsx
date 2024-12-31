import React from "react";
import UpperBox from "../components/InsideCard/Box1.jsx/UpperBox";
import { upperBoxConfig,lowerBoxConfig } from "../config/boxConfig";
const TariffMonitor = () => {
  return (
    <div className="min-h-screen bg-[#163a94] p-8">
      <div className="">
        <h1 className="text-4xl text-white font-bold">
          CCUS Technology
        </h1>
        <p className="text-gray-400 text-xl">
          Real-time monitoring of energy consumption and tariff rates
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-8">
        {upperBoxConfig.map((config) => (
          <UpperBox key={config.id} config={config} />
        ))}
      </div>
      <div className="bg-[#2f4899] bg-opacity-80  rounded-xl shadow-lg mt-10">
        <h2 className="text-gray-300 text-2xl font-bold p-4">
          Energy Usage vs. Generation
        </h2>
        <div className="p-8">
          <img
            src="images/chart.png"
            alt="Tariff Monitor"
            className="bg-white"
          />
        </div>
      </div>
      <div>
      <div className="bg-[#2f4899] bg-opacity-80  rounded-xl shadow-lg mt-10">
        <h2 className="text-gray-300 text-2xl font-bold p-4">
        Today&apos;s Tariff Schedule
        </h2>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {lowerBoxConfig.map((config) => (
          <UpperBox key={config.id} config={config} />
        ))}
        </div>
       
      </div>
      </div>
    </div>
  );
};

export default TariffMonitor;

// Solar Energy & ToD Tariff Monitor
// Real-time monitoring of energy consumption and tariff rates
