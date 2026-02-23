
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-sm transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-[#00f2ff] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]",
    secondary: "bg-[#0066cc] text-white hover:bg-[#0088ff]",
    outline: "border border-[#00f2ff] text-[#00f2ff] hover:bg-[#00f2ff] hover:text-black"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
