import React from 'react';
import { ButtonProps } from '@/interfaces';

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'px-3 py-1 text-xs',
  medium: 'px-4 py-2 text-sm',
  large: 'px-6 py-3 text-base'
};

const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  shape = 'rounded-md',
  onClick,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} shadow hover:bg-blue-700 transition-colors`}
    >
      {label}
    </button>
  );
};

export default Button;
