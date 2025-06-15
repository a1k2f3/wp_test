import React from 'react'

const Event = () => {
  return (
    <div className="w-80 lg:w-64 bg-green-700 rounded-md overflow-hidden">
    <h2 className="bg-green-800 text-white uppercase font-bold p-3 text-center">
      Events
    </h2>
    <div className="p-2 space-y-2">
      {[
        { number: 1, title: "SHOW IN USA", location: "USA" },
        { number: 2, title: "ADIDAS SHOW IN USA", location: "USA" },
        { number: 3, title: "ADIDAS SHOW", location: "USA" },
        { number: 4, title: "ADIDAS IN USA", location: "USA" },
      ].map((event, index) => (
        <div
          key={index}
          className="flex items-center gap-3 flex-wrap bg-green-800/50 p-2 rounded-sm text-white"
        >
          <div className="bg-white text-green-800 w-8 h-8 flex items-center justify-center rounded-sm font-bold">
            {event.number}
          </div>
          <div className="text-white text-xs sm:text-center">
            <h3 className="text-sm font-bold">{event.title}</h3>
            <p className="text-xs">{event.location}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Event
