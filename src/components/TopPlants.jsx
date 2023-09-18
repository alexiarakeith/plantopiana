import React, { useState } from 'react';

export default function TopPlants({ title, icon, months, defaultMonth, plantLists }) {
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const topPlantsList = plantLists[selectedMonth] || []; // Filter by selected month

  return (
    <div className='card max-w-[30rem] max-h-[20rem] min-w-[30rem] min-h-[20rem] bg-base-200 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title flex justify-center text-emerald-600 uppercase'>
          {icon} {title}
        </h2>
        <div className='text-black text-center mt-3'>
          <div className='relative inline-block w-full'>
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className='appearance-none block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              {/* Add a dropdown icon, for example, a down arrow */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          <ul className='space-y-3 mt-3'>
            {topPlantsList.map((plant, index) => (
              <li key={index}>{plant}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
