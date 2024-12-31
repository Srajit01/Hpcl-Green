import DashboardBox from "../components/DashboardBox";
import { boxConfigs } from "../config/boxConfig";

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <nav className="bg-[#d0e6b5] py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-extrabold text-center text-black">HPCL GREEN</h1>
          <p className="text-xl text-center font-bold mt-4">HPCL's Comprehensive Green Energy Diversification Strategy</p>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="min-h-screen p-12 bg-gradient-to-br from-gray-900 to-gray-800"
        style={{
          backgroundImage: `url('images/hpmain.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-2xl font-bold text-black">
              Transforming Energy, Powering Tomorrow
            </p>
          </div>

          {/* Dashboard Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {boxConfigs.map((config) => (
              <DashboardBox key={config.id} config={config} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <p>HPCL Corporate Headquarters</p>
            <p>Email: srajitbhardwaj.com</p>
            <p>Phone: +91 7217489840</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a className="cursor-pointer">About Us</a></li>
              <li><a href="https://github.com/Srajit01/HPCL--Models-" className="hover:underline">Models</a></li>
              <li><a className="cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <p>Stay connected with us.</p>
            <div className="flex space-x-4 mt-4">
              <a href="" className="hover:text-gray-400"></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} HPCL Green. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
