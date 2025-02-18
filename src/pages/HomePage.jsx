import React from 'react';
import DashboardBox from "../components/DashboardBox";
import { boxConfigs } from "../config/boxConfig";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <nav className="bg-[#d0e6b5] py-6 shadow-md">
        <div className="max-w-full mx-auto px-4 flex items-center justify-center"> 
          <div className="flex items-center justify-center">
            <img src="/images/hp.jpg" alt="HPCL Logo" className="h-12 mr-4" />
            <div className="leading-tight">
              <h1 className="text-3xl font-extrabold text-left text-black text-center">HPCL GREEN</h1> {/*Text also center to follow theme*/}
              <p className="text-lg font-semibold text-left text-gray-700 text-center">HPCL's Comprehensive Green Energy Diversification Strategy</p> {/* Same thing as above */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative overflow-hidden pt-24 pb-32"
        style={{
          backgroundImage: `url('images/hpmain.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 'calc(100vh - 120px)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent opacity-30"></div>

        <div className="relative max-w-full mx-auto px-8 text-center ">
          <h2 className="text-4xl font-bold text-white mb-4 shadow-text">Transforming Energy, Powering Tomorrow</h2>
          <p className="text-xl text-gray-200 mb-8">Driving a Sustainable Future Through Green Innovations</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boxConfigs.map((config) => (
              <DashboardBox key={config.id} config={config} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>HPCL Corporate Headquarters</p>
            <p className="mt-1">Email: srajitbhardwaj.com</p>
            <p>Phone: +91 7217489840</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li><Link to="/" className="hover:text-gray-100">Home</Link></li>
              <li><a href="#" className="hover:text-gray-100">About Us</a></li>
              <li><a href="https://github.com/Srajit01/HPCL--Models-" className="hover:text-gray-100">Models</a></li>
              <li><a href="#" className="hover:text-gray-100">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <p>Stay connected with us.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400"></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          <p>© {new Date().getFullYear()} HPCL Green. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;