import React from "react";

const Hero = () => {
  return (
    <>
      <div className="md:flex items-center justify-between px-16 w-full">
        <div className="w-full pl-0 md:w-1/2 md:pl-24">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold">YOUR FEET <br /> DESERVE <br /> THE BEST</h1>
          <div className="w-full  float-left md:pl-3">
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
          
          <div className="flex items-center mt-3 gap-6 mb-8">

          <button className="bg-red-600 p-2 rounded-md border-2 border-gray-800 text-white font-bold">Shop Now</button>
          <button className="bg-white p-2  rounded-md border-2 border-gray-800 text-black font-bold">Category</button>
          </div>
          </div>
        <p>Also Available On</p>
      <div className="mt-6 flex items-center gap-7 ">
            <img src="./images/amazon.png" alt="" />
            <img src="./images/flipkart.png" alt="" />
       
      </div>
        </div>
        <div className="hidden md:block w-2/2 pt-4 mt-20">
            <img src="./images/hero-image.png" alt="" className="m md:mt-0 h-full w-auto "/>
        </div>
      </div>
    </>
  );
};

export default Hero;
