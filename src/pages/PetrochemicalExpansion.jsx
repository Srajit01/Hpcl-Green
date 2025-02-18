import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { ArrowRight, TrendingUp, Shield, Battery } from 'lucide-react';

const petrochemicalDemandData = [
  { name: 'Polypropylene', demand: 120, forecast: 135 },
  { name: 'Acetic Acid', demand: 85, forecast: 95 },
  { name: 'Ethanol', demand: 150, forecast: 165 },
];

const safCostData = [
  { name: 'SAF Production', cost: 220 },
  { name: 'Traditional Jet Fuel', cost: 150 },
];

const greenEnergyROI = [
  { name: 'Solar Farm', roi: 15, investment: 100 },
  { name: 'Wind Farm', roi: 12, investment: 85 },
  { name: 'Hydrogen Plant', roi: 8, investment: 120 },
];

const greenFinancingMetrics = [
  { name: 'Green Bonds', value: 450, growth: 25 },
  { name: 'ESG Investments', value: 320, growth: 18 },
  { name: 'Carbon Credits', value: 280, growth: 15 },
];

const sustainableInitiatives = [
  {
    title: 'Green Bonds',
    description: 'Low-interest financing for sustainable projects',
    impact: '₹450 Cr raised'
  },
  {
    title: 'ESG Framework',
    description: 'Comprehensive sustainability metrics',
    impact: 'AA+ ESG Rating'
  },
  {
    title: 'Carbon Trading',
    description: 'Active participation in carbon markets',
    impact: '280K credits traded'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const PetrochemicalExpansion = () => {
  return (
    <div className="container mx-auto p-8 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <h1 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
          Petrochemical Expansion & Future Readiness
        </h1>

        <motion.section
          className="mb-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            As fuel demand shifts due to electric vehicles (EVs) and renewable energy, HPCL needs to diversify into
            petrochemicals. This page outlines our strategies and models for future readiness.
          </p>
        </motion.section>

        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold mr-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Petrochemical Demand Forecasting
            </h2>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1.5 rounded-full border border-green-200">
              AI-Powered
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            <strong>How it Works:</strong> AI-based forecasting models predict demand for petrochemicals,
            enabling refineries to optimize production and maximize profitability.
          </p>
          <div className="chart-container h-[400px] mb-8 p-4 bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={petrochemicalDemandData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#4b5563" />
                <YAxis stroke="#4b5563" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    padding: '0.5rem'
                  }}
                />
                <Legend />
                <Bar dataKey="demand" name="Current Demand" fill="#818cf8" />
                <Bar dataKey="forecast" name="Forecasted Demand" fill="#34d399" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Future-proofing against declining fuel demand',
              'Higher profit margins from petrochemical products',
              'Strategic shift towards non-fuel revenue sources'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ArrowRight className="h-5 w-5 text-emerald-500 mr-3" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold mr-4 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
            Sustainable Aviation Fuel (SAF) Expansion
            </h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200">
              Emerging Market
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            <strong>How it Works:</strong> SAF is produced from biomass and waste-based feedstocks,
            ensuring sustainability through carbon offsets and lifecycle assessments.
          </p>
          <div className="chart-container h-[400px] mb-8 p-4 bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={safCostData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#4b5563" />
                <YAxis stroke="#4b5563" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    padding: '0.5rem'
                  }}
                />
                <Legend />
                <Bar dataKey="cost" name="Production Cost (USD/barrel)" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Competitive advantage in emerging SAF markets',
              'Compliance with international carbon mandates',
              'Potential for export revenue'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ArrowRight className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold mr-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Bio-Ethanol from Bamboo
            </h2>
            <span className="bg-orange-100 text-orange-800 text-sm font-medium px-4 py-1.5 rounded-full border border-orange-200">
              Biofuel Initiative
            </span>
          </div>
          <div className="mb-8">
            <img
              src="/images/Bamboo.png"
              alt="Bamboo"
              className="rounded-xl shadow-lg w-96 max-w-2xl mx-auto object-cover "
            />
          </div>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            <strong>Model:</strong> Biomass-to-Ethanol Conversion Model
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            HPCL can focus on biofuel production using non-food biomass such as bamboo. This will reduce dependence on
            fossil fuels and support India's ethanol blending program.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            <strong>How it Works:</strong> Bamboo is converted into ethanol through a fermentation and distillation
            process. Byproducts like furan and acetic acid add economic value. The entire process is carbon-negative
            due to bamboo's natural carbon absorption.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Reduces carbon footprint',
              'Strengthens India\'s biofuel ecosystem',
              'Creates employment in rural areas'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ArrowRight className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12 bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-xl border border-gray-100"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold mr-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Green Financing Excellence
            </h2>
            <span className="bg-emerald-50 text-emerald-800 text-sm font-medium px-4 py-1.5 rounded-full border border-emerald-200">
              ESG Leader
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {sustainableInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{initiative.title}</h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="flex items-center text-emerald-600">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  <span className="font-medium">{initiative.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="chart-container h-[400px] mb-12 p-4 bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={greenFinancingMetrics}>
                <defs>
                  <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#4b5563" />
                <YAxis stroke="#4b5563" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    padding: '0.5rem'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#34d399"
                  fillOpacity={1}
                  fill="url(#greenGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Industry-leading ESG compliance',
              'Sustainable investment portfolio',
              'Green bond initiatives',
              'Carbon credit trading program',
              'Renewable energy investments',
              'Clean technology adoption'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ArrowRight className="h-5 w-5 text-emerald-500 mr-3" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default PetrochemicalExpansion;