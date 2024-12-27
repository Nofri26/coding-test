import React, { forwardRef, useEffect, useRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    isFocused?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ type = 'text', className = '', isFocused = false, ...props }, ref) => {
    const localRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            type={type}
            className={`rounded-md border border-gray-300 bg-white px-3 py-2 text-sm 
                    focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500
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
    );
});

Input.displayName = 'Input';

export default Input;
