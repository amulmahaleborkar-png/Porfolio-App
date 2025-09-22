import React from "react";

export default function WorkSection() {
  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12 py-8 sm:py-12 bg-black">

      <div className="w-11/12 sm:w-10/12 lg:w-8/12 h-64 sm:h-80 lg:h-96 flex items-center justify-center bg-slate-200 text-white text-2xl sm:text-3xl lg:text-4xl font-bold rounded-2xl shadow-lg">
      <div>
        
      </div>
      <div className="flex">
        <a link className="text-3xl">Figma</a>
        <h1>Gaming App</h1>
        <p>Designed working prototype </p>
        <p className="text-2xl">Technologies Used: </p>
      </div>
      </div>

 <div className="max-w-sm w-full lg:max-w-full lg:flex">
      {/* Left Image Section */}
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: "url('/img/card-left.jpg')" }}
        title="Woman holding a mug"
      ></div>

      {/* Right Content Section */}
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem
            praesentium nihil.
          </p>
        </div>

        {/* Author Section */}
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/img/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>

      <div className="w-11/12 sm:w-10/12 lg:w-8/12 h-64 sm:h-80 lg:h-96 flex items-center justify-center bg-blue-600 text-white text-2xl sm:text-3xl lg:text-4xl font-bold rounded-2xl shadow-lg">
        Section 3
      </div>

      <div className="w-11/12 sm:w-10/12 lg:w-8/12 h-64 sm:h-80 lg:h-96 flex items-center justify-center bg-green-600 text-white text-2xl sm:text-3xl lg:text-4xl font-bold rounded-2xl shadow-lg">
        Section 4
      </div>
    </div>
  );
}
