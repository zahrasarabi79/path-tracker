import React from 'react';

const NavigationButton = () => {
  return (
    <section className='flex items-center justify-around p-1'>
      <button className='bg-blue-800 p-2 rounded'>start new</button>
      <button className='bg-blue-800 p-2 rounded'>show location log</button>
      <button className='bg-blue-800 p-2 rounded'>show last route</button>
    </section>
  );
};

export default NavigationButton;
