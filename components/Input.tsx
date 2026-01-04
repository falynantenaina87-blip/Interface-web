import React, { useState } from 'react';
import { InputProps } from '../types';

const Input: React.FC<InputProps> = ({ label, icon, className = '', ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full group">
      <label className={`text-sm font-medium transition-colors duration-300 ${isFocused ? 'text-burnt-orange' : 'text-white/60'}`}>
        {label}
      </label>
      <div className="relative">
        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-burnt-orange' : 'text-white/40'}`}>
          {icon}
        </div>
        <input
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            w-full bg-black/20 text-white placeholder-white/20
            py-4 pl-12 pr-4 rounded-2xl
            border-none outline-none ring-1 ring-white/5
            transition-all duration-300 ease-out
            focus:ring-2 focus:ring-burnt-orange/50 focus:bg-black/40
            ${className}
          `}
        />
      </div>
    </div>
  );
};

export default Input;