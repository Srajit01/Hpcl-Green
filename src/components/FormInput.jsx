/* eslint-disable react/prop-types */


const FormInput = ({ label, type, options, handleChange , value }) => {
  if (type === 'select') {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          {options.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
      onChange ={handleChange}
      value ={value}
        type={type}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
};

export default FormInput;