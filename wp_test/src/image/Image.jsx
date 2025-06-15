import React from 'react';

const Image = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 ">
      
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="relative w-full md:w-2/5 overflow-hidden">
          <img
            src="/hero-bg.png"
            alt="hero bg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-8 md:py-10 bg-green-500 w-full md:w-3/5">
          <h1 className="text-white font-bold text-3xl md:text-4xl mb-4 leading-snug">
            2019 National Championship Crowned at Reebok
          </h1>
          <p className="text-white text-base md:text-lg">
            Membership has its perks. Joining Adidas means you are running on local tracks.
          </p>
        </div>
      </div>

      {/* Section 2 - Reversed on large, stacked on mobile */}
      <div className="flex flex-col md:flex-row-reverse w-full max-w-6xl mx-auto overflow-hidden shadow-lg">
        {/* Image Section */}
        <div className="relative w-full md:w-2/5 overflow-hidden">
          <img
            src="/zig-zag-img-2.png"
            alt="hero bg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-8 md:py-10 bg-green-500 w-full md:w-3/5">
          <h1 className="text-white font-bold text-3xl md:text-4xl mb-4 leading-snug">
            2019 National Championship Crowned at Reebok
          </h1>
          <p className="text-white text-base md:text-lg">
            Membership has its perks. Joining Adidas means you are running on local tracks.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Image;
