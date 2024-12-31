import React from "react";

const Syntheticfuels = () => {
  const infoBoxes = [
    {
      id: 1,
      title: "Sustainability",
      description: "Harnessing renewable feedstocks and reducing emissions.",
      icon: "♻️",
    },
    {
      id: 2,
      title: "Efficiency",
      description: "Maximizing energy output through advanced methods.",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Innovation",
      description: "Driving forward with cutting-edge synthetic fuel tech.",
      icon: "🚀",
    },
    {
      id: 4,
      title: "Global Impact",
      description: "Transforming energy markets worldwide.",
      icon: "🌍",
    },
  ];

  const reasons = [
    "Reduces greenhouse gas emissions and tackles climate change.",
    "Enhances energy security by lowering dependence on fossil fuels.",
    "Creates a sustainable economy by using renewable resources.",
    "Encourages technological advancements and innovations.",
  ];

  const hpclBenefits = [
    "Reputation boost as a leader in sustainable fuel production.",
    "Entry into global renewable energy markets.",
    "Diversified revenue streams from innovative synthetic fuels.",
    "Partnerships with global green energy leaders.", 
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-green-200 to-white p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-blue-800">Synthetic Fuels</h1>
        <p className="text-xl text-blue-600">
          Next-generation synthetic fuel production using renewable energy
        </p>
      </div>

      {/* Information Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {infoBoxes.map((box) => (
          <div
            key={box.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <div className="text-5xl mb-6">{box.icon}</div>
            <h2 className="text-2xl font-bold text-blue-800">{box.title}</h2>
            <p className="text-blue-600">{box.description}</p>
          </div>
        ))}
      </div>

      {/* Locations & Opportunities Section */}
      <div className="mt-16 bg-green-100 rounded-lg p-10 shadow-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Locations & Opportunities
        </h2>
        <p className="text-lg text-green-600">
          Synthetic fuels can be developed in regions with access to renewable
          feedstocks, such as wind, solar, and biomass sources. Prime locations
          include industrial hubs seeking to transition to greener alternatives
          and coastal areas for renewable energy.
        </p>
        <div className="mt-8">
          <img
            src="/images/syn.png"
            alt="Synthetic Fuels Opportunities Map"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Additional Opportunities:
          </h3>
          <ul className="list-disc list-inside text-lg text-green-600">
            <li>Supports rural and industrial collaboration for resource use.</li>
            <li>Aligns with government policies on emissions reduction.</li>
            <li>Accelerates the transition to clean energy across industries.</li>
            <li>Provides alternatives to conventional fuels in transportation.</li>
          </ul>
        </div>
      </div>

      {/* Why Synthetic Fuels Are Necessary */}
      <div className="mt-16 bg-blue-100 rounded-lg p-12 shadow-lg h-fit">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Why Synthetic Fuel Production Is Necessary
        </h2>
        <ul className="list-disc list-inside text-lg text-blue-700">
          {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
        <div className="relative top-9">
          <img
            src="/images/green syn.png"
            alt="Synthetic Fuel Car"
            className="absolute bottom-0 right-0 w-1/3 rounded-lg shadow-lg h-7/8"  
          />
        </div>
      </div>

      {/* HPCL Benefits Section */}
      <div className="mt-16 bg-green-100 rounded-lg p-10 shadow-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          How HPCL Will Grow and Benefit
        </h2>
        <ul className="list-disc list-inside text-lg text-green-700">
          {hpclBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Syntheticfuels;
