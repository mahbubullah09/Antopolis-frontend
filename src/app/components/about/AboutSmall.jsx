


import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import foodimg from '../../assets/food.png';
import victor from '../../assets/Vector.png';

const AboutSmall = () => {




    return (
        <div className='mx-4 w-[90%] md:w-1/2 md:mx-auto flex flex-col justify-center my-6 space-y-10'>

            {/* Left Side */}

            <div >
                <h3 data-aos="fade-down" className="text-[#A52A2A] text-[16px] mb-2">About Us____ </h3>
                <h4 data-aos="fade-right" className="text-[30px] text-[#333333] font-bold mb-4">
                    Food is an important part Of a balanced Diet
                </h4>
                <div data-aos="fade-left">
                    <p className="text-[#4F4F4F] text-[14px] mb-6 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
                        bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat
                        pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus
                        sit eu velit in consequat.
                    </p>
                    <div className="flex justify-between space-x-4">
                        <button className="bg-[#A52A2A]  text-white px-4 text-[12px] py-1.5 rounded">Show more</button>
                        <button className="flex items-center text-gray-700 space-x-2">
                            <span className="bg-[#A52A2A]  text-white p-2 rounded-full hover:bg-green-700">
                                <Image src={victor} height={10} width={10} alt="image" />
                            </span>
                            <span className=" text-[14px]">Watch video</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div >
                <h2 data-aos="fade-down" className="text-[18px] font-semibold text-[#A52A2A] mb-4">Pizza Delivery</h2>
                <div data-aos="fade-right">
                    <h3 className="text-[30px] font-semibold text-[#231900] mb-4">Get Started Today!</h3>
                    <hr className="bg-[#A52A2A] h-1.5 rounded-xl w-[100px] mb-4" />
                </div>
                <div data-aos="fade-left">
                    <p className="text-[#231900] text-[16px] font-semibold mb-2">
                        Everything you need to build an amazing food restaurant responsive website.
                    </p>
                    <p className="text-[14px] font-normal text-[#231900] text-justify">
                        Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                        facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                        zzril delenit augue duis.
                    </p>

                </div>
                <div data-aos="fade-up" className="flex justify-between my-4 ">
                    <div className=" max-w-60 p-2 flex flex-col items-start space-x-4 mb-4 shadow-xl  rounded " >
                        <div className="text-red-700 text-3xl ml-2">
                            <Image src={foodimg} height={55} width={55} alt="image" />
                        </div>
                        <div>
                            <h4 className="font-bold text-[10px] ">Food Order</h4>
                            <p className="text-gray-600 text-[8px] mr-8 ">
                                Food is the necessity of life. It provides nutrition, sustenance, and growth to
                                human bodies.
                            </p>
                        </div>
                    </div>

                    <div className=" max-w-60 p-2 flex flex-col items-start space-x-4 mb-4 shadow-xl  rounded " >
                        <div className="text-red-700 text-3xl ml-2">
                            <Image src={foodimg} height={55} width={55} alt="image" />
                        </div>
                        <div>
                            <h4 className="font-bold text-[10px] ">Food Order</h4>
                            <p className="text-gray-600 text-[8px] mr-8 ">
                                Food is the necessity of life. It provides nutrition, sustenance, and growth to
                                human bodies.
                            </p>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default AboutSmall;
