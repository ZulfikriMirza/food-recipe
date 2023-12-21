import React from 'react';

export default function Navbar({ onCategoryChange }) {
  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="relative justify-center items-center w-[480px] h-[20px]">
      <div className="fixed rounded-full bg-white px-5 py-2">
        <nav className='flex overflow-hidden items-center justify-center flex-row font-bold font-serif text-lg text-black gap-16 '>
          <div className="transition-all hover:text-white hover:bg-sky-500 hover:delay-25 active:bg-sky-400 p-1 rounded-lg focus:outline-none focus:ring focus:ring-violet-300">
            <button onClick={() => handleCategoryChange('breakfast')}>Breakfast</button>
          </div>
          <div className="transition-all hover:text-white hover:bg-sky-500 hover:delay-25 active:bg-sky-400 p-1 rounded-lg focus:outline-none focus:ring focus:ring-violet-300">
            <button onClick={() => handleCategoryChange('brunch')}>Brunch</button>
          </div>
          <div className="transition-all hover:text-white hover:bg-sky-500 hover:delay-25 active:bg-sky-400 p-1 rounded-lg focus:outline-none focus:ring focus:ring-violet-300">
            <button onClick={() => handleCategoryChange('lunch')}>Lunch</button>
          </div>
          <div className="transition-all hover:text-white hover:bg-sky-500 hover:delay-25 active:bg-sky-400 p-1 rounded-lg focus:outline-none focus:ring focus:ring-violet-300">
            <button onClick={() => handleCategoryChange('dinner')}>Dinner</button>
          </div>
        </nav>
      </div>
    </div>
  );
}