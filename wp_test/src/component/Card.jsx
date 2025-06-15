import React from 'react'

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-8"> {/* Added gap-2 */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className="bg-green-800 rounded-md overflow-hidden w-52 mx-auto">
          <img
            src="post-img.png"
            className="w-full h-32 object-cover"
            alt="Sports footwear"
          />
          <div className="p-3 text-white">
            <h3 className="text-sm font-semibold uppercase leading-tight">
              2019 National Champions Crowned
            </h3>
            <p className="text-xs mt-1 leading-snug">
              Membership has its perks. Join ADIDAS and race at your local tracks.
            </p>
            <button className="mt-3 uppercase text-xs font-bold">Read More</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
