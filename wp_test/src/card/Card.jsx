import React from 'react';

const Card = ({ img, heading, p }) => {
  return (
    <div className="flex flex-col w-[50px] h-[180px] text-black rounded-lg overflow-hidden shadow-lg">
      <img src={img} alt="" className=" object-cover" />
      <div className="bg-green-400 p-2">
        <h2 className="text-sm font-bold">{heading}</h2>
        <p className="text-xs">{p}</p>
        <button className="mt-2 py-1 text-xs bg-green-800/30 opacity-75 w-full">READ MORE</button>
      </div>
    </div>
  );
};

export default Card;
