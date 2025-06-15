import React from 'react';

const Image = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 gap-10">

      {/* Section 1 */}
      <div className="flex flex-row w-full max-w-6xl mx-auto overflow-hidden shadow-lg">
        {/* Image Section with Curve */}
        <div className="relative w-2/5 overflow-hidden ">
          <img
            src="/hero-bg.png"
            alt="hero bg"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center px-12 py-10 bg-green-500 w-3/5">
          <h1 className="text-white font-bold text-4xl mb-4 leading-snug">
            2019 National Championship Crowned at Reebok
          </h1>
          <p className="text-white text-lg">
            Membership has its perks. Joining Adidas means you are running on local tracks.
          </p>
        </div>
      </div>

      {/* Section 2 - Flipped */}
      <div className="flex flex-row-reverse w-full max-w-6xl mx-auto overflow-hidden shadow-lg">
        {/* Image Section with Curve */}
        <div className="relative w-2/5 overflow-hidden">
          <img
            src="/hero-bg.png"
            alt="hero bg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center px-12 py-10 bg-green-500 w-3/5">
          <h1 className="text-white font-bold text-4xl mb-4 leading-snug">
            2019 National Championship Crowned at Reebok
          </h1>
          <p className="text-white text-lg">
            Membership has its perks. Joining Adidas means you are running on local tracks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Image;
