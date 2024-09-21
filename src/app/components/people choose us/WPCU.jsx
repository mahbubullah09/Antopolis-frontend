import Image from "next/image";
import wpcu from "../../assets/wpcu.png"
import bike from "../../assets/bike.png"
import menu from "../../assets/menu.png"
import burger from "../../assets/burger.png"
import WPCUSmall from "./WPCUSmall";


const WPCU = () => {
    return (
        <div>
            <div className='hidden lg:block'>
                <div className="max-w-6xl mx-auto  px-8 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10  my-8">

                    {/* Left Side - Image */}
                    <div data-aos="fade-right" className="w-full md:w-1/2">
                        <Image className='rounded-2xl' src={wpcu} height={450} width={450} alt="image" />

                    </div>

                    {/* Right Side - Content */}
                    <div data-aos="fade-left" className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-[40px] font-bold text-[#2D2D2D]">Why People Choose us?</h2>

                        {/* Feature 1 */}
                        <div className="flex items-center space-x-4">
                            <Image src={bike} height={100} width={100} alt="image" />

                            <div>
                                <h3 className="text-[26px] font-semibold text-black">Convenient and Reliable</h3>
                                <p className="text-[#404040] text-[16px]">
                                    Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center space-x-4">
                            <Image src={menu} height={100} width={100} alt="image" />

                            <div>
                                <h3 className="text-[26px] font-semibold text-black">Convenient and Reliable</h3>
                                <p className="text-[#404040] text-[16px]">
                                    From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.
                                </p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex items-center space-x-4">
                            <Image src={burger} height={100} width={100} alt="image" />

                            <div>
                                <h3 className="text-[26px] font-semibold text-black">Convenient and Reliable</h3>
                                <p className="text-[#404040] text-[16px]">
                                    Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* small device  */}

            <div className=' block lg:hidden'>

                <WPCUSmall/>

            </div>
        </div>
    );
};

export default WPCU;