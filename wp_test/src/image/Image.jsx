import React from 'react'

const Image = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div className="relative overflow-hidden">
        <img 
          src="hero-bg.png" 
          className="w-10 h-64 object-cover" 
          alt="Hero Background" 
        />
        <div className="absolute inset-0 bg-green-700 bg-opacity-80 clip-diagonal p-6 text-white">
          <h2 className="text-xl font-bold">2019 National Champions Crowned at Reebok</h2>
          <p className="text-sm mt-2">
            Membership has its perks. Joining ADIDAS means you can race at your local tracks.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <img 
          src="post-img.png" 
          className="w-full h-64 object-cover" 
          alt="Post Image" 
        />
        <div className="absolute inset-0 bg-green-700 bg-opacity-80 clip-diagonal p-6 text-white">
          <h2 className="text-xl font-bold">2019 National Champions Crowned at Reebok</h2>
          <p className="text-sm mt-2">
            Membership has its perks. Joining ADIDAS means you can race at your local tracks.
          </p>
        </div>
      </div>
    </div>
  )
}
  
export default Image
