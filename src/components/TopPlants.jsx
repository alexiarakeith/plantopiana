import React, { useState } from 'react';
import Image from 'next/image'; // Import Image component

export default function TopPlants({ title, icon, months, defaultMonth, plantLists }) {
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const topPlantsList = plantLists[selectedMonth] || { images: [], plants: [] };

  return (
    <div className='card max-w-[50rem] max-h-[43rem] min-w-[50rem] min-h-[43rem] bg-base-200 shadow-xl'>
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
          {topPlantsList.images.length > 0 ? (
            <ul className='space-y-5 mt-10'>
              {topPlantsList.images.map((image, index) => (
                <div
                  key={index}
                  className='bg-white p-3 rounded shadow-md'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ marginRight: '16px', marginLeft: '16px' }}>
                    <Image src={image} width={80} height={80} />
                  </div>
                  <p
                    style={{
                      flex: '1',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                  >
                    {topPlantsList.plants[index]}
                  </p>
                </div>
              ))}
            </ul>
          ) : (
            
            <p style={{ fontSize: '25px', fontWeight: 'bold', fontStyle: 'italic', color: 'black', marginTop: '250px'}}>
              No plants available</p>
          )}
        </div>
      </div>
    </div>
  );
}
