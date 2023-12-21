"use client"

import { useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicBreakfast = dynamic(() => import('./content/Breakfast'));
const DynamicBrunch = dynamic(() => import('./content/Brunch'));
const DynamicDinner = dynamic(() => import('./content/Dinner'));
const DynamicLunch = dynamic(() => import('./content/Lunch'));
import Navbar from "./navbar";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('dinner'); // Set default category

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 py-8">
      
      <div className="flex z-10 max-w-5xl w-full flex-col items-center justify-center font-mono text-sm">
        <Navbar onCategoryChange={handleCategoryChange} />
        <br />
        <div className={`transition-opacity duration-20000 ease-in-out ${selectedCategory === 'breakfast' ? 'opacity-100' : 'opacity-0'}`}>
          {selectedCategory === 'breakfast' && <DynamicBreakfast />}
        </div>
        <div className={`transition-opacity duration-20000 ease-in-out ${selectedCategory === 'brunch' ? 'opacity-100' : 'opacity-0'}`}>
          {selectedCategory === 'brunch' && <DynamicBrunch />}
        </div>
        <div className={`transition-opacity duration-20000 ease-in-out ${selectedCategory === 'lunch' ? 'opacity-100' : 'opacity-0'}`}>
          {selectedCategory === 'lunch' && <DynamicLunch />}
        </div>
        <div className={`transition-opacity duration-20000 ease-in-out ${selectedCategory === 'dinner' ? 'opacity-100' : 'opacity-0'}`}>
          {selectedCategory === 'dinner' && <DynamicDinner />}
        </div>
      </div>
    </main>
  );
}