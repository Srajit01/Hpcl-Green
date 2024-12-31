import React from "react";
import { MapPin, Battery, Wallet, Leaf, ChevronRight, BarChart, TrendingUp, Briefcase } from "lucide-react";

const CNGInfrastructure = () => {
  const infoBoxes = [
    {
      id: 1,
      title: "Network Coverage",
      description: "Expanding CNG infrastructure across key regions including major highways and urban centers.",
      icon: <MapPin className="w-6 h-6 text-white" />,
      bgClass: "from-indigo-500 to-purple-600",
    },
    {
      id: 2,
      title: "Storage Solutions",
      description: "Advanced compression and storage technologies ensuring consistent supply.",
      icon: <Battery className="w-6 h-6 text-white" />,
      bgClass: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Economic Value",
      description: "Cost-effective alternative delivering significant savings for fleet operators.",
      icon: <Wallet className="w-6 h-6 text-white" />,
      bgClass: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      title: "Sustainability Impact",
      description: "Reducing carbon footprint through clean fuel adoption and infrastructure.",
      icon: <Leaf className="w-6 h-6 text-white" />,
      bgClass: "from-green-500 to-emerald-500",
    },
  ];

  const growthPoints = [
    "Market expansion into tier 2 and tier 3 cities",
    "Integration with smart city initiatives",
    "Strategic partnerships with automotive manufacturers",
    "Development of green corridors on highways",
    "Technology upgrades for efficiency improvement",
  ];

  const additionalPoints = [
    "Real-time monitoring systems deployment",
    "Advanced safety protocols implementation",
    "Customer-centric service models",
    "Digital payment integration",
    "Predictive maintenance systems",
  ];

  const revenueGrowth = [
    "Increased revenue from CNG distribution across urban and rural areas.",
    "Partnerships with fleet operators and logistics companies.",
    "Revenue streams from maintenance and digital payment systems.",
    "Growing adoption of CNG vehicles driving consistent fuel demand.",
  ];

  const hpclGrowth = [
    "Strengthened presence as a sustainable energy leader.",
    "Boosting brand image with eco-friendly solutions.",
    "Alignment with government initiatives for carbon reduction.",
    "Driving innovation through advanced technologies.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            CNG Infrastructure Solutions
          </h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Transforming India's transportation landscape with strategic CNG infrastructure and innovative storage solutions.
          </p>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoBoxes.map((box) => (
            <div key={box.id} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${box.bgClass} rounded-2xl opacity-90 shadow-lg group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative p-8 h-full">
                <div className="bg-white/20 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                  {box.icon}
                </div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  {box.title}
                </h2>
                <p className="text-white/90 leading-relaxed">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Potential & Growth Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-8">
                Potential & Growth
              </h2>
              <div className="space-y-6">
                {growthPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-indigo-500/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/50 transition-colors">
                      <BarChart className="w-4 h-4 text-indigo-200" />
                    </div>
                    <p className="text-indigo-100 mt-1">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
              <img
                src="/images/cng.png"
                alt="CNG Infrastructure Growth"
                className="relative rounded-xl w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Points Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Implementation Features */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Implementation Features
            </h2>
            <div className="space-y-4">
              {additionalPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <ChevronRight className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  <p className="text-indigo-100">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Key Performance Indicators
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-indigo-200">
                  <span>Network Coverage</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-indigo-900 rounded-full">
                  <div className="h-2 bg-indigo-400 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-indigo-200">
                  <span>Storage Capacity</span>
                  <span>72%</span>
                </div>
                <div className="h-2 bg-indigo-900 rounded-full">
                  <div className="h-2 bg-indigo-400 rounded-full" style={{ width: '72%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-indigo-200">
                  <span>Customer Satisfaction</span>
                  <span>92%</span>
                </div>
                <div className="h-2 bg-indigo-900 rounded-full">
                  <div className="h-2 bg-indigo-400 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Growth Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Revenue Growth</h2>
          <div className="space-y-4">
            {revenueGrowth.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <TrendingUp className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <p className="text-indigo-100">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HPCL Growth Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">How This Will Help HPCL Grow</h2>
          <div className="space-y-4">
            {hpclGrowth.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <Briefcase className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <p className="text-indigo-100">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNGInfrastructure;
