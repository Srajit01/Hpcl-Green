/* eslint-disable react/prop-types */


const UpperBox = ({ config }) => {
  return (
    <div>
      <div
        className="bg-[#2f4899] bg-opacity-80 p-2 rounded-3xl shadow-lg  transform transition-all duration-300 "
        style={{ width: "101%" }}
      >
        <div className="flex flex-col items-center text-gray-300">
          {config.icon && <config.icon size={48} />}
          <h3 className="text-2xl font-bold mb-2">{config.title}</h3>
          <p className="text-center text-sm opacity-90">{config.description}</p>
          <p className={config.color}>{config.type}</p>
        </div>
      </div>
    </div>
  );
};

export default UpperBox;
