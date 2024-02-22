import React from "react";

export const InputForm = (props) => {
  return (
    <input
      className="w-full px-4 py-3 mb-3 text-black bg-white border border-gray-200 rounded-xl appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
      required
      {...props}
    />
  );
};
