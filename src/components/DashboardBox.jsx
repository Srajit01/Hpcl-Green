/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const DashboardBox = ({ config }) => {
  const navigate = useNavigate();
   const Icon = config.icon;

  const handleClick = () => {
    navigate(config.path);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#38BDF8] p-8 rounded-2xl rouned-icon shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white group "
      style={{ width: "101%" }}
    >
      <div className="flex flex-col items-center text-black group-hover:text-black">
        
        <div className=" ">
          <Icon size={48} className="bg-white p-2 rounded- mb-4" />
         
        </div>
        <h3 className="text-2xl font-bold mb-2">{config.title}</h3>
        <p className="text-center text-bold text-sm opacity-90">{config.description}</p>
      </div>
    </div>
  );
};

export default DashboardBox;
