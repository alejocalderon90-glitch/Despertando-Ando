
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
    primary: "bg-[#d4af37] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
    secondary: "bg-[#1e3a8a] text-white hover:bg-[#2563eb]",
    outline: "border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
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
