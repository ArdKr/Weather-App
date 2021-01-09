import React from "react";

const Input = ({
  placeholder = "",
  onChange,
  icon = undefined,
  value = "",
}) => {
  const Icon = () => {
    if (!icon) {
      return null;
    }

    return (
      <div className="absolute top-7 left-8 text-normal text-gray-darker">
        <i className={`fas fa-${icon}`}></i>
      </div>
    );
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="transition-all border border-transparent ring-gray-600 ring-2 focus:ring-gray focus:outline-none bg-transparent p-6 pl-20 text-gray-darker text-normal w-full"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />

      <Icon />
    </div>
  );
};

export default Input;
