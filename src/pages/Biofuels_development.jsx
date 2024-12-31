import React from "react";

const BiofuelDevelopment = () => {
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
    "Encourages innovation in sustainable technologies."
  ];

  const hpclBenefits = [
    "Enhanced reputation as a leader in sustainable energy solutions.",
    "Expansion into global markets with innovative biofuel technologies.",
    "Increased revenue streams through diversified energy portfolios.",
    "Opportunities for strategic partnerships in renewable energy.",
    "Contributing to India's energy independence goals."
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
          Biofuels can be developed and supplied in regions with abundant
          agricultural waste, algae production facilities, and renewable
          feedstocks. Prime locations include rural agricultural areas,
          coastal regions with algae resources, and industrial hubs seeking
          alternative fuels. These regions offer scalable opportunities for
          sustainable energy transformation.
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
        <div className="flex-1 md:ml-6 mt-6 md:mt-0 relative">
        </div>
      </div>
      </div>
  );
};

export default BiofuelDevelopment;