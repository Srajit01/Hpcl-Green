import React from "react";

const CCUSTechnology = () => {
  const infoBoxes = [
    {
      id: 1,
      title: "Carbon Capture",
      description: "Capturing CO2 emissions directly from industrial processes and power plants.",
      icon: "🏭",
    },
    {
      id: 2,
      title: "Utilization",
      description: "Repurposing captured CO2 for use in manufacturing, fuels, and chemicals.",
      icon: "🔄",
    },                                                                                          
    {
      id: 3,
      title: "Storage",
      description: "Permanently storing CO2 deep underground in geological formations.",
      icon: "🪨", 
    },
    {
      id: 4,
      title: "Global Impact",
      description: "Reducing greenhouse gas emissions and mitigating climate change.",
      icon: "🌍",
    },
  ];

  const reasons = [
    "Significantly reduces CO2 emissions from heavy industries and power generation.",
    "Accelerates the transition to net-zero by offsetting hard-to-abate emissions.",
    "Enables continued use of fossil fuels with reduced environmental impact.",
    "Supports the development of new industries around CO2 utilization.",
    "Protects jobs and promotes sustainable economic growth in energy sectors."
  ];

  const hpclBenefits = [
    "Positioning as a leader in decarbonization technologies.",
    "Potential for revenue growth from CO2-derived products and services.",
    "Enhanced regulatory compliance and reduced carbon taxes.",
    "Strategic partnerships with global energy and industrial leaders.",
    "Contributing to national and international carbon neutrality goals."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-200 to-white p-8">
      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-6xl font-bold text-blue-900 mb-4 hover:scale-105 transition-transform">CCUS Technology</h1>
        <p className="text-xl text-blue-700 max-w-2xl mx-auto">
          Carbon capture, utilization, and storage for a sustainable future
        </p>
      </div>

      {/* Information Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {infoBoxes.map((box) => (
          <div
            key={box.id}
            className="bg-white shadow-xl rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="text-5xl mb-6 group-hover:animate-bounce">{box.icon}</div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{box.title}</h2>
            <p className="text-blue-700">{box.description}</p>
          </div>
        ))}
      </div>

      {/* Locations & Opportunities Section */}
      <div className="mt-16 bg-blue-50 rounded-xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">CCUS Potential and Opportunities</h2>
        <p className="text-blue-700 text-lg leading-relaxed">
          CCUS projects can be deployed in regions with high CO2 emissions, such as industrial zones and fossil fuel power plants. Ideal locations include areas with access to geological storage sites, offshore reservoirs, and depleted oil and gas fields. CCUS hubs create economic opportunities and drive regional decarbonization.
        </p>
        <div className="mt-8">
          <img
            src="/images/ccus.png"
            alt="CCUS Opportunities Map"
            className="w-1/2 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          />
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Additional Points:</h3>
          <ul className="space-y-3 text-blue-700 text-lg">
            <li className="flex items-center"><span className="mr-2">•</span>Enhances oil recovery through CO2 injection techniques.</li>
            <li className="flex items-center"><span className="mr-2">•</span>Facilitates the development of a circular carbon economy.</li>
            <li className="flex items-center"><span className="mr-2">•</span>Supports energy-intensive industries in meeting climate targets.</li>
            <li className="flex items-center"><span className="mr-2">•</span>Ensures long-term viability of energy infrastructure investments.</li>
          </ul>
        </div>

      {/* Why CCUS Is Necessary */}
      <div className="mt-16 bg-yellow-50 rounded-xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-yellow-900 mb-6">Why CCUS Is Essential</h2>
        <ul className="space-y-4 text-yellow-800 text-lg">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-center">
              <span className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white mr-4">{index + 1}</span>
              {reason}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <img
            src="/images/ccus2.jpg"
            alt="CCUS Pipeline"
            c className="w-3/4 rounded-xl hover:shadow-2xl transition-shadow"
          />
        </div>
      </div>

      {/* HPCL Benefits Section */}
      <div className="mt-16 bg-blue-50 rounded-xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Benefits for HPCL</h2>
        <ul className="space-y-4 text-blue-700 text-lg">
          {hpclBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">{index + 1}</span>
              {benefit}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default CCUSTechnology;