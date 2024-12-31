import React, { useState } from "react";
import UpperBox from "../components/InsideCard/Box1.jsx/UpperBox";
import FormInput from "../components/FormInput";
import { upperBoxConfig, lowerBoxConfig } from "../config/boxConfig";

const Hydrogen = () => {
  const [result, setResult] = useState();
  const [system, setSystem] = useState();
  const [usage, setUsage] = useState();
  const [error, seterror] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (usage < system) { 
        seterror ("System size Cannot be more than Usage")
        setResult ("")
    }
    else{
      seterror ("")
      setResult (Math.floor(usage/system) )
    }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#163a94] to-[#1b4b99] p-8">
      <div className="text-center">
        <h1 className="text-5xl text-white font-extrabold drop-shadow-lg">
          Hydrogen Production Dashboard
        </h1>
        <p className="text-gray-300 text-xl mt-4">
          Real-time Monitoring of Energy Consumption and Tariff Rates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-8">
        {upperBoxConfig.map((config) => (
          <UpperBox key={config.id} config={config} />
        ))}
      </div>

      <div className="bg-[#2f4899] bg-opacity-90 rounded-xl shadow-xl mt-16">
        <h2 className="text-gray-200 text-3xl font-semibold p-6">
          Energy Usage vs. Generation
        </h2>
        <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="images/Chart Hydrogen.png"
            alt="Energy Chart"
            className="bg-white rounded-lg shadow-lg w-full md:w-1/2"
          />
          <img
            src="images/Hydro bar chart.png"
            alt="Pie Chart"
            className="bg-white rounded-lg shadow-lg w-full md:w-1/3"
          />
        </div>
      </div>

      <div className="bg-[#2f4899] bg-opacity-90 rounded-xl shadow-xl mt-16">
        <h2 className="text-gray-200 text-3xl font-semibold p-6">
          Today's Tariff Schedule
        </h2>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lowerBoxConfig.map((config) => (
            <UpperBox key={config.id} config={config} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        <div className="bg-[#2f4899] bg-opacity-90 rounded-xl shadow-xl">
          <h2 className="text-gray-200 text-3xl font-semibold p-6">
            Hydrogen Output Over Time
          </h2>
          <div className="p-8">
            <img
              src="images/production.jpg"
              alt="Line Chart"
              className="bg-white rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="bg-[#2f4899] bg-opacity-90 rounded-xl shadow-xl">
          <h2 className="text-gray-200 text-3xl font-semibold p-6">
            Efficiency Comparison
          </h2>
          <div className="p-8">
            <img
              src="images/efficiency.jpg"
              alt="Bar Chart"
              className="bg-white rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#2f4899] p-8 flex items-center justify-center mt-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Predict Hydrogen Energy Consumption
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Installation Type"
              type="select"
              options={['Refueling stations', 'Industrial']}
            />
            <FormInput name="System Size (Kg)" label="System Size (Kg)" type="number" handleChange = {(e)=> setSystem(+e.target.value)} value={system} />
            <FormInput name="Location" label="Location" type="text" />
            <FormInput name="Expected Monthly Usage (Kg)" label="Expected Monthly Usage (Kg)" type="number"  handleChange = {(e)=> setUsage(+e.target.value)} value={usage} />
            

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Application
            </button>
          </form>
          {error &&(
            <h2 className="text-center mt-8 text-red-400 font-bold "  >
              {error}
            </h2>
          )}
          {result && (
            <h2 className="text-center mt-8">
             {result} Hydrogen Barrels required. Thank you for Visting Hindustan Petroleum 
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hydrogen;
