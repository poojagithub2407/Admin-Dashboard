import React from 'react';
import Map from './Map';

const WorldMap = () => {
  return (
    <div className='border relative shadow-xl h-[60vh] -z-10 w-[71%] '>
      {/* Header section with fixed height */}
      <div className='px-6 py-4 border-b h-[90px]'>
        <h1 className='font-medium text-lg'>World Map</h1>
        <p className='text-gray-400 text-sm'>
          Map of the distribution of users around the world
        </p>
      </div>

      {/* Map section fills the rest */}
      <div className=' absolute '>
        <Map />
      </div>
    </div>
  );
};

export default WorldMap;
