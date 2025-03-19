import React, { ChangeEvent } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type: 'text' | 'textarea' | 'file';
  register: any;
  error?: any;
};

const InputField = <T extends FieldValues>({
  label,
  name,
  type,
  register,
  error,
}: InputFieldProps<T>) => {
  if (type === 'textarea') {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
          {label}
        </label>
        <textarea
          id={name}
          {...register}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }

  if (type === 'file') {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
          {label}
        </label>
        <input
          type="file"
          id={name}
          {...register}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <input
        type="text"
        id={name}
        {...register}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
