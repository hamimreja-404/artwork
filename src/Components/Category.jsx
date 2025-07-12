import React from 'react'
import CategoryBox from './CategoryBox.jsx' 
import Category_1 from '../assets/Caregory_1.png'
import Category_2 from '../assets/Caregory_2.png';
import Category_3 from '../assets/Caregory_3.png';
import Category_4 from '../assets/Caregory_4.png';

export default function Category() {
  return (
    <>
      {/* Animated Heading */}
      <div id='category' data-aos="fade-down bg-[#f9fafb]">
        <p className='text-center font-extrabold text-7xl mt-10'>Category</p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-6">
        <div data-aos="zoom-in" data-aos-delay="0">
          <CategoryBox address={Category_1} text="Sketch" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="100">
          <CategoryBox address={Category_2} text="Portrait" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <CategoryBox address={Category_3} text="Religious" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <CategoryBox address={Category_4} text="Wall Art" />
        </div>
      </div>
    </>
  )
}
