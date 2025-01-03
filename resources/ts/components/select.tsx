import React, { forwardRef, useEffect, useRef } from 'react';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: { value: string | number; label: string }[];
    isFocused?: boolean;
    hasError?: boolean;
    errorMessage?: string;
    label?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ options, className = '', isFocused = false, hasError = false, errorMessage, label, id, name, ...props }, ref) => {
        const localRef = useRef<HTMLSelectElement>(null);

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

                <select
                    id={id || name}
                    name={name}
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
                    {...props}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                {hasError && errorMessage && <span className='text-red-500 text-xs mt-1'>{errorMessage}</span>}
            </div>
        );
    }
);

Select.displayName = 'Select';

export default Select;
