"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import foodimg from '../../assets/food.png';
import victor from '../../assets/Vector.png';
import AboutSmall from './AboutSmall';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
   <div>
     <div className='hidden lg:block'>
      <div className="max-w-6xl mx-auto py-16 px-8 lg:px-16 flex items-center gap-8">
        {/* Left Side */}
        <div className="flex-1" data-aos="fade-right">
          <h2 className="text-[18px] font-bold text-[#A52A2A] mb-4">Pizza Delivery</h2>
          <h3 className="text-[55px] font-semibold text-[#231900] mb-4">Get Started Today!</h3>
          <hr className="bg-[#A52A2A] h-2 rounded-xl w-[175px] mb-4" />
          <p className="text-[#231900] text-[26px] font-semibold mb-2">
            Everything you need to build an amazing food restaurant responsive website.
          </p>
          <p className="text-[17px] font-normal text-[#231900]">
            Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
            zzril delenit augue duis.
          </p>

          <div className="flex justify-between my-4">
            <div className="flex flex-col items-start space-x-4 mb-4" >
              <div className="text-red-700 text-3xl ml-2">
                <Image src={foodimg} height={100} width={100} alt="image" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Food Order</h4>
                <p className="text-gray-600">
                  Food is the necessity of life. It provides nutrition, sustenance, and growth to
                  human bodies.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-x-4 mb-4" >
              <div className="text-red-700 text-3xl ml-2">
                <Image src={foodimg} height={100} width={100} alt="image" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Promote Restaurant</h4>
                <p className="text-gray-600">
                  Food can be classified into cereals, pulses, nuts and oilseeds, vegetable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1" data-aos="fade-left">
          <h3 className="text-[#A52A2A] text-[18px] mb-2">About Us____ </h3>
          <h4 className="text-[40px] text-[#333333] font-bold mb-4">
            Food is an important part Of a balanced Diet
          </h4>
          <p className="text-[#4F4F4F] text-[16px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
            pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus
            sit eu velit in consequat.
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#A52A2A] text-white px-8 py-2 rounded-md">Show more</button>
            <button className="flex items-center text-gray-700 space-x-2">
              <span className="bg-[#A52A2A] text-white p-4 rounded-full hover:bg-green-700">
                <Image src={victor} height={15} width={15} alt="image" />
              </span>
              <span className="font-bold">Watch video</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* small device  */}

    <div className='block lg:hidden'>
        <AboutSmall/>
    </div>
   </div>
  );
};

export default About;
