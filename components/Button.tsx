import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', isLoading, className = '', ...props }) => {
  if (variant === 'ghost') {
    return (
      <button 
        className={`text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`
        relative w-full py-4 rounded-xl font-bold text-white tracking-wide
        bg-gradient-to-r from-sunset-start to-sunset-end
        shadow-[0_4px_15px_rgba(0,0,0,0.2)]
        hover:shadow-[0_0_25px_rgba(255,140,66,0.6)]
        active:scale-[0.98]
        transition-all duration-300 ease-out
        overflow-hidden group
        disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
      disabled={isLoading || props.disabled}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : children}
      </span>
      
      {/* Shine effect overlay */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
    </button>
  );
};

export default Button;