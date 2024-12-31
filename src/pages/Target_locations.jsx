import React from "react";
import { MapPin, Battery, Briefcase, Leaf, ArrowRight } from 'lucide-react';

const Targetlocations = () => {
  const infoBoxes = [
    {
      id: 1,
      title: "Strategic Locations",
      description: "Identifying key areas across India for green energy projects, such as Rajasthan, Gujarat, Tamil Nadu, and Maharashtra.",
      icon: <MapPin className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Storage Challenges",
      description: "Overcoming issues related to CO2 storage, including geological suitability and long-term monitoring.",
      icon: <Battery className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Economic Benefits",
      description: "Creating job opportunities and fostering sustainable economic growth through green energy hubs.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-teal-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Environmental Impact",
      description: "Contributing to significant CO2 reductions and supporting India's net-zero goals.",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-lime-600"
    },
  ];

  const reasons = [
    "Provides a sustainable pathway for managing carbon emissions.",
    "Promotes the use of renewable energy while addressing energy storage issues.",
    "Supports regional decarbonization and climate resilience.",
    "Drives innovation in CO2 storage and utilization technologies.",
    "Creates opportunities for global partnerships and investments in clean energy."
  ];

  const hpclBenefits = [
    "Strengthens HPCL's position as a green energy leader.",
    "Facilitates compliance with international carbon reduction mandates.",
    "Unlocks potential for CO2-based industrial products.",
    "Reduces operational risks associated with carbon taxes and regulations.",
    "Boosts brand value as a sustainable energy enterprise."
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90 p-12"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay"></div>
        <div className="relative text-center px-6 max-w-5xl">
          <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
            Green Energy and Storage Solutions
          </h1>
          <p className="text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
            Transforming India's energy landscape with strategic locations and storage innovations.
          </p>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="container mx-auto px-6 -mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoBoxes.map((box) => (
            <div key={box.id} className="group cursor-pointer">
              <div className="h-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className={`bg-gradient-to-r ${box.color} p-8 text-white transform group-hover:scale-105 transition-all duration-500`}>
                  <div className="mb-6">{box.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{box.title}</h2>
                  <p className="opacity-90">{box.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-32">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Strategy Section */}
          <div className="p-12">
            <div className="flex items-center mb-12">
              <div className="w-16 h-1 bg-indigo-600 mr-6"></div>
              <h2 className="text-4xl font-bold text-slate-800">Strategic Locations</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Key regions like Rajasthan, Gujarat, Tamil Nadu, and Maharashtra are identified for their high solar and wind potential, along with proximity to storage-friendly geological formations.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-indigo-600 mr-4 mt-1" />
                    <p className="text-slate-600">Integrates renewable energy production with CO2 capture and storage solutions.</p>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-indigo-600 mr-4 mt-1" />
                    <p className="text-slate-600">Addresses local energy demands while reducing overall emissions.</p>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-indigo-600 mr-4 mt-1" />
                    <p className="text-slate-600">Encourages investment in renewable infrastructure.</p>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl transform rotate-3"></div>
                <img
                  src="/images/Map.png"
                  alt="Strategic Locations"
                  className="relative rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Storage Section */}
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-12">
            <div className="flex items-center mb-12">
              <div className="w-16 h-1 bg-purple-600 mr-6"></div>
              <h2 className="text-4xl font-bold text-slate-800">Storage Solutions</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold mr-6">
                      {index + 1}
                    </span>
                    <p className="text-slate-600 mt-1">{reason}</p>
                  </div>
                ))}
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform"></div>
                <img
                  src="/images/str.png"
                  alt="Storage Solutions"
                  className="relative rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="p-12">
            <div className="flex items-center mb-12">
              <div className="w-16 h-1 bg-indigo-600 mr-6"></div>
              <h2 className="text-4xl font-bold text-slate-800">HPCL Benefits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hpclBenefits.map((benefit, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-8 h-full transform hover:-translate-y-2 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold mb-6">
                      {index + 1}
                    </div>
                    <p className="text-slate-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Targetlocations;