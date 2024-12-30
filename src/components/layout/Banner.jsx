import React from 'react';

export const Banner = ({ countdown }) => (
  <div className="fixed top-0 w-full bg-yellow-400 text-black py-2 text-center font-bold z-[1001]">
    This site is a work in progress to be completed in <span>{countdown}</span>
  </div>
);