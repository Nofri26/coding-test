import React, { forwardRef, useEffect, useRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    isFocused?: boolean;
    hasError?: boolean;
    errorMessage?: string;
    label?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type = 'text', className = '', isFocused = false, hasError = false, errorMessage, label, id, name, ...props }, ref) => {
        const localRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            if (isFocused) {
                localRef.current?.focus();
            }
        }, [isFocused]);

        return (
            <div className='flex flex-col gap-1'>
                {label && (
                    <label htmlFor={id || name} className='text-sm font-medium text-gray-700'>
                        {label}
                    </label>
                )}

                <input
                    id={id || name}
                    name={name}
                    type={type}
                    className={`rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1
                        ${hasError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}
                        disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
                    ref={(node) => {
                        if (typeof ref === 'function') {
                            ref(node);
                        } else if (ref) {
                            ref.current = node;
                        }
                        localRef.current = node;
                    }}
                    {...props}
                />

                {hasError && errorMessage && <span className='text-red-500 text-xs mt-1'>{errorMessage}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
