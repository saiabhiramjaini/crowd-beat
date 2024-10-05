import React from 'react';

interface TextFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({ type, placeholder, value, onChange }: TextFieldProps) => {
  return (
    <div className="mb-4">
      {/* <label className="block text-primarygreen text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label> */}
      <input
        className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};