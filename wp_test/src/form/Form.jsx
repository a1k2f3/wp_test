import React from 'react';
import { useState } from 'react';
const Form = () => {
  
  return (
    <div className="w-full h-80% flex flex-col lg:flex-col    items-center justify-center p-10 bg-green-600/50">  
    <h1 className='text-3xl font-bold text-white mb-10'>GET IN TOUCH WITH  US</h1>
      <form action="submit" className="space-y-6 w-full max-w-md ">
        {/* Row 1: Name & Email */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="name" className="text-white">NAME</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="p-1 mt-2 text-md border rounded bg-white text-black placeholder-gray-200 "
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="email" className="text-white">EMAIL</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-1 mt-2 text-md border rounded  bg-white text-black placeholder-gray-200"
            />
          </div>
        </div>

        {/* Row 2: Country & State */}
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="country" className="mb-1 font-semibold text-white">Country</label>
            <select
              id="country"
              className="border border-gray-300 rounded px-2 py-1 bg-white text-black"
            >
              <option value="Pakistan">Pakistan</option>
              <option value="Austrailia">Austraila</option>
              <option value="India">India</option>
              <option value="Banladesh">Banladesh</option>
            </select>
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="state" className="mb-1 font-semibold text-white">State</label>
            <select
              id="state"
              className="border bg-white text-black border-gray-300 rounded px-2 py-1"
            >
              <option value="punjab" className='text-black'>Punjab</option>
              <option value="sindh" className='text-black'>Sindh</option>
              <option value="sindh" className='text-black'>Sindh</option>
              <option value="baloch" className='text-black'>Baloch</option>
              <option value="kpk" className='text-black'>KPK</option>
            </select>
          </div>
        </div>
        {/* Row 3: Gender */}
        <div className="flex flex-col">
          <label htmlFor="gender" className="text-2xl font-bold text-white">Gender</label>
          <div id="gender" className="flex gap-4 mt-2">
            <label htmlFor="male" className="flex items-center gap-1 text-white">
              <input type="radio" id="male" name="gender" value="male" />
              Male
            </label>
            <label htmlFor="female" className="flex items-center gap-1 text-white">
              <input type="radio" id="female" name="gender" value="female" />
              Female
            </label>
            <label htmlFor="other" className="flex items-center gap-1 text-white">
              <input type="radio" id="other" name="gender" value="other" />
              Other
            </label>
          </div>
        </div>

        {/* Row 4: Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-bold text-white">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="outline-none border border-gray-300 rounded p-2 mt-2 bg-white text-white placeholder-gray-200"
          ></textarea>
        </div>  

        {/* Row 5: Submit Button */}
          <div className="flex justify-center"> 
          <button type="submit" className="px-4 py-2 bg-green-500 text-white font-bold rounded">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
