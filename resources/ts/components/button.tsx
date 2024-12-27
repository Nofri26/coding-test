import React, { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: string;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
    children: ReactNode;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ type = 'button', variant = 'primary', className, children, disabled = false, ...rest }) => {
    const variantClasses = {
        primary:
            'bg-gray-900 text-white hover:bg-gray-700 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 active:bg-gray-700',
        secondary:
            'bg-slate-500 text-white hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 active:bg-slate-600',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 active:bg-red-700',
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(
                'px-4 py-2 text-xs inline-flex justify-center items-center tracking-widest rounded-md border border-transparent font-semibold uppercase transition duration-150 ease-in-out',
                disabled && 'opacity-50',
                variantClasses[variant],
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
