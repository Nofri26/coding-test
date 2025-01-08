import React from 'react';
import Select from 'react-select';

type ReactSelectProps = {
    options: { label: string; value: string }[];
    placeholder?: string;
    label?: string;
    hasError?: boolean;
    errorMessage?: string;
    className?: string;
    instanceId?: string; // Untuk membedakan select
    value?: any;
    onChange?: (selected: any) => void;
    onBlur?: () => void;
};

const ReactSelect: React.FC<ReactSelectProps> = ({
    options,
    placeholder,
    label,
    hasError = false,
    errorMessage,
    className = '',
    instanceId,
    value,
    onChange,
    onBlur,
    ...props
}) => {
    const selectStyle = {
        control: (provided: any, state: any): any => ({
            ...provided,
            borderRadius: '0.375rem', // Tailwind: rounded-md
            fontSize: '0.875rem', // Tailwind: text-sm
            borderColor: hasError ? 'rgb(239 68 68)' : 'rgb(209 213 219)', // Tailwind: border-red-500 or border-gray-300
            boxShadow: state.isFocused
                ? hasError
                    ? '0 0 0 1px rgb(239 68 68)' // Tailwind: focus:ring-red-500
                    : '0 0 0 1px rgb(79 70 229)' // Tailwind: focus:ring-indigo-500
                : undefined,
            '&:hover': {
                borderColor: hasError ? 'rgb(239 68 68)' : 'rgb(156 163 175)', // Tailwind: border-red-500 or border-gray-400
            },
            outline: 'none',
        }),
        menu: (provided: any): any => ({
            ...provided,
            borderRadius: '0.375rem', // Tailwind: rounded-md
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Tailwind-like shadow
        }),
        option: (provided: any, state: any): any => ({
            ...provided,
            backgroundColor: state.isSelected
                ? 'rgb(79 70 229)' // Tailwind: bg-indigo-500
                : state.isFocused
                  ? 'rgb(199 210 254)' // Tailwind: bg-indigo-100
                  : 'white',
            color: state.isSelected ? 'white' : 'black',
            textAlign: 'left',
        }),
    };

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && <label className='text-sm font-medium text-gray-700'>{label}</label>}
            <Select
                options={options}
                placeholder={placeholder || 'Select an option'}
                styles={selectStyle}
                classNamePrefix='react-select'
                instanceId={instanceId} // Menambahkan instanceId
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
            />
            {hasError && errorMessage && <span className='text-red-500 text-xs mt-1'>{errorMessage}</span>}
        </div>
    );
};

export default ReactSelect;
