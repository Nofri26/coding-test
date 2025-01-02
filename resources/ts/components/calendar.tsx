import React, { useState } from 'react';

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    const changeMonth = (direction: number) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + direction);
        setCurrentDate(newDate);
    };

    const getWeekDates = () => {
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

        return Array.from({ length: 7 }, (_, i) => {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            return date;
        });
    };

    const weekDates = getWeekDates();

    return (
        <div className='bg-slate-900 text-white rounded-lg p-4 max-w-xs mx-auto'>
            <div className='flex justify-between items-center mb-4'>
                <button onClick={() => changeMonth(-1)} className='text-xl font-bold px-2'>
                    &lt;
                </button>
                <span className='text-lg font-semibold'>
                    {month} {year}
                </span>
                <button onClick={() => changeMonth(1)} className='text-xl font-bold px-2'>
                    &gt;
                </button>
            </div>

            <div className='grid grid-cols-7 gap-2'>
                {weekDates.map((date, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center p-2 rounded-lg ${
                            date.toDateString() === new Date().toDateString() ? 'bg-white text-slate-900' : 'bg-slate-800'
                        }`}>
                        <span className='text-sm font-bold'>{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                        <span className='text-lg'>{date.getDate()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
